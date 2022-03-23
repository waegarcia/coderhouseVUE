<template>
    <v-container>
        <v-row class="d-flex align-center justify-center">
            <h2 class="ma-5">Registro de nuevos clientes</h2>
        </v-row>
        <v-row class="d-flex align-center justify-center">
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

                    <v-text-field
                    type="password"
                    v-model="passwordUno"
                    :rules="passwordRules"
                    label="Contraseña"
                    ></v-text-field>

                    <v-text-field
                    type="password"
                    v-model="passwordDos"
                    :rules="passwordRules"
                    label="Repetir Contraseña"
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
                    :rules="[(v) => !!v || 'Debe aceptar los terminos y condiciones para continuar!']"
                    label="Acepta terminos y condiciones?"
                    required
                    ></v-checkbox>

                    <v-btn :disabled="!valid" color="success" class="mr-4" 
                        @click="validate"><b> Confirmar </b></v-btn>
                    <v-btn color="error" class="mr-4" @click="reset"><b> Limpiar </b></v-btn>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Registro",
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
            passwordUno: "",
            passwordDos: "",
            passwordRules: [
            (v) => !!v || "Contraseña es requerido",
            (v) => (v && v.length <= 10) || "Contraseña debe tener maximo 10 caracteres",
            ],
            select: null,
            paises: ["Argentina", "Uruguay", "Peru", "Colombia"],
            checkbox: false,
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.$router.push("/user")
                }
            },
            reset() {
                this.$refs.form.reset();
            },
        },
    }
</script>

<style scoped>
</style>