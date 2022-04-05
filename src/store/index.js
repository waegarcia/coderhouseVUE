import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: {
      userAdmin: 'admin@food.com',
      passAdmin: 'admin'
    },
    productos: [],
    carrito: [],
    carritoCounter: 0
  },
  mutations: {
    // PRODUCTOS
    getProductosMutation(state, payload){
      state.productos = payload;
    },

    // CARRITO
    getCarritoMutation(state, payload){
      state.carrito = payload;
    },
    postCarritoMutation(state){
      state.carritoCounter++
    },
    deleteCarritoMutation(state){
      state.carritoCounter--
    }
  },
  actions: {
    // PRODUCTOS
    getProductosAction(context){
      axios.get("https://61b529d10e84b70017331a82.mockapi.io/productos")
        .then(data => {
          context.commit("getProductosMutation", data.data)
        })
        .catch(err => console.error(`Error en la consulta a la API: ${err}`))
        .finally(() => {console.log("Finalizo el GET productos a Mockapi")})
    },
    postProductosAction(context, payload){
      axios.post("https://61b529d10e84b70017331a82.mockapi.io/productos", payload)
        .then(data => {
            console.log("Producto creado: ", data.data);
            context.dispatch("getProductosAction")
        })
        .catch(err => console.error(`Error en la consulta a la API: ${err}`))
        .finally(() => {console.log("Finalizo el POST productos a Mockapi")})
    },
    putProductoAction(context, payload){
      axios.put(`https://61b529d10e84b70017331a82.mockapi.io/productos/${payload.id}`, payload)
      .then(data => {
        console.log("Producto modificado: ", data.data);
        context.dispatch("getProductosAction")
      })
      .catch(err => console.error(`Error en la consulta a la API: ${err}`))
      .finally(() => {console.log("Finalizo el PUT productos a Mockapi")})
    },
    deleteProductosAction(context, payload){
      axios.delete(`https://61b529d10e84b70017331a82.mockapi.io/productos/${payload}`)
        .then(data => {
            console.log("Producto eliminado: ", data.data);
            context.dispatch("getProductosAction")
        })
        .catch(err => console.error(`Error en la consulta a la API: ${err}`))
        .finally(() => {console.log("Finalizo el DELETE productos a Mockapi")})
    },

    // CARRITO
    getCarritoAction(context){
      axios.get("https://61b529d10e84b70017331a82.mockapi.io/carrito")
        .then(data => {
          context.commit("getCarritoMutation", data.data)
        })
        .catch(err => console.error(`Error en la consulta a la API: ${err}`))
        .finally(() => {console.log("Finalizo el GET carrito a Mockapi")})
    },
    postCarritoAction(context, payload){
      axios.post("https://61b529d10e84b70017331a82.mockapi.io/carrito", payload)
          .then(data => {
            console.log("Producto agregado al carrito: ", data.data);
            context.commit("postCarritoMutation")
          })
          .catch(err => console.error(`Error en la consulta a la API: ${err}`))
          .finally(() => {console.log("Finalizo el POST carrito a Mockapi")})
    },
    deleteCarritoAction(context, payload){
      axios.delete(`https://61b529d10e84b70017331a82.mockapi.io/carrito/${payload}`)
        .then(data => {
          console.log("Producto eliminado del carrito: ", data.data)
          context.commit("deleteCarritoMutation")
          context.dispatch("getCarritoAction")
        })
        .catch(err => console.error(`Error en la consulta a la API: ${err}`))
        .finally(() => {console.log("Finalizo el DELETE carrito a Mockapi")})
    }
  },
  modules: {
  }
})
