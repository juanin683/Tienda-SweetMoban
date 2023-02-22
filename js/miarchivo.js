let nombre;

do{
    nombre= prompt("Ingrese metodo de pago");
    console.log(nombre);
}while(nombre);



let user = Number(prompt('Bienvenido! Selecciona el descuento (25%,50%,60% o 75%)'));
let totalapagar = 0;
let precio = 0;
let descuento1 = 25;
let descuento2 = 50;
let descuento3 = 60;
let descuento4 = 75;

function agregarpreciocarrito(precio){
    return totalapagar += precio;
}

totalapagar = agregarpreciocarrito(3500);
totalapagar = agregarpreciocarrito(3000);
totalapagar = agregarpreciocarrito(2800);
totalapagar = agregarpreciocarrito(2500);

let calcularDescuentos = function(){
if(user==descuento1){
    totalapagar = totalapagar - (100*0.25);
    console.log("Precio final con descuento es de: " + totalapagar);
    
} else if (user == descuento2 ){
    totalapagar = totalapagar - (100*0.50);
    console.log("Precio final con descuento es de: " + totalapagar);
    
} else if (user == descuento3 ){
    totalapagar = totalapagar - (100*0.60);
    console.log("Precio final con descuento es de: " + totalapagar);
} else if (user == descuento4 ){
totalapagar = totalapagar - (100*0.75);
console.log("Precio final con descuento es de: " + totalapagar);

} else {
    alert("Por favor selecciona una opcion")
};

}
calcularDescuentos();












