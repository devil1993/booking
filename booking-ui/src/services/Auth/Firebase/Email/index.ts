import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { SetStateAction } from "react";
import {auth} from "..";
import ISignInResult from "../../../../models/ISignInResult.ts";

export const registerUser = async (email: string, password: string, setLoading: React.Dispatch<SetStateAction<boolean>>) => {
    try {
        setLoading(true);
        console.log('Registering user with email: ', email);
        console.log('Registering user with password: ', password);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        if(!user || !user.user) {
            throw new Error('User not created');
        }
        const resultUser = user.user;
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



export const signInWithPassword = async (email: string, password: string): Promise<ISignInResult> => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        if(result && result.user){
            const idToken = await result.user.getIdToken();
            return {
                displayName: result.user.displayName || '',
                email: result.user.email || '',
                emailVerified: result.user.emailVerified,
                idToken,
                photoUrl: result.user.photoURL
            }
        }
        else{
            throw new Error("Unable to log user in");
        }
    }
    catch(error){
        console.error('Error signing in with Password: ', error);
        throw error;
    }
}

