import { firebaseAuth , createUserWithEmailAndPassword } from "../Firebase";
import { useState } from "react";

const SingUp =  () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("　");

    async function createUsers (){
        try {
            setErrorMsg('　');
            const createdUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log(createdUser);
            setEmail("");
            setPassword("");
        
          } catch(err){
            console.log(err.code);
            switch (err.code) {
              case 'auth/weak-password':
                setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
                break;
              case 'auth/invalid-email':
                setErrorMsg('잘못된 이메일 주소입니다');
                break;
              case 'auth/email-already-in-use':
                setErrorMsg('이미 가입되어 있는 계정입니다');
                break;
            }
          }
        
    }
    return (  
        <>
            <form onSubmit={createUsers}>
                <input type="text" placeholder='이메일' onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <input type="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
                <input type="submit" value="회원가입" />
            </form>
        </>
    );
}
 
export default SingUp;