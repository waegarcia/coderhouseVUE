<template>
    <div>
        <v-container>
            <v-row>
                <v-card class="mx-auto ma-3" max-width="344" outlined v-for="(pais, i) in paises" :key="i">
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1">{{pais}}</v-list-item-title>
                            <v-list-item-subtitle>Comidas autoctonas del pais</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn outlined rounded text @click="paisSeleccionado(pais)">Ver comidas</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-divider></v-divider><br>
            <Informacion :pais="paisMostrar"/>
        </v-container>
    </div>
</template>

<script>
import Informacion from './Informacion'

    export default {
        name: "Listado",
        components: {
            Informacion
        },
        data() {
            return {
                paises: ["Argentina", "Italia", "España"],
                paisMostrar: ""
            }
        },
        methods: {
            paisSeleccionado(pais){
                this.paisMostrar = pais
            }
        }
    }
</script>

<style scoped>

</style>