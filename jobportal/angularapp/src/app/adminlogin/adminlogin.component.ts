import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  userid= ''
  password1 = ''

  constructor(private router: Router) { }

  onlogin()
  {
      if(this.userid== "laksh2511" && this.password1 == "1234"){
          this.router.navigate(['/admin'])
      }
      else{
        alert('Invalid Admin credentials')
      }
      
  }
  
  ngOnInit() { }
}
