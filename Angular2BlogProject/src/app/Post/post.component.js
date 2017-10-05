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
var post_model_1 = require("../Models/post.model");
var http_1 = require("@angular/http");
var post_service_1 = require("../Services/post.service");
var Observable_1 = require("rxjs/Observable");
var PostComponent = (function () {
    function PostComponent(http, postService) {
        var _this = this;
        this.http = http;
        this.postService = postService;
        this.model = new post_model_1.Post();
        this.createdDate = new Date();
        this.posts = [];
        this.statusMessage = "Loading Data. Please wait.....";
        this.deletePost = function (post) {
            _this.postService.deletePostById(post.PostId)
                .map(function () {
                var index = _this.posts.findIndex(function (c) { return c.PostId === post.PostId; });
                _this.posts = _this.posts.slice(0, index).concat(_this.posts.slice(index + 1));
            })
                .subscribe();
        };
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (postData) { return _this.posts = postData; }, function (error) {
            _this.statusMessage =
                "There is a problem with the sever. Please try again later...";
            console.error(error);
        });
    };
    PostComponent.prototype.submit = function (data) {
        var post = {
            Content: data.Content,
            Title: data.Title,
            Author: data.Author,
            CreateDate: this.createdDate
        };
        var bodyString = JSON.stringify(post); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var self = this;
        this.http.post("http://localhost:58821/api/posts", bodyString, options) // ...using post request
            .map(function (res) {
            var newPost = res.json();
            self.posts.unshift(newPost);
        }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }) //...errors if
            .subscribe();
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Post/post.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, post_service_1.PostService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map