import mongoose from 'mongoose';
import {mongodb}  from './keys';
mongoose
  .connect(mongodb.URI, {
   
  })
  .then((db) => console.log("Db Is COnected"))
  .catch((err) => console.log(err));
