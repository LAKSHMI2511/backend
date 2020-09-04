const express=require('express');
const jobRoutes=require('./routes/job');
const personalRoutes=require('./routes/personal');
const userRoutes=require('./routes/user');
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const multer=require("multer");

//Mongo connection
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/job',{useNewUrlParser : true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to db");
})
.catch(()=>{
    console.log("Connection failed");
})

//Access to api
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,DELETE,PUT"
    );
    next();
})

app.use('/api',jobRoutes);
app.use('/api',personalRoutes);
app.use('/api/user',userRoutes);


//multer upload

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `FunOfHeuristic_${file.originalname}`)
    }
  })

   
const upload = multer({ storage: storage })

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })


  
module.exports=app;