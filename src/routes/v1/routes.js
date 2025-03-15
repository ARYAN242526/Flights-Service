import express from "express";

import { InfoController } from "../../controllers/index.js";

import airplaneRoutes from './airplane-routes.js';
import cityRoutes from './city-routes.js';

const router = express.Router();

router.use('/airplanes' , airplaneRoutes);
router.use('/cities' , cityRoutes);


router.get('/info', InfoController.info);

export default router;
