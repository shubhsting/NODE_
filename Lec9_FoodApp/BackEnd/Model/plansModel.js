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

let planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [40, "Your Plan Name is More than 40 characters"]
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number
    },
    discount: {
        type: Number,
        validate: {
            validator: function () {
                return this.discount < this.price
            },
            message: "Discount must be less than price"
        }
    }
})


const planModel = mongoose.model("plansCollection", planSchema);
module.exports = planModel;