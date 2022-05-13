class Productos {
    constructor(id, marca, articulo, precio, stock, destacado){
        this.id = id
        this.articulo = articulo
        this.marca = marca
        this.precio = precio
        this.stock = stock   
        this.destacado = destacado
}
}

const producto1 = new Productos (1, "Mate Uruguayo Torpedo Pampa Térmico", "Pampa", 100, 50, true)
const producto2 = new Productos (2, "Mate Uruguayo Camionero Pampa Termico", "Pampa", 110, 50, true)
const producto3 = new Productos (3, "Mate Uruguayo Camionero Calabaza Cuero Premium", "TDA", 95, 50, true)
const producto4 = new Productos (4, "Mate Imperial Cuero Virola Alpaca", "TMS", 90, 50, true)
const producto5 = new Productos (5, "Mate Uruguayo Camionero Boca Ancha", "TMS", 98, 50, true)
const producto6 = new Productos (6, "Mate Uruguayo De Calabaza Premium", "TDA", 100, 50, true)
const producto7 = new Productos (7, "Bombilla - Acero Inoxidable", "Un Mate", 110, 50, true)
const producto8 = new Productos (8, "Bombilla Mate Pico De Loro Acero Inoxidable Cuchara Paleta", "Uruguaya", 95, 50, true)
const producto9 = new Productos (9, "Bombilla Spring Original", "Stanley", 98, 50, true)
const producto10 = new Productos (10, "Bombilla Spoon Original", "Stanley", 90, 50, true)
const producto11 = new Productos (11, "Bombilla Acero Inoxidable Plana Chata", "Uruguaya", 105, 50, true)
const producto12 = new Productos (12, "Bombilla Acero Inoxidable Resorte Chata Plana", "Uruguaya", 120, 50, true)
const producto13 = new Productos (13, "Bombilla Saca Yerba Acero Inoxidable", "Petish", 99, 50, true)
const producto14 = new Productos (14, "Termo Stanley CLASSIC 0.75L Pico Matero - NEGRO MATE", "Stanley", 110, 50, true)
const producto15 = new Productos (15, "Termo Stanley CLASSIC 739ml Pico cafetero - BLANCO", "Stanley", 115, 50, true)
const producto16 = new Productos (16, "Termo WATERDOG - BLANCO - BLANCO", "Waterdog", 115, 50, false)
const producto17 = new Productos (17, "Termo Stanley CLASSIC 0,946 L Pico Matero VERDE", "Stanley", 115, 50, false)
const producto18 = new Productos (18, "Termo Stanley CLASSIC 0,946 L Pico Matero NEGRO", "Stanley", 115, 50, false)
const producto19 = new Productos (19, "Termo Stanley CLASSIC 0,946 L Pico Matero ROJO", "Stanley", 115, 50, false)
const producto20 = new Productos (20, "Termo Stanley CLASSIC 1L Pico Matero - NEGRO MATE -Manija Plegable con GRIP DE GOMA", "Stanley", 115, 50, false)
const producto21 = new Productos (21, "Termo Stanley ADVENTURE", "Stanley", 115, 50, false)
const producto22 = new Productos (22, "Termo Acero Lumilagro LUMINOX", "Limulagro", 115, 50, false)
const producto23 = new Productos (23, "Termo de acero Termolar R-evolution ", "Termolar", 115, 50, false)
const producto24 = new Productos (24, "Termo de acero Keep", "Keep", 115, 50, false)
const producto25 = new Productos (25, "Termo GAUCHO ARGENTINO", "Gaucho", 115, 50, false)
const producto26 = new Productos (26, "Termo de acero SPINIT CLASSIC", "Spinnit", 115, 50, false)
const producto27 = new Productos (27, "Termo Coleman 1,1 L Green", "Coleman", 115, 50, false)
/* const producto28 = new Productos (28, "Termo Coleman 1,1 L Sandstone - BLANCO", "Coleman", 115, 50, true)
const producto29 = new Productos (29, "Termo Coleman 1,1 L Black Sand", "Coleman", 115, 50, true)  */

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27/* , producto28, producto29 */]
let carro = [];


const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")
const container3 = document.querySelector(".container3")
const pagM = document.querySelector("#pagM")
const pagB = document.querySelector("#pagB")
const pagT = document.querySelector("#pagT")

// -----------------

/* container.addEventListener('click', e => {
    agregarCarro (e)
}) */


    


// FILTROS POR RUBRO

const filtrarMate = () => {
    pagM.addEventListener('click',  () => {
    let filMate = productos.filter(mates => mates.id > 0 && mates.id <= 6)
    filMate.forEach(pMates => {
        console.log(pMates)
    })})
    
}

const filtrarBombilla = () => { 
    pagB.addEventListener('click',  () => {
        let filBombilla = productos.filter(bombillas => bombillas.id <= 13 && bombillas.id > 6)
        filBombilla.forEach(pBombillas => {
            console.log(pBombillas)
        })})

}

const filtrarTermo = () => { 
    pagT.addEventListener('click',  () => {
        let filTermo = productos.filter(termos => termos.id > 13 && termos.id <= 27)
        filTermo.forEach(pTermos => {
            console.log(pTermos)
        })})
}




// MOSTRAR EN PAGINA PRINCIPAL SOLO PRODUCTOS DESTACADOS.

const mostrarDestacados = () => {
    const productosDestacados = document.createElement("div")
    productosDestacados.className = 'pDestacados row'
    container.appendChild(productosDestacados)

    let destacados = productos.forEach((pDest)=>{

    productosDestacados.innerHTML +=
        `<div id="${pDest.id}" class="card" style="width: 18rem;">
            <div  class="card-body">
                <h5 class="card-title">${pDest.marca}</h5>
                <p class="card-text">Marca: ${pDest.articulo}</p>
                <p class="card-text">Precio: $${pDest.precio}</p>
                <button id="boton${pDest.id}" class="btn btn-dark">Agregar al carrito</button>
            </div>
        </div>`    
})}







mostrarDestacados();
filtrarMate();
filtrarBombilla();
filtrarTermo();