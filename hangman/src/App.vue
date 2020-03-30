<template>
  <v-app id="app">
    <img src="./assets/bm_logo.png" alt="logo" style="width: 500px; margin:20px auto 20px auto">
    <p><label class="title">HANGMAN</label></p>
    <Hangman/>
  </v-app>
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
  height: 90%;
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
}
.title {
  font-size: 50px;
}
</style>
