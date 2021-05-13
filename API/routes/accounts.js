var express = require("express");
const connectionToMySql = require("./databaseConnector");
const {firebase,admin} = require('./firebaseConnector')

var infoRouter = express.Router();
var createAccountWithEmailRouter = express.Router()
var restMyPasswordWithEmailLinkRouter = express.Router()


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
          emailVerified: false,
          displayName: req.body.nameToDisplay,
          address:req.body.address,
          onlineStatus:req.body.onlineStatus,
          profileURL: null,
          disabled: false,
        })
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
          .then((userCredential) => {
           // Signed in
          var user = userCredential.user;

          var userL = firebase.auth().currentUser;
            userL.sendEmailVerification().then(function() {
               // Email sent.
               res.status(200).send(`Successfully created new user:uid ${userRecord.uid} with email ${userRecord.email} and sent email`)
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                res.status(400).send(errorMessage)  
            }); 
          }) .catch((error) => {
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      res.status(400).send(errorMessage)  
          });
          console.log('Successfully created new user:', userRecord.email);
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
    ,
    restMyPasswordWithEmailLinkRouter:
    restMyPasswordWithEmailLinkRouter.get("/restMyPasswordWithEmailLink",function(req,res){
        res.send("This is an post method of accounts service, please provide the body in json")
    })
    ,
    restMyPasswordWithEmailLinkRouter:
    restMyPasswordWithEmailLinkRouter.post("/restMyPasswordWithEmailLink",function(req,res){
    if(req.body.email!=null)
    {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(req.body.email).then(function() 
        {
            res.status(200).send("Sent")
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.status(404).send(errorMessage)
        });
    }
    else
    {
        res.status(406).send("Please provide a vaild email")
    }

    })

};
