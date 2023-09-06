const sequelize = require('../config/connection');

const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');
  await seedPosts();
  console.log('\n----- Posts SEEDED -----\n');

  process.exit(0);
};

seedAll();
