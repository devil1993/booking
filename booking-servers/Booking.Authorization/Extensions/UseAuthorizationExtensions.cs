using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Booking.Authorization.Extensions
{
    public static class UseAuthorizationExtensions
    {
        public static void AddAuthorizationPolicy(this IServiceCollection services)
        {
            services.AddScoped<IAuthorizationService, AuthorizationService>()
                    .AddScoped<Booking.Common.Models.ContextModel>();

        }
    }
}
