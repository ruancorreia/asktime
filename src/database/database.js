/*
Create Const
create const connection with new sequelize + BD+User+Psw + host+dialect
Export
*/

const sequelize = require("sequelize")

const connection = new sequelize ("asktime", "root", "", { // asktime = nome da tabela do banco, root = usuario do banco, "" = senha do banco: aqui esta em branco por isso aspas vazias
    host: "localhost", // local onde o banco esta 
    dialect: "mysql" // qual tipo de banco 
});

module.exports = connection;