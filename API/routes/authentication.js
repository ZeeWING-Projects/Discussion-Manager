var express = require("express");
var inforAuthentication = express.Router();
var loginRouter = express.Router();

const connectionToMySql = require("./databaseConnector");
const {firebase,admin} = require('./firebaseConnector')


module.exports={
    inforAuthentication:
    inforAuthentication.get("/info",function(req,res,next){
        res.send("You have called authentication service..! And its working properly!")
    })
    ,
    loginRouter:
    loginRouter.get("/login",function(req,res){
        res.send("This is an post funtion, please porovide the  jason object")
    })
    ,
    loginRouter:
    loginRouter.post("/login",function(req,res){
    if(req.body.email!=null && req.body.password!=null)  
    {
        try{
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then((userCredential) => {
         // Signed in
        var user = userCredential.user;
        if(user.emailVerified)
        {
            res.status(200).send("Loged in")
        }
        else
        {
            res.status(200).send("not verified email")
        }

        }) .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    res.status(400).send(errorMessage)  
        });
        }
        catch(t)
        {
            es.status(400).send(t.message)  
        }
    }  
    else
    {
        res.status(400).send("Please provide valid parameters")
    }
    })
    
}