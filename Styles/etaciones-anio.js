// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

let estacion =prompt("Ingrese una estación de año y te diré cuando comienza");

switch (estacion) {
    case "verano":
        alert("Comienza el 21 de diciembre y termina el 20 de maro")
        break;
    case "otoño":
        alert("Comienza el 21 de marzo y termina el 20 de junio")
        break;
    case "invierno":
        alert("Comienza el 21 de junio y termina el 20 de septiembre")
        break;
    case "primavera":
        alert("Comienza el 21 de septiembre y termina el 20 de diciembre")
        break;
    default:
        alert("El valor ingresado es incorrecto")
}
