var mysql = require('mysql');

var connectionToMySql = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"discussion_manager",
  password: ""
});

connectionToMySql.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=connectionToMySql;
