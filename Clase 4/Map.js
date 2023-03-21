//Map

const valoresOriginales = [1,2,3,4,5]

//const nuevoArreglo = valoresOriginales.map(x => x + 1)

//console.log(nuevoArreglo)

const funcionPar = (valor) =>{
    if(valor%2 === 0){
        return valor
    }else{
        return 'no es par'
    }
}

//const valoresPar = valoresOriginales.map(funcionPar)
//let resultado = funcionPar(2)
//console.log(valoresPar)

function miFuncionMap(arr,funcionCallBack){
    const nuevoArreglo = []

    for(let i = 0; i < arr.length; i ++){
        let nuevoValor = funcionCallBack(arr[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}

//const valoresPar = miFuncionMap(valoresOriginales,funcionPar)
//console.log(valoresPar);

Array.prototype.miMap = function(funcionCallBack){

    const nuevoArreglo = []

    for(let i = 0; i < this.length; i ++){
        let nuevoValor = funcionCallBack(this[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}

const valoresPar = valoresOriginales.miMap(funcionPar)

console.log(valoresPar)