using Booking.Web.Models;

namespace Booking.Web.Services.UserDashboard
{
    public class BookingDetailsProvider : IBookingDetailsService
    {
        public BookingDetails GetBookingDetails(int month, int year)
        {
            return new BookingDetails
            {
                Month = month,
                Year = year,
                Bookings = [
                    new () { BookingDate=new DateTime(year,month, 5), BookingType=new BookingOptions(){ Color= "red", Id = Guid.NewGuid(), Name= "veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Fulfilled },
                    new () { BookingDate=new DateTime(year,month, 15), BookingType=new BookingOptions(){ Color= "cyan", Id = Guid.NewGuid(), Name= "non-veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Booked },
                    new () { BookingDate=new DateTime(year,month, 3), BookingType=new BookingOptions(){ Color= "red", Id = Guid.NewGuid(), Name= "veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Booked },
                    new () { BookingDate=new DateTime(year,month, 6), BookingType=new BookingOptions(){ Color= "red", Id = Guid.NewGuid(), Name= "veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Booked },
                    new () { BookingDate=new DateTime(year,month, 7), BookingType=new BookingOptions(){ Color= "cyan", Id = Guid.NewGuid(), Name= "non-veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Booked },
                    new () { BookingDate=new DateTime(year,month, 10), BookingType=new BookingOptions(){ Color= "red", Id = Guid.NewGuid(), Name= "veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Booked },
                    new () { BookingDate=new DateTime(year,month, 23), BookingType=new BookingOptions(){ Color= "red", Id = Guid.NewGuid(), Name= "veg"}, Id = Guid.NewGuid(), Status = BookingStatus.Booked },
                    ]
            };
        }
    }
}
