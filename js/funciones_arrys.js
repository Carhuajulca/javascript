// METODOS INTEGRADAS EN ARRAYS
const colores = ['rojo', 'verder', 'azul', 'amarillo']
console.log(colores)

// Agregando colores con psuh
const colores2 = ['negro', 'celeste', 'plomo'] 

// Metodo push
// colores.push(colores2)
// console.log(colores)

// Método splice
const color = 'anaranjado'
colores.splice(1,0, color)
console.log(colores)

// Traendo elementos el método slice
console.log(colores.slice(1, 3))