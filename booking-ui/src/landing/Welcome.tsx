import { useNavigate } from "react-router-dom";
import styles from './Welcome.module.css';
import { useEffect, useRef } from "react";

const Welcome: React.FC<{}> = () => {
    const navigate = useNavigate();
    let calendarRef = useRef<HTMLButtonElement>(null);
    let serviceRef = useRef<HTMLButtonElement>(null);
    let calendarFocus = () => {
        calendarRef.current?.focus();
    }
    let serviceFocus = () => {
        serviceRef.current?.focus();
    }
    useEffect(calendarFocus,[]);
    return (
        <div className={styles.buttonContainer}>
            <button tabIndex={1} ref={calendarRef} onMouseOver={calendarFocus} onClick={() => {navigate('/dashboard')}}>Goto Calendar</button>
            <button tabIndex={2} ref={serviceRef} onMouseOver={serviceFocus}>Receive service</button>
        </div>
    );
}

export default Welcome;