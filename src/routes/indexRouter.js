const { Router } = require('express');
const { getGardenView, getAllPlants, getAllPlantBeds  } = require('../controllers/gardenController')

const indexRouter = Router();

indexRouter.get('/', getGardenView);
indexRouter.get('/plants', getAllPlants);
indexRouter.get('/plantBeds', getAllPlantBeds);

module.exports = indexRouter