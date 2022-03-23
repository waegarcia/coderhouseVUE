<template>
    <div>
        <h2 class="mt-5">Panel de administracion</h2>
        <v-container>
            <v-row>
                <v-col cols="4">
                    <v-card class="sidebar pa-4">
                        <h3>ABM de Productos</h3>
                        <v-text-field v-model="productoCreacion.nombre" label="Nombre"></v-text-field>
                        <v-text-field v-model.number="productoCreacion.precio" label="Precio" required></v-text-field>
                        <v-text-field v-model.number="productoCreacion.cantidad" label="Cantidad" required></v-text-field>
                        <v-btn color="success" @click="postProducto()"><b>Agregar Producto</b></v-btn>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card>
                        <v-data-table :headers="productosHeaders" :items="productos">
                            <template v-slot:item.acciones="{item}">
                                <v-btn color="primary" class="ma-1" @click="onModal(item.id, item.nombre, item.precio, item.cantidad)"><b>Modificar</b></v-btn>
                                <v-btn color="error" class="ma-1" @click="deleteProducto(item.id)"><b>Eliminar</b></v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <div class="text-center">
            <v-dialog v-model="dialog" width="500" persistent>
                <v-card>
                    <v-card-title>Modificar Producto</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="productoModificacion.nombre" label="Nombre"></v-text-field>
                        <v-text-field v-model.number="productoModificacion.precio" label="Precio"></v-text-field>
                        <v-text-field v-model.number="productoModificacion.cantidad" label="Cantidad"></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="error" @click="dialog = false"><b>Cancelar</b></v-btn>
                        <v-btn color="primary" @click="putProducto(idModificar)"><b>Aceptar</b></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>

        <div class="text-center">
            <v-dialog v-model="dialogError" width="500">
                <v-card class="d-flex align-center justify-center flex-column">
                    <v-card-title>Error!!!</v-card-title>
                    <v-card-text class="text-center">
                        <b>No se puede crear un producto vacio.</b>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="error" @click="dialogError = false"><b>Cerrar</b></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>

    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Admin',
        data() {
            return {
                productos: [],
                productosHeaders: [
                    {text: "Producto", value: "nombre"},
                    {text: "Precio", value: "precio"},
                    {text: "Cantidad (u)", value: "cantidad"},
                    {text: "", value: "acciones"}
                ],
                productoCreacion: {
                    nombre: "",
                    precio: 0,
                    cantidad: 0
                },
                productoModificacion: {
                    nombre: "",
                    precio: 0,
                    cantidad: 0
                },
                dialog: false,
                idModificar: 0,
                dialogError: false
            }
        },
        methods: {
            getProducto(){
                axios.get("https://61b529d10e84b70017331a82.mockapi.io/productos")
                    .then(data => { 
                        this.productos = data.data
                    })
                    .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                    .finally(() => {console.log("Finalizo el GET productos a Mockapi");})
            },
            postProducto(){
                if (this.productoCreacion.nombre !== "") {
                    axios.post("https://61b529d10e84b70017331a82.mockapi.io/productos", this.productoCreacion)
                        .then(data => {
                            console.log("Producto creado: ", data.data);
                            this.getProducto()
                        })
                        .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                        .finally(() => {console.log("Finalizo el POST productos a Mockapi");
                            this.productoCreacion.nombre = ""
                            this.productoCreacion.precio = 0 
                            this.productoCreacion.cantidad = 0
                        })
                } else {
                    this.dialogError = true
                    console.log("No se puede crear un producto vacio");
                }
            },
            onModal(id, nombre, precio, cantidad){
                this.dialog = true
                this.idModificar = id
                this.productoModificacion.nombre = nombre
                this.productoModificacion.precio = precio
                this.productoModificacion.cantidad = cantidad
            },
            putProducto(idProducto){
                axios.put(`https://61b529d10e84b70017331a82.mockapi.io/productos/${idProducto}`, this.productoModificacion)
                    .then(data => {
                            console.log("Producto modificado: ", data.data);
                        this.getProducto()
                    })
                    .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                    .finally(() => {console.log("Finalizo el PUT productos a Mockapi");})
                this.dialog = false
            },
            deleteProducto(idProducto){
                axios.delete(`https://61b529d10e84b70017331a82.mockapi.io/productos/${idProducto}`)
                .then(data => {
                    console.log("Producto eliminado: ", data.data);
                    this.getProducto()
                })
                .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                .finally(() => {console.log("Finalizo el DELETE productos a Mockapi");})
            },
        },
        mounted(){
            this.getProducto()
        }
    }
</script>

<style scoped>
</style>