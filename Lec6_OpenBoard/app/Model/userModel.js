const mongoose = require('mongoose');
const { url } = require('../secrets');

const Schema = mongoose.Schema;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


const userSchema = new Schema({
   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   },
   isAdmin:{
       type:Boolean,
       default:false
   },
   socketID:{
       type:String
   },
   isLoggedIn:{
       type:Boolean,
       default:false
   }
  });

const userModel=mongoose.model('userModel',userSchema);

module.exports=userModel;