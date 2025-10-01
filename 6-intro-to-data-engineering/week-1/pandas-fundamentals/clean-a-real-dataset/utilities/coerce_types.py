from pandas import DataFrame
import pandas as pd


def coerce_types(df: DataFrame) -> DataFrame:
    df["fee_usd"] = pd.to_numeric(df["fee_usd"], downcast="float", errors="coerce")
    df["waived_fee"] = pd.to_numeric(
        df["waived_fee"], downcast="float", errors="coerce"
    )
    df["checkout_date"] = pd.to_datetime(df["checkout_date"], errors="coerce")
    return df
