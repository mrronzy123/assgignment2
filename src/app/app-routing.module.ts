import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path : 'post/:id', component : ViewPostComponent },
  { path : 'posts', component : ListPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ViewPostComponent, ListPostsComponent]