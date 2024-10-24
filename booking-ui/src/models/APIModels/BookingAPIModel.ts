export default class BookingAPIModel {
    userId: string;
    date: Date;
    bookingTypeId: string;
    status: BookingStatus;
}

export enum BookingStatus{
    Created, // Created but pending confirmation
    Confirmed, // Confirmed
    Fulfilled, // Consumed, Fullfilled, Executed Ordet
    Cancelled //Deleted, Cancelled, Rejected
}