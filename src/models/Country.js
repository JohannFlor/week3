const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const country = sequelize.define('country', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    languaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flagUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = country;