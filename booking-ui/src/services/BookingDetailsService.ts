import { Bookings } from "../models/Bookings";

export interface IBookingDetailsService{
    getBookings(month: number, year: number): Bookings;
}
export class BookingDetailsService implements IBookingDetailsService{
    getBookings(month: number, year: number): Bookings {
        let bookings =  new Bookings();
        bookings.month = month;
        bookings.year = year;
        bookings.bookingItems = [
            {
                id: 1,
                date: new Date(year, month, 1),
                location: "New York",
                bookingType: {
                    color: "red",
                    id: "1",
                    name: "Veg"
                }
            },
            {
                id: 2,
                date: new Date(year, month, 2),
                location: "Los Angeles",
                bookingType: {
                    color: "blue",
                    id: "2",
                    name: "Training"
                }
            },
            {
                id: 3,
                date: new Date(year, month, 3),
                location: "Chicago",
                bookingType: {
                    color: "green",
                    id: "3",
                    name: "Interview"
                }
            }
        ];
        return bookings;
    }

} 
