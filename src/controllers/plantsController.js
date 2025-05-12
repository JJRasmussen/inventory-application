async function getAllPlants(req, res){
    res.render('index', { view: 'plants/plants' });
};
/*
async function getSpecificPlant(req, res){
    const { plantId } = req.params;
    const plant = 2//await db.getPlantById(Number(plantId));
    res.render('index', { 
        view: 'plants/specificPlants',
        plantInformation: plant
    });
};
*/

module.exports = {
    getAllPlants, 
    //getSpecificPlant,
}