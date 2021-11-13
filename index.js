//Importacao dos modulos 
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./src/routes/index")
const bodyParser = require("body-parser");

const port = 3333;

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));


app.use(bodyParser.urlencoded({extended: false})); //decodifica os dados enviados do formulario para o JS
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}));

// Definindo a pasta publica [ Usando o Path Resolve]
app.use(express.static(path.resolve('src', 'public'))); 


app.use(routes);

app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario enviado!" + "Titulo: "+ titulo + " Descrição: " + descricao)
});


app.listen(port, ()=> console.log(`O servidor foi iniciado na porta: ${port}...`))