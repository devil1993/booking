import { useNavigate } from "react-router-dom";
import styles from './Welcome.module.css';

const Welcome: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.buttonContainer}>
            <button onClick={() => {navigate('/dashboard')}}>Goto Calendar</button>
            <button>Receive service</button>
        </div>
    );
}

export default Welcome;