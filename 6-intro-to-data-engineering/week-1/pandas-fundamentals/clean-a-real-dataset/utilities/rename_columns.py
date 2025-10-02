from pandas import DataFrame

NAME_MAP = {
    "RecordID": "record_id",
    "Member_Email": "member_email",
    "Book_Title": "book_title",
    "Fee ($)": "fee_usd",
    "Branch": "branch",
    "Status": "status",
    "Waived_Fee": "waived_fee",
    "Checkout_Date": "checkout_date",
}


def rename_columns(df: DataFrame) -> DataFrame:
    df.columns = df.columns.str.strip()
    df.rename(columns=NAME_MAP, inplace=True)
    return df
