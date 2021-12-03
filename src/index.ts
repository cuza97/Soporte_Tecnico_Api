import  express  from 'express';

//Inicializacion
const app= express();

//Ajustes
app.set('port',4000);

//Rutas

//Archivos estaticos

//inicializacion del servidor
app.listen(app.get('port'),
()=> {
    console.log(`Server on port ${app.get('port')}`);
      
})