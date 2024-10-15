import { v4 } from 'uuid';
import styles from './BookingCalendar.module.css';
import CalendarDay from './CalendarDay';
import { CalendarUIModel } from './CalendarUIModel';

const CalendarWeek : React.FC<{weekInfo: CalendarUIModel[]}> = ( {weekInfo} ) => {
    return (
        <div className={styles.row}>
            { weekInfo.map((dayInfo) => <CalendarDay key={v4()} day={dayInfo} />) }
        </div>
    )
}

export default CalendarWeek;