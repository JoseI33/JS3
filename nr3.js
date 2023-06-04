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
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

/*let ciudades = [];
let lugar = "";
 
  if (lugar != null) {
   // lugar = prompt("Ingrese el nombre de una ciudad.")
    ciudades.push(lugar);
  }

console.log("La longitud del arreglo es: " + ciudades.length);
console.log("Primer elemento: " + ciudades[0]);
console.log("Tercer elemento: " + ciudades[2]);
console.log("Último elemento: " + ciudades);
ciudades.push("París");
console.log("Elemento que ocupa la segunda posición: " + ciudades[1]);
ciudades.splice(1, 1, "Barcelona");/*



/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let numeroaleatorio = [];

for (let i = 0; i < 50; i++) {
  let numero1 = Math.floor(Math.random() * 6) + 1;
  let numero2 = Math.floor(Math.random() * 6 )+ 1;
  let suma = numero1 + numero2;

if (numeroaleatorio[suma] === undefined) {
  numeroaleatorio[suma] = 1;
} else {
  numeroaleatorio[suma]++;
} 

}

console.log(numeroaleatorio);*/



/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numero(texto) {
  if (texto % 2 === 0) {
    return "El numero es par ";
  } else {
    return "El numero es impar ";
  }
} 

let entero = parseInt(prompt("Ingrese un numero entero: "));
let resultado = numero(entero);
console.log(resultado);*/

/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

/*function informacion(texto) {
  if (texto === cadena.toUpperCase()) {
    return "Ingresa con mayúscula";
  } else if (texto === cadena.toLowerCase()) {
    return "Ingresa con minúscula";
  } else {
    return "Ingresa con mayuscula y miniscula."
  }
}

let cadena = prompt ("Ingrese un texto.");
let resultado = informacion(cadena);
console.log(resultado);*/


/*6 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a + b)*/

/*let valorA = parseFloat(prompt("Ingrese el valor del lado A del rectangulo."));
let valorB = parseFloat(prompt("Ingrese el valor del lado B del rectangulo."));
let perimetro = calcular (valorA, valorB);

function calcular(a, b) {
  return 2 * (valorA + valorB);
}

document.write("El resultado del perimetro del rectangulo es: " + perimetro);
console.log(perimetro);*/


/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/


/*function mostrar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    }
  }

  let tabla =  parseInt(prompt("Ingrese un numero de 1 al 10."));

  mostrar(tabla);*/

















    
