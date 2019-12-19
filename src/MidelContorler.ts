
import poke from './pokerequest';
import user from './userrequest'
import { User } from './user'
import { Pokemon, pokeRound } from './pokemon'
import { Application, Router } from 'express';
import { Database } from './Database';
import { isUndefined } from 'util';
import { Handlers } from './Handlers';

class MidelContorler {
    public router: Router;
    public database: Database;
    public handler:Handlers;
    constructor() {
        this.router = Router()
        this.rutas();
        this.database = new Database()
        this.handler=new Handlers()
        //setInterval(this.ActualizarMapa,1000*60*60*24)// se actualiza el mapa cada 24 horas 
    }
    ActualizarMapa() {
        // definir nuevas posion de los poquemones 
        // obtener lista de empresa junto con su rango 
        // para cada empresa calcular 50 valores aleatorios 


    }


    setdatabase(database: Database) {
        this.database = database
    }
    searchUserById(id: number) {
        // buscar User 
        //this.database.getUser()

        //return this.database.getUserByUsername();
        // ejemplo de lo que debe retornar  user 
        return { userid: 1, username: "user", totalPoints: 1, pokedex: [{ name: "pika", quatity: 5 }], retodex: [] }
    }
    searchRoundPokemon(x: number, y: number): pokeRound {
        // buscar o generar los pokemon cercanos a x , y 
        //this.database.getPokemonRound()
        // enviar respiesta 
        return {
            nearest: [
                { pokemonID: 1, name: "", points: 1, time: 2000, position: { x: 1, y: 2 }, question: "", answer: "" }
            ]
        }
    }




