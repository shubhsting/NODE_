const express = require("express");
const { getHomePage ,getloginPage,getSignUpPage,forgotPassPage,getPlansPage,getProfilePage} = require("../Controller/viewController");
const viewRouter = express.Router();



viewRouter.route("").get(getHomePage);
viewRouter.route("/login").get(getloginPage);
viewRouter.route("/home").get(getHomePage);
viewRouter.route("/signup").get(getSignUpPage);
viewRouter.route("/plans").get(getPlansPage);
viewRouter.route("/forgotpassword").get(forgotPassPage);
viewRouter.route("/profile").get(getProfilePage);
module.exports.viewRouter = viewRouter;