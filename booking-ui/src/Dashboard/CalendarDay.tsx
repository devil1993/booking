import styles from './BookingCalendar.module.css';
import { CalendarUIModel } from "./CalendarUIModel";

const CalendarDay: React.FC<{day: CalendarUIModel}> = ({day}) => {
    return (
    <div className={styles.col +" " + day.style}>
        <div className={styles.colContainer}>
            <div className={styles.day}>
                { day.date > 0 && day.date }
                { day.booking &&  <div className={styles.type}><strong>{ day.booking.bookingType.name }</strong></div> }
            </div>
        </div>
    </div>
)
}

export default CalendarDay;