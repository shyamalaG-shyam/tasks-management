import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import{Tasks} from'./tasks';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="https://devza.com/tests/tasks/listusers"
  // private header = new HttpHeaders().append('content-type','formdata').append('Access-Control-Allow-Origin', 'http://localhost:4200').append('AuthToken','UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a')
  private header = new HttpHeaders({
    'Content-Type': 'form-data',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
  });
  constructor(private http:HttpClient) { }
  getUsersList():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`,{'headers':this.header})
  }
}
