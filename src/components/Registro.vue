<template>
    <v-container>
        <v-row>
            <v-card class="col-6">
                <v-form ref="form">
                    <v-text-field
                    v-model="name"
                    label="Nombre"
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    label="E-mail"
                    ></v-text-field>

                    <v-text-field
                    v-model="passwordUno"
                    label="Contraseña"
                    ></v-text-field>

                    <v-text-field
                    v-model="passwordDos"
                    label="Repetir Contraseña"
                    ></v-text-field>

                    <v-select
                    v-model="select"
                    :items="paises"
                    label="Pais"
                    ></v-select>

                    <v-checkbox
                    v-model="checkbox"
                    label="Acepta terminos y condiciones?"
                    ></v-checkbox>

                    <v-btn color="success" class="mr-4"> Confirmar </v-btn>
                    <v-btn color="error" class="mr-4"> Limpiar </v-btn>
                </v-form>
                <p>Nombre: {{ name }}</p>
                <p>Email: {{ email }}</p>
                <p>Clave: {{ passwordUno }}</p>
                <p>Repetir clave: {{ passwordDos }}</p>
                <p>Pais: {{ select }}</p>
                <p>Acepta terminos<br/>y condiciones: {{ checkbox }}</p>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Registro",
        data: () => ({
            name: "",
            email: "",
            passwordUno: "",
            passwordDos: "",
            select: null,
            paises: ["Argentina", "Uruguay", "Peru", "Colombia"],
            checkbox: false,
        }),
    }
</script>

<style scoped>
</style>