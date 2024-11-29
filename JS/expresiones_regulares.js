let palabra = "Lorem ípsum dolor si2t amet, culpa adipisicing 9 elit. Reprehenderit quis maiores porro, aperiam quia a error quod? Atque itaque, quis ex fugiat totam esse eligendi pariatur? Voluptatibus quidem aliquid asperiores cumque autem numquam error officiis dicta laboriosam, mollitia cum nam!";
palabra = "1234    vaca";

// let regex = /[A-Z]/g;
let regex = /^([0-9]{2,6}).+([a-z]{4,6})$/g;

console.log(regex.test(palabra));
// console.log(regex.exec(palabra));
console.log(palabra.match(regex));

// function buscar(regex,palabra) {
//     if (palabra.includes(regex)) {
//         return true
//     }
//     else return false
// }
