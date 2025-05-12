const { Router } = require('express');
const { getGardenView } = require('../controllers/gardenController')

const indexRouter = Router();

indexRouter.get('/', getGardenView);

module.exports = indexRouter