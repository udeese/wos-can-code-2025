namespace LinqApp.Classes;

public enum Difficulty
{
    Easy,
    Moderate,
    Hard,
}

public class Trail
{
    public int Id { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Region { get; init; } = string.Empty;
    public double LengthMiles { get; init; }
    public int ElevationGainFt { get; init; }
    public Difficulty Difficulty { get; init; }
    public bool DogFriendly { get; init; }
    public int OpenedYear { get; init; }
    public List<int> Ratings { get; init; } = [];
    public List<string> Tags { get; init; } = [];

    public static List<Trail> GetTrails()
    {
        var trails = new List<Trail>
        {
            new()
            {
                Id = 1,
                Name = "Eaton Canyon",
                Region = "San Gabriels",
                LengthMiles = 3.5,
                ElevationGainFt = 450,
                Difficulty = Difficulty.Easy,
                DogFriendly = true,
                OpenedYear = 1917,
                Ratings = [5, 4, 4, 5],
                Tags = ["waterfall", "out-and-back", "family"],
            },
            new()
            {
                Id = 2,
                Name = "Mount Baldy Loop",
                Region = "San Gabriels",
                LengthMiles = 11.3,
                ElevationGainFt = 3900,
                Difficulty = Difficulty.Hard,
                DogFriendly = false,
                OpenedYear = 1933,
                Ratings = [5, 5, 4, 5, 5],
                Tags = ["loop", "summit", "exposed"],
            },
            new()
            {
                Id = 3,
                Name = "Griffith Observatory Trail",
                Region = "Hollywood Hills",
                LengthMiles = 2.6,
                ElevationGainFt = 600,
                Difficulty = Difficulty.Moderate,
                DogFriendly = true,
                OpenedYear = 1935,
                Ratings = [4, 4, 3],
                Tags = ["views", "city", "sunset"],
            },
            new()
            {
                Id = 4,
                Name = "Escondido Falls",
                Region = "Santa Monica Mtns",
                LengthMiles = 3.8,
                ElevationGainFt = 650,
                Difficulty = Difficulty.Moderate,
                DogFriendly = false,
                OpenedYear = 1978,
                Ratings = [5, 4, 5, 4, 4],
                Tags = ["waterfall", "shaded"],
            },
            new()
            {
                Id = 5,
                Name = "Runyon Canyon Loop",
                Region = "Hollywood Hills",
                LengthMiles = 2.7,
                ElevationGainFt = 700,
                Difficulty = Difficulty.Moderate,
                DogFriendly = true,
                OpenedYear = 1984,
                Ratings = [3, 3, 4, 2],
                Tags = ["loop", "busy", "views"],
            },
            new()
            {
                Id = 6,
                Name = "Sandstone Peak",
                Region = "Santa Monica Mtns",
                LengthMiles = 6.1,
                ElevationGainFt = 1000,
                Difficulty = Difficulty.Moderate,
                DogFriendly = false,
                OpenedYear = 1974,
                Ratings = [5, 5, 5, 4],
                Tags = ["summit", "views", "loop"],
            },
            new()
            {
                Id = 7,
                Name = "Bridge to Nowhere",
                Region = "San Gabriels",
                LengthMiles = 10.0,
                ElevationGainFt = 900,
                Difficulty = Difficulty.Moderate,
                DogFriendly = false,
                OpenedYear = 1936,
                Ratings = [5, 4, 4, 4, 5],
                Tags = ["river", "historic", "out-and-back"],
            },
            new()
            {
                Id = 8,
                Name = "Temescal Canyon",
                Region = "Santa Monica Mtns",
                LengthMiles = 4.0,
                ElevationGainFt = 900,
                Difficulty = Difficulty.Moderate,
                DogFriendly = false,
                OpenedYear = 1972,
                Ratings = [4, 4, 4],
                Tags = ["loop", "ocean-views", "wildflowers"],
            },
            new()
            {
                Id = 9,
                Name = "Echo Mountain via Sam Merrill",
                Region = "San Gabriels",
                LengthMiles = 5.4,
                ElevationGainFt = 1400,
                Difficulty = Difficulty.Moderate,
                DogFriendly = true,
                OpenedYear = 1893,
                Ratings = [4, 4, 5, 5, 4],
                Tags = ["historic", "views", "out-and-back"],
            },
            new()
            {
                Id = 10,
                Name = "Solstice Canyon",
                Region = "Santa Monica Mtns",
                LengthMiles = 3.2,
                ElevationGainFt = 600,
                Difficulty = Difficulty.Easy,
                DogFriendly = true,
                OpenedYear = 1975,
                Ratings = [5, 4, 4, 5],
                Tags = ["ruins", "family", "shaded"],
            },
            new()
            {
                Id = 11,
                Name = "Topanga Lookout",
                Region = "Santa Monica Mtns",
                LengthMiles = 2.0,
                ElevationGainFt = 325,
                Difficulty = Difficulty.Easy,
                DogFriendly = false,
                OpenedYear = 1982,
                Ratings = [4, 5, 5],
                Tags = ["views", "out-and-back", "sunset"],
            },
            new()
            {
                Id = 12,
                Name = "Mishe Mokwa Trail",
                Region = "Santa Monica Mtns",
                LengthMiles = 5.8,
                ElevationGainFt = 1200,
                Difficulty = Difficulty.Moderate,
                DogFriendly = true,
                OpenedYear = 1976,
                Ratings = [5, 5, 4, 4],
                Tags = ["loop", "wildflowers", "views"],
            },
            new()
            {
                Id = 13,
                Name = "Devil's Punchbowl",
                Region = "Angeles National Forest",
                LengthMiles = 7.5,
                ElevationGainFt = 1500,
                Difficulty = Difficulty.Hard,
                DogFriendly = false,
                OpenedYear = 1963,
                Ratings = [5, 4, 5, 5],
                Tags = ["geology", "scenic", "out-and-back"],
            },
            new()
            {
                Id = 14,
                Name = "Vasquez Rocks",
                Region = "Angeles National Forest",
                LengthMiles = 3.4,
                ElevationGainFt = 500,
                Difficulty = Difficulty.Easy,
                DogFriendly = true,
                OpenedYear = 1935,
                Ratings = [4, 4, 4, 5],
                Tags = ["geology", "family", "loop"],
            },
            new()
            {
                Id = 15,
                Name = "Santa Anita Canyon",
                Region = "San Gabriels",
                LengthMiles = 9.5,
                ElevationGainFt = 2100,
                Difficulty = Difficulty.Hard,
                DogFriendly = false,
                OpenedYear = 1920,
                Ratings = [5, 5, 4],
                Tags = ["waterfall", "loop", "historic"],
            },
            new()
            {
                Id = 16,
                Name = "Los Liones Trail",
                Region = "Santa Monica Mtns",
                LengthMiles = 7.3,
                ElevationGainFt = 1300,
                Difficulty = Difficulty.Moderate,
                DogFriendly = false,
                OpenedYear = 1971,
                Ratings = [4, 4, 5, 5],
                Tags = ["views", "wildflowers", "out-and-back"],
            },
            new()
            {
                Id = 17,
                Name = "Switzer Falls",
                Region = "San Gabriels",
                LengthMiles = 4.5,
                ElevationGainFt = 650,
                Difficulty = Difficulty.Moderate,
                DogFriendly = true,
                OpenedYear = 1936,
                Ratings = [5, 5, 4, 4, 5],
                Tags = ["waterfall", "family", "shaded"],
            },
            new()
            {
                Id = 18,
                Name = "Franklin Canyon Lake",
                Region = "Santa Monica Mtns",
                LengthMiles = 1.5,
                ElevationGainFt = 150,
                Difficulty = Difficulty.Easy,
                DogFriendly = true,
                OpenedYear = 1981,
                Ratings = [4, 3, 4, 4],
                Tags = ["lake", "family", "loop"],
            },
            new()
            {
                Id = 19,
                Name = "Mount Wilson Trail",
                Region = "San Gabriels",
                LengthMiles = 14.0,
                ElevationGainFt = 4300,
                Difficulty = Difficulty.Hard,
                DogFriendly = false,
                OpenedYear = 1864,
                Ratings = [5, 5, 5, 4, 4],
                Tags = ["summit", "historic", "out-and-back"],
            },
            new()
            {
                Id = 20,
                Name = "Bronson Canyon",
                Region = "Hollywood Hills",
                LengthMiles = 0.7,
                ElevationGainFt = 80,
                Difficulty = Difficulty.Easy,
                DogFriendly = true,
                OpenedYear = 1925,
                Ratings = [3, 4, 3, 4],
                Tags = ["caves", "family", "tv-film"],
            },
        };

        return trails;
    }
}
