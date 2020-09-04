const express=require('express');
const router=express.Router();
const Job=require('../models/job')


    router.get("/job",(req,res,next)=>{
        Job.find({}).then(function(job){
            res.send(job);
        }).catch(next);
    })
    //get one job
    router.get("/job/:id",function(req,res,next){
        Job.findOne({_id:req.params.id}).then(function(job){
             res.send(job);  
        }).catch(next)
    })
    router.post("/job",(req,res,next)=>{
    const job=new Job({
        jobid:req.body.jobid,
        title:req.body.title,
        posteddate:req.body.posteddate,
        role:req.body.role,
        responsibility:req.body.responsibility,
        companyname:req.body.companyname,
        experience:req.body.experience,
        salary:req.body.salary,
        noofposition:req.body.noofposition,
        location:req.body.location,
        skillsqualification:req.body.skillsqualification,
        degree:req.body.degree,
        companyinfo:req.body.companyinfo,
        employmenttype:req.body.employmenttype,
        industrytype:req.body.industrytype,
        searchword:req.body.searchword,
        desc:req.body.desc
    });
    job.save();
    res.status(201).json({
        message:"Job added successfully"
    }).catch(next);
    });
    router.put('/job/:id',function(req,res,next){
        Job.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(function(){
            Job.findOne({_id:req.params.id}).then(function(job){
                res.send(job);
            })
        }).catch(next);
    })
    router.delete("/job/:id",function(req,res,next){
        Job.findByIdAndRemove({_id:req.params.id}).then(function(job){
            res.send(job)
        }).catch(next);
    })

module.exports=router;