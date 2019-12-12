import express from 'express';
import { Application, Router } from 'express';

import cors from 'cors';
//import poke from './pokerequest';
//import user from './userrequest'
//import { User } from './user'
//import { Pokemon, pokeRound } from './pokemon'




import {
    json,
    raw,
    text,
    urlencoded,
} from 'body-parser';


class App {
    public app: Application | null
    public port: number
    constructor() {
        this.app = null
        this.port = 8080;
    }
    
    setPort(port: number) {
        this.port = port
    }
    setRouter(midelContorler: Router) {
        if (this.app !== null)
            this.app.use(midelContorler)
    }
    setApp(app:Application){
        this.app=app;
    }
    public listen() {
        
        if (this.app !== null){
            
            this.app.listen(this.port, () => {
                console.log("listening http://localhost:" + this.port);
            })
        }else{
            console.log(" app  not setted ")
            process.exit(0)
        }
    }
}


var app = express()

app.use(json());
app.use(raw());
app.use(text());
app.use(urlencoded());
app.use(cors())

//var port =8080
//var portServer=port


export { App, app }
//var aplication=new App(portServer,router,app)
//aplication.listen()
//(new App(8080, new MidelContorler().router,app)).listen()
