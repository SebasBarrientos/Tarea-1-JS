//alert("JavaScript funcionando correctamente");

let variableSinValor

let booleano1 =true

let booleano2 = false

const PI = 3.14

const TAU = PI *2

const miNombre = "Sebastian"

const miNumeroFav = 9

console.log( `Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);

const frase1 = "Seré un crack en JavaScript al terminar el bootcamp"

console.log(frase1.toUpperCase());

const frase2 = 'Hola soy un crack'

console.log(frase2.substring(0,5));


console.log(typeof miNumeroFav.toString());

const miApellido = "Barrientos"

const templateLiteral1 = (`Mi apellido es ${miApellido}`);

console.log(templateLiteral1);

console.log(PI.toFixed(2));

console.log("---------------------------------------------PARTE 2----------------------------------------");

const arrayVacio = []
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9]
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const arrayNumerosPares = [0,2,4,6,8]

const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

const holaMundo = ["Hola", "Mundo"]
const loGuardoTodo = ['hola','que', 23, 42.33,'tal']
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

console.log(loGuardoTodo.length);
loGuardoTodo.push("Funciona")
console.log(loGuardoTodo);

console.log(loGuardoTodo[1]);

loGuardoTodo.push("Euralio")
console.log(loGuardoTodo);

console.log("---------------------------------------------PARTE 3----------------------------------------");

const Coche = {
    marca: "Audi",
    modelo: "A3",
    matrícula: true
}
const Casa = {
    codPostal: 1234, 
    calle: "Falsa", 
    portal: "Falso",
    piso: "Falsisimo"
}
console.log(Casa);

const FullStackDeveloper = {
    lenguajes: ["Python", "JavaScript", "SQl", "JSON"],
    proyectos: ["Mi pagina de presentacion", "API de Calistenia", "Base de datos de un Gym en SQL"]
}

const Perro = {
    nombre:"Oscar",
    raza:"jack Russel",
    color:"Marron y blanco",
    edad: 2
}

const Noticia = {
    titular: "Programador se vuelve super Millonario" ,
    cuerpo: "Exitoso Boothcamp lo consigue, sus alummnos son todo millonarios"
} 

const Persona ={
    nombre: "Sebastian",
    apellido:"Barrientos",
    edad: 27
}


console.log(Persona.nombre);

console.log(FullStackDeveloper.lenguajes[1]);

const Portatil = {
    marca: "Apple",
    color: "plateado"
}
console.log(Portatil.marca);

console.log(Portatil["marca"]);

const Concierto = {
    grupos: ["a","b","c"],
    dias: ["lunes", "Jueves"]
};
console.log(Concierto.grupos);

const Led= {
    lampara1: "rojo",
    lampara2: "verde",
    lampara3: "azul"
}
const RGB = [ Led.lampara1, Led.lampara2, Led.lampara3]
console.log(RGB);

const O_Error = {
    codigo: 12345
}
console.log(O_Error.codigo);

const Grupo = {
    integrantes: ["Sebastian", "Agustin", "Manel"]
}

console.log(Grupo.integrantes[0]);

const Impresora = {
    tinta: {
        rojo: 4, 
        verde: 7, 
        azul: 6
    }
}
const nivelesTinta = [Impresora.tinta.rojo, Impresora.tinta.verde, Impresora.tinta.azul] 
console.log(nivelesTinta);

const Movil = {
    especificaciones: "Movil ultimo modelo"
}

const especificaciones = Movil.especificaciones
console.log(especificaciones);

Portatil.marca = "MSI"
console.log(Portatil.marca);

Concierto.grupos.push("Guns N' Roses")
console.log(Concierto.grupos);

Concierto.fecha = "27 de enero"

console.log(Concierto);
Concierto.fecha = new Date()

console.log(Concierto.fecha);

Grupo.integrantes.pop()
console.log(Grupo.integrantes.length);