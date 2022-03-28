<template>
    <div>
        <h2 class="mt-5">Panel de usuarios</h2>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-data-table :headers="usuariosHeaders" :items="usuarios">
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'Tabla',

    data() {
        return {
            usuarios: [],
            usuariosHeaders: [
                {text: "Nombre", value: "name"},
                {text: "Email", value: "email"},
                {text: "Pais", value: "pais"}
            ]
        }
    },


    methods: {
        getUsuarios(){
            axios.get("https://61b529d10e84b70017331a82.mockapi.io/formUser")
                .then(data => { 
                    this.usuarios = data.data
                })
                .catch(err => console.error(`Error en la consulta a la API: ${err}`))
                .finally(() => {console.log("Finalizo el GET usuarios a Mockapi");})
        }
    },

    mounted(){
        this.getUsuarios()
    }

}
</script>

<style>

</style>