interface Pokemon{
    pokemonID:number,
    name:string,
    points:number,
    time:number,
    position:position,
    question:string,
    answer:string
} 

interface position {
    x:number,
    y:number
}
interface pokeRound {
    nearest:Pokemon[]
} 


export { Pokemon ,position , pokeRound}
