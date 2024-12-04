import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../services/Auth/Firebase/Google";
import { signInWithGithub } from "../services/Auth/Firebase/Github";

const Login: React.FC<{}> = () => {

    const navigate = useNavigate();
    return (
        <form action="#">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
            <div className="continueWith">OR CONTINUE WITH</div>
            <button type="button" onClick={() => signInWithGoogle(navigate)}>Google</button>
            <button type="button" onClick={() => {window.location.href = '/dashboard'}}>Facebook</button>
            <button type="button" onClick={() => signInWithGithub(navigate)}>Github</button>
        </form>
    );
}

export default Login;