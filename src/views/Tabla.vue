<template>
    <div>
        <h2 class="mt-5">Panel de usuarios</h2>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-data-table :headers="usuariosHeaders" :items="$store.state.usuarios">
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Tabla',
    data() {
        return {
            usuariosHeaders: [
                {text: "Nombre", value: "name"},
                {text: "Email", value: "email"},
                {text: "Pais", value: "pais"}
            ]
        }
    }
}
</script>

<style>
</style>