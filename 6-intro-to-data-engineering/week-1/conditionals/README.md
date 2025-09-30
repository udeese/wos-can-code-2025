# Conditionals

Conditional statements are used in programming to make decisions based on certain conditions. In Python, the most common conditional statements are `if`, `elif` (short for "else if"), and `else`.

## `if` Statement

The `if` statement is used to execute a block of code if a condition is true.

```py
if condition:
    # code to execute if condition is True
```

## `elif` Statement

The `elif` statement allows you to check multiple conditions. It is used after an `if` statement, and it executes a block of code if the preceding `if` or `elif` condition(s) are false and its own condition is true.

```py
if condition1:
    # code to execute if condition1 is True
elif condition2:
    # code to execute if condition1 is False and condition2 is True
```

## `else` Statement

The `else` statement is used to execute a block of code if none of the preceding conditions are true.

```py
if condition:
    # code to execute if condition is True
else:
    # code to execute if condition is False
```

### Exercise:

Write a Python program that takes an integer input from the user and checks whether it is positive, negative, or zero. Use conditional statements (`if`, `elif`, `else`) to implement this logic.

Example Output:

```shell
Enter a number: 5
5 is a positive number.

Enter a number: -3
-3 is a negative number.

Enter a number: 0
0 is neither positive nor negative.
```
