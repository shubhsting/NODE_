const mongoose = require("mongoose");
const crypto = require("crypto");
let url = require("../protect");
mongoose.connect(url, {
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
        }
    }
    ,
    role: {
        type: String,
        enum: ["admin", "user", "restaurant owner", "delivery boy"],
        default: "user"
    },
    pwToken: String,
    tokenTime: Number

})

userSchema.pre("save", function () {
    this.confirmPassword = undefined;
})
userSchema.methods.createPwToken = function () {


    let token = crypto.randomBytes(32).toString("hex");
    let time = Date.now() * 60 * 10 * 1000;

    this.pwToken = token;
    this.tokenTime = time;
    return this.pwToken;

}


userSchema.methods.resetPassword = function (pass, cpass) {

    this.password = pass;
    this.confirmPassword = cpass;

    this.pwToken = undefined;
    this.tokenTime = undefined;
}
const userModel = mongoose.model("userCollection", userSchema);
module.exports = userModel;