

import { createConnection } from 'mysql';
var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()
class Database {

    setUser(nombre:string,apellido:string,username:string,password:string,puntaje:Number,nivel:Number,id_empresa:Number) {
             
	conection.query('insert into usuarios (nombre,apellido,username,password,puntaje,nivel,id_empresa) values ("'+nombre+'","'+apellido+'","'+username+'","'+password+'","'+puntaje+'","'+nivel+'","'+id_empresa+'") ')
    
    }
    setUserAdmin(nombre:string,apellido:string,username:string,password:string,puntaje:Number,nivel:Number,id_empresa:Number) {
        var tipo:string = "administrador"
        
	conection.query('insert into usuarios (nombre,apellido,username,password,puntaje,nivel,id_empresa) values ("'+nombre+'","'+apellido+'","'+username+'","'+password+'","'+puntaje+'","'+nivel+'","'+id_empresa+'") ')
    }

    setEmpresa(nombreEmpresa:String){
        conection.query('insert into empresa (nombreEmpresa) values ("'+nombreEmpresa+'")')
    }

    setPokedex(id_pokemon:number,id_usuario:number,id_pregunta:number){
        conection.query('insert into pokedex (id_pokemon,id_usuario,id_pregunta) values ("'+id_pokemon+'","'+id_usuario+'","'+id_pregunta+'")')

    }


    setRetodex(id_pregunta:number,id_usuario:number,fecha_visto:Date){
        conection.query('insert into pokedex (id_pregunta,id_usuario,fecha_visto) values ("'+id_pregunta+'","'+id_usuario+'","'+fecha_visto+'")')
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

