import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { AdminService } from '../services/admin.service';
import {PersonalService} from '../services/personal.service';
import { Job } from '../models/admin.model';
import {Personal} from '../models/personal.model';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  items:Job[];
  text1:string;
  text2:string;
  arr:Job[];
  personals=new Personal();
  item:Personal[]=[];
  emailid=''
  password=''
  skills=''
  location=''
  username=''
  userIsAuthenticated=false;
  private authStatusSub:Subscription;
  loginForm:FormGroup;

  constructor(public router:Router,private adminService:AdminService
    ,public personalService:PersonalService,private authService:AuthService
    ,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.displayJob();
    this.userIsAuthenticated=this.authService.geIsAuth();
    this.authStatusSub=this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated=>{
    this.userIsAuthenticated=isAuthenticated;
    });
  this.loginForm=this.fb.group({
    name:['',Validators.required],
    password:['',Validators.required]
  })
 
}
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
  displayJob(){
    this.adminService.dispalyJob().subscribe(
      data=>this.items=data,
      error=>console.log(error),
    
    );
}

search(text1,text2){
  this.router.navigate(['/login',text1,text2]);
}
related(){
  this.adminService.dispalyJob().subscribe(
    data=>{
    this.arr=data;
  })
  for(let i=0;i<this.arr.length;i++){
        if(this.skills===this.arr[i].skillsqualification || this.location===this.arr[i].location){         
           this.router.navigate(['/job',this.arr[i]._id])
        }
  }
}
}