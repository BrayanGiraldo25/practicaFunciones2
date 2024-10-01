alert("Bienvenido a mi pagina");

/* let objetoUno = {
    "nombre": 'Jaime',
    "id": 10203040
    
}  Objeto Literal 

let objetoDos = {
    "nombre": 'Jaime',
    "id": 99002034,
    "telefono": 3217256882,
    "direcction": "Av 32-4"
}
let nuevoArreglo = ['jaime', 'Ana', 'Luisa', 'Fernando'];
console.log(nuevoArreglo);

for (let index = 0; index < 4; index++){
    if(nuevoArreglo[index].id == 99002034){
        console.log(nuevoArreglo[index])
    }
} */

   /*  let persona = {
        "nombre": 'jaime zapata',
        'edad': 33,
        'profesion': 'Developer',
        "Direccion": {
            "calle": 20,
            "Carrera": 45,
            "barrio": 'Niquia'
        },
        "hobbies": 'caminar, trotar, ver videos, escuchar musica'

    } */


function Persona(nombre, edad, profesion){
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion 
}

let nuevoObjeto = new Persona('Jaime Zapata', 33, 'Ing Sistemas')

let persona = {
    "nombre": '',
    "edad": '',
    "profesion": ''
}

function iniciarSesion(){
    alert("Apreto el boton")
}

function doble(){
    alert("apreto el boton 2 veces")
}

function Mouse(){
    alert("aleja el mouse de ahi")
}
    
 

