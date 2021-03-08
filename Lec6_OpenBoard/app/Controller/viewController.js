const path = require("path");
const userModel = require("../Model/userModel");

async function showBoard(req,res){
    try{
    // let user=await userModel.create({name:'opopo',email:'opopopooop'})
    res.sendFile(path.join(__dirname,'..','public','master.html'));
    }
    catch(e){
        console.log("error yha haai",e);
    }
}


async function showlogin(req,res){
    res.sendFile(path.join(__dirname,'..','public','login.html'));
}

async function showSignup(req,res){
    res.sendFile(path.join(__dirname,'..','public','signup.html'));
}

module.exports={
    showBoard,
    showlogin,
    showSignup
}