"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var comments_component_1 = require("./Comments/comments.component");
var navbar_component_1 = require("./Navbar/navbar.component");
var home_component_1 = require("./Home/home.component");
var about_component_1 = require("./About/about.component");
var contact_component_1 = require("./Contact/contact.component");
var post_component_1 = require("./Post/post.component");
var postlist_component_1 = require("./Post/postlist.component");
var post_service_1 = require("./Services/post.service");
var singlepost_component_1 = require("./SinglePost/singlepost.component");
var comment_service_1 = require("./Services/comment.service");
var CommentFilterByPostId_1 = require("./CustomFilters/CommentFilterByPostId");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'newpost',
        component: post_component_1.PostComponent
    },
    {
        path: 'post/:PostId',
        component: singlepost_component_1.SinglePostComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true }), forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, comments_component_1.CommentsComponent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, post_component_1.PostComponent, postlist_component_1.PostListComponent, singlepost_component_1.SinglePostComponent,
            CommentFilterByPostId_1.FilterCommentByPostId],
        bootstrap: [app_component_1.AppComponent],
        providers: [post_service_1.PostService, comment_service_1.CommentService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map