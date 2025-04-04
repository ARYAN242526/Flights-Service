import { Sequelize } from "sequelize";
import CrudRepository from "./crud-repository.js";
import models from '../models/index.js';

const {Flight,Airplane,Airport,City} = models;

class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }
    async getAllFlights(filter,sort){
        const response = await Flight.findAll({
            where : filter,
            order : sort,
            include : [
                {
                    model :  Airplane,
                    required : true,
                    as : 'airplaneDetail'
                },
                {
                    model : Airport,
                    required : true,
                    as : 'departureAirport',
                    on : {
                        col1 : Sequelize.where(Sequelize.col("Flight.departureAirportId"), '=',Sequelize.col("departureAirport.code"))

                    },
                  include : {
                    model : City,
                    required : true,
                    as : "city"
                    }
                },
                {
                    model : Airport,
                    required : true,
                    as : 'arrivalAirport',
                    on : {
                        col1 : Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), '=',Sequelize.col("arrivalAirport.code"))

                    },
                    include : {
                        model : City,
                        required : true,
                        as : "city"
                    }
                }
            ] 
        });
        return response;
    }
}

export default  FlightRepository;