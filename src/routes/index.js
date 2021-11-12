const express = require("express");
const routes = express.Router();
const IndexController = require("../controllers/index")



routes.get("/", IndexController.home);
routes.get("/index", IndexController.redirectHome);

routes.get("/perguntar", (req, res)=>{
    res.render("perguntas")
});


module.exports = routes;