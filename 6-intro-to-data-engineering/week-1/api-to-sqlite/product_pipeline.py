from typing import List
from pandas import DataFrame

import pandas as pd
import requests
from requests.exceptions import HTTPError

from utilities import camel_to_snake
import sqlite3

from dotenv import load_dotenv
from os import environ

load_dotenv()
print(environ.get("TEST"))

# Constants
PRODUCTS_ENDPOINT = "https://dummyjson.com/products"
DB_PATH = "products.db"
TABLE_NAME = "products"


def extract(endpoint) -> List[dict] | None:
    """Fetches data from the API and returns the list of products (the 'products' key)."""
    try:
        response = requests.get(endpoint)
        response.raise_for_status()
        return response.json()["products"]
    except HTTPError as e:
        print(f"Error: {e.response.status_code}")
    except Exception as e:
        print(f"Error: {e}")


def transform(product_list: List[dict], lists: List[str]) -> DataFrame:
    """Flattens the product list and selects/cleans key fields."""

    for product in product_list:
        if "brand" not in product:
            product["brand"] = "Unknown"

        rating = product.pop("rating")
        product["product_rating"] = rating

    df = pd.json_normalize(
        product_list,
        record_path="reviews",
        meta=[
            "availabilityStatus",
            "brand",
            "category",
            "description",
            ["dimensions", "depth"],
            ["dimensions", "height"],
            ["dimensions", "width"],
            "discountPercentage",
            "id",
            "images",
            ["meta", "barcode"],
            ["meta", "createdAt"],
            ["meta", "qrCode"],
            ["meta", "updatedAt"],
            "minimumOrderQuantity",
            "price",
            "product_rating",
            "returnPolicy",
            "shippingInformation",
            "sku",
            "stock",
            "tags",
            "thumbnail",
            "title",
            "warrantyInformation",
            "weight",
        ],
        sep="_",
    )

    for lst in lists:
        df[lst] = df[lst].str.join(", ")

    df.columns = [camel_to_snake(col) for col in df.columns]
    return df


def load(df: DataFrame) -> None:
    """Loads the final DataFrame into a SQLite database table."""

    with sqlite3.connect(DB_PATH) as conn:
        df.to_sql(TABLE_NAME, conn, if_exists="replace", index=False)

    print(f"Loaded {len(df)} product reviews into {DB_PATH}:{TABLE_NAME}")


def main():
    products = extract(PRODUCTS_ENDPOINT)

    if products is None:
        print("Aborting... products is None.")
        return

    df = transform(products, ["tags", "images"])
    print(df.head())

    load(df)


if __name__ == "__main__":
    main()
