import { NavigateFunction } from "react-router-dom";
import { auth, githubAuthProvider } from "..";
import { AppRoutes } from "../../../../Routes";
import { signInWithPopup } from "firebase/auth";

export const signInWithGithub = async (navigate: NavigateFunction) => {
    console.log('Sign in with Github');
    try {
        const result = await signInWithPopup(auth, githubAuthProvider);
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