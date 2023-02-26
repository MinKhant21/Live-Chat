<template>
  <div class="container">
  <textarea placeholder="Enter Text and hit to Enter" @keypress.enter="HandleMessages" v-model="messages"></textarea>

  </div>
</template>

<script>
import { ref } from 'vue';
import { db, auth, timestamp } from '../firebase/config';
import Collection from '../composition/Collection'
export default {
    setup(){
        let messages = ref("")
        let user = ref(auth.currentUser)
        // let {error,Loginned} = getUser();
        let {addDoc} = Collection("messages")
        let HandleMessages = async() => {
          let chat = {
            name : user.value.displayName,
            messages : messages.value,
            created_at : timestamp()
          }
          await addDoc(chat)
          messages.value = ""
        }
        return {messages,HandleMessages}
    }
}
</script>

<style scoped>
  form {
        margin: 10px;
      }
      textarea {
        float: center;
        width: 100%;
        /* max-width: 80%; */
        /* margin: 10px 10px 10px 10px auto; */
        /* margin-bottom: 6px; */
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
        /* margin-left: 50px; */
      }
.container{
  width: 80%;
  height: auto;
  margin: 60px auto;
  /* border:1px solid blanchedalmond; */
  /* border-radius: 10px; */
}

</style>