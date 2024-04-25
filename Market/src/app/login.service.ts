import { Injectable, inject } from '@angular/core';
import {Token} from './product'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  globalLogged: boolean = false;
  BASE_URL = 'http://localhost:8000';
  http = inject(HttpClient);

  constructor() { }

  login(username: string, password: string): Observable<Token>{
    return this.http.post<Token>(`${this.BASE_URL}/api/login/`, 
    { username, password})
  }

  setLogged(){
    this.globalLogged = true;
  }

  getLogged(){
    const access = localStorage.getItem("access");
    if (access) {
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
    this.globalLogged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
}
