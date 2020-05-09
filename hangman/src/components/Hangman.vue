<template>
  <div id="game">
    <div class="sidebar">
      <label class="sideitem">New Post</label>
      <label class="sideitem">Your Name</label>
      <input class="sideitem" type="text" v-model="input.user" style="text-transform:uppercase">
      <label class="sideitem">Word:</label>
      <input class="sideitem" type="text" v-model="input.word" style="text-transform:uppercase">
      <label class="sideitem">Topic:</label>
      <input class="sideitem" type="text" v-model="input.topic" style="text-transform:uppercase">
      <label class="sideitem">Hint:</label>
      <input class="sideitem" type="text" v-model="input.hint" style="text-transform:uppercase">
      <button class="btn send" @click="send">Send</button>
      <hr>
      <label class="sideitem">Users Posts</label>
      <div class="sidebar posts">
        <span class="sideitem" v-for="(item, index) in users" :key="index">
          <label @click="selecteduser = item.user, select()" style="font-size:20px"><span style="color:darkorange">{{item.user}}:</span> {{item.posts}}</label>
        </span>
      </div>
    </div>
    <div class="main">
      <label v-if="!userSelected" id="words">Select a post to start...</label>
      <div class="menu" v-if="userSelected">
        <h2>Challenges from {{selecteduser}}</h2>
        <span v-for="(item, index) in selection" :key="index">
          <div :class="index % 2 == 0 ? 'select' : 'selectodd'">
            <span style="width:220px;display:inline-flex"><h5 style="margin-left:10px;color:darkorange">TOPIC: </h5><h5 style="margin-left:10px;"> {{item.topic}}</h5></span>
            <div style="background-color:rgba(255,255,255,0.1); width:200px;display:inline-flex"><h5 style="margin-left:10px;color:darkorange">HINT: </h5><h5 style="margin-left:10px;">{{item.hint}}</h5></div>
            <button class="btn start" @click="start(item.word)">Start</button>
          </div>
        </span>
      </div>
      <div class="gamearea">
        <div class="score">
          <h2 style="margin-left:20px">WIN: {{score.wins}}</h2><h2 style="margin-left:50px">LOSE: {{score.loses}}</h2>
        </div>
        <h1 v-if="choice" style="margin-bottom:100px">LIFE: {{life}}</h1>
        <div style="margin-bottom:50px">
          <span v-for="(char, index) in challenge" :key="index">
          <span style="font-size:50px;">{{char}} </span>
        </span>
        </div>
        <input
          v-if="choice && !win && !lose" 
          type="text" 
          style="text-transform:uppercase;height: 50px;width:200px;backgroundColor:rgba(255, 255, 255, 0.2);border:0;border-bottom:solid 2px gray; border-radius:5px; text-align:center;font-size:30px;color:white"
          v-model="guess"
          @keyup.enter="letterInput"
          placeholder="type here"
          >
          <h3 v-if="choice && !win && !lose">Hit Enter to Send</h3>
          <h1 v-if="win">YOU WIN!</h1>
          <h1 v-if="lose">YOU LOSE!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      input: {
        user: '',
        word: '',
        topic: '',
        hint: ''
      },
      score: {
        wins: 0,
        loses: 0
      },
      life: 5,
      selectedword: '',
      guess: '',
      selection: [],
      posts: [],
      selecteduser: '',
      users: [],
      challenge: [],
      win: false,
      lose: false,
      choice: false,
      userSelected: false
    }
  },
  methods: {
    send() {
      if(this.input.user && this.input.word && this.input.hint && this.input.topic !== '') {
        firebase.database().ref('hangman/posts/' + this.input.user.toUpperCase()).push({
        user: this.input.user.toUpperCase(),
        word: this.input.word.toUpperCase(),
        hint: this.input.hint.toUpperCase(),
        topic: this.input.topic.toUpperCase()
        })
      } else {
        alert('please fill all fields!')
      }
      this.input.user = ''
      this.input.word = ''
      this.input.hint = ''
      this.input.topic = ''
      this.select()
    },
    select() {
      this.selection = []
      for(let idx in this.posts) {
        let result = Object.values(this.posts[idx][this.selecteduser]);
        result.forEach(item => {
          this.selection.push(item)
        })
      }
      this.userSelected = true
    },
    start(word) {
      this.life = 5
      this.lose = false
      this.win = false
      this.challenge = []
      this.selectedword = word
      for(let idx in word) {
        if(word[idx] === this.guess) {
          this.challenge.push(word[idx]);
        } else {
          this.challenge.push("_")
        }
      }
      this.choice = true
    },
    letterInput() {
      this.guess = this.guess.toUpperCase()
      for(let idx in this.selectedword) {
        if(this.selectedword[idx].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === this.guess) {
          this.challenge[idx] = this.selectedword[idx];
        }
      }
      if(!this.challenge.includes('_')) {
        this.win = true;
        this.score.wins += 1;
      } else if(!this.challenge.includes(this.guess)) {
        this.life -= 1;
        if(this.life === 0) {
          this.lose = true
          this.score.loses += 1
        }
      }
      this.guess = "";
    }
  },
  mounted () {
    firebase.database().ref('hangman/posts/').on('value', snap => {
      this.users = []
      this.posts = []
      let result = snap.val()
      this.posts.push(result)
      for(let idx in result) {
        let entriesCount = Object.entries(result[idx])
        this.users.push({
          user: idx,
          posts: entriesCount.length
        })
      }
    })
  },
}
</script>

<style scoped>
  #game {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    min-width: 90%;
    width: 90%;
    height: 100%;
    min-height: 100%;
    background-color: black;
    color: white;
  }
  hr {
    width: 100%;
  }
  .sideitem {
    margin: 10px;
  }
  .btn {
    margin: 10px;
    color: white;
    background-color: rgb(0, 128, 96);
    border:none;
    height: 25px;
    width: 100px;
    border-radius: 5px;
  }
  .btn.send {
    height: 45px;
    background-color: darkorange;
  }
  .btn.start {
    width:60px
  }
  #words {
    font-size: 30px;
    margin: 20px;
  }
  .main {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: flex-start;
    background-color: rgb(75, 87, 100);
    width: 100%;
    max-width: 100%;
    height: 100vh;
    min-height: 100%;
  }
  .menu {
    background-color:rgb(34, 41, 56);
    max-height: 100%;
    height: 100vh;
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    position: relative;
  }
  .gamearea {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: rgb(0, 0, 0);
  }
  .score {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: darkorange;
    width: 100%;
    height: 80px;
  }
  .select {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.15);
  }
  .selectodd {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    max-height: 100%;
    height: 100vh;
    background-color: rgb(36, 36, 36);
  }
  .sidebar.posts {
    align-items: flex-start;
  }
</style>