import CrudRepository from "./crud-repository.js";
import models from '../models/index.js';

const {Flight} = models;

class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }
}

export default  FlightRepository;