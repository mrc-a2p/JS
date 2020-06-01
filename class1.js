// -------------------------------------------- VARIABLES SIMPLES  --------------------------------------------

// var nombre = 'marc', apellido =  'albert'

// var edad = '28'

// edad = '28 años'
// peso = '75'


// console.log('Hola ' + nombre +  ' '  + apellido )
// console.log('tengo ' + edad)



// -------------------------------------------- VARIABLES STRING  --------------------------------------------

// var nombre = 'Marc', apellido =  'ALBERT'

// -------------toUpperCase sirve para transformar un string a mayúsculas---------------------------  
// var NombreEnMayusculas = nombre.toUpperCase()

// --------------toLowerCase sirve para transformar un string a minúsculas--------------------------   
// var NombreEnMinusculas = apellido.toLowerCase()


// var primeraletradelnombre = nombre.charAt(0)
// var ultimaletradelnombre = nombre.charAt(nombre.length-1)
// var cantidaddeletras = nombre.length

// ---------------comillas invertidas sirven para poder interpolar variables-------------------------  
// var nombrecompleto = `${nombre} ${apellido.toUpperCase()}`

// ---------------substr sirve para poder acceder a un substring dentro de  un string-------------------
// var str = nombre.substr(1, 2)


// -------------------------------------------- VARIABLES NUMEROS   --------------------------------------------

// var edad = 18
// -------edad = edad + 1---------
// edad += 1 

// var peso = 72 

// peso -= 2

// var snadwich = 1

// peso = peso + snadwich

// var futbol = 3

// peso -= futbol

// var preciovino = 200.3
// -------------Math.round  como hacer que el calculo mas preciso------------------
// var total = Math.round(preciovino * 100 * 3) / 100

// -------------ver los dos decimales despues de la coma----------------------
// var totalstr = total.toFixed(2)

// --------------parseFloat significa transformar o leer de un string a un decimal------------------ 
// var total2 = parseFloat(totalstr) 


// var pizza = 8
// var persona = 4

// var cantidaddepizzasentrepersona = pizza / persona


// -------------------------------------------- FUNCIONES  --------------------------------------------

// var nombre = 'sara' , edad = 15

// function imprimirEdad(n, e){
//     console.log(`${n} tiene ${e} años `)
// }

// imprimirEdad(nombre, edad)
// imprimirEdad('Jose', 42)

// -------------------------------------------- FUNCIONES x2  --------------------------------------------

// -----------------------  alcance global  --------------------------
// var marc = {
//     nombre: 'marc', 
//     apellido: 'albert',
//     edad: 28

// }

// var dario = {
//     nombre: 'dario', 
//     apellido: 'norte',
//     edad: 23

// }

// -----------------------  alcance local  --------------------------
// function nombreenmayusculas({nombre}){
//     console.log(nombre.toUpperCase())
// }

// function nombreenmayusculas(persona){
// ------------------------ var nombre = persona.nombre -------------------
//     var {nombre} = persona
//     console.log(nombre.toUpperCase())
// }

// nombreenmayusculas(marc)
// nombreenmayusculas(dario)

// function cumpleanos(persona){
    // ------------------retornamos un objeto nuevo, tiene las mismas caracteristicas pero se le suma uno a la edad----------------------------
//     return {
//         ...persona,
//         edad: persona.edad + 1
//     }

// }

// --------------------------------------------  COMPARACIONES  --------------------------------------------

// var x = 4 , y = '4'

// var marc = {
//     nombre: 'marc'
// }

// var otrapersona =  marc

// --------------------------------------------  CONDICIONALES  --------------------------------------------

// var marc = {
//     nombre: 'marc', 
//     apellido: 'albert',
//     edad: 28,
//     ingeniero: true,
//     cocinero: false,
//     dj: false,
//     guitarrista: true,

// }

// var juan = {
//     nombre: 'juan', 
//     apellido: 'doblas',
//     edad: 5,
// }

// function imprimirprofesiones(persona){
//     console.log(`${persona.nombre} es:`)

//     if (persona.ingeniero){
//         console.log('Ingeniero')
//     }else{
//         console.log('No es un ingeniero')
//     }

//     if (persona.cocinero){
//         console.log('Cocinero')

//     }

//     if (persona.dj){
//         console.log('Dj')

//     }

//     if (persona.guitarrista){
//         console.log('Guitarrista')

//     }
    
// }

// imprimirprofesiones(marc)

// -----------------------   funciones que retornan varoles  --------------------------

// const MAYORIA_DE_EDAD = 18

// var esmayordeedad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }


// -----------------------   arrow functions --------------------------
// const esmayordeedad =  ({ edad }) => edad >= MAYORIA_DE_EDAD

// function imprimirsiesmayordeedad(persona){
//     if(esmayordeedad(persona)) {
//         console.log(`${persona.nombre} es mayor de edad`)
//     }else{
//         console.log(`${persona.nombre} es menor de edad`)
//     }

// }

// function permitiracceso(persona){
    
//     if (!esmayordeedad(persona)){
//         console.log('ACCESO DENEGADO')
//     }


// }

// --------------------------------------------  FOR  --------------------------------------------

// var marc = {
//     nombre: 'marc', 
//     apellido: 'albert',
//     edad: 28,
//     peso:75

// }

// console.log(`Al inicio del año ${marc.nombre} pesa ${marc.peso} kg`)
// const incrementopeso = 0.2
// const diadelano = 365

// function aumentardepeso  (persona){
//     return persona.peso += 200
// }
// const aumentardepeso = persona => persona.peso += incrementopeso
// const adelgazarpeso = persona => persona.peso -=  incrementopeso


