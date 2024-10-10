const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('node-crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected with Sequelize'))
    .catch(err => console.error('Unable to connect to the database:', err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, DataTypes);

module.exports = db;
