<template>
    <div class="user">
        <h1 class="mt-5">Carrito de compras</h1>
        <v-container>
            <v-row>
                <v-col cols="3" v-for="producto in carritoList" :key="producto.id">
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
    export default {
        name: 'Carrito',
        data() {
            return {
            }
        },
        methods: {
            deleteCarrito(idProducto){
                this.$store.dispatch("deleteCarritoAction", idProducto)
            }
        },
        computed: {
            carritoList(){
                return this.$store.state.carrito
            }
        },
        mounted(){
            this.$store.dispatch("getCarritoAction")
        }
    }
</script>

<style scoped>
</style>