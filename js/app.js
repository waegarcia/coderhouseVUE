var app = new Vue({
    el: "#app",
    data: {
        contador: 0
    },
    methods: {
        sumarClick(){
            this.contador++
        },
        restarClick(){
            this.contador--
        }
    }
})
