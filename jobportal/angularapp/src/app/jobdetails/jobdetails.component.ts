import { Component, OnInit } from '@angular/core';
import {Job} from '../models/admin.model';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

job=new Job();
  jobs:Job[] ;
  constructor(private adminService:AdminService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
}
getProducts(){
  this.adminService.dispalyJob().subscribe(

    data=>{
      this.jobs=data;
      console.log(this.jobs);
      const id=this.route.snapshot.params.id;
      for(let i=0;i<this.jobs.length;i++){
           if(id===this.jobs[i]._id){
             this.job=this.jobs[i];
            
           }
      }
    },
    error=>console.log(error)
    
   );
}
}