const express = require("express");
const userRouter = express.Router();
const { getAllUsers, createUser, getUserByID, updateUserByID, deleteUserByID } = require("../Controller/userController.js");

const { signup, login, protectRouter } = require("../Controller/authController");

// userRouter.route("")
//     .get(getAllUsers)
//     .post(createUser);
userRouter.route("")
    .get(protectRouter, getUserByID)
    .patch(protectRouter, updateUserByID)
    .delete(protectRouter, deleteUserByID);

userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;