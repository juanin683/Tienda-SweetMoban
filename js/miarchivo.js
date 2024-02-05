
let misProductos = [
    {
        nombre: "Vestido Floreado" ,
        precio: 2000,
        img: "./assets/img/graphic-woman-dress-trendy-design-on-white-background (1).jpg",
        cantidad: 1,
        id: 1,

    },
    {
        nombre: "Conjunto blazer y pantalon" ,
        precio: 2000,
        img: "./assets/img/blazer.jpeg",
        cantidad: 1,
        id:2,
    },
    {
        nombre: "Vestido rojo oscuro" ,
        precio: 3500,
        img: "./assets/img/vestidoelegantecolorbordo.jpg",
        cantidad: 1,
       id:3,
    },
    {
        nombre: "Top purpura" ,
        precio: 1000,
        img: "./assets/img/topPurpura.jpg",
        cantidad: 1,
       id:4,
    },
    {
        nombre: "Remera musculosa" ,
        precio: 1500,
        img: "./assets/img/remeras.jpg",
        cantidad: 1,
       id:5,
    },
    {
        nombre: "Remera con diseño" ,
        precio: 900,
        img: "./assets/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg",
        cantidad: 1,
        id:6,
    },

];




let ropas = document.querySelector("#contener-ropas")
let miCarrito = document.querySelector("#carrito-compras");
let miCarrito2 = document.querySelector("#carrito-img");

let container = document.getElementById("modal-container")



let vistaDelItem = document.createElement("div")
let botonparaagregaralcarrito = document.createElement("button");


//recorre productos y crea etiquetas html

function carritoDeCompras (){

misProductos.forEach((prod) =>{
    //imgs de main
    let contenidodiv = document.createElement("div")
    contenidodiv.className= "mis-productos"
    contenidodiv.innerHTML = `
    <div class="container fluid" >
        <section class="imagenesIngresos row">

            <div class="titulosRopa row" id="contener-ropas"
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <img class=" img-fluid img-thumbnail mx-auto d-block mt-5"
                     src="${prod.img}">
                    <p> ${prod.nombre} $${prod.precio}</p>
                </div>
            </div>
        </section>
    </div>

` ;

    ropas.append(contenidodiv);

    //btn vista previa del producto
    

    
    let botonvistaprevia = document.createElement("button")
   
    botonvistaprevia.innerText = "Vista previa del Producto";
    botonvistaprevia.className = "vista-previa-del-producto";
    contenidodiv.append(botonvistaprevia);

botonvistaprevia.addEventListener("click", () =>{
        container.innerHTML = "";
    vistaDelItem.className = "vistaDelItem"
    vistaDelItem.innerHTML = `
    <h1 class="caja-vistapreviaprod-header">${prod.nombre}</h1>
    <div class="col-sm-12 col-md-6 col-lg-4">
        <img  src="${prod.img}"></a>
        <p> $${prod.precio} </p>

        <input type="radio" name="S" id="" value="Small">S</input>
        <input type="radio" name="M" id="">M</input>
        <input type="radio" name="L" id="">L</input>
        <p>Cantidad </p>
        <input id="cant-${prod.cantidad}" class="barra-cantidad" type="number"></input>
        

        <button id="${prod.id}" class="btn-button">Agregar al Carrito</button>
    </div>
    `;

    container.append(vistaDelItem);

    

    let cruzButton = document.createElement("button");
    container.style.display = "flex";

    cruzButton.innerHTML = "X";
    cruzButton.className = "boton-exit";
    cruzButton.addEventListener("click", ()=>{
        container.style.display = "none";
        })

    vistaDelItem.append(cruzButton);
    
    //btn del modal para agregar al carrito
    let btnac = document.getElementById(`${prod.id}`);
    btnac.addEventListener("click", agregarAlCarrito)
    
    let botonBarraCantidad = document.getElementById(`cant-${prod.cantidad}`);
    botonBarraCantidad.addEventListener("click", agregarAlCarrito)
})

   
})

}

carritoDeCompras()
function  cantidadDeProductos (cant){


}

 function  agregarAlCarrito (e){
    const id = parseInt(e.target.id)
    console.log(id);
    let producto = misProductos.find((producto) => producto.id === id)
   
    let prodEnCarrito = carrito.some(
    (prodrepeat) => prodrepeat.id === parseInt(id)
    )

    let prodEnCarrito2 = carrito.find(
        (prodrepeat2) => prodrepeat2.cantidad === producto.cantidad
        )

    let prodAlCarrito = {
        nombre: producto.nombre,
        id: producto.id,
        cantidad: 1,
    }
    
    if (prodEnCarrito || prodEnCarrito2) {
        let indice = carrito.findIndex((prod) => prod.id === id)
        carrito[indice].cantidad++;
        carrito[indice].precio = carrito[indice].cantidad * prodAlCarrito.precio;
        
     } else{
        carrito.push(producto)  
        console.log(carrito)
     
    }
    
    
    botonAgregarAlCarrito()
    

 }


  //carrito img(header)
    function botonAgregarAlCarrito(){
        
    let miCarrito2 = document.querySelector("#carrito-img");
    
    miCarrito2.addEventListener("mouseover", () => {
            miCarrito.innerHTML = "";

           
        const cajaComprasHeader = document.createElement("div")
        cajaComprasHeader.className = "caja-compras-header"
        cajaComprasHeader.innerHTML = `
        <h1 class="caja-header">Mi Carrito</h1>
        `;
        miCarrito.append(cajaComprasHeader);

       
        carrito.find((prod)=>{
            let totaldiv = document.createElement("div");
            let totaldelcarrito = carrito.reduce((acumulador, product)=>acumulador + product.precio * product.cantidad, 0 )
            totaldelcarrito.className = "todos-productos-elegidos"
            totaldelcarrito.innerHTML = `El total a pagar es de: ${totaldelcarrito}`;
            miCarrito.append(totaldiv);
            
            let carritoconcontenido = document.createElement("div");
            carritoconcontenido.className = "cajaComprasContenido";
            carritoconcontenido.innerHTML = `
            
            <img src="${prod.img}">
            <h2>Nombre: ${prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad: ${prod.cantidad}</p>
            <p>Total por producto: ${prod.cantidad * prod.precio}</p>
            <p class="todos-productos-elegidos">El total a pagar es de: ${totaldelcarrito}</p>
            ` ;
            

            //boton x para eliminar un item 
            miCarrito.append(carritoconcontenido);
            let eliminar = document.createElement("button");
            eliminar.innerText = "X"
            eliminar.className = "eliminar-producto"
            carritoconcontenido.append(eliminar);

           
           
            
            
            eliminar.addEventListener("click",eliminarItem)


            
            
            })
            localStorage.setItem('productos-en-mi-carrito', JSON.stringify(carrito))
            
})


}


let carrito = JSON.parse(localStorage.getItem("productos-en-mi-carrito")) || [];


//funcion para eliminar un producto(del modal de carrito)
function eliminarItem(prodId){
    
    const buscarId = carrito.find((unelemento) => unelemento.id);
     carrito = carrito.filter((carritoId)=> {
        return carritoId !== buscarId;
     })
     botonAgregarAlCarrito()
    
}
botonAgregarAlCarrito()