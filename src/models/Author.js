const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Author = sequelize.define('Author', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Author;