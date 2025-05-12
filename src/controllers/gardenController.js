async function getGardenView(req, res){
    res.render('index', { view:'gardenView' });
};

module.exports = {
    getGardenView
}