import express from 'express';
import { AirplaneController } from '../../controllers/index.js';
import { AirplaneMiddlewares } from '../../middlewares/index.js';

const router = express.Router();


// /api/v1/airplanes POST
router.post('/' ,
       AirplaneMiddlewares.validateCreateRequest,
       AirplaneController.createAirplane);

router.get('/',
       AirplaneController.getAirplanes)       

export default router;