

import { createConnection } from 'mysql';
var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()
class Database {

    getIDEmpresaByName(name: string): Promise<{}> {

        return new Promise((resolve, reject) => {

            conection.query('select id from empresa as e where e.nombreEmpresa="' + name + '"', (err, res) => {
                //console.log(res, res)
                if (err) reject();
                resolve(res)
            })
        })
    }



    setUserAdmin(nombre: string, apellido: string, username: string, password: string, puntaje: Number, nivel: Number, id_empresa: Number) {
        var tipo: string = "administrador"

        conection.query('insert into usuarios (nombre,apellido,username,password,puntaje,nivel,id_empresa) values ("' + nombre + '","' + apellido + '","' + username + '","' + password + '","' + puntaje + '","' + nivel + '","' + id_empresa + '") ')

    }

    setEmpresa(nombreEmpresa: String) {
        conection.query('insert into empresa (nombreEmpresa) values ("' + nombreEmpresa + '")')
    }


    setUser(nombre: string, apellido: string, username: string, password: string, empresa: string): Promise<{}> {

        return new Promise((resolve, reject) => {
            var idReq = this.getIDEmpresaByName(empresa)
            idReq
                .then((out) => {
                    console.log(out)
                    var id_empresa = out
                    // insert into usuarios (nombre,apellidos,password,puntaje,nivel,id_empresa , userName,token,tipo ) values ( "s","s2","3",0,0,0,"q","123","normal");
                    conection.query('insert into usuarios (nombre,apellido,username,password,puntaje,nivel,id_empresa) values ("' + nombre + '","' + apellido + '","' + username + '","' + password + '","' + 0 + '","' + 0 + '","' + id_empresa + '") ')

                    resolve()


                    //conection.query('', (err, res) => {

                    //})
                })


        })



    }


    setPokedex(id_pokemon: number, id_usuario: number, id_pregunta: number) {
        conection.query('insert into pokedex (id_pokemon,id_usuario,id_pregunta) values ("' + id_pokemon + '","' + id_usuario + '","' + id_pregunta + '")')
    }


    setRetodex(id_pregunta: number, id_usuario: number, fecha_visto: Date) {
        conection.query('insert into pokedex (id_pregunta,id_usuario,fecha_visto) values ("' + id_pregunta + '","' + id_usuario + '","' + fecha_visto + '")')

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

new Database().setUser('nombre', 'apellido', 'username', 'password', 'empresa')

export { Database }
