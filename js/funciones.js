function saludar(name){
    console.log("Hola me llamo " + name);
}

// saludar('Roberto');
// saludar('Gesler');
// saludar();


function saludo(){
    console.log("hola mundo")
}

// saludo();

const despedir = function (){
    console.log("Adios amigo");
}

// despedir()

// Parametros rest

function sumar(...numbers){
    const suma = numbers.reduce((acc, curr) => acc + curr )
    console.log(suma)
}

// sumar(1, 12, 16, 20,  56)

// COLLBACKA

function saludar( nombre){
    console.log("hola mundo " + nombre)
}

function obtenerNombre(fn){
    const nombre = "gesler";
    fn(nombre)
}

// obtenerNombre(saludar("Gesler"))

// COLLBACK

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

function cuadrado(number) {
    return number * 2;
}

const doble = nums.map(cuadrado);

console.log(doble);


// COLLBACKA