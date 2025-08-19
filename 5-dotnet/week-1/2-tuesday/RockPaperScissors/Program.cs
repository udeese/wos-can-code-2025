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
    }

    static void StartGame()
    {
        // TODO: Orchestrate a single or multi-round Rock-Paper-Scissors session.
        // Requirements:
        // 1) Greet the user and ask for a username using GetUsername().
        // 2) Loop rounds until the user chooses to stop (AskToPlayAgain()).
        // 3) Before each round, wait for Enter and perform a 3-2-1 countdown (Countdown(3)).
        // 4) Get the player's choice (GetUserChoice()) and the computer's choice (GetComputerChoice()).
        // 5) Determine the winner (DetermineWinner) and display a suitable message (ResultMessage).
        // 6) After each round, ask if they want to play again.
        throw new NotImplementedException(
            "Implement the game loop that ties all helper methods together."
        );
    }

    static string GetUsername()
    {
        // TODO: Prompt for and validate a username.
        // Requirements:
        // - Prompt: "What should I call you?"
        // - Trim whitespace and ensure the name has at least 3 characters.
        // - If invalid, explain the rule and prompt again until valid.
        // - Return the validated username string.
        Console.Write("What should I call you?");
        string? username = (Console.ReadLine() ?? "").Trim();
        Console.WriteLine($"Hello, {username}!");
        throw new NotImplementedException("Prompt for a username and validate length >= 3.");
    }

    static void Countdown(int from)
    {
        // TODO: Display a countdown then "Go!".
        // Requirements:
        // - Print the numbers from `from` down to 1, one per line.
        // - Wait ~1 second between numbers (Thread.Sleep(1000)).
        // - After the loop, print "Go!".
        throw new NotImplementedException("Write a countdown that delays between prints.");
    }

    static Choice GetComputerChoice()
    {
        // TODO: Return a random Choice for the computer.
        // Requirements:
        // - Use the shared Random instance `_rng`.
        // - Choose uniformly among Choice.Rock, Choice.Paper, Choice.Scissors.
        throw new NotImplementedException("Randomly select and return a Choice value.");
    }

    static Choice GetUserChoice()
    {
        // TODO: Read and validate the player's choice.
        // Requirements:
        // - Prompt the user to enter r/p/s.
        // - Read input, trim, and lowercase it.
        // - Use TryParseChoice to validate and convert to a Choice.
        // - If invalid, show an error and prompt again until valid.
        // - Return the valid Choice.
        throw new NotImplementedException("Prompt repeatedly until r/p/s maps to a valid Choice.");
    }

    static bool TryParseChoice(string? input, out Choice choice)
    {
        // TODO: Parse shorthand input into a Choice.
        // Requirements:
        // - Accept "r" => Choice.Rock, "p" => Choice.Paper, "s" => Choice.Scissors.
        // - Set the out parameter accordingly and return true on success.
        // - Return false on any other input.
        throw new NotImplementedException("Implement input parsing for r/p/s.");
    }

    static RoundResult DetermineWinner(Choice user, Choice computer)
    {
        // TODO: Determine round outcome.
        // Requirements:
        // - If choices are equal, return RoundResult.Tie.
        // - Rock beats Scissors, Paper beats Rock, Scissors beats Paper.
        // - Return RoundResult.Win if the user wins; otherwise RoundResult.Lose.
        throw new NotImplementedException(
            "Compare user vs computer choices and return Win/Lose/Tie."
        );
    }

    static string ResultMessage(RoundResult result)
    {
        // TODO: Convert RoundResult to a friendly message.
        // Requirements:
        // - Win => "You win! 🎉"
        // - Lose => "Computer wins! 🤖"
        // - Tie => "It's a tie! 🤝"
        throw new NotImplementedException("Map RoundResult to a display string.");
    }

    static bool AskToPlayAgain()
    {
        // TODO: Ask the user if they want to play again.
        // Requirements:
        // - Prompt: "Play again? (y/n): "
        // - Read input, trim, and compare case-insensitively.
        // - Return true only for "y"; return false otherwise.
        throw new NotImplementedException("Prompt for y/n and return a boolean.");
    }
}
