<template>
    <v-container>
        <v-row class="d-flex align-center justify-center">
            <h2 class="ma-5">Login de usuarios</h2>
        </v-row>
        <v-row class="d-flex align-center justify-center">
            <v-card class="col-6">
                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    label="Contraseña"
                    required
                    ></v-text-field>

                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    >
                    <b>Login</b>
                    </v-btn>
                <p class="mt-1">* leer readme.md para ingresar como admin</p>
                </v-form>
                <h4 class="mt-5">¿No tenés una cuenta? 
                    <router-link to="/registro">Registrate GRATIS</router-link>
                </h4>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            valid: true,
            email: "",
            emailRules: [
            (v) => !!v || "E-mail es requerido",
            (v) => /.+@.+\..+/.test(v) || "Ingrese un e-mail valido",
            ],
            password: "",
            passwordRules: [
            (v) => !!v || "Contraseña es requerido",
            (v) => (v && v.length <= 10) || "Contraseña debe tener maximo 10 caracteres",
            ],
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    if (this.email === "admin@food.com" && this.password === "admin") {
                        this.$router.push("/admin")
                    } else {
                        this.$router.push("/user")
                    }
                }
            },
        },
    }
</script>

<style scoped>

</style>