    rutas() {
        this.router.get('/poke', (req, res) => {
            console.log({
                status: 'ok',
                data: poke
            })

            res.json({ status: "ok", poke: poke })
        })
        this.router.get('/user', (req, res) => {
            console.log(user)
            res.json({ status: "ok", data: user })
        })

        // retorna datos del uusario 
        this.router.get('/userid/:id', (req, res) => {

            var id = parseInt(req.params.id, 10)
            //var user: User = this.searchUserById(id)
            res.json({ status: 'ok', data: "user no more avalibe " })
        })
        // retorna pokemones cercanos 
        this.router.get('/pokeround/:x&:y&:empresa', (req, res) => {
            var x: number = parseInt(req.params.x)
            var y: number = parseInt(req.params.y)
            var empresa:string=req.params.empresa
            console.log("routnder")
            this.handler.GetPokemones(res,empresa)
        })
        
        this.router.post('/createUser', (req, res, next) => {
            var username: string = req.body.username;
            var password: string = req.body.password;
            var empresa: string = req.body.empresa;
            var nombre: string = req.body.nombre;
            var apellido: string = req.body.apellido;
            //console.log(username)
            var un = isUndefined(username) || isUndefined(password) || isUndefined(empresa) || isUndefined(nombre) || isUndefined(apellido)
            var vacio = () => username === "" || password === "" || empresa === "" || apellido === "" || nombre === ""
            //console.log(vacio())
            if (un || vacio()) {
                console.log("error ")
                res.json({ status: "err" })
            } else {
                // guardar usuario 
                this.handler.SetUser(res,nombre, apellido, username, password, empresa)
                /*
                this.database.setUser(nombre, apellido, username, password, empresa)
                    .then((result) => {
                        res.json({
                            status: "ok",
                            database: result
                        })
                    }).catch((err) => {
                        res.json({status:err})
                    });*/
            }

        })
        this.router.post('/createEmpresa', (req, res, next) => {
            var username: string = req.body.username;
            var password: string = req.body.password;
            var empresa: string = req.body.empresa;
            var nombre: string = req.body.nombre;
            var apellido: string = req.body.apellido;

            var rango: number[] = req.body.rango;
            var un = isUndefined(username) || isUndefined(password) || isUndefined(empresa) || isUndefined(rango) || isUndefined(nombre) || isUndefined(apellido)
            var vacio = () => (username === "" || password === "" || empresa === "" || rango.length == 0 || apellido === "" || nombre === "")
            if (un || vacio()) {
                console.log("error no params ")
                res.json({ status: "err" })

            } else {
                console.log(username, password, empresa, rango)
                // guardar compania 
                this.database.setEmpresa(empresa, nombre, apellido, username, password, 0, 0)
                    .then((result) => {
                        res.json({ status: "ok" })
                    }).catch((err) => {
                        res.json({ status: err })
                    });
                // guardar usaer 
                //this.database.setUserAdmin(nombre, apellido, username, password,0,0,Math.floor(Math.random() * 100000000) + 1  )
                // obtener 

            }
        })
        this.router.post('/loginAdmin', (req, res) => {
            var nombre: string = req.body.nombre
            var password: string = req.body.password
            // verificar datos 
            this.database.getUserAdmin()
            res.json({
                status: "ok",
                data: {
                    token: "123"
                }
            })
        })
        this.router.post('/loginUser', (req, res) => {
            //if(!req.body.username)res.json({ status: " no username " })
            var userName: String = new String(req.body.username)
            var password: string = req.body.password
            // verificar datos 

            // obtener datos del usar 
            var id = 1
            //console.log("geting user -------------------")
            //var user: User = this.searchUserById(id)
            this.database.GetUserByUsername(userName).then((result) => {
                res.json({
                    status: "ok",
                    data: {
                        token: "123",
                        user: result
                    }
                })
            }).catch((err) => {
                res.json({ status: err })

            });

        })
        this.router.post('/save/retodex/pokemon', (req, res) => {// /ver -> /save/retodex/pokemon
            var username =  String(req.body.username)
            // posibilidades 
            var password: string = req.body.password
            var token: string = req.body.token
            var respuesta: string = req.body.answer
            var id_pregunta: number = req.body.id_pregunta
            // verificar datos y  respuesta
            // obtener datos del usar 
            //this.database.getAnswer()
            this.handler.SetRetodex(res,username,id_pregunta)
            
        })
        this.router.post('/capture', (req, res) => {
            var username =  String(req.body.username)
            // posibilidades 
            var password: string = req.body.password
            var token: string = req.body.token
            var respuesta: string = req.body.respuesta
            var id_pregunta: number = req.body.id_pregunta
            // verificar datos y  respuesta
            // obtener datos del usar 
            //this.database.getAnswer()
            this.handler.SetPokedex(res,username,id_pregunta,respuesta)
            /*
            this.database.GetUserByUsername(username)
                .then((result: any) => {
                    this.database.getAnswer(id_pregunta)
                        .then((result2) => {
                            if (result2 instanceof Array) {
                                var respCor = result2[0].respuesta;
                                console.log(respCor)
                                if (respCor === respuesta) {
                                    console.log("inicia "+respCor+"console "+result.user[0].id)
                                    this.database.setPokedex(id_pregunta, result.user[0].id, (Number(new Date())))
                                        .then((result3) => {
                                            this.database.GetUserByUsername(username)
                                                .then((result4) =>
                                                    res.json({
                                                        status: "ok",
                                                        data: {
                                                            user: result4
                                                        }
                                                    })
                                                )
                                                .catch((err) => {
                                                    res.json({
                                                        status: err,
                                                    })
                                                });
                                        })
                                        .catch((err) => {
                                            res.json({
                                                status: err,
                                            })
                                        });
                                } else {
                                    res.json({
                                        status: "resp increcta "+respCor+ " "+respuesta,
                                    })
                                }
                            }
                        }).catch((err) => {
                            res.json({
                                status: err,
                            })
                        });
                }).catch((err) => {
                    res.json({
                        status: err,
                    })
                });*/

        })
        this.router.post('/getPokemon', (req, res) => {
            var position = req.body.position
            // buscar poquemones alrededor 
            //var round: pokeRound = this.searchRoundPokemon(position.x, position.y)
            res.json(
                { status: 'ok', data: {} }
            )
        })
        this.router.post('/getData', (req, res) => {
            var nombre: string = req.body.nombre
            // posibilidades 
            var password: string = req.body.password
            var token: string = req.body.token
            // buscar poquemones alrededor 

            res.json(
                {
                    status: 'ok'
                }
            )
        })
        this.router.post('/getRanking', (req, res) => {
            var empresa = req.body.empresa;
            
            this.handler.sendUserd(res,empresa)

            /*
            res.json({
                status: 'ok',
                data: {
                    
                    jugador: [{
                        urlImage: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg",
                        nombre: "nombre del jugador",
                        id:1,
                        puntaje: 20
                    }, {
                        urlImage: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg",
                        nombre: "nombre del jugador",
                        puntaje: 30,
                        id:2
                    }]
                }
            })
            */
        })
        this.router.post('/set/pregunta', (req, res) => {
            var empresa = req.body.empresa;
            var enunciado = req.body.enunciado;
            var respuesta = req.body.respuesta
            this.handler.SetPregunta(res,empresa,enunciado,respuesta)
        })
        this.router.post('/set/pokemon', (req, res) => {
            var empresa = req.body.empresa;
            var enunciado = req.body.enunciado;
            var respuesta = req.body.respuesta
            this.handler.SetPregunta(res,empresa,enunciado,respuesta)
        })
        
        this.router.post('/use/api',(req,res)=>{
            console.log("resiving api ")
            //res.json({})
            this.handler.makeReq(res)
        })

    }


}



export { MidelContorler }