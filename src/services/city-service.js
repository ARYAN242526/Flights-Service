import { StatusCodes } from "http-status-codes";
import {CityRepository} from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

class CityService {
    constructor (){
        this.cityRepository = new CityRepository();
    }

    async  createCity(data){
        try {
            const city = await this.cityRepository.create(data);
            return city;
        } catch (error) {
            
            if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
                let explaination = [];
    
                error.errors.forEach((err) => {
                    explaination.push(err.message);
                });
                throw new AppError(explaination , StatusCodes.BAD_REQUEST);
            }
            throw new AppError('Cannot create a new city object' , StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteCity(id){
        try {
            const response = await this.cityRepository.destroy(id);
            return response;
        } catch (error) {
            if(error.statusCode == StatusCodes.NOT_FOUND){
                throw new AppError('The city you requested to delete is not present' , error.statusCode);
            }
            throw new AppError('Cannot delete the requested city',StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async updateCity(id , data){
        try {
            const response = await this.cityRepository.update(id,data);
            return response;
        } catch (error) {
            
            if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            else if(error.statusCode == StatusCodes.NOT_FOUND) {
                throw new AppError('The city you requested to update is not present', error.statusCode);
            }
    
            throw new AppError('Cannot update the city object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}



export default CityService;



