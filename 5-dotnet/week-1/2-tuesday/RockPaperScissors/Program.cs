using System.Text.RegularExpressions;

enum Choice
{
    Rock,
    Paper,
    Scissors,
}

enum RoundResult
{
    Win,
    Lose,
    Tie,
}

class Program
{
    // Reuse one Random for the whole app
    private static readonly Random _rng = new Random();

    static void Main()
    {
        StartGame();
        Console.WriteLine("Anne was here!");
    }

    static void StartGame()
    {
        // TODO: Orchestrate a single or multi-round Rock-Paper-Scissors session.
        // Requirements:
        // 1) Greet the user and ask for a username using GetUsername().
        Console.WriteLine("Welcome to Rock, Paper, Scissors! 🪨📃✂️");
        string username = GetUsername();
        // 2) Loop rounds until the user chooses to stop (AskToPlayAgain()).
        bool playing = true;
        while (playing)
        {
            // 3) Before each round, wait for Enter and perform a 3-2-1 countdown (Countdown(3)).
            Countdown(3);
            // 4) Get the player's choice (GetUserChoice()) and the computer's choice (GetComputerChoice()).
            var userChoice = GetUserChoice();
            var computerChoice = GetComputerChoice();

            Console.WriteLine($"User Choice: {userChoice}\nComputer Choice: {computerChoice}");
            // 5) Determine the winner (DetermineWinner) and display a suitable message (ResultMessage).
            RoundResult result = DetermineWinner(userChoice, computerChoice);
            Console.WriteLine(ResultMessage(result));
            // 6) After each round, ask if they want to play again.
            playing = AskToPlayAgain();
        }
    }

    static string GetUsername()
    {
        // TODO: Prompt for and validate a username. (By Janice and Ursula) 🔥🤘😎🤘🔥
        // Requirements:
        // - Prompt: "What should I call you?"
        Console.WriteLine($"What should I call you?");
        // - Trim whitespace and ensure the name has at least 3 characters.
        string? username = Console.ReadLine().Trim();
        // - If invalid, explain the rule and prompt again until valid.
        if (username.Length <= 3 || username.Length == 0)
        {
            Console.WriteLine("Username cannot be empty or less than 3 characters.");
        }
        // - Return the validated username string.
        Console.Write("What should I call you?");
        // string? username = (Console.ReadLine() ?? "").Trim();
        Console.WriteLine($"Hello, {username}!");
        throw new NotImplementedException("Prompt for a username and validate length >= 3.");
    }

    static void Countdown(int from)
    {
        // orlando and jason (👉ﾟヮﾟ)👉
        // TODO: Display a countdown then "Go!".
        // Requirements:
        // - Print the numbers from `from` down to 1, one per line.
        // - Wait ~1 second between numbers (Thread.Sleep(1000)).
        // - After the loop, print "Go!".

        for (int i = from; i > 0; i--)
        {
            Console.WriteLine(i);
            Thread.Sleep(1000);
        }
        Console.WriteLine("GO");

        // throw new NotImplementedException("Write a countdown that delays between prints.");
    }

    static Choice GetComputerChoice()
    {
        // TODO: Return a random Choice for the computer.
        // Requirements:
        // - Use the shared Random instance `_rng`.
        // - Choose uniformly among Choice.Rock, Choice.Paper, Choice.Scissors.
        // throw new NotImplementedException("Randomly select and return a Choice value.");

        var selectedChoice = new List<Choice>() { Choice.Rock, Choice.Paper, Choice.Scissors };
        var randNum = _rng.Next(0, selectedChoice.Count);
        return selectedChoice[randNum];
    }

    static Choice? GetUserChoice()
    {
        // TODO: Read and validate the player's choice.
        // Requirements:
        // - Prompt the user to enter r/p/s.
        Console.WriteLine("Select r, p, or s");
        // - Read input, trim, and lowercase it.
        string userChoice = (Console.ReadLine() ?? "").ToLower();
        // - Use TryParseChoice to validate and convert to a Choice.
        bool isValidChoice = TryParseChoice(userChoice, out Choice? validatedChoice);
        // Choice resultEnum = Enum.TryParse<Choice>(userChoice);
        // - If invalid, show an error and prompt again until valid.
        if (!isValidChoice)
        {
            Console.WriteLine(
                "Invalid choice! Please enter 'r' for Rock, 'p' for Paper, or 's' for Scissors."
            );
        }

        // Return validated choice
        return validatedChoice;
    }

    static bool TryParseChoice(string? input, out Choice? choice)
    {
        // DONE BY LEBRON JAMES AND STEPHEN CURRY
        // TODO: Parse shorthand input into a Choice.
        // Requirements:
        // - Accept "r" => Choice.Rock, "p" => Choice.Paper, "s" => Choice.Scissors.
        // - Set the out parameter accordingly and return true on success.
        // - Return false on any other input.
        switch (input)
        {
            case "r":
                choice = Choice.Rock;
                return true;
            case "p":
                choice = Choice.Paper;
                return true;
            case "s":
                choice = Choice.Scissors;
                return true;
            default:
                choice = null;
                return false;
        }
    }

    static RoundResult DetermineWinner(Choice? user, Choice computer)
    {
        // Lance and Dan

        // TODO: Determine round outcome.
        // Requirements:
        // - If choices are equal, return RoundResult.Tie.
        // - Rock beats Scissors, Paper beats Rock, Scissors beats Paper.
        // - Return RoundResult.Win if the user wins; otherwise RoundResult.Lose.

        // Are they tied?
        if (user == computer)
        {
            return RoundResult.Tie;
        }
        // Checking if the user is in a winning state
        if (
            (user == Choice.Scissors && computer == Choice.Paper)
            || (user == Choice.Paper && computer == Choice.Rock)
            || (user == Choice.Rock && computer == Choice.Scissors)
        )
        {
            return RoundResult.Win;
        }
        // If we did not tie or win, we lost!
        return RoundResult.Lose;
    }

    static string ResultMessage(RoundResult result)
    {
        // BY SAMPSON AND JANIS! the dream team 🔥

        // TODO: Convert RoundResult to a friendly message.
        // Requirements:
        // - Win => "You win! 🎉"
        // - Lose => "Computer wins! 🤖"
        // - Tie => "It's a tie! 🤝"
        //throw new NotImplementedException("Map RoundResult to a display string.");
        string message = "";
        switch (result)
        {
            case RoundResult.Win:
                message = "You win! 🎉";
                break;
            case RoundResult.Lose:
                message = "Computer wins! 🤖";
                break;
            case RoundResult.Tie:
                message = "It's a tie! 👔";
                break;
            default:
                message = "No result. 😭";
                break;
        }
        return message;
        Console.WriteLine(message);
    }

    static bool AskToPlayAgain()
    {
        // Completed by: Beril

        // TODO: Ask the user if they want to play again.
        // Requirements:
        // - Prompt: "Play again? (y/n): "
        // - Read input, trim, and compare case-insensitively.
        // - Return true only for "y"; return false otherwise.
        Console.Write("Play again? (y/n): ");
        var input = Console.ReadLine();
        while (string.IsNullOrEmpty(input) || !Regex.IsMatch(input, "^[yYnN]$"))
        {
            if (string.IsNullOrEmpty(input))
            {
                Console.Write("Please make a selection (y/n): ");
                input = Console.ReadLine();
            }
            else
            {
                Console.Write("Please enter 'y' or 'n': ");
                input = Console.ReadLine();
            }
        }
        if (input.ToLower() == "y")
        {
            return true;
        }
        return false;
    }
}
