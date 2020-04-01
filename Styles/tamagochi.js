// Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
// ALIMENTAR: +3 energía, +2 felicidad
// JUGAR: +2 felicidad, -2 energía, -1 limpieza
// DORMIR: +5 energía, +2 salud, -2 limpieza
// VACUNAR: +5 salud, -6 felicidad
// BAÑAR: +3 salud
// RETAR: -3 felicidad
// ACARICIAR: +4 felicidad
// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.

let saludTamagochi = Math.round(Math.random() * 10);
let felicidadTamagochi = Math.round(Math.random() * 10);
let limpiezaTamagochi = Math.round(Math.random() * 10);
let energíaTamagochi = Math.round(Math.random() * 10);

const sentimientosTamagochi =["salud", "felicidad", "limpieza", "energía"]

let saludoTamagochi =prompt
(`Hola soy Nelson, tu asistente virtual.
Tus valores son:
SALUD: ${saludTamagochi} / FELICIDAD: ${felicidadTamagochi} / LIMPIEZA: ${limpiezaTamagochi} / ENERGÍA: ${energíaTamagochi}
¿Qué querés hacer?
1. Alimentar: +3 energía, +2 felicidad
2. Jugar: +2 felicidad, -2 energía, -1 limpieza
3. Dormir: +5 energía, +2 salud, -2 limpieza
4. Vacunar: +5 salud, -6 felicidad
5. Bañar: +3 salud
6. Retar: -3 felicidad
7. Acariciar: +4 felicidad`)

let energia =0;
let resultadoEnergia=0;
let felicidad=0;
let resultadoFelicidad=0;
let limpieza=0;
let resultadoLimpieza=0;
let salud=0;
let resultadoSalud=0;

switch(saludoTamagochi){
    case "1":
        energia =3;
        resultadoEnergia = energia+energíaTamagochi;
        felicidad=2;
        resultadoFelicidad= felicidad + felicidadTamagochi;
            alert(`Alimentar: \nEnergía: ${resultadoEnergia} \nFelicidad: ${resultadoFelicidad}`)
        break;
    case "2":
        energia =-2;
        resultadoEnergia = energia+energíaTamagochi;
        felicidad=2;
        resultadoFelicidad= felicidad + felicidadTamagochi;
        limpieza=-1;
        resultadoLimpieza = limpieza + limpiezaTamagochi;
            alert(`Jugar: \nEnergía: ${resultadoEnergia} \nFelicidad: ${resultadoFelicidad} \nLimpieza: ${resultadoLimpieza}`)
        break;
    case "3":
        energia =5;
        resultadoEnergia = energia+energíaTamagochi;
        salud=2;
        resultadoSalud= salud + saludTamagochi;
        limpieza=-1;
        resultadoLimpieza = limpieza + limpiezaTamagochi;
            alert(`Dormir: \nEnergía: ${resultadoEnergia} \nSalud: ${resultadoSalud} \nLimpieza: ${resultadoLimpieza}`)
        break;
    case "4":
        salud=5;
        resultadoSalud= salud + saludTamagochi;
        felicidad=-6;
        resultadoFelicidad = felicidad + felicidadTamagochi;
            alert(`Vacunar: \nSalud: ${resultadoSalud} \nFelicidad: ${resultadoFelicidad}`)
        break;  
    case "5":
        salud=3;
        resultadoSalud= salud + saludTamagochi;
            alert(`Bañar: \nSalud: ${resultadoSalud}`)
        break;   
    case "6":
        felicidad= -3;
        resultadoFelicidad= felicidad + felicidadTamagochi;
            alert(`Retar: \nFelicidad: ${resultadoFelicidad}`)
        break;  
    case "7":
        felicidad= 4;
        resultadoFelicidad= felicidad + felicidadTamagochi;
            alert(`Acariciar: \nFelicidad: ${resultadoFelicidad}`)
        break;     
    default:
        alert(`Ingrese un valor válido`)
}




