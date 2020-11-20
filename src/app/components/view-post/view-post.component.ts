import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostsService } from '../../posts.service';
import { CookieService } from 'ngx-cookie-service';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  postID = this.route.snapshot.params.id
  postTitle: any
  postBody: any
  commentObj: any
  isShown: boolean = false 
  usersList: any
  isNewComment: boolean = false
  userName: any
  commentValue: any
  isInvalidUser: boolean = true
  cookieUsername: any

  constructor(private route: ActivatedRoute, private posts: PostsService, private cookie: CookieService) { }

  @Output() setCookieOnParent = new EventEmitter<string>();

  ngOnInit () {
    this.cookieUsername = this.cookie.get("username");
    this.posts.getPostByID(this.postID).subscribe((data) => {
      this.postTitle = data.data.title;
      this.postBody = data.data.body;
      console.log(this.postTitle);
    })
    this.posts.getCommentsByPostID(this.postID).subscribe((data) => {
      this.commentObj = data.data;
      console.log("comment data ", this.commentObj);
    })
  }

  addComments() {
    this.isShown = ! this.isShown;
    console.log('add comments');
  }

  checkExistingUsers(item, test) {
    console.log(test.value, "test")
    this.posts.getUsers().subscribe((data) => {
      this.usersList= data.data;
      for(let result of this.usersList){
        if(item.value == result.name) {
          this.isInvalidUser = false;
          console.log('User Exist' , result);
          this.isNewComment = true;
          console.log("New comment" , this.isNewComment);
          this.userName = item.value;
          this.commentValue = test.value;
          this.isInvalidUser = false;
          this.cookie.set ("username", this.userName);
          this.cookieUsername= this.cookie.get("username");
        }
        else {
          
        }
     }
     if(this.isInvalidUser == true) {
      this.isInvalidUser = false;
       alert ("Please Enter a valid username that exists in the JSON");
    }
    })
  }

}
