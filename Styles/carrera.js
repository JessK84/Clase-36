// running_woman Carrera

// Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:
// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s


let cantidadVueltas = Number(prompt("¿Cuántas vueltas va a realizar?"));
let tiempo = "";
let vueltas ="";
let resultado="";
let tiempos="";
let promedio ="";


for (let i=0; i< cantidadVueltas; i ++){
    tiempo = Number(prompt(`¿En cuántos segundos recorrió la vuelta?`)); 
    resultado +=(` \nVuelta N° ${i +1}: ${tiempo}s.`);
    tiempos += tiempo;
    promedio = tiempos / cantidadVueltas; // Ver cómo calcular los promedios
   

}


alert(`Cantidad de vueltas: ${cantidadVueltas}` + resultado + `\nPromedio: ${promedio}s `)
