const mongoose=require("mongoose");

const personalSchema=new mongoose.Schema({
    name:{type:String},
    emailid:{type:String},
    password:{type:String},
    mobileno:{type:Number},
    address:{type:String},
    city:{type:String},
    country:{type:String},
    postalcode:{type:Number},
    workexperience:{type:Number},
    skills:{type:String},
    resume:{type:String},
    currentemployer:{type:String},
    destination:{type:String},
    jobdesc:{type:String},
    experience:{type:Number},
    previousemployer:{type:String},
    prevdesc:{type:String},
    prevexp:{type:String},
    college:{type:String},
    yearpassed:{type:Number},
    graduated:{type:Number},
    school:{type:String},
    noofyears:{type:Number},
    qualifications:{type:String},
    certification:{type:String}

})

module.exports=mongoose.model('personal',personalSchema);