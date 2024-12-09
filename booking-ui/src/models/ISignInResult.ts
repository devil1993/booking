export default interface ISignInResult {
    email: string;
    displayName: string;
    emailVerified: boolean;
    idToken: string;
    photoUrl: string | null;
}