import { StatusCodes } from "http-status-codes";
import {AirportRepository} from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

class AirportService {
    constructor(){
        this.airportRepository = new AirportRepository();
    }   

  async createAirport(data){
    try {
        const airport = await this.airportRepository.create(data);
        return airport;
    } catch (error) {
        
        
        if(error.name === 'SequelizeValidationError'){
            let explaination = [];
            
            
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            throw new AppError(explaination , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new airport object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

 async getAirports(){
    try {
        const airports = await this.airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
 }

  async getAirport(id){
    try {
        const airport = await this.airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present' , error.statusCode);
        }
        throw new AppError('Cannot fetch data of an airport' , StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async deleteAirport(id){
    try {
        const response = await this.airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to delete is not present' , error.statusCode);
        }
        throw new AppError('Cannot delete the requested airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

}

export default AirportService;