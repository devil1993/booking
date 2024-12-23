using Booking.System.Tenancy.DataService;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Booking.System.Core.DataAccess.Tenant.Extensions;

public static class TenantDataAccessExtensions
{
    public static IServiceCollection AddTenantDataAccess(this IServiceCollection services, string connectionString)
    {
        return services.AddDbContext<DbContext.TenantContext>(
                options => options.UseNpgsql(
                    connectionString,
                    option => option.MigrationsAssembly(typeof(DbContext.TenantContext).Assembly.FullName))
            )
            .AddScoped<ITenancyDataAccess, TenancyDataAccess>();
    }
}