import { Request,Response } from 'express';

class IndexWelcome{

    public index (req:Request,res:Response){
        res.send("Bienvenidos al api de servicio");
    }
}

const indexcontroller = new IndexWelcome();
export default indexcontroller