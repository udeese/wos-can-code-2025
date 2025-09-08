using BookShelf.Models;
using BookShelf.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace BookShelf.Controllers;

[Route("books")]
public class BookController : Controller
{
    private readonly BookContext _context;

    public BookController(BookContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult AllBooks()
    {
        return View();
    }

    [HttpGet("new")]
    public IActionResult NewBook()
    {
        var vm = new BookFormViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    public IActionResult CreateBook(BookFormViewModel vm)
    {
        // normalize the input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Author = (vm.Author ?? "").Trim();
        vm.Genre = (vm.Genre ?? "").Trim();
        vm.Description = (vm.Description ?? "").Trim();

        // check if the form is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(NewBook), vm);
        }

        var newBook = new Book
        {
            Title = vm.Title,
            Author = vm.Author,
            Genre = vm.Genre,
            ReleaseYear = vm.ReleaseYear,
            HasBeenRead = vm.HasBeenRead,
            Description = vm.Description,
        };

        _context.Books.Add(newBook);
        _context.SaveChanges();
        return RedirectToAction(nameof(AllBooks));
    }
}
