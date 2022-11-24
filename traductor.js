function traductor() {
let frase = prompt("Ingresá tu frase");
let stringTraducidoA = frase.replaceAll('a', 'i');
let stringTraducidoE = stringTraducidoA.replaceAll('e', 'i');
let stringTraducidoI = stringTraducidoE.replaceAll('i', 'i');
let stringTraducidoO = stringTraducidoI.replaceAll('o', 'i');
let stringTraducidoU = stringTraducidoO.replaceAll('u', 'i');
alert ('TI TRIDICCIN IS: \n' + stringTraducidoU);
// return stringTraducidoU
}

