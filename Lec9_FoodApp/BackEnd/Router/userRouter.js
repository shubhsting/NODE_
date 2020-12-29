const express = require("express");
const userRouter = express.Router();
const { getAllUsers, createUser, getUserByID, updateUserByID, deleteUserByID } = require("../Controller/userController.js");

const { signup, login, protectRouter, forgotPassword,resetPassword } = require("../Controller/authController");



userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/forgotpassword", forgotPassword)
userRouter.patch("/resetpassword/:token",resetPassword)

userRouter.route("")
    //     .get(getAllUsers)
    .post(createUser);
userRouter.route("")
    .get(protectRouter, getUserByID)
    .patch(protectRouter, updateUserByID)
    .delete(protectRouter, deleteUserByID);



module.exports = userRouter;