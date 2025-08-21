using OOPCarApp.Classes;

class Program
{
    static void Main()
    {
        var myCar = new Car("Jeep", "Wrangler", 2021, "Blue");
        // {
        //     Make = "Jeep",
        //     Model = "Wrangler",
        //     Year = 2021,
        //     Color = "Blue",
        // };

        Console.WriteLine($"My car is a {myCar.Year} {myCar.Make} {myCar.Model} ({myCar.Color}).");

        myCar.StartEngine();
        myCar.Drive(100);

        var unknownCar = new Car();
        Console.WriteLine(
            $"My car is a {unknownCar.Year} {unknownCar.Make} {unknownCar.Model} ({unknownCar.Color})."
        );

        var invalidYearCar = new Car("Jeep", "Wrangler", 1884, "Blue");
        Console.WriteLine(
            $"My car is a {invalidYearCar.Year} {invalidYearCar.Make} {invalidYearCar.Model} ({invalidYearCar.Color})."
        );

        Console.WriteLine(myCar.MakeModel);
    }
}
