const express = require("express");
const planRouter = require("./Router/planRouter.js");
const userRouter = require("./Router/userRouter.js");
const { viewRouter } = require("./Router/viewRouter.js");
const { reviewRouter } = require("./Router/reviewRouter.js");
const cookieParser=require("cookie-parser");

const path = require("path");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname+"/public"));

app.set("view engine" , "pug");

// view path set
app.set("views" , path.join(__dirname,"View"));

//middlewares

app.use("/api/plans", planRouter);
app.use("/api/user", userRouter);
app.use("/",viewRouter)
app.use("/user",reviewRouter)





// const planSchema = {
//     name: String,
//     price: Number
// }

// const planModel = mongoose.model("planCollection", planSchema);
// planModel.create({
//     name: "Shubham SP Singh",
//     price: 100000
// }).then((plan) => {
//     console.log(plan);
// })




//database => collection => documents
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("server started at port 3000");
})