//Setup MYSQL connection
var mysql = require('mysql');
var connection;
var test;


// connection = mysql.createConnection({
//    host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//    user: 'okp9fjgtx0jde39j',
//    password: 'oqf8o0rf6ty0uvc6',
//    database: 'pemz0ljtl4lx72tu'
// });

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSBD_URL);
   test = "I connected to JAWSDB";
} else {
   connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Qpzmgh&8",
      database: "pemz0ljtl4lx72tu"
   });
   test = "I connected to local connection";
};

//Make connection
connection.connect(function(err) {
   console.log(test);
   if (err) {
      console.error("error connection: " + err.stack);
      return;
   };
   console.log("connect as id: " + connection.threadId);
});

//Export connection for ORM to use
module.exports = connection;

//mysql://okp9fjgtx0jde39j:oqf8o0rf6ty0uvc6@x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/pemz0ljtl4lx72tu