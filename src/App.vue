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
        <router-link to="/">Home</router-link> | <router-link to="/login">Login</router-link> | 
        <router-link to="/registro">Registro</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("getProductosAction")
  }
}
</script>

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
