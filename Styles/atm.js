// Crear un programa que permita hacer las siguientes operaciones: EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR.
// El programa debe tener un dinero inicial
// El programa debe tener un PIN inicial
// Para empezar a utilizarlo y llegar al menú de opciones, debe pedir ingresar el PIN. Si se lo ingresa incorrectamente debe terminar el programa
// EXTRAER debe pedir cuánto se desea extraer y mostrar luego el dinero restante, sólo si la extracción es menor al dinero disponible
// DEPOSITAR debe pedir cuánto se desea ingresar y mostrar luego el dinero resultante
// TRANSFERIR debe pedir por un CBU (o alias) a transferir, preguntar cuánto se desea transferir y mostrar el dinero restante, si la transferencia es menor al dinero disponible y si el CBU es válido. Los CBU o alias válidos posibles (2 o 3) deben estar guardados en variables.
// CAMBIAR PIN debe pedir primero por la contraseña nueva y luego por la contraseña original para confirmar el cambio
// SALIR debe mostrar un mensaje de despedida
// En cualquier situación mostrar mensajes de lo que esté pasando operaciones exitosas

// if (cbu === "12097654398000987" || alias === "BATMAN.VS.JOCKER")


 
const pinIngreso = prompt("Ingrese el PIN");
const dineroInicial = 8325;
const cbuAlias = "BATMAN.VS.JOCKER" || cbuAlias === 12097654398000987;

switch (pinIngreso) {
    case "Jess2020":
        operaciones = prompt("Puede realizar las siguientes operaciones: \n-EXTRAER \n-DEPOSITAR \n-TRANSFERIR \n-CAMBIAR EL PIN \n-SALIR") 
        if (pinIngreso !== "Jess2020") {
            alert("La clave ingresada es incorrecta, intente nuevamente en 15 minutos")
    } 
        break;
        default:
        alert("Pin incorrecto. Intente nuevamente en 15 minutos");
}

switch (operaciones) {
    case "extraer":
        extraccion = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea extraer?`));
        saldo = dineroInicial -extraccion;
        alert(`Operación exitosa. 
        Su saldo actual es $${saldo}`);
        break;
    case "depositar":
        deposito = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea depositar?`));
        saldo = dineroInicial + deposito;
        alert(`Operación exitosa.
        Su saldo actual es $${saldo}`);
        break;
    case "transferir":
        cbu = Number(prompt(`Ingrese el CBU o Alias de la cuenta destino`));
        if (cbuAlias === 12097654398000987 || cbuAlias === "BATMAN.VS.JOCKER") {
            transferir = Number(prompt(`El dato ingresado es correcto. Dispone de $${dineroInicial}. Cuánto dinero desea tranferir?`));
            saldo = dineroInicial - transferir;
            alert(`Operación exitosa.
        Su saldo actual es $${saldo}`);    
}       else {
            alert(`Su $${cbuAlias} es incorrecto. No podemos continuar con la operación`);         
    }       break;
    case "cambiar pin":
        nuevoPin = prompt(`Ingrese el el nuevo pin`);
        ingreso = prompt(`Ahora ingrese su antiguo pin para confirmar la operación`);
        if (ingreso === "Jess2020") {
            alert("Contraseña cambiada exitosamente")
    }   break;
    case "salir":
        alert("Muchas gracias por confiar en nuestros servicios")
        break;
        default:
        alert("instrucción ingresada incorrectamente, intente nuevamente");
              
}