

import {createConnection} from 'mysql';
var conection=createConnection({
    host:'localhost',
    user:'user',
    password:'password',
    database:'pokeuni'
})
conection.connect()
conection.query("show tables",(err,res)=>{
    console.log(res)
})


conection.end()
class Database{
    setUser(){

    }
    setUserAdmin(){

    }
    setNewPokemonPosition(){

    }
    setCompany(){

    }
    setCapture(){

    }
    getPokemonRound(){

    }
    getUser(){

    }
    getUserAdmin(){

    }
    getAnswer(){

    }
    

}
export {Database}