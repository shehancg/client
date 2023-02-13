import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = 'http://localhost:7000/api';

  constructor(private httpClient: HttpClient) { }
  
  GetAllOrder():Observable<any>{
    return this.httpClient.get(`${this.url}/orders/`);
  }
}
