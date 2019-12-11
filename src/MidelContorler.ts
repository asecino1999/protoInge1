
import poke from './pokerequest';
import user from './userrequest'
import { User } from './user'
import { Pokemon, pokeRound } from './pokemon'
import { Application, Router } from 'express';
import { Database } from './Database';

class MidelContorler {
    public router: Router;
    public database: Database
    constructor() {
        this.router = Router()
        this.rutas();
        this.database = new Database()
    }
    setdatabase(database: Database) {
        this.database = database
    }
    searchUserById(id: number): User {
        // buscar User 
        this.database.getUser()

        // ejemplo de lo que debe retornar  user 
        return { userid: 1, username: "user", totalPoints: 1, pokedex: [{ name: "pika", quatity: 5 }], retodex: [] }
    }
    searchRoundPokemon(x: number, y: number): pokeRound {
        // buscar o generar los pokemon cercanos a x , y 
        this.database.getPokemonRound()
        // enviar respiesta 
        return {
            nearest: [
                { pokemonID: 1, name: "", points: 1, time: 2000, position: { x: 1, y: 2 }, question: "", answer: "" }
            ]
        }
    }




    rutas() {
        this.router.get('/poke', (req, res) => {
            console.log(poke)

            res.json(poke)
        })
        this.router.get('/user', (req, res) => {
            console.log(user)
            res.json(user)
        })

        // retorna datos del uusario 
        this.router.get('/userid/:id', (req, res) => {
            var id = parseInt(req.params.id, 10)
            var user: User = this.searchUserById(id)
            res.json(user)
        })
        // retorna pokemones cercanos 
        this.router.get('/pokeround/:x&:y', (req, res) => {
            var x: number = parseInt(req.params.x)
            var y: number = parseInt(req.params.y)
            var nearst: pokeRound = this.searchRoundPokemon(x, y)

            res.json(nearst)
        })
        
        this.router.post('/createEmpresa', (req, res) => {
            var nombre: string = req.body.nombre;
            var password: string = req.body.password;
            var empresa: string = req.body.empresa;
            var rango:number[]=req.body.rango;
            // guardar compania 
            this.database.setCompany()
            // guardar usaer 
            this.database.setUserAdmin()
            // obtener 
            this.database.getUserAdmin()
            res.json({})
        })
        this.router.post('/loginAdmin', (req, res) => {
            var nombre: string = req.body.nombre
            var password: string = req.body.password
            // verificar datos 
            this.database.getUserAdmin()
            res.json({
                status: "ok",
                token: "123"
            })
        })
        this.router.post('/loginUser', (req, res) => {
            var nombre: string = req.body.nombre
            var password: string = req.body.password
            // verificar datos 

            // obtener datos del usar 
            var id = 1
            var user: User = this.searchUserById(id)

            res.json({
                status: "ok",
                token: "123",
                user: user
            })
        })

        this.router.post('/capture', (req, res) => {
            var nombre: string = req.body.nombre
            // posibilidades 
            var password: string = req.body.password
            var token: string = req.body.token
            var respuesta: string = req.body.answer
            // verificar datos y  respuesta
            // obtener datos del usar 
            this.database.getAnswer()
            this.database.setCapture()
            var id = 1
            var user: User = this.searchUserById(id)

            res.json({
                status: "ok",
                resultado: true,
                user: user
            })
        })
        this.router.post('/getPokemon', (req, res) => {
            var position = req.body.position
            // buscar poquemones alrededor 
            var round: pokeRound = this.searchRoundPokemon(position.x, position.y)
            res.json(
                round
            )
        })
        this.router.post('/getData', (req, res) => {
            var nombre: string = req.body.nombre
            // posibilidades 
            var password: string = req.body.password
            var token: string = req.body.token
            // buscar poquemones alrededor 

            res.json(
                {}
            )
        })




    }


}



export { MidelContorler }