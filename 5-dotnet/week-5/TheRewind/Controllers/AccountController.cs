using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheRewind.Models;
using TheRewind.Services;
using TheRewind.ViewModels;

namespace TheRewind.Controllers;

[Route("account")]
public class AccountController : Controller
{
    private readonly ApplicationContext _context;
    private readonly IPasswordService _passwords;
    private const string SessionUserId = "userId";

    public AccountController(ApplicationContext context, IPasswordService passwords)
    {
        _context = context;
        _passwords = passwords;
    }

    [HttpGet("register")]
    public IActionResult RegisterForm()
    {
        var vm = new RegistrationFormViewModel();
        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("register/process")]
    public async Task<IActionResult> ProcessRegister(RegistrationFormViewModel vm)
    {
        // normalize input
        vm.Username = (vm.Username ?? "").Trim().ToLowerInvariant();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.ConfirmPassword = (vm.ConfirmPassword ?? "").Trim();

        // check if input is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(RegisterForm), vm);
        }

        if (_context.Users.Any((u) => u.Email == vm.Email))
        {
            // manually add an error to model state
            ModelState.AddModelError("Email", "That email is in use. Please login.");
            return View(nameof(RegisterForm), vm);
        }

        // hash the password
        var hashedPassword = _passwords.Hash(vm.Password);

        // create new user
        var newUser = new User
        {
            Username = vm.Username,
            Email = vm.Email,
            PasswordHash = hashedPassword,
        };

        // add the user to db
        await _context.Users.AddAsync(newUser);
        await _context.SaveChangesAsync();

        // logs user in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        // redirect to dashboard or home, etc.
        return RedirectToAction("AllMovies", "Movie");
    }

    [HttpGet("login")]
    public IActionResult LoginForm(string? message)
    {
        var vm = new LoginFormViewModel { Message = message };
        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("login/process")]
    public async Task<IActionResult> ProcessLogin(LoginFormViewModel vm)
    {
        // normalize input
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();

        // check if input is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(LoginForm), vm);
        }

        // check if user exists
        if (!_context.Users.Any((u) => u.Email == vm.Email))
        {
            // manually add an error to model state
            ModelState.AddModelError("", "Invalid user credentials.");
            return View(nameof(LoginForm), vm);
        }

        // email exists, find user
        var maybeUser = await _context.Users.FirstOrDefaultAsync((u) => u.Email == vm.Email);

        if (maybeUser is null)
        {
            return Unauthorized();
        }

        // verify password
        if (!_passwords.Verify(vm.Password, maybeUser.PasswordHash))
        {
            return Unauthorized();
        }

        // Log the user in
        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);
        return RedirectToAction("AllMovies", "Movie");
    }

    [HttpGet("logout")]
    public IActionResult ConfirmLogout()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is null)
        {
            return Unauthorized();
        }

        return View();
    }

    [ValidateAntiForgeryToken]
    [HttpPost("logout/process")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();

        return RedirectToAction(nameof(LoginForm), new { message = "logout-successful" });
    }

    [HttpGet("profile")]
    public async Task<IActionResult> Profile()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var user = await _context
            .Users.AsNoTracking()
            .Include((u) => u.Movies)
            .Include((u) => u.Ratings)
            .FirstOrDefaultAsync((u) => u.Id == uid);
        if (user is null)
        {
            return NotFound();
        }

        var vm = new AccountProfileViewModel
        {
            Username = user.Username,
            Email = user.Email,
            MoviesAddedCount = user.Movies.Count,
            MoviesRatedCount = user.Ratings.Count,
        };
        return View(vm);
    }
}
