class TickeyManager{
    constructor(){
        this.eventos = []
    }

    static precioBaseDeGanancia = 1.15;

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre,lugar,precio){
        
        let id_evento = (this.eventos).length;

        let evento = {
            nombre: nombre,
            lugar: lugar,
            precio: precio * TickeyManager.precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++id_evento,
        }

        this.eventos.push(evento);
        return this.eventos;
    }
    
    traerEvento(id_evento){
        let evento = this.eventos.find(evento => evento.id === id_evento) 

        if(evento){
            return evento;
        }else{
            return null
        }
    }

    estaRegistrado(id_evento,id_usuario){
        let evento = this.traerEvento(id_evento);
        if(evento == null){
            return 'El evento no existe'
        }
        let registro = evento.participantes.find(idParticipante => idParticipante === id_usuario)
        if(registro == null ){
            return true
        }else{
            return false
        }
    }

    agregarUsuario(id_evento,id_usuario){
        
        let evento = this.traerEvento(id_evento)
        if(evento==null){
            return 'El evento no existe'
        }
        if(this.estaRegistrado(id_evento,id_usuario)){
            evento.participantes.push(id_usuario)
            return evento
        }else{
            return 'La persona ya esta registrada'
        }
    }

    ponerEventoEnGira(id_evento,nLocalidad,nFecha){
        let evento = this.traerEvento(id_evento)
        let contEventos = (this.getEventos()).length;
        if(!evento){
            return 'El evento no Existe'
        }
        let nuevoEvento = {...evento};
        nuevoEvento.lugar = nLocalidad;
        nuevoEvento.fecha = nFecha;
        nuevoEvento.id = ++contEventos
        nuevoEvento.participantes = []
        return this.eventos
    }
}

const tickeyManager = new TickeyManager()
let eventos = tickeyManager.agregarEvento('Baradero Rock','Baradero',1500)

console.log(eventos)