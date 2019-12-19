

import { createConnection, MysqlError } from 'mysql';
import { isUndefined, isString, isNumber } from 'util';
import { rejects } from 'assert';
import { User, Datauser, reto, Pokedex, pregunta } from './user';
import { resolve } from 'dns';
//import { rejects } from 'assert';
//import { resolve } from 'dns';

var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()

interface retoPoke {
    reto: reto[];
    pokedex: Pokedex[]
}

var pokenames: string[] = ["pikacho", "ratata", "goku", "veyota"]
class Database {
    // manejar las cpsultas 

    query(consulta: string): Promise<{}> {
        return new Promise((resolve, reject) => {
            conection.query(consulta, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            })
        })
    }

    arrayNoVoid(value: any): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            if ((value instanceof Array) && !isUndefined(value[0])) resolve(value)
            else reject({ value, err: "no es del tipo array o esta vacio " })
        })
    }
    arrayNoVoid2<T>(value: any): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            if ((value instanceof Array) && !isUndefined(value[0])) resolve(value)
            else reject({ value, err: "no es del tipo array o esta vacio " })
        })
    }
    getNude(data: any) {// le quita el tipo espcial que tiene las repsuestas de mysql 
        return JSON.parse(JSON.stringify(data))
    }
    isTypeProm<T>(value: any, tipo: T): Promise<T> {
        return new Promise((resolve, reject) => {
            typeof (value) === typeof (tipo) ? resolve(value) : reject(value + " no es del tipo " + typeof (tipo))
        })
    }

    getIDEmpresaByName(name: string): Promise<number> {
        return new Promise((resolve, reject) => {
            var consulta = 'select id from empresa as e where e.nombreEmpresa="' + name + '"';
            var failure = (res: any, consulta: any) => ({ status: "la consulta retorno un resultado inesperado", err: res, consulta: consulta })
            this.query(consulta)
                .then((res) => this.getNude(res))
                .then((res) => this.arrayNoVoid(res))
                .then((res) => this.isTypeProm<number>(res[0].id, 4))
                .then((id) => resolve(id))
                .catch((err) => reject(failure(err, consulta)))
        })
    }



    setUserAdmin(nombre: string, apellido: string, username: string, password: string, puntaje: Number, nivel: Number, id_empresa: Number | any): Promise<{}> {
        var tipo: string = "administrador"
        const valRandom = Math.floor(Math.random() * 100000000);
        var url = "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg"
        const consulta = 'insert into usuarios (nombre,apellidos,username,password,puntaje,nivel,id_empresa,token,tipo,urlFoto)' +
            ' values ("' + nombre + '","' + apellido + '","' + username + '","' + password + '","' + puntaje + '","' + nivel + '","' + id_empresa + '", "' + valRandom + '","admin","' + url + '"   ); ';
        //console.log("set admin", consulta)
        return this.query(consulta)
    }

    setEmpresa(nombreEmpresa: string, nombre: string, apellido: string, username: string, password: string, puntaje: Number, nivel: Number): Promise<{}> {
        var con = 'insert into empresa (nombreEmpresa) values ("' + nombreEmpresa + '")'
        return new Promise((resolve, reject) => {
            this.query(con)
                .then((out) => this.getIDEmpresaByName(nombreEmpresa))
                .then((out) => this.setUserAdmin(nombre, apellido, username, password, puntaje, nivel, out))
                .then((out) => resolve(out))
                .catch((err) => reject(err))
        })
    }

    insertarUser(nombre: string, apellido: string, username: string, password: string, id_empresa: Number): Promise<{}> {
        //console.log(id_empresa)


        var url = "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg"
        const valRandom = Math.floor(Math.random() * 100000000);
        var consulta =
            'insert into usuarios (nombre,apellidos,username,password,puntaje,nivel,id_empresa,token,tipo,urlFoto) ' +
            'values ("' + nombre + '","' + apellido + '","' + username + '","' + password + '",' +
            0 + ',' + 0 + ',' + id_empresa + ', "' + valRandom + '", "trabajador","' + url + '"   ) ;'
        //console.log(consulta)
        return this.query(consulta)
    }


    setUser(nombre: string, apellido: string, username: string, password: string, empresa: string): Promise<{}> {
        return new Promise((resolve, reject) => {
            // buscar nombre de empresa 
            this.getIDEmpresaByName(empresa)
                .then((id_empresa: Number) => this.insertarUser(nombre, apellido, username, password, id_empresa))
                .then(() => this.GetUserByUsername(username))
                .then((out) => { console.log(out); resolve(out) })
                .catch((err) => { console.log(err); reject(err) })
            //var valrandom=

            //fdgd8646
        })
    }
    capturePokemon(id_pokemon: number, id_usuario: number, id_pregunta: number) {

        var setCapture = "update pokemones set  estado='capturado' where id=" + id_pokemon + ";"
        var inserPokemon = 'insert into pokedex (id_pokemon,id_usuario,id_pregunta) values ("' + id_pokemon + '","' + id_usuario + '","' + id_pregunta + '")';
        return new Promise((resolve, reject) => {
            Promise.all([this.query(setCapture), this.query(inserPokemon)])
                .then((result) => resolve(this.getNude(result)))
                .catch((err) => reject(err))
        })

    }
    deleteFromPokedex(id_retodex: number) {
        var borrarRetodex = "delete from retodex  where id=" + id_retodex;
        return this.query(borrarRetodex)
    }
    moveReto(retos: reto, id_pokemon: number, id_usuario: number, id_pregunta: number) {
        var borrarRetodex = (retos: Array<reto>) => "delete from retodex  where id=" + retos[0].id;
        return new Promise((resolve, reject) => {
            //if (!(retos instanceof Array) || isUndefined(retos[0])) reject({ err: " no encontro el pedido o request invalido " })
            this.arrayNoVoid(retos)
                .then((retos) => this.query(borrarRetodex(retos)))
                .then(() => this.capturePokemon(id_pokemon, id_usuario, id_pregunta))
                .then((out) => resolve(out))
                .catch((err) => { console.log(err); reject(err) })
        })
    }

    setPokedex(id_pokemon: number, id_usuario: number, id_pregunta: number) {
        
        var getRetodex = 'select p.id as id_pokemon , u.id as  id_usuario , r.id as id_retodex , r.id_pregunta ' +
            'from pokemones as p, retodex as r ,usuarios as u ' +
            'where  p.id_pregunta=r.id_pregunta AND  u.id= ' + id_usuario + ' AND r.id_usuario=u.id;'
        //console.log("this.setPokedex", getRetodex)
        return new Promise((resolve, reject) => {
            this.query(getRetodex)
                .then((out) => this.getNude(out))
                .then((retos) => this.moveReto(retos, id_pokemon, id_usuario, id_pregunta))
                .then((out) => resolve(out))
                .catch((err) => { console.log(err); reject({ err: err, consulta: getRetodex }) })
        })
        
    }





    setRetodex(id_pregunta: number, id_usuario: number, fecha_visto: number): Promise<{}> {
        return this.query('insert into retodex (id_pregunta,id_usuario,fecha_visto) values ("' + id_pregunta + '","' + id_usuario + '","' + fecha_visto + '")')
    }

    setPokemon(nombre: string, posX: number, posY: number, id_empresa: number, id_preguntas: any) {
        
        var consulta = (id_pregunta: any) => 'insert into pokemones (  nombre, posicionx   , posiciony ,   id_pregunta , estado ) ' +
            'values ("' + nombre + '",' + posX + ',' + posY + ',' + id_pregunta.id + ',"libre")'
        console.log("nombre",nombre)
        console.log("id pre",id_preguntas[0], isUndefined(id_preguntas[0]))
        return new Promise((resolve, reject) => {
            this.arrayNoVoid(id_preguntas)
                .then((id_preguntas) => id_preguntas[Math.floor(Math.random() * id_preguntas.length)])
                .then((id_pregunta) => consulta(id_pregunta))
                .then((con) => this.query(con))
                .then((res) => resolve(res))
                .catch((err) => { console.log(err); reject({ err: err, consulta: consulta("'pregunta_id'") }) })
        })
        //console.log("rewre",nombre,posX,posY,id_empresa)
        //console.log("erwerew",id_pregunta)

        //console.log(consulta)

    }

    SetPokemon(nombre: string, posX: number, posY: number, id_empresa: number) {
        console.log("\n Sert pokemon")

        return new Promise((resolve, reject) => {
            this.getIdsPreguntaBYIdEmpresa(id_empresa)
                .then((id_preguntas) => this.setPokemon(nombre, posX, posY, id_empresa, id_preguntas))
                .then((result) => resolve(result))
                .catch(err => reject(err))
        })

    }
    generatePokemon(nombreEmpresa: string, preguntas: pregunta[], nombres: string[], pos: Array<{ x: number, y: number }>) {
        return new Promise((resolve, reject) => {
            this.getIDEmpresaByName(nombreEmpresa)
                .then((id) => pos.map((ele, index) => this.setPokemon(nombres[index], ele.x, ele.y, id, preguntas)))
                .then((prom) => Promise.all(prom))
                .then(() => resolve({ status: "ok" }))
                .catch((err) => { console.log("error setiando rutas ", err); reject({ err, error: "error setiando rutas " }) })
        });
    }

    GeneratePokemon(nombreEmpresa: string) {
        let total = 10
        //console.log("####################################")

        let arr=Array.from(Array(10).keys())
        let pos = arr.map(() => ({ x: Math.random() * 100, y: Math.random() * 100 }))
        let nombres = (arr.map(():string => ((pokenames[Math.floor(Math.random() * pokenames.length)])+"1")))
        console.log("nombres *****s ", nombres)
        return new Promise((resolve, reject) => {
            this.GetPreguntas(nombreEmpresa)
                .then((res)=>{console.log("obtiejes las preguntas ",res);return res})
                .then((preguntas: pregunta[]) => this.generatePokemon(nombreEmpresa, preguntas, nombres, pos))
                .then((res)=>resolve(res))
                .catch((err) => { console.log("error setiando rutas ", err); reject({ err, error: "error setiando rutas " }) })
        });

    }



    getUserByUsername(username: String): Promise<Array<Datauser>> {
        var getuser = 'select * from usuarios where userName="' + username + '";';
        return new Promise((resolve, reject) => {
            this.query(getuser)
                .then((result) => resolve(this.getNude(result)))
                .catch((err) => reject(err))
        })

    }
    getDex(user_id: number): Promise<retoPoke> {
        var getRetodex = "select * from retodex as r where r.id_usuario=" + user_id;
        var getPokedex = "select * from pokedex as p where p.id_usuario=" + user_id;
        return new Promise((resolve, reject) => {
            Promise.all([this.query(getRetodex), this.query(getPokedex)])
                .then((result) => ({ reto: this.getNude(result[0]) as Array<reto>, pokedex: this.getNude(result[1]) as Array<Pokedex> }))
                .then((result) => resolve(result))
                .catch((err) => { console.log("get dex user err", err); reject(err) })
        })
    }



    getFullUser(users: Array<Datauser>): Promise<User> {
        //if (users instanceof Array && !isUndefined(users[0])) {
        return new Promise((resolve, reject) => {
            //

            this.arrayNoVoid2<Datauser>(users)
                .then((users) => users[0].id)
                .then((user_id) => this.getDex(user_id))
                .then((err) => { console.log("err", err); return err })
                .then((dex: retoPoke) => resolve({ user: users[0], retodex: dex.reto, pokedex: dex.pokedex }))
                .catch((err) => { console.log("get full user err", err); reject(err) })
        })
        //} else {
        //    return Promise.reject("the is no user with")
        //}
    }


    GetUserByUsername(username: String): Promise<User> {

        return new Promise((resolve, reject) => {
            this.getUserByUsername(username)

                .then((users) => this.getFullUser(users))
                .then((result) => resolve(result))
                .catch((err) => { console.log("get user err", err); reject(err) })
        })

    }
    getIdsPreguntaBYIdEmpresa(id_empresa: number) {
        var consulta = 'select id from preguntasnosotros as pn where pn.id=' + id_empresa + ";";
        //console.log("con---"+consulta)
        return new Promise((resolve, reject) => {
            this.query(consulta)
                .then((result) => resolve(this.getNude(result)))
                .catch((err) => reject(err));
        })
    }

    getUserAdmin() {

    }


    //ALTER TABLE nombre_tabla CHANGE nombre_viejo_columna nombre_nuevo_columna VARCHAR(20);
    setPregunta(nombreEmpresa: string, enunciado: string, respuesta: string, tiempo: number): Promise<{}> {

        var expresion = (id: Number): string => 'insert into preguntasnosotros (id_empresa,enunciado,respuesta,tiempo  ) ' +
            'values (' + id + ',"' + enunciado + '","' + respuesta + '",' + tiempo + ');'
        
        return new Promise((resolve, reject) => {
            this.getIDEmpresaByName(nombreEmpresa)
                //.then((con)=>{console.log("con---",con) ;return con})
                .then((con: number) => expresion(con))
                .then((con: string) => this.isTypeProm<string>(con, ""))
                .then((con) => this.query(con))
                .then((out) => resolve(out))
                .catch(err => reject(err))
        })
    }
    getAnswer(id_pregunta: number) {
        return new Promise((resolve, reject) => {
            var consulta = 'select respuesta  from  preguntasnosotros as p where p.id=' + id_pregunta + ';'
            console.log(consulta)
            this.query(consulta)
                .then((out) => resolve(this.getNude(out)))
                .catch(err => reject(err))
        })
    }
    getPaswordAndTokenByUsername(username: string): Promise<{}> {// retorna  pasword y token 
        var consulta: string = 'select password,token  from usuarios as u where u.userName="' + username + '";';
        //console.log("\n\n username", consulta)
        return new Promise((resolve, reject) => {// convierto data a una froma usable 
            this.query(consulta)
                .then((out) => resolve(this.getNude(out)))
                .catch((err) => reject(err))
        })
    }
    getTokenByUsername(username: string): Promise<{}> {
        var consulta: string = 'select token  from usuarios as u where u.userName="' + username + '";';
        return new Promise((resolve, reject) => {
            this.query(consulta)
                .then((out) => resolve(this.getNude(out)))
                .catch((err) => reject(err))
        })
    }
    setToken() {// inserta token 

    } 
    getPreguntas(id_empresa: number) {
        let consulta = 'select * from preguntasnosotros where id_empresa =' + id_empresa + ';'
        console.log(consulta)
        return this.query(consulta)
    }

    GetPreguntas(nombreEmpresa: string): Promise<Array<pregunta>> {
        return new Promise((resolve, reject) => {
            this.getIDEmpresaByName(nombreEmpresa)
                .then((id_empresa) => this.getPreguntas(id_empresa))
                .then((resul) => this.getNude(resul))
                .then((result) => this.arrayNoVoid2<pregunta>(result))
                .then((resul) => resolve(resul))
                .catch((err) => { console.log("error al buscar preguntas ", err); reject({ err, error: "error al buscar preguntas " }) })
        })
    }
    getUsers(empresa:string):Promise<Array<{}>>{
        var select=(id:number)=>'select * from usuarios where id_empresa='+id+';'
        return new Promise((resolve, reject) => {
            this.getIDEmpresaByName(empresa)
            .then((id)=>select(id))
            .then((con)=>this.query(con))
            .then((re)=>this.getNude(re))
            .then((re)=>resolve(re))
            .catch((err) => { console.log("error al buscar preguntas ", err); reject({ err, error: "error al buscar preguntas " }) })
        });
    }
}

