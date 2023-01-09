let nombre = "gesler"

// this  hace referencia desde el contexto  global 
const nomrbe = "kaneki ku"
function saludar(){
    console.log(this.nombre)
}

saludar.call()