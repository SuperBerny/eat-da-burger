//Setup MYSQL connection
var mysql = require('mysql');
var connection = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   password: "Qpzmgh&8",
   database: "burgers_db"
});
//Make connection
connection.connect(function(err) {
   if (err) {
      console.error("error connection: " + err.stack);
      return;
   };
   console.log("connect as id: " + connection.threadId);
});

//Export connection for ORM to use
module.exports = connection;