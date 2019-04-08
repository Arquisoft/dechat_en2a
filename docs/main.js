(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatRoom\">\r\n    <div class=\"chatHeaderWrapper\">\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'De-Chat';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-popup/login-popup.component */ "./src/app/components/login-popup/login-popup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat-form/chat-form.component */ "./src/app/components/chat-form/chat-form.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_friend_item_friend_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/friend-item/friend-item.component */ "./src/app/components/friend-item/friend-item.component.ts");
/* harmony import */ var _components_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/friend-list/friend-list.component */ "./src/app/components/friend-list/friend-list.component.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components












// Services







var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'login-popup',
        component: _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__["LoginPopupComponent"]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
    },
    {
        path: 'chat',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__["LoginPopupComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_8__["ChatFormComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_10__["FeedComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_friend_item_friend_item_component__WEBPACK_IMPORTED_MODULE_13__["FriendItemComponent"],
                _components_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_14__["FriendListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"] // required for toastr
            ],
            providers: [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-form/chat-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/chat-form/chat-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput{\r\n    width: 81%;\r\n    border-radius: 0.313em;\r\n    position: relative;\r\n    top: 10%;\r\n    left: 2%;\r\n    margin: 0.100em;\r\n    padding: 0.100em;\r\n    font-size: 1.300em;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #eee;\r\n    color: #000;\r\n    transition: 0.1s ease-out;\r\n}\r\n\r\n.chatInput:focus{\r\n    background-color: #E4F1FE;\r\n    color: #222;\r\n    transition: 0.2s ease-in;\r\n}\r\n\r\n.chatButton{\r\n    position: relative;\r\n    right: 2%; \r\n    left: 3%;\r\n    top: 10%; \r\n    min-width: 6.875em;\r\n    width: 12%;\r\n    border-radius: 0.313em;\r\n    margin: 0.000em;\r\n    padding: 0.325em;\r\n    padding: 0.300em 1.300em;\r\n    font-size: 1.300em;\r\n    font-family: 'Droid Sans', sans-serif;\r\n    background-color: rgb(13, 6, 104);\r\n    color: white;\r\n    transition: 0.2s ease-out;\r\n    min-width: 3.125em;\r\n}\r\n\r\n.chatButton:hover{\r\n    background-color: #444;\r\n}\r\n\r\n.divForm{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    width: 100%;\r\n    top: 10%;\r\n    padding: 0.325em;\r\n    padding: 0.300em 1.300em;\r\n}"

/***/ }),

/***/ "./src/app/components/chat-form/chat-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-form/chat-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divForm\">\r\n<input \r\n    class=\"chatInput\" \r\n    [(ngModel)]=\"message\" \r\n    (keydown)=\"handleSubmit($event)\"\r\n    placeholder = \"Write message here...\"/>\r\n\r\n<button class=\"chatButton\" id=\"send\" (click)=send()>Send</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/chat-form/chat-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-form/chat-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        this.message = '';
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    ChatFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/components/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/components/chat-form/chat-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\r\n    display: flex;\r\n    height: calc(100vh - 6.250em);\r\n}\r\n\r\n.userListWrapper {\r\n    background-color: rgb(45, 72, 107);\r\n    color: #fff;\r\n    display: flex;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.200em;\r\n    flex: 1;\r\n    order: 1;\r\n    padding: 1.250em 0.000em 2.500em 1.875em;\r\n    border-right: 1px solid #222;\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.feedWrapper {\r\n    background-color: #fff;\r\n    background: \r\n        linear-gradient(181deg, rgba(40, 180, 255, 0.6), rgba(1, 15, 78, 0.9)),\r\n        url('Solid_Pattern.png') center center no-repeat;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.200em;\r\n    flex: 5;\r\n    order: 2;\r\n    overflow-y: auto;\r\n    padding: 1.250em 0.000em 0.000em 1.500em;\r\n}\r\n\r\n.chatFormWrapper {\r\n    height: 3.125em;\r\n    background-color: rgb(20, 96, 236);\r\n    overflow: hidden;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n}\r\n\r\n#scroll-style::-webkit-scrollbar-track{\r\n\tborder-radius: 0.625em;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\napp-user-list {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\r\n  <div class=\"userListWrapper\">\r\n    <app-friend-list></app-friend-list>\r\n  </div>\r\n  <div #scroller class=\"feedWrapper\">\r\n    <app-feed></app-feed>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"chatFormWrapper\">\r\n  <app-chat-form></app-chat-form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop
            = this.feedContainer.nativeElement.scrollHeight;
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scroller'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "feedContainer", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/feed/feed.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/feed/feed.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.message{\r\n    flex-direction: column;\r\n    margin: 0.625em 0;\r\n}"

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/feed/feed.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\r\n  <div *ngFor=\"let message of feed | async\" class=\"message\">\r\n    <app-message [chatMessage]=message></app-message>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat) {
        this.chat = chat;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.feed = this.chat.getMessages();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.feed = this.chat.getMessages();
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/components/friend-item/friend-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/friend-item/friend-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userItem{\r\n    height: auto;\r\n    padding: 0.625em;\r\n    width: 90%;\r\n    margin-top: 0.625em;\r\n    border-radius: 0.063em;\r\n    align-items: flex-start;\r\n    background-color: #4171a5;\r\n    box-shadow: 0 0.188em 0.375em rgba(0,0,0,0.16), 0 0.188em 0.375em rgba(0,0,0,0.23);\r\n    color: #A098A5;\r\n    border-radius: 0.500em;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n.userItem:hover{\r\n    background-color: #2c3a68;\r\n    color: #ddd;\r\n    transition: ease-in 0.1s;\r\n}\r\n\r\n.online{\r\n    background-color: #0FA;\r\n}\r\n\r\n.busy{\r\n    background-color: #FB0;\r\n}\r\n\r\n.offline{\r\n    background-color: #888;\r\n}\r\n\r\n.status{\r\n    border: 0.063em solid black;\r\n    display: inline-block;\r\n    min-width: 0.625em;\r\n    min-height: 0.625em;\r\n    border-radius: 50%;\r\n    margin: 0.625em 0.750em 0.000em 0.625em;\r\n}\r\n\r\n.userName{\r\n    display: contents;\r\n}\r\n\r\n.userItemCurrent{\r\n    height: auto;\r\n    padding: 0.625em;\r\n    width: 100%;\r\n    margin-top: 0.625em;\r\n    border-radius: 0.063em;\r\n    align-items:flex-start;\r\n    box-shadow: 0 0.188em 0.375em rgba(0,0,0,0.16), 0 0.188em 0.375em rgba(0,0,0,0.23);\r\n    border-radius: 0.500em;\r\n    transition: ease-in 0.2s;\r\n    background-color: #1f2f8a;\r\n    color: #ddd;\r\n}"

/***/ }),

/***/ "./src/app/components/friend-item/friend-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/friend-item/friend-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"userClicked()\" [ngClass]=\"{userItemCurrent: (user.isCurrent), userItem: (!user.isCurrent)}\">\r\n  <span class=\"status\" [ngClass]=(user.status)>\r\n  </span>\r\n  <span class=\"userName\">\r\n    {{user.fullName}}\r\n  </span>\r\n</div>"

/***/ }),

/***/ "./src/app/components/friend-item/friend-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/friend-item/friend-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: FriendItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendItemComponent", function() { return FriendItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendItemComponent = /** @class */ (function () {
    function FriendItemComponent(cService) {
        this.cService = cService;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('userdepruebas', 'Pruebas User', 'http://prueba.user/webid');
    }
    FriendItemComponent.prototype.ngOnInit = function () {
    };
    FriendItemComponent.prototype.userClicked = function () {
        this.cService.setOther(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], FriendItemComponent.prototype, "user", void 0);
    FriendItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-item',
            template: __webpack_require__(/*! ./friend-item.component.html */ "./src/app/components/friend-item/friend-item.component.html"),
            styles: [__webpack_require__(/*! ./friend-item.component.css */ "./src/app/components/friend-item/friend-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], FriendItemComponent);
    return FriendItemComponent;
}());



/***/ }),

/***/ "./src/app/components/friend-list/friend-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/friend-list/friend-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/friend-list/friend-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/friend-list/friend-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\r\n  <app-friend-item\r\n  [user]=user *ngFor=\"let user of users\">\r\n  </app-friend-item>\r\n</div>"

/***/ }),

