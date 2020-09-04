import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Personal } from '../models/personal.model';
import {PersonalService} from '../services/personal.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

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
   workexperience= new FormControl('', Validators.required);
   skills= new FormControl('', Validators.required);
   resume=new FormControl('',Validators.required);
   college  = new FormControl('', Validators.required);
   yearpassed= new FormControl('', Validators.required);
   graduated= new FormControl('', Validators.required);
   school= new FormControl('', Validators.required);
   noofyears= new FormControl('', Validators.required);
   qualifications= new FormControl('', Validators.required);
   certification= new FormControl('', Validators.required);
 
   constructor(private personalService: PersonalService,
               private formBuilder: FormBuilder,private authService:AuthService) { }
 
   ngOnInit(): void {
    
     this.addUserForm = this.formBuilder.group({
      name:this.name,
        emailid:this.emailid,
        password:this.password,
        mobileno:this.mobileno,
        address:this.address,
       workexperience:this.workexperience,
       skills:this.skills,
       resume:this.resume,
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

}
