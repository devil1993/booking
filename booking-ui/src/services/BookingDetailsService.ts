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
        let data: any[] = await response.json();
        console.log(data);
        // bookings.bookingItems = data;
        bookings.bookingItems = data.map((bi)=> {
            return {
                ...bi,
                bookingType: bi.bookingType.id,
                date: new Date(bi.date).getTime()
            };
        });
        // console.log('XXX', bookings)
        return bookings;
    }

} 
