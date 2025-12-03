import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private _HttpClient:HttpClient) {}
  Prodcuts():Observable<any>{
    return this._HttpClient.get<any>(this.apiUrl);
  }
 
}
