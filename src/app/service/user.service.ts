import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, Subject, catchError, pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:7000/api';
  private userss$: Subject<User[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshEmployees() {
    this.httpClient.get<User[]>(`${this.url}/employees`)
      .subscribe(userss => {
        this.userss$.next(userss);
      });
  }

  // getUserByEmailAndPassword(user: User): Observable<string>{
  //   let headers = new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*'
  //   });
  
  //   return this.httpClient.post<any>(`${this.url}/users/login`, user, {headers: headers, withCredentials: true});
  // }

  getUserByEmailAndPassword(user: User): Observable<string>{
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
  
    return this.httpClient.post<any>(`${this.url}/users/login`, user, {headers: headers, withCredentials: true})
    .pipe(
      catchError(error => {
        return throwError(error.error || error.message || 'Server Error');
      })
    );
  }


  createUser(user: User): Observable<string> {
    return this.httpClient.post(`${this.url}/users/register`, user, { responseType: 'text' })
    .pipe(
      catchError(error => {
        return throwError(error.error || error.message || 'Server Error');
      })
    );
  }

  Getusers(){
    return this.httpClient.get(`${this.url}/users/`);
  }
}
