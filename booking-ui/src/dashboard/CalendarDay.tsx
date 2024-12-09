import styles from "./BookingCalendar.module.css";

import { RootState, useAppSelector } from "../contexts";

import CalendarUIModel from "../models/CalendarUIModel";

const CalendarDay: React.FC<{
  day: CalendarUIModel;
  onClick: (day: CalendarUIModel) => void;
}> = ({ day, onClick }) => {
  const bookingOptions = useAppSelector(
    (state: RootState) => state.bookingOptions.options
  );
  const currentBookingOption = bookingOptions.find(
    (option) => option.id === day.booking?.bookingType?.id
  );
  return (
      <div
        className={styles.item + " " + (day.date > 0 ? "" : styles.datePad)}
        style={{ backgroundColor: currentBookingOption?.color }}
        onClick={() => onClick(day)}
      >
        <div className={styles.day}>
          {day.date > 0 && (
            <div className={day.booking ? "booked" : ""}>{day.date}</div>
          )}
          {day.booking && (
            <div className={styles.type}>
              <strong>{currentBookingOption?.name}</strong>
            </div>
          )}
        </div>
      </div>
  );
};

export default CalendarDay;
