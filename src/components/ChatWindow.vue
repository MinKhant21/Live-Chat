<template>
  <div class="container">
    <div class="chat-window">
        <div class="messages" ref="msgBox" >
            <div class="single" v-for="message in formatDistance" :key="message.id">
                <span class="created-at">{{ message.created_at }}</span>
                <span class="name">{{ message.name }}</span> : 
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref,onUpdated, computed } from 'vue';
import { db } from '../firebase/config';
import { formatDistance } from 'date-fns'
export default {
  setup(){
    // let name = ref("")
    let messages = ref([])
    let msgBox = ref(null)
    onUpdated(()=>{
        msgBox.value.scrollTop=msgBox.value.scrollHeight
    })

    let formatDistance = computed(()=>{
      return messages.value.map((msg)=>{
        let formatDistance = formatDistance(msg.created_at.toDate())
        return {...msg,created_at:formatDistance}
      })
    })
    db.collection('messages').orderBy('create_at').onSnapshot((snap)=>{
      let results=[];//this onsnapshot run again and array empty again
        snap.docs.forEach((doc)=>{
          let document={...doc.data(),id:doc.id}
          doc.data().created_at && results.push(document);
        })
          messages.value=results;
      })
    //  console.log(messages.value)
     return {messages,msgBox,formatDistance}
  }
}
</script>

<style scoped>
.container{
    width: 80%;
    height: auto;
    margin: 60px auto;
    border:1px solid blanchedalmond;
    border-radius: 10px;
  }
  
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>