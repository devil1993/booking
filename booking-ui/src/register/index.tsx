import { useState } from "react";
import { registerUser } from "../services/Auth/Firebase/Email";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../routes";
import styles from './Register.module.css'

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Registering user with email: ', email);
        console.log('Registering user with password: ', password);
        await registerUser(email, password, setLoading);
        navigate(AppRoutes.Login)
    };

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.loginFormArea}>
                        <div className={styles.title}>
                            <h2>Register to booking</h2>
                        </div>
                        <div className={styles.inputs}>
                            <form action="#" className={styles.loginForm} onSubmit={handleSubmit}>
                                {/*<div className={styles.input}>*/}
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required tabIndex={1}
                                       placeholder={"yourmail@provider.ext"} value={email} onChange={e => setEmail(e.target.value)}/>
                                {/*</div>*/}
                                {/*<div className={styles.input}>*/}
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required tabIndex={2}
                                       placeholder={"password"} value={email} onChange={e => setPassword(e.target.value)}/>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="cnfPassword" name="cnfPassword" required tabIndex={3}
                                       placeholder={"confirm password"}/>
                                {/*</div>*/}
                                {/*<div className={styles.input}>*/}
                                <button className={styles.button} type="submit" tabIndex={4}>Sign Up</button>
                                {/*</div>*/}
                            </form>
                        </div>
                        <div className={styles.links}>
                            <div className={styles.link}>
                                <a href="#" tabIndex={5}>Already a user?</a>
                            </div>
                            {/*<div className={styles.link}>*/}
                            {/*    <a href="#">Forgot Password</a>*/}
                            {/*</div>*/}
                        </div>
                        <div className={styles.continueWith}>
                            <h3>Or continue with</h3>
                        </div>
                        <div className={styles.ssoButtons}>
                            <button className={styles.ssoButton} onClick={() => {
                                alert("Google")
                            }} tabIndex={6}>
                                <div className={styles.icons}>
                                    <svg className={styles.icons}
                                         width="800px" height="800px" viewBox="0 0 20 20" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg">

                                        <title>google [#178]</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs>

                                        </defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Dribbble-Light-Preview"
                                               transform="translate(-300.000000, -7399.000000)"
                                               fill="#000000">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path className={styles.googleIcon}
                                                          d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386"
                                                          id="google-[#178]">

                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>Google</div>
                            </button>
                            <button className={styles.ssoButton} onClick={() => {
                                alert("GitHub")
                            }} tabIndex={7}>
                                <div className={styles.icons}>
                                    <svg className={styles.icons} width="800px" height="800px" viewBox="0 0 48 48"
                                         id="Layer_2" data-name="Layer 2"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className={styles.githubIcon}
                                              d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"/>
                                    </svg>

                                </div>
                                <div>
                                    GitHub
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img className={styles.mainImage} src="/booking.jpg"
                             alt="illustration showing booking on calendar"/>
                    </div>
                </div>
            </div>

        </>
    // <form action="#" onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" required id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" required id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
    //     <label htmlFor="password">Password:</label>
    //     <input type="password" required id="password" name="password" value={password}
    //            onChange={e => setPassword(e.target.value)}/>
    //     <button type="submit">Register with email</button>
    // </form>
)
    ;
}

export default Register;