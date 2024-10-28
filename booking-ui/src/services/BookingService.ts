import BookingAPIModel, { BookingStatus } from "../models/APIModels/BookingAPIModel";
import { BookingItem } from "../models/BookingItem";

export interface IBookingService {
    book(booking: BookingItem): Promise<BookingItem>;
}

export class BookingService implements IBookingService {
    public async book(booking: BookingItem): Promise<BookingItem> {
        let bookingApiObject : BookingAPIModel = new BookingAPIModel();
        bookingApiObject.userId = "123";
        bookingApiObject.date = new Date(booking.date);
        bookingApiObject.bookingTypeId = booking.bookingType;
        bookingApiObject.status = BookingStatus.Created;

        let response = await fetch('https://localhost:7287/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingApiObject)
        });
        if(!response.ok){
            throw new Error("Failed to book.");
        }
        let generatedId = await response.text();

        booking.id = generatedId;
        booking.bookingStatus = BookingStatus.Created.toString();

        return booking;
    }
}