/***/ "./src/app/components/friend-list/friend-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/friend-list/friend-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(chat) {
        var _this = this;
        chat.getFriends().subscribe(function (users) {
            _this.users = users;
        });
    }
    FriendListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-list',
            template: __webpack_require__(/*! ./friend-list.component.html */ "./src/app/components/friend-list/friend-list.component.html"),
            styles: [__webpack_require__(/*! ./friend-list.component.css */ "./src/app/components/friend-list/friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/components/login-popup/login-popup.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/login-popup/login-popup.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login-popup/login-popup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-popup/login-popup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">Loading...</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login-popup/login-popup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-popup/login-popup.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
        this.runScript();
    };
    LoginPopupComponent.prototype.runScript = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '/assets/js/libs/popup.js';
        this.elementRef.nativeElement.appendChild(s);
        // s.onload = () => this.triggerDuo();
    };
    LoginPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/components/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/components/login-popup/login-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-page {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #666;\r\n  margin: auto;\r\n  margin-top: 4.500em;\r\n  right: 0;\r\n  bottom: 3.250em;\r\n  left: 0;\r\n  width: 31.250em;\r\n  height: 31.250em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page img {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.login-page h1 {\r\n  font-family: 'Roboto Slab', serif;\r\n  color: rgb(20, 96, 236);\r\n  font-size: 4em;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  line-height: 3.125em;\r\n  letter-spacing: 0.119em;\r\n  padding-top: 0.0em;\r\n  margin-top: 0.000em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page h2 {\r\n  color: #666;\r\n  font-size: 1.000em;\r\n  font-weight: 500;\r\n  letter-spacing: 0.063em;\r\n  line-height: 1.313em;\r\n  margin-top: 3.000em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page h3 {\r\n  color: #666;\r\n  font-size: 1.250em;\r\n  font-weight: 500;\r\n  max-width: 100%;\r\n  letter-spacing: 0.063em;\r\n  line-height: 1.313em;\r\n  margin-top: -3.5em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page .small-link {\r\n  font-size: 0.750em;\r\n  color: #666;\r\n  letter-spacing: 0.75px;\r\n  line-height: 1.000em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page .registration-link {\r\n  margin-top: 2em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page .registration-link p {\r\n  font-size: 1.000em;\r\n  color: #666;\r\n  letter-spacing: 0.063em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.login-page .item-divider {\r\n  box-sizing:border-box;\r\n  height: 0.063em;\r\n  width: 22.125em;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: -0.500em; left: -0.563em;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n\r\n  <!-- APP LOGO -->\r\n  <div style=\"margin-top:0.000em;\">\r\n    <img class=\"app-logo\" src=\"assets/images/Dechat.png\">\r\n  </div>\r\n\r\n  <!-- APP NAME -->\r\n  <h1>\r\n    De-Chat\r\n  </h1>\r\n\r\n  <!-- LOGIN DESCRIPTION -->\r\n  <h3>\r\n    Take complete control of your data with DE-CHAT, the decentralized peer-to-peer data exchange application built on Tim Berners-Lee's Solid data interchange system.\r\n  </h3>\r\n\r\n  <!-- LOGIN TITLE -->\r\n  <h2>\r\n    Login with Solid Identity\r\n  </h2>\r\n\r\n  <!-- PROVIDER SELECTION -->\r\n  <div style=\"margin-top: 10px;\">\r\n    <ng-select class=\"login-select\"\r\n               bindLabel=\"name\"\r\n               bindValue=\"loginUrl\"\r\n               placeholder=\"Select ID Provider\"\r\n               dropdownPosition=\"bottom\"\r\n               [items]=\"identityProviders\"\r\n               [(ngModel)]=\"selectedProviderUrl\"\r\n               style=\"width: 360px; height: 48px; margin-left: auto; margin-right: auto;\">\r\n\r\n      <!-- DROPDOWN TEMPLATE -->\r\n      <ng-template ng-option-tmp let-item=\"item\">\r\n        <div style=\"height:40px; padding-top:10px; position: relative; margin-left: auto; margin-right: auto\">\r\n          <img [src]=\"item.image\" style=\"float: left; height: 32px; width: 32px; margin-top:-5px;\" />\r\n          <span style=\"float: left; margin-left: 10px;\">{{ item.name }}</span>\r\n          <div style=\"clear: both;\"></div>\r\n          <div class=\"item-divider\"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </ng-select>\r\n    <input type=\"text\"\r\n           class=\"wide-text\"\r\n           *ngIf=\"selectedProviderUrl===null\"\r\n           placeholder=\"Enter WebID\"\r\n           style=\"margin-top:10px; padding: 12px 10px; width: 340px; height: 16px; display: block; margin-left: auto; margin-right: auto;\"\r\n           [(ngModel)]=\"customProviderUrl\" />\r\n    <button id=\"btn-go\" class=\"wide-button\" (click)=\"onLogin()\" *ngIf=\"selectedProviderUrl !== undefined || customProviderUrl !== undefined\" [disabled]=\"selectedProviderUrl===null && !customProviderUrl\" style=\"margin-top:10px;\">Go</button>\r\n  </div>\r\n\r\n  <!-- REGISTRATION -->\r\n  <div class=\"registration-link\">\r\n    <p style=\"margin: 12px;\">Don't have a Solid Identity?</p>\r\n    <button id=\"btn-register\" class=\"wide-button\" (click)=\"goToRegistration()\">Register</button>\r\n  </div>\r\n\r\n  <!-- HELP -->\r\n  <div style=\"margin-top: 48px;\">\r\n    <a href=\"https://solid.mit.edu\" target=\"_blank\" class=\"small-link\">\r\n      <i class=\"fas fa-info-circle\"></i> What is a Solid Identity?\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Auth Service

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        /*
        *  Alternate login-popup function for Solid. See service for more details.
        */
        this.onLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.auth.solidLoginPopup();
                return [2 /*return*/];
            });
        }); };
        this.onLogin = function () { return __awaiter(_this, void 0, void 0, function () {
            var idp;
            return __generator(this, function (_a) {
                idp = this.selectedProviderUrl ? this.selectedProviderUrl : this.customProviderUrl;
                if (idp) {
                    try {
                        this.auth.solidLogin(idp);
                    }
                    catch (err) {
                        console.log('An error has occurred logging in: ' + err);
                    }
                }
                return [2 /*return*/];
            });
        }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If we're authenticated, go to profile
        if (localStorage.getItem('solid-auth-client')) {
            this.router.navigateByUrl('/chat');
        }
        this.identityProviders = this.auth.getIdentityProviders();
    };
    LoginComponent.prototype.goToRegistration = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer{\r\n    display: flex;\r\n    height: auto;\r\n    width: 70%;\r\n    min-width: 25.000em;\r\n    border-radius: 0.313em;\r\n    align-items:stretch;\r\n    background-color: #eee;\r\n    box-shadow: 0 0.188em 0.375em rgba(0,0,0,0.26), 0 0.188em 0.375em rgba(0,0,0,0.23);\r\n}\r\n\r\n.isOwnMessageContainer{\r\n    background-color: #01579B;\r\n    float: right;\r\n    margin-right: 0.625em;\r\n}\r\n\r\n.messageData{\r\n    flex: 1;\r\n    padding: 0.625em;\r\n    font-size: 0.7em;\r\n}\r\n\r\n.sender{\r\n    display: block;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n\r\n.isOwnSender{\r\n    color: #E1F5FE;\r\n}\r\n\r\n.timestamp {\r\n    color: #555;\r\n    font-style: italic;\r\n}\r\n\r\n.isOwnTimestamp{\r\n    color: #4FC3F7;\r\n}\r\n\r\n.messageContent{\r\n    height: auto;\r\n    flex: 9;\r\n    background-color: #fff;\r\n    padding: 0.625em;\r\n}\r\n\r\n.isOwnMessageContent{\r\n    background-color: #E3F2FD;\r\n    color: #01579B;\r\n}\r\n\r\n.messageDelete {\r\n    background-color: #01579B;\r\n    border-top-right-radius: 0.313em;\r\n    border-bottom-right-radius: 0.313em;\r\n}\r\n\r\n.deleteButton {\r\n    background-color: #01579B;\r\n    border: none;\r\n    border-top-right-radius: 0.313em;\r\n}\r\n\r\n.imgDelete {\r\n    width: 2.000em;\r\n    height: 2.000em;\r\n    margin-top: 0.500em;\r\n}"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\"\r\n    [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\r\n    <div class=\"messageData\"\r\n        [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\r\n        <span class=\"sender\"\r\n            [ngClass]=\"{'isOwnSender':isOwnMessage}\">\r\n            {{ userName }}\r\n        </span>\r\n        <span class=\"timestamp\" \r\n            [ngClass] = \"{'isOwnTimestamp':isOwnMessage}\">\r\n            {{ timeStamp | date:'medium' }}\r\n        </span>\r\n    </div>\r\n    <div class=\"messageContent\"\r\n        [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\r\n        {{ messageContent }}\r\n    </div>\r\n    <div class=\"messageDelete\">\r\n        <button class=\"deleteButton\" (click)=delete()>\r\n            <img class=\"imgDelete\" src=\"assets/images/delete_msg.png\" alt=\"Delete\"/>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/chat-message.model */ "./src/app/models/chat-message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(chatService) {
        this.chatService = chatService;
        this.timeStamp = new Date();
    }
    MessageComponent.prototype.delete = function () {
        this.chatService.deleteMessage(this.chatMessage);
    };
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        var _this = this;
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        if (!chatMessage) {
            chatMessage = new _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"]('username', 'Can\'t load', 'http://webid.com');
        }
        this.chatService.getUser().subscribe(function (user) {
            if (user !== undefined) {
                _this.userName = user.username;
            }
            else {
                _this.userName = "MockName";
            }
        });
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.isOwnMessage = (this.userName === chatMessage.userName);
        this.userName = chatMessage.userName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\r\n    width: 100%;\r\n    background-color: rgb(20, 96, 236);\r\n    height: 3.125em;\r\n    color: #fff;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .topnav a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    height: 100%;\r\n  }\r\n\r\n  .topnav a:hover {\r\n    background-color: rgba(0,0,0,0.25);\r\n  }\r\n\r\n  .topnav a:active {\r\n    background-color: rgba(0,0,0,0.25);\r\n  }\r\n\r\n  .topnav a:focus {\r\n    background-color: rgba(0,0,0,0.25);\r\n  }\r\n\r\n  .topnav .logo {\r\n    display: inline-block;\r\n    font-family: 'Roboto Slab', serif;\r\n    font-size: 1.750em;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    line-height: 100%;\r\n    padding-right: 5.000em;\r\n    position: relative;\r\n    top: 0.000em;\r\n    left: 1.750em;\r\n  }\r\n\r\n  .topnav .menu-item {\r\n    display: inline-block;\r\n    width: 6.250em;\r\n    margin: auto;\r\n    text-align: center;\r\n\r\n  }\r\n\r\n  .topnav .menu-item i {\r\n    font-size: 2em;\r\n    margin-top: 0.25em;\r\n  }\r\n\r\n  .topnav .profile-menu {\r\n    float: right;\r\n  }"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\r\n  <div class=\"topnav\">\r\n    <div class=\"logo\">DE-CHAT</div>\r\n    <a class=\"menu-item\" [routerLink]=\"['/chat']\">\r\n        <i class=\"far fa-comment\"></i>\r\n    </a>\r\n\r\n    <a class=\"menu-item\" [routerLink]=\"['/profile']\">\r\n      <i class=\"fas fa-user\"></i>\r\n    </a>\r\n\r\n    <a class=\"menu-item profile-menu\" (click)=\"logout()\">\r\n      <i class=\"fas fa-sign-out-alt\"></i>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.solidSignOut();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.profile-container h1 {\r\n  font-size: 1.500em;\r\n  color: rgb(20, 96, 236);\r\n  font-weight: bold;\r\n  line-height: 2.000em;\r\n  letter-spacing: 0.075em;\r\n  text-align: center;\r\n  margin-top: 5.125em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.profile-fields-container {\r\n  max-width: 46.250em;\r\n  min-height: 33.750em;\r\n  margin: 0 auto;\r\n  border: 0.063em solid #ccc;\r\n  box-shadow: #ccc 0.063em 0.063em 0.250em;\r\n  position: relative;\r\n}\r\n\r\n.profile-fields-container .profile-image-container {\r\n  height: 200px;\r\n  width: 100%;\r\n  background-size: cover;\r\n  background: rgb(20, 96, 236);\r\n}\r\n\r\n.profile-fields-container .profile-image-container img {\r\n  height: 8.000em;\r\n  border-radius: 50%;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  position: relative;\r\n  top: 2.500em;\r\n  display: block;\r\n}\r\n\r\n.profile-fields-container i {\r\n  font-size: 0.875em;\r\n  color: #89969F;\r\n  padding-left: 1.625em;\r\n  padding-right: 0.625em;\r\n  margin-top: 1.500em;\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text {\r\n  height: 0.750em;\r\n  width: 17.500em;\r\n  border: 0.063em solid #89969F;\r\n  border-radius: 0.250em;\r\n  padding: 0.625em;\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::-webkit-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text:-ms-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::-ms-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-save-button-container {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: auto;\r\n  height: 6.250em;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.profile-save-button {\r\n  background-color: rgb(20, 96, 236);\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 17.500em;\r\n}\r\n\r\n.profile-save-button:disabled {\r\n  background-color: #F0EEEB;\r\n  border-color: #F0EEEB;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.loading-image {\r\n  text-align: center;\r\n  margin-top: 3.125em;\r\n}\r\n\r\n.addfriends {\r\n  margin: 1.250em;\r\n}\r\n\r\n.addfriends h2 {\r\n  color: rgb(20, 96, 236);\r\n}\r\n\r\n.addfriends input {\r\n  margin-right: 0.625em;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n  <h1>Profile</h1>\r\n\r\n  <!-- LOADING IMAGE -->\r\n  <div class=\"loading-image\" *ngIf=\"loadingProfile\">\r\n    <i class=\"fas fa-circle-notch fa-4x fa-spin\"></i>\r\n  </div>\r\n\r\n  <!-- MAIN PROFILE -->\r\n  <div class=\"profile-fields-container\" *ngIf=\"!loadingProfile\">\r\n    <div class=\"profile-image-container\">\r\n      <img [src]=\"profileImage\" />\r\n    </div>\r\n      <div class=\"fields pure-g\">\r\n        <!-- NAME -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-user\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"fn\" placeholder=\"NAME\" [(ngModel)]=\"profile.fn\" readonly/>\r\n        </div>\r\n\r\n        <!-- PHONE -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-phone\"></i><input type=\"text\" class=\"field-text form-control\" name=\"phone\" placeholder=\"PHONE\" [(ngModel)]=\"profile.phone\" readonly/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields pure-g\">\r\n        <!-- ROLE -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-user-astronaut\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"role\" placeholder=\"ROLE\" [(ngModel)]=\"profile.role\" readonly/>\r\n        </div>\r\n\r\n        <!-- EMAIL -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-envelope\"></i><input type=\"text\" class=\"field-text form-control\" name=\"email\" placeholder=\"EMAIL\" [(ngModel)]=\"profile.email\" readonly/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields pure-g\">\r\n        <!-- ORGANIZATION -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-building\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"company\" placeholder=\"ORGANIZATION\" [(ngModel)]=\"profile.company\" readonly/>\r\n        </div>\r\n\r\n        <!-- ADDRESS -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-map-marker-alt\" style=\"width: 12px; margin-left: 2px;\"></i><input type=\"text\" class=\"field-text form-control\" name=\"address\" placeholder=\"ADDRESS\" [(ngModel)]=\"profile.address.street\" readonly/>\r\n        </div>\r\n      </div>\r\n      <div class=\"addfriends\">\r\n        <h2>Add Friends</h2>\r\n        <i class=\"fas fa-user\"></i><input type=\"text\" class=\"field-text form-control\" name=\"webIdAdd\" placeholder=\"WebId\" [(ngModel)]=\"addWebId\" />\r\n        <button type=\"submit\" class=\"wide-button profile-save-button\" (click)=\"addFriend()\">Add Friend</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(rdf, route, auth) {
        this.rdf = rdf;
        this.route = route;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadingProfile = true;
        this.loadProfile();
        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    };
    // Loads the profile from the rdf service and handles the response
    ProfileComponent.prototype.loadProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                        }
                        this.loadingProfile = false;
                        this.setupProfileData();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Submits the form, and saves the profile data using the auth/rdf service
    ProfileComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.cardForm.invalid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rdf.updateProfile(this.cardForm)];
                    case 2:
                        _a.sent();
                        localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("Error: " + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
    // and potentially format the address if we need to reformat it for this UI
    ProfileComponent.prototype.setupProfileData = function () {
        if (this.profile) {
            this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        }
        else {
            this.profileImage = '/assets/images/profile.png';
        }
    };
    // Example of logout functionality. Normally wouldn't be triggered by clicking the profile picture.
    ProfileComponent.prototype.logout = function () {
        this.auth.solidSignOut();
    };
    ProfileComponent.prototype.addFriend = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.rdf.addFriend(this.addWebId);
                }
                catch (_b) {
                    console.log("The URI provided is not well-formed or does not point to a profile");
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ProfileComponent.prototype, "cardForm", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")],
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.registration .header-bar {\r\n  margin: 0.000em;\r\n  height: 2.750em;\r\n  width: calc(100% + 1.000em);\r\n  background-color: #3D6DEB;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.registration .header-bar p {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 0.875em;\r\n  letter-spacing: 0.063em;\r\n  line-height: 0.938em;\r\n}\r\n\r\n.registration .header-text {\r\n  margin-top: 5.750em;\r\n  width: 22.500em;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-size: 0.875em;\r\n  color: #666;\r\n}\r\n\r\n.registration .header-text a {\r\n  color: #666;\r\n  font-size: 0.750em;\r\n}\r\n\r\n.registration .provider-card-container {\r\n  margin-top: 1.750em;\r\n}\r\n\r\n.registration .provider-card {\r\n  height: 8.750em;\r\n  width: 21.875em;\r\n  border: 0.063em solid #DAE0E6;\r\n  border-radius: 0.125em;\r\n  background-color: #fff;\r\n  margin: 0.625em;\r\n  display: inline-block;\r\n  box-shadow: #DAE0E6 0.063em 0.063em 0.375em;\r\n}\r\n\r\n.registration .provider-card a {\r\n  text-decoration: none;\r\n}\r\n\r\n.registration .provider-card .provider-logo {\r\n  height: 2.750em;\r\n  width: 2.750em;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1.000em;\r\n}\r\n\r\n.registration .provider-card h2 {\r\n  color: #656E75;\r\n  font-size: 1.125em;\r\n  margin-top: -0.125em;\r\n  letter-spacing: 0.056em;\r\n  line-height: 1.500em;\r\n}\r\n\r\n.registration .provider-card p {\r\n  color: #656E75;\r\n  font-size: 0.750em;\r\n  line-height: 1.000em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\r\n  <!-- Header Bar -->\r\n  <div class=\"header-bar\">\r\n    <p>Select Solid Identity Provider</p>\r\n  </div>\r\n\r\n  <!-- Header Text -->\r\n  <div class=\"header-text\">\r\n    <p>\r\n      With a Solid Identity your personal data is stored securely in a POD. You control who has access to it.\r\n    </p>\r\n    <a href=\"https://solid.mit.edu\" target=\"_blank\">\r\n      Learn more about Solid IDs and PODs\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Provider cards -->\r\n  <div class=\"provider-card-container\">\r\n    <div class=\"provider-card\" *ngFor=\"let provider of availableProviders\">\r\n      <a href=\"{{ provider.loginUrl }}\">\r\n      <img [src]=\"provider.image\" class=\"provider-logo\">\r\n      <h2>{{ provider.name }}</h2>\r\n      <p>{{ provider.desc }}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.availableProviders = this.auth.getIdentityProviders();
        this.availableProviders = this.availableProviders.filter(function (idp) { return idp.providerLoginUrl !== null; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage(userName, message, webId, other) {
        if (other === void 0) { other = 'none'; }
        this.timeSent = new Date();
        this.userName = userName;
        this.message = message;
        this.webId = webId;
        this.other = other;
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/notification.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/notification.model.ts ***!
  \**********************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var Notification = /** @class */ (function () {
    function Notification(resourceUri, type, fromWebId) {
        this.resourceUri = resourceUri;
        this.type = type;
        this.fromWebId = fromWebId;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, fullName, webId) {
        this.username = username;
        this.fullName = fullName;
        this.webId = webId;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = localStorage.getItem('solid-auth-client') ? true : false;
        if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return isLoggedIn; /* this.auth.session.pipe(
          take(1),
          map(session => !!session),
          tap(loggedIn => {
            if (!loggedIn) {
              return this.router.navigate(['/']);
            }
          })
        );*/
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/chat-message.model */ "./src/app/models/chat-message.model.ts");
/* harmony import */ var _rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ChatService = /** @class */ (function () {
    function ChatService(rdf) {
        var _this = this;
        this.rdf = rdf;
        this.friends = new Array();
        this.messages = new Array();
        this.inboxDaemonTimer = 3000;
        this.loadUserData().then(function () {
            _this.loadFriends();
            _this.checkInbox().then(function () {
                _this.setOther(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]('yerayv3', 'Yeray', 'https://yerayv3.inrupt.net/profile/card#me'));
            });
            _this.startNotificationsDaemon();
        });
        // Temporary
        // this.setOther(new User('migarve55', 'Miguel Garnacho Velez', 'https://migarve55.solid.community/profile/card#me'));
    }
    ChatService.prototype.loadUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getSession()];
                    case 1:
                        _a.sent();
                        if (!this.rdf.session) {
                            return [2 /*return*/];
                        }
                        this.me = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](this.getUsernameFromWebID(this.rdf.session.webId), this.rdf.getName(this.rdf.session.webId), this.rdf.session.webId);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* DEPRECATED
    setupListener() {
      this.rdf.addListener(this.getCurrentDateChatUri(this.currentChannelUri), this.loadMessages);
    }
    */
    ChatService.prototype.getUser = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.me);
    };
    ChatService.prototype.getFriends = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.friends);
    };
    ChatService.prototype.setOther = function (other) {
        if (!this.rdf.session) {
            return;
        }
        if (this.other != null) {
            this.other.isCurrent = false;
        }
        other.isCurrent = true;
        console.log('Other is ' + other.username);
        if (this.other == null || this.other.username !== other.username) {
            this.other = other;
            this.reloadMessages();
        }
    };
    ChatService.prototype.sendMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var m, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        m = new _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"](this.me.username, msg, this.me.webId, this.other.webId);
                        _a = m;
                        _c = (_b = this.rdf).appendMessage;
                        return [4 /*yield*/, this.getCurrentChatUri(this.currentChannelUri)];
                    case 1: return [4 /*yield*/, _c.apply(_b, [_d.sent(), m])];
                    case 2:
                        _a.uri = _d.sent();
                        this.addMessage(m);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.prototype.deleteMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.rdf).deleteMessage;
                        return [4 /*yield*/, this.getCurrentChatUri(this.currentChannelUri)];
                    case 1:
                        _b.apply(_a, [_c.sent(), message]);
                        this.messages.splice(this.messages.indexOf(message), 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.prototype.getMessages = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.messages);
    };
    ChatService.prototype.loadFriends = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getSession()];
                    case 1:
                        _a.sent();
                        if (!this.rdf.session) {
                            return [2 /*return*/];
                        }
                        this.rdf.getFriends().then(function (res) { return res.map(function (e) { return e.value; }).forEach(function (webId) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        _b = (_a = this.friends).push;
                                        _c = _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].bind;
                                        _d = [void 0, this.getUsernameFromWebID(webId)];
                                        return [4 /*yield*/, this.rdf.getName(webId)];
                                    case 1:
                                        _b.apply(_a, [new (_c.apply(_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"], _d.concat([(_e.sent()).value, webId])))()]);
                                        this.setOther(this.friends[0]);
                                        return [2 /*return*/];
                                }
                            });
                        }); }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.prototype.reloadMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.messages.length = 0;
                this.checkInbox().then(function () { return _this.reloadChatData().then(function () { return _this.loadMessages(); }); });
                return [2 /*return*/];
            });
        });
    };
    ChatService.prototype.reloadChatData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Chat session data reloading...');
                        return [4 /*yield*/, this.rdf.getSession()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 8]);
                        _a = this;
                        return [4 /*yield*/, this.rdf.getChannelUri(this.me.webId, this.other.webId)];
                    case 3:
                        _a.currentChannelUri = _b.sent();
                        this.currentChatFileUri = this.getCurrentChatUri(this.currentChannelUri);
                        return [4 /*yield*/, this.rdf.createStructure(this.currentChatFileUri)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        error_1 = _b.sent();
                        console.log('Chat not initialised, initializing...');
                        this.currentChannelUri = this.getChannelUri();
                        this.currentChatFileUri = this.getCurrentChatUri(this.currentChannelUri);
                        return [4 /*yield*/, this.rdf.createStructure(this.currentChatFileUri)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.rdf.createNewChat(this.me.webId, this.other.webId, this.currentChannelUri)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        console.log("Channel URI [" + this.urlLogFilter(this.currentChannelUri) + "] FOUND");
                        console.log("Chat file URI [" + this.urlLogFilter(this.currentChatFileUri) + "] FOUND");
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.prototype.loadMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("Getting messages from file [" + this.urlLogFilter(this.currentChatFileUri) + "]" +
                    (" in channel [" + this.urlLogFilter(this.currentChannelUri) + "]"));
                this.rdf.getMessageUrisForFile(this.currentChatFileUri, this.currentChannelUri).then(function (res) {
                    res.forEach(function (el) { return __awaiter(_this, void 0, void 0, function () {
                        var maker, m, _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0: return [4 /*yield*/, this.rdf.getMessageMaker(el.value, this.currentChatFileUri)];
                                case 1:
                                    maker = _d.sent();
                                    _a = _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"].bind;
                                    _b = [void 0, this.getUsernameFromWebID(maker)];
                                    return [4 /*yield*/, this.rdf.getMessageContent(el.value, this.currentChatFileUri)];
                                case 2:
                                    m = new (_a.apply(_models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"], _b.concat([_d.sent(),
                                        maker])))();
                                    m.uri = el.value;
                                    _c = m;
                                    return [4 /*yield*/, this.rdf.getMessageDate(el.value, this.currentChatFileUri)];
                                case 3:
                                    _c.timeSent = _d.sent();
                                    this.addMessage(m);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    ChatService.prototype.addMessage = function (msg) {
        this.messages.push(msg);
    };
    /* UNUSED
    getTimeStamp(now: Date) {
      const date = now.getUTCFullYear() + '/' +
        (now.getUTCMonth() + 1) + '/' +
        now.getUTCDate();
      const time = now.getUTCHours() + ':' +
        now.getUTCMinutes() + ':' +
        now.getUTCSeconds();
  
      return (date + ' ' + time);
    }
    */
    ChatService.prototype.getCurrentChatUri = function (channelUri) {
        var now = new Date();
        return channelUri + '/' +
            now.getUTCFullYear() + '/' +
            ('0' + (now.getUTCMonth() + 1)).slice(-2) + '/' +
            ('0' + now.getUTCDate()).slice(-2) + '/' + 'chat.ttl';
    };
    ChatService.prototype.getUsernameFromWebID = function (webId) {
        var username = '';
        if (webId.includes('https://')) {
            username = webId.replace('https://', '');
        }
        else {
            username = webId.replace('http://', '');
        }
        return username.split('.')[0];
    };
    ChatService.prototype.getChannelUri = function () {
        return this.me.webId.replace('profile/card#me', 'public/' + this.getChannelCode(this.me, this.other));
    };
    ChatService.prototype.getChannelCode = function (me, other) {
        return me.username + '_' + other.username;
    };
    ChatService.prototype.urlLogFilter = function (url) {
        return url.replace('https://josecuriosoalternativo.inrupt.net', '').replace('https://josecurioso.solid.community', '');
    };
    ChatService.prototype.checkInbox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rdf.session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.rdf.checkInbox(this.me.webId, this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.prototype.startNotificationsDaemon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.rdf.session) {
                    return [2 /*return*/];
                }
                this.interval = setInterval(function () {
                    _this.checkInbox();
                }, this.inboxDaemonTimer); // Executes checkInbox every 5 seconds
                return [2 /*return*/];
            });
        });
    };
    ChatService.prototype.stopNotificationsDaemon = function () {
        clearInterval(this.interval);
    };
    ChatService.prototype.callbackForNotificationProcessing = function (notification) {
        return __awaiter(this, void 0, void 0, function () {
            var maker, m, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Notification callback executed:');
                        console.log(notification);
                        if (!(notification.type === 'NewMessage')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rdf.getMessageMaker(notification.fromWebId, this.currentChatFileUri)];
                    case 1:
                        maker = _d.sent();
                        _a = _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"].bind;
                        _b = [void 0, this.getUsernameFromWebID(maker)];
                        return [4 /*yield*/, this.rdf.getMessageContent(notification.fromWebId, this.currentChatFileUri)];
                    case 2:
                        m = new (_a.apply(_models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"], _b.concat([_d.sent(),
                            maker])))();
                        m.uri = notification.fromWebId;
                        _c = m;
                        return [4 /*yield*/, this.rdf.getMessageDate(notification.fromWebId, this.currentChatFileUri)];
                    case 3:
                        _c.timeSent = _d.sent();
                        this.addMessage(m);
                        _d.label = 4;
                    case 4:
                        if (!(notification.type === 'LongChat')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rdf.addChatToCard(this.me.webId, notification.resourceUri, notification.fromWebId)];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/rdf.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rdf.service.ts ***!
  \*****************************************/
/*! exports provided: RdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdfService", function() { return RdfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");
/* harmony import */ var solid_file_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-file-client */ "./node_modules/solid-file-client/dist/browser/solid-file-client.bundle.js");
/* harmony import */ var solid_file_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(solid_file_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
var LDP = $rdf.Namespace('http://www.w3.org/ns/ldp#');
var FLOW = $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#');
var SIOC = $rdf.Namespace('http://rdfs.org/sioc/ns#');
var MEE = $rdf.Namespace('http://www.w3.org/ns/pim/meeting#');
var TERMS = $rdf.Namespace('http://purl.org/dc/terms/');
var RDFSYN = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
var ICAL = $rdf.Namespace('http://www.w3.org/2002/12/cal/ical#');
var UI = $rdf.Namespace('http://www.w3.org/ns/ui#');
var DCEL = $rdf.Namespace('http://purl.org/dc/elements/1.1/');
var NONE = $rdf.Namespace('http://example.org/ns/none#');
var ACL = $rdf.Namespace('http://www.w3.org/ns/auth/acl#');
var PL = $rdf.Namespace('http://www.w3.org/ns/iana/media-types/text/plain#');
// Maintain log of checked notification
var alreadychecked = [];
/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
var RdfService = /** @class */ (function () {
    function RdfService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.store = $rdf.graph();
        /**
         * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
         * store object.
         * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
         * as your query makes its way across the web.
         * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
         */
        this.fetcher = $rdf.Fetcher;
        /**
         * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
         * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
         * upstream and downstream changes, and signaling any conflict between them.
         * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
         */
        this.updateManager = $rdf.UpdateManager;
        /**
         * Fetches the session from Solid, and store results in localStorage
         */
        this.getSession = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, solid.auth.currentSession(localStorage)];
                    case 1:
                        _a.session = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Gets a node that matches the specified pattern using the VCARD onthology
         *
         * any() can take a subject and a predicate to find Any one person identified by the webId
         * that matches against the node/predicated
         *
         * @param {string} node VCARD predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         * @see https://github.com/solid/solid-tutorial-rdflib.js
         */
        this.getValueFromVcard = function (node, webId) {
            return _this.getValueFromNamespace(node, VCARD, webId);
        };
        /**
         * Gets a node that matches the specified pattern using the FOAF onthology
         * @param {string} node FOAF predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         */
        this.getValueFromFoaf = function (node, webId) {
            return _this.getValueFromNamespace(node, FOAF, webId);
        };
        /**
         * Gets a node that matches the specified pattern using the LDP onthology
         * @param {string} node LDP predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         */
        this.getValueFromLdp = function (node, webId) {
            return _this.getValueFromNamespace(node, LDP, webId);
        };
        this.transformDataForm = function (form, me, doc) {
            var insertions = [];
            var deletions = [];
            var fields = Object.keys(form.value);
            var oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};
            // We need to split out into three code paths here:
            // 1. There is an old value and a new value. This is the update path
            // 2. There is no old value and a new value. This is the insert path
            // 3. There is an old value and no new value. Ths is the delete path
            // These are separate codepaths because the system needs to know what to do in each case
            fields.map(function (field) {
                var predicate = VCARD(_this.getFieldName(field));
                var subject = _this.getUriForField(field, me);
                var why = doc;
                var fieldValue = _this.getFieldValue(form, field);
                var oldFieldValue = _this.getOldFieldValue(field, oldProfileData);
                // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
                if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
                    _this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
                }
                else {
                    // Add a value to be updated
                    if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                        // Add a value to be deleted
                    }
                    else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                        // Add a value to be inserted
                    }
                    else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                }
            });
            return {
                insertions: insertions,
                deletions: deletions
            };
        };
        this.updateProfile = function (form) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var me, doc, data;
            return __generator(this, function (_a) {
                me = $rdf.sym(this.session.webId);
                doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
                data = this.transformDataForm(form, me, doc);
                // Update existing values
                if (data.insertions.length > 0 || data.deletions.length > 0) {
                    this.updateManager.update(data.deletions, data.insertions, function (response, success, message) {
                        if (success) {
                            _this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
                            form.form.markAsPristine();
                            form.form.markAsTouched();
                        }
                        else {
                            _this.toastr.error('Message: ' + message, 'An error has occurred');
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.getAddress = function () {
            var linkedUri = _this.getValueFromVcard('hasAddress');
            if (linkedUri) {
                return {
                    locality: _this.getValueFromVcard('locality', linkedUri),
                    country_name: _this.getValueFromVcard('country-name', linkedUri),
                    region: _this.getValueFromVcard('region', linkedUri),
                    street: _this.getValueFromVcard('street-address', linkedUri),
                };
            }
            return {};
        };
        // Function to get email. This returns only the first email, which is temporary
        this.getEmail = function () {
            var linkedUri = _this.getValueFromVcard('hasEmail');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
            }
            return '';
        };
        // Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
        this.getPhone = function () {
            var linkedUri = _this.getValueFromVcard('hasTelephone');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
            }
        };
        this.getProfile = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.session) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.fetcher.load(this.session.webId)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                fn: this.getValueFromVcard('fn'),
                                company: this.getValueFromVcard('organization-name'),
                                phone: this.getPhone(),
                                role: this.getValueFromVcard('role'),
                                image: this.getValueFromVcard('hasPhoto'),
                                address: this.getAddress(),
                                email: this.getEmail(),
                            }];
                    case 4:
                        error_1 = _a.sent();
                        console.log("Error fetching data: " + error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        var fetcherOptions = {};
        this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
        this.updateManager = new $rdf.UpdateManager(this.store);
        this.getSession();
    }
    RdfService.prototype.addNewLinkedField = function (field, insertions, predicate, fieldValue, why, me) {
        // Generate a new ID. This id can be anything but needs to be unique.
        var newId = field + ':' + Date.now();
        // Get a new subject, using the new ID
        var newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);
        // Set new predicate, based on email or phone fields
        var newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));
        // Add new phone or email to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));
        // Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        // Todo: Make this dynamic
        var type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));
        // Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
    };
    RdfService.prototype.getUriForField = function (field, me) {
        var uriString;
        var uri;
        switch (field) {
            case 'phone':
                uriString = this.getValueFromVcard('hasTelephone');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            case 'email':
                uriString = this.getValueFromVcard('hasEmail');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            default:
                uri = me;
                break;
        }
        return uri;
    };
    /**
     * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
     * @param {NgForm} form
     * @param {string} field The name of the field that is going to be extracted from the form
     * @return {RdfNamedNode}
     */
    RdfService.prototype.getFieldValue = function (form, field) {
        var fieldValue;
        if (!form.value[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                fieldValue = $rdf.sym('tel:+' + form.value[field]);
                break;
            case 'email':
                fieldValue = $rdf.sym('mailto:' + form.value[field]);
                break;
            default:
                fieldValue = form.value[field];
                break;
        }
        return fieldValue;
    };
    RdfService.prototype.getOldFieldValue = function (field, oldProfile) {
        var oldValue;
        if (!oldProfile || !oldProfile[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                oldValue = $rdf.sym('tel:+' + oldProfile[field]);
                break;
            case 'email':
                oldValue = $rdf.sym('mailto:' + oldProfile[field]);
                break;
            default:
                oldValue = oldProfile[field];
                break;
        }
        return oldValue;
    };
    RdfService.prototype.getFieldName = function (field) {
        switch (field) {
            case 'company':
                return 'organization-name';
            case 'phone':
            case 'email':
                return 'value';
            default:
                return field;
        }
    };
    /**
     * Gets any resource that matches the node, using the provided Namespace
     * @param {string} node The name of the predicate to be applied using the provided Namespace
     * @param {$rdf.namespace} namespace The RDF Namespace
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     */
    RdfService.prototype.getValueFromNamespace = function (node, namespace, webId) {
        var store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
        if (store) {
            return store.value;
        }
        return '';
    };
    //  //  //  //  //  //  //   //   //  //
    //  //  //  //  //  //  //   //   //  //
    // NEW METHODS ADDED BELOW THIS POINT //
    //  //  //  //  //  //  //   //   //  //
    //  //  //  //  //  //  //   //   //  //
    /**
    * Returns an array of NamedNode objects matching the term in a uri
    * @param {any} term term to look for in the document
    * @param {string} uri uri where you want to look (defaults to your webId)
    * @return {Promise<Array<NamedNode>>} A promise cntaining the array of NamedNode objects
    */
    RdfService.prototype.getArray = function (term, uri) {
        if (uri === void 0) { uri = this.session.webId; }
        return __awaiter(this, void 0, void 0, function () {
            var d, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        d = this.store.sym(uri);
                        return [4 /*yield*/, this.fetcher.load(d.doc())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.store.each(d, term)];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error fetching data: " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Returns a NamedNode object matching the term in a uri
    * @param {any} term term to look for in the document
    * @param {string} uri uri where you want to look (defaults to your webId)
    * @return {Promise<NamedNode>} A promise cntaining the NamedNode object
    */
    RdfService.prototype.getSingle = function (term, uri) {
        if (uri === void 0) { uri = this.session.webId; }
        return __awaiter(this, void 0, void 0, function () {
            var d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = this.store.sym(uri);
                        return [4 /*yield*/, this.fetcher.load(d.doc())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.store.any(d, term)];
                }
            });
        });
    };
    /**
    * Returns an array of NamedNode objects of your friends
    * @param {string} uri webId where you want to look (defaults to your webId)
    * @return {Promise<Array<NamedNode>>} A promise cntaining the array of NamedNode objects
    */
    RdfService.prototype.getFriends = function (uri) {
        if (uri === void 0) { uri = this.session.webId; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getArray(FOAF('knows'), uri)];
            });
        });
    };
    /**
    * Returns a NamedNode object containing the name of a webId
    * @param {string} uri webId where you want to look (defaults to your webId)
    * @return {Promise<Array<NamedNode>>} A promise cntaining the NamedNode object
    */
    RdfService.prototype.getName = function (uri) {
        if (uri === void 0) { uri = this.session.webId; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getSingle(VCARD('fn'), uri)];
            });
        });
    };
    /**
    * Returns a NamedNode object containing the url of the inbox of a webId
    * @param {string} webId webId where you want to look (defaults to your webId)
    * @return {Promise<Array<NamedNode>>} A promise cntaining the NamedNode object
    */
    RdfService.prototype.getInboxUrl = function (webId) {
        if (webId === void 0) { webId = this.session.webId; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getSingle(LDP('inbox'), webId)];
            });
        });
    };
    /**
    * Returns an array of NamedNode objects with the contents of the inbox
    * @param {string} webId webId where you want to look (defaults to your webId)
    * @return {Promise<Array<NamedNode>>} A promise cntaining the array of NamedNode objects
    */
    RdfService.prototype.getInboxContents = function (webId) {
        if (webId === void 0) { webId = this.session.webId; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.getArray;
                        _b = [LDP('contains')];
                        return [4 /*yield*/, this.getInboxUrl(webId)];
                    case 1: return [2 /*return*/, _a.apply(this, _b.concat([(_c.sent()).value]))];
                }
            });
        });
    };
    /**
     * Gets all the message uris for a chat.ttl file
     * @param {string} year Year
     * @param {string} month Month
     * @param {string} day Day
     * @param {string} chatUri The uri of the root folder for the chat
     * @return {string} The uri of the chat.ttl file
     */
    RdfService.prototype.getChatFileUriForDate = function (year, month, day, chatUri) {
        return chatUri + '/' + year + '/' + month + '/' + day + '/' + 'chat.ttl';
    };
    /**
     * Gets all the message uris for a chat.ttl file
     * @param {string} chatFileUri The uri of the chat.ttl file
     * @param {string} chatUri The uri of the root folder for the chat
     * @return {Promise<Array<NamedNode>>} NamedNode objects containing the uris of each message
     */
    RdfService.prototype.getMessageUrisForFile = function (chatFileUri, chatUri) {
        return __awaiter(this, void 0, void 0, function () {
            var d, indexUri, indexd, messagesIdsList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = this.store.sym(chatFileUri);
                        return [4 /*yield*/, this.fetcher.load(d.doc())];
                    case 1:
                        _a.sent();
                        indexUri = chatUri + '/index.ttl#this';
                        indexd = this.store.sym(indexUri);
                        return [4 /*yield*/, this.store.match(indexd, FLOW('message'), null, d.doc())];
                    case 2:
                        messagesIdsList = (_a.sent()).map(function (e) { return e.object; });
                        return [2 /*return*/, messagesIdsList];
                }
            });
        });
    };
    /**
    * Gets the maker of a given message
    * @param {string} msgUri The uri of the message
    * @param {string} chatFileUri The uri of the chat.ttl file
    * @return {string} webId of the maker
    */
    RdfService.prototype.getMessageMaker = function (msgUri, chatFileUri) {
        return __awaiter(this, void 0, void 0, function () {
            var subject, chatFile, msgMaker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subject = this.store.sym(msgUri);
                        chatFile = this.store.sym(chatFileUri);
                        return [4 /*yield*/, this.fetcher.load(chatFile.doc(), { force: true, clearPreviousData: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.store.match(subject, FOAF('maker'), null, chatFile.doc())];
                    case 2:
                        msgMaker = _a.sent();
                        return [2 /*return*/, msgMaker[0].object.value];
                }
            });
        });
    };
    /**
    * Gets the date of a given message
    * @param {string} msgUri The uri of the message
    * @param {string} chatFileUri The uri of the chat.ttl file
    * @return {Date} date the message was sent
    */
    RdfService.prototype.getMessageDate = function (msgUri, chatFileUri) {
        return __awaiter(this, void 0, void 0, function () {
            var subject, chatFile, msgDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subject = this.store.sym(msgUri);
                        chatFile = this.store.sym(chatFileUri);
                        return [4 /*yield*/, this.fetcher.load(chatFile.doc())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.store.match(subject, TERMS('created'), null, chatFile.doc())];
                    case 2:
                        msgDate = _a.sent();
                        return [2 /*return*/, new Date(msgDate[0].object.value)];
                }
            });
        });
    };
    /**
    * Gets the content of a given message.
    * @param {string} msgUri The uri of the message
    * @param {string} chatFileUri The uri of the chat.ttl file
    * @return {string} content of the messahge
    */
    RdfService.prototype.getMessageContent = function (msgUri, chatFileUri) {
        return __awaiter(this, void 0, void 0, function () {
            var subject, chatFile, msgContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subject = this.store.sym(msgUri);
                        chatFile = this.store.sym(chatFileUri);
                        return [4 /*yield*/, this.fetcher.load(chatFile.doc())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.store.match(subject, SIOC('content'), null, chatFile.doc())];
                    case 2:
                        msgContent = _a.sent();
                        return [2 /*return*/, msgContent[0].object.value];
                }
            });
        });
    };
    /**
    * Returns the uri of the chat channel used for a conversation between two webids
    * @param {string} myWebId My webId
    * @param {string} otherWebId The webId of the other person
    * @return {Promise<string>} Promise resolving to the uri of the chanel
    */
    RdfService.prototype.getChannelUri = function (myWebId, otherWebId) {
        return __awaiter(this, void 0, void 0, function () {
            var d, other, coinc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = this.store.sym(myWebId.replace('#me', ''));
                        return [4 /*yield*/, this.fetcher.load(d.doc())];
                    case 1:
                        _a.sent();
                        other = this.store.sym(otherWebId);
                        return [4 /*yield*/, this.store.match(null, MEE('LongChat'), other, d.doc())];
                    case 2:
                        coinc = _a.sent();
                        return [2 /*return*/, coinc[0].subject.value];
                }
            });
        });
    };
    /**
    * Adds the new message to the given chat file
    * @param {string} chatFileUri uri of the chat file where we want to append the message
    * @param {ChatMessage} message Chat message we want to append
    * @return {Promise<string>} Promise resolving to the uri of the message
    */
    RdfService.prototype.appendMessage = function (chatFileUri, message) {
        return __awaiter(this, void 0, void 0, function () {
            var msgUri, indexUri, msgUriSym, indexUriSym, ins, cFile, chatFolder;
            return __generator(this, function (_a) {
                msgUri = this.buildMsgUri(chatFileUri, message.timeSent);
                indexUri = chatFileUri.split('/').slice(0, 5).join('/') + '/index.ttl#this';
                msgUriSym = this.store.sym(msgUri);
                indexUriSym = this.store.sym(indexUri);
                ins = [];
                cFile = this.store.sym(chatFileUri);
                this.fetcher.load(cFile.doc());
                ins.push($rdf.st(msgUriSym, TERMS('created'), message.timeSent, cFile.doc()));
                ins.push($rdf.st(msgUriSym, SIOC('content'), message.message, cFile.doc()));
                ins.push($rdf.st(msgUriSym, FOAF('maker'), this.store.sym(message.webId), cFile.doc()));
                ins.push($rdf.st(indexUriSym, FLOW('message'), msgUriSym, cFile.doc()));
                this.updateManager.update([], ins, function (uri, ok, msg, response) {
                    if (ok) {
                        console.log('Message sent');
                    }
                    else {
                        console.log(msg, response);
                    }
                });
                chatFolder = chatFileUri.split('/').slice(0, 5).join('/') + '/';
                this.sendNotifNewMessage(message.other, chatFolder, msgUri);
                return [2 /*return*/, msgUri];
            });
        });
    };
    /**
    * Removes the specified message from the given chat file
    * @param {string} chatFileUri uri of the chat file from which we want to delete the message
    * @param {ChatMessage} message Chat message we want to delete
    * @return {Promise}
    */
    RdfService.prototype.deleteMessage = function (chatFileUri, message) {
        return __awaiter(this, void 0, void 0, function () {
            var msgUri, indexUri, msgUriSym, indexUriSym, cFile, dels;
            return __generator(this, function (_a) {
                msgUri = message.uri;
                indexUri = chatFileUri.split('/').slice(0, 5).join('/') + '/index.ttl#this';
                msgUriSym = this.store.sym(msgUri);
                indexUriSym = this.store.sym(indexUri);
                cFile = this.store.sym(chatFileUri);
                this.fetcher.load(cFile.doc());
                dels = this.store.statementsMatching(msgUriSym, null, null, cFile.doc());
                this.store.statementsMatching(indexUriSym, null, msgUriSym, cFile.doc()).forEach(function (element) {
                    dels.push(element);
                });
                this.updateManager.update(dels, [], function (uri, ok, msg, response) {
                    if (ok) {
                        console.log('Message deleted: ' + message.message + ' (' + message.timeSent + ')');
                    }
                    else {
                        console.log(msg, response);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Builds the URI of the message from the URI of its chat and the sent date
     * @param {string} chatFileUri uri of the chat to which the message belongs
     * @param {Date} timeSent Date in which the message was sent
     * @return {string} the uri of the message
     */
    RdfService.prototype.buildMsgUri = function (chatFileUri, timeSent) {
        var msgUri = chatFileUri + '#Msg' + timeSent.getTime();
        return msgUri.substring(0, msgUri.length - 3);
    };
    /**
    * Adds a listener to a file for when it changes
    * @param {string} chatFileUri the uri of the resource we want to listen to
    * @param {function} callback function to call onUpdate
    */
    RdfService.prototype.addListener = function (chatFileUri, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var cFile;
            return __generator(this, function (_a) {
                cFile = this.store.sym(chatFileUri);
                this.updateManager.addDownstreamChangeListener(cFile.doc(), callback);
                return [2 /*return*/];
            });
        });
    };
    /**
    * Adds a user to your friends list
    * @param {string} addWebId the webId of the friend you want to add
    */
    RdfService.prototype.addFriend = function (addWebId) {
        return __awaiter(this, void 0, void 0, function () {
            var card, me, newFriend, checks, ins;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        card = this.store.sym(this.session.webId.replace('#me', ''));
                        me = this.store.sym(this.session.webId);
                        newFriend = this.store.sym(addWebId);
                        return [4 /*yield*/, this.fetcher.load(newFriend.doc())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.store.match(null, null, FOAF('PersonalProfileDocument'), newFriend.doc())];
                    case 3:
                        checks = _a.sent();
                        if (checks.length > 0 && addWebId !== '') {
                            try {
                                ins = $rdf.st(me, FOAF('knows'), newFriend, card.doc());
                                this.updateManager.update([], ins, function (uri, ok, message, response) {
                                    if (ok) {
                                        console.log('Friend added');
                                    }
                                    else {
                                        console.log(message, response);
                                    }
                                });
                            }
                            catch (_b) {
                                throw new Error('Not a valid profile URI');
                            }
                        }
                        else {
                            throw new Error('Not a valid profile URI');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Creates a new chat folder and its index, also adds the info on the user's card
    * @param {string} myWebId the webId of the user creating the chat
    * @param {string} otherWebId the other person webId
    * @param {string} chatFolder folder to contain the chat data
    */
    RdfService.prototype.createNewChat = function (myWebId, otherWebId, chatFolder) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var indexFileUri, pId, pIdUriSym, thisUriSym, sPrefUriSym, meUriSym, otherUiSym, currDate, ins, indexFile, myCardFile, chatFolderFile, cardNote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indexFileUri = chatFolder + '/index.ttl';
                        pId = 'id' + (+new Date);
                        pIdUriSym = this.store.sym(indexFileUri + '#pId' + pId);
                        thisUriSym = this.store.sym(indexFileUri + '#this');
                        sPrefUriSym = this.store.sym(indexFileUri + '#SharedPreferences');
                        meUriSym = this.store.sym(myWebId);
                        otherUiSym = this.store.sym(otherWebId);
                        currDate = new Date();
                        ins = [];
                        indexFile = this.store.sym(indexFileUri);
                        myCardFile = this.store.sym(myWebId.replace('#me', ''));
                        chatFolderFile = this.store.sym(chatFolder);
                        this.fetcher.load(myCardFile.doc());
                        ins.push($rdf.st(pIdUriSym, ICAL('dtstart'), currDate, indexFile.doc()));
                        ins.push($rdf.st(pIdUriSym, FLOW('participant'), meUriSym, indexFile.doc()));
                        ins.push($rdf.st(pIdUriSym, FLOW('participant'), otherUiSym, indexFile.doc()));
                        ins.push($rdf.st(pIdUriSym, UI('backgroundColor'), '#f0d3e3', indexFile.doc()));
                        ins.push($rdf.st(thisUriSym, RDFSYN('type'), MEE('LongChat'), indexFile.doc()));
                        ins.push($rdf.st(thisUriSym, DCEL('author'), meUriSym, indexFile.doc()));
                        ins.push($rdf.st(thisUriSym, DCEL('created'), currDate, indexFile.doc()));
                        ins.push($rdf.st(thisUriSym, DCEL('title'), 'Chat Channel', indexFile.doc()));
                        ins.push($rdf.st(thisUriSym, FLOW('participation'), pIdUriSym, indexFile.doc()));
                        ins.push($rdf.st(thisUriSym, UI('sharedPreferences'), sPrefUriSym, indexFile.doc()));
                        return [4 /*yield*/, this.updateManager.put(indexFile.doc(), ins, 'text/turtle', function (uri, ok, message, response) {
                                if (ok) {
                                    console.log("File [" + _this.urlLogFilter(uri) + "] PUT with message [" + message + "].");
                                }
                                else {
                                    console.error("File [" + _this.urlLogFilter(uri) + "] failed PUT with message [" + message + "].");
                                }
                            })];
                    case 1:
                        _a.sent();
                        cardNote = $rdf.st(chatFolderFile, MEE('LongChat'), otherUiSym, myCardFile.doc());
                        return [4 /*yield*/, this.updateManager.update([], cardNote, function (uri, ok, message, response) {
                                if (ok) {
                                    console.log("Reference set on card [" + _this.urlLogFilter(uri) + "] UPDATED with message [" + message + "].");
                                }
                                else {
                                    console.log("Reference set on card [" + _this.urlLogFilter(uri) + "] failed UPDATE with message [" + message + "].");
                                }
                            })];
                    case 2:
                        _a.sent();
                        this.setPermissions(chatFolder, otherWebId, myWebId);
                        this.sendNotifNewConv(myWebId, chatFolder, otherWebId); // Commented to avoid spamming the other person while testing
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Creates the chat file only if it doesn't exist
    * @param {string} uri the uri of the chat file
    */
    RdfService.prototype.createChatFileForDay = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var chatDayFile, chatFolder, chatDayFolder, matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatDayFile = this.store.sym(uri);
                        chatFolder = uri.replace('/chat.ttl', '');
                        chatDayFolder = this.store.sym(chatFolder);
                        return [4 /*yield*/, this.fetcher.load(chatDayFolder.doc())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.store.match(chatDayFolder, LDP('contains'), null, chatDayFolder.doc())];
                    case 2:
                        matches = _a.sent();
                        if (!(matches.length === 0)) return [3 /*break*/, 4];
                        console.log("    Chat file [" + this.urlLogFilter(uri) + "] in folder [" + this.urlLogFilter(chatFolder) + "] NOT FOUND, creating it...");
                        return [4 /*yield*/, this.updateManager.put(chatDayFile.doc(), '', 'text/turtle', function (o, s, c) { })];
                    case 3:
                        _a.sent();
                        console.log("    Chat file [" + this.urlLogFilter(uri) + "] in folder [" + this.urlLogFilter(chatFolder) + "] CREATED");
                        return [3 /*break*/, 5];
                    case 4:
                        console.log("    Chat file [" + this.urlLogFilter(uri) + "] in folder [" + this.urlLogFilter(chatFolder) + "] FOUND, skipping creation");
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Creates the folder structure
    * @param {string} uri the uri of the chat file that needs the structure
    */
    RdfService.prototype.createStructure = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var splitted, i, newUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Creating folder structure');
                        splitted = uri.split('/');
                        i = 4;
                        _a.label = 1;
                    case 1:
                        if (!(i > 0)) return [3 /*break*/, 4];
                        newUri = splitted.slice(0, splitted.length - i).join('/');
                        console.log("    Creating folder [" + this.urlLogFilter(newUri) + "]");
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["createFolder"](newUri)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i--;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('Folder structure done, proceeding with chat file.');
                        return [4 /*yield*/, this.createChatFileForDay(uri)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Formats the uris for the console output, removing unnecesary parts
    * @param {string} uri uri that needs formatting
    */
    RdfService.prototype.urlLogFilter = function (url) {
        return url.replace('https://josecuriosoalternativo.inrupt.net', '').replace('https://josecurioso.solid.community', '');
    };
    /**
     * Sends a notification to the webId's inbox informing of the newly created chat
     * @param {string} webId webId of the other person
     * @param {string} chatFolderUri URI of the folder containing the chat
     */
    RdfService.prototype.sendNotifNewConv = function (webId, chatFolderUri, otherWebId) {
        return __awaiter(this, void 0, void 0, function () {
            var inboxUrl, notiFile, chatFolderFile, meWebIdFile, ins;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInboxUrl(otherWebId)];
                    case 1:
                        inboxUrl = (_a.sent()).value;
                        notiFile = this.store.sym(inboxUrl + 'dechatnotifications.ttl');
                        chatFolderFile = this.store.sym(chatFolderUri);
                        meWebIdFile = this.store.sym(webId);
                        ins = [];
                        ins.push($rdf.st(meWebIdFile, MEE('LongChat'), chatFolderFile, notiFile.doc()));
                        this.pushNotification(inboxUrl, ins);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sends a notification to the webId's inbox about a new message being received
     * @param {string} webId webId of the other person
     * @param {string} chatFolderUri URI of the folder containing the chat
     * @param {string} messageUri URI of the message the wbId is being notified of
     */
    RdfService.prototype.sendNotifNewMessage = function (webId, chatFolderUri, messageUri) {
        return __awaiter(this, void 0, void 0, function () {
            var inboxUrl, notiFile, messageUriFile, chatFolderFile, ins;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInboxUrl(webId)];
                    case 1:
                        inboxUrl = (_a.sent()).value;
                        notiFile = this.store.sym(inboxUrl + 'dechatnotifications.ttl');
                        messageUriFile = this.store.sym(messageUri);
                        chatFolderFile = this.store.sym(chatFolderUri);
                        ins = [];
                        ins.push($rdf.st(chatFolderFile, NONE('NewMessage'), messageUriFile, notiFile.doc()));
                        this.pushNotification(inboxUrl, ins);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pushes a given notification to the given user with the given content
     * @param {inboxUrl} chatUri Uri of the inbox of the recipient
     * @param {Array<any>} ins The inserts to be made
     */
    RdfService.prototype.pushNotification = function (inboxUrl, ins) {
        return __awaiter(this, void 0, void 0, function () {
            var notiUri, notiFile, inboxFolder;
            return __generator(this, function (_a) {
                notiUri = inboxUrl + 'dechatnotifications.ttl';
                notiFile = this.store.sym(notiUri);
                inboxFolder = this.store.sym(inboxUrl);
                solid.auth.fetch(inboxUrl, {
                    method: 'POST',
                    body: ins[0]
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Adds the edit permissions on a given URI for a given WebId
     * @param {string} resourceUri the URI of the resource we want to grant permissions of
     * @param {string} webId the user that is getting access rights
     */
    RdfService.prototype.setPermissions = function (resourceUri, webId, ownerWebId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var aclUri, crwUri, rUri, rwUri, aclFile, crwFile, rFile, rwFile, file, webIdFile, ownerWebIdFile, ins, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aclUri = resourceUri + '/.acl';
                        crwUri = aclUri + '#ControlReadWrite';
                        rUri = aclUri + '#Read';
                        rwUri = aclUri + '#ReadWrite';
                        aclFile = this.store.sym(aclUri);
                        crwFile = this.store.sym(crwUri);
                        rFile = this.store.sym(rUri);
                        rwFile = this.store.sym(rwUri);
                        file = this.store.sym(resourceUri + '/');
                        webIdFile = this.store.sym(webId);
                        ownerWebIdFile = this.store.sym(ownerWebId);
                        ins = [];
                        this.store.add(crwFile, RDFSYN('type'), ACL('Authorization'), aclFile.doc());
                        this.store.add(crwFile, ACL('agent'), ownerWebIdFile, aclFile.doc());
                        this.store.add(crwFile, ACL('accessTo'), file, aclFile.doc());
                        this.store.add(crwFile, ACL('defaultForNew'), file, aclFile.doc());
                        this.store.add(crwFile, ACL('mode'), ACL('Control'), aclFile.doc());
                        this.store.add(crwFile, ACL('mode'), ACL('Read'), aclFile.doc());
                        this.store.add(crwFile, ACL('mode'), ACL('Write'), aclFile.doc());
                        this.store.add(rFile, RDFSYN('type'), ACL('Authorization'), aclFile.doc());
                        this.store.add(rFile, ACL('agentClass'), FOAF('Agent'), aclFile.doc());
                        this.store.add(rFile, ACL('accessTo'), file, aclFile.doc());
                        this.store.add(rFile, ACL('defaultForNew'), file, aclFile.doc());
                        this.store.add(rFile, ACL('mode'), ACL('Read'), aclFile.doc());
                        this.store.add(rwFile, RDFSYN('type'), ACL('Authorization'), aclFile.doc());
                        this.store.add(rwFile, ACL('agent'), webIdFile, aclFile.doc());
                        this.store.add(rwFile, ACL('accessTo'), file, aclFile.doc());
                        this.store.add(rwFile, ACL('defaultForNew'), file, aclFile.doc());
                        this.store.add(rwFile, ACL('mode'), ACL('Read'), aclFile.doc());
                        this.store.add(rwFile, ACL('mode'), ACL('Write'), aclFile.doc());
                        contents = $rdf.serialize(aclFile.doc(), this.store, aclUri, 'text/turtle');
                        return [4 /*yield*/, this.updateManager.put(aclFile.doc(), contents, 'text/turtle', function (uri, ok, message, response) {
                                if (ok) {
                                    console.log("File [" + _this.urlLogFilter(uri) + "] PUT with message [" + message + "].");
                                }
                                else {
                                    console.error("File [" + _this.urlLogFilter(uri) + "] failed PUT with message [" + message + "].");
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Checks the inbox for notifications, processes them and returns them to the chat service using the given callback
     * @param {string} webId The webIf of the owner of the inbox of intrest (usually the logged in user)
     * @param {function} callback The callback function in chatservice that we have to call whenever we find and interesting notification
     */
    RdfService.prototype.checkInbox = function (webId, caller) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var inboxUri, inboxUriSym, processed, contentUris;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Checking inbox...');
                        console.log(webId);
                        return [4 /*yield*/, this.getInboxUrl(webId)];
                    case 1:
                        inboxUri = _a.sent();
                        inboxUriSym = this.store.sym(inboxUri);
                        processed = [];
                        return [4 /*yield*/, this.fetcher.load(inboxUriSym.doc(), { force: true, clearPreviousData: true })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.store.match(null, RDFSYN('type'), PL('Resource'), inboxUriSym.doc())];
                    case 3:
                        contentUris = (_a.sent()).map(function (e) { return e.subject; });
                        console.log("    Elements found: " + contentUris.length);
                        return [4 /*yield*/, contentUris.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(alreadychecked.indexOf(element) === -1)) return [3 /*break*/, 2];
                                            console.log("    Checking: " + element);
                                            return [4 /*yield*/, this.processNotification(element).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(result.type !== 'none')) return [3 /*break*/, 2];
                                                                processed.push(result);
                                                                this.deleteNotification(element);
                                                                return [4 /*yield*/, caller.callbackForNotificationProcessing(result)];
                                                            case 1:
                                                                _a.sent();
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                alreadychecked.push(element); // Only save on checked the ones we have not deleted.
                                                                _a.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 4:
                        _a.sent();
                        console.log("    All " + contentUris.length + " elements checked");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This method parses the text and processes the contents returning a Notification object containing the information
     * @param {string} notificationUri URI of the notification we want to process
     * @return {Notification} The Notification extracted from the URI
     */
    RdfService.prototype.processNotification = function (notificationUri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var notification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("    Processing: " + notificationUri);
                        return [4 /*yield*/, this.store.fetcher.webOperation('GET', notificationUri).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var body, doc, content, error_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(res.status === 404)) return [3 /*break*/, 1];
                                            return [3 /*break*/, 9];
                                        case 1:
                                            body = res.responseText;
                                            doc = $rdf.sym(notificationUri);
                                            _a.label = 2;
                                        case 2:
                                            _a.trys.push([2, 8, , 9]);
                                            return [4 /*yield*/, $rdf.parse(body, this.store, doc.uri, 'text/turtle')];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, this.store.match(null, NONE('NewMessage'), null, doc.doc())];
                                        case 4:
                                            content = _a.sent();
                                            if (!(content.length > 0)) return [3 /*break*/, 5];
                                            notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_1__["Notification"](content[0].subject.value, 'NewMessage', content[0].object.value);
                                            return [3 /*break*/, 7];
                                        case 5: return [4 /*yield*/, this.store.match(null, MEE('LongChat'), null, doc.doc())];
                                        case 6:
                                            content = _a.sent();
                                            if (content.length > 0) {
                                                notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_1__["Notification"](content[0].subject.value, 'LongChat', content[0].object.value);
                                            }
                                            else {
                                                notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_1__["Notification"]('error', 'none', 'error');
                                            }
                                            _a.label = 7;
                                        case 7: return [3 /*break*/, 9];
                                        case 8:
                                            error_3 = _a.sent();
                                            notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_1__["Notification"]('error', 'none', 'error');
                                            console.log("    Unable to parse: " + notificationUri);
                                            return [3 /*break*/, 9];
                                        case 9: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, notification];
                }
            });
        });
    };
    /**
     * This method deletes a notification once it has been consumed.
     * @param {string} notificationUri URI of the notification we want to delete.
     */
    RdfService.prototype.deleteNotification = function (notificationUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("    Deleting: " + notificationUri);
                        return [4 /*yield*/, this.store.fetcher.webOperation('DELETE', notificationUri)
                                .then(function (e) {
                                console.log("    Deleted: " + notificationUri);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RdfService.prototype.addChatToCard = function (myWebId, otherWebId, chatFolder) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myCardFile, chatFolderFile, otherWebIdFile, cardNote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myCardFile = this.store.sym(myWebId.replace('#me', '#'));
                        chatFolderFile = this.store.sym(chatFolder);
                        otherWebIdFile = this.store.sym(otherWebId);
                        return [4 /*yield*/, this.fetcher.load(myCardFile.doc(), { force: true, clearPreviousData: true })];
                    case 1:
                        _a.sent();
                        cardNote = $rdf.st(chatFolderFile, MEE('LongChat'), otherWebIdFile, myCardFile.doc());
                        return [4 /*yield*/, this.updateManager.update([], cardNote, function (uri, ok, message, response) {
                                if (ok) {
                                    console.log("Reference set on card [" + _this.urlLogFilter(uri) + "] UPDATED with message [" + message + "].");
                                }
                                else {
                                    console.log("Reference set on card [" + _this.urlLogFilter(uri) + "] failed UPDATE with message [" + message + "].");
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RdfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RdfService);
    return RdfService;
}());



/***/ }),

/***/ "./src/app/services/solid.auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/solid.auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.fechInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/sparql-update',
            },
            body: '',
        };
        /*
         * This will check if current session is active to avoid security problems
        */
        this.isSessionActive = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.session = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(solid.auth.currentSession());
                return [2 /*return*/];
            });
        }); };
        /**
         * Alternative login-popup function. This will open a popup that will allow you to choose an identity provider
         * without leaving the current page
         * This is recommended if you don't want to leave the current workflow.
         */
        this.solidLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, solid.auth.popupLogin({ popupUri: './login-popup' })];
                    case 1:
                        _a.sent();
                        // Check if session is valid to avoid redirect issues
                        return [4 /*yield*/, this.isSessionActive()];
                    case 2:
                        // Check if session is valid to avoid redirect issues
                        _a.sent();
                        // popupLogin success redirect to profile
                        this.router.navigate(['/chat']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /*
        * Signs out of Solid in this app, by calling the logout function and clearing the localStorage token
        */
        this.solidSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, solid.auth.logout()];
                    case 1:
                        _a.sent();
                        // Remove localStorage
                        localStorage.removeItem('solid-auth-client');
                        // Redirect to login page
                        this.router.navigate(['/']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error: " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveOldUserData = function (profile) {
            if (!localStorage.getItem('oldProfileData')) {
                localStorage.setItem('oldProfileData', JSON.stringify(profile));
            }
        };
        this.getOldUserData = function () {
            return JSON.parse(localStorage.getItem('oldProfileData'));
        };
        /*
        *  Make a call to the solid auth endpoint. It requires an identity provider url, which here is coming from the dropdown, which
        *  is populated by the getIdentityProviders() function call. It currently requires a callback url and a storage option or else
        *  the call will fail.
        */
        this.solidLogin = function (idp) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid.auth.login(idp, {
                            callbackUri: window.location.href + "chat",
                            storage: localStorage,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.isSessionActive();
    }
    /**
     * Function to get providers. This is to mimic the future provider registry
     *
     * @return {SolidProvider[]} A list of SolidProviders
     */
    AuthService.prototype.getIdentityProviders = function () {
        var inruptProvider = {
            name: 'Inrupt',
            image: '/assets/images/Inrupt.png',
            loginUrl: 'https://inrupt.net/auth',
            desc: 'Inrupt Inc. provider'
        };
        var solidCommunityProvider = {
            name: 'Solid Community',
            image: '/assets/images/Solid.png',
            loginUrl: 'https://solid.community',
            desc: 'A provider maintained by the Solid Community'
        };
        var otherProvider = {
            name: 'Other (Enter WebID)',
            image: '/assets/images/Generic.png',
            loginUrl: null,
            desc: 'Generic provider'
        };
        return [
            inruptProvider,
            solidCommunityProvider,
            otherProvider
        ];
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\Git\dechat_en2a\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map