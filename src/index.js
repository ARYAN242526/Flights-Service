import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import models from './models/index.js';

const {City , Airport} = models;

import apiRoutes from './routes/index.js';

const app = express();


const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use('/api' , apiRoutes);


app.listen(PORT , async() => {
    console.log(`Server is listening on PORT : ${PORT} `);
  
     
});