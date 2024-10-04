namespace Booking.Web.Models
{
    public class Booking
    {
        public Guid Id { get; set; }
        public DateTime BookingDate { get; set; }
        public BookingOptions BookingType { get; set; }
        public BookingStatus Status { get; set; }
    }
}
