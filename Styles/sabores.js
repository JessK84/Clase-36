// const cantidadGustos = Number(prompt("¿Cuántos gustos desea?"));
// let gustos = "";


// for (let i = cantidadGustos; i > 0; i--) {
//     const gusto = prompt(`Ingrese un gusto, le quedan ${i} gustos`);
//     gustos += gusto + `\n`;
// }
// alert(gustos)



const cantidadGustos = Number(prompt("¿Cuántos gustos desea?"));
let gustos = "";


for (let i = 0; i < cantidadGustos; i++) {
    const gusto = prompt(`Ingrese un gusto, le quedan ${cantidadGustos-i} gustos`);
    gustos += gusto + `\n`;
}
alert(gustos)