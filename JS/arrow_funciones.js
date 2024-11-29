// funciones flechas
// const jeferson = (nombre) => {
//     console.log(nombre);
// }
// console.log(jeferson);

// anonima();
// const anonima = (...a) =>{
//     console.log(a);    
// }

// function anonima() {
//     console.log(anonima);
// }


// const saray = {
//     nombre: 'saray',
//     apellido: 'Estupiñan',
//     edad: 20
// }
// const kevin = {
//     nombre: 'kevin',
//     apellido: 'Paez',
//     edad: 20
// }
// console.log(Object.keys(saray));

class Persona {
    constructor(nombreA, apellidoA, edadA){
        this.nombre = nombreA;
        this.apellido = apellidoA;
        this.edad = edadA;
    }
    // Metodos
    comer (){
        console.log(`${this.nombre} esta comiendo empanada`);
    }
}

const saray = new Persona('Saray', 'Estupiñan',20);
const kevin = new Persona('Kevin', 'Paez',19);
console.log(saray.comer());
console.log(kevin.comer());