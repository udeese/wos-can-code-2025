namespace OopInheritanceAndPolymorphismApp.Classes;

// Circle.cs (Concrete Derived Class)
class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(string color, double radius)
        : base(color) // Call base constructor
    {
        Radius = radius;
    }

    // Must override the abstract GetArea method
    public override double GetArea()
    {
        return Math.PI * Radius * Radius;
    }

    // Circle-specific method
    public override void Draw()
    {
        Console.WriteLine($"Drawing a {Color} circle with radius {Radius}.");
    }
}
