<template>
  <v-app id="app">
    <img src="./assets/bm_logo.png" alt="logo" style="width: 500px; margin:20px auto 20px auto">
    <p><label id="title">HANGMAN</label></p>
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
  background-color: #424242;
  width: 90%;
  max-height: 90vh;
  color: white;
}
html{
  width: 100%;
  max-height: 100%;
}
body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  max-height: 100%;
  background-color: black;
}
#title {
  font-size: 50px;
}
</style>
