import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../posts.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  title = 'assignment2'
  start = 0
  end = 10
  showposts: any
  postTitle: any

  constructor(private posts:PostsService) {}
  
  onClickMe() {
    console.log('helloo');
  }

  ngOnInit () {
    this.posts.getPosts().subscribe((data) => {
      this.postTitle = data.data;
      console.log(this.postTitle);
    })
  }

  loadMore() {
    this.start = 10;
    this.end = 20;
    this.posts.getPosts().subscribe((data) => {
      this.postTitle = data.data;
      console.log(this.postTitle);
    })
  }

}
