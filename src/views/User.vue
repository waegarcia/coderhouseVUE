<template>
  <div class="user">
    <h1 class="mt-5">Menu</h1>
    <v-row class="d-flex align-center flex-row-reverse ma-5" style="position:sticky; top:45px; z-index:5">
      <v-btn color="success mr-15">
          <router-link to="/carrito" style="text-decoration: none; color: white">
            <b class="mr-3">CARRITO</b>
            <v-badge :content="carritoContador" :value="carritoContador" color="red">
              <i class="fas fa-shopping-cart"></i>
            </v-badge>
          </router-link>
      </v-btn>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="3" v-for="producto in productos" :key="producto.id">
          <v-card class="text-start">
            <img style="max-width: 100%" :src="producto.imagen" :alt="producto.nombre">
            <v-card-title>
              {{producto.nombre}}
            </v-card-title>
            <v-card-text>
              <p>Precio: ${{producto.precio}}</p>
              <p>Cantidad: {{producto.cantidad}} ud.</p>
              <v-btn color="success" @click="postCarrito(producto.nombre, producto.imagen, producto.precio)"><b>Agregar <br/>al carrito</b></v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'User',
    data() {
      return {
        productos: [],
        carritoContador: 0,
        productoCarrito: {
          nombre: "",
          imagen: "",
          precio: 0
        }
      }
    },
    methods: {
      getProductos(){
        axios.get("https://61b529d10e84b70017331a82.mockapi.io/productos")
          .then(data => { this.productos = data.data })
          .catch(err => console.error(`Error en la consulta a la API: ${err}`))
          .finally(() => {console.log("Finalizo el GET productos a Mockapi");})
      },
      postCarrito(nombre, imagen, precio){
        this.productoCarrito.nombre = nombre
        this.productoCarrito.imagen = imagen
        this.productoCarrito.precio = precio
        axios.post("https://61b529d10e84b70017331a82.mockapi.io/carrito", this.productoCarrito)
            .then(data => {
              console.log("Producto agregado al carrito: ", data.data);
              this.carritoContador++
            })
            .catch(err => console.error(`Error en la consulta a la API: ${err}`))
            .finally(() => {console.log("Finalizo el POST carrito a Mockapi");
            })
      }
    },
    mounted(){
      this.getProductos()
    }
  }
</script>
<style scope>
</style>