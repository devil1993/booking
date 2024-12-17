using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.Authorization.DataAccess.DBContext
{
    public class AuthorizationContext : DbContext
    {
        public AuthorizationContext(DbContextOptions<AuthorizationContext> options) : base(options)
        {
        }

        public DbSet<Models.UserRoles> UserRoles { get; set; }
        public DbSet<Models.SysAdminUsers> SysAdminUsers { get; set; }
    }
}
