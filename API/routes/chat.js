const { json } = require("express");
var express = require("express");
const connectionToMySql = require("./databaseConnector");
var router = express.Router();
var addInContactListrouter = express.Router();
var loadAllContactsRouter = express.Router();
var sendMessageRouter = express.Router();
var loadChatRouter = express.Router();


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
                responseCode:1
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
    ,
    loadAllContactsRouter:
    loadAllContactsRouter.get("/loadAllContacts",function(req,res){
        res.send({responseMessage:"you have call a method of chat service and this is a post method so please provide the json"})  
    })
    ,
    loadAllContactsRouter:
    loadAllContactsRouter.post("/loadAllContacts",function(req,res){
        connectionToMySql.query(`SELECT * FROM contactslist WHERE userUid = '${req.body.uid}'`, function (err, result) {
            if (err)
            { 
                var errorCode = err.code;
                var errorMessage = err.message;
                res.status(400).send({
                    responseMessage:errorMessage,
                    responseCode:1
                })  
            }
            else
            {
                res.status(200).send(result)
            }
          });
       
    })
    ,
    sendMessageRouter:
    sendMessageRouter.get("/sendMessage",function(req,res){
        res.send({responseMessage:"you have call a method of chat service and this is a post method so please provide the json"})          
    })
    ,
    
    sendMessageRouter:
    sendMessageRouter.post("/sendMessage",function(req,res){
        var sql = `INSERT INTO sentmessages (userUid,recieverUid,messageType,messageContent,messageStatus,messageSendTime) VALUES 
        ('${req.body.userUid}', '${req.body.recieverUid}','${req.body.messageType}','${req.body.messageContent}','${req.body.messageStatus}','${req.body.messageSendTime}')`;
        connectionToMySql.query(sql, function (err, result) {
        if (err)
        {
            var errorCode = err.code;
            var errorMessage = err.message;
            res.status(400).send({
                responseMessage:errorMessage,
                responseCode:1
            })  
        }
        else
        {
                            
            res.status(200).send({
                responseMessage:"Message Sent",
                responseCode:1
            })
        }
        
        });     
    })
    ,
    loadChatRouter:
    loadChatRouter.get("/loadChat",function(req,res){
        res.send({responseMessage:"you have call a method of chat service and this is a post method so please provide the json"})          
    })
    ,
    loadChatRouter:
    loadChatRouter.post("/loadChat",function(req,res){

        connectionToMySql.query(`SELECT * from sentmessages
         WHERE userUid='${req.body.userUid}' and recieverUid='${req.body.recieverUid}' 
         or recieverUid='${req.body.userUid}' and userUid='${req.body.recieverUid}' 
         ORDER BY serialNumber DESC LIMIT ${req.body.numberOfMessages} OFFSET ${req.body.messageOffset}`, function (err, result) {
            if (err)
            { 
                var errorCode = err.code;
                var errorMessage = err.message;
                res.status(400).send({
                    responseMessage:errorMessage,
                    responseCode:1
                })  
            }
            else
            {
                for(var attributename in result){
                    console.log(result[attributename].serialNumber)
                    if(result[attributename].messageStatus==='New')
                    {
                        var sql =  `UPDATE sentmessages SET messageStatus = 'Seen' WHERE serialNumber = '${result[attributename].serialNumber}'`;
                        connectionToMySql.query(sql, function (err, result) {
                          if (err){
                            var errorCode = err.code;
                            var errorMessage = err.message;
                            res.status(400).send({
                                responseMessage:errorMessage,
                                responseCode:1
                            })  
                          }
                          else
                          {
                            console.log("Updated to seen");    
                          }
                          
                        });
                    }
                }

                res.status(200).send(result)
            }
          });
       

              
    })
    
}


