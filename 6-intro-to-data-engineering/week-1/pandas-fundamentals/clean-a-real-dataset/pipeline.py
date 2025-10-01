import pandas as pd
from pandas import DataFrame

from utilities import dedupe, drop_rows, normalize_data, rename_columns

# Constants
LIBRARY_CSV_FILEPATH = "./data/demo-library.csv"
NA_VALUES = [" ", "", "N/A", "NA", "NULL", "null"]


def extract(filepath: str) -> DataFrame | None:
    try:
        df = pd.read_csv(filepath, na_values=NA_VALUES)
        return df
    except FileNotFoundError as e:
        print(f"Error: file not found: {e.filename}")
    except Exception as e:
        print(f"Error: error loading file: {e}")


def transform(df: DataFrame) -> DataFrame:
    df = rename_columns(df)
    df = normalize_data(df)
    df = dedupe(df)

    print(df.head(n=30))
    df = drop_rows(df)
    print(df.head(n=20))

    return df


def load():
    pass


def main():
    df = extract(LIBRARY_CSV_FILEPATH)

    if df is None:
        return

    df = transform(df)
    df.info()


if __name__ == "__main__":
    main()
