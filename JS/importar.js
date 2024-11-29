import { esPrimo,llenado } from "./exportar.js";


let numero = parseInt(prompt('Ingrese el numero a evaluar'));

let respuesta = esPrimo(numero)
let respuestallenado = llenado(numero);
alert (respuesta);
alert (respuestallenado);
