import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
let store = new Vuex.Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: []
  },
  mutations:{},
  actions:{},
  getters:{},
});

export default store;