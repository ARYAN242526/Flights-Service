import express from 'express';
import { CityController } from '../../controllers/index.js';
import { CityMiddlewares } from '../../middlewares/index.js';


const router = express.Router();


// /api/v1/cities POST
router.post('/',
    CityMiddlewares.validateCreateRequest,
     CityController.createCity);

router.delete('/:id' , CityController.deleteCity);


export default router;