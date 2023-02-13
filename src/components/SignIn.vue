<template>
  <h1>Sigin Up</h1>
  <form @submit.prevent="Signup()">
    <label for="">Username</label><br>
    <input type="text" v-model="username"><br>
    <label for="">Email</label><br>
    <input type="email" v-model="email"><br>
    <label for="">Password</label><br>
    <input type="password" v-model="password"><br><br>
    <button>Create Account</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        let email = ref("")
        let username = ref("")
        let password = ref("")
        let SignUp = async()=>{
            console.log(username.value)
        }
        return {email,username,password,SignUp}
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