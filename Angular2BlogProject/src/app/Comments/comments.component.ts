import { Component } from '@angular/core';

@Component({
    selector: 'comments',
    template: '<h1>{{comments}}</h1>'
})

export class CommentsComponent
{
    comments: string = 'CommentsPage';
}