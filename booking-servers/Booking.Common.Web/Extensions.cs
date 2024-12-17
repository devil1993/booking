using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booking.Common.Web
{
    public static class Extensions
    {
        public static IServiceCollection AddBookingContext(this IServiceCollection services)
        {
            return services.AddScoped<Booking.Common.Models.ContextModel>();
        }
    }
}
