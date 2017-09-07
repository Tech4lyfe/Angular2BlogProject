import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentsComponent } from './Comments/comments.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import {PostComponent} from './Post/post.component';


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
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { useHash: true }), FormsModule ],
  declarations: [ AppComponent, CommentsComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, PostComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
