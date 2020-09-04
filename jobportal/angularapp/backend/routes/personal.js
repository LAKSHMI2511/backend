const express=require('express');
const router=express.Router();
const Personal=require('../models/personal');
const checkAuth=require('../middleware/check-auth');

    router.get("/personal",(req,res,next)=>{
        Personal.find({}).then(function(personal){
            res.send(personal);
        }).catch(next);
    })

    router.get("/personal/:id",function(req,res,next){
        Personal.findOne({_id:req.params.id}).then(function(personal){
             res.send(personal);  
        }).catch(next)
    })
    router.post("/personal",(req,res)=>{
        const personal=new Personal({
            name:req.body.name,
            emailid:req.body.emailid,
            password:req.body.password,
            mobileno:req.body.mobileno,
            address:req.body.address,
            city:req.body.city,
            country:req.body.country,
            postalcode:req.body.postalcode,
 
            workexperience:req.body.workexperience,
            resume:req.body.resume,
            currentemployer:req.body.currentemployer,
            destination:req.body.destination,
            jobdesc:req.body.jobdesc,
            experience:req.body.experience,
            previousemployer:req.body.previousemployer,
        prevdesc:req.body.prevdesc,
        prevexp:req.body.prevexp,
            college:req.body.college,
            yearpassed:req.body.yearpassed,
            graduated:req.body.graduated,
            school:req.body.school,
            noofyears:req.body.noofyears,
            qualifications:req.body.qualifications,
            certification:req.body.certification
          
        });
        personal.save();
        res.status(201).json({
            message:"info added successfully"
        });
        });

module.exports=router;