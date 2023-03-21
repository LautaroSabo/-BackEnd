const sumar = (numero1,numero2) => numero1+numero2
const restar = (numero1 , numero2) => numero1-numero2;
const multiplicar = (numero1,numero2) => numero1 * numero2
const dividir = (numero1,numero2)=> numero1 % numero2

const realizarOperacion = (numero2,numero1,callBck)=>{
    console.log('realizo la operacion que recibo!!')
    const resultado = callBck(numero1,numero2) //es la funcion que recibo
    console.log(`el resultado de la opereacion enviada es: ${resultado}`)
}

//realizarOperacion(1,22,sumar)
//realizarOperacion(1,22,restar)
realizarOperacion(2,22,multiplicar)

