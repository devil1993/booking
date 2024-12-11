using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booking.UserManagement.DataAccess.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddUserManagementDataAccess(this IServiceCollection @this)
        {
            return @this
                    .AddSingleton<Policy.DataService.IUserDataService, DataProvider.UserDataService>();
        }
    }
}
