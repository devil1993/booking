import { useEffect, useState } from "react";
import styles from "./BookingOverlay.module.css";
import { BookingOptions } from "../models/BookingOptions";
import {
  IBookingOptionsService,
  MockBookingOptionsService,
} from "../services/BookingOptionsService";
const BookingOverlay: React.FC<{onBooked: () => void }> = ({onBooked}) => {
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
                <h2>Booking for Oct 21st, 2024  </h2>
            </div>
          <div className={styles.bookingOptions}>
            {options.map((option) => (
              <div key={option.id} className={styles.bookingOption} style={{backgroundColor:option.color}} onClick={onBooked}>
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
