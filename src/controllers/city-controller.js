import { StatusCodes } from 'http-status-codes';
import {CityService} from '../services/index.js';
import { SuccessResponse,ErrorResponse } from '../utils/common/index.js';

const cityService = new CityService();
/*
POST : /cities
req-body {name : 'London'}

*/

async function createCity(req,res) {
    try {
        
        const city = await cityService.createCity({
           name : req.body.name,
        });
        SuccessResponse.data = city;
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

async function deleteCity(req,res) {
    try {
            const city = await cityService.deleteCity(req.params.id);
            SuccessResponse.data = city;
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

async function updateCity(req,res){
    try {
        const city = await cityService.updateCity(req.params.id , {
            name : req.body.name
        })
        SuccessResponse.data = city;
        return res.
                  status(StatusCodes.CREATED)
                  .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error  = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}
    

export default {createCity,deleteCity,updateCity}