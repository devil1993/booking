import { BookingItem } from "../models/BookingItem";
import { Bookings } from "../models/Bookings";

export interface IBookingDetailsService {
  getBookings(month: number, year: number): Promise<Bookings>;
}

export class MockBookingDetailsService implements IBookingDetailsService {
  async getBookings(month: number, year: number): Promise<Bookings> {
    let bookings = { month, year } as Bookings;
    let response = await fetch("/assets/MockBookingData.json");
    let data: BookingItem[] = await response.json();
    // console.log(data);
    // bookings.bookingItems = data;
    bookings.bookingItems = data.map((bi) => {
      return {
        id: bi.id,
        bookingType: bi.bookingType,
        bookingStatus: bi.bookingStatus.toString(),
        date: new Date(bi.date).getTime(),
      } as BookingItem;
    });
    console.log(bookings);
    return bookings;
  }
}
