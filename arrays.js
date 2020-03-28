var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]

console.log(frutas)

// Obten longitud de array
console.log(frutas.length)

// obten x elemento
console.log(frutas[1])

// agrega un elemento al final
var masFrutas = frutas.push("Uvas")
frutas

// eliminar ultimo elemento
var ultimo = frutas.pop("Uvas")
frutas

// agregar elemento al inicio
var nuevaLongitud = frutas.unshift("Uvas")
frutas

//  eliminar primer elemento
var borrarFruta = frutas.shift("Uvas")

// encontrar posicion de elemento x
var posicion = frutas.indexOf("Cereza")
posicion