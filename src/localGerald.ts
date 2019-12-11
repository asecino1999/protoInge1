// esto esta hewcho para correr en una computadora local sin sudo 
import { App,app} from './App';
import { MidelContorler } from './MidelContorler';

var port = 8080; 

var aplicacion=new App()
var router=new MidelContorler()

aplicacion.setApp(app)
aplicacion.setRouter(router.router)
aplicacion.listen()