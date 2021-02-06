import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import 'material-design-icons-iconfont'

import Vuex from 'vuex'
import store from './vuex/store'
import VueRouter from 'vue-router'
import router from './router/router'


Vue.use(VueRouter);
Vue.use(Vuex);



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),store,router
 
 
}).$mount('#app');
