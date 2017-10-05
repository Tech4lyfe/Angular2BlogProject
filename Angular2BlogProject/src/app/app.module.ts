import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsComponent } from './Comments/comments.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { PostComponent } from './Post/post.component';
import { PostListComponent } from './Post/postlist.component';
import { PostService } from './Services/post.service';
import { SinglePostComponent } from './SinglePost/singlepost.component';
import { CommentService } from './Services/comment.service';
import {FilterCommentByPostId} from './CustomFilters/CommentFilterByPostId';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'newpost',
        component: PostComponent
    },
    {
        path: 'post/:PostId',
        component: SinglePostComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { useHash: true }), FormsModule, HttpModule ],
    declarations: [AppComponent, CommentsComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, PostComponent, PostListComponent, SinglePostComponent,
                   FilterCommentByPostId],
  bootstrap: [AppComponent],
  providers: [PostService,CommentService]
})
export class AppModule { }
