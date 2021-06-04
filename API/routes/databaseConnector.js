var mysql = require('mysql');

var connectionToMySql = mysql.createConnection({
  host: "162.241.24.128",
  user: "hrtowkmy_zeeshan",
  database:"hrtowkmy_discussion_manager",
  password: "zee1234"
});

connectionToMySql.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=connectionToMySql;


// var mysql = require('mysql');

// function handleDisconnect() {

// var connectionToMySql = mysql.createConnection({
//   host: "162.241.24.128",
//   user: "hrtowkmy_zeeshan",
//   database:"hrtowkmy_discussion_manager",
//   password: "zee1234"
// });




// connectionToMySql.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
                                     
                                          
//   connectionToMySql.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//       handleDisconnect();                         
//     } else {                                      
//       throw err;                                  
//     }
//   });

// module.exports=connectionToMySql;
// }

// handleDisconnect()


