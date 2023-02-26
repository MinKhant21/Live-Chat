<template>
  <div class="wrapper">
      <div class="out">
      <button @click="LogOut" class="button">LogOut</button>
    </div>
    <div class="info">
      <h2>Name : {{ user.displayName }} </h2>
      <b>Email : {{ user.email }}<span></span></b>
    </div>
    </div>
    
</template>

<script>
import { auth } from '@/firebase/config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup(){
    let user = ref(auth.currentUser);
    let error = ref("");
    let router = useRouter()
    let LogOut = async() => {
      try{
        await auth.signOut()
        console.log("user logged out");
        router.push('/')
      }catch(err){
        error.value=err.message;
        console.log(err.value);
      }
    }
    console.log(user)
    return {LogOut,error,user}
  }
}
</script>

<style>
.wrapper{
  width: 80%;
  height: auto;
  margin: 60px auto;
  /* border:1px solid blanchedalmond; */
  /* border-radius: 10px; */
}

.info{
  display: block;
}
.button{
  background-color: rgb(80, 212, 138);
  border-radius: 20px;
  padding: 10px;
  float: right;
}
</style>