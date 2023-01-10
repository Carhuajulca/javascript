// Aprendeindo array 
const meses = [];
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'vierner', 'sabado', 'domingo'];
console.log(dias);
console.log(dias[2]);// Accediendo a los elementos de un array por su indice
console.log(dias[dias.length -1]);// Accediendo al ultimo elemento del array
console.log(dias.length)

// NOTA: No puede ver dos arrays iguales 

const nombres = [['Gesler', 29], 
                ['Anthony', 24],
                ['Omar', 30], 
                ['Dani', 18, ['celular', 7673746]]]; 
            
console.log(nombres[3][2][1])// Accediendo arrays anidados  

const alumno = nombres[1]
const estudiante = alumno[0]
const edad = alumno[1]
console.log('El alumno es: ' + estudiante+ ' ' + 'y su edad es ' + edad + ' años')