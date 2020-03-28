<template>
  <div class="gamearea">
    <span class="word">{{word}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: 'banana'
      
    }
  }
}
</script>

<style scoped>
  .word{
    font-size: 50px;
  }
  .gamearea {
    height: 90%;
  }
</style>