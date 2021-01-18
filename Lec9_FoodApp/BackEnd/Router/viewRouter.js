const express = require("express");
const { isLoggedIn, logout } = require("../Controller/authController");
const { getHomePage, getloginPage, getSignUpPage, forgotPassPage, getPlansPage, getProfilePage, getreviews, addanewPlan, getUsers } = require("../Controller/viewController");
const viewRouter = express.Router();


viewRouter.use(isLoggedIn);
viewRouter.route("").get(getHomePage);
viewRouter.route("/login").get(getloginPage);
viewRouter.route("/home").get(getHomePage);
viewRouter.route("/signup").get(getSignUpPage);
viewRouter.route("/plans").get(getPlansPage);
viewRouter.route("/forgotpassword").get(forgotPassPage);
viewRouter.route("/profile").get(getProfilePage);
viewRouter.route("/logout").get(logout);
viewRouter.route("/reviews").get(getreviews);
viewRouter.route("/addnewplan").get(addanewPlan);
viewRouter.route("/users").get(getUsers);

module.exports.viewRouter = viewRouter;