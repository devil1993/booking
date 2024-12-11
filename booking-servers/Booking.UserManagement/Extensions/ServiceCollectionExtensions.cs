using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booking.UserManagement.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddUserManagementPolicy(this IServiceCollection @this)
        {
            return @this
                    .AddSingleton<Policy.IUserService, Policy.UserManagementPolicyImpl>()
                    .AddSingleton<Policy.IUserManagementService, Policy.UserManagementPolicyImpl>();
        }
    }
}
