const express = require("express");
const viewRouter=express.Router();

const path = require("path");

viewRouter.get('/board',function(req,res){
    res.sendFile(path.join(__dirname,'..','public','master.html'));
  });

module.exports=viewRouter;