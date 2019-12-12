

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
    setUserAdmin(nombre:string,apellido:string,username:string,password:string) {
        
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