// Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
// CAMBIAR CANAL: permite ingresar un canal (0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.

let televisor =prompt("¿Desea encender el televisor?");
let canal = 26;
let volumen = 8;

switch (televisor) {
    case "si":
        acciones = prompt("Puede realizar las siguientes acciones: \n1-CAMBIAR DE CANAL \n2-SUBIR UN CANAL \n3-BAJAR UN CANAL \n4-SUBIR VOLUMEN \n5-BAJAR VOLUMEN \n6-MUTEAR") 
        break;
        default:
        alert("TV APAGADO, Cuando quieras mi compañía me llamas");
}

switch (acciones) {
    case "1":
        cambioCanal = Number(prompt(`Estás en el canal ${canal}, con un volúmen en ${volumen}. Podés elegir un canal entre 0 y 99 ¿Qué canal te gustaría ver?`));
        if (cambioCanal >= 0 && cambioCanal <= 99){
        alert(`Has elegido bien, tu canal actual es el ${cambioCanal}, con un volúmen en ${volumen}.`);
        accion = confirm("¿Deseas realizar otra acción o salir del menú?")
}        else  {
            alert("El número elegido no existe")
        }
        break;
    case "2":
        subirCanal = canal +1,
        subirCanal = prompt(`Estas en el ${canal}, con volúmen en ${volumen}.
    Ahora te encuetras en el canal ${subirCanal}`);
        accion = confirm("¿Deseas realizar otra acción o salir del menú?")   
        break;
    case "salir":
        alert("disfruta tranquilo la mejor programación");
        break;
    case "3":
        bajarCanal = canal - 1;
        bajarCanal = prompt(`Estas en el ${canal}, con volúmen en ${volumen}.
    Ahora te encuetras en el canal ${bajarCanal}`);
        accion = confirm("¿Deseas realizar otra acción o salir del menú?")  
        break; 
    case "4":
        subirVolumen = volumen + 5,
        subirVolumen = prompt(`Estas en el ${canal}, el volúmen está en ${volumen}.
    Ahora subió a ${subirVolumen}`);
        accion = confirm("¿Deseas realizar otra acción o salir del menú?")   
        break;   
    case "bajar volumen" && "5":
        bajarVolumen = volumen - 5,
        bajarVolumen = prompt(`Estas en el ${canal}, el volúmen está en ${volumen}.
    Ahora bajó a ${bajarVolumen}`);
        accion = confirm("¿Deseas realizar otra acción o salir del menú?")   
        break;    
    case "6":
        mute = 0;
        mute = alert(`Estas en el ${canal}, el volúmen está en ${volumen}.
    Ahora bajó a ${mute}`);
        accion = confirm("¿Deseas realizar otra acción o salir del menú?")   
        break;          
        default:
      alert("La instrucción ingresada es incorrecta, intente nuevamente");      
    }       
 if (accion === true ) {
    acciones = prompt("Puede realizar las siguientes acciones: \n-CAMBIAR DE CANAL \n-SUBIR UN CANAL \n-BAJAR UN CANAL \n-SUBIR VOLUMEN \n-BAJAR VOLUMEN \n-MUTEAR"); // no vuelve a empezar, supongo que acá es cuando interviene for o while
} else  {
    alert("Seguí disfrutando, llamame cuando me necesites")
}