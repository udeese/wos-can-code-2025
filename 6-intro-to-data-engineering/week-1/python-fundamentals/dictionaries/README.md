## Accessing values with bracket notation

We can access values in a dictionary by their
key names. Use bracket notation with quotes.

```py
print(strat["year"])  # 1977
```

## Accessing values with the get() method

We can access values in a dictionary with the get()
method. Pass the key name in the method call in quotes.

```py
print(strat.get("is_new"))  # False
```

> What's the difference between bracket notation and .get()?
> With .get(), our application doesn't break if we specify a key name that doesn't exist.

```py
# print(strat["non_existent_key"])  # KeyError: 'non_existent_key'
print(strat.get("non_existent_key"))  # None
```

## Dictionary methods

There are many useful methods we can use with lists.

### keys, values, items

- `.keys()` - returns an array of the dictionary's keys.
- `.values()` - returns an array of the dictionary's values.
- `.items()` - returns an array of tuples of the dictionary's key-value pairs.

```py
print(strat.keys())  # dict_keys(['brand', 'model', 'year', 'color', 'is_new'])
print(strat.values())  # dict_values(['Fender', 'Stratocaster', 1977, 'blue', False])
print(strat.items())
# dict_items([('brand', 'Fender'), ('model', 'Stratocaster'), ('year', 1977), ('color', 'blue'), ('is_new', False)])
```

### in, not in

We can use the 'in' and 'not in' keywords to check if a key
name exists in a dictionary.

```py
if "color" in strat:
    print("color exists in strat")

if "banana" not in strat:
    print("banana not in strat")
```

[Explore more dictionary methods!](https://www.w3schools.com/python/python_ref_dictionary.asp)

### Exercise: Phone Book

Write a Python program to create a simple phone book. The program should allow users to perform the following operations:

- Add a new contact to the phone book.
- Display the phone number of a given contact.
- List all contacts in the phone book.

To implement this, you can use a dictionary where the keys are the names of the contacts, and the values are their corresponding phone numbers.

```py
# Function to add a new contact to the phone book
def add_contact(phone_book, name, phone_number):
    pass

# Function to display the phone number of a given contact
def display_phone_number(phone_book, name):
    pass

# Function to list all contacts in the phone book
def list_contacts(phone_book):
    pass

# Main program
phone_book = {}

add_contact(phone_book, "Alice", "1234567890")
add_contact(phone_book, "Bob", "9876543210")

display_phone_number(phone_book, "Alice")
display_phone_number(phone_book, "Charlie")

list_contacts(phone_book)
```

**Expected output:**

```shell
Added Alice with phone number 1234567890 to the phone book.
Added Bob with phone number 9876543210 to the phone book.
The phone number of Alice is 1234567890.
Charlie is not found in the phone book.
Contacts in the phone book:
Alice: 1234567890
Bob: 9876543210
```
