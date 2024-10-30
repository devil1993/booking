import { BookingOptions } from "./BookingOptions";

export interface BookingItem {
    id: string;
    date: number;
    // location: string;
    bookingType: BookingOptions;
    bookingStatus: string;
}