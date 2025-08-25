namespace OopInheritanceAndPolymorphismApp.Classes;

// Rectangle.cs (Concrete Derived Class)
class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public Rectangle(string color, double width, double height)
        : base(color) // Call base constructor
    {
        Width = width;
        Height = height;
    }

    // Must override the abstract GetArea method
    public override double GetArea()
    {
        return Width * Height;
    }

    // Rectangle-specific method
    public override void Draw()
    {
        Console.WriteLine($"Drawing a {Color} rectangle with width {Width} and height {Height}.");
    }
}
