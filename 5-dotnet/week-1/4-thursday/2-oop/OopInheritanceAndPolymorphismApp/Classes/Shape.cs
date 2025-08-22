namespace OopInheritanceAndPolymorphismApp.Classes;

// Shape.cs (Abstract Base Class)
abstract class Shape
{
    public string Color { get; set; }

    // Constructor for common properties
    public Shape(string color)
    {
        Color = color;
    }

    // Abstract method: All shapes must have an area, but how it's calculated differs.
    public abstract double GetArea(); // No implementation here
    public abstract void Draw();

    // Concrete method: All shapes can display their color in the same way.
    public void DisplayColor()
    {
        Console.WriteLine($"This shape is {Color}.");
    }
}
