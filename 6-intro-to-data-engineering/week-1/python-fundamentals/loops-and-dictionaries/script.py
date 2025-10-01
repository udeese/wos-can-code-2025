"""
=== === LOOPS AND DICTIONARIES === ===

Dictionaries are also iterable. When we iterate through a
dictionary, the iterator is each key of the dictionary.
"""

strat = {
    "brand": "Fender",
    "model": "Stratocaster",
    "year": 1977,
    "color": "blue",
    "is_new": False,
}

for banana in strat:
    print(banana)

# for each_key in strat:
#     print(strat[each_key])

"""
=== === DICTIONARY METHODS === ===
There are many useful methods we can use with lists.

keys(), values(), items()

.keys() - returns a list of the dictionary's keys.
.values() - returns a list of the dictionary's values.
.items() - returns a list of tuples of the dictionary's key-value pairs.
"""

print(strat.keys())
print(strat.values())
print(strat.items())

# what we got back from .items()
[
    ("brand", "Fender"),
    ("model", "Stratocaster"),
    ("year", 1977),
    ("color", "blue"),
    ("is_new", False),
]

for key, val in strat.items():
    print(f"Key: {key}, Value: {val}")