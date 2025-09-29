import math

"""
PRIMITIVE (SIMPLE) DATATYPES
- Strings (str)
- Integers (int)
- Floating Point Numbers (float)
- Booleans (bool)
- None (NoneType)
"""

"""
=== === Strings === ===
Strings represent sequences of characters enclosed
in quotes.
"""

# literal assignment
greeting = "Hello world!"
print(greeting)

# Constructor function (casting)
greeting_2 = str("Another greeting")
print(greeting_2)

print(type(greeting))

# Concatenation
hello = "hello"
world = "world!"

hello_world = hello + " " + world
print(hello_world)

# f-string
print(f"{hello} big {world}")

# TypeError
num = 10
sentence = "my age is "
# print(sentence + num)
# Fix
print(sentence + str(num))

# String Methods
# `split()` splits a string based on a separator
stack = "Python world"
print(stack.split(" "))

# upper, lower, title
print(stack.upper())
print(stack.lower())
print(stack.title())

print(stack.center(50, "*"))

print(len(stack))

# strip (like trim)
whitespace_string = "      hello          "
print(whitespace_string)
print(whitespace_string.strip())

# string indices, index ranges
guitar = "fender"
print(guitar[0])
# slicing with index ranges
print(guitar[:3])
# negative index
print(guitar[-2])

"""
=== === INTEGERS AND FLOATS === ===
Integers represent whole numbers. Floats represent
decimal numbers.
"""

# Integer literal assignment
num = 4

# Constructor function (casting)
string_num = "4"
int_num = int(string_num)
print(type(int_num))

# Float literal assignment
pi = 3.14159
print(type(pi))

# Constructor function (casting)
float_num = float(num)
print(type(float_num))

# Arithmetic operations
# +, -, *, /, **, //
print(2**3)
print(4 // 2)

# +=, -=, *=, /= assignment operators
other_num = 4
new_num = 2
new_num += other_num

print(new_num)

new_num -= 3
print(new_num)

new_num *= 3
print(new_num)

new_num /= 2
print(new_num)

# Built-in functions for numbers

# abs, round
print(abs(-3.5))
print(round(3.14159))

# Math module

# sqrt, ceil, floor
print(math.sqrt(9))
print(math.ceil(2.00000001))
print(math.floor(35.9999999999))

"""
=== === BOOLEANS === ===
Booleans represent the value of True or False.
"""

# Literal assignment
is_awake = False
# Constructor function (casting)
is_sleeping = bool(1)  # True
print(is_sleeping)

# Logical operators during lecture

"""
=== === NONE === ===
None represents the absence of a value.
like the javascript null
"""
# None literal assignment
email = None
print("the type of email is:", type(email))
