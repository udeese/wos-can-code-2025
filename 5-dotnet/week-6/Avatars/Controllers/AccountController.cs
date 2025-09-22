using Avatars.Models;
using Avatars.Services;
using Avatars.ViewModels;
using Humanizer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Avatars.Controllers;

[Route("account")]
public class AccountController : Controller
{
    private readonly ApplicationContext _context;
    private readonly IPasswordService _passwords;
    private readonly IImageService _images;
    private const string SessionUserId = "userId";

    public AccountController(
        ApplicationContext context,
        IPasswordService passwords,
        IImageService images
    )
    {
        _context = context;
        _passwords = passwords;
        _images = images;
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
        vm.Username = (vm.Username ?? "").Trim().ToLowerInvariant();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.ConfirmPassword = (vm.ConfirmPassword ?? "").Trim();

        if (!ModelState.IsValid)
        {
            return View(nameof(RegisterForm), vm);
        }

        if (_context.Users.Any((u) => u.Email == vm.Email))
        {
            ModelState.AddModelError("Email", "That email is in use. Please login.");
            return View(nameof(RegisterForm), vm);
        }

        var hashedPassword = _passwords.Hash(vm.Password);

        var newUser = new User
        {
            Username = vm.Username,
            Email = vm.Email,
            PasswordHash = hashedPassword,
        };
        await _context.Users.AddAsync(newUser);
        await _context.SaveChangesAsync();

        var newProfile = new Profile { UserId = newUser.Id };
        await _context.Profiles.AddAsync(newProfile);
        await _context.SaveChangesAsync();

        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        return RedirectToAction(nameof(Profile));
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
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();

        if (!ModelState.IsValid)
        {
            return View(nameof(LoginForm), vm);
        }

        if (!_context.Users.Any((u) => u.Email == vm.Email))
        {
            ModelState.AddModelError("", "Invalid user credentials.");
            return View(nameof(LoginForm), vm);
        }

        var maybeUser = await _context.Users.FirstOrDefaultAsync((u) => u.Email == vm.Email);

        if (maybeUser is null)
        {
            return Unauthorized();
        }

        if (!_passwords.Verify(vm.Password, maybeUser.PasswordHash))
        {
            return Unauthorized();
        }

        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);
        return RedirectToAction(nameof(Profile));
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
            .Include((u) => u.Profile)
            .FirstOrDefaultAsync((u) => u.Id == uid);

        if (user is null)
        {
            return NotFound();
        }

        var profileViewModel = new ProfileViewModel
        {
            Username = user.Username,
            Email = user.Email,
            JoinDate = user.CreatedAt.Humanize(),
            FullName = user.Profile!.FullName ?? "",
            Bio = user.Profile!.Bio ?? "",
            Location = user.Profile!.Location ?? "",
            ProfileImageUrl = user.Profile!.ProfileImageUrl ?? "",
        };

        var profileFormViewModel = new ProfileFormViewModel { UserId = user.Profile.UserId };

        var vm = new ProfilePageViewModel
        {
            ProfileViewModel = profileViewModel,
            ProfileFormViewModel = profileFormViewModel,
        };

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("profile/update")]
    public async Task<IActionResult> UpdateProfile(ProfileFormViewModel vm)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
            return Unauthorized();

        vm.FirstName = (vm.FirstName ?? "").Trim();
        vm.LastName = (vm.LastName ?? "").Trim();
        vm.Location = (vm.Location ?? "").Trim();
        vm.Bio = (vm.Bio ?? "").Trim();

        if (!ModelState.IsValid)
        {
            var user = await _context
                .Users.AsNoTracking()
                .Include((u) => u.Profile)
                .FirstOrDefaultAsync((u) => u.Id == uid);

            if (user is null)
            {
                return NotFound();
            }

            var profileViewModel = new ProfileViewModel
            {
                Username = user.Username,
                Email = user.Email,
                JoinDate = user.CreatedAt.Humanize(),
                FullName = user.Profile!.FullName ?? "",
                Bio = user.Profile!.Bio ?? "",
                Location = user.Profile!.Location ?? "",
                ProfileImageUrl = user.Profile!.ProfileImageUrl ?? "",
            };

            var profilePageViewModel = new ProfilePageViewModel
            {
                ProfileViewModel = profileViewModel,
                ProfileFormViewModel = vm,
            };
            return View(nameof(Profile), profilePageViewModel);
        }

        var profile = await _context.Profiles.FirstOrDefaultAsync((p) => p.UserId == uid);
        if (profile is null)
            return NotFound();

        if (vm.UserId != profile.UserId)
            return Forbid();

        string? imageUrl = null;
        if (vm.ProfileImage is not null)
        {
            imageUrl = await _images.UploadImageAsync(vm.ProfileImage);
        }

        profile.FirstName = string.IsNullOrWhiteSpace(vm.FirstName)
            ? profile.FirstName
            : vm.FirstName;
        profile.LastName = string.IsNullOrWhiteSpace(vm.LastName) ? profile.LastName : vm.LastName;
        profile.Location = string.IsNullOrWhiteSpace(vm.Location) ? profile.Location : vm.Location;
        profile.Bio = string.IsNullOrWhiteSpace(vm.Bio) ? profile.Bio : vm.Bio;
        if (!string.IsNullOrWhiteSpace(imageUrl))
        {
            profile.ProfileImageUrl = imageUrl;
        }
        profile.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Profile));
    }
}
