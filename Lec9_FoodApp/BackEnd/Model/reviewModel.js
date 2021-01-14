const mongoose = require("mongoose");

let url=require("../protect");
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(function (db) {
    // console.log(db);
});

let reviewSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        maxlength: [500, "Your Review length is More than 500 characters"]
    },
    date: {
        type: String,
        required: true
    },
    Rname: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean
    }
})


const reviewModel = mongoose.model("reviewCollection", reviewSchema);
module.exports = reviewModel;