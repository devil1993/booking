using Booking.Web.Models;

namespace Booking.Web.Services.UserDashboard
{
    public interface IBookingOptionsService
    {
        IEnumerable<BookingOptions> GetBookingOptions();
    }
}
