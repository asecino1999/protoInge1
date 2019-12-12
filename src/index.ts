// esto esta hewcho para correr en una computadora local sin sudo 
import { App,app} from './App';
import { MidelContorler } from './MidelContorler';
// en servidor corre con puerto  80 , con sudo 

var port = 80; 

var aplicacion=new App()
var router=new MidelContorler()

aplicacion.setApp(app)
aplicacion.setPort(port)
aplicacion.setRouter(router.router)
aplicacion.listen()