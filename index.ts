import * as express from 'express'

import { Application } from 'express';


import poke from  './pokerequest';
import user from './userrequest'
import {User} from './user'
import {Pokemon, pokeRound} from './pokemon'

class App {
    public app: Application
    public port: number
    constructor(port: number, midelContorler:express.Router  ,app?: Application) {
        this.app = (!app) ? express() : app
        
        this.app.use('/',midelContorler)
        
        this.port = port;

    }
    ActualizarMapa(){
        // definir nuevas posion de los poquemones 
    } 


    public listen() {

        setInterval(this.ActualizarMapa,1000*60*60*24)// se actualiza el mapa cada 24 horas 

        this.app.listen(this.port, () => {
            console.log("listening http://localhost:" + this.port);
        })
    }
}


class MidelContorler  {
    public router:express.Router;
    constructor(){
        this.router=express.Router()
        this.rutas();
    } 

    searchUserById (id:number):User{
        // buscar User 


        // ejemplo de lo que debe retornar  user 
        return {userid:1,username:"user",totalPoints:1,pokedex:[], retodex:[]} 
    }
    searchRoundPokemon(x:number,y:number):pokeRound{
        // buscar o generar los pokemon cercanos a x , y 

        // enviar respiesta 
        return {nearest:[] }
    }

    


    rutas (){
        this.router.get('/poke',(req,res)=>{
            console.log(poke)
            res.json(poke)
        })
        this.router.get('/user',(req,res)=>{
            console.log(user)
            res.json(user)
        })

        // retorna datos del uusario 
        this.router.get('/userid/:id',(req,res)=>{
            var id = parseInt(req.params.id,10)
            var user:User=this.searchUserById(id)
            res.json(user)
        })
        // retorna pokemones cercanos 
        this.router.get('/pokeround/:x&:y',(req,res)=>{
            var x:number = parseInt(req.params.x)
            var y:number = parseInt(req.params.y)
            var nearst:pokeRound= this.searchRoundPokemon(x,y)

            res.json(nearst)
        })

        
    }


}
(new App(8080, new MidelContorler().router)).listen()