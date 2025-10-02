from pandas import DataFrame


def normalize_data(df: DataFrame) -> DataFrame:
    df["member_email"] = df["member_email"].str.strip().str.lower()
    df["book_title"] = df["book_title"].str.strip().str.lower()
    df["fee_usd"] = df["fee_usd"].str.strip().str.lower()
    df["branch"] = df["branch"].str.strip().str.lower()
    df["status"] = df["status"].str.strip().str.lower()
    df["waived_fee"] = df["waived_fee"].str.strip().str.lower()
    df["checkout_date"] = df["checkout_date"].str.strip().str.lower()
    return df
