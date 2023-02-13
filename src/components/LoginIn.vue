<template>
  <h1>Login</h1>
  <form>
    <label for="">Email</label><br>
    <input type="email"><br>
    <label for="">Password</label><br>
    <input type="password"><br><br>
    <input type="submit" value="Login">
  </form>
</template>

<script>
export default {

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