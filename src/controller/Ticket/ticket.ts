import { Request,Response } from 'express';
import tickets from '../../models/tickets';
 class IndexWelcome{
public async salvarTicket (req:Request,res:Response){
    const {Abierto,correo,Asunto,Asignado}=req.body;
   // const Fecha = new Date().getDay();

    const ticket = new tickets({
      Abierto,
      correo,
      Asunto,
      Asignado,
      
    });
    await ticket.save();
    console.log(req.body);
    
    res.send("recived") ;           
    
 };
 public async obtenerticket(req:Request,res:Response){
        const tocket=await tickets.find();
       res.json(tocket);
 };
 public async obtenerticketbyemail(req:Request,res:Response){
            const tocket=await tickets.find({correo:req.body.correo});
            res.json(tocket);
 }
 }
const ticket = new IndexWelcome();
export default ticket