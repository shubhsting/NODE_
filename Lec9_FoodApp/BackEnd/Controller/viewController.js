const planModel = require("../Model/plansModel")
async function getHomePage(req, res) {
    try {
        res.render("homepage.pug", {});
    }
    catch (error) {
        console.log(error);
    }
}


async function getloginPage(req, res) {
    try {
        res.render("login.pug", {});
    }
    catch (error) {
        console.log(error);
    }
}


async function getSignUpPage(req, res) {
    try {
        res.render("signup.pug", {});
    }
    catch (error) {
        console.log(error);
    }
}



async function getPlansPage(req, res) {
    try {
        let plans=await planModel.find();
        res.render("plans.pug", {plans:plans});
    }
    catch (error) {
        console.log(error);
    }
}
async function forgotPassPage(req, res) {
    try {
        res.render("forgotpass.pug", {});
    }
    catch (error) {
        console.log(error);
    }
}
async function getProfilePage(req, res) {
    try {
        res.render("profile.pug", {});
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
module.exports.getProfilePage=getProfilePage;
