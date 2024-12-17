using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booking.Authorization.DataAccess.Extensions
{
    using Booking.Authorization.DataAccess.DBContext;
    using Microsoft.EntityFrameworkCore;

    public static class AuthorizationDataExtensions
    {
        public static IServiceCollection AddAuthorizationDataAccess(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<AuthorizationContext>(
                options => options.UseNpgsql(
                        connectionString,
                        option => option.MigrationsAssembly((typeof(AuthorizationDataExtensions)).Assembly.GetName().Name)
                    )
                );
            return services
                    .AddScoped<Booking.Authorization.DataService.IAuthorizationDataService, AuthorizationDataService>();
        }
    }
}
