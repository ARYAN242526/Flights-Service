import CrudRepository from "./crud-repository.js";
import models from '../models/index.js';

const {Airport} = models;

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

export default  AirportRepository;