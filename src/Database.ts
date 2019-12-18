

import { createConnection, MysqlError } from 'mysql';
import { isUndefined } from 'util';
//import { rejects } from 'assert';
//import { resolve } from 'dns';

var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()


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




    getIDEmpresaByName(name: string): Promise<{}> {
        return new Promise((resolve, reject) => {
            var consulta = 'select id from empresa as e where e.nombreEmpresa="' + name + '"';
            this.query(consulta)
                .then((res) => {
                    var id_empresa = JSON.parse(JSON.stringify(res));
                    if (id_empresa instanceof Array && id_empresa.length > 0)
                        resolve(id_empresa[0].id)
                    else
                        reject({ status: "la consulta retorno un resultado inesperado", err: id_empresa, consulta: consulta })
                })
                .catch((err) => reject(err))
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
        return new Promise((resolve, reject) => {
            this.query('insert into empresa (nombreEmpresa) values ("' + nombreEmpresa + '")')
                .then(
                    (out) => this.getIDEmpresaByName(nombreEmpresa)
                        .then((out) => this.setUserAdmin(nombre, apellido, username, password, puntaje, nivel, out)
                            .then((out) => resolve(out))
                            .catch((err) => reject(err))
                        )
                        .catch((err) => reject(err))

                )
                .catch((err) => reject(err))



        })


    }


    setUser(nombre: string, apellido: string, username: string, password: string, empresa: string): Promise<{}> {

        return new Promise((resolve, reject) => {
            var idReq = this.getIDEmpresaByName(empresa) // buscar nombre de empresa 
            //var valrandom=
            var insertarUser = (id_empresa: any): Promise<{}> => {
                //console.log(id_empresa)
                var url = "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg"
                const valRandom = Math.floor(Math.random() * 100000000);
                var consulta = 'insert into usuarios (nombre,apellidos,username,password,puntaje,nivel,id_empresa,token,tipo,urlFoto) ' +
                    'values ("' + nombre + '","' + apellido + '","' + username + '","' + password + '",' +
                    0 + ',' + 0 + ',' + id_empresa + ', "' + valRandom + '", "trabajador","' + url + '"   ) ;'
                //console.log(consulta)
                return this.query(consulta)
            }
            //fdgd8646
            idReq
                .then((id_empresa: any) => insertarUser(id_empresa)
                    .then((out) => { console.log(out); resolve(out) })
                    .catch(err => { console.log(err); reject(err) })
                )
                .catch(err => { console.log(err); reject(err) })
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
    deleteFromPokedex(id_retodex:number){
        var borrarRetodex = "delete from retodex  where id=" + id_retodex;
    }

    setPokedex(id_pokemon: number, id_usuario: number, id_pregunta: number) {
        // implica 
        // obtener los datos del pokemon 
        // tienes los id del usario 
        // tienes 
        var getRetodex = "select p.id as id_pokemon , u.id as  id_usuario , r.id as id_retodex , r.id_pregunta  from pokemones as p, retodex as r ,usuarios as u where p.id=" + id_pokemon +
            ' AND p.id_pregunta=r.id_pregunta AND  u.id=' + id_usuario + ' AND r.id_usuario=u.id;'
        console.log("this.setPokedex", getRetodex)
        return new Promise((resolve, reject) => {
            this.query(getRetodex)
                .then((out) => {
                    console.log("set pokedex 1 ", out)
                    var data = JSON.parse(JSON.stringify(out))
                    if (data instanceof Array && data.length > 0) {
                        data.forEach((element) => {
                            var borrarRetodex = "delete from retodex  where id=" + element.id_retodex;
                            this.query(borrarRetodex)
                                .then(() => this.capturePokemon(id_pokemon, id_usuario, id_pregunta)
                                    .then((out) => resolve(out)))
                                .catch((err) => { console.log(err); reject(err) })
                        })
                    } else {
                        reject("no eocnotro el pedido" + getRetodex)
                    }
                })
                .catch((err) => { console.log(err); reject(err) })
        })
        //borrar de retodex 

        //this.query(borrarRetodex)
        // inserta en pokedex 
        //this.query('insert into pokedex (id_pokemon,id_usuario,id_pregunta) values ("' + id_pokemon + '","' + id_usuario + '","' + id_pregunta + '")')
    }





    setRetodex(id_pregunta: number, id_usuario: number, fecha_visto: number): Promise<{}> {
        return this.query('insert into retodex (id_pregunta,id_usuario,fecha_visto) values ("' + id_pregunta + '","' + id_usuario + '","' + fecha_visto + '")')
    }

    setPokemon(nombre: string, posX: number, posY: number, id_empresa: number) {
        return new Promise((resolve, reject) => {
            var gid_preguntas = this.getIdsPreguntaBYIdEmpresa(id_empresa)
            gid_preguntas
                .then((id_preguntas) => {
                    if (id_preguntas instanceof Array && id_preguntas.length > 0) {
                        var id_pregunta = Math.floor(Math.random() * id_preguntas.length);
                        var consulta = 'insert into pokemones (  nombre, posiciox   , posiciony ,   id_pregunta , estado ) ' +
                            'values ("' + nombre + '",' + posX + ',' + posY + ',' + id_pregunta + ',"libre")'
                        this.query(consulta)
                            .then((out) => resolve(out))
                            .catch(err => reject(err))
                    }
                }).catch(err => reject(err))
        })

    }



    setNewPokemonPosition() {

    }
    setCompany(nombre: string) {
        //var consulta = 


        conection.query('insert into empresa (nombreEmpresa ) values ( "' + nombre + '");', (err, res) => {

            console.log(res)
        })

        conection.query(' select * from empresa ', (err, res) => {
            console.log(res)
        })

        //conection.end()
    }
    setCapture() {

    }
    getPokemonRound() {

    }
    genratePokemon() {

    }

    getNude(data: any) {// le quita el tipo espcial que tiene las repsuestas de mysql 
        return JSON.parse(JSON.stringify(data))
    }
    getUserByUsername(username: String) {
        var getuser = 'select * from usuarios where userName="' + username + '";';
        return new Promise((resolve, reject) => {
            this.query(getuser)
                .then((result) => resolve(this.getNude(result)))
                .catch((err) => reject(err))
        })

    }
    getDex(user_id: number): Promise<Array<{}>> {
        var getRetodex = "select * from retodex as r where r.id_usuario=" + user_id;
        var getPokedex = "select * from pokedex as p where p.id_usuario=" + user_id;
        return new Promise((resolve, reject) => {
            Promise.all([this.query(getRetodex), this.query(getPokedex)])
                .then((result) => resolve(this.getNude(result)))
                .catch((err) => reject(err))
        })
    }



    getFullUser(users: any): Promise<{}> {
        //if (users instanceof Array && !isUndefined(users[0])) {
        return new Promise((resolve, reject) => {
            if (! (users instanceof Array) && isUndefined(users[0])) reject({users:users,err:"the is no user with"})
            var user_id = users[0].id
            this.getDex(user_id)
                .then((dex: Array<{}>) => resolve({ user: users[0], retodex: dex[0], pokedex: dex[1] }))
                .catch((err) => reject(err))
        })
        //} else {
        //    return Promise.reject("the is no user with")
        //}
    }


    GetUserByUsername(username: String): Promise<{}> {
        
        return new Promise((resolve, reject) => {
            this.getUserByUsername(username)
                .then((users) => {
                    this.getFullUser(users)
                        .then((result) => resolve(result))
                        .catch((err) => reject(err))
                })
                .catch((err) => reject(err))
        })

    }
    getIdsPreguntaBYIdEmpresa(id_empresa: number) {
        var consulta = 'select id from preguntasnosotros as pn where pn.id_empresa=' + id_empresa;
        return new Promise((resolve, reject) => {
            this.query(consulta)
                .then((result) => {
                    resolve(JSON.parse(JSON.stringify(result)))
                }).catch((err) => {
                    reject(err)
                });
        })
    }

    getUserAdmin() {

    }
    //ALTER TABLE nombre_tabla CHANGE nombre_viejo_columna nombre_nuevo_columna VARCHAR(20);
    setPregunta(nombreEmpresa: string, enunciado: string, respuesta: string, tiempo: number): Promise<{}> {
        return new Promise((resolve, reject) => {
            var idReq = this.getIDEmpresaByName(nombreEmpresa)
            idReq
                .then((out) => {
                    var consulta = 'insert into preguntasnosotros (id_empresa,enunciado,respuesta,tiempo  ) ' +
                        'values (' + out + ',"' + enunciado + '","' + respuesta + '",' + tiempo + ');'
                    console.log(consulta)
                    this.query(consulta)
                        .then((out) => resolve(out))
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    }
    getAnswer(id_pregunta: number) {
        return new Promise((resolve, reject) => {
            var consulta = 'select respuesta  from  preguntasnosotros as p where p.id=' + id_pregunta + ';'
            console.log(consulta)
            this.query(consulta)
                .then((out) => resolve(JSON.parse(JSON.stringify(out))))
                .catch(err => reject(err))
        })
    }
    getPaswordAndTokenByUsername(username: string): Promise<{}> {// retorna  pasword y token 
        var consulta: string = 'select password,token  from usuarios as u where u.userName="' + username + '";';
        //console.log("\n\n username", consulta)
        return new Promise((resolve, reject) => {// convierto data a una froma usable 
            this.query(consulta)
                .then((out) => resolve(JSON.parse(JSON.stringify(out))))
                .catch((err) => reject(err))
        })
    }
    getTokenByUsername(username: string): Promise<{}> {
        var consulta: string = 'select token  from usuarios as u where u.userName="' + username + '";';
        return new Promise((resolve, reject) => {
            this.query(consulta)
                .then((out) => resolve(JSON.parse(JSON.stringify(out))))
                .catch((err) => reject(err))
        })
    }
    setToken() {// inserta token 

    }


}

var data = new Database()
data.setEmpresa('empresa1', 'nombre', 'apellido', 'username', 'password', 0, 0).catch(() => { })
data.setUser('nombre', 'apellido', 'username', 'password', 'empresa1').catch(() => { })
data.getPaswordAndTokenByUsername('username').then((out) => console.log("usernem", out)).catch((err) => console.log("getPaswordAndTokenByUsername" + err))
data.setPregunta('empresa1', 'enuncioado', 'respt', Number(new Date()) + 60 * 20 * 100)
    .then((out) => console.log("pregunta", out))
    .catch((err) => console.log("setPregunta" + err))
data.getIdsPreguntaBYIdEmpresa(1).then((out) => console.log("get ids preg ", out)).catch((err) => console.log("getIdsPreguntaBYIdEmpresa" + err))
var valRandom = Math.floor(Math.random() * pokenames.length);
var valRandomX = (Math.random() * 100);
var valRandomY = (Math.random() * 100);
data.setPokemon(pokenames[valRandom], valRandomX, valRandomY, 1)
    .then((out) => console.log("set pokemon ", out)).catch((err) => console.log("setPokemon" + err))
data.setRetodex(13, 1, Number(new Date()))
    .then((out) => console.log("set retodex ", out)).catch((err) => console.log("setRetodex" + err))
data.setPokedex(2, 1, 13)
    .then((out) => console.log("set podex ", out)).catch((err) => console.log("setPokedex" + err))

data.GetUserByUsername('username')
    .then((out) => console.log("get user ", out)).catch((err) => console.log("GetUserByUsername" + err))





export { Database }
