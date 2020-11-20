import { Component } from '@angular/core';
import {PostsService} from './posts.service';
import { Pipe, PipeTransform } from '@angular/core';
import { RoutingComponents } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2'

  constructor() {}
  
  ngOnInit() {
    
  }
}
