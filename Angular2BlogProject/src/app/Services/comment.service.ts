import { Injectable } from '@angular/core';
import { Comment } from '../Models/comment.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


@Injectable()
export class CommentService {
    constructor(private http: Http) { }

    getAllComments(): Observable<Comment[]> {
        return this.http.get('http://localhost:58821/api/comments')
            .map((response: Response) => <Comment[]>response.json())
            .catch(this.handleError);
    }

    getCommentById(commentId:string): Observable<Comment> {
        return this.http.get('http://localhost:58821/api/comments/ ' + commentId)
            .map((response: Response) => <Comment>response.json())
            .catch(this.handleError);
    }

    deleteCommentById(CommentId: string): Observable<Comment[]> {
        return this.http.delete('http://localhost:58821/api/comments/ ' + CommentId)
            .map((response: Response) => <Comment>response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}