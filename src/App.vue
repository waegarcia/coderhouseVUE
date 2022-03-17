<template>
  <v-app>
    <v-app-bar
      app
      color="grey lighten-5"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Coderhouse Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.jpg"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <h1>Login:</h1>
      <Login/>
      <v-divider></v-divider><br>
      <h1>Registro:</h1>
      <Registro/>
      <v-divider></v-divider><br>
      <h1>Menu de comidas segun pais:</h1>
      <Listado/>
      <v-divider></v-divider><br>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';
import Registro from './components/Registro';
import Listado from './components/Listado'

export default {
  name: 'App',

  components: {
    Login,
    Registro,
    Listado
  },

  data: () => ({
    //
  }),
};
</script>
