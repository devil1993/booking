import styles from './BookingCalendar.module.css';
import { CalendarUIModel } from "./CalendarUIModel";

const CalendarDay: React.FC<{day: CalendarUIModel}> = ({day}) => {
    return (
        <div className={styles.item}  style={{backgroundColor: day.style}}>
            <div className={styles.day}>
                { day.date > 0 && <div>{day.date}</div> }
                { day.booking &&  <div className={styles.type}><strong>{ day.booking.bookingType.name }</strong></div> }
            </div>
        </div>
)
}

export default CalendarDay;