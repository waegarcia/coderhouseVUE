<template>
    <div>
        <v-btn color="success" class="mr-3" @click="agregar(producto)">Agregar al carrito</v-btn>
    </div>
</template>

<script>
export default {
    name: "Carrito",
    props: {
        producto: String,
    },
    methods: {
        agregar(producto) {
            console.log(producto);
        },
    },
};
</script>

<style scoped>
</style>
