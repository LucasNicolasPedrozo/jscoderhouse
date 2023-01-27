const espacio = " ";

alert("¡Hola! Bienvenidx a mi primera Pre-entrega :D");

let nombreCompleto = prompt("Ingrese su nombre y apellido:");
let edad = prompt("Ingrese su edad");
let nacionalidad = prompt("Ingrese su nacionalidad");

while ((nombreCompleto == "") || (edad == "") || (nacionalidad == "")) {
    alert("Por favor ingrese sus datos correctamente");
    nombreCompleto = prompt("Ingrese su nombre y apellido:");
    edad = prompt("Ingrese su edad");
    nacionalidad = prompt("Ingrese su nacionalidad");
}

alert("¡Muy bien! Si te fijas ahora en la consola tus datos están ahí");


console.log("Estos son tus datos ingresados");
console.log("Nombre completo:", nombreCompleto);
console.log("Edad:", edad, "años");
console.log("Nacionalidad:", nacionalidad);

let edadSumada = parseInt(edad) + 10;

alert("Bien" + espacio + nombreCompleto + "," + espacio + "supongamos que ahora viajamos al 2033...");
alert("Tu edad entonces sería de: " + edadSumada + espacio + "años.");

alert("Okey, ahora supongamos que te regalo unas vacaciones con destino a elegir entre República Dominicana o Alaska. ¿Cuál eligirías?");

let destino = parseInt(prompt("Ingrese 1 para República Dominicana o 2 para Alaska"));

while (!(destino == 1 || destino == 2)) {
    alert("Ingrese un número entre 1 y 2 para elegir su destino");
    destino = parseInt(prompt("Ingrese 1 para República Dominicana o 2 para Alaska"));
}

if (destino == 1) {
    alert("Al parecer te gusta más el calor y la playa ¡Genial!");
} else if (destino == 2) {
    alert("Al parecer te gusta más el frío y la nieve ¡Genial!");
}

alert("Say no more dijo Charly!");
