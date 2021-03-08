const mongoose = require('mongoose');
const { url } = require('../secrets');

const Schema = mongoose.Schema;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


const meetingSchema = new Schema({
   meetingID:{
       type:String,
       required:true
   },
   meetingName:{
       type:String,
       required:true
   },
   startTime:{
       type:Date,
       required:true
   },
   participants:{
       type:Array
   }
  });

const meetingModel=mongoose.model('meetingModel',meetingSchema);

module.exports=meetingModel;