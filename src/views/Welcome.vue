<template>
        <blockquote>
        <div class="wrapper">
          <div v-if="Stateswitch">
            <LoginIn></LoginIn>
            <p>
              You don't have an account ? 
              
                Please Create New Account 

                <span class="login" @click="Stateswitch=!Stateswitch">SignUp</span>
              
            </p>
          </div>
          <div v-else>
            <SignIn></SignIn>
            <p>
              You have an account ? 
              
                Please Login 

                <span class="login" @click="Stateswitch=!Stateswitch">Login</span>
              
            </p>
          </div>
        </div>
        </blockquote>
</template>

<script>
import { ref } from 'vue';
import LoginIn from '../components/LoginIn'
import SignIn from '../components/SignIn'
export default {
  components: {
    LoginIn, SignIn },

  setup(){
    let Stateswitch = ref(true);
    return {Stateswitch}
  }

}

</script>

<style scoped>
blockquote {
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    margin-top: 50px;
    
}
.wrapper{
  margin: 20px auto;
  text-align: center;
}
.login{
  cursor: pointer;
  color:blueviolet
}

</style>