import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient:HttpClient) { }

  getPosts(){
    return this._HttpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
