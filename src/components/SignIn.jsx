import { async } from "@firebase/util";
import { useState } from "react";
import { firebaseAuth , signInWithEmailAndPassword, onAuthStateChanged } from "../Firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../Firebase";


const SignIn = () => {
    const [typingEmail,setTypingEmail] = useState("");
    const [typingPassword,setTypingPassword] = useState("");
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword)
        const user = userCredential.user
        await setDoc(doc(db, "users", user.uid), {uid : user.uid});
    }
    const login = (e) =>{
        e.preventDefault();
        createUser();
    // ...
    }

    
    
        
    return (  
        <>
            <form onSubmit={login}>
                <input type="text" placeholder='이메일' onChange={(e)=>{
                    setTypingEmail(e.target.value);
                }}/>
                <input type="password" onChange={(e)=>{
                    setTypingPassword(e.target.value);
                }}/>
                <input type="submit" value="로그인" />
            </form>
        </>
    );
}
 
export default SignIn;