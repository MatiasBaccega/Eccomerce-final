///////////////////////////////////////////////////////////////
//                APLICO SPREAD EN LA LINEA                 //
//                        N° 192                           //
//  ES EN EL UNICO LUGAR DONDE ENCONTRE OPTIMO REALIZARLO //
//                                                       //
//////////////////////////////////////////////////////////


let productos = [] 
let carro = {};
let carrito = [];


// fetch -------------------- //
const asynC = () => {
    fetch("./productos.json")
    .then((response) => response.json())
    .then((producto) => {
        producto.forEach((element) => {
            productos.push(element)
            
            mostrarDestacados();
        })})
        
    }

    console.log(productos)

const container = document.querySelector(".container")
const tituloContainer = document.querySelector("#tituloContainer")
const container3 = document.querySelector(".container3")
const pagM = document.querySelector("#pagM")
const pagB = document.querySelector("#pagB")
const pagT = document.querySelector("#pagT")
const pagD = document.querySelector("#pagD")
const btn = document.querySelector(".select")

// CREO LOS ELEMENTOS 


const productosDestacados = document.createElement("div")
productosDestacados.className = 'pDestacados row'
container.appendChild(productosDestacados)


const verCarro = document.createElement("div")
verCarro.className = 'vCarro row'
container3.appendChild(verCarro)

// -------------------------------------------------- //

// MOSTRAR FILTROS POR RUBRO

const filtrarAdidas = () => {
    productosDestacados.innerHTML = ""

    tituloContainer.innerHTML = `<h3>Adidas</h3>
    `

    let filAdidas = productos.filter(productos => productos.marca === "adidas")
    
    filAdidas.forEach(pAdidas => {
        productosDestacados.innerHTML +=
        `<div id="${pAdidas.id}" class="card" style="width: 18rem; height: 500px;">
            <div  class="card-body ">
            <img style="width:100%; px-auto" src="${pAdidas.imagen}" >
                <h5 class="card-title">${pAdidas.nombre}</h5>
                <p class="card-text">${pAdidas.marca}</p>
                <p class="card-text ">$<span class="price">${pAdidas.precio}</span></p>
                <button id="boton${pAdidas.id}" class="btn btn-outline-primary">Agregar al carrito</button>
            </div>
        </div>`
    })
    
} 

const filtrarPumas = () => { 
    productosDestacados.innerHTML = ""

    tituloContainer.innerHTML = `
        <h3>Puma</h3>
    `

    let filPumas = productos.filter(productos => productos.marca === "puma")
    
    filPumas.forEach(pPumas => {
        productosDestacados.innerHTML +=
        `<div id="${pPumas.id}" class="card" style="width: 18rem; height: 500px;">
            <div  class="card-body ">
            <img style="width:100%; px-auto" src="${pPumas.imagen}" >
                <h5 class="card-title">${pPumas.nombre}</h5>
                <p class="card-text">${pPumas.marca}</p>
                <p class="card-text ">$<span class="price">${pPumas.precio}</span></p>
                <button id="boton${pPumas.id}" class="btn btn-outline-primary">Agregar al carrito</button>
            </div>
        </div>`
    })

}

const filtrarNike = () => { 
        productosDestacados.innerHTML = ""

        tituloContainer.innerHTML = `
        <h3>Nike</h3>

        `

        let filNike = productos.filter(productos => productos.marca === "nike")
    
        filNike.forEach(pNike => {
        productosDestacados.innerHTML +=
        `<div id="${pNike.id}" class="card" style="width: 18rem; height: 500px;">
            <div  class="card-body ">
            <img style="width:100%; px-auto" src="${pNike.imagen}" >
                <h5 class="card-title">${pNike.nombre}</h5>
                <p class="card-text">${pNike.marca}</p>
                <p class="card-text ">$<span class="price">${pNike.precio}</span></p>
                <button id="boton${pNike.id}" class="btn btn-outline-primary">Agregar al carrito</button>
            </div>
        </div>`
    })
}


//---------------------------------------------------------------------------------------------//

// MOSTRAR EN PAGINA PRINCIPAL SOLO PRODUCTOS DESTACADOS.

const mostrarDestacados = () => {
    productosDestacados.innerHTML = ""

        tituloContainer.innerHTML = `
        <h3>Productos Destacados</h3>

        `
    productos.forEach(pDest => {
        if (pDest.destacado)
        {
            productosDestacados.innerHTML +=
            `<div id="${pDest.id}" class="card" style="width: 18rem; height: 500px;">
            <div  class="card-body ">
            <img style="width:100%; px-auto" src="${pDest.imagen}" >
                <h5 class="card-title">${pDest.nombre}</h5>
                <p class="card-text">${pDest.marca}</p>
                <p class="card-text ">$<span class="price">${pDest.precio}</span></p>
                <button id="boton${pDest.id}" class="btn btn-outline-primary select">Agregar al carrito</button>
            </div>
        </div>`
        }
        
    })
} 


// AGREGAR PRODUCTOS  AL CARRO Y GENERAR LOCALSTORAGE.

const agregarCarrito = e => {
    if (e.target.classList.contains('btn-outline-primary')) {
        setearCarrito(e.target.parentElement)
        
    } 
}
    



const setearCarrito = articulo => {
    const producto = {
        articulo: articulo.querySelector('h5').textContent,
        precio: articulo.querySelector('.price').textContent,
        id: articulo.querySelector('.btn-outline-primary').id,
        cantidad: 1 
    }

    toasT();
    console.log(producto)

if (carro.hasOwnProperty(producto.id)) {
        producto.cantidad = carro[producto.id].cantidad + 1
    }

    carro[producto.id] = { ...producto }

    localStorage.setItem("ProductosCarrito" , JSON.stringify(carro))
    
}
// ------------------------------------------------------------------------------- //

// EVENTO MOSTRAR CARRO

document.getElementById("mostrarCarro").addEventListener('click', () => {

    let obtenerCarro = JSON.parse(localStorage.getItem('ProductosCarrito'))
    
    verCarro.innerHTML = ""

    Object.values(obtenerCarro).forEach((carrito) => {



        verCarro.innerHTML +=
            `  
                <p>Marca: ${carrito.articulo}</p>
                <p>${carrito.precio }</p>
                <p>cantidad:${carrito.cantidad}</p>
                
            `
    })

    
    
})

const toasT = () => {
    Toastify({

        text: "Producto agregado",
        
        duration: 3000
        
        }).showToast();
}


// -------------------------------------------------------------------------------------------------//


// EVENTOS

container.addEventListener('click', e => {
    agregarCarrito(e)
    
})

pagT.addEventListener('click',  () => {
    
    filtrarPumas();
})

pagB.addEventListener('click',  () => {
    filtrarNike(); 
})

pagM.addEventListener('click',  () => {
    filtrarAdidas();
})

pagD.addEventListener('click',  () => {
    mostrarDestacados();
})



// -----------------------------------------------------------------------------

// EJECUTAR FUNCIONES
asynC();
mostrarDestacados();



