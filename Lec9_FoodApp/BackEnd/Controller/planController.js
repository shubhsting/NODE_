const plans = require("../Model/plansModel.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
let path=require("path");
function getAllPlans(req, res) {
    if (plans.length) {
        res.status(200).json({
            message: "Successfully fetched plans",
            data: plans
        })
    }
    else {
        res.status(404).json({
            message: "No plans found",
        })
    }
}

function createPlan(req, res) {
    let plan = req.body;
    plan.id = uuidv4();
    plans.push(plan);
    let planspath=path.join(__dirname,"..","Model","plansModel.json");
    fs.writeFileSync(planspath, JSON.stringify(plans));
    res.status(201).json({
        message: "Successfully created a plan",
    })
}

function getPlanByID(req, res) {
    let { id } = req.params;

    let filteredplans = plans.filter(function (plan) {
        return plan.id == id;
    })
    if (filteredplans.length) {
        res.status(200).json({
            message: "Successfully get plan by id",
            data: filteredplans[0]
        })
    }
    else {
        res.status(404).json({
            message: " plans not found by id",
        })
    }
}


function updatePlanbyID(req, res) {
    let { id } = req.params;
    let updatedObj = req.body;
    let filteredplans = plans.filter(function (plan) {
        return plan.id == id;
    })

    if (filteredplans.length) {
        let plan = filteredplans[0];
        for (key in updatedObj) {
            plan[key] = updatedObj[key];
        }
        let planspath=path.join(__dirname,"..","Model","plansModel.json");
        fs.writeFileSync(planspath, JSON.stringify(plans));
        res.status(200).json({
            message: " plan Updated",
            data: plans
        })
    }
    else {
        res.status(404).json({
            message: "Plan Not found",
        })
    }
}


function deletePlanByID(req, res) {
    let { id } = req.params;

    let filteredplans = plans.filter(function (plan) {
        return plan.id != id;
    })
    if (filteredplans.length == plans.length) {
        res.status(404).json({
            message: "Not found",
        })
    }
    else {
        let planspath=path.join(__dirname,"..","Model","plansModel.json");
        fs.writeFileSync(planspath, JSON.stringify(filteredplans));
        res.status(200).json({
            message: " plan deleted by id",
            data: plans
        })
    }
}


module.exports.getAllPlans=getAllPlans;
module.exports.createPlan=createPlan;
module.exports.getPlanByID=getPlanByID;
module.exports.updatePlanbyID=updatePlanbyID;
module.exports.deletePlanByID=deletePlanByID;