/*1 - Crear un array llamado meses 
que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo.

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre','noviembre', 'diciembre'];

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
  
}*/

/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudades = prompt("Coloque el nombre de ciudades.");
let i = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 
'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto'];
    
while (ciudades !== "cancelar") {
    i.push(ciudades);
}*/

let variables = "la comision ninja";

function vocales(cadena) {
  const vocales = ['a', 'e','i','o','u'];
  let cadenasalida = []; // Para guardar las vocales dentro del array.
  //cadena.length()
  //cadena.split/*divide la cadena de texto*/("").fortach/*recorre por cada letra*/(function(letra){
  //  console.log(letra);
//  });
  for (let i = 0; i < cadena.length; i++) { //Este for se lo para recorrer letra por letra de cadena.
    for (let j = 0; j < array.length; j++) { // Este for recorre la const. de vocales.
      if (cadena [i] === vocales [j]) { // Este if compara la letra en una vocal.
            cadenasalida.push(vocales[i]);
    
      }      
    }
    
  }
    return cadenasalida
}

console.log(vocales);






    
