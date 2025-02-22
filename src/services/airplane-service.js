import { StatusCodes } from "http-status-codes";
import AirplaneRepository from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

class AirplaneService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
    }   

  async  createAirplane(data){
    try {
        const airplane = await this.airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        
        
        if(error.name === 'SequelizeValidationError'){
            let explaination = [];
            
            
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            throw new AppError(explaination , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new airplane object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

}

export default AirplaneService;