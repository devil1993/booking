import { BookingItem } from "../models/BookingItem";

interface IBookingService {
    book(booking: BookingItem): string;
}