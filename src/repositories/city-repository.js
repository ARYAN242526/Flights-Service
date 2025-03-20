import CrudRepository from "./crud-repository.js";
import models from '../models/index.js';

const {City} = models;

class CityRepository extends CrudRepository {
    constructor(){
        super(City);
    }
}

export default  CityRepository;