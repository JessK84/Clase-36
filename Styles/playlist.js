// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.


const playlist =prompt("Ingrese el nombre de la paylist")
let cantidadCanciones = Number(prompt("¿Cuántas canciones desea agregar a la playlist?"));
let canciones ="";

for (i=0; i< cantidadCanciones; i ++){
    cancion = prompt(`Ingrese una canción, le quedan ${cantidadCanciones-i} canciones por agregar`);
    canciones += cancion + `\n`;
    alert(`La Playlist: ${playlist}, con ${cantidadCanciones} canciones eligió: \n${canciones}`)
 
}
