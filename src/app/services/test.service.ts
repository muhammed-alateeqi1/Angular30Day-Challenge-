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
 
  private apiUrlYummy = 'https://api.yani.tv/search?q=tokyo';
  Yummy():Observable<any>{
    return this._HttpClient.get<any>(this.apiUrlYummy);
  }
 
  
}
