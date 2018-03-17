var express = require("express");

var router = express.Router();

var burger = require ("../models/burger.js");


router.get("/",function(req,res){

	burger.all(function(data){
		res.render("index",{burgers: data});
	});
});

router.post("/api/burgers", function(req,res){
    var newBurger = req.body;
    console.log(newBurger);
    burger.create(newBurger.burger_name,function(data){
        // console.log(JSON.stringify(data));
        console.log("burger created");
        res.end();
    });
});

router.put("/api/burgers/:id", function(req,res){
    var id = req.params.id;
    burger.update(true,id, function(result){
        console.log("burger devoured");
        // console.log(JSON.stringify(result));
       res.end();
    });
});

router.delete("/api/burgers/:id", function(req,res){
    var id = req.params.id;
    burger.delete(id, function(result){
        console.log("burger deleted");     
        res.end();
    });
});
module.exports = router;