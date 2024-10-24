import { BookingOptions } from "./BookingOptions";

export class BookingItem {
    id: number;
    date: Date;
    location: string;
    bookingType: BookingOptions;
    bookingStatus: string;
}