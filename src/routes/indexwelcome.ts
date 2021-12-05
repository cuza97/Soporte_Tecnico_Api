import { Router } from "express";
import indexcontroller from '../controller/cwelcome';
import ticket from '../controller/Ticket/ticket';

class index {
  router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", indexcontroller.index);
    this.router.post("/uploadticket", ticket.salvarTicket);
    this.router.get("/geticket", ticket.obtenerticket);
    this.router.get("/geticketbyemail", ticket.obtenerticketbyemail);
    
  }
}
const indexRoutes = new index();
export default indexRoutes.router;

