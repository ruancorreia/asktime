/*
Create Const
create const connection with new sequelize + BD+User+Psw + host+dialect
Export
*/

const sequelize = require("sequelize")

const connection = new sequelize ("asktime", "root", "Unlocked1990", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;