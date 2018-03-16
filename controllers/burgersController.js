var express = require("express");

var router = express.Router();

var burger = require ("../models/burger.js");


router.get("/",function(req,res){

	burger.all(function(data){
		res.render("index",{burgers: data});
	});
});

router.post("/api/burgers", function(req,res){
    var burger = req.body;
    burger.create(burger.burger_name,function(data){
        console.log(json.stringify(data));
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req,res){
    var id = req.params.id;
    burger.update(false,id, function(result){
        console.log(json.stringify(result));
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } 
        else {
        res.status(200).end();
        }
    });
});

router.delete("api/burgers/:id", function(req,res){
    var id = req.params.id;
    burger.delete(id, function(result){
        console.log("burger deleted");     
    });
});
module.exports = router;