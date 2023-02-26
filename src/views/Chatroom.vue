<template>
  <div class="container">
    <Nav></Nav>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>  
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import Nav from '../components/Nav'

export default {
  components: {
    ChatWindow,
    NewChatForm,
     Nav },
  
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

</style>