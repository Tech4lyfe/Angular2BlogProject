import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommentsComponent } from './Comments/comments.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import {ContactComponent} from './Contact/contact.component';

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
    //{
    //    path: 'employee/:EmployeeId',
    //    component: EmployeeComponent
    //},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
    //{
    //    path: "**",
    //    component: PageNotFoundedComponent
    //}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { useHash: true }) ],
  declarations: [ AppComponent, CommentsComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
