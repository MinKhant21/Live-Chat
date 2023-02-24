import { ref } from "vue"
import { auth } from '../firebase/config';

let error = ref(null)
let CheckUser = async(email,password)=>{
    // console.log(email.value,password.value)
      try{
        let res = await auth.signInWithEmailAndPassword(email,password)
        if(!res){
          throw new Error("Cannt Login Account")
        }
        return res
      }catch(err){
        error.value = err.message
        console.log(err.message)
      }
}

let UserSignIn = () => {
    return {error,CheckUser}
}

export default UserSignIn