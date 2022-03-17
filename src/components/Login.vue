<template>
    <v-container>
        <v-row>
            <v-card class="col-6">
                <v-form ref="form">
                    <v-text-field v-model="email" label="E-mail"></v-text-field>
                    <v-text-field v-model="password" label="Contraseña"></v-text-field>
                    <v-btn color="success" class="mr-4">Login</v-btn>
                </v-form>
                <p>Email: {{email}}</p>
                <p>Password: {{password}}</p>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            email: "",
            password: "",
        }),
    }
</script>

<style scoped>
</style>