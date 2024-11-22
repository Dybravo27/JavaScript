//------------ ARREGLOS (ARRAYS) ------------
// console.log(typeof a);
// console.log(a);
// console.log(a.length);
// console.log(a.length - 1);
// console.log(a[a.length - 1]);
// const a = [5, 'letras',true,false,[2,'Fredy']];
// a.push('Dylan');
// console.log(a[4][1]);

const persona = {
    nombre: 'Dylan',
    apellido: 'Bravo',
    edad: 17,
    saludar: function() {
        return `Hola soy ${this.nombre} ${this.apellido} `;
    }
}
console.log(persona.saludar());

persona.pais = 'Colombia';
persona.genero = 'Hombre';
persona.despedir = function () {
    return `Chao se despide ${this.nombre} y soy de ${this.pais}`
}

// console.log(persona.saludar());
// console.log(persona.despedir());
// console.log(Object.keys(persona).indexOf("genero"));
if (Object.keys(persona).indexOf("genero") === -1) {
    console.log('el atributo no fue definido');   
}

console.log(Object.keys(persona).includes('pais')); // busca la variable con el metodo include 
//botando true si esta creada y false si no existe
