import  mongoose,{Schema,model}  from 'mongoose';

const Ticket = new Schema({
  ID: String,
  Abierto: String,
  correo: String,
  Asunto: String,
  Asignado: String,
  fecha: { type: Date, default: Date.now },
});
export default model ('Ticket',Ticket)