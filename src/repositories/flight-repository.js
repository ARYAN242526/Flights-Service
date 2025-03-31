import CrudRepository from "./crud-repository.js";
import models from '../models/index.js';

const {Flight} = models;

class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }
    async getAllFlights(filter,sort){
        const response = await Flight.findAll({
            where : filter,
            order : sort
        });
        return response;
    }
}

export default  FlightRepository;