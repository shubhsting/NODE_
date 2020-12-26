const express = require("express");
const userRouter = express.Router();
const { getAllUsers, createUser, getUserByID, updateUserByID, deleteUserByID } = require("../Controller/userController.js");

const { signup, login } = require("../Controller/authController");

userRouter.route("").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUserByID).patch(updateUserByID).delete(deleteUserByID);

userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;