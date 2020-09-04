import { Pipe, PipeTransform } from '@angular/core';
import {Job} from './admin.model';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(jobs: Job[], text1: string,text2:string):Job[] {
    if(!jobs|| ! text1 || !text2){
        return jobs;
    }   
    return jobs.filter(job =>
      ( job.skillsqualification.toLowerCase().indexOf(text1.toLowerCase())
     &&  job.location.toLowerCase().indexOf(text2.toLowerCase()) )
       !==-1)
   }

}
