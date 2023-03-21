const persona = {
    nombre : 'Luis', 
    email: 'luis@gmail.com',
    edad: 23
}


//Spreand

let { nombre , email } = persona;

//console.log(persona.nombre);
//console.log(nombre);


let persona2 = {...persona}; //SPREAND '{...persona}'

persona2.email= 'pedro@gmail.com'

console.log(persona)//Juan@gmail.com
console.log(persona2)//pedro@gmail.com