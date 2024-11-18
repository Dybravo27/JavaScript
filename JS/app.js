var numero = 151521; // variable global que se puede re asignar
let nombre = "Dylan";
let apellido = "Bravo"; // let no se puede redeclarar dentro de un bloque
console.log(nombre.length);// cuenta los caracteres que tiene nombre
console.log(nombre[0]);
console.log(nombre + " " + apellido);
let nCompleto = nombre + " " + apellido;
console.log(nCompleto.toUpperCase());
console.log(nCompleto.includes("Josue")); // revisa si hay un valor que corresponda a ese nombre
console.log(nCompleto.split(" ")); //  trae un arreglo (Array)
console.clear();// la consola se limpia

let item1 = "Item1";
let item2 = "Item2";
let item3 = "Item3";
let item4 = "Item4";
let item5 = "Item5";

// interpolar
let lista = `<ul>
    <li>${item1}</li> 
    <li>${item2}</li>
    <li>${item3}</li>
    <li>${item4}</li>
    <li>${item5}</li>
</ul>`;
console.log(lista);
console.clear();

let entrada = prompt("Ingrese un numero");// para ingresar datos
let uno = 1;
let dos = new Number(2);
let tres = "3.5";
console.log(dos);
let flotante = 7.1542;
console.log(flotante);
console.log(flotante.toFixed(1)); // aproxima el numero con toFixed y el 1 para que muestre un numero despues del punto

let nuevo = parseFloat(tres);
if (typeof tres === "number"){
    console.log(tres * nuevo);    
}else {
    console.log("NO");
    
}
console.log(typeof entrada);

console.log(typeof tres === "number");

let respuesta = confirm("Desean salir a comer"); // confirm muestra una ventana que que bota dos opciones de aceptar o cancelar 

alert(respuesta);
console.clear();