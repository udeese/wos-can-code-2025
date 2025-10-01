"""
=== === FUNCTIONS === ===
"""

# Function declaration

# Parameters and arguments

# Returning values

"""
=== === FUNCTIONS EXERCISE === ===
Write a Python program that defines a function called `calculate_average` to calculate the average of a list of numbers. The program should take a list of numbers as input from the user and then call the `calculate_average` function to compute the average. Finally, it should print the average.

Example Output:

Enter the numbers separated by spaces: 10 20 30 40 50
The average is: 30.0
"""


def calculate_average():
    numbers = input("Enter the numbers separated by spaces: ")
    nums_list = numbers.split(" ")
    total = 0
    for num in nums_list:
        total += int(num)
    average = total/len(nums_list)
    print(f"The average is: {average}")


calculate_average()

# Default parameters and keyword/named arguments
def greet(name="Guest"):
    print("Hello, " + name + "!")


# greet()

# Python type hints
def greet(greeting: str, name: str) -> None:
    print(greeting + ", " + name + "!")


# greet()

"""
=== === DEFAULT PARAMETERS AND KEYWORD/NAMED ARGUMENTS EXERCISE === ===

Write a Python function called `print_recipe` that prints out a recipe with ingredients. The function should take three parameters: `recipe_name`, `ingredients`, and `instructions`. The `ingredients` parameter should have a default value of an empty list. When calling the function, the `recipe_name` and `instructions` parameters must be provided, but the `ingredients` parameter is optional.

1. If `ingredients` are provided, the function should print each ingredient along with its quantity.
2. If `ingredients` are not provided, the function should print "No ingredients provided."

Expected Output:

Recipe: Spaghetti Carbonara
Instructions:
1. Cook pasta. 2. Fry bacon. 3. Mix eggs and cheese. 4. Combine all ingredients.
Ingredients:
- Spaghetti
- Bacon
- Eggs
- Parmesan Cheese


Recipe: Scrambled Eggs
Instructions:
1. Beat eggs. 2. Cook in pan.
No ingredients provided.
"""