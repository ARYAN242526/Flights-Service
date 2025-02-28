import { StatusCodes } from "http-status-codes";
import AirplaneRepository from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

class AirplaneService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
    }   

  async createAirplane(data){
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

 async getAirplanes(){
    try {
        const airplanes = await this.airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
 }

  async getAirplane(id){
    try {
        const airplane = await this.airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present' , error.statusCode);
        }
        throw new AppError('Cannot fetch data of an airplane' , StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async deleteAirplane(id){
    try {
        const response = await this.airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present' , error.statusCode);
        }
        throw new AppError('Cannot delete the requested airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

}

export default AirplaneService;