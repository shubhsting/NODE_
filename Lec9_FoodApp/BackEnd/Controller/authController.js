const userModel = require("../Model/usersModel");
const jwt = require("jsonwebtoken");
async function login(req, res) {
    try {
        let { email, password } = req.body;
        console.log(email, password);
        let loggedInUser = await userModel.find({ email: email });
        if (loggedInUser.length) {
            let user = loggedInUser[0];
            if (user.password == password) {
                // token ban na chahie
                let token = jwt.sign({ id: user["_id"] }, "1234567890");
                res.status(200).json({
                    message: "Logged in succesfully !!",
                    data: loggedInUser[0],
                    token: token
                });
            } else {
                res.status(200).json({
                    message: "Email and Password didn't Matched !!",
                });
            }
        } else {
            res.status(200).json({
                message: "No User Found SignUp First",
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
        res.status(501).json({
            message: "Failed to sign up",
            error: error
        })
    }
}
async function protectRouter(req, res, next) {
    try {
        const { token } = req.body;
        console.log("Insside ProtectRoute Function")
        let payload = jwt.verify(token, "1234567890");
        if (payload) { next(); }
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
module.exports.signup = signup;
module.exports.login = login;
module.exports.protectRouter = protectRouter;