var data = new Database();
data.setEmpresa('empresa1', 'nombre', 'apellido', 'username', 'password', 0, 0).catch(() => { })
//data.GeneratePokemon('empresa1').then((out) => console.log("generado", out)).catch((err) => console.log("erro genrate promeon " + err))
data.setUser('nombre', 'apellido', 'username', 'password', 'empresa1').catch(() => { })
data.getPaswordAndTokenByUsername('username').then((out) => console.log("usernem", out)).catch((err) => console.log("getPaswordAndTokenByUsername err" + err))
data.setPregunta('empresa1', 'enuncioado', 'respt', Number(new Date()) + 60 * 20 * 100)
    .then((out) => console.log("pregunta", out))
    .catch((err) => console.log("setPregunta err" + err))
data.getIdsPreguntaBYIdEmpresa(123).then((out) => console.log("get ids preg ", out)).catch((err) => console.log("getIdsPreguntaBYIdEmpresa err" + err))



var valRandom = Math.floor(Math.random() * pokenames.length);
var valRandomX = (Math.random() * 100);
var valRandomY = (Math.random() * 100);




var getPregutaRetUserPreguta = (user: User): Promise<{ preguntas: Array<pregunta>, user: User }> => {
    return new Promise((resolve, reject) => {
        let consulta = "select nombreEmpresa from empresa where  id= " + user.user.id_empresa;
        data.query(consulta)
            .then((res) => data.getNude(res))
            .then((res) => data.arrayNoVoid2<{ nombreEmpresa: string }>(res))
            .then((res) => data.GetPreguntas(res[0].nombreEmpresa))
            .then((preguntas) => resolve({ preguntas, user }))
    })
}


data.GetUserByUsername('username')
    .then((user) => (user.user.id_empresa))
    .then((id_empresa) => data.SetPokemon(pokenames[valRandom], valRandomX, valRandomY, id_empresa))
    .then((out) => console.log("set pokemon ", out))//.catch((err) => console.log("setPokemonerr ", err))
    .then(() => data.GetUserByUsername('username'))
    .then((user) => getPregutaRetUserPreguta(user))
    .then((result) => data.setRetodex(result.preguntas[0].id, result.user.user.id, Number(new Date())))
    .then(() => data.GetUserByUsername('username'))
    .then((result) => data.setPokedex(result.retodex[0].id, result.user.id, Number(new Date())))

/*
data.setRetodex(13, 1, Number(new Date()))
.then((out) => console.log("set retodex ", out)).catch((err) => console.log("setRetodex", err))
data.setPokedex(2, 1, 13)
.then((out) => console.log("set podex ", out)).catch((err) => console.log("setPokedex", err))

//data.GetUserByUsername('username')
//    .then((out) => console.log("get user ", out)).catch((err) => console.log("GetUserByUsername" + err))

*/



export { Database }
