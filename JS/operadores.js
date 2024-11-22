// let a = 25;
// let b = 2;
// let c = 7;
// let resultado = a + (b + (b - a) * a) /c;
// 25 +(2 + (- 23) * 25) / 7

// console.log(resultado);

// console.log(typeof a);
// console.log(typeof b);

// if (typeof a === 'number' && typeof b === 'number') {
//     console.log(a % b);
// }
// else{
//     console.log('uno de los dos no es numero');
// }

// ---------------------- operadores logicos ----------------------

/**
 * (<) menor que
 * (>) mayor que
 * (<=) menor igual
 * (>=) mayor igual
 * (==) igual
 * (===) valor y tipo de dato
 * (!=) negacion
 */
// let a = 10;
// let b = '10';
// console.log(a < b);
// console.log(a > b);
// console.log(a !== b);

// let i = 0;
// console.log(i++); incremento unario
// console.log(i);
// console.log(i++);
// console.log(i);

// let i = 0;
// console.log(i = + 4);

// console.log(!false && !true);

// if (!false && true){
//     console.log('?');
// }
// else{
//     console.log('??');
// }

let respuesta = (true) ? 'verdadero': 'falso';
console.log(respuesta);

let dia = 10;

switch (dia) {
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        alert("Error no existe ese dia ");
        break;
}