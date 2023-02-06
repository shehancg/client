import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = 'http://localhost:7000/api';

  constructor(private httpClient: HttpClient) { }

  GetItem(){
    return this.httpClient.get(`${this.url}/items/`);
  }
  DeleteItem(){
    return this.httpClient.delete(`${this.url}/items/:id`);
  }

  CreateItem(data:any):Observable<any>{
    return this.httpClient.post(`${this.url}/items/itemsadd`,data)
  }
}
