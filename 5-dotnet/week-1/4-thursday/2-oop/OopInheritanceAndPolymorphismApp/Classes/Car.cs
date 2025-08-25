namespace OopInheritanceAndPolymorphismApp.Classes;

// Car.cs (Derived Class)
class Car : Vehicle // Car inherits from Vehicle
{
    public int NumberOfDoors { get; set; }

    public Car(string make, string model, int year, int numberOfDoors)
        : base(make, model, year)
    {
        NumberOfDoors = numberOfDoors;
        Console.WriteLine("Car constructor called.");
    }

    // void Start() method signature
    public override void Start() // 'override' provides a new implementation
    {
        Console.WriteLine($"{Make} {Model} starts with a smooth purr.");
    }

    public void Honk()
    {
        Console.WriteLine("Beep beep!");
    }
}
