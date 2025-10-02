from pandas import DataFrame
import pandas as pd

# Constants
NA_VALUES = ["na", "null", "NaN", "nan", "n/a"]


def fill_values(df: DataFrame) -> DataFrame:
    df["waived_fee"] = (
        df["waived_fee"].astype(str).str.strip().replace(NA_VALUES, pd.NA)
    )
    df["waived_fee"] = df["waived_fee"].fillna(0.0)
    return df
