import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../services/Auth/Firebase/Google";

const Login: React.FC<{}> = () => {

    const navigate = useNavigate();
    return (
        <form action="#">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
            <h3>OR</h3>
            <button type="button" onClick={() => signInWithGoogle(navigate)}>Continue with Google</button>
            <button type="button" onClick={() => {window.location.href = '/dashboard'}}>Continue with Facebook</button>
        </form>
    );
}

export default Login;