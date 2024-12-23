using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booking.System.Core.DataAccess.Tenant.DbContext
{
    public class TenantContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<Models.Tenant> Tenants { get; set; }
        public TenantContext(DbContextOptions<TenantContext> options) : base(options)
        {
        }
    }
}
