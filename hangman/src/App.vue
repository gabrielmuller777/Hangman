<template>
  <div id="app">
    <div id="nav">
      <img class="logo" src="./assets/bm_logo.png" alt="logo">
      <label id="title">HANGMAN</label>
    </div>
    <Hangman/>
  </div>
</template>

<script>
import Hangman from './components/Hangman.vue'

export default {
  name: 'App',
  components: {
    Hangman
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  width: 90%;
  max-height: 100%;
  height: 100%;
}
html, body{
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 90%;
  height: 70px;
  background-color: rgb(0, 0, 0);
  color: white;
}
.logo {
  height: 50px;
  margin: 20px 50px;
}
#title {
  margin: 30px 10px 10px 0;
  font-size: 40px;
}
</style>
