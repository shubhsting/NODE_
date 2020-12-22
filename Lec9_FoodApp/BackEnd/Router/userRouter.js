const express = require("express");
const userRouter = express.Router();
const { getAllUsers, createUser, getUserByID, updateUserByID, deleteUserByID } = require("../Controller/userController.js");



userRouter.route("").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUserByID).patch(updateUserByID).delete(deleteUserByID);

module.exports = userRouter;