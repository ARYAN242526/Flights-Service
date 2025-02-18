import express from 'express';
import { AirplaneController } from '../../controllers/index.js';

const router = express.Router();

console.log("inside airplane routes");
// /api/v1/airplanes POST
router.post('/' , AirplaneController.createAirplane);

export default router;