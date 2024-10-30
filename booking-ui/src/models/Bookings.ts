import { BookingItem } from "./BookingItem";

export interface Bookings {
    month: number;
    year: number;
    bookingItems: BookingItem[];
}