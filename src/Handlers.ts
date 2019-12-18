import { Database } from './Database';
import { User } from './user';
import { Response } from 'express';


class statusErr{
    status:any
    constructor(err:any){
        this.status=err
    }
}
class statusOk{
    status:'ok'
    data:any
    constructor(data:any){
        this.status='ok'
        this.data=data;
    }
}


export class Handlers {
    database:Database
    constructor(){
        this.database=new Database()
    }
    sendUser(res:Response,user:any ){
        res.json(new statusOk(user))
    }
    getUserByUsername(username:string):Promise<any> {

        //new Promise()


        return this.database.GetUserByUsername(username)
    }
    setRetodex(  id:number,user:User ):Promise<any>{
        return this.database.setRetodex(id,user.userid,(Number(new Date())))
    }
    SetRetodex(res:Response,username:string ){
        this.getUserByUsername(username)
        .then((result)=>{})
    }
}