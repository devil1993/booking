import { useNavigate } from "react-router-dom";

const Welcome: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <div style={{display: 'flex', height: '100vh', width: '100vw', 'justifyContent': 'center'}}>
            <button style={{margin: 'auto', fontSize: '2em'}} onClick={() => {navigate('/dashboard')}}>Goto Calendar</button>
            <button style={{margin: 'auto', fontSize: '2em'}}>Receive service</button>
        </div>
    );
}

export default Welcome;