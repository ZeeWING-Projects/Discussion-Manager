var express = require("express");
const { use } = require("./chat");
const connectionToMySql = require("./databaseConnector");
var infoRouter = express.Router();
var uploadProfileImageRouter = express.Router();
var loadProfileRouter = express.Router();
var loadProfileWithUidRouter = express.Router();

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

    if(req.body.userUid!=null)  
    {
   admin
  .auth()
  .updateUser(req.body.userUid, {
    photoUrl: 'http://www.example.com/12345678/photo.png'
   })
  .then(function() {

    var sql = `UPDATE users SET profileImage = '${req.body.photoUrl}' WHERE userUid = '${req.body.userUid}'`;
    connectionToMySql.query(sql, function (error, result) {
      if (error)
      {
          //Here add code which will remove the record from firebase in case there was issue in qur
        var errorCode = error.code;
        var errorMessage = error.message;
        res.status(400).send({
            responseMessage:errorMessage,
            responseCode:1
        })  
      }
      else
      {
        res.status(200).send({responseMessage:"Uploaded Profile Image"})
        console.log(result.affectedRows + " record(s) updated");
      }
    
    });
   
 }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.status(400).send({
        responseMessage:errorMessage,
        responseCode:1
    })  
 });

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

    loadProfileWithUidRouter:
    loadProfileWithUidRouter.get("/loadProfileWithUid",function(req,res){
        res.send({responseMessage:"You have called profile service and this is an post method please provide json"})
    })
    ,
    loadProfileWithUidRouter:
    loadProfileWithUidRouter.post("/loadProfileWithUid",function(req,res){
    if(req.body.uid!=null)  
    {
    admin
   .auth()
   .getUser(req.body.uid)
   .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    res.status(200).send(userRecord.toJSON())
   })
   .catch((error) => {
    console.log('Error fetching user data:', error);
    });
    }
      
    })   
}