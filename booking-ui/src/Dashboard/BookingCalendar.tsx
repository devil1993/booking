import styles from './BookingCalendar.module.css';
import { IBookingDetailsService, MockBookingDetailsService } from '../services/BookingDetailsService';
import { CalendarUIModel } from './CalendarUIModel';
import { v4 } from 'uuid';
import CalendarDay from './CalendarDay';
import { useEffect, useState } from 'react';
import { Bookings } from '../models/Bookings';
import { IBookingOptionsService, MockBookingOptionsService } from '../services/BookingOptionsService';
import { BookingOptions } from '../models/BookingOptions';
import BookingOverlay from '../PerformBook/BookingOverlay';


const BookingCalendar: React.FC<{}> = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const bookingDetailsService:IBookingDetailsService =new MockBookingDetailsService();
    const bookingOptionsService: IBookingOptionsService = new MockBookingOptionsService();
    let [bookings, setBookngs] = useState<Bookings>();
    let [bookingOptions, setBookingOptions] = useState<BookingOptions[]>([]);
    let [isBooking, setIsBooking] = useState(false);
    useEffect(() => {
         bookingDetailsService.getBookings(date.getMonth(), date.getFullYear()).then(setBookngs);
         bookingOptionsService.getBookingOptions().then(setBookingOptions);
        //  setTimeout(() => {setIsBooking(true)}, 5000);
    }, []);
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let grid : CalendarUIModel[][] = [];
    let dateCounter = 1;
    if(bookings)
    for(let row=0; row<5; row++){
        // set up rows
        let columns: CalendarUIModel[] = [];
        grid.push(columns);
        let column = 0;
        let dayOfWeek = new Date(date.getFullYear(), date.getMonth(), dateCounter).getDay();
        if (row == 0){
            for (let paddingday = 0; paddingday < dayOfWeek; paddingday++)
                {
                    grid[row].push({date: 0, booking: undefined, style: styles.datePad});
                }
        }
        while (dateCounter <= daysInMonth && columns.length < 7)
        {
            let bookingForDate = bookings.bookingItems.filter((bi)=> bi.date.getDate() === dateCounter);
            grid[row].push(
                {
                    date: dateCounter,
                    booking: bookingForDate.length>0 ? bookingForDate[0] : undefined,
                    style: bookingForDate.length>0 ? bookingForDate[0].bookingType.color : ""
                });
            column++;
            dateCounter++;
        }
        if (row == 4 && column < 7)
        {
            var remaining = 7 - column;
            for (let paddingday = 0; paddingday < remaining; paddingday++)
            {
                grid[row].push ({date: 0, booking: undefined, style: styles.datePad});
                column++;
            }
        }
    }
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log(grid);
    return (
        <>
        <div className={styles.container}>
            <h2 className={styles.heading}>
                Booking of {month} - {date.getFullYear()}
            </h2>
            <div className={styles.content}>
                    { daysOfWeek.map((day) => <div key={v4()} className={`${styles.item} ${styles.calHead}`}><div className={styles.day}>{day}</div></div>)}
                    { grid.map(week => week.map(day => <CalendarDay onClick={() => {setIsBooking(true)}} day={day} key={v4()}/>)) }
            </div>

        </div>
        {isBooking && <BookingOverlay onBooked = {() => {setIsBooking(false)}}/>}
        </>
    );
}

export default BookingCalendar;