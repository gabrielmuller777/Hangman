<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Queries/>
  </div>
</template>

<script>
import Queries from './components/Queries.vue'

export default {
  name: 'App',
  components: {
    Queries
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
