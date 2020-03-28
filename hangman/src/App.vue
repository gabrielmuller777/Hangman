<template>
  <div id="app">
    <label class="title">HANGMAN</label>
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
}
html{
  width: 100%;
  background-color: black;
}
body{
  width: 70%;
  background-color: rgb(70, 70, 70);
  margin: 20px auto 0 auto;
}
.title {
  font-size: 50px;
}
</style>
