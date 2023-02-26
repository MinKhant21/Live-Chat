<template>
  <h1>Login</h1>
  <form @submit.prevent="Login">
    <label for="">Email</label><br>
    <input type="email" v-model="email"><br>
    <label for="">Password</label><br>
    <input type="password" v-model="password"><br><br>
    <input type="submit" value="Login">
  </form>
</template>

<script>
import { ref } from 'vue';
import UserSignIn from '@/composition/UserSignIn.js';

export default {
  setup(props,context){
    let email = ref("")
    let password = ref("")
    let {error,CheckUser} = UserSignIn()
    let Login = async() => {
      let res = await CheckUser(email.value,password.value)
      if(res){
        context.emit("Logged")
      }
    }
    return {email,password,error,Login}
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
    background-color: rgb(109, 161, 240);
}
</style>