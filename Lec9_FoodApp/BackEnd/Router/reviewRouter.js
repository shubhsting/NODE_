const express = require("express");
const { addreview ,getReviewByIDandApprove} = require("../Controller/revController");
const reviewRouter = express.Router();

reviewRouter.route("/addreview").post(addreview)
reviewRouter.route("/getandapproveReview").post(getReviewByIDandApprove)
module.exports.reviewRouter = reviewRouter;