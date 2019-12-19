import { Database } from './Database';
import { User } from './user';
import { Response } from 'express';
import { isUndefined } from 'util';
import { rejects } from 'assert';
import axios from 'axios'

class statusErr {
    status: any
    constructor(err: any) {
        this.status = err
    }
}
class statusOk {
    status: 'ok'
    data: any
    constructor(data: any) {
        this.status = 'ok'
        this.data = data;
    }
}


var j = {
    "problemGameId": "453vHeB4YopbYxXAq",
    "problemName": "asdfa",
    "problemDescription": "gafgsdfgsdfg",
    "checker": [
        {
            "answer": "sdfgsdfg",
            "correct": true
        },
        {
            "answer": "sdfgsdf",
            "correct": false
        },
        {
            "answer": "gsdfg",
            "correct": false
        },
        {
            "answer": "sdfgsd",
            "correct": false
        },
        {
            "answer": "fgsdfgsdfg",
            "correct": false
        }
    ],
    "level": 1
}


export class Handlers {
    database: Database
    constructor() {
        this.database = new Database()
    }
    arrayNoVoid(value: any): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            if ((value instanceof Array) && !isUndefined(value[0])) resolve(value)
            else reject({ value, err: "no es del tipo array o esta vacio " })
        })
    }
    isTypeProm<T>(value: any, tipo: T): Promise<T> {
        return new Promise((resolve, reject) => {
            typeof (value) === typeof (tipo) ? resolve(value) : reject(value + " no es del tipo " + typeof (tipo))
        })
    }
    getNude(data: any) {// le quita el tipo espcial que tiene las repsuestas de mysql 
        return JSON.parse(JSON.stringify(data))
    }
    sendUser(res: Response, user: any) {
        res.json(new statusOk(user))
    }
    sendError(res: Response, status: any) {
        res.json(new statusErr(status))
    }
    GetUserByUsername(username: string): Promise<any> {
        return this.database.GetUserByUsername(username)
    }
    setRetodex(id_pregunta: number, user: any): Promise<any> {
        if (!isUndefined(user.id)) Promise.reject({ err: "user has no id" })
        return this.database.setRetodex(id_pregunta, user.id, (Number(new Date())))
    }
    SetRetodex(res: Response, username: string, id_pregunta: number) {
        this.GetUserByUsername(username)
            .then((user) => this.setRetodex(id_pregunta, user.user))
            .then(() => this.GetUserByUsername(username))
            .then((user) => this.sendUser(res, user))
            .catch((err) => { this.sendError(res, { err, error: "error en retodex" }); return err })
            .then((err) => console.log("we", err))
        //new Promisese
    }
    setPokedex(id_pregunta: number, id_user: number, result: boolean): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (result) {
                this.database.setPokedex(id_pregunta, id_user, (Number(new Date())))
                    .then(() => resolve(true))
                    .catch((err) => reject(err))
            } else resolve(false)

        })


    }
    validateAnswer(results: Array<any>, respuesta: string): Promise<{ resultado: boolean, user: any }> {
        return new Promise((resolve, reject) => {
            this.arrayNoVoid(results[1])
                .then((value) => this.isTypeProm<string>(value[0].respuesta, ""))
                .then((respuestaCorrecta) => respuestaCorrecta === respuesta)
                .then((result) => resolve({ resultado: result, user: results[0] }))
                .catch((err) => reject(err))
        })
    }
    answerToSetPokedex(resultado: boolean, username: string) {
        return new Promise((resolve, reject) => {
            this.GetUserByUsername(username)
                .then((user) => resolve({ user: user, resultado: resultado }))
                .catch((err) => reject(err))
        })
    }
    SetPokedex(res: Response, username: string, id_pregunta: number, respuesta: string) {
        Promise.all([this.GetUserByUsername(username), this.database.getAnswer(id_pregunta)])
            .then((results) => { console.log("capture ------", results); return results })
            .then((results) => this.validateAnswer(results, respuesta))
            .then((results) => this.setPokedex(id_pregunta, results.user.user.id, results.resultado))
            .then((reaultado) => this.answerToSetPokedex(reaultado, username))
            .then((answer) => res.json(new statusOk(answer)))
            .catch((err) => { res.json(new statusErr({ err, error: "o ser pokedex" })); return err })
        //.then((err)=>console.log(err))
    }
    SetUser(res: Response, nombre: string, apellido: string, username: string, password: string, empresa: string) {
        this.database.setUser(nombre, apellido, username, password, empresa)
            .then((user) => res.json(new statusOk(user)))
            .catch((err) => res.json(new statusErr(err)))
    }
    SetPregunta(res: Response, empresa: string, enunciado: string, respuesta: string) {
        this.database.setPregunta(empresa, enunciado, respuesta, 60 * 60 * 1000)
            .then(() => res.json(new statusOk("preguta se inserto")))
            .catch((err) => res.json(new statusErr(err)))
    }
    GetPokemones(res: Response, empresa: string) {
        this.database.GetPreguntas(empresa)
            .then((result) => res.json(new statusOk(result)))
            .catch((err) => res.json(new statusErr(err)))
    }
    sendUserd(res: Response, empresa: string) {
        this.database.getUsers(empresa)
            
            .then((re) => res.json(new statusOk(re)))
            .catch((err) => res.json(new statusErr(err)))

    }
    makeReq(res: Response) {
        axios.post('http://10.10.0.197:3000/getGameByName', 'gameName=GAME002')
            .then((res) => { console.log(res.data); return this.getNude(res.data) })
            .then((res) => { console.log(res.problemList); return res })
            .then((re) => res.json(new statusOk(re)))
            .catch((err) => res.json(new statusErr(err)))
    }
}