using Booking.Web.Models;

namespace Booking.Web.Services.UserDashboard
{
    public interface IBookingDetailsService
    {
        BookingDetails GetBookingDetails(int month, int year);
    }
}
