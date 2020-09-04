const mongoose=require("mongoose");

const jobSchema=new mongoose.Schema({
    jobid:{type:Number},
    title:{type:String},
    posteddate:{type:Date},
    role:{type:String},
    responsibility:{type:String},
    companyname:{type:String},
    experience:{type:Number},
    salary:{type:Number},
    noofposition:{type:Number},
    location:{type:String},
    skillsqualification:{type:String},
    degree:{type:String},
    companyinfo:{type:String},
    employmenttype:{type:String},
    industrytype:{type:String},
    searchword:{type:String},
    desc:{type:String}
})

module.exports=mongoose.model('job',jobSchema);