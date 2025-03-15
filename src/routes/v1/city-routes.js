import express from 'express';
import { CityController } from '../../controllers/index.js';


const router = express.Router();


// /api/v1/cities POST
router.post('/', CityController.createCity);




export default router;