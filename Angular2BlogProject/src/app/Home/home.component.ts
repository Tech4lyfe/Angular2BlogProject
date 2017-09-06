import { Component } from '@angular/core';

@
Component({
    selector: 'Home',
    template: "<h1>{{homeMessage}}</h1>"
})

export class HomeComponent {

    homeMessage: string = "THIS IS HOME PAGE!!";
}