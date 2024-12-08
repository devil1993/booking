import { useNavigate } from "react-router-dom";
import styles from './Welcome.module.css';
import { useEffect, useRef } from "react";

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    const calendarRef = useRef<HTMLButtonElement>(null);
    const serviceRef = useRef<HTMLButtonElement>(null);
    const calendarFocus = () => {
        calendarRef.current?.focus();
    }
    const serviceFocus = () => {
        serviceRef.current?.focus();
    }
    useEffect(calendarFocus,[]);
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} tabIndex={1} ref={calendarRef} onMouseOver={calendarFocus} onClick={() => {navigate('/dashboard')}}>Goto Calendar</button>
            <button className={styles.button} tabIndex={2} ref={serviceRef} onMouseOver={serviceFocus}>Receive service</button>
        </div>
    );
}

export default Welcome;