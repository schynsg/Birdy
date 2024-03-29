import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDhO5AzJldYqK07984Yq6OxF-sEG53FnJI",
    authDomain: "birdy-1e423.firebaseapp.com",
    projectId: "birdy-1e423",
    storageBucket: "birdy-1e423.appspot.com",
    messagingSenderId: "333756459953",
    appId: "1:333756459953:web:c8f7650cad40e60b402b90"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    //Inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    //Connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //Déconnexion
    logoutUser = () =>
        this.auth.signOut();

    user = userId => this.db.doc(`users/${userId}`);
}

export default Firebase;