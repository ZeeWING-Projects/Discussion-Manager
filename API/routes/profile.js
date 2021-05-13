var express = require("express");
const { use } = require("./chat");
var infoRouter = express.Router();
var uploadProfileImageRouter = express.Router();
var loadProfileRouter = express.Router();

const {firebase,admin,firebaseConfig} = require('./firebaseConnector')


module.exports={
    infoProfile:
    infoRouter.get("/info",function(req,res,next){
        res.send({responseMessage:"You have called profile service..! And its working properly!"})
    }),
    uploadProfileImageRouter:
    uploadProfileImageRouter.get("/uploadProfileImage",function(req,res){
        res.send({responseMessage:"You have called profile service and this is an post method please provide json"})
    }),
    uploadProfileImageRouter:
    uploadProfileImageRouter.post("/uploadProfileImage",function(req,res){

    if(req.body.email!=null && req.body.password!=null)  
    {
        try{
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then((userCredential) => {
         // Signed in
         var user = firebase.auth().currentUser;

         user.updateProfile({
            photoUrl: req.body.photoUrl
         }).then(function() {
           res.status(200).send({responseMessage:"Uploaded Profile Image"})
         }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.status(400).send({
                responseMessage:errorMessage,
                responseCode:1
            })  
         });

        }) .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    res.status(400).send({
                        responseMessage:errorMessage,
                        responseCode:3
                    })  
        });
        }
        catch(t)
        {
            es.status(400).send({
                responseMessage:t.message,
                responseCode:4,
                userId:user.uid
            })  
        }
    }  
    else
    {
        res.status(400).send({
            responseMessage:"Invalid input parameters",
            responseCode:5,
            userId:user.uid
        })
    }

    }),
    loadProfileRouter:
    loadProfileRouter.get("/loadProfile",function(req,res){
        res.send({responseMessage:"You have called profile service and this is an post method please provide json"})
    }),
    loadProfileRouter:
    loadProfileRouter.post("/loadProfile",function(req,res){
    if(req.body.email!=null)  
    {
    admin
   .auth()
   .getUserByEmail(req.body.email)
   .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    res.status(200).send(userRecord.toJSON())
   })
   .catch((error) => {
    console.log('Error fetching user data:', error);
    });
    }
      
    }),
}