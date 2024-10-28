import { BookingItem } from "../models/BookingItem";

export default class CalendarUIModel
{
    date:number;
    booking: BookingItem | undefined;
    style: string
}