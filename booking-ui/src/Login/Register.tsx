import { useState } from "react";
import { registerUser } from "../services/Auth/Firebase/Email";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../Routes";

const Register: React.FC<{}> = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Registering user with email: ', email);
        console.log('Registering user with name: ', name);
        console.log('Registering user with password: ', password);
        await registerUser(email, name, password, setLoading);
        navigate(AppRoutes.Login)
    };

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" required id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor="email">Email:</label>
            <input type="email" required id="email" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input type="password" required id="password" name="password" value={password} onChange={e=> setPassword(e.target.value)}/>
            <button type="submit">Register with email</button>
        </form>
    );
}

export default Register;