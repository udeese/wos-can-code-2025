using LinqApp.Classes;
using LinqApp.Utilities;

/*
    LINQ (Language Integrated Query)
    Query Syntax vs. Method Syntax
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
var waterfallTrails = trails.Where((trail) => trail.Tags.Contains("waterfall"));
ConsoleUtils.PrintEach(waterfallTrails, "Waterfall Trails");

// 2. Find trails containing waterfalls with moderate difficulty
var moderateWaterfallTrails = trails.Where(
    (trail) => trail.Difficulty == Difficulty.Moderate && trail.Tags.Contains("waterfall")
);
ConsoleUtils.PrintEach(moderateWaterfallTrails, "Moderate Waterfall Trails");

/******** Sorting with .OrderBy(), .ThenBy() ********/
// 3. Sort all trails by length (ascending)
var sortedByLength = trails.OrderBy((trail) => trail.LengthMiles);
ConsoleUtils.PrintEach(sortedByLength, "Trails sorted by length");

// 4. Sort by region, then by name (alphabetical)
var alphabetically = trails.OrderBy((trail) => trail.Region).ThenBy((trail) => trail.Name);
ConsoleUtils.PrintEach(alphabetically, "Sorted by region, then by name");

// 5. Sort by elevation gain (desc), then by length (asc)
var sortedByElevationThenLength = trails
    .OrderByDescending((trail) => trail.ElevationGainFt)
    .ThenBy((trail) => trail.LengthMiles);

ConsoleUtils.PrintEach(sortedByElevationThenLength, "Sorted By Elevation Then Length");

/******** Chaining Methods ********/
// 6. Dog-friendly loop trails under 5 miles, ordered by miles
var dogFriendlyLoopsUnderFiveByMiles = trails
    .Where((trail) => trail.DogFriendly && trail.LengthMiles < 5 && trail.Tags.Contains("loop"))
    .OrderBy((trail) => trail.LengthMiles);

ConsoleUtils.PrintEach(dogFriendlyLoopsUnderFiveByMiles, "dogFriendlyLoopsUnderFiveByMiles");

/*
    Aggregation:
    Aggregation methods are LINQ methods that allow us to perform
    calculations on a collection and retrieve specific elements
    from it.
*/

/******** .Count() and .Sum() ********/
// 7. How many moderate trails are there?
var moderateCount = trails.Count((trail) => trail.Difficulty == Difficulty.Moderate);
Console.WriteLine($"Moderate Count: {moderateCount}");

// 8. Total length (in miles) of trails in the San Gabriels
var totalLengthSanGabriels = trails
    .Where((trail) => trail.Region == "San Gabriels")
    .Sum((trail) => trail.LengthMiles);

Console.WriteLine($"totalLengthSanGabriels {totalLengthSanGabriels}");

// 9. Total number of ratings across all trails
var totalRatings = trails.Sum((trail) => trail.Ratings.Count);
Console.WriteLine($"totalRatings: {totalRatings}");

/******** .Min(), .Max(), and .Average() ********/
// 10. Highest elevation gain and the trail that has it
var highestElevation = trails.Max((trail) => trail.ElevationGainFt);
var highestTrails = trails.Where((trail) => trail.ElevationGainFt == highestElevation);
ConsoleUtils.PrintEach(highestTrails, "Highest Trails");

// 11. Shortest hard trail length
var minHardMiles = trails.Where(t => t.Difficulty == Difficulty.Hard).Min(t => t.LengthMiles);
Console.WriteLine($"minHardMiles: {minHardMiles}");

// 12. Average star rating across all trails (ignoring unrated trails)
var avgStarsAll = trails.Where(t => t.Ratings.Count > 0).Average(t => t.Ratings.Average());
Console.WriteLine($"avgStarsAll: {avgStarsAll}");

/*
    Elements:
    Element operators return a single element from a collection.
*/

/******** .First() vs. .FirstOrDefault() ********/
// 13. First trail found in the Santa Monica Mountains (throws if none found)
var firstSantaMonica = trails.First(t => t.Region == "Santa Monica Mtns");

// 14. Try to find a Catalina Island trail; null if none exists

/*
    Projection is the process of transforming elements in a
    collection into a new form.

    The .Select() method is used to project a collection of
    objects into a new collection of objects that have a
    different structure.

    This is extremely useful when you only need a subset of
    properties from a large object, or when you want to create
    a new object with calculated values.
*/

/******** Projection with .Select() ********/
// 15. Select only the name of each trail

// 16. Select a new anonymous object containing both the name and the length in miles

/*
    The .ToList() method is one of the most common ways to force
    a query to execute and convert its result into a List<T>.
*/

/******** Conversion with .ToList() ********/
// 17. Convert a query to a List<T>: Top 5 longest trails

// 18. Build a distinct, sorted list of all tags across trails
