const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
    "books",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    }
)

module.exports = Book;