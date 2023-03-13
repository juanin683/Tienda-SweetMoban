const misProductos = [
    {
        nombre: "vestido floreado" , 
        precio: 3000,
        img: "../assets/img/graphic-woman-dress-trendy-design-on-white-background (1).jpg",

    },
    {nombre: "conjunto blazer y pantalon naranja" , precio: 3000},
    {nombre: "vestido rojo oscuro" , precio: 3500},
    {nombre: "top purpura" , precio: 2500},
    {nombre: "remera musculosa" , precio: 2800},
    {nombre: "remera con diseño mano esqueletica" , precio: 2800},
    
];

const carrito = [];

misProductos.map((cadaProducto) =>{
 console.log(misProductos.nombre +  misProductos.precio);
    
   
   
    // const contenido = document.createElement("div")
    // contenido.innerHTML = `
    // <img src="${cadaProducto.img}">
    // <p>${cadaProducto.nombre}</p>
    // <p>${cadaProducto.precio}</p>
    // ` ;


})

const botonAgregoCarrito = document.getElementById("botonAgregarAlCarrito")
const miCarrito = document.querySelector('carrito-compras');
const Container = document.getElementById("modalContainer")

botonAgregoCarrito.addEventListener("click", () =>{
    carrito.push({
        nombre: misProductos.nombre,
        precio: misProductos.precio,
    });
    alert(carrito);
});



function cajaconproductos(cajaconproductos){
    
    const cajaComprasHeader = document.createElement("div")
    cajaComprasHeader.className = "caja-compras-header"
    cajaComprasHeader.innerHTML = `
    <h1 class="caja-vistaprevia-header">Mi Carrito</h1>
    `;
    Container.append(cajaComprasHeader);

    const modalButton = document.createElement("p");
    modalButton.innerHTML = "x";
    modalButton.className = "boton-vistaprevia-header";

    cajaComprasHeader.append(modalButton);

    carrito.forEach((cadaProducto) =>{
        let carritoconcontenido = document.createElement("div");
        carrito.className = "cajaComprasContenido";
        carrito.innerHTML = `
        <img src="${cadaProducto.img}">
        <p>${cadaProducto.nombre}</p>
        <p>${cadaProducto.precio}</p>
        ` 
    
    })
}

miCarrito.addEventListener("click", cajaconproductos);

// let eleccion = prompt("Hola desea comprar? (Elegir si/no)");
// console.log(misProductos)


// let descuento1 = 50;
// let descuento2 = 60;
// let descuento3 = 75;


// while(eleccion != "si" && eleccion !="no" ){
//     alert("Por favor ingresa una opcion");
//     eleccion = prompt("Hola desea comprar? (Elegir si/no)");
// }


// if (eleccion =="si") {
//     alert("Esta es la lista de productos nuevos: ")
    
//     let ropasweetmoban = misProductos.map((misProductos) => misProductos.nombre  + "   " + " $ "+  misProductos.precio);
//     alert(ropasweetmoban)
    
    
// } else if (eleccion == "no"){
//     alert("Gracias. Vuelva pronto.");
// }

// while(eleccion == "si"){
//     let misProductos= prompt("Que producto desea comprar?");
//     let precio = 0;
    

//     if (misProductos == "vestido floreado" || misProductos == "conjunto blazer y pantalon naranja" || misProductos == "vestido rojo oscuro" || misProductos == "top purpura" 
//         || misProductos == "remera musculosa" ||misProductos == "remera con diseño mano esqueletica") {
        
        
//         switch(misProductos){
//             case "vestido floreado":
//             precio = 3000;
//             descuento1 = 50;
//             break;

//             case "conjunto blazer y pantalon naranja":
//             precio = 3000
//             descuento2 = 60;
//             break;

//             case "vestido rojo oscuro":
//             precio = 3500
//             descuento3 = 75
//             break;

//             case "top purpura":
//             precio = 2500
//             descuento2 = 60
//             break;

