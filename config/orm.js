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
  insertOne: function(table,name,devoured,handoff) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VAlUES (??,??)";
    console.log(queryString);
    connection.query(queryString, [table, name, devoured], function(err, result) {
      if (err) throw err;
      handoff(result);
    });
  },
  updateOne: function(table,name,devoured,id,handoff) {
    var queryString =
      "UPDATE ?? SET burger_name = ??, devoured = ?? WHERE id = ??";

    connection.query(
      queryString,
      [table, name, devoured, id],
      function(err, result) {
        if (err) throw err;
        handoff(result);
      }
    );
  }
};

module.exports = orm;
