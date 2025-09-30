# Functions

In Python, a function is a block of reusable code that performs a specific task. Functions help in organizing code into manageable pieces, promoting reusability and maintainability.

## Defining a Function:

To define a function in Python, you use the `def` keyword followed by the function name and parentheses `( )`, which may include parameters. The function body is then indented below.

```py
def function_name(parameters):
    # Function body
    # Code to perform a specific task
    return result
```

## Calling a Function:

To execute a function and perform its task, you call it by its name followed by parentheses `( )`, optionally passing arguments if the function has parameters.

```py
function_name(arguments)
```

## Return Statement:

The `return` statement is used to exit a function and optionally return a value or expression to the caller. If a function doesn't have a `return` statement, it implicitly returns `None`.

```py
return value
```

### Exercise:

Write a Python program that defines a function called `calculate_average` to calculate the average of a list of numbers. The program should take a list of numbers as input from the user and then call the `calculate_average` function to compute the average. Finally, it should print the average.

Example Output:

```shell
Enter the numbers separated by spaces: 10 20 30 40 50
The average is: 30.0
```

## Default Parameters:

In Python, you can define default values for parameters in a function. Default parameters are used when the function is called without providing a specific argument for that parameter. They allow you to define functions with optional parameters, providing flexibility and making the function easier to use in various contexts.

**Syntax:**

```py
def function_name(parameter=default_value):
    # Function body
```

**Example:**

```py
def greet(name="Guest"):
    print("Hello, " + name + "!")
```

In the above example, if you call the `greet()` function without providing a name, it will default to "Guest". However, you can also pass a specific name as an argument.

## Named Arguments:

In Python, when calling a function, you can specify arguments by name, allowing you to pass them in any order regardless of their position in the function definition. Named arguments improve code readability, especially for functions with multiple parameters.

**Syntax:**

```py
function_name(parameter1=value1, parameter2=value2)
```

**Example:**

```py
def greet(greeting, name):
    print(greeting + ", " + name + "!")
```

You can call the `greet()` function with named arguments like this:

```py
greet(name="Alice", greeting="Good morning")
```

In the above example, even though the order of parameters in the function definition is `(greeting, name)`, we can pass them in any order when calling the function.

## Default Parameters with Named Arguments:

Default parameters and named arguments can be used together to create functions with both optional and named parameters. This combination enhances the flexibility and readability of functions.

**Example:**

```py
def greet(greeting="Hello", name="Guest"):
    print(greeting + ", " + name + "!")
```

You can call the `greet()` function with named arguments, defaulting to "Hello" and "Guest" if not provided:

```py
greet(name="Alice")
```

In this case, the function will print "Hello, Alice!", using the default value for `greeting`.

### Exercise

Write a Python function called `print_recipe` that prints out a recipe with ingredients. The function should take three parameters: `recipe_name`, `ingredients`, and `instructions`. The `ingredients` parameter should have a default value of an empty list. When calling the function, the `recipe_name` and `instructions` parameters must be provided, but the `ingredients` parameter is optional.

1. If `ingredients` are provided, the function should print each ingredient along with its quantity.
2. If `ingredients` are not provided, the function should print "No ingredients provided."

**Expected Output:**

```shell
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
```
