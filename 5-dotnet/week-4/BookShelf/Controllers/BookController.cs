using BookShelf.Models;
using BookShelf.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public async Task<IActionResult> AllBooks()
    {
        // project to view model
        var books = await _context
            .Books.AsNoTracking()
            .Select(
                (b) =>
                    new BookRowViewModel
                    {
                        Id = b.Id,
                        Title = b.Title,
                        Author = b.Author,
                        Genre = b.Genre,
                    }
            )
            .ToListAsync();
        return View(books);
    }

    [HttpGet("new")]
    public IActionResult NewBook()
    {
        var vm = new BookFormViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
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

    [HttpGet("{id}")]
    public IActionResult BookDetails(int id)
    {
        var maybeBook = _context.Books.AsNoTracking().FirstOrDefault((b) => b.Id == id);
        if (maybeBook is null)
        {
            return NotFound();
        }

        var vm = new BookViewModel
        {
            Id = maybeBook.Id,
            Title = maybeBook.Title,
            Author = maybeBook.Author,
            Genre = maybeBook.Genre,
            ReleaseYear = maybeBook.ReleaseYear,
            HasBeenRead = maybeBook.HasBeenRead,
            Description = maybeBook.Description,
        };

        return View(vm);
    }

    [HttpGet("{id}/edit")]
    public IActionResult EditBook(int id)
    {
        var maybeBook = _context.Books.FirstOrDefault((b) => b.Id == id);
        if (maybeBook is null)
        {
            return NotFound();
        }

        var vm = new BookFormViewModel
        {
            Id = maybeBook.Id,
            Title = maybeBook.Title,
            Author = maybeBook.Author,
            Genre = maybeBook.Genre,
            ReleaseYear = maybeBook.ReleaseYear,
            HasBeenRead = maybeBook.HasBeenRead,
            Description = maybeBook.Description,
        };

        return View(vm);
    }

    [HttpPost("{id}/update")]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateBook(int id, BookFormViewModel vm)
    {
        // normalize the input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Author = (vm.Author ?? "").Trim();
        vm.Genre = (vm.Genre ?? "").Trim();
        vm.Description = (vm.Description ?? "").Trim();

        // check if the form is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(EditBook), vm);
        }

        // double-check the id in the route vs. the vm Id
        if (id != vm.Id)
        {
            return BadRequest();
        }

        // try to find book
        var maybeBook = _context.Books.FirstOrDefault((b) => b.Id == id);
        if (maybeBook is null)
        {
            return NotFound();
        }

        // book is found, update book
        maybeBook.Title = vm.Title;
        maybeBook.Author = vm.Author;
        maybeBook.Genre = vm.Genre;
        maybeBook.ReleaseYear = vm.ReleaseYear;
        maybeBook.HasBeenRead = vm.HasBeenRead;
        maybeBook.Description = vm.Description;
        maybeBook.UpdatedAt = DateTime.UtcNow;

        _context.SaveChanges();
        return RedirectToAction(nameof(BookDetails), new { id });
    }

    [HttpGet("{id}/delete")]
    public IActionResult ConfirmDelete(int id)
    {
        // try to find book
        var maybeBook = _context.Books.FirstOrDefault((b) => b.Id == id);
        if (maybeBook is null)
        {
            return NotFound();
        }

        var vm = new ConfirmDeleteViewModel { Id = maybeBook.Id, Title = maybeBook.Title };

        return View(vm);
    }

    [HttpPost("{id}/destroy")]
    public IActionResult DeleteBook(int id, ConfirmDeleteViewModel vm)
    {
        // double-check the id in the route vs. the vm Id
        if (id != vm.Id)
        {
            return BadRequest();
        }

        // try to find book
        var maybeBook = _context.Books.FirstOrDefault((b) => b.Id == id);
        if (maybeBook is null)
        {
            return NotFound();
        }

        _context.Books.Remove(maybeBook);
        _context.SaveChanges();
        return RedirectToAction(nameof(AllBooks));
    }
}
