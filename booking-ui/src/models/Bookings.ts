import { BookingItem } from "./BookingItem";

export class Bookings {
    public month: number;
    public year: number;
    public bookingItems: BookingItem[] = [];
}