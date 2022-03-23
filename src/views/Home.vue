<template>
    <div>
        <v-container class="pa-5">
            <h1>Bienvenidos!!!</h1>
        </v-container>
        <v-row>
            <v-carousel cycle :show-arrows="false">
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
                </v-carousel-item>
            </v-carousel>
        </v-row>
        <v-container class="pt-15">
            <v-row class="d-flex flex-column align-center justify-center">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, 
                    optio deleniti odio delectus odit fugit? Iure animi illo praesentium porro et? Officia repellendus aspernatur eveniet soluta molestias, 
                    perferendis fugit sint!
                </p>
                <v-btn color="success">
                    <router-link to="/login" style="text-decoration: none; color: white"><b>Pedir online</b></router-link>
                </v-btn>
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
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
    }
</script>

<style scoped>
</style>