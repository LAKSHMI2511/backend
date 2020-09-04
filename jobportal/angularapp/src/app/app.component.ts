import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { AdminService } from './services/admin.service';
import {PersonalService} from './services/personal.service';
import { Job } from './models/admin.model';
import {Personal} from './models/personal.model';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  items:Job[];
  arr:Job[];
  personals=new Personal();
  item:Personal[]=[];
  emailid=''
  password=''
  userIsAuthenticated=false;
private  authListenerSubs:Subscription;
loginForm:FormGroup;
 constructor(public router:Router,private adminService:AdminService
  ,public personalService:PersonalService,private authService:AuthService
  ,private fb:FormBuilder){
  
 }
 ngOnInit(){
  this.userIsAuthenticated=this.authService.geIsAuth();
this.authListenerSubs=this.authService
.getAuthStatusListener()
.subscribe(isAuthenticated=>{
this.userIsAuthenticated=isAuthenticated;
});
this.loginForm=this.fb.group({
  name:['',Validators.required],
  password:['',Validators.required]
})
 }
 checkuser(){
  
  this.personalService.dispalyJob().subscribe(
    data=>this.item=data,
  )
  for(let i=0;i<this.item.length;i++)
  {
   if(this.emailid===this.item[i].emailid && this.password===this.item[i].password){
    this.authService.login(this.emailid,this.password);   
    this.personals=this.item[i];
    

   }
  }
 
  }
profile(){
  this.router.navigate(['/personal',this.personals._id]);
}

ngOnDestroy(){
this.authListenerSubs.unsubscribe();
}
onlogout(){
   this.authService.logout();
}
}
