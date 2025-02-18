import AirplaneRepository from "../repositories/index.js";

class AirplaneService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
    }   

  async  createAirplane(data){
    try {
        console.log("inside service");
        const airplane = await this.airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

}

export default AirplaneService;