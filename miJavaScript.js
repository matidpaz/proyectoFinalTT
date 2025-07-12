let productos = [
    {
        id: 0,
        imagen: "images/img0.jpeg",
        nombre: "producto 1",
        precio: 1000,
    },
    {
        id: 1,
        imagen: "images/img1.jpeg",
        nombre: "producto 2",
        precio: 2000,
    },
    {
        id: 2,
        imagen: "images/img2.jpeg",
        nombre: "producto 3",
        precio: 3000,
    },
    {
        id: 3,
        imagen: "images/img3.jpeg",
        nombre: "producto 4",
        precio: 4000,
    },
    {
        id: 4,
        imagen: "images/img4.jpeg",
        nombre: "producto 5",
        precio: 5000,
    },
    {
        id: 5,
        imagen: "images/img5.jpeg",
        nombre: "producto 6",
        precio: 6000,
    },
    {
        id: 6,
        imagen: "images/img6.jpeg",
        nombre: "producto 7",
        precio: 7000,
    },
    {
        id: 7,
        imagen: "images/img7.jpeg",
        nombre: "producto 8",
        precio: 8000,
    },
    {
        id: 8,
        imagen: "images/img8.jpeg",
        nombre: "producto 9",
        precio: 9000,
    }
];

//Funcion para mostrar todos los productos
function mostraTodosLosProductos(productos) {
    let misProductosParaMostrar = document.getElementById("contenedor-productos")
    for (let i = 0; i < productos.length; i++) {
        misProductosParaMostrar.innerHTML +=
            `
            <div class="card">
                <img class="imagen" src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="card-content">
                    <div>
                        <span class="card-nombre">${productos[i].nombre}</span><br>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i><br>
                        <span class="card-fecha">17/05/25</span>
                    </div>

                </div>
            </div>
            `
        //misProductosParaMostrar.innerHTML = misProductosParaMostrar.innerHTML + "Producto: " + (i+1) + " - nombre: " + productos[i].nombre + " - precio: " + productos[i].precio + "<br>";
    }
}

mostraTodosLosProductos(productos);


//Funcion que agrega los productos a un carrito
let carrito = [];

function agregarACarrito(id) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            const element = productos[i];
            break;
        }   
    }
    if (element) {
        carrito.push(element)
    }
}