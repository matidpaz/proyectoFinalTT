let productos = [
    {
        id: 0,
        imagen: "images/img0.jpeg",
        nombre: "producto 1",
        precio: 1000,
        cantidad: 0,
    },
    {
        id: 1,
        imagen: "images/img1.jpeg",
        nombre: "producto 2",
        precio: 2000,
        cantidad: 0,
    },
    {
        id: 2,
        imagen: "images/img2.jpeg",
        nombre: "producto 3",
        precio: 3000,
        cantidad: 0,
    },
    {
        id: 3,
        imagen: "images/img3.jpeg",
        nombre: "producto 4",
        precio: 4000,
        cantidad: 0,
    },
    {
        id: 4,
        imagen: "images/img4.jpeg",
        nombre: "producto 5",
        precio: 5000,
        cantidad: 0,
    },
    {
        id: 5,
        imagen: "images/img5.jpeg",
        nombre: "producto 6",
        precio: 6000,
        cantidad: 0,
    },
    {
        id: 6,
        imagen: "images/img6.jpeg",
        nombre: "producto 7",
        precio: 7000,
        cantidad: 0,
    },
    {
        id: 7,
        imagen: "images/img7.jpeg",
        nombre: "producto 8",
        precio: 8000,
        cantidad: 0,
    },
    {
        id: 8,
        imagen: "images/img8.jpeg",
        nombre: "producto 9",
        precio: 9000,
        cantidad: 0,
    }
];

//Funcion que recibe como argumento un ID.
//Primero busca si el elemento a agregar se encuentra en el carrito, 
// si ya esta en esa lista solo aumenta la cantidad en 1, 
// sino agrega el elemento a la lista con cantidad 1.
//Luego actualiza el esatdo del carrito en el HTML.-
function agregarACarrito(id) {
    let element;
    let enCarrito = false;
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id === id){
            console.log("El elemento ya existe en el carrito asi que solo se suma la cantidad")
            carrito[i].cantidad++;
            console.log("Cantidad nueva: " + carrito[i].cantidad);
            enCarrito = true;
        }
        
    }
    if(enCarrito === false){
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === id) {
                element = productos[i];
                break;
            }   
        }
        if (element) {
            element.cantidad++;
            carrito.push(element);
        }
    }
    mostrarEstadoDelCarrito(carrito);
}


//Funcion que recibe como argumento un ID, y una accion.
//primero busca el elemento, y si lo encuentra compara la accion para continuar.-
function actualizarCantiadd(id, accion) {
    console.log("Entro a la funcion actualizar cantidad");
    for (let i = 0; i < carrito.length; i++){
        if(carrito[i].id === id){
            if(accion === "restar"){
                carrito[i].cantidad--;
                if(carrito[i].cantidad === 0){
                    console.log("Entro a restar - cantidad nueva: " + carrito[i].cantidad);
                    carrito.splice(i,1);
                    console.log("Elimino el elemento")
                }
            }   
            else if(accion === "sumar"){
                carrito[i].cantidad++;
                console.log("Entro a sumar - cantidad nueva: " + carrito[i].cantidad);
            } 
            else{
                console.log("Entro a eliminar1");
                eliminarDelCarrito(id);
            }
            mostrarEstadoDelCarrito(carrito);
            console.log("Mostrando carrito en la funcion de actualizar: ");
            for (let i = 0; i < carrito.length; i++) {
                console.log(carrito[i].nombre + " " + carrito[i].cantidad);
            }
            break;
        }
    }
}
     
    
//Funcion que recibe ID del elemento
//Busca en el carrito un elemento con su mismo ID y actualiza la cantidad a "0" y posterior lo elimina de la lista
function eliminarDelCarrito(id) {
    console.log("Entro a la funcion eliminarDelCarrito");
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id === id){
            carrito[i].cantidad = 0; 
            console.log("Elemento a eliminar: " + carrito[i].nombre);
            carrito.splice(i, 1);
            console.log("Mostrando carrito en la funcion de eliminar: ");
            for (let i = 0; i < carrito.length; i++) {
                console.log(carrito[i].nombre + " " + carrito[i].cantidad);
            }
            break;
        }
    }
}



