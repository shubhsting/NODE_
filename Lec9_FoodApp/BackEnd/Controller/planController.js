// const plans = require("../Model/plansModel.json");
// const fs = require("fs");
// const { v4: uuidv4 } = require('uuid');
// let path=require("path");

const planModel = require("../Model/plansModel")


async function createPlan(req, res) {
    try {
        let sentplan = req.body;
        let plan = await planModel.create(sentplan)
        res.status(201).json({
            message: "Successfully Created a Plan!!",
            data: plan
        })
    }
    catch (error) {
        res.status(201).json({
            message: "Error !! Kindly Verify Plan !!",
            error: error.errors.discount.message
        })
    }
}



async function getAllPlans(req, res) {
    try {
        let plans = await planModel.find({})
        res.status(200).json({
            message: "Successfully fetched plans",
            data: plans
        })
    }
    catch (error) {
        res.status(404).json({
            message: "No plans found",
            error: error
        })
    }
}



async function getPlanByID(req, res) {

    try {
        let { id } = req.params;
        let plan = await planModel.findById(id);
        res.status(200).json({
            message: "Successfully get plan by id",
            data: plan
        })
    }
    catch (error) {
        res.status(404).json({
            message: " plans not found by id",
            error: error
        })
    }
}



async function updatePlanbyID(req, res) {
    try {
        let id = req.params.id || req.id;
        let updateObj = req.body.updateObject;

        let currPlan = await planModel.findById(id);
        for (key in updateObj)
            currPlan[key] = updateObj[key];
        await currPlan.save();
        res.status(200).json({
            message: " plan Updated",
            data: currPlan
        })
    }
    catch (error) {
        res.status(404).json({
            message: "Plan Not found",
            error: error
        })
    }


}



async function deletePlanByID(req, res) {
    try {
        let { id } = req.params;
        let newdb = await planModel.findByIdAndDelete(id);
        res.status(200).json({
            message: " plan Deleted",

        })
    }
    catch (error) {
        res.status(404).json({
            message: "Plan Not found",
            error: error
        })
    }

}


// function getAllPlans(req, res) {
//     if (plans.length) {
//         res.status(200).json({
//             message: "Successfully fetched plans",
//             data: plans
//         })
//     }
//     else {
//         res.status(404).json({
//             message: "No plans found",
//         })
//     }
// }

// function createPlan(req, res) {
//     let plan = req.body;
//     plan.id = uuidv4();
//     plans.push(plan);
//     let planspath=path.join(__dirname,"..","Model","plansModel.json");
//     fs.writeFileSync(planspath, JSON.stringify(plans));
//     res.status(201).json({
//         message: "Successfully created a plan",
//     })
// }

// function getPlanByID(req, res) {
//     let { id } = req.params;

//     let filteredplans = plans.filter(function (plan) {
//         return plan.id == id;
//     })
//     if (filteredplans.length) {
//         res.status(200).json({
//             message: "Successfully get plan by id",
//             data: filteredplans[0]
//         })
//     }
//     else {
//         res.status(404).json({
//             message: " plans not found by id",
//         })
//     }
// }


// function updatePlanbyID(req, res) {
//     let { id } = req.params;
//     let updatedObj = req.body;
//     let filteredplans = plans.filter(function (plan) {
//         return plan.id == id;
//     })

//     if (filteredplans.length) {
//         let plan = filteredplans[0];
//         for (key in updatedObj) {
//             plan[key] = updatedObj[key];
//         }
//         let planspath = path.join(__dirname, "..", "Model", "plansModel.json");
//         fs.writeFileSync(planspath, JSON.stringify(plans));
//         res.status(200).json({
//             message: " plan Updated",
//             data: plans
//         })
//     }
//     else {
//         res.status(404).json({
//             message: "Plan Not found",
//         })
//     }
// }


// function deletePlanByID(req, res) {
//     let { id } = req.params;

//     let filteredplans = plans.filter(function (plan) {
//         return plan.id != id;
//     })
//     if (filteredplans.length == plans.length) {
//         res.status(404).json({
//             message: "Not found",
//         })
//     }
//     else {
//         let planspath = path.join(__dirname, "..", "Model", "plansModel.json");
//         fs.writeFileSync(planspath, JSON.stringify(filteredplans));
//         res.status(200).json({
//             message: " plan deleted by id",
//             data: plans
//         })
//     }
// }


module.exports.getAllPlans = getAllPlans;
module.exports.createPlan = createPlan;
module.exports.getPlanByID = getPlanByID;
module.exports.updatePlanbyID = updatePlanbyID;
module.exports.deletePlanByID = deletePlanByID;