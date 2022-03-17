<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Proyecto Vue CLI con formulario</h1>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card class="col-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="paises"
              :rules="[(v) => !!v || 'Pais es requerido']"
              label="Pais"
              required
            ></v-select>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'Debe estar seguro/a para continuar!']"
              label="Esta seguro/a?"
              required
            ></v-checkbox>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Confirmar
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset"> Limpiar </v-btn>
          </v-form>
        </v-card>
        <Tabla :datos="datosIngresados"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Tabla from './Tabla.vue'

export default {
  name: "Formulario",

  components: {
    Tabla,
  },

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Nombre es requerido",
      (v) => (v && v.length <= 10) || "Nombre debe tener maximo 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "Ingrese un e-mail valido",
    ],
    select: null,
    paises: ["Argentina", "Uruguay", "Peru", "Colombia"],
    checkbox: false,
    datosIngresados: {},
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.datosIngresados = {name: this.name, email: this.email, pais: this.select, check: this.checkbox}
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
</style>
