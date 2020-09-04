import { Component, OnInit } from '@angular/core';
import {Job} from '../models/admin.model';
import {AdminService} from '../services/admin.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-currentjob',
  templateUrl: './currentjob.component.html',
  styleUrls: ['./currentjob.component.css']
})
export class CurrentjobComponent implements OnInit {
term:string;
job:string[];
  constructor(private httpService:HttpClient,private adminService:AdminService) { }

  ngOnInit(): void {
    this.displayJob();
  }

  displayJob(){
    this.httpService.get('http://localhost:3000/api/job').subscribe(
      data=>{
        this.job=data as string[];
      }
  
    
    );
}
}