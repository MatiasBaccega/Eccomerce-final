const IVA = 1.21
let carritoCompra = []




const saludo = () => {
    let nombre;
    do{
        nombre = prompt("Bienvenido a MATICES. \nIngrese su nombre");

    } while(nombre === "" || !isNaN(nombre));

    console.log(" Hola " + nombre + "\n\n A continuacion veras nuestra lista de productos")    
}

const mostrarProductos =() =>{
    productos.forEach((productosEnArray) => {
        console.log(productosEnArray)       
})
} 

class Productos {
    constructor(id, articulo, marca, precio, stock){
        this.id = id
        this.articulo = articulo
        this.marca = marca
        this.precio = precioIVA (precio)
        this.stock = stock   

    function precioIVA (precio) {
        return precio * IVA
    }
}
}

const producto1 = new Productos (1, "Lapiz", "Casttle", 100, 50)
const producto2 = new Productos (1, "Lapiz", "Coder", 110, 50)
const producto3 = new Productos (1, "Lapiz", "Faber", 95, 50)
const producto4 = new Productos (1, "Lapiz", "Pencil", 90, 50)
const producto5 = new Productos (1, "Lapiz", "House", 98, 50)
const producto6 = new Productos (1, "Boligrafo", "Casttle", 100, 50)
const producto7 = new Productos (1, "Boligrafo", "Coder", 110, 50)
const producto8 = new Productos (1, "Boligrafo", "Faber", 95, 50)
const producto9 = new Productos (1, "Boligrafo", "Pencil", 98, 50)
const producto10 = new Productos (1, "Boligrafo", "House", 90, 50)
const producto11 = new Productos (1, "Plastilina", "Casttle", 105, 50)
const producto12 = new Productos (1, "Plastilina", "Coder", 120, 50)
const producto13 = new Productos (1, "Plastilina", "Faber", 99, 50)
const producto14 = new Productos (1, "Plastilina", "Pencil", 110, 50)
const producto15 = new Productos (1, "Plastilina", "House", 115, 50)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15]

saludo ();
mostrarProductos (); 

const agregarProductos = () => {
    let productoElegido;
    do {
    productoElegido = parseInt(prompt(`Que producto vas a llevar? \n 1) Lapiz \n 2) Lapiz \n 3) Lapiz \n 4) Lapiz \n 5) Lapiz \n 6) Lapiz \n 7) Lapiz \n 8) Lapiz \n 9) Lapiz \n 10) Lapiz \n 11) Lapiz \n 12) Lapiz \n 13) Lapiz \n 14) Lapiz \n 15) Lapiz`))

    switch (productoElegido) {
        case 1:
            carritoCompra.push(producto1)
            break
        case 2:
            carritoCompra.push(producto2)
            break
        case 3:
            carritoCompra.push(producto3)
            break
        case 4:
            carritoCompra.push(producto4)
            break
        case 5:
            carritoCompra.push(producto5)
            break
        case 6:
            carritoCompra.push(producto6)
            break
        case 7:
            carritoCompra.push(producto7)
            break
        case 8:
            carritoCompra.push(producto8)
            break
        case 9:
            carritoCompra.push(producto9)
            break
        case 10:
            carritoCompra.push(producto10)
            break
        case 11:
            carritoCompra.push(producto11)
            break
        case 12:
            carritoCompra.push(producto12)
            break
        case 13:
            carritoCompra.push(producto13)
            break
        case 14:
            carritoCompra.push(producto14)
            break
        case 15:
            carritoCompra.push(producto15)
            break
            
        }
    } while((productoElegido === "" || isNaN(productoElegido)) || ((productoElegido === 0 || productoElegido >= 16)));
    

    let seguir = confirm(`Desea agregar otro producto?`);

    if (seguir) { 
        init ();
        
    }else {
        carritoCompra = carritoCompra.map(aPagar => aPagar.precio )
        console.log(carritoCompra) 
        const total = carritoCompra.reduce ((anterior, posterior) => anterior + posterior)
        console.log(`El monto a abonar es $ ${total}`)
    }
}

console.log(carritoCompra) 

const init = () => {
    let productosElegidos = agregarProductos();
}

init ();
