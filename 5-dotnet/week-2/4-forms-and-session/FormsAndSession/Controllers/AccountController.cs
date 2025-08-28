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
    public IActionResult ProcessRegisterForm(RegisterFormViewModel vm)
    {
        vm.Username = (vm.Username ?? "").Trim();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.PasswordConfirm = (vm.PasswordConfirm ?? "").Trim();

        if (!ModelState.IsValid)
        {
            return View("RegisterForm", vm);
        }

        return RedirectToAction("success");
    }

    [HttpGet("success")]
    public IActionResult Success()
    {
        return View();
    }
}
