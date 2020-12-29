// const fs = require("fs");
// const { v4: uuidv4 } = require('uuid');
// const users = require("../Model/usersModel");
// let path=require("path");

let userModel = require("../Model/usersModel")





async function createUser(req, res) {
    try {
        let sentuser = req.body;
        let plan = await userModel.create(sentuser)
        res.status(201).json({
            message: "Successfully created a user",
            data: plan
        })
    }
    catch (error) {
        res.status(501).json({
            message: "Not able to create user",
            error: error
        })
    }
}



async function getAllUsers(req, res) {
    try {
        let users = await userModel.find({})
        res.status(200).json({
            message: "Successfully fetched users",
            data: users
        })
    }
    catch (error) {
        res.status(404).json({
            message: "No users found",
            error: error
        })
    }
}



async function getUserByID(req, res) {

    try {
        let id = req.id;
        let user = await userModel.findById(id);
        console.log(user)
        res.status(200).json({
            message: "Successfully get user by id",
            data: user
        })
    }
    catch (error) {
        res.status(404).json({
            message: " user not found by id",
            error: error
        })
    }
}


async function updateUserByID(req, res) {
    try {
        let id = req.id;
        let updateObj = req.body.updateObject;
        let newdb = await userModel.findByIdAndUpdate(id, updateObj, { new: true });
        res.status(200).json({
            message: " user Updated",
            data: newdb
        })
    }
    catch (error) {
        res.status(404).json({
            message: "User Not found",
            error: error
        })
    }


}

async function deleteUserByID(req, res) {
    try {
        let id = req.id;
        let newdb = await userModel.findByIdAndDelete(id);
        if (newdb) {
            res.status(200).json({
                message: " User Deleted",

            })
        }
        else {
            res.status(200).json({
                message: "User Not found",
                error: error
            })
        }
    }
    catch (error) {
        res.status(404).json({
            message: "Failed to delete!!!!",
            error: error
        })
    }

}

// function getAllUsers(req, res) {
//     if (users.length) {
//         res.status(200).json({
//             message: "All users found successfully",
//             data: users
//         })
//     }
//     else {
//         res.status(404).json({
//             message: "No users found",
//         })
//     }
// }

// function createUser(req, res) {
//     let user = req.body;
//     user.id = uuidv4();
//     users.push(user)
//     let userpath = path.join(__dirname, "..", "Model", "usersModel.json");
//     fs.writeFileSync(userpath, JSON.stringify(users));
//     res.status(201).json({
//         message: "Successfully created a user",
//     })
// }


// function getUserByID(req, res) {
//     let { id } = req.params;

//     let filteredusers = users.filter(function (user) {
//         return user.id == id;
//     })
//     if (filteredusers.length) {
//         res.status(200).json({
//             message: "Successfully got user by id",
//             data: filteredusers[0]
//         })
//     }
//     else {
//         res.status(404).json({
//             message: " user not found by id",
//         })
//     }
// }


// function updateUserByID(req, res) {
//     let { id } = req.params;
//     let updatedObj = req.body;
//     let filteredusers = users.filter(function (user) {
//         return user.id == id;
//     })

//     if (filteredusers.length) {
//         let user = filteredusers[0];
//         for (key in updatedObj) {
//             user[key] = updatedObj[key];
//         }
//         let userpath = path.join(__dirname, "..", "Model", "usersModel.json");
//         fs.writeFileSync(userpath, JSON.stringify(users));
//         res.status(200).json({
//             message: " User Updated",
//             data: users
//         })
//     }
//     else {
//         res.status(404).json({
//             message: "User Not found",
//         })
//     }
// }



// function deleteUserByID(req, res) {
//     let { id } = req.params;

//     let filteredusers = users.filter(function (user) {
//         return user.id != id;
//     })
//     if (filteredusers.length == users.length) {
//         res.status(404).json({
//             message: "Not found",
//         })
//     }
//     else {
//         let userpath = path.join(__dirname, "..", "Model", "usersModel.json");
//         fs.writeFileSync(userpath, JSON.stringify(filteredusers));
//         res.status(200).json({
//             message: " user deleted by id",
//             data: users
//         })
//     }
// }

module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
module.exports.getUserByID = getUserByID;
module.exports.updateUserByID = updateUserByID;
module.exports.deleteUserByID = deleteUserByID;