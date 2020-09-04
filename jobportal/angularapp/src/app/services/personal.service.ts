import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Personal} from '../models/personal.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient,private authService:AuthService) { }
  addJob(personal: Personal): Observable<Personal> {
    return this.http.post<Personal>('http://localhost:3000/api/personal',personal);
  
    
  }
  dispalyJob(){
    return this.http.get<Personal[]>('http://localhost:3000/api/personal');
    
  }
}
