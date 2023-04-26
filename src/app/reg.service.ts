import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http:HttpClient) { }


  public registerUserfromremote(user:User):Observable<any>{
    return this.http.post("http://localhost:8080/registeruser", user);
  } 

 
}
