const pool = require('./pool');

async function queryAllPlantBeds(){
    const { rows } = await pool.query(
        'SELECT bed_name, drawing FROM plantbeds'
    );
    return rows;
};

async function querySpecificPlantBed(id){
    const { rows } = await pool.query(
        'SELECT bed_name, drawing FROM plantbeds WHERE id = ($1)', [id]
    );
    return rows[0];
};

async function queryAllPlants(){
    const { rows } = await pool.query(
        'SELECT common_name, image FROM plants'
    );
    return rows;
};

async function querySpecificPlants(id){
    const { rows } = await pool.query(
        'SELECT common_name, scientific_name, perennial FROM plants'
    );
    return rows;   
};

module.exports = {
    queryAllPlantBeds,
    querySpecificPlantBed,
    queryAllPlants,
    querySpecificPlants,
}