<template>
  <div class="gamearea">
    <span v-if="!player1">
      <img v-if="life == 5" class="stick" src="../assets/s5.png" alt="sm" />
      <img v-if="life == 4" class="stick" src="../assets/s4.png" alt="sm" />
      <img v-if="life == 3" class="stick" src="../assets/s3.png" alt="sm" />
      <img v-if="life == 2" class="stick" src="../assets/s2.png" alt="sm" />
      <img v-if="life == 1" class="stick" src="../assets/s1.png" alt="sm" />
      <h1>Body Parts: {{ life }}</h1>
      <div v-if="!gameOver && !player1" style="margin-bottom:20px">
        <span v-for="(char, index) in word" :key="index">
          <span class="word">{{ char }} </span>
        </span>
      </div>
      <div v-if="gameOver">
        <p><label>SE FUDEU! </label></p>
        <p>
          <label>Resposta: {{ input }}</label>
        </p>
        <button @click="retry">Retry</button>
      </div>
    </span>
    <div v-if="player1">
      <label>Player 1</label>
      <p><label>Input word </label><input type="text" v-model="input" /></p>
      <p><label>Hint </label><input type="text" v-model="hint" /></p>
      <p><button @click="start">START</button></p>
    </div>
    <div v-if="!player1 && !gameOver">
      <label>Player 2</label>
      <p>
        <label>Hint: {{ hint }}</label>
      </p>
      <p><input type="text" style="marginTop:20px" v-model="guess" /></p>
      <button @click="letterInput">go</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      hint: "",
      word: [],
      guess: "",
      life: 5,
      gameOver: false,
      player1: true
    };
  },
  methods: {
    letterInput() {
      for (let index in this.input) {
        if (this.input[index] === this.guess) {
          this.word[index] = this.guess;
        }
      }
      if (!this.input.includes(this.guess)) {
        this.life -= 1;
      }
      this.guess = "";
    },
    retry() {
      window.location.reload();
    },
    start() {
      for (let index in this.input) {
        if (this.input[index] === this.guess) {
          this.word.push(this.input[index]);
        } else {
          this.word.push("_");
        }
      }
      this.player1 = false
    }
  },
  updated() {
    if (this.life === 0) {
      this.gameOver = true;
    }
  }
};
</script>

<style scoped>
.word {
  font-size: 50px;
}
.gamearea {
  height: 90%;
}
.stick {
  height: 200px;
}
</style>
