import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobeditComponent } from './jobedit/jobedit.component';
import { AdminComponent } from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {LoginformComponent} from './loginform/loginform.component';
import {JobdetailsComponent} from './jobdetails/jobdetails.component';
import {LoginComponent} from './login/login.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AccountComponent} from './account/account.component';
import {CurrentjobComponent} from './currentjob/currentjob.component';
import {ExperienceComponent} from './experience/experience.component';
import {SearchresultsComponent} from './searchresults/searchresults.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'login/:text1/:text2',component:SearchresultsComponent},
  {path:"login",component:LoginComponent},
  {path:"jobedit",component:JobeditComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"admin",component:AdminComponent},
  {path:"loginform",component:LoginformComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"home",component:HomeComponent},
  {path:"currentjob",component:CurrentjobComponent},
  {path:'job/:id',component:JobdetailsComponent},
  {path:'personal/:id',component:AccountComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
