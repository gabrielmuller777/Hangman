<template>
  <div class="gamearea">
    <!-- Player 1 screen -->
    <div class="playerInput" v-if="player1">
      <label>Player 1</label>
      <label>Input word </label><input type="text" v-model="input" />
      <label>Hint </label><input type="text" v-model="hint" />
      <button @click="start">START</button>
    </div>

    <!-- end Player 1 area -->
    <span v-if="!player1">
      <img v-if="life == 5" class="stick" src="../assets/s5.png" alt="sm" />
      <img v-if="life == 4" class="stick" src="../assets/s4.png" alt="sm" />
      <img v-if="life == 3" class="stick" src="../assets/s3.png" alt="sm" />
      <img v-if="life == 2" class="stick" src="../assets/s2.png" alt="sm" />
      <img v-if="life == 1" class="stick" src="../assets/s1.png" alt="sm" />
      <h1>Body Parts: {{ life }}</h1>
      <div v-if="!gameOver && !player1 && !win" style="margin-bottom:20px">
        <span v-for="(char, index) in word" :key="index">
          <span class="word">{{ char }} </span>
        </span>
      </div>
      <!-- GAME OVER -->
      <div v-if="gameOver">
        <p><label>SE FUDEU! </label></p>
        <p>
          <label>Resposta: {{ input }}</label>
        </p>
        <button @click="retry">Retry</button>
      </div>
      <div v-if="win">
        <label>You Win...</label>
        <p><label>Hope you die the next time!</label></p>
        <button @click="retry">Reset</button>
      </div>
    </span>

    <!-- Player 2 -->
    <div v-if="!player1 && !gameOver && !win">
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
      win: false,
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
      this.player1 = false;
    }
  },
  updated() {
    if (!this.word.includes('_') && !this.player1) {
      this.win = true;
    } else if (this.life === 0) {
      this.gameOver = true
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
.playerInput {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
button {
  border: none;
  height: 35px;
  font-size: 20px;
  background-color: brown;
  color: white;
}
input {
  height: 30px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.103);
  color: white;
  text-align: center;
  border: none;
  border-bottom: 1px solid brown;
}
label {
  font-size: 20px;
  color: white;
}
.stick {
  height: 200px;
}
</style>
