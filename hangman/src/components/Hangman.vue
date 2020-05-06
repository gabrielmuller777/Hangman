<template>
  <div id="game">
    <div class="sidebar">
      <label class="sideitem">New Post</label>
      <label class="sideitem">Your Name</label>
      <input class="sideitem" type="text" v-model="input.user">
      <label class="sideitem">Word:</label>
      <input class="sideitem" type="text" v-model="input.word">
      <label class="sideitem">Hint:</label>
      <input class="sideitem" type="text" v-model="input.hint">
      <button class="btn send" @click="sendPost">Send</button>
      <hr>
      <label class="sideitem">Users Posts</label>
      <div class="sidebar posts">
        <span class="sideitem" v-for="(item, index) in users" :key="index">
          <label @click="selecteduser = item.user, select()" >{{item.user}}: {{item.posts}}</label>
        </span>
      </div>
    </div>
    <div class="main">
      <label v-if="!userSelected" id="words">Select a post to start...</label>
      <div class="menu" v-if="userSelected">
        <h1>USER: {{selecteduser}}</h1>
        <span v-for="(item, index) in selection" :key="index">
          <div :class="index % 2 == 0 ? 'select' : 'selectodd'">
            <h2 style="margin-left:10px">HINT: {{item.hint}}</h2>
            <button class="btn start" @click="start(item.word)">Start</button>
          </div>
        </span>
      </div>
      <div class="gamearea">
        <h1 style="margin-bottom:100px">LIFE: {{life}}</h1>
        <div style="margin-bottom:50px">
          <span v-for="(char, index) in challenge" :key="index">
          <span style="font-size:50px;">{{char}} </span>
        </span>
        </div>
        <input 
          type="text" 
          style="height: 50px;width:50px;backgroundColor:rgba(255, 255, 255, 0.2);border:0;border-bottom:solid 2px gray; border-radius:5px; text-align:center;font-size:40px;color:white"
          v-model="guess"
          @keyup.enter="letterInput"
          >
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
        hint: ''
      },
      life: 5,
      selectedword: '',
      guess: '',
      selection: [],
      posts: [],
      selecteduser: '',
      users: [],
      challenge: [],
      userSelected: false
    }
  },
  methods: {
    sendPost() {
      firebase.database().ref('hangman/posts/' + this.input.user).push({
        user: this.input.user,
        word: this.input.word,
        hint: this.input.hint
      })
      this.input.user = ''
      this.input.word = ''
      this.input.hint = ''
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
      this.selectedword = word
      for(let idx in word) {
        if(word[idx] === this.guess) {
          this.challenge.push(word[idx]);
        } else {
          this.challenge.push("_")
        }
      }
    },
    letterInput() {
      for(let idx in this.selectedword) {
        if(this.selectedword[idx] === this.guess) {
          this.challenge[idx] = this.guess;
        }
      }
      if(!this.selectedword.includes(this.guess)) {
        this.life -= 1;
      }
      this.guess = ""
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
  }
}
</script>

<style scoped>
  #game {
    display: flex;
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
  .btn.start {
    position: absolute;
    right: 0;
    top: 10px;
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
    background-color: rgb(56, 70, 70);
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
    background-color: tomato;
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
    background-color: rgb(66, 66, 66);
  }
  .sidebar.posts {
    align-items: flex-start;
  }
</style>