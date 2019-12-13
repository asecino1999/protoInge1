

import { createConnection, MysqlError } from 'mysql';
import { resolve } from 'dns';
import { rejects } from 'assert';
var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()
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
                        reject({ status: "la consulta retorno un resultado inesperado" })
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
        console.log("set admin",consulta)
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
                console.log(id_empresa)
                var url = "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg"
                const valRandom = Math.floor(Math.random() * 100000000);
                var consulta = 'insert into usuarios (nombre,apellidos,username,password,puntaje,nivel,id_empresa,token,tipo,urlFoto) ' +
                    'values ("' + nombre + '","' + apellido + '","' + username + '","' + password + '",' +
                    0 + ',' + 0 + ',' + id_empresa + ', "' + valRandom + '", "trabajador","' + url + '"   ) ;'
                console.log(consulta)
                return this.query(consulta)
            }
            //fdgd8646
            idReq
                .then((id_empresa: any) => insertarUser(id_empresa)
                    .then((out) => { console.log(out); resolve(out) })
                    .catch(err => { console.log(err); reject(err) })
                )
        })



    }


    setPokedex(id_pokemon: number, id_usuario: number, id_pregunta: number) {
        conection.query('insert into pokedex (id_pokemon,id_usuario,id_pregunta) values ("' + id_pokemon + '","' + id_usuario + '","' + id_pregunta + '")')
    }


    setRetodex(id_pregunta: number, id_usuario: number, fecha_visto: Date): Promise<{}> {
        return this.query('insert into pokedex (id_pregunta,id_usuario,fecha_visto) values ("' + id_pregunta + '","' + id_usuario + '","' + fecha_visto + '")')
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
    getUser() {

    }
    getUserAdmin() {

    }
    getAnswer() {

    }


}

var data = new Database()
data.setEmpresa('empresa1','nombre', 'apellido', 'username', 'password',0,0).catch(()=>{})
data.setUser('nombre', 'apellido', 'username', 'password', 'empresa').catch(() => { })

 
export { Database }
