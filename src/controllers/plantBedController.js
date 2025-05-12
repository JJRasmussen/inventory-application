async function getAllPlantBeds(req, res){
    console.log("howdy")
    res.render('index', { view: 'plantBeds/plantBeds' });
};
/*
async function getSpecificPlantBed(req, res){
    const { plantBedId } = req.params;
    const plantBed = 2//await db.getPlantBedById(Number(plantBedId));
    res.render('index', { 
        view: 'plantBeds/specificPlantbed',
        plantBedInformation: plantBed
    });
};
*/

module.exports = {
    getAllPlantBeds,
    //getSpecificPlantBed
}