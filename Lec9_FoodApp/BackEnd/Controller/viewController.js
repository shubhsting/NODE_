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
        res.render("plans.pug", {plans:["hello","moto","robo","hello","moto","robo","hello","moto","robo","hello","moto","robo"]});
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
module.exports.getHomePage = getHomePage;
module.exports.getloginPage = getloginPage;
module.exports.getSignUpPage = getSignUpPage;
module.exports.forgotPassPage = forgotPassPage;
module.exports.getPlansPage = getPlansPage;
