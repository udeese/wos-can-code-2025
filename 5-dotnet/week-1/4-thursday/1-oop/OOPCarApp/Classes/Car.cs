namespace OOPCarApp.Classes;

class Car
{
    // private string _make; created automagically
    public string? Make { get; set; } // now a auto-implemented property
    public string Model { get; set; } // now a auto-implemented property
    public string Color { get; set; } // now a auto-implemented property
    private int _year; // backing field

    public string MakeModel // read only property
    {
        get { return $"{Make} {Model}"; }
    }

    public int Year
    {
        get { return _year; }
        private set
        {
            if (value > 1885 && value < DateTime.Now.Year + 1)
            {
                _year = value;
            }
            else
            {
                Console.WriteLine("Invalid year value. Setting to 1885.");
                _year = 1885;
            }
        }
    }

    public Car()
    {
        Make = "Unknown";
        Model = "Unknown";
        Year = 0;
        Color = "Unknown";
    }

    public Car(string make, string model, int year, string color)
    {
        Make = make;
        Model = model;
        Year = year;
        Color = color;
    }

    // Instance Method (Behavior)
    public void StartEngine()
    {
        Console.WriteLine($"{Color} {Make} {Model}'s engine is starting!");
    }

    public void Drive(int distance)
    {
        Console.WriteLine($"The {Make} {Model} is driving {distance} miles.");
    }
}
