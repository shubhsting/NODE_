const planModel = require("../Model/plansModel");
const userModel = require("../Model/usersModel");
const reviewModel = require("../Model/reviewModel");

async function getHomePage(req, res) {
    try {
        let plans = await planModel.find();
        res.render("homepage.pug", { name: req.name, plans: [plans[0], plans[1], plans[2]] });
    }
    catch (error) {
        console.log(error);
    }
}
async function getreviews(req, res) {
    try {
        let role = req.role;
        let reviews;
        if (role == "admin") {
            reviews = await reviewModel.find({ approved: false });
        }
        else {
            reviews = await reviewModel.find({ approved: true });

        }
        res.render("reviews.pug", { reviews: reviews, name: req.name });
    }
    catch (error) {
        console.log(error);
    }
}

async function getloginPage(req, res) {
    try {
        res.render("login.pug", { name: req.name });
    }
    catch (error) {
        console.log(error);
    }
}

async function writeReview(req, res) {
    try {
        res.render("writeReview.pug", { name: req.name });
    }
    catch (error) {
        console.log(error);
    }
}
async function addanewPlan(req, res) {
    try {
        if (req.role == "admin")
            res.render("addnewplan.pug", { name: req.name });
        else {
            let plans = await planModel.find();
            res.render("homepage.pug", { name: req.name, plans: [plans[0], plans[1], plans[2]] });
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function getSignUpPage(req, res) {
    try {
        res.render("signup.pug", { name: req.name });
    }
    catch (error) {
        console.log(error);
    }
}



async function getPlansPage(req, res) {
    try {
        let plans = await planModel.find();
        res.render("plans.pug", { name: req.name, plans: plans, role: req.role });
    }
    catch (error) {
        console.log(error);
    }
}


async function getUsers(req, res) {
    try {
        let users = await userModel.find();
        if (req.role == "admin")
            res.render("users.pug", { name: req.name, users: users, role: req.role });
        else {
            let plans = await planModel.find();
            res.render("homepage.pug", { name: req.name, plans: [plans[0], plans[1], plans[2]] });
        }
    }
    catch (error) {
        console.log(error);
    }
}
async function forgotPassPage(req, res) {
    try {
        res.render("forgotpass.pug", { name: req.name });
    }
    catch (error) {
        console.log(error);
    }
}
async function getProfilePage(req, res) {
    try {
        let user = await userModel.findById(req.id);
        res.render("profile.pug", { name: req.name, user: user });
    }
    catch (error) {
        console.log(error);
    }
}
module.exports.getHomePage = getHomePage;
module.exports.getloginPage = getloginPage;
module.exports.getSignUpPage = getSignUpPage;
module.exports.forgotPassPage = forgotPassPage;
module.exports.getPlansPage = getPlansPage;
module.exports.getProfilePage = getProfilePage;
module.exports.getreviews = getreviews;
module.exports.addanewPlan = addanewPlan;
module.exports.getUsers = getUsers;
module.exports.writeReview=writeReview;
