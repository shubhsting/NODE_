const express = require("express");
const { addreview } = require("../Controller/revController");
const reviewRouter = express.Router();

reviewRouter.route("/addreview").post(addreview)

module.exports.reviewRouter = reviewRouter;