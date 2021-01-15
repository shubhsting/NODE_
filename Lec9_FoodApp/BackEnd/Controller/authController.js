const userModel = require("../Model/usersModel");

const jwt = require("jsonwebtoken");


async function login(req, res) {
    try {
        let { email, password } = req.body;
        let loggedInUser = await userModel.find({ email: email });
        if (loggedInUser.length) {
            let user = loggedInUser[0];
            if (user.password == password) {
                // token ban na chahie
                let token = jwt.sign({ id: user["_id"] }, "1234567890");
                res.cookie('jwt', token, { httpOnly: true });
                res.status(200).json({
                    message: "Logged in succesfully !!",
                    data: loggedInUser[0],
                    token: token
                });
            } else {
                res.status(200).json({
                    message: "Email and Password didn't match !!",
                });
            }
        } else {
            res.status(200).json({
                message: "No User Found !!!",
            });
        }
    } catch (error) {
        res.status(200).json({
            message: "Login Failed !!",
            error: error,
        });
    }
}

async function signup(req, res) {
    try {
        let user = req.body;
        let plan = await userModel.create({
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
            role: user.role
        })
        res.status(201).json({
            message: "Successfully signed up",
            data: plan
        })
    }
    catch (error) {
        res.status(201).json({
            message: "Failed to sign up",
            error: error
        })
    }
}

async function isLoggedIn(req, res, next) {
    try {

        let token = req.cookies.jwt;
        let payload = jwt.verify(token, "1234567890");
        if (payload) {
            let user = await userModel.findById(payload.id);
            req.name = user.name;
            req.id = payload.id;
            req.role=user.role;
            next();
        }
        else {

            next();
        }
    }

    catch (e) {
        next();
    }
}

async function logout(req, res, next) {
    try {
        res.clearCookie("jwt");
        res.redirect("/");
    }
    catch (e) {
        res.json({
            e
        })
    }
}
async function protectRouter(req, res, next) {
    try {
        const token = req.cookies.jwt;
        console.log("Inside ProtectRoute Function")
        let payload = jwt.verify(token, "1234567890");
        if (payload) {
            req.id = payload.id;
            console.log(req.id)
            next();
        }
        else {
            res.json({
                message: "Please Login!!!"
            })
        }
    }
    catch (error) {
        res.json({
            message: "Please Login!!!Error"
        })
    }
}



async function isAuthorized(req, res, next) {
    try {
        let id = req.id;
        let user = await userModel.findById(id);
        console.log(user.role);
        if (user.role == "admin") {
            next();
        }
        else {
            res.status(200).json({
                message: "You dont have admin rights!!!"
            })
        }
    }
    catch (e) {
        res.status(501).json({
            message: "Failed to authorize!!!",
            error: e
        })
    }
}

async function forgotPassword(req, res, next) {
    try {

        let { email } = req.body;
        let user = await userModel.findOne({ email: email });
        if (user) {
            let token = user.createPwToken();
            let update = await user.save({ validateBeforeSave: false })

            let resetLink = `http://localhost:3000/user/resetPassword/${token}`
            res.json({
                message: "Token set Succcessfully and link send!!!!",
                data: resetLink
            })
        }
    }
    catch (e) {
        res.json({
            message: "Failed to change password"
        })
    }
}


async function resetPassword(req, res, next) {
    try {
        const token = req.params.token;
        console.log(token);
        const { password, confirmPassword } = req.body;
        const user = await userModel.findOne({
            pwToken: token,
            tokenTime: { $gt: Date.now() }
        })
        if (user) {
            user.resetPassword(password, confirmPassword);
            await user.save();
            res.json({
                message: "Password reset successfully!!!",
                data: user
            })
        }
        else {
            res.json({
                message: "Link Expired!!!!"

            })
        }
    }
    catch (e) {
        res.json({
            message: "Error Occured",
            error: e
        })
    }
}

module.exports.signup = signup;
module.exports.login = login;
module.exports.protectRouter = protectRouter;
module.exports.isAuthorized = isAuthorized;
module.exports.forgotPassword = forgotPassword;
module.exports.resetPassword = resetPassword;
module.exports.isLoggedIn = isLoggedIn;
module.exports.logout = logout;