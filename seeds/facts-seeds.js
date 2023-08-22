const { Facts } = require('../models');

const factsData = [
    {
    fact_season: "Winter",
        fact_name: "Mythological Hunter in Greek Mythology.",
        fact_visibility: "January to April (northern hemisphere)",
        constellation_id: 1,
    },
    {
        fact_season: "Summer",
            fact_name: "A scorpion sent by Artemis to fight Orion.",
            fact_visibility: "Southern Celestial Hemisphere in July around 21:00",
            constellation_id: 2,
  },
];


const seedFacts = () => Facts.bulkCreate(factsData);

module.exports = seedFacts;