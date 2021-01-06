const express = require("express");
const { getHomePage } = require("../Controller/viewController");
const viewRouter = express.Router();


viewRouter.route("").get(getHomePage);

module.exports.viewRouter = viewRouter;