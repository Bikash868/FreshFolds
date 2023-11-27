import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import { MONGO_URI } from './config';

import { UserRoute } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/user', UserRoute);

//Hookup DB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions ).then((result)=>{
  console.log("result:",result);
}).catch((error)=> {
  console.log("error:",error)
})

app.listen(8080, () => {
  console.log("App is listning to port 8080")
})
