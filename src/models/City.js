const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const City = sequelize.define('City', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCapital: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    //CountryId
});

module.exports = City;