"""
Added Alice with phone number 1234567890 to the phone book.
Added Bob with phone number 9876543210 to the phone book.
The phone number of Alice is 1234567890.
Charlie is not found in the phone book.
Contacts in the phone book:
Alice: 1234567890
Bob: 9876543210
"""

# Function to add a new contact to the phone book
def add_contact(phone_book, name, phone_number):
    """Adds a new contact to the phone book"""
    phone_book[name] = phone_number
    print(f"Added {name} with phone number {phone_number} to the phone book.")

# Function to display the phone number of a given contact
def display_phone_number(phone_book, name):
    """Displays the phone number of a given contact"""
    if phone_book.get(name) is None:
        print(f"{name} is not found in the phone book.")
    else:
        print(f"The phone number of {name} is {phone_book.get(name)}.")

# Function to list all contacts in the phone book
def list_contacts(phone_book):
    """Lists all contacts in the phone book"""
    print("Contacts in the phone book:")
    for key, val in phone_book.items():
        print(f"{key}: {val}")

# Main program
phone_book = {}

add_contact(phone_book, "Alice", "1234567890")
add_contact(phone_book, "Bob", "9876543210")

display_phone_number(phone_book, "Alice")
display_phone_number(phone_book, "Charlie")

list_contacts(phone_book)
