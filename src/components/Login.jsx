import { useState } from 'react';
import {db} from '../Firebase'
import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import { useEffect } from 'react';
import { async } from '@firebase/util';

const Login = () => {
    const usersCollectionRef = collection(db, "users")

    const [users, setUsers] = useState([]);

    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("");

    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            
        }
        getUsers();
    },[])
    const createUsers = async () => {
        await addDoc(usersCollectionRef, {...users[0], name:name, age:age, gender:gender})
    }
    
    return (  
        <div>
            <form onSubmit={createUsers}>
                <input type="text" placeholder='이름' onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder='나이' onChange={(e)=>{setAge(e.target.value)}}/>
                <input type="text" placeholder='성별' onChange={(e)=>{setGender(e.target.value)}}/>
                <input type="submit" value="회원가입" />
            </form>
        </div>
    );
}
 
export default Login;