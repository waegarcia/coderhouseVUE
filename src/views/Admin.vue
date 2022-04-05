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
                        <v-data-table :headers="productosHeaders" :items="productosList">
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
    export default {
        name: 'Admin',
        data() {
            return {
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
                    id: 0,
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
            postProducto(){
                if (this.productoCreacion.nombre !== "") {
                    this.$store.dispatch("postProductosAction", this.productoCreacion)

                    this.productoCreacion.nombre = ""
                    this.productoCreacion.precio = 0 
                    this.productoCreacion.cantidad = 0
                } else {
                    this.dialogError = true
                    console.log("No se puede crear un producto vacio");
                }
            },
            onModal(id, nombre, precio, cantidad){
                this.dialog = true
                this.idModificar = id
                this.productoModificacion.id = id
                this.productoModificacion.nombre = nombre
                this.productoModificacion.precio = precio
                this.productoModificacion.cantidad = cantidad
            },
            putProducto(idProducto){
                if(idProducto === this.productoModificacion.id){
                    this.$store.dispatch("putProductoAction", this.productoModificacion)
                }
                this.dialog = false
            },
            deleteProducto(idProducto){
                this.$store.dispatch("deleteProductosAction", idProducto)
            }
        },
        computed: {
            productosList(){
                return this.$store.state.productos
            }
        }
    }
</script>

<style scoped>
</style>