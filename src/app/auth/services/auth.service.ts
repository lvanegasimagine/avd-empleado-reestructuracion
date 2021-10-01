import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interface';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  URL_USUARIO: string = environment.API_URL;
  private _usuario: Usuario;

  get usuario(){
    return {...this._usuario};
  }


  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const url = `${this.URL_USUARIO}/login`;
    const body = {email, password};
    
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(resp => {
        if(resp.status){
          this._usuario = {
            nombre: resp.nombre,
            uid: resp.uid,
            email: resp.email
          }
        }
      }),
      map(resp => resp.status),
      catchError(err => of(false))
    )
  }
}
