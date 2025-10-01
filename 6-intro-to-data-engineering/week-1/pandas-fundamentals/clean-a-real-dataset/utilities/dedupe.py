from pandas import DataFrame


def dedupe(df: DataFrame) -> DataFrame:
    df = df.drop_duplicates(subset=["record_id"], keep="first")
    return df
