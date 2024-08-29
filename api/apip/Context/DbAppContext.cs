using apip.Models;
using Microsoft.EntityFrameworkCore;

namespace apip.Context
{
    public class DbAppContext:DbContext
    {
        public DbAppContext(DbContextOptions<DbAppContext> options):base(options)
        {
            
        }

        public DbSet<Produto> Produto { get; set; }
    }
}
