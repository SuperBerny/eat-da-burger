//Setup MYSQL connection
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
   connection = mysql.createConnection({
   port: 3306,
   host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
   user: 'okp9fjgtx0jde39j',
   password: 'oqf8o0rf6ty0uvc6',
   database: 'pemz0ljtl4lx72tu'
   });
};

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