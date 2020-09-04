import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JobeditComponent } from './jobedit/jobedit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { CurrentjobComponent } from './currentjob/currentjob.component';
import { ExperienceComponent } from './experience/experience.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { SearchPipe } from './models/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminloginComponent,
    JobeditComponent,
    HomeComponent,
    LoginComponent,
    LoginformComponent,
    JobdetailsComponent,
    CurrentjobComponent,
    ExperienceComponent,
    SearchresultsComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
   

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
