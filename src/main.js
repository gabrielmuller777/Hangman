import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"

Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify: new vuetify({
    theme: {
      dark: true,
    },
  })
}).$mount('#app')
