import { BookingOptions } from "../models/BookingOptions";

export interface IBookingOptionsService{
    getBookingOptions(): Promise<BookingOptions[]>;
}

export class MockBookingOptionsService implements IBookingOptionsService{
    async getBookingOptions(): Promise<BookingOptions[]> {
        let response = await fetch('/assets/MockBookingOptions.json');
        let data: BookingOptions[] = await response.json();
        return data;
    }
}