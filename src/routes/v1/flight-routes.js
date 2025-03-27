import express from 'express';
import { FlightController } from '../../controllers/index.js';
import { FlightMiddlewares } from '../../middlewares/index.js';

const router = express.Router();


// /api/v1/flights POST
router.post('/' ,
       FlightMiddlewares.validateCreateRequest,
       FlightController.createFlight);
       


export default router;