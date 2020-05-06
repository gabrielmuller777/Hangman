import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDugZTjqafz81FJLRJfE2KIwYxE-tzA6vI",
  authDomain: "blackmule-dev.firebaseapp.com",
  databaseURL: "https://blackmule-dev.firebaseio.com",
  projectId: "blackmule-dev",
  storageBucket: "blackmule-dev.appspot.com",
  messagingSenderId: "236901595469",
  appId: "1:236901595469:web:9b2a880bdec3a506325f04",
  measurementId: "G-JG5ZR47TBP"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
