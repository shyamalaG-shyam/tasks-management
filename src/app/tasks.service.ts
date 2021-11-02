import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tasks} from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private baseUrl="https://devza.com/tests/tasks/list";
  private createUrl="https://devza.com/tests/tasks/create";
  private updateUrl="https://devza.com/tests/tasks/update";
  private deleteUrl="https://devza.com/tests/tasks/delete"

  constructor(private http:HttpClient) { }
  private header = new HttpHeaders({
    // 'Content-Type': 'formData',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',

  });
 
  getTasksList():Observable<Tasks[]>{
    return this.http.get<Tasks[]>(`${this.baseUrl}`,{'headers':this.header});
  }
  createtask(formData):Observable<any>{
    return this.http.post<any>(`${this.createUrl}`,formData,{'headers':this.header})
  }
  updatetask(formData):Observable<any>{
    return this.http.post<any>(`${this.createUrl}`,formData,{'headers':this.header})
  }
  deleteTaskById(formData):Observable<Object>{
    return this.http.post<any>(`${this.deleteUrl}`,formData,{'headers':this.header});
  }
}
