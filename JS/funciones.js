//------------ funcion declaradas ------------

//function nombre(parametro = 300) { //funcion nombre() que tiene por defecto el valor de 300
//     return parametro
// }
// console.clear();

//------------ funcion expresada ------------

// const esPrimo = function (numero) {
//     let contador = 0;
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             contador++;
//         }
//     }
//         contador === 2 ? console.log("El numero es primo") : console.log("El numero no es primo");
//     if (contador === 2) {
//         return true;
//     }else{
//         return false;
//     }
// }

// let numero = parseInt(prompt("Ingrese el numero a evaluar"));
// let respuesta = esPrimo(numero);
// console.log(respuesta);

// if (respuesta) {
//     console.log("Es primo");
    
// }else{
//     console.log("No es primo");    
// }
// let nueva = respuesta ? "si":"no";
// alert(nueva);

// const anonima = function (valor) {
//     console.log(valor);    
// }
// let respuesta = anonima(25);
// console.log(respuesta);

// const generadora = function* nombre(a, b) {
//     yield 1;
//     yield 2;
// }

// console.log(generadora.next());

//------------ funcion anonima ------------

// let parametro = "";
// (function () {
//     alert("si llamarme")
// })() // este ultimo parentesis se encarga de ejecutar el codigo

//------------ funcion flecha gorda ------------

const flecha = (a,b) => (a > 20) ? a * b : b;

let respuesta = flecha(40,5);

console.log(respuesta);
