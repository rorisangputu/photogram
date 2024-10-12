import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User } from 'firebase/auth';
import { createContext } from 'react';

type AuthContextData = {
    user: User | null;
    logIn: typeof logIn;
    signUp: typeof signUp;
    logOut: typeof logOut;
    googleSignIn: typeof googleSignIn;
}

const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    signOut(auth);
}

const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
}

export const userAuthContext = createContext<AuthContextData>({
    user: null;
    logIn,
    signUp,
    logOut,
    googleSignIn
})