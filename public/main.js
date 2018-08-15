(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "#app {\r\n    margin-bottom: 85px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"app\" class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

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
        this.title = 'angular-src';
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
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/privacy/privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/messages/messages.component */ "./src/app/pages/messages/messages.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'account/login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'account/register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'messages', component: _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"] },
    { path: 'profile/:username', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"] },
    { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"] },
    { path: 'privacy', component: _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"] },
    { path: 'terms', component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"],
                _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
                _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>About Us</h3>\n<p>Sarahah helps you in discovering your strengths and areas for improvement by receiving honest constructive feedback from your employees and your friends</p>\n<hr>  \n<h4>FAQ</h4>\n<dl>\n  <dt>Will Sarahah show the identity of senders?</dt>\n  <dd>Sarahah won't disclose the identity of the logged-in senders to users except with their consent.</dd>\n  <dt>Is Sarahah a hacker?!</dt>\n  <dd>Sarahah doesn't steal data but websites and apps impersonating Sarahah could do that</dd>\n  <dt>Can Sarahah visitors view my messages?</dt>\n  <dd>They can't as long as you don't share your messages</dd>\n  <dt>Is there a Sarahah mobile app?</dt>\n  <dd>Yes, the official Sarahah app is on Google Play and App Store</dd>\n  <dt>Can I respond to messages?</dt>\n  <dd>You can't respond to messages now. We are studying this option</dd>\n</dl>\n\n    "

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Contact Us</h2>\n\n<h5>To contact us by e-mail for non-support requests:</h5>\nsupport@app.com\n<h6>Or through social networks below :)</h6>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    Get honest feedback from your coworkers and friends\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 col-xs-12\">\n    <h4>At work</h4>\n    <ul>\n      <li>Enhance your areas of strength</li>\n      <li>Strengthen Areas for Improvement</li>\n    </ul>\n  </div>\n  <div class=\"col-sm-6 col-xs-12\">\n      <h4>With Your Friends</h4>\n      <ul>\n          <li>Improve your friendship by discovering your strengths and areas for improvement</li>\n          <li>Let your friends be honest with you</li>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2 class=\"page-header\">Login</h2>\n    <form>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input name=\"remmember\" type=\"checkbox\"> Remmember me\n          </label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Login</button>\n        <div class=\"text-center\"><a href=\"#\">I forgot my password</a></div>\n      </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/messages/messages.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/messages/messages.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/messages/messages.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/messages/messages.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/messages/messages.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/messages/messages.component.ts ***!
  \******************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
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

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/pages/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/pages/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h2>Privacy Policy</h2>\n  <br>\n  \n  <div>\n      <p>\n          We care for the privacy &amp; protection of our users and their data and we would like to share with you our policy and practices regarding your information and its privacy. Our Privacy Policy outlines what data is collected from our users and how it is used and processed. It also highlights how our users can control their data.\n      </p>\n  \n      <h3>Definitions</h3>\n      <p>\n          A Sarahah is the feedback or opinion that a user gives to other users on the Sarahah platforms. It is also the feedback or opinion that a user receives from other users on the Sarahah platforms.\n          A Sarahah Index is a measure to assess and tell how constructive and meaningful the user behavior is based on a complex internal dynamic algorithm that generates a score for each user. Sarahah by no means guarantees the accuracy of this measure.\n  \n      </p>\n      <h3>Information that users share with us</h3>\n  \n      <h4>General Information About You</h4>\n      <p>\n          There are parts of our platforms can be accessed without registration, while other parts of our services can only be accessed by registered users. To be able to provide our services to you, we require that you provide us with some basic information about you. This includes your name, e-mail address and date of birth. E-mail address is necessary for account verification and recovery. Date of birth is needed as Sarahah is limited to only those who are at least 17 years old. Also, to improve your experience on the platform, to show you relevant content and to improve our ads targeting, we ask you to provide us with other information such your country and gender.\n      </p>\n  \n      <h4>Information shared with the public</h4>\n      <p>\n          Most of your information is kept in privacy and not shared with the public. This includes the sarahahs that are sent or received to and from other users. However, some information will appear to the public by default. This includes your name, username and Sarahah index. If you provide us with a profile photo, it will also appear to the public. If you select to pin some sarahahs to your public profile, it will be available for the public.\n      </p>\n      <h3>Information that we collect from our users</h3>\n      <h4>Internet Protocol</h4>\n      <p>\n          When you use our services, even if you are just visiting our website and not registered, we receive information about you and your access. Our servers and some third-party technology providers log your internet protocol (IP) address with timestamps to maintain the security and quality of the service and may log the IP for other purposes such as analytics.\n          To maintain the safety and security of our users, we record your IP address and port when you register and when you send a sarahah on any of our platforms. We may also record the IP address and port on other occasions for the same purpose.\n      </p>\n  \n      <h4>Cookies</h4>\n      <p>\n          The use of cookies has many benefits to internet users and service providers and Sarahah uses cookies for many reasons. The most important one is to provide a seamless experience for our users. Here are more details about cookies:  “When you visit a website, the website sends a cookie to your computer. Your computer stores it in a file located inside your web browser.” * “The purpose of the computer cookie is to help the website keep track of your visits and activity.” * (derived from: <a href=\"https://us.norton.com/internetsecurity-privacy-what-are-cookies.html\">https://us.norton.com/internetsecurity-privacy-what-are-cookies.html</a>).\n          <br>We use cookies to operate our services properly and seamlessly, to collect website usage data and to show ads. You have the option on your own device to disable the use of cookies, but some parts of our services may not function properly if you disable cookies. Here are more details on the use of cookies on Sarahah:\n      </p>\n      <h5>Login &amp; Authentication</h5>\n      <p>We use cookies to make it easier for you to stay logged in, if you chose to do so, and to verify your account.</p>\n  \n      <h5>Google reCAPTCHA</h5>\n      <p>\n          These are essential site cookies, used by the google reCAPTCHA. These cookies use a unique identifier for tracking purposes.\n      </p>\n      <h5>Preferences &amp; Choices</h5>\n      <p>We use cookies to remember your language choice every time you visit our website.</p>\n  \n      <h5>Cookie Choices</h5>\n      <p>When you give a consent to our cookie policy or when you select your cookie choices, we use a cookie to remember your cookie choices and avoid asking you every time you visit our website.</p>\n      <h5>Ads Cookies</h5>\n      <p>We display ads on our platforms to be able to support our operations and to provide you with our services. We also use third-party ad network partners, such as Media.Net and Google Adsense, to display ads on our platforms. Cookies are used to manage ads. If you don’t give a consent to see ads personalized to you, by disabling the use of cookies to personalize ads, you may see ads that are less relevant to you. These ads use cookies to allow for frequency capping, aggregated ad reporting, and to combat fraud and abuse.  For more information, you can visit our partner web pages for more details.\n  Learn more about Media.Net privacy policy and practices: <a href=\"https://www.media.net/en/privacy-policy\">https://www.media.net/en/privacy-policy</a>\n  Learn more about Google use of cookies for ads: <a href=\"https://policies.google.com/technologies/ads?hl=en&amp;gl=US\">https://policies.google.com/technologies/ads?hl=en&amp;gl=US</a>\n  Learn how Google uses information from sites or apps that use its services on <a href=\"https://policies.google.com/technologies/partner-sites?hl=en&amp;gl=US\">https://policies.google.com/technologies/partner-sites?hl=en&amp;gl=US</a>\n  </p>\n  \n      <h4>Timestamps</h4>\n      <p>\n          As mentioned above, to make sure that you are protected and that the security and stability of the system is intact, we record the date and time of actions like:<br>\n          - When you create an account on our platforms<br>\n          - When you delete your account<br>\n          - When you confirm your e-mail<br>\n          - When you send a password-reset request\n      </p>\n  \n      <h3>Insights</h3>\n      <p>\n          To provide insights for our users, we may analyze sarahahs and user activity. Data privacy and confidentiality will be maintained.</p>\n  \n      <h3>3rd Party Services</h3>\n      <h4>Email</h4>\n      <p>\n          We may share your data with e-mail providers who facilitate e-mail delivery, this may be used for email confirmation, notifications and password reset.</p>\n  \n      <h4>Filtration</h4>\n      <p>\n          In addition to using our own internal systems, we may use third-party services, such as Google Perspective API and Microsoft, to filter sarahahs and content generated by our users to ensure all content is free from prohibited content.</p>\n  \n      <h4>Analytics Services</h4>\n      <p>\n          Sarahah may utilize services that analyze users’ behavior such as Facebook Analytics and Google Analytics. We use these analytics to improve our services and enhance the user experience. These services may use cookies and may collect certain information about you such as your device, websites you visit, how you use our services, your activities on our platforms or your demographics.  Here, you can learn more about Facebook Cookies Policy and Google Analytics Privacy Policy.\n      </p>\n  \n      <h4>Re-Captcha</h4>\n      <p>To protect our users and the maintain stability of our systems, we may use third-party captcha services, such as the Google Re-CAPTCHA, which may use IP address and cookies to perform the required check.</p>\n      \n      <h4>Notification Tokens</h4>\n      <p>We use third-party services, such as Google Firebase, to assigns a token to your device. This allows us to send you general or directed notifications.</p>\n  \n      <h3>Links to External Sites</h3>\n      <p>Our website may contain links to other sites on the internet or advertisements and we are not responsible for the data practices and privacy policies of these websites. We may be assisted by third party advertising companies for the reason of displaying ads when you visit our website. These companies have the right to use general information about your visit to this website and other websites. This is to show you targeted ads that are more relevant to you.</p>\n  \n  <h3>Your choices &amp; opting out of interest-based advertising</h3>\n      <p>As we outlined above, we use cookies to operate our services and provide other features on our platforms. Your browser may give you the ability to adjust your settings to delete or disable cookies. If you choose to disable cookies, you may not be able to use certain part of our services. You can also opt-out of receiving personalized ads here: <a href=\"http://www.networkadvertising.org/choices/\">http://www.networkadvertising.org/choices/</a> and here <a href=\"http://www.aboutads.info/choices/\">http://www.aboutads.info/choices/</a>\n      </p>\n  \n      <h3>Disclosure of Information</h3>\n      <p>We highly value the confidentiality of your data. We also have to protect our users and communities from misusers. To make sure our users are protected, we may disclose personal information when requested by legal or law-enforcement entities through official channels.</p>\n  <h3>Modification of Data Confidentiality and Privacy Policy</h3>\n      <p>We have the right to modify the items and conditions of data confidentiality and privacy policy if needed and when we see adequate</p>\n  <h3>Contacting Us</h3>\n      <p>You can contact us using the methods described in the \"Contact Us\" page</p>\n  \n  </div>\n  <br>"

/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
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

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/pages/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.css */ "./src/app/pages/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\n    <h2 class=\"page-header\">Register</h2>\n    <form>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"passwordconfirmation\">Password Confirmation</label>\n            <input type=\"password\" class=\"form-control\" name=\"passwordconfirmation\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"birthdate\">Birth Date</label>\n            <input type=\"date\" class=\"form-control\" name=\"birthdate\" placeholder=\"Birth Date\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <select class=\"form-control\" name=\"gender\">\n              <option value=\"Male\">Male</option>\n              <option value=\"Female\">Female</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" name=\"country\" placeholder=\"Country\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register</button>\n        <div class=\"text-center\">Already have an account? <a routerLink=\"/account/login\">Click here</a></div>\n      </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/pages/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/terms/terms.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/terms/terms.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/terms/terms.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     \n  <h2>Terms and Conditions</h2>\n  <br>\n  <div>\n      <p>\n          These terms and conditions govern the access to and the use of Sarahah's services and platforms, through the website or through the mobile apps.<br>\n          All users must comply with the terms and conditions on this page to be able to use Sarahah and its services and platforms.\n      </p>\n  \n      <h4>Public Use</h4>\n      <p>\n          All users should commit to ethics and values and should refrain from insult and abuse of the site.\n      </p>\n  \n      <h4>Privacy Policy</h4>\n      <p>\n          You understand that through your use of the Services, you consent to the collection and use of your data and information, as set forth in the Privacy Policy. You need to read it before you use or access the Services.\n      </p>\n  \n      <h4>Non-Registered Users</h4>\n      <p>Non-registered users are able to access only the parts of the Services that are publicly available and do not enjoy all of the privileges of being a registered member. Non-registered users are, however, still subject to the TC and Privacy Policy.</p>\n  \n      <h4>Denial of Access</h4>\n      <p>\n          Sarahah has the right to block any user from accessing the website or using it's services in general.\n      </p>\n  \n      <h4>Impersonation</h4>\n      <p>\n          Impersonation by name or subdomain is not allowed and Sarahah has the right to take adequate actions.\n      </p>\n  \n      <h4>Inactive Accounts</h4>\n      <p>\n          Sarahah has the right to remove inactive accounts under the duration that Sarahah sees adequate.\n      </p>\n  \n      <h4>Removal and Blocking of Content and Accounts</h4>\n      <p>\n          Sarahah has thr right to block or remove content and accounts for any reason it sees adequate. In addition, you acknowledge that we have your consent to monitor and block content that we consider to be harassing or bullying.    </p>\n      \n      <h4>Age</h4>\n      <p>We require our users to be at least 17 years old to access or use any of our platform and services.</p>\n  \n      <h4>Information</h4>\n      <p>\n          Sarahah has the right to use the information input by users with agreement to the privacy policy\n      </p>\n  \n      <h4>E-mail</h4>\n      <p>\n          Sarahah has the right to e-mail users with what Sarahah sees adequate with the option to unsubscribe from notification e-mails\n      </p>\n  \n      <h4>Modifications of Terms and Conditions</h4>\n      <p>\n          We have the right to modify terms and conditions if needed and whenever adequate\n      </p>\n  \n      <h4>Limits of Responsibility</h4>\n      <p>\n          All communicated content on the website is the responsibility of their owners and Sarahah is not responsible for its content or any damage that could result from this content or the use of any of the site's services.\n      </p>\n      <h4>Governing Law</h4>\n      <p>You agree that the Services provided by Sarahah shall be subject to all the applicable regulations in the Kingdom of Saudi Arabia. Any dispute shall be before the courts of Saudi Arabia.</p>\n  \n      <h4>Contact Us</h4>\n      <p>\n          You can contact us using the \"Contact Us\" page.\n      </p>\n  </div>\n  <br>"

/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
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

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/pages/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/pages/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer{\r\n    background-color: #f8f8f8;\r\n    border-top: 1px solid #e7e7e7;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding: 15px 0;\r\n}"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div class=\"container clearfix\">\n    <div class=\"col-sm-10 col-xs-12\">\n        By continuing to use our website, you confirm that you have read and agreed to our updated <a routerLink=\"/privacy\">Privacy Policy</a> and <a routerLink=\"/terms\">Terms and Conditions</a>\n    </div>\n    <div class=\"col-sm-2 col-xs-12 pull-right\">\n      <button class=\"btn btn-primary\">Accept</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">Saraha</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/about\">About <span class=\"sr-only\">(current)</span></a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/contact\">Contact</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/account/register\">Register</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/account/login\">Login</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\EssamAy\Desktop\saraha_clone\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map