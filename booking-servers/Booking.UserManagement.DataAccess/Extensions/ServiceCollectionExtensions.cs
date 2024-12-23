using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Npgsql.EntityFrameworkCore.PostgreSQL.Extensions;

namespace Booking.UserManagement.DataAccess.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddUserManagementDataAccess(this IServiceCollection @this, string connectionString)
        {
            @this.AddDbContext<DbContext.UserDbContext>(
                options => options.UseNpgsql(
                    connectionString,
                    option => option.MigrationsAssembly((typeof(DbContext.UserDbContext)).Assembly.GetName().Name)
                    )
                );
            return @this
                    .AddScoped<Policy.DataService.IUserDataService, DataProvider.UserDataService>();
        }
    }
}
