import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import apiRoutes from './routes/index.js';

const app = express();


const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use('/api' , apiRoutes);


app.listen(PORT , () => {
    console.log(`Server is listening on PORT : ${PORT} `);
});