//Funcion para mostrar todos los productos
function mostraTodosLosProductos(productos) {
    console.log("Entro a mostraTodosLosProductos")
    let misProductosParaMostrar = document.getElementById("contenedor-productos")
    for (let i = 0; i < productos.length; i++) {
        misProductosParaMostrar.insertAdjacentHTML("afterbegin", 
            `
            <div class="card">
                <img class="imagen" src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="card-content">
                    <div>
                        <span class="card-nombre">${productos[i].nombre}</span><br>
                        <button class="agregarElemento" data-id=${productos[i].id}>Agregar al carrito</button>
                    </div>

                </div>
            </div>
            `
        );
    }
    if (misProductosParaMostrar){
        misProductosParaMostrar.addEventListener("click", function(event){
            const elementoCliqueado = parseInt(event.target.dataset.id);
            console.log("Mi nuevo elemento cliqueado: " + elementoCliqueado);
            agregarACarrito(elementoCliqueado);
        })
    }
}

mostraTodosLosProductos(productos);

//Funcion que agrega los productos a un carrito
let carrito = [];

let divCarrito = document.getElementById("carrito");///////////////////////////////////////////////////


/*
const botonParaAgregarAlCarrito = document.querySelector("agregarElemento");
botonParaAgregarAlCarrito.addEventListener("click", function(event) {
    console.log("se obtuvo el ID: " + event.target.dataset.id);
    const idElemento = event.target.dataset.id;
    agregarACarrito(idElemento);
})
*/

function calcularTotalAPagar(){
    console.log("Entro a la funcion calcularTotalAPagar")
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        console.log("elemento: " + carrito[i].nombre + " Precio: " + carrito[i].precio + " Cantidad: " + carrito[i].cantidad);
        total+= carrito[i].precio * carrito[i].cantidad;
        console.log("Total: " + total);
    }
    return total;
}


let creoElEvento = false;

let miCarrito = document.getElementById("carrito");
function mostrarEstadoDelCarrito(lista) {
    console.log("Entro a la funcion mostrarEstadoDelCarrito")
    let total = 0;
    if (lista.length === 0) {
        console.log("No hay ningun elemento dentro del carrito")
        miCarrito.innerHTML = "";
        miCarrito.innerHTML +=
            `
            <p id="carrito-vacio-mensaje">Tu carrito está vacío.</p>
            `
    }
    else{
        miCarrito.innerHTML = "";
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].cantidad > 0){
                total = calcularTotalAPagar();
                let producto = lista[i];
                miCarrito.innerHTML+=
                    `
                    <div class="elementosDelCarrito" data-id="${producto.id}">
                        <div class="item-info">
                            <span>${producto.nombre}</span> - $${producto.precio.toFixed(2)}
                        </div>
                        <div class="item-actions">
                            <button class="restar" data-id="${producto.id}">-</button>
                            <span class="cantidad-valor">${producto.cantidad}</span>
                            <button class="sumar" data-id="${producto.id}">+</button>
                            <button class="eliminar" data-id="${producto.id}">Eliminar</button>
                        </div>
                    </div>
                    
                    `
            }
        }
        miCarrito.innerHTML +=
            `
            <br>
            <p id="total">Total: ${total}</p>
            `
        console.log("PASA POR ACA VECESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        console.log("suma total: " + total);
    }
}
if(miCarrito){
    creoElEvento = true;
    miCarrito.addEventListener("click", function(event){
        const precionado = event.target;
        const idPrecionado = parseInt(event.target.dataset.id);
        if(precionado.classList.contains("restar")){
        
            console.log("Aca esta por llamar a la funcion actualizarCantidad - resta - desde el evento");
            actualizarCantiadd(idPrecionado,"restar");
        }
        else if(precionado.classList.contains("sumar")){
            
            console.log("Aca esta por llamar a la funcion actualizarCantidad - sumar - desde el evento");
            actualizarCantiadd(idPrecionado,"sumar");
        }
        else{
           
            console.log("Aca esta por llamar a la funcion actualizarCantidad - eliminar - desde el evento");
            actualizarCantiadd(idPrecionado,"eliminar");
        }
    })
}
mostrarEstadoDelCarrito(carrito);


/*
function restarCantidad(id) {
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id === id){
            carrito[i].cantidad--;
            console.log("Realizando resta")
        }
        
    }
}



const botonResta = document.getElementById("restar");
if(botonResta){
    botonResta.addEventListener("click", function (event) {
    const id = event.target.dataset.id;
    restarCantidad(id);
    });
}
*/
