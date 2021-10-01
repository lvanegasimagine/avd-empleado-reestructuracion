import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interface';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

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
          localStorage.setItem('token', resp.token);
          this._usuario = {
            nombre: resp.nombre,
            uid: resp.uid,
            email: resp.email
          }
        }
      }),
      map(resp => resp.status),
      catchError(err => of(err.error.msg))
    )
  }

  validarToken(): Observable<boolean>{
    const url = `${this.URL_USUARIO}/auth/renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map(resp => {
        return resp.status;
      }),
      catchError(errr => of(false)));
  }
}
