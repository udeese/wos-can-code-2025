using System.Collections.Generic; // At the top of your file

// --------------------------------------
/*
1. Declaring and Initializing an Empty Dictionary
Syntax:
Dictionary<KeyDataType, ValueDataType> dictionaryName = new Dictionary<KeyDataType, ValueDataType>();
--- OR ---
var dictionaryName = new Dictionary<KeyDataType, ValueDataType>();
*/
// --------------------------------------

var students = new Dictionary<int, string>();

// --------------------------------------
/*
2. Initializing a Dictionary with Initial Values
We can initialize a dictionary with key-value pairs directly using object initializer syntax.

Syntax:
var dictionaryName = new Dictionary<KeyDataType, ValueDataType>()
{
    { key1, value1 },
    { key2, value2 },
    // ...
};
*/
// --------------------------------------

var bakeryMenu = new Dictionary<string, string>()
{
    {"pie","pumpkin"},
    {"cake","cheesecake"},
    {"cupcake","red velvet"},
    {"cookie","chocolate chip"}
};

// --------------------------------------
// Adding Elements
// --------------------------------------
/*
Add(TKey key, TValue value):
Adds a key-value pair to the dictionary. If the key already exists, it will throw an ArgumentException.
*/

bakeryMenu.Add("bread", "brioche");

// --------------------------------------
// Retrieving Elements (Accessing Values by Key)
// --------------------------------------

/*
Using [] (Indexer):
The most common way to access a value. If the key does not exist, it will throw a KeyNotFoundException.
*/

string todayCake = bakeryMenu["cake"];
Console.WriteLine($"{todayCake}");

/*
UsingTryGetValue(TKey key, out TValue value):</strong >
A safer way to retrieve a value. It returns true if the key is found and sets the out parameter value to the retrieved value; otherwise, it returns false.
*/
if (bakeryMenu.TryGetValue("pie", out string? banana))
{
    Console.WriteLine($"Today's pie: {banana}");
}
else
{
    Console.WriteLine("There is no pie today. :(");
}

/* 
UsingContainsKey(TKey key):
Checks if a key exists in the dictionary. Returns true or false.
*/
if (bakeryMenu.ContainsKey("cake"))
{
    Console.WriteLine("Cake is in the dictionary.");
}

// --------------------------------------
// Modifying Elements
// --------------------------------------

// If the key already exists, simply assign a new value using the [] indexer.

bakeryMenu["pie"] = "apple";
Console.WriteLine($"The new best pie is: {bakeryMenu["pie"]}");

// --------------------------------------
// Removing Elements
// --------------------------------------

// Remove(TKey key): Removes the key-value pair with the specified key. Returns true if the key was found and removed, false otherwise.

Console.WriteLine($"Before removal: {bakeryMenu.ContainsKey("cookie")}");
bakeryMenu.Remove("cookie");
Console.WriteLine($"After removal: {bakeryMenu.ContainsKey("cookie")}");

// --------------------------------------
//Iterating Over Dictionaries
// --------------------------------------

// We can iterate over the key-value pairs in a dictionary using a foreach loop. Each item in the dictionary is a KeyValuePair<TKey, TValue> object.
Console.WriteLine("\n--- Iterating Over Dictionary ---");
foreach (var thing in bakeryMenu)
{
    Console.WriteLine($"Item Type: {thing.Key}, Item: {thing.Value}");
}

// We can also iterate over just the keys or just the values:
Console.WriteLine("\n--- Iterating Keys ---");
foreach (var keyIFind in bakeryMenu.Keys)
{
    Console.WriteLine($"Key found: {keyIFind}");
}

Console.WriteLine("\n--- Iterating Values ---");
foreach (var whatever in bakeryMenu.Values)
{
    Console.WriteLine($"Value found: {whatever}");
}

// Using .Select we can create a single-line print statement as well:
Console.WriteLine("\n--- Single Line Dictionary Print ---");
bakeryMenu.Select(foundPair => $"{foundPair.Key}: {foundPair.Value}").ToList().ForEach(Console.WriteLine);