<template>
  <div id="app">
    <img src="./assets/bm_logo.png" alt="logo" style="height: 80px">
    <p><label class="title">HANGMAN</label></p>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}
html{
  width: 100%;
  height: 100%;
  background-color: black;
}
body{
  min-width: 90%;
  min-height: 95%;
  background-color: rgb(70, 70, 70);
  margin: 10 10 10 10;
  padding-top: 50px;
}
.title {
  font-size: 50px;
}
</style>
