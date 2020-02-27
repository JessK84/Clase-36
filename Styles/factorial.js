// exclamation Factorial

// Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24

let numero = Number(prompt("Ingrese un número y te diré su factorial"));
let resultado = 1;

for (let i =numero; i > 0; i --) {
    resultado *=i;    
}
alert(resultado)