class Contador{
    constructor(nombre){
        this.nombre = nombre
        this.cuentaIndividual = 0
    }

    static contadorGlobal = 0

    getResponsable(){
        return this.nombre
    }
    getCuentaIndividual(){
        return this.cuentaIndividual
    }
    getCuentaGlobal(){
        return this.contadorGlobal
    }
    contar(){
        this.cuentaIndividual ++
        Contador.contadorGlobal++
    }
}

const contadorJulio = new Contador ('Julio')

console.log(contadorJulio)

contadorJulio.contar()

console.log(contadorJulio)

