using Microsoft.EntityFrameworkCore;

namespace BookShelf.Models;

public class BookContext : DbContext
{
    public DbSet<Book> Books { get; set; }

    public BookContext(DbContextOptions<BookContext> options)
        : base(options) { }
}
