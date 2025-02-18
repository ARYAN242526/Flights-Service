import { StatusCodes } from 'http-status-codes';
import AirplaneService from '../services/index.js';

const airplaneService = new AirplaneService();
/*
POST : /airplanes
req-body {modelNumber : 'airbus a320' , capacity : 200}

*/

async function createAirplane(req,res) {
    try {

        console.log("inside controller");
        
        const airplane = await airplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success : true , 
                    message : 'Successfully create an airplane',
                    data : airplane,
                    error : {}
                })
        
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success : false ,
                    message : "Something went wrong while creating airplane",
                    data : [],
                    error : error.message
                })
            
    }
}

export default {createAirplane}