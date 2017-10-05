import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post.model';
import {Comment} from '../Models/comment.model';
import { PostService } from '../Services/post.service';
import {CommentService} from '../Services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl:'app/SinglePost/singlepost.html'
})

export class SinglePostComponent implements OnInit {
    statusMessage: string = "Loading Data please wait...";
    post: Post; 
    model = new Comment();
    comments: Array<Comment> = [];
    

    constructor(public postService: PostService, private activatedRoute: ActivatedRoute, private router: Router,
                           public commentService: CommentService, private http:Http) { }

    ngOnInit() {
        let postId: string = this.activatedRoute.snapshot.params['PostId'];
        this.postService.getPostById(postId).subscribe(
            (postData) => {

                if (postData == null) {
                    this.statusMessage = "This Employee doesnt exist";
                } else {

                    this.post = postData;
                }

            },
            (error) => {
                this.statusMessage =
                    "There is a problem with the service. Please try again later...";
                console.log(error);

            }
        );

        this.commentService.getAllComments().subscribe((commentData) => this.comments = commentData,
            (error) => {
                this.statusMessage =
                    "There is a problem with the sever. Please try again later...";
                console.error(error);
            });
    }

    submit =(data: Comment) :void => {
        let comment = {
            Name: data.Name,
            CommentContent: data.Content,
            PostId: this.post.PostId
        };

        let bodyString = JSON.stringify(comment); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        this.http.post("http://localhost:58821/api/comments", bodyString, options) // ...using post request
            .map((res) => {
                let newComment = res.json();
                this.comments = [newComment].concat(this.comments);
            }) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')) //...errors if
            .subscribe();
    }

    public deleteComment = (comment: Comment): void => {
        this.commentService.deleteCommentById(comment.CommentId)
            .map(() => {
                let index = this.comments.findIndex(c => c.CommentId === comment.CommentId);
                this.comments = this.comments.slice(0, index).concat(this.comments.slice(index + 1));
            })
            .subscribe();
    }

}