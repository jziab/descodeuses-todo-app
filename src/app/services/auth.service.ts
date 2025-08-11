import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from '../../environements/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environement.apiUrl +'/auth';

  constructor(private http: HttpClient) {}

  login(payload : any): Observable<any> {
    return this.http.post(`${this.apiUrl+'/login'}`, payload);
  }
  signup(payload: any): Observable<any> {
  return this.http.post(`${this.apiUrl+'/signup'}`, payload);
}


}
