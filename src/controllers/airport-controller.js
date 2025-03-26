import { StatusCodes } from 'http-status-codes';
import {AirportService} from '../services/index.js';
import { SuccessResponse,ErrorResponse } from '../utils/common/index.js';

const airportService = new AirportService();
/*
POST : /airports
req-body {name : 'IGI Airport' , code : 'DEL', address : 'New Delhi , cityId : 5 }

*/

async function createAirport(req,res) {
    try {
        
        const airport = await airportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId
        });
        SuccessResponse.data = airport;
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

/*
POST : /airports/
req-body {}

*/

async function getAirports(req,res) {
    try {
        const airports = await airportService.getAirports();
        SuccessResponse.data = airports;
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

/*
POST : /airports/:id
req-body {}
*/

async function getAirport(req,res) {
    try {
        const airport = await airportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
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

/*
DELETE : /airports/:id
req-body {}

*/

async function deleteAirport(req,res) {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        SuccessResponse.data = response;
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

export default {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
}