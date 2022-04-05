<template>
  <div class="user">
    <h1 class="mt-5">Menu</h1>
    <v-row class="d-flex align-center flex-row-reverse ma-5" style="position:sticky; top:45px; z-index:5">
      <router-link to="/carrito" style="text-decoration: none; color: white">
        <v-btn color="success mr-15">
          <b class="mr-3">CARRITO</b>
          <v-badge :content="carritoContador" :value="carritoContador" color="red">
            <i class="fas fa-shopping-cart"></i>
          </v-badge>
        </v-btn>
      </router-link>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="3" v-for="producto in productosList" :key="producto.id">
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
  export default {
    name: 'User',
    data() {
      return {
        productoCarrito: {
          nombre: "",
          imagen: "",
          precio: 0
        }
      }
    },
    methods: {
      postCarrito(nombre, imagen, precio){
        this.productoCarrito.nombre = nombre
        this.productoCarrito.imagen = imagen
        this.productoCarrito.precio = precio

        this.$store.dispatch("postCarritoAction", this.productoCarrito)
      }
    },
    computed: {
      productosList(){
          return this.$store.state.productos
      },
      carritoContador(){
        return this.$store.state.carritoCounter
      }
    }
  }
</script>
<style scope>
</style>