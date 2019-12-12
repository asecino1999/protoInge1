

import { createConnection } from 'mysql';
var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()
class Database {
    setUser() {

    }
    setUserAdmin(nombre:string,apellido:string,username:string,password:string,puntaje:Number,nivel:Number,id_empresa:Number,) {
        var tipo:string = "administrador"
        
	conection.query('insert into usuarios (nombre,apellido,username,password,puntaje,nivel,id_empresa) values ("'+nombre+'","'+apellido+'","'+username+'","'+password+'","'+puntaje+'","'+nivel+'","'+id_empresa+'") ')
    }
    setNewPokemonPosition() {

    }
    setCompany(nombre :string) {
        //var consulta = 
        
        conection.query(' insert into empresa (nombreEmpresa ) values ( "'+nombre+'");', (err, res) => {
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
export { Database }
 