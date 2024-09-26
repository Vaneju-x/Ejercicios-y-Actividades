
/*Comentarios
multilinea*/
//comentario de una sola linea
/*
Javascript

Es un lenguaje de programación
Interpretado
Orientado a objetos
Case Sensitive / CamelCase
Tipado dévil
*/

/*alert("Hola Mundo");
console.log("Hola Consola");//comentario en inpeccion console

document.write("Hola CH46");// Muestra el resultado dentro de la página
//Que es un prompt?
let nombre = prompt("Ingrese su nombre:");
//Variable atributo = prompt valor
alert("Hola, " + nombre + " Bienvenido a javascript");*///ejemplo de prompt
//console.warn("Peligro"); lo escribimos en la consola jeje
//console.warn("Danger");
//Console.warn("Agua pasa por mi casa, cate me dio la razon");
//Console.error("Upsi dupsi");
/* let chicas = 
["olga","Azul","Ranfi","Kari"];
console.table(chicas); */

//Ejemplo de ejercicio con signos
/*let nombre1 = prompt("Ingresa tu nombre");
let signo = prompt("Ingresa tu signo");
let mensaje = nombre1 + " y tu signo es: " + signo;//Concatena : junta el mensaje "+"
alert("Eres " + mensaje);*/



let nombre = prompt("Ingresa tu nombre:");

let signo = prompt ("Ingresa tu signo en minúsculas y sin acentos:");

//let mensaje = nombre + " y tu signo es: " + signo;

//alert("Eres " + mensaje);

switch(signo){
    case "aries":
        mensaje = alert("Signo de fuego, apasionado, valiente y decidido");    
    break;
    case "tauro":
        mensaje = alert("Signo de tierra, leal, práctico y buen compañero");    
    break;
    case "geminis":
        mensaje = alert("Signo de aire, curioso, polifacético y dual");
    break;
    case "cancer":
        mensaje = alert("Signo de agua, protector, empático y sensible ");
    break;
    case "leo":
        mensaje = alert("Signo de fuego, carismático, líder y seguro de sí mismo");
    break;
    case "virgo":
        mensaje = alert("Signo de perfeccionismo");
    break;
    case "libra":
        mensaje = alert("Signo de equilibrio");
    break;
    case "escorpio":
        mensaje = alert("Signo de pasión");
    break;
    case "sagitario":
        mensaje = alert("Son personas aventureras, que buscan explorar el mundo y nuevas experiencias. ");
    break;
    case "capricornio":
        mensaje = alert("Son muy fiables y cuentan con una gran capacidad de sacrificio.");
    break;
    case "acuario":
        mensaje = alert("Creativo, original, independiente e intelectual.");
    break;
    case "piscis": 
        mensaje = alert("Se caracteriza por ser sensible, empático, y creativo.");
    break;

    default:
        alert("Lo siento, no encontramos ese signo :c");
};

