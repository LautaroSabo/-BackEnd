

//calback

const contarLetras = () => {
    let cantLetras = letras.trim().length;
    console.log(cantLetras)
}

const contarElementos = (arr) => {
    let cantElementos = arr.length;
    console.log(cantElementos)
}

function funcionDerivada(valor , funcionCallback){
    funcionCallback(valor)
}

let arr = [1,2,3,4,5]
let letras = ['PedroCamina']

funcionDerivada(arr,contarElementos)