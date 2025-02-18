import CrudRepository from "./crud-repository.js";
import Airplane from '../models/airplane.js';

class AirplaneRepository extends CrudRepository {
    constructor(){
        super(Airplane);
    }
}

export default  AirplaneRepository;