import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../services/Auth/Firebase/Google";
import { signInWithGithub } from "../services/Auth/Firebase/Github";
import {useState} from "react";
import {ISignInResult, logOut} from "../services/Auth/Firebase";
import {signInWithPassword} from "../services/Auth/Firebase/Email";
import {AppRoutes} from "../Routes";

const Login: React.FC<{}> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const signInResult = await signInWithPassword(email, password);
        if(!signInResult.emailVerified){
            // handle email not verified case.
            await logOut();
        }
        else{
            console.log(signInResult);
            // set context
            navigate(AppRoutes.Dashboard);
        }
    }
    const handleSSOLogin = async (signInMethod: () => Promise<ISignInResult>) => {
        const signInResult = await signInMethod();
        // set context
        console.log(signInResult);
        navigate(AppRoutes.Dashboard);
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            <div className="continueWith">OR CONTINUE WITH</div>
            <button type="button" onClick={() => handleSSOLogin(signInWithGoogle)}>Google</button>
            {/*<button type="button" onClick={() => {window.location.href = '/dashboard'}}>Facebook</button>*/}
            <button type="button" onClick={() => handleSSOLogin(signInWithGithub)}>Github</button>
        </form>
    );
}

export default Login;