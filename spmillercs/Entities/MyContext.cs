using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace spmillercs.Entities
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {
        }

        public DbSet<Entry> entries { get; set; }
    }
}