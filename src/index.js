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
    // bad code alert 
   // const bengaluru = await City.findByPk(1);
   // console.log(bengaluru);
    // const airport = await Airport.create({name : 'kempegowda airport' , code : 'BLR' , cityId : 1});
    //  const hbairport = await bengaluru.createAirport({name : 'Hubbali airport' , code : 'HBL'})
    //  console.log(hbairport);
    // const airportsInBlr = await bengaluru.getAirports();
    // console.log(airportsInBlr);
    // const hbairport = await Airport.findByPk(3);
    // console.log(hbairport);
    // await bengaluru.removeAirport(hbairport);

    // await City.destroy({
    //     where : {
    //         id : 1
    //     }
    // })

    //  const city = await City.findByPk(3);
    // // console.log(city);
    // await city.createAirport({name : "Indore Airport" , code : 'IND'})

    await City.destroy({
        where : {
            id : 3
        }
    })
     
});