const express = require("express");
const viewRouter=express.Router();

const path = require("path");
const { showBoard, showlogin, showSignup } = require("../Controller/viewController");



viewRouter.get('/board',showBoard);
viewRouter.get('/',showlogin);
viewRouter.get('/login',showlogin);
viewRouter.get('/signup',showSignup);


module.exports=viewRouter;