import { StatusCodes } from "http-status-codes";
import {FlightRepository} from "../repositories/index.js";
import {Op} from 'sequelize';
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

 async getAllFlights(query){
    let customFilter = {};
    let sortFilter = [];
    const tripDate = new Date(query.tripDate);
    const tripDateStart = new Date(tripDate.setHours(0, 0, 0, 0)).toISOString();
    const tripDateEnd = new Date(tripDate.setHours(23, 59, 59, 999)).toISOString();
    // trips = MUM-DEL
    if(query.trips){

       const [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }
    if(query.price){
       const [minPrice,maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between] : [minPrice,(maxPrice === undefined) ? 20000 : maxPrice]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.between] : [tripDateStart,tripDateEnd]
        }
    }
    if(query.sort){
        const params = query.sort.split(",");
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters;
    }
    try {
        const flights = await this.flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
 }


}

export default FlightService;