import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Job} from '../models/admin.model';
import {AdminService} from '../services/admin.service';
@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  jobs: Job[];
  text1:string;
  text2:string;
  job=new Job();
    constructor(private route:ActivatedRoute,public adminService:AdminService) { }
  
    ngOnInit(): void {
      this.text1=this.route.snapshot.params.text1;
      this.text2=this.route.snapshot.params.text2;
      this.searchjobs();
    }
    searchjobs() {
      this.adminService.dispalyJob().subscribe(
        data => {this.jobs = data;
       for(let i=0;i<this.jobs.length;i++){
           this.job=this.jobs[i];
         }}
      )}
  }