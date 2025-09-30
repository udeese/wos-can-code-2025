"""
=== === DICTIONARIES === ===

Python dictionaries are collection datatypes. We can
store a series of key-value pairs in these collections.
Use curly braces at the bookends, separate each pair
with a comma, use a colon between keys and values, and
surround the key name with quotation marks.
"""

strat = {
    "brand": "Fender",
    "model": "Stratocaster",
    "year": 1977,
    "color": "blue",
    "is_new": False,
}

# Accessing values with bracket notation

# We can access values in a dictionary by their
# key names. Use bracket notation with quotes.
print(strat["model"])

# Accessing values with the get() method
print(strat.get("non-existent-key"))
# print(strat["colors"])

# We can access values in a dictionary with the get()
# method. Pass the key name in the method call in quotes.)

# What's the difference between bracket notation and .get()?
# With .get(), our application doesn't break if we specify a
# key name that doesn't exist.


# print(strat["non_existent_key"])  # KeyError: 'non_existent_key'

"""
=== === DICTIONARY MANIPULATION === ===
"""
# Bracket notation
strat = {
    "brand": "Fender",
    "model": "Stratocaster",
    "year": 1977,
    "color": "blue",
    "is_new": False,
}

# setting a value in a dictionary using bracket notation
strat["color"] = "red"
print(strat)

# Testing for an existing key
# in, not in

key = "hello"

if key not in strat:
    print(f"{key} key not in strat")

# We can use the 'in' and 'not in' keywords to check if a key
# name exists in a dictionary.

# Removing values with pop() and del

strat.pop("model")
print(strat)