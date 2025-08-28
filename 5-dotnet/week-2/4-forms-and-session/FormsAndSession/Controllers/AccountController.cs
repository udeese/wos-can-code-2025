using FormsAndSession.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FormsAndSession.Controllers;

[Route("account/")]
public class AccountController : Controller
{
    // display the form
    [HttpGet("register")]
    public IActionResult RegisterForm()
    {
        var vm = new RegisterFormViewModel();
        return View(vm);
    }

    // process the form
    [HttpPost("register")]
    [ValidateAntiForgeryToken]
    public IActionResult ProcessRegisterForm(RegisterFormViewModel vm)
    {
        // normalize user input
        vm.Username = (vm.Username ?? "").Trim();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.PasswordConfirm = (vm.PasswordConfirm ?? "").Trim();

        if (!ModelState.IsValid)
        {
            return View("RegisterForm", vm);
        }

        HttpContext.Session.SetString("Username", vm.Username);
        HttpContext.Session.SetString("Email", vm.Email);

        return RedirectToAction("Success");
    }

    [HttpGet("success")]
    public IActionResult Success()
    {
        var vm = new SuccessViewModel
        {
            Username = HttpContext.Session.GetString("Username") ?? "",
            Email = HttpContext.Session.GetString("Email") ?? "",
        };

        return View(vm);
    }
}
