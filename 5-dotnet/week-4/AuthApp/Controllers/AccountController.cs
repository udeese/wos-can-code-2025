using AuthApp.Models;
using AuthApp.Services;
using AuthApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AuthApp.Controllers;

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
    public IActionResult ProcessRegister(RegistrationFormViewModel vm)
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
        _context.Users.Add(newUser);
        _context.SaveChanges();

        // logs user in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        // redirect to dashboard or home, etc.
        return RedirectToAction(nameof(ProtectedPage));
    }

    [HttpGet("login")]
    public IActionResult LoginForm(string? message)
    {
        var vm = new LoginFormViewModel { Message = message };
        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("login/process")]
    public IActionResult ProcessLogin(LoginFormViewModel vm)
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
        var maybeUser = _context.Users.FirstOrDefault((u) => u.Email == vm.Email);

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
        return RedirectToAction(nameof(ProtectedPage));
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

    [HttpGet("protected")]
    public IActionResult ProtectedPage()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var user = _context.Users.Where((u) => u.Id == uid).FirstOrDefault();
        var username = user!.Username;

        return View("ProtectedPage", username);
    }

    [HttpGet("redirect-to-privacy")]
    public IActionResult RedirectToPrivacy()
    {
        return RedirectToAction(nameof(HomeController.Privacy), "Home");
    }
}
