<template>
  <h1>Sigin Up</h1>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <form @submit.prevent="CreateAcc">
    <label for="">Username</label><br>
    <input type="text" v-model="username"><br>
    <label for="">Email</label><br>
    <input type="email" v-model="email"><br>
    <label for="">Password</label><br>
    <input type="password" v-model="password"><br><br>
    <input type="submit" value="Create">
  </form>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase/config';

export default {
    setup(){
        let email = ref("")
        let username = ref("")
        let password = ref("")
        let error = ref(null)

        let CreateAcc =async ()=>{

            try{
                let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
                if(!res)
                {
                    throw new Error("Already Created Account")
                }
            }catch(err)
            {
                error.value = err.message
                console.log(error.value)
            }
        }
        return {email,username,password,CreateAcc,error}
    }
}
</script>

<style scoped>
label{
    font-family: 'Courier New', Courier, monospace;
    margin: 10px;
}
input[type='text'],input[type='password'],input[type='email']{
    /* background-color: rgb(236, 226, 226); */
    border: none;
    border-bottom: 1px solid;
    padding: 10px;
    width: 29%;
    margin: 10px;
}
input[type='submit']{
    width: 30%;
    float:  center;
    padding: 5px;
    background-color: rgb(170, 205, 101);
}
</style>