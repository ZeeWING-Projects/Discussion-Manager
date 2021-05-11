var express = require("express");
var router = express.Router();

router.get("/",function(req,res,next){
    res.send("You have called chat service..! And its working properly!")
});
module.exports=router;
