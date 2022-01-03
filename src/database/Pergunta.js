const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta",{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(()=>{        //  msgn para confirmação de criação do banco de dados 
    console.log("Tabela Criada!")
})

module.exports = Pergunta;