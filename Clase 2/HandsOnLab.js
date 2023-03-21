

function mostrarLista (lista){

    if(lista.length == 0){
        return`La lista esta Vacia.`
    }
    for(let i = 0; i < lista.length ; i++){

        console.log(`El elemento es: ${lista[i]}`)
    }
    console.log(`la longitud de la lista es: ${lista.length}`)
}

let arr1 = ['Juan','Luis','Pedro',]
let arr2 = []


mostrarLista(arr1)
