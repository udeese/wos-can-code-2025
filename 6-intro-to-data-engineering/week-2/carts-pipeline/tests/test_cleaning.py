import pandas as pd
from utilities.transform import compute_and_fill_discounted_total, drop_invalid_rows

def test_drop_invalid_rows_removes_missing_rows():
    """removes rows missing required fields like id, price, or quantity"""
    # Arrange
    df = pd.DataFrame([
        {"id": 1, "price": 10, "quantity": 2},
        {"id": None, "price": 8, "quantity": 1},
        {"id": 3, "price": None, "quantity": 4},
        {"id": 4, "price": 5, "quantity": None},
    ])

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