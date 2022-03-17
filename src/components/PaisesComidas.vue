<template>
    <div id="tablaContainer">
      <div class="tablas">
        <h5>Comida autoctona de {{pais}}:</h5>
        <table >
          <thead :style="{color: colorTexto}">
            <tr :class="tamanioTexto == 'grande' ? 'texto-grande' : 'texto-chico'">
              <th>id</th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody :style="{color: colorTexto}">
            <tr v-for="(p, i) in paises" :key="i"
              :class="tamanioTexto == 'grande' ? 'texto-grande' : 'texto-chico'">
                <td v-if="pais == p.nombre">{{ p.id }}</td>
                <td v-if="pais == p.nombre">{{ p.titulo }}</td>
                <td v-if="pais == p.nombre">${{ p.costo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: "PaisesComidas",
  props: ["pais", "tamanioTexto", "colorTexto"],
  data() {
    return {
      paises: [
        {nombre: "Argentina", id: 1, titulo: "Asado", costo: 20000.0},
        {nombre: "Argentina", id: 2, titulo: "Choripan", costo: 75.0},
        {nombre: "Argentina", id: 3, titulo: "Empanada", costo: 45.0},
        {nombre: "Italia", id: 4, titulo: "Spaghetti", costo: 575.0},
        {nombre: "Italia", id: 5, titulo: "Pizza", costo: 675.0},
        {nombre: "Italia", id: 6, titulo: "Calzone", costo: 845.0},
        {nombre: "Espania", id: 7, titulo: "Paella", costo: 375.0},
        {nombre: "Espania", id: 8, titulo: "Pulpo a la gallega", costo: 525.0},
        {nombre: "Espania", id: 9, titulo: "Tortilla", costo: 420.0},
      ],
    };
  },
};
</script>

<style scoped>
#tablaContainer {
  margin: 35px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
.tablas{
  display: flex;
  flex-direction: column;
}
h5{
  text-align: center;
  text-decoration: underline;
}
table,tbody,tr,th,td {
  border: 1px solid;
  padding: 3px;
}
.texto-grande {
  font-size: x-large;
}
.texto-chico {
  font-size: small;
  background-color: lightgray;
}
</style>
