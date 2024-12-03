import { NavigateFunction } from "react-router-dom";
import { auth, googleAuthProvider } from "..";
import { signInWithPopup } from "firebase/auth";
import { AppRoutes } from "../../../../Routes";

export const signInWithGoogle = async (navigate: NavigateFunction) => {
    console.log('Sign in with Google');
    try {
        const result = await signInWithPopup(auth, googleAuthProvider);
        if(!result || !result.user) {
            throw new Error('User not logged in');
        }
        alert(`Welcome ${result.user.displayName}`);
        console.log(result.user.getIdToken());
        navigate(AppRoutes.Dashboard);
    } catch (error) {
        console.error('Error signing in with Google: ', error);
    }
    finally{

    }
};