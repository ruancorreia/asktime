const path = require("path");
const Pergunta = require("../database/Pergunta")

const IndexController = {
    home: (req, res)=>{
        Pergunta.findAll({raw: true}).then(perguntas =>{
            console.log(perguntas);
            res.render("index",{
                perguntas: perguntas
            });
            
        });
        
    },
    redirectHome:(req, res)=>{
        res.redirect("/")
    }
}

module.exports = IndexController;