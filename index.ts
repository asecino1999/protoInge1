import * as express from 'express'

import { Application } from 'express';


import poke from  './pokerequest';
import user from './userrequest'
import {User} from './user'
import {Pokemon, pokeRound} from './pokemon'

import {
    json,
    raw,
    text,
    urlencoded,
} from 'body-parser';



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
        return {userid:1,username:"user",totalPoints:1,pokedex:[{name:"pika",quatity:5}], retodex:[]} 
    }
    searchRoundPokemon(x:number,y:number):pokeRound{
        // buscar o generar los pokemon cercanos a x , y 

        // enviar respiesta 
        return {nearest:[
            {pokemonID:1, name:"", points:1, time:2000,position:{x:1,y:2}, question:"", answer:""}
        ] }
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
        this.router.post('/createEmpresa',(req,res)=>{
            var nombre:string=req.body.nombre
            var password:string=req.body.password
            var empresa:string=req.body.empresa
            // guardar user admin y empresa 
            
            res.json ({})
        })
        this.router.post('/createEmpresa',(req,res)=>{
            var nombre:string=req.body.nombre
            var password:string=req.body.password
            var empresa:string=req.body.empresa
            // guardar usaer 
            res.json ({})
        })
        this.router.post('/loginAdmin',(req,res)=>{
            var nombre:string=req.body.nombre
            var password:string=req.body.password
            // verificar datos 

            res.json({
                status:"ok",
                token:"123"
            })
        })
        this.router.post('/loginUser',(req,res)=>{
            var nombre:string=req.body.nombre
            var password:string=req.body.password
            // verificar datos 

            // obtener datos del usar 
            var id=1
            var user:User=this.searchUserById(id)

            res.json({
                status:"ok",
                token:"123",
                user:user
            })
        })

        this.router.post('/capture',(req,res)=>{
            var nombre:string=req.body.nombre
            // posibilidades 
            var password:string=req.body.password
            var token : string = req.body.token
            var respuesta : string=req.body.token
            // verificar datos y  respuesta

            // obtener datos del usar 

            var id=1
            var user:User=this.searchUserById(id)

            res.json({
                status:"ok",
                resultado:true,
                user:user
            })
        })
        this.router.post('/getPokemon',(req,res)=>{
            var position=req.body.position
            // buscar poquemones alrededor 
            var round:  pokeRound=this.searchRoundPokemon(position.x,position.y)
            res.json(
                round
            )
        })
        this.router.post('/getData',(req,res)=>{
            var nombre:string=req.body.nombre
            // posibilidades 
            var password:string=req.body.password
            var token : string = req.body.token
            // buscar poquemones alrededor 
            
            res.json(
                {}
            )
        })




    }


}

var app=express()

app.use(json());
app.use(raw());
app.use(text());
app.use(urlencoded());


var port =8080
var portServer=80
var router=new MidelContorler().router
var aplication=new App(portServer,router,app)
aplication.listen()
//(new App(8080, new MidelContorler().router,app)).listen()
