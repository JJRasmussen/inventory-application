

async function getGardenView(req, res){
    res.render('index', {view:'gardenView'});
};
async function getAllPlantBeds(req, res){
    console.log("howdy")
    res.render('index', {view: 'plantBeds'});
};
async function getAllPlants(req, res){
    res.render('index', {view: 'plants'});
};

module.exports = {
    getGardenView,
    getAllPlants, 
    getAllPlantBeds
}