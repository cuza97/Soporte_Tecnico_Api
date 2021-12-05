import  express, { Application }  from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import Index_Routes from './routes/indexwelcome';
import "./database";
class Server{

   
//Inicializacion
 public app:Application;

 constructor(){
     this.app=express();
     this.config();
     this.route();
 }

//Ajustes
config():void{
this.app.set('port',process.env.PORT|| 3000);
this.app.use(morgan("dev"));
//this.app.use(cors); desactivado por ahora 
this.app.use(express.json()),
this.app.use(express.urlencoded({extended:true}));
}


//Rutas
route():void{
      this.app.use(Index_Routes);
      
}
//Archivos estaticos

//inicializacion del servidor
 start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server inicio en ", this.app.get("port"));
    });
  }

}
const serve = new Server();
serve.start();