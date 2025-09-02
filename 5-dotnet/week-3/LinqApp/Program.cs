using LinqApp.Classes;

/**
 *    LINQ (Language Integrated Query)
 *    Query Syntax vs. Method Syntax
*/
var fruits = new List<string> { "Apple", "Banana", "Cherry", "Grape" };

// Query Syntax
var shortFruitsQuery = from fruit in fruits where fruit.Length < 6 select fruit;

// Method Syntax
var shortFruitsMethod = fruits.Where(fruit => fruit.Length < 6);

foreach (var fruit in shortFruitsQuery)
{
    Console.WriteLine(fruit);
}

foreach (var fruit in shortFruitsMethod)
{
    Console.WriteLine(fruit);
}

var trails = Trail.GetTrails();

/******** Filtering with .Where() ********/
// 1. Find trails containing waterfalls
// 2. Find trails containing waterfalls with moderate difficulty

/******** Sorting with .OrderBy(), .ThenBy() ********/
// 3.
// 4.
// 5.

/******** Chaining Methods ********/
// 6.

/******** Aggregation Methods ********/
