

import { createConnection } from 'mysql';
var conection = createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pokeuni'
})
conection.connect()
class Database {
    getIDEmpresaByName(name:string):number{
        var ret:number=-1;
        conection.query('select id from empresa as e where e.nombreEmpresa="'+name+'"',(err,res)=>{
            console.log(res,res)
            ret=res
        })
        return ret
    }


    setUser(nombre:string,apellido:string,username:string,password:string) {
        conection.query('',(err,res)=>{

        })
    }
    setUserAdmin(nombre:string,apellido:string,username:string,password:string) {
        
    }
    setNewPokemonPosition() {

    }
    setCompany(nombre :string) {
        //var consulta = 
        
        conection.query('insert into empresa (nombreEmpresa ) values ( "'+nombre+'");', (err, res) => {
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
console.log(new Database().getIDEmpresaByName("emp"))
export { Database }