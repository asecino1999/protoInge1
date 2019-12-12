

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
    getUser(id:number) {
      conection.query('select * from usuarios;', (err, res) => {
        console.log(res)
      })

      conection.query('select * from pokedex, usuarios where id_usuario.pokedex = id.usuarios;', (err, res) => {
        console.log(res)
      })

      conection.query('select * from retodex, usuarios where id_usuario.retodex = id.usuarios;', (err, res) => {
        console.log(res)
      })

    }
    getUserAdmin() {
      
    }
    getAnswer(id:number) {
      //necesitar el id de latabla pregunta
      conection.query('select id from pregunta;', (err, res) => {
        console.log(res)
      })
    }


}
export { Database }