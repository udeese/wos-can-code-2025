from utilities import camel_to_snake

# format: test, name of function, what you're testing
def test_camel_to_snake_basic_conversion():
    """Tests that a simple camelCase string converts correctly."""
    # ARRANGE
    camel_case = "discountPercentage"

    #ACT
    result = camel_to_snake(camel_case)

    # ASSERT
    assert result == "discount_percentage"