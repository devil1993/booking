import styles from './BookingCalendar.module.css';
import { CalendarUIModel } from "./CalendarUIModel";

const CalendarDay: React.FC<{day: CalendarUIModel, onClick: (day: CalendarUIModel) => void }> = ({day, onClick}) => {
    return (
        <>
            <div 
                className={styles.item + ' ' +(day.date>0?'':styles.datePad)}
                style={{backgroundColor: day.style}}
                onClick={() => onClick(day)}>
                <div className={styles.day}>
                    { day.date > 0 && <div className={day.booking? 'booked' : ''}>{day.date}</div> }
                    { day.booking &&  <div className={styles.type}><strong>{ day.booking.bookingType.name }</strong></div> }
                </div>
            </div>
        </>
)
}

export default CalendarDay;