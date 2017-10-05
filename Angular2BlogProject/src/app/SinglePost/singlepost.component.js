"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var comment_model_1 = require("../Models/comment.model");
var post_service_1 = require("../Services/post.service");
var comment_service_1 = require("../Services/comment.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var SinglePostComponent = (function () {
    function SinglePostComponent(postService, activatedRoute, router, commentService, http) {
        var _this = this;
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.commentService = commentService;
        this.http = http;
        this.statusMessage = "Loading Data please wait...";
        this.model = new comment_model_1.Comment();
        this.comments = [];
        this.submit = function (data) {
            var comment = {
                Name: data.Name,
                CommentContent: data.Content,
                PostId: _this.post.PostId
            };
            var bodyString = JSON.stringify(comment); // Stringify payload
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
            var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
            _this.http.post("http://localhost:58821/api/comments", bodyString, options) // ...using post request
                .map(function (res) {
                var newComment = res.json();
                _this.comments = [newComment].concat(_this.comments);
            }) // ...and calling .json() on the response to return data
                .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }) //...errors if
                .subscribe();
        };
        this.deleteComment = function (comment) {
            _this.commentService.deleteCommentById(comment.CommentId)
                .map(function () {
                var index = _this.comments.findIndex(function (c) { return c.CommentId === comment.CommentId; });
                _this.comments = _this.comments.slice(0, index).concat(_this.comments.slice(index + 1));
            })
                .subscribe();
        };
    }
    SinglePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var postId = this.activatedRoute.snapshot.params['PostId'];
        this.postService.getPostById(postId).subscribe(function (postData) {
            if (postData == null) {
                _this.statusMessage = "This Employee doesnt exist";
            }
            else {
                _this.post = postData;
            }
        }, function (error) {
            _this.statusMessage =
                "There is a problem with the service. Please try again later...";
            console.log(error);
        });
        this.commentService.getAllComments().subscribe(function (commentData) { return _this.comments = commentData; }, function (error) {
            _this.statusMessage =
                "There is a problem with the sever. Please try again later...";
            console.error(error);
        });
    };
    return SinglePostComponent;
}());
SinglePostComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/SinglePost/singlepost.html'
    }),
    __metadata("design:paramtypes", [post_service_1.PostService, router_1.ActivatedRoute, router_1.Router,
        comment_service_1.CommentService, http_1.Http])
], SinglePostComponent);
exports.SinglePostComponent = SinglePostComponent;
//# sourceMappingURL=singlepost.component.js.map