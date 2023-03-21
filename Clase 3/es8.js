const usuario = {
     nombre : 'Luis', 
     email: 'luis@gmail.com',
     edad: 23
}

//Object.entries
let entradas = Object.entries(usuario)

//console.log(entradas)
/////////////////////////////////////

//Object.values
//let valores = Object.values(usuario)

//console.log(valores);     
/////////////////////////////////////

//Object.keys
let keys = Object.keys(usuario)

//console.log(keys)
/////////////////////////////////////

//Reduce
//const suma = [10,20,30,10,10,10,10].reduce(function(a,b){return a + b})
//console.log(suma)

const Impuesto = {
    iva : 15, 
    iibb: 50,
    otros: 23
}

const valores = object.values(Impuesto)
const suma = valores.reduce(function(a,b){return a + b})
console.log(suma)