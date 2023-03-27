let misProductos = [
    {
        nombre: "vestido floreado" ,
        precio: 2000,
        img: "./assets/img/graphic-woman-dress-trendy-design-on-white-background (1).jpg",
        cantidad: 1,
        id: 1,

    },
    {
        nombre: "conjunto blazer y pantalon naranja" ,
        precio: 2000,
        img: "./assets/img/blazer.jpeg",
        cantidad: 1,
        id:2,
    },
    {
        nombre: "vestido rojo oscuro" ,
        precio: 3500,
        img: "./assets/img/vestidoelegantecolorbordo.jpg",
        cantidad: 1,
       id:3,
    },
    {
        nombre: "top purpura" ,
        precio: 1000,
        img: "./assets/img/topPurpura.jpg",
        cantidad: 1,
       id:4,
    },
    {
        nombre: "remera musculosa" ,
        precio: 1500,
        img: "./assets/img/remeras.jpg",
        cantidad: 1,
       id:5,
    },
    {
        nombre: "remera con diseño mano esqueletica" ,
        precio: 900,
        img: "./assets/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg",
        cantidad: 1,
        id:6,
    },

];

let carrito = [];


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
    <div class="container " >
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
        <p>Cantidad</p>

        <input type="number" name="" id="${prod.cantidad}">
        <button id="${prod.id}" class="btn-button">Agregar al Carrito</button>
    </div>
    `;

    container.append(vistaDelItem);

    //btn del modal agregar al carrito
    
    // botonparaagregaralcarrito.innerText = "Agregar al carrito";
    // botonparaagregaralcarrito.className = "agregar-al-carrito";

    //vistaDelItem.append(botonparaagregaralcarrito)

    let cruzButton = document.createElement("button");
    container.style.display = "flex";

    cruzButton.innerHTML = "X";
    cruzButton.className = "boton-exit";
    cruzButton.addEventListener("click", ()=>{
        container.style.display = "none";
        })

    vistaDelItem.append(cruzButton);


    // botonparaagregaralcarrito.addEventListener("click", ()=>{
        
    //     carrito.push({
    //         nombre:prod.nombre, img:prod.img, precio:prod.precio,
    //             });

    //             botonAgregarAlCarrito()
    //             console.log(carrito)
    //     })

    let btnac = document.querySelectorAll('.btn-button');
    btnac.forEach(elemento => {
        elemento.addEventListener('click', (e) =>{
            agregarAlCarrito(e.target.id)
        })
    })
})

   
})

}

carritoDeCompras()

function  agregarAlCarrito (id){
    let producto = misProductos.find((producto) => producto.id === id)
    let prodEnCarrito = carrito.find((prodrepeat) => prodrepeat.id === id)
    
    if (prodEnCarrito) {
        // carrito.map((product)=>{
            //     if(product.id === product.id){
                //         product.cantidad++;
                //     }
                // });
                
        // const index = carrito.findIndex(product => product.id === parseInt.id);
        // const productoss = carrito.map(prod => {
        //     if (prod.id === misProductos.id) {
        //         let cantidad = parseInt(prod.cantidad)
        //         cantidad ++
        //         prod.cantidad = cantidad;
        //         return prod
        //     } else {
        //         return prod
                
        //     }
           
        
        //})

        prodEnCarrito.cantidad++;
        
        
    } else {
        //  carrito.push({
        //      id: prod.id,
        //      img: product.img,
        //      nombre: product.nombre,
        //      precio: product.precio,
        //      cantidad: product.cantidad,
        //  })
         
        // let prodEncontrado = misProductos.find(item => item.id === parseInt(id));
        //  carrito.push(prodEncontrado)
        carrito.push(producto)
        
        
   
    }

    botonAgregarAlCarrito()


   
}


//carrito img
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



        // const cruzButton2 = document.createElement("button");

        // cruzButton2.innerHTML = "X";


        // cajaComprasHeader.classList.add = ("cruzButton2");
        // cruzButton2.addEventListener("click", ()=>{
        //     miCarrito.classList.remove = ("cruzButton2");

        // })

        carrito.find((prod)=>{
            let carritoconcontenido = document.createElement("div");
            carritoconcontenido.className = "cajaComprasContenido";
            carritoconcontenido.innerHTML = `
            <img src="${prod.img}">
            <h2>Nombre: ${prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad: ${prod.cantidad}</p>
            
            
            ` ;

            miCarrito.append(carritoconcontenido);
            let eliminar = document.createElement("button");
            eliminar.innerText = "X"
            eliminar.className = "eliminar-producto"
            carritoconcontenido.append(eliminar);
           
            
            
            eliminar.addEventListener("click",eliminarItem)
            })


        
           
    })
}

function eliminarItem(prodId){
    
    const buscarId = carrito.find((unelemento) => unelemento.id);
     carrito = carrito.filter((carritoId)=> {
        return carritoId !== buscarId;
     })
     botonAgregarAlCarrito()
           
                
            
}

function totalPrecioCarrito(){
    botonAgregarAlCarrito()
    let totaldelcarrito = carrito.reduce((acumulador, product)=>acumulador + product.precio, 0 )
    totaldelcarrito.className = "todos-productos-elegidos"
    totaldelcarrito.innerHTML = `El total a pagar es de: ${totaldelcarrito}`;
    miCarrito.append(totaldelcarrito);
    }





