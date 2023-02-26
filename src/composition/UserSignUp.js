import { ref } from "vue"
import { auth } from '../firebase/config';

let error = ref(null)

let CreateUser = async(email,password,displayName) =>{
    try{
        let res = await auth.createUserWithEmailAndPassword(email,password)
        if(!res)
        {
            throw new Error("Already Created Account")
        }
        res.user.updateProfile({displayName})
        return res;
    }catch(err)
    {
        error.value = err.message
        console.log(error.value)
    }
}
let UserSignUp = () => {
    return {error,CreateUser}
}

export default UserSignUp;