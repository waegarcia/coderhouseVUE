<template>
  <v-app>
    <v-card class="col-9 mt-3">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nombre</th>
              <th class="text-left">email</th>
              <th class="text-left">Pais</th>
              <th class="text-left">Consentimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in tablaDatos" :key="i">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.pais }}</td>
              <td>{{ item.check }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    datos: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      listaDatos: []
    };
  },
  methods: {
    actualizarRegistros(){
      if (Object.keys(this.datos).length !== 0) {
        this.listaDatos.push(this.datos);
      }
    }
  },
  computed: {
    tablaDatos() {
      this.actualizarRegistros();
      console.log(this.listaDatos);
      return this.listaDatos;
    }
  }
};
</script>

<style scoped>
</style>