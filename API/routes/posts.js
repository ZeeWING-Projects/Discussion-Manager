var express = require("express");
const connectionToMySql = require("./databaseConnector");
var postRouterInfo = express.Router();
var addPostRouter = express.Router();





// http:localhost:8000/postsServices/addPost




module.exports=
{
    postRouterInfo:
    postRouterInfo.get("/",function(req,res,next){
        res.send("You have called posts service..! And its working properly!")
    }),
    addPostRouter:
    addPostRouter.get("/addPost",function(req,res){
        res.send("You are trying to get the service for adding new post to database....")
    }),
    addPostRouter:
    addPostRouter.post("/addPost",function(req,res){

        var sql = `INSERT INTO posts (userUid,postTitle,postDesc,postImage,postSentTime) VALUES ('${req.body.userUid}', '${req.body.postTitle}','${req.body.postDesc}','${req.body.postImage}','${req.body.sentTimeDate}')`;
        connectionToMySql.query(sql, function (error, result) {
        if (error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.status(404).send({
              responseMessage:errorMessage,
              responseCode:1  
            })
        }
        else{
            res.status(200).send({
                responseMessage:"Uploaded the post",
                responseCode:2
            });
        }
       
        });

        
    })
       
}