import { StatusCodes } from 'http-status-codes';
import {FlightService} from '../services/index.js';
import { SuccessResponse,ErrorResponse } from '../utils/common/index.js';

const flightService = new FlightService();
/*
POST : /flights
req-body {
   flightNumber  : 'UK 808',
   airplaneId : 'a380',
   departureAirportId : 12,
   arrivalAirportId: 11,
   arrivalTime : '11:10:00',
   departureTime: '9:10:00'
   price : 2000,
   boardingGate:'12A',
   totalSeats : 120
 }

*/

async function createFlight(req,res) {
    try {
        
        const flight = await flightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        });
        SuccessResponse.data = flight;
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

async function getAllFlights(req,res){
    try {
        const flights = await flightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
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



export default {
    createFlight,
    getAllFlights
    
}