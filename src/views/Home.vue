<template>
    <div>
        <v-container class="pa-5">
            <h1>Bienvenidos a Vuegetarian restaurante!</h1>
        </v-container>
        <v-row>
            <v-carousel cycle :show-arrows="false">
                <v-carousel-item v-for="(item,i) in items" :key="i" eager>
                    <v-img :src="item.src" height="100%" eager/>
                </v-carousel-item>
            </v-carousel>
        </v-row>
        <v-container class="pt-15">
            <v-row class="d-flex flex-column align-center justify-center">
                <p>Vuegetarian - Restaurante Vegetariano.
                    <br>Martes a domingos desde el mediodía ✨Delicias vegetarianas y veganas 🥕Café de especialidad ☕Calle Falsa 1234, @vuegetarian
                    <br>DELIVERY @rappiargentina @vgo.ar @pedidosya
                    <br>TAKE AWAY 👇👇👇
                </p>
                <router-link to="/login" style="text-decoration: none; color: white">
                    <v-btn color="success"><b>Pedir online</b></v-btn>
                </router-link>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        src: 'https://i.ytimg.com/vi/1w6NooZQlS4/maxresdefault.jpg'
                    },
                    {
                        src: 'https://www.clara.es/medio/2022/02/07/recetas-vegetarianas-arroz-lentejas_81304dbc_1280x1172.jpg'
                    },
                    {
                        src: 'https://www.comedera.com/wp-content/uploads/2021/01/vegetable-skewer-3317060_1280.jpg'
                    },
                    {
                        src: 'https://recetasveganas.net/wp-content/uploads/2019/11/arroz-verduras-salsa-recetas-vegetarianas-invierno.jpg',
                    },
                    {
                        src: 'https://recetasveganas.net/wp-content/uploads/2019/10/recetas-vegetarianas-calabacines-rellenos-facil2.png'
                    },
                ],
            }
        }
    }
</script>

<style scoped>
</style>