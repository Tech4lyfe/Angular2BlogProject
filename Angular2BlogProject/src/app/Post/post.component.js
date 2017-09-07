"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_model_1 = require("../Models/post.model");
var PostComponent = (function () {
    function PostComponent() {
        this.model = new post_model_1.Post("", "", "");
    }
    PostComponent.prototype.submit = function (form) {
        alert("Post Successfully");
        form.resetForm();
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Post/post.html'
    })
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map