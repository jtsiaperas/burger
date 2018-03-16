var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(table,handoff) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      handoff(result);
    });
  },
  insertOne: function(table,name,handoff) {
    var queryString = "INSERT INTO ?? (burger_name) VAlUES (??)";
    console.log(queryString);
    connection.query(queryString, [table, name], function(err, result) {
      if (err) throw err;
      handoff(result);
    });
  },
  updateOne: function(table,devoured,id,handoff) {
    var queryString =
      "UPDATE ?? SET devoured = ?? WHERE id = ??";

    connection.query(
      queryString,
      [table, devoured, id],
      function(err, result) {
        if (err) throw err;
        handoff(result);
      });
  },
  delete: function(table,id,handoff){
    var queryString = "delete from ?? where id = ??";
    connection.query(queryString,[table,id], function(err,result){
      if (err) throw err;
      handoff(result);
    });
  }
};


module.exports = orm;
