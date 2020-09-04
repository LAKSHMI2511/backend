import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Job } from '../models/admin.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 job=new Job();
 jobs:Job[]=[];

  addJobForm: FormGroup;
  jobid = new FormControl('', Validators.required);
  title= new FormControl('', Validators.required);
  posteddate= new FormControl('', Validators.required);
  role= new FormControl('', Validators.required);
  responsibility=new FormControl('',Validators.required);
  companyname= new FormControl('', Validators.required);
  experience= new FormControl('', Validators.required);
  salary= new FormControl('', Validators.required);
  noofposition= new FormControl('', Validators.required);
  location= new FormControl('', Validators.required);
  skillsandqualification= new FormControl('', Validators.required);
  degree= new FormControl('', Validators.required);
  companyinfo= new FormControl('', Validators.required);
  employmenttype= new FormControl('', Validators.required);
 industrytype = new FormControl('', Validators.required);
  searchword= new FormControl('', Validators.required);
  desc= new FormControl('', Validators.required);


  constructor(private adminService: AdminService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addJobForm = this.formBuilder.group({
      jobid:this.jobid,
    title:this.title,
    posteddate:this.posteddate,
    role:this.role,
    responsibility:this.responsibility,
    companyname:this.companyname,
    experience:this.experience,
    salary:this.salary,
    noofposition:this.noofposition,
    location:this.location,
    skillsqualification:this.skillsandqualification,
    degree:this.degree,
    companyinfo:this.companyinfo,
    employmenttype:this.employmenttype,
    industrytype:this.industrytype,
    searchword:this.searchword,
    desc:this.desc
    });

  }

  addJob() {
    this.adminService.addJob(this.addJobForm.value).subscribe(
      res => {
        this.jobs.push(res);
        this.addJobForm.reset();
        window.alert("Job added");
      },
      error => console.log(error)
    );
  }
  displayJob(){
    

  }
}
