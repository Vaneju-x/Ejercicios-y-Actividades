/*Tipos de datos en Javascrip
son clasificados en dos:
Tipo Primitivo
-string > Cadena de caracteres o texto
-number > numeros (tipo de dato infiniti )
-boolean > binario / verdadero o falso / 0 ó 1
-NaN > resultado de un error
-null
-underfined
-biginit - en esta secion se hara mención corta
-symbol -por esta secion no
-----------------------------------
Tipo Objetos:
Tipo Array:
[]guardad una colleccion de elementos o items 
 */

/* Tipo de dato string:
Las cadenas o tipo de dato string se utilizan representar o traspmitir datos  en forma de texto o albabetico.  (caracteristica-> "" )
Una cadena puede estar compuesta por cero o más caracteres. Una cadena que no tiene ningun caracter se llama caradena vacia
*/
let cadenaTexto = "Holi";// con el uso de las comillas dobles del tipo string.
let cadenaTextoSegunda= 'Hola';// con el uso de comillas simples simples del tipo string
/* Como el compilador reconoce que es el tipo de texto, si yo hago un asignacon con el 
operador + a una tercera variable, hara una concatenación*/
let concatenar = cadenaTexto + cadenaTextoSegunda;
console.log(concatenar);
let name ="tibio";
let tipoAnimal = 'gato';
//Nuestra variable de curp vacia puede existir porque estamos esperando que nuestr@ cliente ingrese su curp
//Despues de que nuestra cliente ingrese su curp
let curp = "hefdfhjqehfhqekjfh";
/* string template literal
es una forma flexible y legible de trabajar con cadenas de texto. Utiliza comilla invertidas(``)
en lugar de las comillas simples o dobles y permiten expresiones (variables) dentro de la cadena de texto utiizando la interpretacion de $(VARIABLE).*/
let numeroDeDias = "04";
let mensaje = `Faltan ${numeroDeDias} para navidad`;//se dinamico no estatico
console.log(mensaje);
/* Tipo de dato Number
-Utilizamos para remplazar información del tipo numerico que necesitamos hacer operaciones matematicas con ella,en javascrip todos los números son de valores de punto flotante
-en javascript 2 = 2.0 2.5= 2.5, se pueden escribir de tipo decimal o enteros, pueden ser positivos y negativos o cero 1,0,-1.
-NaN >not at number, esto ocurrira cuando intente realizar una operación matematica imposible o sin numero. */
let peso= 5;
let altura =30;
let añoNacimiento = 2019;
let añoActual=2024;
console.log(`Tibio tiene ${añoActual - añoNacimiento} años`);
/* Funciones globales de Javascrip  y bibliotecas que te permiten hacer calculos matematicos rapido y sin que lo programes todo desde cero*/
//pendiente

/* BitInt*/
let bigExample = 9007199254748991n;
/* NaN example */
let x = 100 / "apple";
console.log(x); //Estamos esperando que el resultado no tenga sentido, porque no puedes hacer ooperaciones matematicas con un numero y una cadena de texto
//si es una strig que contiene un numero, mientras la operacion no sea con el operador +, javascrip hara una operacion matematica
let a =1, b=2;
let aStringNumber = "1", bStringNumber = "2";
console.log (aStringNumber/bStringNumber);
/* Tipo Infinity o -infinity > es el valor que javascript devolvera si clacula un número fuera del mayor posible */
const maxNumber = Math.pow(10,1000)//
if(maxNumber === Infinity){
    console.log("si es un infinity");
}
console.log (Infinity);
console.log (Infinity+1);
console.log (1/0);

/* Tipo de Booleano
Seguido cuando programados, necesitamos cnfirmar o desmentir algo para hacer comparaciones y para esto necesitamos valores como :
-si/no
-encendido / apagado
-verdadero /falso
-1/0
 */
let namePerson = "Vanessa", hasAuto = true, isTibioInClass=false;
let tibioAnimal = "cat", isTibioaCat;
if(tibioAnimal == "cat"){
isTibioaCat = true; 
}
console.log(isTibioaCat, isTibioInClass);
console.log("resultado de si tibio es un gato:" +  isTibioaCat);
/* Undefined y Null
- Undefined > Es un valor tanto como tipo de dato. y es indefinido, se utiliza que una variable no tiene un valor definido
-por ejemplo: cuando una variable se declara pero no se asigna.
 */
let exampleUndefined;
console.log(exampleUndefined);
/* Null > es un valor que podemos asignar a una variable, para indicar que no tiene valor.Se utiliza para representar "vacio", que esta en estado inicial */
let curpExample = null;
console.log(curpExample);
/* typeof > para saber que tipo de variable es */
console.log("-------------Aqui inicia resultados de typeof-------------------")
console.log(typeof exampleUndefined);
console.log(typeof isTibioInClass);
console.log(typeof concatenar);