import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
Vue.use(CarbonComponentsVue);
Vue.config.productionTip = false
Vue.use(VueRouter);
import Insert from "./components/Insert.vue"
import Search from "./components/Search.vue"
import SQLSearch from "./components/SQLSearch.vue"

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Search,
      name: 'Search'
    },
    {
      path: '/Insert',
      component: Insert,
      name: 'Insert'
    },
    {
      path: '/SQLSearch',
      component: SQLSearch,
      name: 'SQLSearch'
    }

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