//             case "remera musculosa":
//             precio = 3500
//             descuento3 = 75
//             break;

//             case "remera con diseño mano esqueletica":
//             precio = 3500
//             descuento3 = 50
//             break;
//             default:
//             break;
//         }
    
    
//     let cantidad = parseInt(prompt("Escriba la cantidad"));

//     carrito.push({misProductos,cantidad,precio,descuento1,descuento2,descuento3});
//     console.log(carrito);
    
//     } else{
//         alert("Aun no tenemos disponible ese stock! ")
//     }

//     eleccion = prompt("Desea seguir comprando?");

//     while(eleccion === "no"){

//         eleccion = prompt("Con que metodo de pago compra?");
//         if (eleccion == "efectivo") {
//             alert("Usted pagara con efectivo")
//         } else if (eleccion == "tarjeta de credito"){
//             alert("Usted pagara con tarjeta de credito")
//         } else {
//         alert("Por favor ingresa una opcion");
//         eleccion = prompt("Con que metodo de pago compra?");
//         }


//         alert("Estamos procesando tu compra, un momento...")
//         alert("Listo!")


//         if (misProductos == "vestido floreado") {
//             carrito.forEach((carritoconproductos) => {
//             alert(` Producto:  ${carritoconproductos.misProductos} 
//             Cantidad:  ${carritoconproductos.cantidad}
//             Precio: ${carritoconproductos.precio}
//             Total a pagar por producto con descuento: ${carritoconproductos.precio * carritoconproductos.cantidad - descuento1}`)
//             })
//         break;
//         } else if (misProductos == 'conjunto blazer y pantalon naranja'){
//         carrito.forEach((carritoconproductos2) => {
//             alert(` Producto:  ${carritoconproductos2.misProductos} 
//             Cantidad:  ${carritoconproductos2.cantidad}
//             Precio: ${carritoconproductos2.precio}
//             Total a pagar por producto con descuento: ${(carritoconproductos2.precio * carritoconproductos2.cantidad)- descuento2}`)
//         })
//         break;
//         } else if (misProductos == 'vestido rojo oscuro'){
//             carrito.forEach((carritoconproductos3) => {
//             alert(` Producto:  ${carritoconproductos3.misProductos} 
//             Cantidad:  ${carritoconproductos3.cantidad}
//             Precio: ${carritoconproductos3.precio}
//             Total a pagar por producto con descuento: ${(carritoconproductos3.precio * carritoconproductos3.cantidad)- descuento3}`)
//         })
//         break;
//         }else if (misProductos == 'top purpura'){
//             carrito.forEach((carritoconproductos4) => {
//             alert(` Producto:  ${carritoconproductos4.misProductos} 
//             Cantidad:  ${carritoconproductos4.cantidad}
//             Precio: ${carritoconproductos4.precio}
//             Total a pagar por producto con descuento: ${(carritoconproductos4.precio * carritoconproductos4.cantidad)- descuento2}`)
//         })
//         break;
//         }else if (misProductos == 'remera musculosa'){
//             carrito.forEach((carritoconproductos5) => {
//             alert(` Producto:  ${carritoconproductos5.misProductos} 
//             Cantidad:  ${carritoconproductos5.cantidad}
//             Precio: ${carritoconproductos5.precio}
//             Total a pagar por producto con descuento: ${(carritoconproductos5.precio * carritoconproductos5.cantidad)- descuento3}`)
//         })
//         break;
//         }else if (misProductos == 'remera con diseño mano esqueletica'){
//             carrito.forEach((carritoconproductos6) => {
//             alert(` Producto:  ${carritoconproductos6.misProductos} 
//             Cantidad:  ${carritoconproductos6.cantidad}
//             Precio: ${carritoconproductos6.precio}
//             Total a pagar por producto con descuento: ${(carritoconproductos6.precio * carritoconproductos6.cantidad)- descuento1}`)
//         })
//         break;
//         }
        
// };

// }















