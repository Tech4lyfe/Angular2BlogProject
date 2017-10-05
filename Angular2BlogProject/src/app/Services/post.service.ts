import { Injectable } from '@angular/core';
import { Post } from '../Models/post.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class PostService {

    constructor(private http: Http) { }

    getAllPosts(): Observable<Post[]> {
        return this.http.get('http://localhost:58821/api/posts')
            .map((response: Response) => <Post[]> response.json())
            .catch(this.handleError);
    }

    getPostById(postId: string): Observable<Post> {
        return this.http.get('http://localhost:58821/api/posts/ ' + postId)
            .map((response: Response) => <Post>response.json())
            .catch(this.handleError);

    }

    deletePostById(PostId: string): Observable<Post[]> {
        return this.http.delete('http://localhost:58821/api/posts/ ' + PostId)
            .map((response: Response) => <Post>response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}