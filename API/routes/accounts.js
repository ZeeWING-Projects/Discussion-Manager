var express = require("express");
const connectionToMySql = require("./databaseConnector");

var infoRouter = express.Router();
var createAccountWithEmailRouter = express.Router()

var mySqlConnection = require('./databaseConnector')
var firebaseConnection = require('./firebaseConnector')




// createAccountWithEmailRouter.post("/createAccountWithEmail",function(req,res,next){
    

//     // firebase.auth().createUserWithEmailAndPassword("zeeshmedd0010@gmail.com", "zee1234")
//     // .then((userCredential) => {
//     //   var user = userCredential.user;
//     //   res.send("Created the account")
      
//     // })
//     // .catch((error) => {
//     //   var errorCode = error.code;
//     //   var errorMessage = error.message;
//     //   res.send(errorMessage)
//     //     });
  
//     res.send("Created the account")
// })

module.exports = {
    
    infoRouter: 
    infoRouter.get("/info",function(req,res,next){
        res.send("You have called accounts service..! And its working properly!")
    })
    ,

    createAccountWithEmailRouter:
    createAccountWithEmailRouter.get("/createAccountWithEmail",function(req,res,next){
        res.send("This is an post method please provice the jason object in body.")
    })
    ,
    createAccountWithEmailRouter:
    createAccountWithEmailRouter.post("/createAccountWithEmail",function(req,res,next){
    
    if(req.body.email!=null && req.body.password!=null && connectionToMySql)    
    {
        firebaseConnection.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then((userCredential) => {
               var user = userCredential.user;
               
               var sql = `INSERT INTO users (name,email, password) VALUES ('${req.body.name}', '${req.body.email}','${req.body.password}')`;
               connectionToMySql.query(sql, function (err, result) {
                 if (err)
                 {
                    res.status(400).send(err.message) 
                 }
                 else
                 {
                    

                     res.status(200).send("Created Account Successfully")
                 }
               });

         }).catch((error) => {
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 res.send(errorMessage)
       });
    }
    else
    {
        res.status(400).send("Please provide valid parameters")
    }   

    })

};
