import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private _posts:PostsService){}
  posts$ = this._posts.getPosts();

}
