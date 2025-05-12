const { Router } = require('express');
const { getGardenView } = require('../controllers/gardenController')
const { getAllPlants, /*getSpecificPlant*/ } = require('../controllers/plantsController')
const { getAllPlantBeds, /*getSpecificPlantBed*/ } = require('../controllers/plantBedController')

const indexRouter = Router();

indexRouter.get('/', getGardenView);
indexRouter.get('/plants', getAllPlants);
//indexRouter.get('/plant/:plantId', getSpecificPlant);
indexRouter.get('/plantBeds', getAllPlantBeds);
//indexRouter.get('/plantBed/:plantBedId', getSpecificPlantBed);

module.exports = indexRouter;