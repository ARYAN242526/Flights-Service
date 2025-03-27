import { StatusCodes } from "http-status-codes";
import {FlightRepository} from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

class FlightService {
    constructor(){
        this.flightRepository = new FlightRepository();
    }   

  async createFlight(data){
    try {
        const flight = await this.flightRepository.create(data);
        return flight;
    } catch (error) {
        
        if(error.name === 'SequelizeValidationError'){
            let explaination = [];
            
            
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            throw new AppError(explaination , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new flight object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


}

export default FlightService;