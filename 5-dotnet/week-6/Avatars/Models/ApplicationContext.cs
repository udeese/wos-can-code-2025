using Microsoft.EntityFrameworkCore;

namespace Avatars.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Profile> Profiles { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options)
        : base(options) { }
}
