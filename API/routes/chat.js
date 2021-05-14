var express = require("express");
const connectionToMySql = require("./databaseConnector");
var router = express.Router();
var addInContactListrouter = express.Router();


module.exports={
    chatInfo:
    router.get("/info",function(req,res,next)
    {
        res.send({responseMessage:"You have called chat service..! And its working properly!"})
    })
    ,
    addInContactListrouter:
    addInContactListrouter.get("/addInContactListrouter",function(req,res){
        res.send({responseMessage:"you have call a method of chat service and this is a post method so please provide the json"})
    })
    ,
    addInContactListrouter:
    addInContactListrouter.post("/addInContactListrouter",function(req,res){
    var sql = `INSERT INTO contactslist (userUid,contactUserUid,contactUserName,contactUserProfile) VALUES ('${req.body.userUid}', '${req.body.contactUserUid}','${req.body.contactUserName}','${req.body.contactUserProfile}')`;
    connectionToMySql.query(sql, function (err, result) {
        if (err)
        {
            var errorCode = err.code;
            var errorMessage = err.message;
            res.status(400).send({
                responseMessage:errorMessage,
                responseCode:3
            })  
        }
        else
        {
            res.status(200).send({
                responseMessage:"Record Added",
                responseCode:1
            })
        }
        
        });
        
    })
    
}


