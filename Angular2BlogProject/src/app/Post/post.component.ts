import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { PostService } from '../Services/post.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'app/Post/post.html'
})

export class PostComponent {
    model = new Post();
    createdDate = new Date();
    post:Post;
    posts: Array<Post> = [];
    statusMessage: string = "Loading Data. Please wait.....";
  


    constructor(private http: Http, private postService:PostService) { }

    ngOnInit() {
        this.postService.getAllPosts().subscribe((postData) => this.posts = postData,
            (error) => {
                this.statusMessage =
                    "There is a problem with the sever. Please try again later...";
                console.error(error);
            });
    }

    submit(data:Post) {

        let post = {
            Content: data.Content,
            Title: data.Title,
            Author: data.Author,
            CreateDate: this.createdDate

        };

        let bodyString = JSON.stringify(post); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        var self = this;
        this.http.post("http://localhost:58821/api/posts", bodyString, options) // ...using post request
            .map(function(res) {
                var newPost = res.json();
                self.posts.unshift(newPost);
            }) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')) //...errors if
            .subscribe();

    }

    public deletePost = (post: Post): void => {
        this.postService.deletePostById(post.PostId)
            .map(() => {
                let index = this.posts.findIndex(c => c.PostId === post.PostId);
                this.posts = this.posts.slice(0, index).concat(this.posts.slice(index + 1));
            })
            .subscribe();
    }
}