# Loops

## `for-in` Loops

A `for-in` loop in Python is used to iterate over a sequence
(such as a list, tuple, string, or range) and execute a
block of code for each item in the sequence.

The general syntax of a for loop is:

```py
for item in sequence:
    # code to execute for each item
```

Where:

- `item` is a variable that takes on the value of each element in the sequence, one at a time.
- `sequence` is the collection of items over which the loop iterates.

### Exercise:

Write a Python program that takes a list of numbers as input from the user and calculates the sum of all the numbers using a `for` loop.

Example Output:

```shell
Enter the numbers separated by spaces: 10 20 30 40 50
The sum of the numbers is: 150
```

## `while` Loops

A `while` loop in Python is used to repeatedly execute a block of code as long as a specified condition is true. The loop continues iterating until the condition becomes false.

The general syntax of a `while` loop is:

```py
while condition:
    # code to execute as long as the condition is true
```

Where:

- `condition` is a boolean expression that determines whether the loop should continue or not.

### Exercise:

Write a Python program that simulates a guessing game. The program should generate a random number between 1 and 100, and then ask the user to guess the number. If the user's guess is higher than the actual number, the program should print "Too high, try again." If the guess is lower, the program should print "Too low, try again." The game should continue until the user correctly guesses the number.

Example Output:

```shell
Guess the number (between 1 and 100): 50
Too high, try again.
Guess the number (between 1 and 100): 30
Too low, try again.
Guess the number (between 1 and 100): 40
Too low, try again.
Guess the number (between 1 and 100): 45
Congratulations! You guessed the number correctly.
```
