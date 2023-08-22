const { Constellation } = require('../models');

const constellationData = [
    {
        id: 1,
      constellation_name: "Orion"  
    },
    {
        id: 2,
        constellation_name: 'Scorpio'
    },
];


const seedConstellation = () => Constellation.bulkCreate(constellationData);

module.exports = seedConstellation;