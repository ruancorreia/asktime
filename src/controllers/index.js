const path = require("path")

const IndexController = {
    home: (req, res)=>{
        res.render("index")
    },
    redirectHome:(req, res)=>{
        res.redirect("/")
    }
}

module.exports = IndexController;