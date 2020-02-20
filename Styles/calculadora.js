// CALCULADORACrear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella. Si se ingresa una opción incorrecta debe mostrar un mensaje de error.


const operacion = prompt("Elija alguna de las siguientes operaciones: suma, resta, multiplcación o división");
let resultado ="";

switch (operacion) {
    case "suma":
        numero1 = Number(prompt("Elija el primer número"));
        numero2 = Number(prompt("Elija el segundo número"));
        resultado = numero1 + numero2;
        alert(`El resultado es ${resultado}`);
        break;
    case "resta":
        numero1 = Number(prompt("Elija el primer número"));
        numero2 = Number(prompt("Elija el segundo número"));
        resultado = numero1 - numero2;
        alert(`El resultado es ${resultado}`);
        break
    case "multiplicacion":
        numero1 = Number(prompt("Elija el primer número"));
        numero2 = Number(prompt("Elija el segundo número"));
        resultado = numero1 * numero2;
        alert(`El resultado es ${resultado}`);
        break;
    case "division":
        numero1 = Number(prompt("Elija el primer número"));
        numero2 = Number(prompt("Elija el segundo número"));
        resultado = numero1 / numero2;
        alert(`El resultado es ${resultado}`);
        break;
        default:  
        alert("Ingrese una operación válida")
}   