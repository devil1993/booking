import BookingAPIModel, { BookingStatus } from "../models/APIModels/BookingAPIModel";
import { BookingItem } from "../models/BookingItem";

export interface IBookingService {
    book(booking: BookingItem): Promise<string>;
}

export class BookingService implements IBookingService {
    public async book(booking: BookingItem): Promise<string> {
        let bookingApiObject : BookingAPIModel = new BookingAPIModel();
        bookingApiObject.userId = "123";
        bookingApiObject.date = booking.date;
        bookingApiObject.bookingTypeId = booking.bookingType.id;
        bookingApiObject.status = booking.bookingStatus;

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
        return await response.text();
    }
}