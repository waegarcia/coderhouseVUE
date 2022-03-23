<template>
    <div class="user">
        <h1 class="mt-5">Carrito de compras</h1>
        <v-container>
            <v-row>
                <v-col cols="3" v-for="producto in productosCarrito" :key="producto.id">
                    <v-card class="text-start">
                        <img style="max-width: 100%" :src="producto.imagen" :alt="producto.nombre">
                        <v-card-title>
                            {{producto.nombre}}
                        </v-card-title>
                        <v-card-text>
                            <p>Precio: ${{producto.precio}}</p>
                            <v-btn color="error" @click="deleteCarrito(producto.id)"><b>Eliminar <br/>del carrito</b></v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Carrito',
        data() {
            return {
                productosCarrito: []
            }
        },
        methods: {
            getCarrito(){
                axios.get("https://61b529d10e84b70017331a82.mockapi.io/carrito")
                    .then(data => { this.productosCarrito = data.data })
                    .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                    .finally(() => {console.log("Finalizo el GET carrito a Mockapi");})
            },
            deleteCarrito(idProducto){
                axios.delete(`https://61b529d10e84b70017331a82.mockapi.io/carrito/${idProducto}`)
                .then(data => {
                    console.log("Producto eliminado del carrito: ", data.data);
                    this.getCarrito()
                })
                .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                .finally(() => {console.log("Finalizo el DELETE carrito a Mockapi");})
            }
        },
        mounted(){
            this.getCarrito()
        }
    }
</script>

<style scoped>
</style>