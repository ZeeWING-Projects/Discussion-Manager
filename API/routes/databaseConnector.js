var mysql = require('mysql');

var connectionToMySql = mysql.createConnection({
  host: "localhost",
  user: "dm",
  database:"discussion_manager",
  password: "zee1234"
});

connectionToMySql.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=connectionToMySql;
