import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    url: "https://61b529d10e84b70017331a82.mockapi.io/formUser"
  },
  mutations: {
    llenarUsers(state, userActions){
      state.usuarios = userActions;
    }
  },
  actions: {
    postUsuario(state, payload){
      axios.post(this.state.url, payload)
          .then(data => {
            console.log("Usuario creado: ", data.data);
            this.dispatch('getUsuarios');
          })
          .catch(err => console.error(`Error en la consulta a la API: ${err}`))
          .finally(() => {console.log("Finalizo el POST usuario a Mockapi");
          })
    },
    getUsuarios({commit}){
      axios.get(this.state.url)
          .then(data => { 
            commit('llenarUsers', data.data)
          })
          .catch(err => console.error(`Error en la consulta a la API: ${err}`))
          .finally(() => {console.log("Finalizo el GET usuarios a Mockapi");
          })
    }
  },
  modules: {
  }
})
