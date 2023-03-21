//TRIM
const texto = ' Texto de ejemplo '

//console.log(texto.trim()) Saca el espaciado del texto delante y final

//let valor = texto.trimStart() Saca el espaciado del texto inicial
//let valor = texto.trimEnd() Saca el espaciado del texto final

let valor = texto.trim(); //Mas usado
//console.log(valor)

const valores = [1,2,[3,[4]],5,[6,7],8,9]
let flat =valores.flat().flat();

console.log(flat)