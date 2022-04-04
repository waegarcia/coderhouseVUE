import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: {
      userAdmin: 'admin@food.com',
      passAdmin: 'admin'
    },
    productos: [],
    carrito: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