// for (var i = 1; i <= diadelano; i++) {
//     var random = Math.random()
//     if (random < 0.25){
//         aumentardepeso(marc)
//     }else if (random < 0.5) {
//         adelgazarpeso(marc)

//     }
// }

// console.log(`Al final del año ${marc.nombre} pesa ${marc.peso.toFixed(2) } kg`)


// --------------------------------------------  WHILE  --------------------------------------------

// var marc = {
//     nombre: 'marc', 
//     apellido: 'albert',
//     edad: 28,
//     peso:75

// }

// console.log(`Al inicio del año ${marc.nombre} pesa ${marc.peso} kg`)
// const incrementopeso = 0.3
// const diadelano = 365
// const nutricionista = 3

// function aumentardepeso  (persona){
//     return persona.peso += 200
// }

// const aumentardepeso = persona => persona.peso += incrementopeso
// const adelgazarpeso = persona => persona.peso -=  incrementopeso
// const comemucho = () => Math.random() < 0.3
// const realizadeporte = () => Math.random() < 0.4


// const META = marc.peso - nutricionista
// var dias = 0

// while (marc.peso > META ){
//     if(comemucho()){
//         aumentardepeso(marc)
//     }

//     if(realizadeporte()){
//         adelgazarpeso(marc)
//     }

//     dias += 1

// }

// console.log (`pasaron ${dias} dias hasta que ${marc.nombre} adelgazo 3kg`)


// --------------------------------------------  DO-WHILE  --------------------------------------------

// var contador = 0

// const llueve = () => Math.random() < 0.25

// do{
//     contador ++ 

// }while (!llueve())

// console.log(`fui a ver si llovia ${contador} veces `)

// --------------------------------------------  SWTCH  --------------------------------------------

// var signo = prompt('Cual es tu signo?')

// if (signo === 'leo'){
//     console.log('suele enamorarse rapido y se confia mucho de la gent que le rodea')
// }


// if (signo === 'tauro'){
//     console.log('es una persona en la que se puede confiar')

// }

// switch(signo){
//     case 'leo':
//     case 'léo':
//         console.log('suele enamorarse rapido y se confia mucho de la gent que le rodea')
//         break
//     case 'tauro':
//         console.log('es una persona en la que se puede confiar')
//         break
//     default:
//         console.log('no se encuentra ningun signo zodiacal válido')
//         break 

// }



// --------------------------------------------  ARRAYS  --------------------------------------------

// var marc ={
//     nombre: 'marc',
//     apellido: 'albert',
//     altura: 6.7,
//     cantidaddelibros: 343
// }

// var laura = {
//     nombre: 'laura',
//     apellido: 'ortiz',
//     altura: 7.23,
//     cantidaddelibros: 231
// }

// var raul = {
//     nombre: 'raul',
//     apellido: 'dopico',
//     altura: 7.45,
//     cantidaddelibros: 435
// }

// var claudia ={
//     nombre: 'claudia',
//     apellido: 'moreno',
//     altura: 6.34,
//     cantidaddelibros: 587
// }

// var personas = [marc, laura, raul, claudia]


// -----------------------   transformar una array --------------------------

// const pasaralturasACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }                                    


// const pasaralturasACms = persona =>({
//     ...persona,
//     altura: persona.altura * 100
  
// }) 
                            

// var personascms = personas.map(pasaralturasACms)
// console.log(personascms)




// -----------------------   filtrar una array --------------------------

// const esalta = ({altura}) => altura > 6.5
// const espequeno = ({altura}) => altura < 6.4
 

// var personasaltas = personas.filter(esalta)
// var personaspequenas = personas.filter(espequeno)

// console.log(personaspequenas)
// console.log(personasaltas)

// -----------------------   desglosar una array --------------------------


// for (var i = 0; i < personas.length; i++) { 
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura} mts`)
// }


// -----------------------   reducir una array --------------------------


// const reducer = (acum, {cantidaddelibros}) =>  acum + cantidaddelibros

// var totaldelibro = personas.reduce(reducer, 0)
// console.log(`En total todos tiene ${totaldelibro} libros`)


// --------------------------------------------  CLASES  --------------------------------------------

// class Persona{

//     constructor(nombre, apellido, altura){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.altura = altura

//     }
//     saludar(fn){
//         var {nombre, apellido, altura} = this
//         console.log(`hola,me llamo ${nombre} ${apellido} y mi edad es ${altura}`)
//         if(fn){
//             fn(this.nombre,this.apellido, false)

//         }
//     }

//     soyalto(){
//         return this.altura > 1.80
//     }

    
// }

// class Desarrolador extends Persona{
//     constructor(nombre, apellido, altura){
//         super(nombre, apellido, altura)
//     }

//     saludar(fn){
//         var nombre = nombre
//         var apellido = apellido
//         var {nombre,apellido} = this 
//         console.log(`hola soy ${nombre} ${apellido} y soy programdore`)
//         if(fn){
//             fn(nombre,apellido, true)

//         }
//     }

// }

// function respondersaludo(nombre,apellido, esDev){
//     console.log(`buen dia ${nombre} ${apellido}`)
//     if(esDev){
//         console.log(`A mira no sabia que eras desarrolladore`)
//     }
// }


// var marc = new Persona('marc', 'albert', 1.67)
// var erika = new Persona('erika', 'saela', 1.87)
// var mar = new Desarrolador('mar', 'soria', 1.67)

// marc.saludar()
// erika.saludar(respondersaludo)
// mar.saludar(respondersaludo)


// --------------------------------------------  CALLBACKS  --------------------------------------------

