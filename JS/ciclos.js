// let n = 8;
// let contador = 1;
// while (contador <= n) {
//     console.log(contador);
//     contador++
// }
// do {
//     console.log("?");
    
// } while (false);


// let numero = 40;
// for (let i = 1; i <= numero ; i++) {
//     let cont = 0;
//     for (let x = 1; x <= i; x++) {
//         if (i % x === 0) 
//         {
//             cont++;
//         }
//     }
//     if (cont === 2) 
//     {
//         console.log(`El ${i} es primo`);
//     }
// }

// let numero = parseFloat(prompt("Ingrese el numero a evaluar:"));
// const esPrimo = a =>{
//     try {
//         if (a < 0) {
//             throw new Error("El numero que ingreso no pertenece a los numeros naturales");            
//         }
//         let primo = true;
//         if (a === 1) return false;
//         for (let i = 2; i <= a / 2 ; i++) {
//             if (a % i === 0) primo = false;
//         }
//         return primo;
//     } catch (error) {
//         console.log(error);
//     }
// }

// const llenado = function (numero) {
//     let contador = 1;
//     let arreglo = [];
//     let cantidad_primo = 0; 
//     while (contador <= numero) {
//         if (esPrimo(contador)) {
//             arreglo.push(contador);
//             cantidad_primo++;
//         }
//         contador++;
//     }
//     console.log(arreglo); 
// }
// llenado(numero);

// for (let i = 0; i < 10; i++) {
//     if (i === 4) continue;
//     console.log(`Item ${i}`);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 4) break;
//     console.log(`Item ${i}`);
// }

// const numeros = [1,2,3,4,85];
// let [a, b, c, d, e = 25]= numeros;

// console.log(a, b, c, d, e);

const persona = {
    nombre : "Dylan Slebyng",
    apellido : 'Bravo Becerra',
    edad : 17,
    username : 'makembo_2'
};

let {nombre:nombre2,apellido:last_name, edad:age, username = 'Makembo'} = persona;
console.log(nombre2,last_name,age, username);
