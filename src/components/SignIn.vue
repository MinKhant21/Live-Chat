<template>
  <h1>Sigin Up</h1>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <form @submit.prevent="CreateAcc">
    <label for="">Username</label><br>
    <input type="text" v-model="displayName"><br>
    <label for="">Email</label><br>
    <input type="email" v-model="email"><br>
    <label for="">Password</label><br>
    <input type="password" v-model="password"><br><br>
    <input type="submit" value="Create">
  </form>
</template>

<script>
import { ref } from 'vue';
import UserSignUp from '@/composition/UserSignUp';
import { useRouter } from 'vue-router';
export default {
    setup(){
        let router = useRouter();
        let email = ref("")
        let displayName = ref("")
        let password = ref("")
        let {error,CreateUser} = UserSignUp()

        let CreateAcc =async ()=>{
            let res = await CreateUser(email.value,password.value,displayName.value)
            if(res){
              router.push('/chatroom')
            }
        }
        return {email,displayName,password,CreateAcc,error}
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