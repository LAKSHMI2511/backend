import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Personal } from '../models/personal.model';
import {PersonalService} from '../services/personal.service';
import { AuthService } from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  citylist: any = ['chennai', 'hyderabad', 'bangalore','pune','mumbai','jaipur','thane','delhi','kerala','haryana']
  countrylist:any=['India','nepal','pakistan','newzealand','australia','england','bangaladesh']
  
  title = 'fileUpload';
  images;
  personal=new Personal();
  personals:Personal[]=[];
  email1:'';
  password1:'';
   addUserForm: FormGroup;
  name= new FormControl('', Validators.required);
   emailid= new FormControl('', Validators.required);
   password= new FormControl('', Validators.required);
   mobileno=new FormControl('', Validators.required);
   address=new FormControl('',Validators.required);
   city=new FormControl('',Validators.required);
   country=new FormControl('',Validators.required)
   postalcode=new FormControl('',Validators.required);
   workexperience= new FormControl('', Validators.required);
   skills= new FormControl('', Validators.required);
   resume=new FormControl('',Validators.required);
   currentemployer= new FormControl('', Validators.required);
   destination= new FormControl('', Validators.required);
   jobdesc= new FormControl('', Validators.required);
 experience= new FormControl('', Validators.required);
   previousemployer= new FormControl('', Validators.required);
   prevdesc= new FormControl('', Validators.required);
   prevexp= new FormControl('', Validators.required);
   college  = new FormControl('', Validators.required);
   yearpassed= new FormControl('', Validators.required);
   graduated= new FormControl('', Validators.required);
   school= new FormControl('', Validators.required);
   noofyears= new FormControl('', Validators.required);
   qualifications= new FormControl('', Validators.required);
   certification= new FormControl('', Validators.required);
 
   constructor(private personalService: PersonalService,
               private formBuilder: FormBuilder,private authService:AuthService,private http:HttpClient ){ }
 
   ngOnInit(): void {
    
     this.addUserForm = this.formBuilder.group({
      name:this.name,
        emailid:this.emailid,
        password:this.password,
        mobileno:this.mobileno,
        address:this.address,
        city:this.city,
        country:this.country,
        postalcode:this.postalcode,
       workexperience:this.workexperience,
       skills:this.skills,
       resume:this.resume,
        currentemployer:this.currentemployer,
        destination:this.destination,
        jobdesc:this.jobdesc,
        experience:this.experience,
        previousemployer:this.previousemployer,
    prevdesc:this.prevdesc,
    prevexp:this.prevexp,
        college:this.college,
        yearpassed:this.yearpassed,
        graduated:this.graduated,
        school:this.school,
        noofyears:this.noofyears,
        qualifications:this.qualifications,
        certification:this.certification
     });
     this.authService.createUser(this.addUserForm.value.emailid,this.addUserForm.value.password);
   }
 
   addJob() {
     this.personalService.addJob(this.addUserForm.value).subscribe(
       res => {
         this.personals.push(res);
         window.alert("Details added");
         this.authService.createUser(this.addUserForm.value.emailid,this.addUserForm.value.password);
       },
       error => console.log(error)
     );
   }
  
 selectImage(event) {
  var event=event.split('fakepath:\\')
  var event=event[1];

   if (event.target.files.length > 0) {
     const file = event.target.files[0];
     this.images = file;
   }
 }
 
 onSubmit(){
   const formData = new FormData();
   formData.append('file', this.images);

   this.http.post<any>('http://localhost:3000/file', formData).subscribe(
     (res) => console.log(res),
     (err) => console.log(err)
   );
 } 

   }
