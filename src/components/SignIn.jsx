import { async } from "@firebase/util";
import { useState } from "react";
import { firebaseAuth , signInWithEmailAndPassword, onAuthStateChanged } from "../Firebase";

const SignIn = () => {
    const [typingEmail,setTypingEmail] = useState("");
    const [typingPassword,setTypingPassword] = useState("");

    const login = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)

  });
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