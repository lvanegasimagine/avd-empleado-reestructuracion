import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  URL_USUARIO: string = environment.API_URL;
  private _usuario: any;

  get usuario(){
    return {...this._usuario};
  }

  
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const url = `${this.URL_USUARIO}/login`;
    const body = {email, password};
    
    return this.http.post<AuthResponse>(url, body);
  }
}
