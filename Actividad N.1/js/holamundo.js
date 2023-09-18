//var nombre = prompt("Ingresa tu nombre");
//var edad = parseInt(prompt("ingresa la edad"));
//document.write("Bienvenido señor(a) "+nombre+" usted tiene "+edad+" años de edad")

var nombre = prompt("Ingresa tu nombre");
nacimiento = parseInt(prompt("Ingresa el año de nacimiento"));
//console.log(typeof(nacimiento));
//var nacimiento 2005;
const fecha = new Date();
const fechaActual = fecha.getFullYear();
let edad = fechaActual - nacimiento;

//document.write("Bienvenido señor "+nombre+" Usted tiene "+edad+" "años")

//var nombre = prompt("Ingresa tu nombre");

//var Edad = parseInt(prompt("ingresa la edad"));
//console.log(typeof(nombre)) //ver el tipo de dato de la variable
if(edad<=8){
document.write("Bienvenido niño(a) "+nombre+" usted tiene "+edad+"  años de edad y eres un niño(a)")
}else if(edad<=17) {
document.write("Bienvenido joven "+nombre+" usted tiene "+edad+"  años de edad y eres un joven");
} else {document.write("Bienvenido señor(a) "+nombre+" usted tiene "+edad+"  años de edad y es un adulto");
}