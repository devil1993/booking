import { auth, githubAuthProvider } from "..";
import { signInWithPopup } from "firebase/auth";

export const signInWithGithub = async () => {
    console.log('Sign in with Github');
    try {
        const result = await signInWithPopup(auth, githubAuthProvider);
        if(!result || !result.user) {
            throw new Error('User not logged in');
        }
        alert(`Welcome ${result.user.displayName}`);
        const idToken = await result.user.getIdToken();
        console.log(idToken);
        return {
            displayName: result.user.displayName || '',
            email: result.user.email || '',
            emailVerified: result.user.emailVerified,
            photoUrl: result.user.photoURL || '',
            idToken
        }
    } catch (error) {
        console.error('Error signing in with Github: ', error);
        throw error;
    }
};