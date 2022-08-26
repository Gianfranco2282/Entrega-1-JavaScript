debugger

let condicion = true 
let numero = parseInt(prompt("Por favor ingrese un numero:"))
let factor = 2

while(condicion) {
    console.log("Resultado", numero * factor)
    seguimos = confirm("Continuamos?")
    if (seguimos) {
        factor ++
    }
}