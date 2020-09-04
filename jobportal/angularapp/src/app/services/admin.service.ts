import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Job} from '../models/admin.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>('http://localhost:3000/api/job',job);
  
    
  }
  dispalyJob(){
    return this.http.get<Job[]>('http://localhost:3000/api/job');
    
  }
 editJob(job:Job ): Observable<any> {
   return this.http.put(`http://localhost:3000/api/job/${job._id}`, job,{responseType:"text"});
}

  deleteJob(job: Job): Observable<any> {

    return this.http.delete(`http://localhost:3000/api/job/${job._id}`,{responseType:"text"});
}
}