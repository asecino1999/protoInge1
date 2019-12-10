interface User  {
    userid:number,
    username:string,
    totalPoints:number,
    pokedex:Pokedex[],
    retodex:reto[]
} 

interface Pokedex{
    name:string,
    quatity:number
} 
interface reto {
    question:string,
    answer:string,
    quantity:number,
    last_seen:Date
}

export {User, reto,Pokedex }

