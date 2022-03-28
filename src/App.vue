<template>
  <v-app id="app">

    <v-app-bar app color="green darken-2">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img alt="Coderhouse Logo" class="shrink mr-2" contain src="./assets/logo.jpg"
            transition="scale-transition" width="40"/>
        </router-link>
      </div>
      <div id="nav">
        <router-link to="/">Registro</router-link> | 
        <router-link to="/tabla">Tabla</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
