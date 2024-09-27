console.log("Sesión JS - Funciones");

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( greeting()   );

function greeting(){
    return "Hola Ch46";
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
//console.log(sum(2,5)); tienes que nombrarlas primero para poder llamarlas

const sum = function(a,b){
    return a + b;
}
console.log(typeof sum);//funcióc se usa solo la referencia
console.log(typeof (sum));//aqui estarias invocando el typeof del resultado/retorno 
console.log(typeof "sum");
console.log(typeof sum());

/*
  Ejercicio 1
  - Realizar función declarada que realice la resta de dos números
  - Realizar función expresa que realice la división de dos números
  - Imprimir en consola el retorno de las dos funciones.
*/


const resta = function (a,b){
    return a - b;
}
console.log(resta(2,5));
const divicion = function (a,b){
    return a/b;
}
console.log(divicion(2,5));

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }

    Ejemplo extendido
    const resta = function (a,b){
    return a - b;
}
console.log(resta(2,5));
*/

const rest= (a,b)=> a-b;
const  saludo = nombre => console.log(nombre);//si tiene un parameto puedes clocarlo asi , no es nesesario colocar parentesis ,el algunas ocaciones lo requieren siertas empresas.
//const  saludo = (nombre) => console.log(nombre);
console.log(rest(4,7));//-3
saludo("Azul"); /*Hola Azul */
console.log(saludo ("Daniela")/* Hola Daniela */);//underfiend

/* Ejercicio 2
 - Realizar una arrow function que realice el área de un rectángulo (ladoA, ladoB)
 - Realizar una arrow function que realice el área de un cuadrado (lado)
        const areaRectangulo = (a, b) => a * b;
        const areaCuadrado = (a) => a * a;
*/

const areaRectangulo = (ladoA, LadoB) => lasoA * ladoB;
console.log("El área del Rectangulo es  " + (4,7));
const areaCuadrado = (ladoA) => ladoA * 2;
console.log("El área del Cuadrado es  " + areaCuadrado(4));

// Template literals ` ` (backtick) en conjunto con la interpolación ${}
const message = `El áre del rectángulo es ${areaRectangulo(5,8)} y del cuadrado ${areaCuadrado(8)}`; 
console.log( message );

/*
 Investigar:
  - Parámetros por defecto ( default parameters)
  - Parámetros rest (rest parameters)
*/


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

/** imprimir en consola */
const imprimirEnConsola = mensaje => console.log( mensaje );

/** imprimir en alert */
const imprimirEnAlert = mensaje => alert(mensaje);

/** imprimir en una paragraph en el HTML usando al API DOM */
const imprimirEnParagraph = message => document.getElementById("message").innerHTML = message;

/**
 * función que imprime en consola, alert o paragraph.
 */
const imprimirMensaje = ( mensaje, tipoSalida ) => {
    
    if( tipoSalida === "consola" ){
        imprimirEnConsola( mensaje );
    } else if( tipoSalida === "alert" ){
        imprimirEnAlert(mensaje);
    } else if( tipoSalida === "paragraph"){
        imprimirEnParagraph( mensaje );
    } else {
        console.error("La salida especificada no existe: " + tipoSalida);
    }

}

imprimirMensaje("Ivanna recomienda Techno Boys", "consola" );
// imprimirMensaje("Jhon Wick 1, 2, 3 y 4", "alert" );
imprimirMensaje("Presunto inocente", "paragraph" );
// imprimirMensaje("Matrix 1", "header1" );

/**
 * Imprimir mensaje usando callbacks
 */
const imprimirMensajeUsandoCallBacks = ( mensaje, fncCallback )=> fncCallback(mensaje); // "Sari"(mensaje)

imprimirMensajeUsandoCallBacks("Alice in Borderland", imprimirEnParagraph );
imprimirMensajeUsandoCallBacks("Alice in Borderland", imprimirEnConsola );

imprimirMensajeUsandoCallBacks("Volver al futuro 1", function(mensaje){ console.warn("!"+mensaje) } );
imprimirMensajeUsandoCallBacks("Volver al futuro 2", (mensaje)=> console.warn("!!"+mensaje) );
