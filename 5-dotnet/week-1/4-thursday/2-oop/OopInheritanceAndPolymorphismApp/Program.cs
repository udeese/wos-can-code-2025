using OopInheritanceAndPolymorphismApp.Classes;

var myCar = new Car("Jeep", "Wrangler", 2021, 2);

var myMotorcycle = new Motorcycle("Honda", "Rebel", 2015, true);

// myCar.Honk();
// myCar.Start();
// myCar.Stop();

// myMotorcycle.Wheelie();
// myMotorcycle.Start();
// myMotorcycle.Stop();

// Program.cs
// (Assuming Shape.cs, Circle.cs, Rectangle.cs are in the project)

// var myShape = new Shape("Green"); // COMPILE-TIME ERROR: Cannot create an instance of the abstract type or interface 'Shape'

var myCircle = new Circle("Blue", 5);
var myRectangle = new Rectangle("Red", 4, 6);

Console.WriteLine("--- Shape Information ---");
myCircle.DisplayColor(); // Inherited concrete method
Console.WriteLine($"Circle Area: {myCircle.GetArea()}"); // Calls overridden abstract method
myCircle.Draw(); // Calls overridden abstract method

Console.WriteLine();

myRectangle.DisplayColor(); // Inherited concrete method
Console.WriteLine($"Rectangle Area: {myRectangle.GetArea()}"); // Calls overridden abstract method
myRectangle.Draw(); // Calls overridden abstract method

Console.WriteLine("\n--- Polymorphism with Abstract Base Class ---");

// We can store concrete derived classes in a list of the abstract base class
var shapes = new List<Shape>
{
    myCircle,
    myRectangle,
    new Circle("Yellow", 3), // Add another circle
    new Rectangle("Purple", 2, 8), // Add another rectangle
};

foreach (Shape shape in shapes)
{
    Console.WriteLine($"\nProcessing a {shape.Color} shape:");
    shape.DisplayColor(); // Calls inherited concrete method
    Console.WriteLine($"Calculated Area: {shape.GetArea()}"); // Polymorphic call to overridden abstract method
    shape.Draw(); // Polymorphic call to overridden abstract method
}
