<template>
    <div class="gracias">
        <h1 class="mt-5">Muchas gracias por tu compra!!!</h1><br>
        <h5>Esperamos que vuelvas pronto por Vuegetarian - Market Vegetariano! 🥕</h5>
    </div>
</template>

<script>
    export default {
        name: 'Gracias',
        data() {
            return {
                carrito: this.$store.state.carrito
            }
        },
        methods: {
            async deleteAll(){
                for (const iterator of this.carrito) {
                    await this.$store.dispatch("deleteCarritoAction", iterator.id)
                }
            }
        },
        mounted(){
            this.deleteAll()
        }
    }
</script>

<style scoped>
</style>