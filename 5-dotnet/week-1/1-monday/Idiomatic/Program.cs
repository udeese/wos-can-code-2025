var birthday = DateTime.Now;
var yourBirthday = birthday;

birthday.AddDays(1);

Console.WriteLine(birthday.ToString("d"));
Console.WriteLine(yourBirthday.ToString("d"));

/*
    Multi Line Comments
    Explicit approach to variable declaration
*/
int numberOfStudents = 25;
var numberOfTeachers = numberOfStudents;

numberOfStudents++;

Console.WriteLine(numberOfStudents);
Console.WriteLine(numberOfTeachers);

// double courseCompletionRate = 85.5;
// string greeting = "Hello, C# Students!";
// bool isModuleActive = true;
// char initial = 'J';

// Implicitly typed (inferred)
// var studentName = "Alice"; // Compiler infers 'studentName' is a string
// var studentAge = 22; // Compiler infers 'studentAge' is an int
// var averageScore = 92.75; // Compiler infers 'averageScore' is a double
// var hasPassed = true;

// Explicit: List<string> fruits = new List<string>();
// var fruits = new List<string>(); // Type is clear from 'new List<string>()'

// Explicit: Dictionary<int, string> studentGrades = new Dictionary<int, string>();
Dictionary<int, string> studentGrades = new Dictionary<int, string>();

Console.WriteLine("\n--- Explicit Conversions ---");

// long to int (potential data loss if long is too large for int)
long bigLong = 20000000000L; // 'L' suffix for long literal

// int smallInt = bigLong; // This would be a compile-time error without a cast!
int smallInt = (int)bigLong; // Explicit conversion from long to int
Console.WriteLine($"long to int: bigLong = {bigLong}, smallInt = {smallInt}");

// If bigLong was larger than int.MaxValue (approx 2 billion), smallInt would show an incorrect value.

// double to int (loses decimal part - truncation)
double decimalValue = 9.81;
int wholeNumber = (int)decimalValue; // Explicit conversion from double to int
Console.WriteLine($"double to int: decimalValue = {decimalValue}, wholeNumber = {wholeNumber}"); // Output: 9.81, 9 (decimal part lost)

// double to float (loses precision)
double preciseDouble = 1.23456789012345;
float lessPreciseFloat = (float)preciseDouble; // Explicit conversion from double to float
Console.WriteLine(
    $"double to float: preciseDouble = {preciseDouble}, lessPreciseFloat = {lessPreciseFloat}"
);

// Observe the potential difference in the printed values due to precision loss.

// int to char (converts integer ASCII/Unicode value to character)
int asciiValue = 65; // ASCII value for 'A'
char character = (char)asciiValue; // Explicit conversion from int to char
Console.WriteLine($"int to char: asciiValue = {asciiValue}, character = {character}"); // Output: 65, A

// Arrays
string[] studentNames = new string[5]; // An array to hold 5 student names (initially all null)
int[] scores = new int[3]; // An array to hold 3 scores (initially all 0)

Console.WriteLine($"Default value of first score: {scores[0]}"); // Output: 0

string[] fruits = ["Apple", "Banana", "Cherry"]; // Array of 3 strings
int[] primeNumbers = [2, 3, 5, 7, 11]; // Array of 5 integers
bool[] answers = [true, false, true];
