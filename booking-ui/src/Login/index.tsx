import React from "react";
import styles from "./Login.module.css"

const Login: React.FC = () => {
    return <>
        <h2>Login to booking</h2>
        <form action="#">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button className={styles.button} type="submit">Login</button>
        </form>

        <h3>Or continue with</h3>
        <button className={styles.ssoButton} onClick={()=> {alert("Google")}}>Google</button>
        <button className={styles.ssoButton} onClick={()=> {alert("GitHub")}}>GitHub</button>

    </>
}

export default Login;