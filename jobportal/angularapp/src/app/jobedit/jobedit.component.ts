import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Job } from '../models/admin.model';
import {HttpClient} from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-jobedit',
  templateUrl: './jobedit.component.html',
  styleUrls: ['./jobedit.component.css']
})
export class JobeditComponent implements OnInit {
  job= new Job();
  jobs: Job[] = [];
  items:Job[];
  Editing=false;
  constructor(private adminService:AdminService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getjob();
  }
  getjob(){
    this.adminService.dispalyJob().subscribe(
      data=>this.items=data,
      error=>console.log(error),
    
    );
  }
  enableEditing(job:Job) {
    this.Editing = true;
    this.job = job;
  }

  editJob(job:Job) {
    this.adminService.editJob(job)
    .subscribe(() => {
        this.Editing = false;
        this.job=job;
     window.alert("job edited!!");
      }),
      error => console.log(error)
  }

  deleteProduct(job:Job) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.adminService.deleteJob(job)
      .subscribe(()=>{
           this.jobs=this.jobs.filter(elem=>elem._id!==job._id);
            window.alert("job deleted");
      

      })
    }
  }
}
