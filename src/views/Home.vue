<template>
    <div>
        <v-container class="pa-5">
            <h1>Bienvenidos a Vuegetarian Market!</h1>
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
                <p>Vuegetarian - Market Vegetariano.
                    <br>Martes a domingos desde el mediodía ✨Delicias vegetarianas y veganas 🥕 Calle Falsa 1234, @vuegetarian
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
                        src: 'https://firebasestorage.googleapis.com/v0/b/coderhousevue.appspot.com/o/banner1.jpg?alt=media&token=fe0cb255-d9ff-4c30-bdaa-9ec85614b4b8'
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/coderhousevue.appspot.com/o/banner2.jpg?alt=media&token=637ee895-c335-4a0d-86a0-ba046e77435f'
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/coderhousevue.appspot.com/o/banner3.png?alt=media&token=3d43757a-c6af-4f31-859c-a1ce4c983fe9'
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/coderhousevue.appspot.com/o/banner4.jpg?alt=media&token=6727355a-f882-4f4f-a623-b8e997ca0082',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/coderhousevue.appspot.com/o/banner5.jpg?alt=media&token=3e754832-277a-4a3e-b9b7-8608b26296f1'
                    },
                ],
            }
        }
    }
</script>

<style scoped>
</style>