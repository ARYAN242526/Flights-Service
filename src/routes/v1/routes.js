import express from "express";

import { InfoController } from "../../controllers/index.js";

import airplaneRoutes from './airplane-routes.js';

const router = express.Router();

router.use('/airplanes' , airplaneRoutes);

router.get('/info', InfoController.info);

export default router;
