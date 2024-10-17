import { BookingItem } from "../models/BookingItem";
// import { BookingOptions } from "../models/BookingOptions";
import { Bookings } from "../models/Bookings";

export interface IBookingDetailsService{
    getBookings(month: number, year: number): Promise<Bookings>;
}

export class MockBookingDetailsService implements IBookingDetailsService{
    async getBookings(month: number, year: number): Promise<Bookings> {
        let bookings =  new Bookings();
        bookings.month = month;
        bookings.year = year;
        let response = await fetch('/assets/MockBookingData.json');
        let data: BookingItem[] = await response.json();
        bookings.bookingItems = data;
        bookings.bookingItems = bookings.bookingItems.map((bi)=> {
            return {
                ...bi,
                date: new Date(bi.date)
            };
        });
        console.log(bookings)
        return bookings;
    }

} 
