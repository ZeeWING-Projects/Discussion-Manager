var express = require("express");
const connectionToMySql = require("./databaseConnector");
const {firebase,admin} = require('./firebaseConnector')

var infoRouter = express.Router();
var createAccountWithEmailRouter = express.Router()


module.exports = {
    
    infoAccounts: 
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
    
    if(req.body.email!=null && req.body.password!=null  && connectionToMySql)    
    {
        admin
        .auth()
        .createUser({
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password,
          displayName: req.body.nameToDisplay,
          address:req.body.address,
          onlineStatus:req.body.onlineStatus,
          profileURL: null,
          disabled: false,
        })
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log('Successfully created new user:', userRecord.email);
          res.status(200).send(`Successfully created new user:uid ${userRecord.uid} with email ${userRecord.email}`)
        })
        .catch((error) => {
          console.log('Error creating new user:', error);
          res.status(400).send(`Error creating new user: `)
        });
    }
    else
    {
        res.status(400).send("Please provide valid parameters")
    }   

    })
    

};
