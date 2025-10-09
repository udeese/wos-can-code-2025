import pandas as pd
from utilities.transform import (
    compute_and_fill_discounted_total,
    drop_invalid_rows,
    reorder_columns,
)


def test_drop_invalid_rows_removes_missing_rows():
    """removes rows missing required fields like id, price, or quantity"""
    # Arrange
    df = pd.DataFrame(
        [
            {"id": 1, "price": 10, "quantity": 2},
            {"id": None, "price": 8, "quantity": 1},
            {"id": 3, "price": None, "quantity": 4},
            {"id": 4, "price": 5, "quantity": None},
        ]
    )

    # Act
    result = drop_invalid_rows(df.copy())

    # Assert
    assert len(result) == 1


def test_compute_and_fill_discounted_total_rounds_to_two_decimals():
    """rounds discounted_total column to two decimals"""

    # Arrange
    df = pd.DataFrame(
        [
            {
                "id": 1,
                "price": 100,
                "quantity": 1,
                "total": 100,
                "discount_percentage": 12.3456,
            },
        ]
    )

    # Act
    result = compute_and_fill_discounted_total(df)

    # Assert
    assert result.at[0, "discounted_total"] == 87.65


def test_reorder_columns_preferred_first_and_preserve_others():
    """ensures preferred columns appear first and all other columns retain original order"""
    # Arrange: shuffle the columns and include a couple of extras
    original_cols = [
        "foo",  # extra column (not preferred)
        "quantity",
        "title",
        "user_id",
        "discount_percentage",
        "id",
        "price",
        "cart_id",
        "discounted_total",
        "bar",  # another extra column
        "total",
    ]
    df = pd.DataFrame([[1] * len(original_cols)], columns=original_cols)

    # Act
    out = reorder_columns(df.copy())

    # Assert: preferred block is first and exact
    expected_preferred = [
        "cart_id",
        "user_id",
        "id",
        "title",
        "price",
        "quantity",
        "total",
        "discount_percentage",
        "discounted_total",
    ]
    assert list(out.columns[: len(expected_preferred)]) == expected_preferred

    # Assert: all non-preferred columns follow in their original order
    expected_others = [c for c in original_cols if c not in expected_preferred]
    assert list(out.columns[len(expected_preferred):]) == expected_others

    # Assert: nothing dropped or added
    assert set(out.columns) == set(original_cols)
