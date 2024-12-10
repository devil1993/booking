namespace Booking.Web.Models
{
    public class BookingDetails
    {
        public int Month { get; set; }
        public int Year { get; set; }
        public IEnumerable<Booking> Bookings { get; set; }
    }
}
