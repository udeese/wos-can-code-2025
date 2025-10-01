import random

"""
=== === LOOPS === ===
"""

# Looping over lists and strings
superheroes = [
    "Spider-Man",
    "Captain Marvel",
    "Batman",
    "Hulk",
    "Thor",
    "Dr. Manhattan",
]

for i in range(len(superheroes)):
    print(superheroes[i])

for superhero in superheroes:
    print(superhero)

# for-in loops

""""
# using range()
# range takes in start, stop, and step
for i in range(len(superheroes)):
    print(superheroes[i])

# without range()
for cosplayer in superheroes:
    print(cosplayer)

# while loops
x = 0
while x < len(superheroes):
    print(superheroes[x])
    x += 1
"""

"""
=== === FOR-IN LOOPS EXERCISE === ===
Write a Python program that takes a list of numbers as
input from the user and calculates the sum of all the
numbers using a `for` loop.

Example Output:

Enter the numbers separated by spaces: 10 20 30 40 50
The sum of the numbers is: 150
"""

# print("Enter the numbers separated by spaces:")
# num_string = input()
# sum = 0
# nums = num_string.split(" ")
# print(nums)
# for num in nums:
#     sum += int(num)
# print(sum)


"""
=== === WHILE LOOPS EXERCISE === ===
Write a Python program that simulates a guessing game.
The program should generate a random number between 1
and 100, and then ask the user to guess the number. If
the user's guess is higher than the actual number, the
program should print "Too high, try again." If the guess
is lower, the program should print "Too low, try again."
The game should continue until the user correctly
guesses the number.

Example Output:

Guess the number (between 1 and 100): 50
Too high, try again.
Guess the number (between 1 and 100): 30
Too low, try again.
Guess the number (between 1 and 100): 40
Too low, try again.
Guess the number (between 1 and 100): 45
Congratulations! You guessed the number correctly.
"""

target = random.randint(1, 100)

user_input = int(input("Guess the number (between 1 and 100): "))

while (user_input != target):
    if user_input < target:
        print("Too low, try again.")
    elif user_input > target:
        print("Too high, try again.")
    user_input = int(input("Guess the number (between 1 and 100): "))

print("Congratulations! You guessed the number correctly.")

