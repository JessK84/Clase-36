
// // Crear un programa que simule una apuesta de ruleta. El programa debe mostrar las opciones posibles para apostar y preguntar qué se desea elegir:
// ROJO: gana si el número es rojo
// NEGRO: gana si el número es negro
// PAR: gana si número es par
// IMPAR: gana si el número es impar
// ALTA: gana si el número es menor o igual a 18
// BAJA: gana si el número es mayor a 18
// PRIMERA DOCENA: gana si el número está incluido en la primera docena (del 1 al 12)
// SEGUNDA DOCENA: gana si el número está incluido en la segunda docena (del 13 al 24)
// TERCERA DOCENA: gana si el número está incluido en la tercera docena (del 25 al 36)
// Una vez elegida la opción, el programa debe generar aleatoriamente un número entre 1 y 36, de color negro o rojo. Mostrar un mensaje con el número que salió y si se ganó o no la apuesta.

let ruleta = Math.round(Math.random() * 36);
const colores=["rojo", "negro"]
let color = colores[Math.round(Math.random() * (colores.length -1))];

let comenzarJuego = prompt
(`Elija algunas de las opciones
1- ROJO
2- NEGRO
3- PAR
4- IMPAR
5- ALTA 
6- BAJA
7- PRIMERA DOCENA
8- SEGUNDA DOCENA
9- TERCERA DOCENA`)

let juego="";

switch(comenzarJuego) {
    case "1":
        if (color === "rojo"){
            alert(`Ganaste, tu número ${ruleta} es de color ${color}`)
        } else {
            alert(`Perdiste: tu número ${ruleta} es de color ${color}`)
        }
        break;

    case "2":
        if (color === "negro"){
            alert(`Ganaste, tu número ${ruleta} es de color ${color}`)
        } else {
            alert(`Perdiste: tu número ${ruleta} es de color ${color}`)
        }
        break;

    case "3":
        if (ruleta % 2 === 0){
            alert(`Ganaste, tu número ${ruleta} es de color ${color}`)
        } else {
            alert(`Perdiste: tu número ${ruleta} es de color ${color}`)
        }
        break;

    case "4":
        if (ruleta % 2 === 1){
            alert(`Ganaste, tu número ${ruleta} es de color ${color}`)
        } else {
            alert(`Perdiste: tu número ${ruleta} es de color ${color}`)
        }
        break;

    case "5":
        if (ruleta >= 18 ){
            alert(`Ganaste, tu número ${ruleta} es mayor a 18`)
        } else {
            alert(`Perdiste: tu número ${ruleta} es menor a 18`)
        }
        break;     

    case "6":
        if (ruleta <= 18 ){
            alert(`Ganaste, tu número ${ruleta} es menor a 18`)
        } else {
            alert(`Perdiste, tu número ${ruleta} es mayor a 18`)
        }
        break;   

    case "7":
        if (ruleta <= 12 ){
            alert(`Ganaste, tu número ${ruleta} está dentro del rango: "0 - 12"`)
        } else {
            alert(`Perdiste: tu número ${ruleta} no está dentro del rango: "0 - 12"`)
        }
        break;   
    
    case "8":
        if (ruleta > 12 && ruleta <=24 ){
            alert(`Ganaste, tu número ${ruleta} está dentro del rango: "12 - 24"`)
        } else {
            alert(`Perdiste: tu número ${ruleta} no está dentro del rango: "12 - 24"`)
        }
        break;

    case "9":
        if (ruleta >= 25 ){
            alert(`Ganaste, tu número ${ruleta} es mayor a 25`)
        } else {
            alert(`Perdiste: tu número ${ruleta} es menor a 25`)
        }
        break; 
        default:
}

