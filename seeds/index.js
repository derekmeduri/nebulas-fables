const seedMythos = require('./mythos-seeds');
const seedStar = require('./star-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');
const seedFacts = require('./facts-seeds');
const seedConstellation = require('./constellation-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedMythos();
    console.log('\n----- MYTHOS SEEDED -----\n');

    await seedConstellation();
    console.log('\n----- CONSTELLATION SEEDED -----\n');

    await seedFacts();
    console.log('\n----- FACTS SEEDED -----\n');

    await seedStar();
    console.log('\n----- STAR SEEDED -----\n');
  
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    process.exit(0);
};

seedAll();