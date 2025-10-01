from pandas import DataFrame


def drop_rows(df: DataFrame) -> DataFrame:
    df = df.dropna(subset=["fee_usd"])
    return df
