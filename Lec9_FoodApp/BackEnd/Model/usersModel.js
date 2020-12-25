const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://shubham:shubham@cluster0.gpzau.mongodb.net/data?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(function (db) {
    // console.log(db);
});

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [40, "Your Plan Name is More than 40 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: [6, "Password must be greater than 6 Characters"],
        required: true
    },
    confirmPassword: {
        type: String,
        minlength: [6, "Password must be greater than 6 Characters"],
        required: true,
        validate: {
            validator: function () {
                return this.password == this.confirmPassword;
            },
            message: "Password does't match"
        },
        role: {
            type: String,
            enum: ["admin", "user", "restaurant owner", "delievery boy"],
            default: "user"
        }
    }
})


const userModel = mongoose.model("userCollection", userSchema);
module.exports = userModel;