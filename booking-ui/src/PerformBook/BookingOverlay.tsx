import { useEffect, useState } from "react";
import styles from "./BookingOverlay.module.css";
import { BookingOptions } from "../models/BookingOptions";
import {
  IBookingOptionsService,
  MockBookingOptionsService,
} from "../services/BookingOptionsService";
import CalendarUIModel from "../models/CalendarUIModel";
const BookingOverlay: React.FC<{onBooked: (option: BookingOptions, day:number) => void, day: CalendarUIModel, month: string, year: number }> = ({onBooked, day, month, year}) => {
  let [options, setOptions] = useState<BookingOptions[]>([]);
  const bookingOptionsService: IBookingOptionsService =
    new MockBookingOptionsService();
  useEffect(() => {
    bookingOptionsService.getBookingOptions().then(setOptions);
  }, []);
  return (
    <div className={styles.overlay}>
      <div className={styles.bookingContainer}>
        <div className={styles.bookingArea}>
            <div className={styles.header}>
                <h2>Booking for {year}-{month}-{day.date}  </h2>
            </div>
          <div className={styles.bookingOptions}>
            {options.map((option) => (
              <div 
                key={option.id} 
                className={styles.bookingOption} 
                style={{backgroundColor:option.color}} 
                onClick={
                    () => {onBooked(option, day.date);}
                    }
                >
                <div>{option.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOverlay;
