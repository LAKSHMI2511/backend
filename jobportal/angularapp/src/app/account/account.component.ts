import { Component, OnInit } from '@angular/core';
import {Personal} from '../models/personal.model';
import {PersonalService} from '../services/personal.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  personal=new Personal();
 personals:Personal[];
  constructor(private personalService:PersonalService,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.personalService.dispalyJob().subscribe(
      data=>{
        this.personals=data;
        const id=this.route.snapshot.params.id;
        for(let i=0;i<this.personals.length;i++){
          if(id===this.personals[i]._id){
             this.personal=this.personals[i];
          }
        }
      }
    )
  }

}
