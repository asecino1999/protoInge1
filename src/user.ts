interface Datauser {
    id: number,
    userName: string,
    totalPoints: number,
    nombre: string,
    apellidos: string,
    puntaje: number,
    nivel: number,
    id_empresa: number,
    toke: number,
    tipo: string,
    urlFoto: string
}
interface User {
    user: Datauser
    pokedex: Pokedex[],
    retodex: reto[]
}

interface Pokedex {
    name: string,
    quatity: number
}
interface reto {
    id: number
    question: string,
    answer: string,
    quantity: number,
    last_seen: Date
}
interface pregunta {
    id: number,
    id_empresa: number,
    enunciado: string,
    respuesta: string,
    tiempo: number
}
export { User, reto, Pokedex, Datauser,pregunta }

