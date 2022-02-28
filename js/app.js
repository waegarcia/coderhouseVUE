Vue.component("paises-comidas", {
    props: ["pais", "tamanio", "color"],
    template: `
        <table>
            <thead>
                <tr :class="tamanio == 'grande' ? 'texto-grande' : 'texto-chico'">
                    <th>id</th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody :class="color ? 'color' : ''">
                <tr v-for="(comida, index) in pais">
                    <td>{{comida.id}}</td>
                    <td>{{comida.titulo}}</td>
                    <td>$ {{comida.costo}}</td>
                </tr>
            </tbody>
        </table>
    `
})

var app = new Vue({
    el: "#app",
    data: {
        argentina: [
            {
                id: 1, 
                titulo: "Asado",
                costo: 20000.00,
            },
            {
                id: 2, 
                titulo: "Choripan",
                costo: 75.00,
            },
            {
                id: 3, 
                titulo: "Empanada", 
                costo: 45.00,
            }
        ],
        italia: [
            {
                id: 1, 
                titulo: "Spaghetti",
                costo: 575.00,
            },
            {
                id: 2, 
                titulo: "Pizza",
                costo: 675.00,
            },
            {
                id: 3, 
                titulo: "Calzone", 
                costo: 845.00,
            }
        ],
        espania: [
            {
                id: 1, 
                titulo: "Paella",
                costo: 375.00,
            },
            {
                id: 2, 
                titulo: "Pulpo a la gallega",
                costo: 525.00,
            },
            {
                id: 3, 
                titulo: "Tortilla", 
                costo: 420.00,
            }
        ]
    }
})
