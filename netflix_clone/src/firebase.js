// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZQP72muRAt1IBwP2fcVcUpDXXGrHRRk4",
  authDomain: "netflix-clone-2230b.firebaseapp.com",
  projectId: "netflix-clone-2230b",
  storageBucket: "netflix-clone-2230b.firebasestorage.app",
  messagingSenderId: "56527000930",
  appId: "1:56527000930:web:5ad84d6f755f52e1a5083b",
  measurementId: "G-QH1FVXYWX4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

    } catch(error){
        console.log(error);
        alert(error);
    }
}

const login = async(email, password)=>{
    try{
       await  signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}
const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};