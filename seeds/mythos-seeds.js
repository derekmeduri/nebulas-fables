const { Mythos } = require('../models');

const mythosData = [
    
];


const seedMythos = () => Mythos.bulkCreate(mythosData);

module.exports = seedMythos;
