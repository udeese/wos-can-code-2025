import pandas as pd
from pandas import DataFrame

from utilities import (
    coerce_types,
    dedupe,
    drop_rows,
    fill_values,
    normalize_data,
    rename_columns,
)

# Constants
LIBRARY_CSV_FILEPATH = "./data/demo-library.csv"
OUTPUT_FILEPATH = "./data/report.csv"
NA_VALUES = [" ", "", "N/A", "NA", "n/a", "NULL", "null"]


def extract(filepath: str) -> DataFrame | None:
    try:
        df = pd.read_csv(
            filepath, na_values=NA_VALUES, skipinitialspace=True, on_bad_lines="error"
        )
        return df
    except FileNotFoundError as e:
        print(f"Error: file not found: {e.filename}")
    except Exception as e:
        print(f"Error: error loading file: {e}")


def transform(df: DataFrame) -> DataFrame:
    df = rename_columns(df)
    df = normalize_data(df)
    df = dedupe(df)
    df = drop_rows(df)
    df = fill_values(df)
    df = coerce_types(df)
    print(df.head(n=30))

    return df


def load(df: DataFrame) -> None:
    mask = (
        (df["status"] == "returned")
        & (df["branch"] == "east")
        & (pd.to_numeric(df["fee_usd"]) > 0)
    )

    filtered_df = df[mask]
    filtered_df.to_csv(OUTPUT_FILEPATH, index=False, encoding="utf-8")


def main():
    df = extract(LIBRARY_CSV_FILEPATH)

    if df is None:
        return

    df = transform(df)
    df.info()
    load(df)


if __name__ == "__main__":
    main()
