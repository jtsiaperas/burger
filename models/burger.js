var orm = require ("../config/orm.js");

var burger = {
    all: function(handoff) {
    	orm.selectAll("burgers",function(res){
    		handoff(res);
    	});
    },
    create: function(name,handoff){
    	orm.insertOne("burgers",name, function(res){
    		handoff(res);
    	});
    },
    update: function(devoured,id,handoff){
    	orm.updateOne("burgers",devoured,id,function(res){
    		handoff(res);
    	});
    },
    delete: function(id,handoff){
        orm.delete("burgers",id,function(res){
            handoff(res);
        });
    }
};

module.exports = burger;