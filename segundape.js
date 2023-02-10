alert("Hola! Bienvenidx a mi 2da pre-entrega!");

function mostrarMensaje() {
    let mensaje = prompt("Escriba el mensaje que desee ver en consola");
    console.log(mensaje);
};

mostrarMensaje();

alert("Perfecto! Ahora tu mensaje aparece en la consola.");


function suma() {
    let numero1 = parseInt(prompt("Escriba un número:"));
    let numero2 = parseInt(prompt("Escriba otro número:"));
    let resultado = numero1 + numero2;
    alert("Su resultado es: " + resultado);
};

function resta() {
    let numero1 = parseInt(prompt("Escriba un número:"));
    let numero2 = parseInt(prompt("Escriba otro número:"));
    resultado = numero1 - numero2;
    alert("Su resultado es: " + resultado);
};

function multiplicar() {
    let numero1 = parseInt(prompt("Escriba un número:"));
    let numero2 = parseInt(prompt("Escriba otro número:"));
    resultado = numero1 * numero2;
    alert("Su resultado es: " + resultado);
};

function dividir() {
    let numero1 = parseInt(prompt("Escriba un número:"));
    let numero2 = parseInt(prompt("Escriba otro número:"));
    resultado = numero1 / numero2;
    alert("Su resultado es: " + resultado);
};

alert("Bien, ahora probemos diferentes operaciones");
alert("A continuación elija la operación que desee realizar");

let operacionMatematica = parseInt(prompt("1 para sumar / 2 para restar / 3 para multiplicar / 4 para dividir"));

if (operacionMatematica == 1) {
    suma();
} else if (operacionMatematica == 2) {
    resta();
} else if (operacionMatematica == 3) {
    multiplicar();
} else if (operacionMatematica == 4) {
    dividir();
} else {
    alert("Usted no seleccionó un número correcto.");
};

alert("Ahora vamos a crear un objeto mascota");

let tipoDeAnimal = prompt("Elijamos el tipo de animal");
let raza = prompt("Elije la raza de tu mascota");
let sexo = prompt("Defina el sexo de tu mascota");

function Mascota(tipoDeAnimal, raza, sexo) {
    this.tipoDeAnimal = tipoDeAnimal;
    this.raza = raza;
    this.sexo = sexo;
}

const mascota = new Mascota(tipoDeAnimal, raza, sexo);

alert("Bien, ahora tu nuevo objeto mascota lo podrás ver en la consola.");

console.log(mascota);

let arrayCajaDeLapices = [];

alert("Okey ahora vamos a crear tu caja de lápices ideal, a continuación elija los colores que quiera tener");
let cantidadDeLapices = parseInt(prompt("Elija cuantos lápices quiere en su caja"));

for (let i = 0; i < cantidadDeLapices; i++) {
    let lapiz = prompt("Elija el color de su lapiz");
    arrayCajaDeLapices .push(lapiz);
}

alert("Perfecto, tu caja ahora se encuentra en la consola :D");
console.log(arrayCajaDeLapices);

alert("Ahora vamos a buscar un lápiz entre los que tienes en tu caja");

let busquedaDeLapiz = prompt("Elije el lápiz que deseas buscar");
let lapizBuscado = arrayCajaDeLapices.find(lapiz=>lapiz==busquedaDeLapiz);

alert("En la consola te saldrá el lápiz que buscaste")

console.log("¡Bien! Encontraste el lápiz de color " + lapizBuscado);

alert("Perfecto, ahora elijamos uno de ellos para estrenar!");

let filtradoDeLapiz = prompt("Elije el lápiz que deseas estrenar");
let cajaFiltrada = arrayCajaDeLapices.filter(lapiz=>lapiz!==filtradoDeLapiz);

alert("En la consola podrás ver los lápices que quedaron dentro de tu caja.");
console.log(cajaFiltrada);

alert("¡Hasta la próxima!");