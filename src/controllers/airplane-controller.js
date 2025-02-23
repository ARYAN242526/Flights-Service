import { StatusCodes } from 'http-status-codes';
import AirplaneService from '../services/index.js';
import { SuccessResponse,ErrorResponse } from '../utils/common/index.js';

const airplaneService = new AirplaneService();
/*
POST : /airplanes
req-body {modelNumber : 'airbus a320' , capacity : 200}

*/

async function createAirplane(req,res) {
    try {
        
        const airplane = await airplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error  = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
            
    }
}

async function getAirplanes(req,res) {
    try {
        const airplanes = await airplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error  = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

export  default {createAirplane,getAirplanes}