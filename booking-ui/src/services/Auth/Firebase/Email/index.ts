import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { SetStateAction } from "react";
import { auth } from "..";

export const registerUser = async (email: string, name: string, password: string, setLoading: React.Dispatch<SetStateAction<boolean>>) => {
    try {
        setLoading(true);
        console.log('Registering user with email: ', email);
        console.log('Registering user with name: ', name);
        console.log('Registering user with password: ', password);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        if(!user || !user.user) {
            throw new Error('User not created');
        }
        const resultUser = user.user;
        await updateProfile(resultUser, {displayName: name});
        await sendEmailVerification(resultUser);
        console.log(await resultUser.getIdToken());

        console.log('User registered successfully');
        alert(`User registered successfully. Please check your email - ${email} for verification link.`);
    } catch (error) {
        console.error('Error registering user: ', error);
    } finally {
        setLoading(false);
    }
};