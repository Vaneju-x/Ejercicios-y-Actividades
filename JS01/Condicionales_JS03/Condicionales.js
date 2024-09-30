console.log("Sesión JS03 - Condicionales");
/**
 *  Función que recibe una temperatura y retorna un mensaje de acuerdo a la temperatura:
 *  temperatura ideal = 24
 *  temperatura templada = 20 a 23
 *  temperatura fria = menor o igula a 19
 *  temperatura calida = 25 a 30
 *  temperatura calurosa = mayor o igual a 31
 * 
 Respuesta
 * const evaluarTemperatura =(gradosCentigrados)=>{
    if(gradosCentigrados === 24 )return`Temperatura de ${gradosCentigrados} es la ideal`;
    else if(gradosCentigrados >= 20 && gradosCentigrados <=23)return`Temperatura de ${gradosCentigrados} es templado`;
    else return `Temperatura de ${gradosCentigrados} no la puedo evauar`;
};

console.log(evaluarTemperatura(22));
console.log(evaluarTemperatura(24));
console.log(evaluarTemperatura(30));
 */

/*Para evitar usar tanto retur , ya que se recomiendo no saturarlo con return usamos */

const evaluarTemperatura = (gradosCentigrados) => {
    let mensaje = "";
    if (gradosCentigrados === 24)
        mensaje = `Temperatura de ${gradosCentigrados} es ideal`;
    else if (gradosCentigrados >= 20 && gradosCentigrados <= 23)
        mensaje = `Temperatura de ${gradosCentigrados} es templada`;
    else if (gradosCentigrados == 19 && gradosCentigrados <= 19)
        mensaje = `Temperatura de ${gradosCentigrados} es fria`;
    else if (gradosCentigrados >= 25 && gradosCentigrados <= 30)
        mensaje = `Temperatura de ${gradosCentigrados} es calida`;
    else if (gradosCentigrados == 31 && gradosCentigrados >= 32)
        mensaje = `Temperatura de ${gradosCentigrados} es calurosa`;
    else mensaje = `Temperatura de ${gradosCentigrados} no la puedo evaluar`;
    return mensaje;
}
console.log(evaluarTemperatura(22));
console.log(evaluarTemperatura(24));
console.log(evaluarTemperatura(30));
console.log(evaluarTemperatura(36));
console.log(evaluarTemperatura(28));
console.log(evaluarTemperatura(15));


/**
 * Función que evalue si se ha pagado una tarjeta de crédito
 * Parámetro de entrada: booleano que indique si se ha pagado la tarjeta de crédito
 */
const pagoEfectuado = (esPagadoTC) => {
    let mensaje = "";
    if (esPagadoTC)
        mensaje = "Se ha pagado la tarjeta de crédito";
    else
        mensaje = "No se ha pagado, se te cobrará intereses";
    return mensaje;
}


const pagoEfectudoConOperadorTernario = (esPagadoTC) => esPagadoTC === true ? "Tc pagado" : "Pagarás intereses";
console.log(pagoEfectuado(true));
console.log(pagoEfectuado(false));
console.log(pagoEfectudoConOperadorTernario(true));
console.log(pagoEfectudoConOperadorTernario(false));

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/


const saludarPersona = (nombre) => {
    let mensaje = "";
    switch (nombre) {
        case "serch":
            mensaje = "Qué transita por tus venas, aparte de colesterol y chocolate? 🍫🍩";
            break;
        case "ranfi":
            mensaje = "gurs nais 🧟‍♀️";
            break;
        case "sari":
        case "eli":
        case "vane":
            mensaje = "Hola pelona 👩‍🦲";
            break;
        case "lizbeth":
            mensaje = "Ola 🌊";
            break;
        case "azul":
            mensaje = "Regresemos al 2014 Holiwis";
            break;
        default:
            mensaje = "No podemos procesar un saludo para " + nombre;
    }
    return mensaje;
}

console.log(saludarPersona("serch"));
console.log(saludarPersona("ranfi"));
console.log(saludarPersona("sari"));
console.log(saludarPersona("Daniela"));
console.log(saludarPersona("eli"));
console.log(saludarPersona("vane"));
console.log(saludarPersona("azul"));

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 
 fuera de esto .. acaso eres extratereste??

 Realizar una versión con if-else-elseif y otra con switch.

*/

const estacionDelMes = (mes) => {
    let mensaje = "";
    switch (mes) {
        case "12":
        case "1":
        case "2":
            mensaje = "Estamos en la estación de Invierno 🐻‍❄️, abrigate bien.";
            break;
        case "3":
        case "4":
        case "5":
            mensaje = "Estamos en la estación de Primavera🌺, a oler las flores🌻 y no molestar a las abejas🌼🐝";
            break;
        case "6":
        case "7":
        case "8":
            mensaje = "Estamos en la estación de Verano🏄‍♂️, Vacasiones🤸‍♂️ y Playita🏝️,no olvides el bloqueador solar😉🔥";
            break;
        case "9":
        case "10":
        case "11":
            mensaje = "Estamos en la estación de Otoño🍂, hojas naranjas🍁 ,🌬️ mucho biento🌫️ y una gran luna...🌕 tiempo para relajarse 🕢";
            break;
        default:
            mensaje = "Acaso eres Extraterrestre🤨? Seguro que vives en otro Planeta🌓😌, Ubicate!!!🙄";
    }
    return mensaje;
}

console.log(estacionDelMes("15"));
console.log(estacionDelMes("5"));
console.log(estacionDelMes("1"));
console.log(estacionDelMes("8"));
console.log(estacionDelMes("10"));
console.log(estacionDelMes("18"));
console.log(estacionDelMes("3"));
console.log(estacionDelMes("6"));
console.log(estacionDelMes("14"));
console.log(estacionDelMes("7"));
console.log(estacionDelMes("2"));
console.log(estacionDelMes("9"));
console.log(estacionDelMes("11"));
console.log(estacionDelMes("4"));
console.log(estacionDelMes("12"));


