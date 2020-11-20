import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient ) { }

  getPosts () {
    return this.http.get('https://gorest.co.in/public-api/posts');
  }

  getPostByID (postID) {
    return this.http.get('https://gorest.co.in/public-api/posts/' + postID);
  }
  getCommentsByPostID (postID) {
    return this.http.get ('https://gorest.co.in/public-api/posts/' + postID + '/comments');
  }
  getUsers() {
    return this.http.get ('https://gorest.co.in/public-api/users');
  }
}
