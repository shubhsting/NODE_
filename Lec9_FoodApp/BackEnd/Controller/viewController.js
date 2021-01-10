const planModel = require("../Model/plansModel");
const userModel = require("../Model/usersModel");
async function getHomePage(req, res) {
    try {
        let plans = await planModel.find();
        res.render("homepage.pug", { name: req.name, plans: plans });
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
        res.render("plans.pug", { name: req.name, plans: plans });
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
