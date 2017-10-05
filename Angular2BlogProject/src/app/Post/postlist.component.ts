import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post.model';
import {PostService} from '../Services/post.service'

@Component({
    selector: 'postlist',
    templateUrl:'app/Post/postlist.html'
})

export class PostListComponent implements OnInit {

    posts: Post[];
    statusMessage: string = "Loading Data. Please wait.....";

    constructor(public postService: PostService) { }

    ngOnInit() {
        this.postService.getAllPosts().subscribe((postData) => this.posts = postData,
            (error) => {
                this.statusMessage =
                    "There is a problem with the sever. Please try again later...";
                console.error(error);
            });
    }

    getPosts(): number {
        return this.posts.length;
    }
}