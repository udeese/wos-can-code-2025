using MadLibs.Utilities;
using MadLibs.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace MadLibs.Controllers;

[Route("mad-libs/")]
public class MadLibsController : Controller
{
    [HttpGet("form")]
    public IActionResult DisplayForm()
    {
        var vm = new FormViewModel();
        return View(vm);
    }

    [HttpPost("/process")]
    public IActionResult ProcessForm(FormViewModel vm)
    {
        // normalize input
        InputNormalization.Normalize(vm);

        // check model state
        if (!ModelState.IsValid)
        {
            return View("DisplayForm", vm);
        }

        // store data in session
        HttpContext.Session.SetObject("MadLibForm", vm);

        // redirect to success
        return RedirectToAction("Success");
    }

    [HttpGet("success")]
    public IActionResult Success()
    {
        var vm = HttpContext.Session.GetObject<FormViewModel>("MadLibForm");
        if (vm == null)
        {
            return RedirectToAction("DisplayForm", new FormViewModel());
        }
        return View(vm);
    }
}
