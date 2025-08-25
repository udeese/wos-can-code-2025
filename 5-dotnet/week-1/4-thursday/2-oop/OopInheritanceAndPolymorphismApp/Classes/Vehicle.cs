namespace OopInheritanceAndPolymorphismApp.Classes;

// Vehicle.cs (Base Class)
class Vehicle
{
    public string Make { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public int Year { get; set; }

    public Vehicle(string make, string model, int year)
    {
        Make = make;
        Model = model;
        Year = year;
        Console.WriteLine("Vehicle constructor called.");
    }

    public virtual void Start()
    {
        Console.WriteLine($"{Make} {Model} is starting.");
    }

    public void Stop()
    {
        Console.WriteLine($"{Make} {Model} is stopping.");
    }
}
