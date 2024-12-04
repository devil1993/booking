import {auth, googleAuthProvider, ISignInResult} from "..";
import {               GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const signInWithGoogle = async (): Promise<ISignInResult> => {
    console.log('Sign in with Google');
    try {
        const result = await signInWithPopup(auth, googleAuthProvider);
        if(!result || !result.user) {
            throw new Error('User not logged in');
        }
        alert(`Welcome ${result.user.displayName}`);
        console.log(result.user.getIdToken());
        const idToken = await result.user.getIdToken();

        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential?.accessToken);

        return {
            displayName: result.user.displayName || '',
            email: result.user.email || '',
            emailVerified: result.user.emailVerified,
            photoUrl: result.user.photoURL || '',
            idToken
        }
    } catch (error) {
        console.error('Error signing in with Google: ', error);
        throw error;
    }
};