import express from 'express';
import { FlightController } from '../../controllers/index.js';
import { FlightMiddlewares } from '../../middlewares/index.js';

const router = express.Router();


// /api/v1/flights POST
router.post('/' ,
       FlightMiddlewares.validateCreateRequest,
       FlightController.createFlight);
// /api/v1/flights GET  
router.get('/' ,
       FlightController.getAllFlights);
       


export default router;