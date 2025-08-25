namespace OopInheritanceAndPolymorphismApp.Classes;

// Motorcycle.cs (Derived Class)
class Motorcycle : Vehicle // Motorcycle also inherits from Vehicle
{
    public bool HasSidecar { get; set; }

    public Motorcycle(string make, string model, int year, bool hasSideCar)
        : base(make, model, year)
    {
        HasSidecar = hasSideCar;
    }

    public override void Start() // Also overrides Start
    {
        Console.WriteLine($"{Make} {Model} roars to life!");
    }

    public void Wheelie()
    {
        Console.WriteLine("Doing a wheelie!");
    }
}
