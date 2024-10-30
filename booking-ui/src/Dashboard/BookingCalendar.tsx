import { v4 } from "uuid";
import { useEffect } from "react";

import styles from "./BookingCalendar.module.css";

import CalendarDay from "./CalendarDay";
import BookingOverlay from "../PerformBook/BookingOverlay";

import bookingCollectionActions from "../contexts/bookingCollectionContext";
import bookingOptionActions from "../contexts/bookingOptionsContext";

import { RootState, useAppDispatch, useAppSelector } from "../contexts";

import {
  IBookingDetailsService,
  MockBookingDetailsService,
} from "../services/BookingDetailsService";
import { IBookingService, MockBookingService } from "../services/BookingService";

import CalendarUIModel from "../models/CalendarUIModel";
import { BookingOptions } from "../models/BookingOptions";
import { BookingItem } from "../models/BookingItem";
import {
  IBookingOptionsService,
  MockBookingOptionsService,
} from "../services/BookingOptionsService";
import bookingEditActions from "../contexts/bookingEditContext";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const BookingCalendar: React.FC = () => {
  const dispatch = useAppDispatch();

  const bookings = useAppSelector((state: RootState) => state.bookingCollection);
  const bookingDay = useAppSelector((state: RootState) => state.bookingEdit.bookingDay);

  const bookingDetailsService: IBookingDetailsService = new MockBookingDetailsService();
  const bookingService: IBookingService = new MockBookingService();
  const bookingOptionService: IBookingOptionsService = new MockBookingOptionsService();

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });

  useEffect(() => {
    bookingDetailsService
      .getBookings(date.getMonth(), date.getFullYear())
      .then((bookings) => {
        // console.log(JSON.stringify(bookings));
        dispatch(bookingCollectionActions.setBookingCollection(bookings));
      });
    bookingOptionService.getBookingOptions().then((options) => {
      dispatch(bookingOptionActions.setBookingOptions(options));
    });
  }, []);

  const bookingHandler = async (options: BookingOptions, day: number) => {
    let newBooking = {} as BookingItem;
    newBooking.date = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), day)
    ).getTime();
    newBooking.bookingTypeId = options.id;
    newBooking = await bookingService.book(newBooking);

    dispatch(bookingCollectionActions.addBooking(newBooking));
    dispatch(bookingEditActions.clearBooking());
  };

  const dayClickHandler = (day: CalendarUIModel) => {
    if(day.date === 0) return;
    dispatch(bookingEditActions.setBooking({...day}));
  };

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const grid: CalendarUIModel[][] = [];
  let dateCounter = 1;
  if (bookings)
    // GRID COMPUTATION LOGIC STARTS HERE
    for (let row = 0; row < 5; row++) {
      const columns: CalendarUIModel[] = [];
      grid.push(columns);
      let column = 0;
      const dayOfWeek = new Date(
        date.getFullYear(),
        date.getMonth(),
        dateCounter
      ).getDay();
      if (row == 0) {
        for (let paddingday = 0; paddingday < dayOfWeek; paddingday++) {
          grid[row].push({
            date: 0,
            booking: undefined,
            style: styles.datePad,
          });
        }
      }
      while (dateCounter <= daysInMonth && columns.length < 7) {
        const bookingForDate = bookings.bookingItems.filter(
          (bi) => new Date(bi.date).getDate() === dateCounter
        );
        grid[row].push({
          date: dateCounter,
          booking: bookingForDate.length > 0 ? bookingForDate[0] : undefined,
          style: "",
        });
        column++;
        dateCounter++;
      }
      if (row == 4 && column < 7) {
        const remaining = 7 - column;
        for (let paddingday = 0; paddingday < remaining; paddingday++) {
          grid[row].push({
            date: 0,
            booking: undefined,
            style: styles.datePad,
          });
          column++;
        }
      }
    }
  // GRID COMPUTATION LOGIC ENDS HERE

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Booking of {month} - {date.getFullYear()}
        </h2>
        <div className={styles.content}>
          {daysOfWeek.map((day) => (
            <div key={v4()} className={`${styles.item} ${styles.calHead}`}>
              <div className={styles.day}>{day}</div>
            </div>
          ))}
          {grid.map((week) =>
            week.map((day) => (
              <CalendarDay onClick={dayClickHandler} day={day} key={v4()} />
            ))
          )}
        </div>
      </div>
      {bookingDay && (
        <BookingOverlay
          onBooked={bookingHandler}
          day={bookingDay}
          month={month}
          year={date.getFullYear()}
        />
      )}
    </>
  );
};

export default BookingCalendar;
