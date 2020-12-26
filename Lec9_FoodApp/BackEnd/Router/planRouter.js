const express = require("express");
const { protectRouter } = require("../Controller/authController.js");
const planRouter = express.Router();
const { getAllPlans, createPlan, getPlanByID, updatePlanbyID, deletePlanByID } = require("../Controller/planController.js");


planRouter.route("")
    .get(protectRouter, getAllPlans)
    .post(createPlan);
planRouter.route("/:id").get(getPlanByID).patch(updatePlanbyID).delete(deletePlanByID);


module.exports = planRouter;