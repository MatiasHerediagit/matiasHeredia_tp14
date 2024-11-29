//4.a)
const productos = ["Cocina", "Secarropas", "Microondas", "Licuadora", "Cafetera", "Aspiradora"];//array con los 6 electrodomesticos.
console.log("Primer producto:", productos[0]); 
console.log("Tercer producto:", productos[2]); 
console.log("Último producto:", productos[productos.length - 1]); //uso lenght -1 para acceder al ultimo elemento de la fila sin importar de cuantos elementos sea.
//4.b)
const primerProducto = productos.shift(); //Saco el primer producto y lo guardo en la variable
productos.push(primerProducto); // Pongo el primer producto al final de la lista
console.log("El array luego de mover el primer elemento al final de la lista de productos quedaría de la siguiente manera:", productos.join(", "));
//4.c)
productos.push("Plancha", "Freidora"); //Agrego dos nuevos electrodomesticos
console.log("El array luego de agregar dos nuevos productos queda de la siguiente manera: ", productos.join(", "));
//4.d)
console.log("Cantidad de elementos en el array:", productos.length); //La consola va a mostrar la cantidad de elementos que hay en el array
//4.e)
const busquedaProducto = "Cafetera"; 
if (productos.includes(busquedaProducto)) { // Uso la herramienta includes para verificar si el producto buscado, en este caso cafetera, esta dentro de la lista
    console.log("Producto encontrado:", busquedaProducto);
} else {
    console.log("El producto buscado no existe");
}
//4.f)
let stringProductos = productos.join(" "); //Unifico todos los productos en un string
console.log("Cadena de texto unificada:", stringProductos); 
//4.g)
const cantidadPalabras = stringProductos.split(" ").length; // Uso split para dividir el string en palabras y lenght para contar la cantidad de palabras
console.log("La cantidad de elementos en la cadena de texto es: ", cantidadPalabras);
//4.h)
const productoOriginal = "Microondas";
const productoNuevo = "Freidora"; 
stringProductos = stringProductos.replace(productoOriginal, productoNuevo); //Uso replace para poder cambiar un electrodomestico por otro
console.log(`El producto ${productoOriginal} fue cambiado por: ${productoNuevo}`);
//4.i)
const nuevoArray = stringProductos.split(" ");
console.log("El array final con cada una de las palabras de texto quedaria de la siguiente manera:", nuevoArray.join(", ")); 