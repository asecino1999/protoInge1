

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


    setUser(nombre: string, apellido: string, username: string, password: string, empresa: string): Promise<{}> {

        return new Promise((resolve, reject) => {
            var idReq = this.getIDEmpresaByName(empresa)
            idReq
                .then((out) => {
                    console.log(out)
                    // insert into usuarios (nombre,apellidos,password,puntaje,nivel,id_empresa , userName,token,tipo ) values ( "s","s2","3",0,0,0,"q","123","normal");

                    
                    resolve()


                    //conection.query('', (err, res) => {

                    //})
                })


        })



    }
    setUserAdmin(nombre: string, apellido: string, username: string, password: string) {

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