const express = require("express");
const planRouter = require("./Router/planRouter.js");
const userRouter = require("./Router/userRouter.js");


const app = express();

app.use(express.json());


//middlewares

app.use("/api/plans", planRouter);
app.use("/api/user", userRouter);






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
app.listen(3000, function () {
    console.log("server started at port 3000");
})