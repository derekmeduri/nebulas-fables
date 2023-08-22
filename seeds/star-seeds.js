const { Star } = require('../models');

const starData = [
    {
        id: 1,
        star_name: "Rigel",
        constellation_id: 1,
    },
    {
        star_name: "Betelgeuse",
        constellation_id: 1,
    },
    {
        star_name: "Bellatrix",
        constellation_id: 1,
    },
    {
        star_name: "Saiph",
        constellation_id: 1,
    },
    {
        star_name: "Meissa A",
        constellation_id: 1,
    },
    {
        star_name: "Belt",
        constellation_id: 1,
    },
    {
        star_name: "Alnitak",
        constellation_id: 1,
    },
    {
        star_name: "Alnilam",
        constellation_id: 1,
    },
    {
        star_name: "Mintaka",
        constellation_id: 1,
    },
    {
        star_name: "Acrab",
        constellation_id: 2,
    },
    {
        star_name: "Alniyat",
        constellation_id: 2,
    },
    {
        star_name: "Antares",
        constellation_id: 2,
    },
    {
        star_name: "Dschubba",
        constellation_id: 2,
    },
    {
        star_name: "Fang",
        constellation_id: 2,
    },
    {
        star_name: "Girtab",
        constellation_id: 2,
    },
    {
        star_name: "Larawag",
        constellation_id: 2,
    },
    {
        star_name: "Lesath",
        constellation_id: 2,
    },
    {
        star_name: "Paikauhale",
        constellation_id: 2,
    },
    {
        star_name: "Pipirima",
        constellation_id: 2,
    },
    {
        star_name: "Sargas",
        constellation_id: 2,
    },
    {
        star_name: "Shaula",
        constellation_id: 2,
    },
    {
        star_name: "Xamidimura",
        constellation_id: 2,
    },
    {
        star_name: "Apollyon",
        constellation_id: 2,
    },
    {
        star_name: "Eta scorpii",
        constellation_id: 2,
    },
    {
        star_name: "Zeta2",
        constellation_id: 2,
    },
 
];


const seedStar = () => Star.bulkCreate(starData);

module.exports = seedStar;