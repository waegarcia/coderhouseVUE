<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre del plato</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody v-for="comida in comidas" :key="comida.id">
                <tr v-if="pais == comida.pais">
                    <td>{{ comida.nombre }}</td>
                    <td>${{ comida.precio }}</td>
                    <td><Carrito :producto="comida.nombre"/></td>
                </tr>
            </tbody>
        </table>
        <p>* los productos agregado al carrito se muestran en la consola.</p>
    </div>
</template>

<script>
import Carrito from "./Carrito.vue"

export default {
    name: "Informacion",
    components: {
        Carrito
    },
    props: {
        pais: {
            type: String
        },
    },
    data() {
        return {
            comidas: [
                {id: 1, nombre: "Asado", pais: "Argentina", precio: 20000.0},
                {id: 2, nombre: "Choripan", pais: "Argentina", precio: 75.0},
                {id: 3, nombre: "Empanada", pais: "Argentina", precio: 45.0},
                {id: 4, nombre: "Spaghetti", pais: "Italia", precio: 575.0},
                {id: 5, nombre: "Pizza", pais: "Italia", precio: 675.0},
                {id: 6, nombre: "Calzone", pais: "Italia", precio: 845.0},
                {id: 7, nombre: "Paella", pais: "España", precio: 375.0},
                {id: 8, nombre: "Pulpo a la gallega", pais: "España", precio: 525.0},
                {id: 9, nombre: "Tortilla", pais: "España", precio: 420.0}
            ]
        }
    },
}
</script>

<style scoped>
table,tbody,tr,th,td {
    border: 1px solid;
    padding: 3px;
}
</style>
