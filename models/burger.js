var orm = require ("../config/orm.js");

var burger = {
    all: function(handoff) {
    	orm.selectAll("burgers",function(res){
    		handoff(res);
    	});
    },
    create: function(name,devoured,handoff){
    	orm.insertOne("burgers",name,devoured, function(res){
    		handoff(res);
    	});
    },
    update: function(name,devoured,id,handoff){
    	orm.updateOne("burgers",name,devoured,id,function(res){
    		handoff(res);
    	});
    }
};

module.exports = burger;