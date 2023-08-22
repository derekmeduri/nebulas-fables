const { User } = require('../models');
const bcrypt = require('bcrypt'); 
async function hashedPw() {
return await bcrypt.hash('12bnk34j', 8)
}
//const hashedPw =  bcrypt.hash('12bnk34j', 8)
const userData = [
    {
        username: 'boopyhij',
        email: 'mphillips2017@gmail',
        password: '12bnk34j'
    }
];


const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true, 
    returning: true,
});

module.exports = seedUser;