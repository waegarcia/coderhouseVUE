<template>
  <div id="app">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Desafio: DE VUE CDN A VUE CLI</h5>
        <p class="card-text"><strong>Consigna:</strong> Recupera tu 2º Desafío genérico realizado en la Clase 04,
          y conviértelo a Vue Cli.
        </p>
      </div>
      <div class="card-footer text-muted">
        <p>
          <strong>Aspectos a incluir en el entregable:</strong> En la clase 04 realizaste un desafío genérico generando múltiples
          instancias de un componente con Vue CDN, incluyendo pasaje de parámetros por props que cambiaban características de
          cada uno de los componentes que replicaste. Toma ese mismos desafío, y conviértelo a Vue Cli, respetando las mismas
          funcionalidades y parametrizaciones por props, aplicadas oportunamente.
        </p>
      </div>
    </div>

    <!-- Componentes de Vue -->
    <PaisesComidas pais="Argentina"/>
    <PaisesComidas pais="Italia" colorTexto="green"/>
    <PaisesComidas pais="Espania" tamanioTexto="grande"/>
    <PaisesComidas pais="Argentina" tamanioTexto="grande" colorTexto="blue"/>
  </div>
</template>

<script>
import PaisesComidas from './components/PaisesComidas.vue'

export default {
  name: 'App',
  components: {
    PaisesComidas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}
</style>
