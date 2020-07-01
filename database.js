const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('project', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = userModel(sequelize, DataTypes)

sequelize.sync()

module.exports = {
    sequelize: sequelize,
    User: User
}