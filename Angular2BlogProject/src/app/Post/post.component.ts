import { Component } from '@angular/core';
import { Post } from '../Models/post.model'
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'app/Post/post.html'
})

export  class PostComponent {
    model = new Post("","","");

    submit(form: NgForm) {
        alert("Post Successfully");
        form.resetForm();
    }
}