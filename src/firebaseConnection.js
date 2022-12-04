import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtbcdYHUkXTO4217X5AZnq0NnFGLfIKnQ",
    authDomain: "interpreta-d78cf.firebaseapp.com",
    projectId: "interpreta-d78cf",
    storageBucket: "interpreta-d78cf.appspot.com",
    messagingSenderId: "666483613501",
    appId: "1:666483613501:web:dc7db3ab46043585b3af54"
};

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}else{
    console.log("Funcionou!");
}

export default firebase;
