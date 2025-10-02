import pandas as pd
from pandas import DataFrame

# Constants
NA_VALUES = ["", "n/a", "na", "nan", "null"]  # keep lowercase only


def drop_rows(df: DataFrame) -> DataFrame:
    # Normalize fee_usd values: strip spaces, lowercase, and convert to NaN if in NA_VALUES

    df["fee_usd"] = (
        df["fee_usd"].astype(str).str.strip().str.lower().replace(NA_VALUES, pd.NA)
    )

    df = df.dropna(subset=["fee_usd"]).copy()
    print("unique fee_usd raw:", df["fee_usd"].unique()[:20])
    print("isna count:", df["fee_usd"].isna().sum())
    return df
