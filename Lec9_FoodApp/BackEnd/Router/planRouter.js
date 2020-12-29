const express = require("express");
const { protectRouter, isAuthorized } = require("../Controller/authController.js");
const planRouter = express.Router();
const { getAllPlans, createPlan, getPlanByID, updatePlanbyID, deletePlanByID } = require("../Controller/planController.js");


planRouter.route("")
    .get(protectRouter, getAllPlans)
    .post(createPlan);
planRouter.route("/:id")
    .get(getPlanByID)
    .patch(protectRouter, isAuthorized, updatePlanbyID)
    .delete(protectRouter, isAuthorized, deletePlanByID);


module.exports = planRouter;