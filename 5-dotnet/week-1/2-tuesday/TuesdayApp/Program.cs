var shoppingList = new List<string>(); // An empty list to hold strings
var ages = new List<int>(); // An empty list to hold integers
var letters = new List<char>(); // An empty list to hold chars

var fruits = new List<string>() { "Apple", "Banana", "Cherry" };
var primeNumbers = new List<int>() { 2, 3, 5, 7, 11 };

fruits.Add("Grapes");
fruits.Insert(1, "Pear");
fruits.Remove("Cherry");
Console.WriteLine(fruits.Remove("Cherry"));

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}

var numbers = new List<int>() { 10, 20, 30, 40, 50 };

Console.WriteLine($"First number: {numbers[0]}"); // Output: 10
Console.WriteLine($"Last number: {numbers[^2]}"); // Output: 50

numbers[1] = 25; // Modify an element
Console.WriteLine($"Modified second number: {numbers[1]}"); // Output: 25

Console.WriteLine($"Total numbers in list: {numbers.Count}"); // Output: 5

// Attempting to access an index out of bounds will cause a runtime error (ArgumentOutOfRangeException)
// Console.WriteLine(numbers[5]); // This would crash our program!

Console.WriteLine("\n--- List<char> Example ---");

var word = "hello";
var wordChars = new List<char>();

// Convert string to List<char>
foreach (char c in word)
{
    wordChars.Add(c);
}

Console.WriteLine($"Original List<char>: {string.Join("", wordChars)}"); // Output: hello

wordChars.RemoveAt(0); // Remove 'h'
wordChars.Add('!'); // Add '!'
wordChars.Insert(0, 'J'); // Insert 'J' at the beginning

Console.WriteLine($"Modified List<char>: {string.Join("", wordChars)}"); // Output: Jello!

// Methods

static void GreetUser()
{
    Console.WriteLine("Hello there! Welcome to our application.");
}

GreetUser();

static void GreetPerson(string name) // 'name' is a parameter of type string
{
    Console.WriteLine($"Hello, {name}! Nice to meet you.");
}

GreetPerson("Kermit");

static int AddNumbers(int num1, int num2) // Returns an int, takes two int parameters
{
    int sum = num1 + num2;
    return sum; // Return the calculated sum
}

// Calling the method and storing its return value
int result = AddNumbers(5, 3);
Console.WriteLine($"The sum is: {result}"); // Output: The sum is: 8

// Or directly use the return value in an expression
Console.WriteLine($"10 + 20 = {AddNumbers(10, 20)}"); // Output: 10 + 20 = 30

var rand = new Random();

rand.Next();
rand.Next(10);
rand.Next(5, 12);
