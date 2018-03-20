webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/agreement/agreement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n  position: fixed;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 2;\r\n}\r\n#modal1{\r\n  z-index: 5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agreement/agreement.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\" xmlns=\"\">\n</div>\n<div id=\"modal1\" class=\"modal modal-fixed-footer\">\n  <div class=\"modal-content\">\n    <h4>Quiz</h4>\n\n    <div class=\"row\">\n      <div class=\"col s6\">\n        <div class=\"input-field col s12\">\n          <input id=\"name\" type=\"text\" name=\"name\" class=\"validate\">\n          <label for=\"name\">Name</label>\n        </div>\n\n        <div class=\"input-field col s12\">\n          <input id=\"email\" type=\"text\" name=\"email\" class=\"validate\">\n          <label for=\"email\">Email</label>\n        </div>\n\n        <div class=\"input-field col s12\">\n          <input id=\"mob_num\" type=\"text\" name=\"mob_num\" class=\"validate\">\n          <label for=\"mob_num\">Mobile Number</label>\n        </div>\n      </div>\n\n      <div class=\"col s6\">\n        <div class=\"col s12\">\n          <h5>Instructions</h5>\n          <ol>\n            <li>Test consists of various types of questions</li>\n            <div class=\"row\"></div>\n            <li>Most of the questions are based on football news from 2017.</li>\n            <div class=\"row\"></div>\n            <li>List of mandatory questions is given in the sidebar.</li>\n            <div class=\"row\"></div>\n            <li>Do not refresh the page after starting the test.</li>\n            <div class=\"row\"></div>\n            <li>\n\n              <div class=\"row\">\n                <div class=\"red left\" style=\"border-radius: 100%;width: 10px;height: 10px\"></div>\n                <span>&nbsp;&nbsp;Un-Visited Questions</span>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"yellow left\" style=\"border-radius: 100%;width: 10px;height: 10px\"></div>\n                <span>&nbsp;&nbsp;Visited But Not Answered</span>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"green left\" style=\"border-radius: 100%;width: 10px;height: 10px\"></div>\n                <span>&nbsp;&nbsp;Answered</span>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"blue left\" style=\"border-radius: 100%;width: 10px;height: 10px\"></div>\n                <span>&nbsp;&nbsp;Current Question</span>\n              </div>\n            </li>\n          </ol>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"center col s4 offset-s4\">\n      <a (click)=\"setuser()\" routerLink=\"1\" id=\"link\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Start Test</a>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/agreement/agreement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgreementComponent = /** @class */ (function () {
    function AgreementComponent(auth, quiz) {
        this.auth = auth;
        this.quiz = quiz;
    }
    AgreementComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal({
                dismissible: false,
                complete: function () {
                    var name = $("#name").val();
                    var email = $("#email").val();
                    var mob_num = $("#mob_num").val();
                    if (name === '' || email === '' || mob_num === '') {
                        $('#modal1').modal('open');
                    }
                }
            });
            $('#modal1').modal('open');
        });
    };
    AgreementComponent.prototype.setuser = function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var mob_num = $("#mob_num").val();
        this.auth.setUserLoggedIn(name, email, mob_num);
    };
    AgreementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-agreement',
            template: __webpack_require__("../../../../../src/app/agreement/agreement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/agreement/agreement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]])
    ], AgreementComponent);
    return AgreementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearfix:before,\r\n.clearfix:after {\r\n        display: table;\r\n        content: \" \";\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\n.card {\r\n  height:500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav xmlns=\"\">\n\n</app-nav>\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>-->\n<!--<style type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.css\"></style>-->\n\n\n<div class=\"row\">\n  <div class=\"col l8 m12 s12\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12\">\n        <div class=\"card\">\n          <div class=\"card-content clearfix\">\n            <router-outlet></router-outlet>\n\n          </div>\n        </div>\n        <div class=\"row center\">\n          <div class=\"col s2 m2 l2 offset-s4 offset-l3 offset-m3\">\n            <button (click)=\"prevQ();\" class=\"btn-floating waves-effect waves-light btn tooltipped\" type=\"submit\" name=\"action\"\n                    data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Previous\">\n              <i class=\"material-icons\">arrow_back</i>\n            </button>\n          </div>\n          <div class=\"col s2 m2 l2\">\n            <div routerLink=\"submit\" class=\"center tooltipped\" id=\"submit-test\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Attempt all mandatory questions\"><button [disabled] = this.canSubmit class=\"btn-large waves-effect waves-light\" name=\"action\">Submit Test\n              <i class=\"material-icons right\">send</i>\n            </button></div>\n          </div>\n          <div class=\"col s3 m3 l3\">\n            <button (click)=\"nextQ();\" class=\"btn-floating waves-effect waves-light btn tooltipped\" data-position=\"bottom\" data-delay=\"50\"\n                    data-tooltip=\"Next\" type=\"submit\" name=\"action\">\n              <i class=\"material-icons\">arrow_forward</i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col l4 m4 hide-on-med-and-down\">\n    <div class=\"row\">\n      <div class=\"col s12 m12\">\n        <div class=\"card grey darken-1\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">List of Questions</span>\n            <div class=\"row\">\n              <div *ngFor=\"let ques of quess\" class=\"col s3\"><a id=\"q-{{ques}}\" routerLink=\"{{ques}}\" routerLinkActive=\"blue\"\n                                                                [routerLinkActiveOptions]=\"{exact:true}\"\n                                                                class=\"questions btn-floating btn-large waves-effect waves-light red white-text\"\n                                                                (click)=\"process($event);\" ([ngModel])=\"curr_page\">{{ques}}</a>\n                <div class=\"row\" *ngIf=\"ques%4==0\"></div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"card-action white-text\">\n            No. of Questions: <span class=\"yellow-text\">10</span><br>\n            No. of Questions Visited: <span class=\"yellow-text\">{{this.visited.length}}</span><br>\n            No. of Questions Answered: <span class=\"yellow-text\">{{this.answered.length}}</span>\n            <div class=\"row\"></div>\n            <span class=\"white-text\">List Of Mandatory Questions -</span>\n            <span class=\"yellow-text\" *ngFor=\"let v of this.mandatory\">{{v}}&nbsp;&nbsp;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(quiz, router) {
        this.quiz = quiz;
        this.router = router;
        this.title = 'app';
        this.quess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.qno = 0;
        this.canSubmit = quiz.canSubmit;
        this.visited = quiz.visited;
        this.mandatory = quiz.mandatory;
        this.answered = quiz.answered;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.nextQ = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        var q = this.qno + 2;
        this.router.navigate([q]);
    };
    AppComponent.prototype.prevQ = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        var q = this.qno;
        this.router.navigate([q]);
    };
    AppComponent.prototype.process = function (e) {
        var curr_id = e.target.id.split('-')[1];
        this.changeColor(curr_id);
    };
    AppComponent.prototype.changeColor = function (curr_id) {
        curr_id = curr_id - 1;
        console.log('v ' + this.quiz.visited + ' a ' + this.quiz.answered + ' c ' + curr_id);
        var temp;
        var btn_id;
        var str;
        var buttons = document.getElementsByClassName('questions');
        for (var i = 0; i < buttons.length; i++) {
            str = buttons[i].id.split('-')[1];
            btn_id = parseInt(str) - 1;
            temp = this.quiz.visited.indexOf(btn_id);
            if (temp != -1) {
                temp = this.quiz.answered.indexOf(btn_id);
                if (temp != -1) {
                    if (curr_id != btn_id) {
                        //$('#' + buttons[i].id).removeClass('red');
                        $('#' + buttons[i].id).removeClass('yellow');
                        $('#' + buttons[i].id).addClass('green');
                    }
                    else {
                        //$('#' + buttons[i].id).removeClass('yellow');
                        //$('#' + buttons[i].id).removeClass('red');
                        $('#' + buttons[i].id).removeClass('green');
                        $('#' + buttons[i].id).addClass('blue');
                    }
                }
                else {
                    if (curr_id != btn_id) {
                        $('#' + buttons[i].id).removeClass('red');
                        $('#' + buttons[i].id).addClass('yellow');
                    }
                    else {
                        $('#' + buttons[i].id).removeClass('yellow');
                        $('#' + buttons[i].id).addClass('blue');
                    }
                }
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());

$(document).ready(function () {
    $('.tooltipped').tooltip({ delay: 50 });
    $('.button-collapse').sideNav({
        menuWidth: 350,
        edge: 'left',
        closeOnClick: true,
        draggable: true,
    });
});


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__single_single_component__ = __webpack_require__("../../../../../src/app/single/single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__multiple_multiple_component__ = __webpack_require__("../../../../../src/app/multiple/multiple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__arrange_arrange_component__ = __webpack_require__("../../../../../src/app/arrange/arrange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agreement_agreement_component__ = __webpack_require__("../../../../../src/app/agreement/agreement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_guard__ = __webpack_require__("../../../../../src/app/home.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__match_match_component__ = __webpack_require__("../../../../../src/app/match/match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fib_fib_component__ = __webpack_require__("../../../../../src/app/fib/fib.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__freetext_freetext_component__ = __webpack_require__("../../../../../src/app/freetext/freetext.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__picture_picture_component__ = __webpack_require__("../../../../../src/app/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getans_directive__ = __webpack_require__("../../../../../src/app/getans.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__end_end_component__ = __webpack_require__("../../../../../src/app/end/end.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '',
        canActivate: [],
        component: __WEBPACK_IMPORTED_MODULE_10__agreement_agreement_component__["a" /* AgreementComponent */]
    },
    {
        path: '1',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__single_single_component__["a" /* SingleComponent */]
    },
    {
        path: '2',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_8__multiple_multiple_component__["a" /* MultipleComponent */]
    },
    {
        path: '3',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9__arrange_arrange_component__["a" /* ArrangeComponent */]
    },
    {
        path: '4',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_14__match_match_component__["a" /* MatchComponent */]
    },
    {
        path: '5',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_15__fib_fib_component__["a" /* FibComponent */]
    },
    {
        path: '6',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_16__freetext_freetext_component__["a" /* FreetextComponent */]
    },
    {
        path: '7',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_17__picture_picture_component__["a" /* PictureComponent */]
    },
    {
        path: '8',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__single_single_component__["a" /* SingleComponent */]
    },
    {
        path: '9',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__single_single_component__["a" /* SingleComponent */]
    },
    {
        path: '10',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__single_single_component__["a" /* SingleComponent */]
    },
    {
        path: 'submit',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_19__end_end_component__["a" /* EndComponent */]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__single_single_component__["a" /* SingleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__multiple_multiple_component__["a" /* MultipleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__arrange_arrange_component__["a" /* ArrangeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__agreement_agreement_component__["a" /* AgreementComponent */],
                __WEBPACK_IMPORTED_MODULE_14__match_match_component__["a" /* MatchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__fib_fib_component__["a" /* FibComponent */],
                __WEBPACK_IMPORTED_MODULE_16__freetext_freetext_component__["a" /* FreetextComponent */],
                __WEBPACK_IMPORTED_MODULE_17__picture_picture_component__["a" /* PictureComponent */],
                __WEBPACK_IMPORTED_MODULE_18__getans_directive__["a" /* GetansDirective */],
                __WEBPACK_IMPORTED_MODULE_19__end_end_component__["a" /* EndComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__home_guard__["a" /* HomeGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/arrange/arrange.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/arrange/arrange.component.html":
/***/ (function(module, exports) {

module.exports = "<div xmlns=\"\">\n  <h5>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</h5>\n</div>\n<div class=\"divider\"></div>\n<div class=\"col s12 m12 l12\">\n  <br>\n  <ul id=\"sortable\" class=\"collection\">\n    <li class=\"item collection-item\" *ngFor=\"let sots of quiz.replies[this.qno].ans\" id=\"{{sots}}\" (mousemove)=\"myFun($event)\">\n      <div class=\"\">\n        {{sots}}. {{quiz.quiz[this.qno].answers[sots-1]}}\n      </div>\n      <div class=\"row\"></div>\n    </li>\n    <div id=\"hid\" style=\"display: none;\"><input type=\"number\" value=\"1234\" (change)=\"myFun($event)\" id=\"res\"></div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/arrange/arrange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArrangeComponent = /** @class */ (function () {
    function ArrangeComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
    }
    ArrangeComponent.prototype.ngOnInit = function () {
        var reply = this.quiz.replies[this.qno];
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
        $(function () {
            $("#re").hide();
            $("#sortable").sortable({
                stop: function (event, ui) {
                    var res = '';
                    var children = $("#sortable").children();
                    for (var i = 0; i < 4; i++) {
                        res = res + children[i].id;
                    }
                    $('#res').val(res);
                }
            });
            $("#sortable").disableSelection();
        });
    };
    ArrangeComponent.prototype.myFun = function (e) {
        this.arrs = $('#res').val();
        var a = this.arrs.split('');
        this.quiz.replies[this.qno] = { ans: a };
        if (this.quiz.answered.indexOf(this.qno) == -1) {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, true);
        }
    };
    ArrangeComponent.prototype.moveOption = function (e) {
        var id = e.target.id;
        var children = $('#items').children();
        for (var i = 0; i < 4; i++) {
            $('#' + children[i].id).removeClass('active');
        }
        $('#' + id).addClass('active');
    };
    ArrangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-arrange',
            template: __webpack_require__("../../../../../src/app/arrange/arrange.component.html"),
            styles: [__webpack_require__("../../../../../src/app/arrange/arrange.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], ArrangeComponent);
    return ArrangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.getUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.user = {
            'name': '',
            'email': '',
            'mob_num': '',
        };
    }
    AuthService.prototype.setUserLoggedIn = function (name, email, mob_num) {
        this.user.name = name;
        this.user.email = email;
        this.user.mob_num = mob_num;
    };
    AuthService.prototype.getUserLoggedIn = function () {
        if (this.user.name != '' && this.user.email != '' && this.user.mob_num != '') {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/end/end.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n  position: fixed; /* Sit on top of the page content */\r\n  display: block; /* Hidden by default */\r\n  width: 100%; /* Full width (cover the whole page) */\r\n  height: 100%; /* Full height (cover the whole page) */\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0,0,0,0.5); /* Black background with opacity */\r\n  z-index: 6; /* Specify a stack order in case you're using a different order for other elements */\r\n  cursor: pointer; /* Add a pointer on hover */\r\n}\r\n.top-layer{\r\n  z-index: 8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/end/end.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"></div>\n<div class=\"row\"></div>\n<div class=\"row\"></div>\n<div id=\"overlay\"></div>\n<div class=\"row\">\n  <div id=\"modal1\" class=\"modal\">\n    <div class=\"modal-content center\">\n      <h3>Your Replies Are Submited</h3>\n      <h4>Thanks For Giving Test !! </h4><br>\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"testOver()\">Return To Home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/end/end.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EndComponent = /** @class */ (function () {
    function EndComponent(quiz, router, auth) {
        this.quiz = quiz;
        this.router = router;
        this.auth = auth;
    }
    EndComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.modal').modal({
                dismissible: false,
            });
            $('#modal1').modal('open');
        });
    };
    EndComponent.prototype.testOver = function () {
        this.auth.user.name = '';
        this.auth.user.email = '';
        this.auth.user.mob_num = '';
        if (this.quiz.visited.length > 1) {
            this.quiz.visited = new Array(1);
        }
        if (this.quiz.visited.length > 1) {
            this.quiz.answered = new Array(1);
        }
        window.location.href = '/';
    };
    EndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-end',
            template: __webpack_require__("../../../../../src/app/end/end.component.html"),
            styles: [__webpack_require__("../../../../../src/app/end/end.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], EndComponent);
    return EndComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fib/fib.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fib/fib.component.html":
/***/ (function(module, exports) {

module.exports = "<div xmlns=\"\">\n  <h5>\n    <div>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</div>\n  </h5>\n\n  <div style=\"float: left;margin-top: 11px;\">{{quiz.quiz[this.qno].question_part1}}</div>\n  <div style=\"float: left;\"><input type=\"text\" id=\"fib\" style=\"width: 150px;margin-left: 5px;\" (change)=\"updateAns()\"></div>\n  <div style=\"margin-top: 21px;\">{{quiz.quiz[this.qno].question_part2}}</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fib/fib.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FibComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FibComponent = /** @class */ (function () {
    function FibComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
    }
    FibComponent.prototype.ngOnInit = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
        this.retrieveAns();
    };
    FibComponent.prototype.updateAns = function () {
        var a = $("#fib").val();
        this.quiz.replies[this.qno].ans = a;
        if (this.quiz.answered.indexOf(this.qno) == -1 && a != '') {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, true);
        }
        else if (this.quiz.answered.indexOf(this.qno) != -1 && a == '') {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, false);
        }
    };
    FibComponent.prototype.retrieveAns = function () {
        if (this.quiz.replies[this.qno].ans) {
            $("#fib").val(this.quiz.replies[this.qno].ans);
        }
    };
    FibComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fib',
            template: __webpack_require__("../../../../../src/app/fib/fib.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fib/fib.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], FibComponent);
    return FibComponent;
}());



/***/ }),

/***/ "../../../../../src/app/freetext/freetext.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/freetext/freetext.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</h5>\n</div>\n<div class=\"divider\"></div>\n<div class=\"row\">\n<div class=\"col s6 m6 l6\">\n  <br>\n    <div class=\"input-field\">\n      <input (change)=\"updateAns()\" type=\"text\" id=\"free\" />\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/freetext/freetext.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreetextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FreetextComponent = /** @class */ (function () {
    function FreetextComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
    }
    FreetextComponent.prototype.ngOnInit = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
        this.retrieveAns();
    };
    FreetextComponent.prototype.updateAns = function () {
        var a = $("#free").val();
        this.quiz.replies[this.qno].ans = a;
        if (this.quiz.answered.indexOf(this.qno) == -1 && a != '') {
            this.quiz.answered.push(this.qno);
        }
        else if (this.quiz.answered.indexOf(this.qno) != -1 && a == '') {
            this.quiz.checkMandatory(this.qno + 1, false);
        }
    };
    FreetextComponent.prototype.retrieveAns = function () {
        if (this.quiz.replies[this.qno].ans) {
            $("#free").val(this.quiz.replies[this.qno].ans);
        }
    };
    FreetextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-freetext',
            template: __webpack_require__("../../../../../src/app/freetext/freetext.component.html"),
            styles: [__webpack_require__("../../../../../src/app/freetext/freetext.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], FreetextComponent);
    return FreetextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/getans.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetansDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetansDirective = /** @class */ (function () {
    function GetansDirective() {
    }
    GetansDirective.prototype.onInput = function (event) {
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GetansDirective.prototype, "onInput", null);
    GetansDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appGetans]'
        }),
        __metadata("design:paramtypes", [])
    ], GetansDirective);
    return GetansDirective;
}());



/***/ }),

/***/ "../../../../../src/app/home.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeGuard = /** @class */ (function () {
    function HomeGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HomeGuard.prototype.canActivate = function (next, state) {
        if (this.auth.getUserLoggedIn()) {
            this.router.navigate(['/1']);
        }
        else {
            return true;
        }
    };
    HomeGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeGuard);
    return HomeGuard;
}());



/***/ }),

/***/ "../../../../../src/app/match/match.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/match/match.component.html":
/***/ (function(module, exports) {

module.exports = "<div xmlns=\"\">\n  <h5>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</h5>\n</div>\n<div class=\"divider\"></div>\n<div class=\"col s12 m12 l12\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col s6 m6 l6\">\n      <ul id=\"fixed\" class=\"collection\">\n        <li class=\"item collection-item\" *ngFor=\"let sots of quiz.quiz[this.qno].column\">\n          <div class=\"\">\n            {{quiz.quiz[this.qno].column.indexOf(sots)+1}}. {{sots}}\n          </div>\n          <div class=\"row\"></div>\n        </li>\n        <div id=\"re\"><input type=\"number\" value=\"1234\" (change)=\"myFun($event)\" id=\"res\"></div>\n      </ul>\n    </div>\n    <div class=\"col s6 m6 l6\">\n  <ul id=\"sortable\" class=\"collection\">\n    <li class=\"item collection-item\" *ngFor=\"let sots of quiz.replies[this.qno].ans\" (mousemove)=\"myFun($event)\"\n        id=\"{{sots}}\">\n      <div class=\"\">\n        {{sots}}. {{quiz.quiz[this.qno].answers[sots-1]}}\n      </div>\n      <div class=\"row\"></div>\n    </li>\n    <div id=\"hid\" style=\"display: none;\"><input type=\"number\" value=\"1234\" (change)=\"myFun($event)\" id=\"res\"></div>\n  </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/match/match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatchComponent = /** @class */ (function () {
    function MatchComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
        this.arrs = 'pdppdppd';
        this.sort = [1, 2, 3, 4];
    }
    MatchComponent.prototype.ngOnInit = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
        $(function () {
            $("#re").hide();
            $("#sortable").sortable({
                stop: function (event, ui) {
                    var res = '';
                    var children = $("#sortable").children();
                    for (var i = 0; i < 4; i++) {
                        res = res + children[i].id;
                    }
                    $('#res').val(res);
                }
            });
            $("#sortable").disableSelection();
        });
    };
    MatchComponent.prototype.myFun = function (e) {
        this.arrs = $('#res').val();
        var b = this.arrs.split('').map(Number);
        this.quiz.replies[this.qno].ans = b;
        if (this.quiz.answered.indexOf(this.qno) == -1) {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, true);
        }
    };
    MatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-match',
            template: __webpack_require__("../../../../../src/app/match/match.component.html"),
            styles: [__webpack_require__("../../../../../src/app/match/match.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], MatchComponent);
    return MatchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multiple/multiple.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multiple/multiple.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</h5>\n</div>\n<div class=\"divider\"></div>\n<div class=\"col s12 m12 l12\">\n  <br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt1.id)\" type=\"radio\" id=\"1\" name=\"ans1\" value=\"{{quiz.quiz[this.qno].opt1.ans}}\"/>\n    <label for=\"1\">{{quiz.quiz[this.qno].opt1.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt2.id)\" type=\"radio\" id=\"2\" name=\"ans2\" value=\"{{quiz.quiz[this.qno].opt2.ans}}\"/>\n    <label for=\"2\">{{quiz.quiz[this.qno].opt2.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt3.id)\" type=\"radio\" id=\"3\" name=\"ans3\" value=\"{{quiz.quiz[this.qno].opt3.ans}}\"/>\n    <label for=\"3\">{{quiz.quiz[this.qno].opt3.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt4.id)\" type=\"radio\" id=\"4\" name=\"ans4\" value=\"{{quiz.quiz[this.qno].opt4.ans}}\"/>\n    <label for=\"4\">{{quiz.quiz[this.qno].opt4.ans}}</label>\n  </p><br>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/multiple/multiple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleComponent = /** @class */ (function () {
    function MultipleComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
    }
    MultipleComponent.prototype.ngOnInit = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
        this.getAnswers();
    };
    MultipleComponent.prototype.storeAnswer = function (id) {
        var str;
        if (this.quiz.replies[this.qno].ans) {
            var flag = false;
            for (var i = 1; i <= 4; i++) {
                if (this.quiz.replies[this.qno].ans[i] == id) {
                    flag = true;
                }
            }
            if (flag) {
                var count = 0;
                var field = document.getElementById(id);
                field.checked = false;
                this.quiz.replies[this.qno].ans[id] = 0;
                for (i = 1; i <= 4; i++) {
                    if (this.quiz.replies[this.qno].ans[i] != 0) {
                        count++;
                    }
                }
                if (count == 0) {
                    this.quiz.checkMandatory(this.qno + 1, false);
                }
            }
        }
        var a = [];
        for (var i = 1; i <= 4; i++) {
            var str;
            str = String(i);
            var elem = document.getElementById(str);
            if (elem.checked) {
                a.push(i);
            }
        }
        if (this.quiz.answered.indexOf(this.qno) == -1) {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, true);
        }
        this.quiz.replies[this.qno] = { ans: a };
    };
    MultipleComponent.prototype.getAnswers = function () {
        if (this.quiz.replies[this.qno].ans) {
            for (var i = 0; i < 4; i++) {
                var val = this.quiz.replies[this.qno].ans[i];
                if (val) {
                    var str;
                    str = String(val);
                    var field = document.getElementById(str);
                    field.checked = true;
                }
            }
        }
    };
    MultipleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-multiple',
            template: __webpack_require__("../../../../../src/app/multiple/multiple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/multiple/multiple.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], MultipleComponent);
    return MultipleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper teal lighten-1\">\n      <a href=\"#\" class=\"brand-logo\"> Football Quiz</a>\n      <ul class=\"right\">\n        <li>\n          <a data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n        </li>\n        <li class=\"hide-on-med-and-down\">Welcome {{this.user.name}}&nbsp;&nbsp;</li>\n        <li>\n          <a class=\"hide-on-med-and-down\" (click)=\"testOver()\">Leave Test&nbsp;&nbsp;</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<ul id=\"slide-out\" class=\"side-nav right\">\n  <li><div class=\"user-view\">\n    <div class=\"row\">\n      <div class=\"col s12 m12\">\n        <div class=\"card grey darken-1\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">List of Questions</span>\n            <div class=\"row\">\n              <div *ngFor=\"let ques of quess\" class=\"col s3\"><a id=\"mq-{{ques}}\" routerLink=\"{{ques}}\" routerLinkActive=\"blue\"\n                                                                [routerLinkActiveOptions]=\"{exact:true}\"\n                                                                class=\"questions btn-floating btn-large waves-effect waves-light red white-text\"\n                                                                (click)=\"process($event);\" ([ngModel])=\"curr_page\">{{ques}}</a>\n                <div class=\"row\" *ngIf=\"ques%4==0\"></div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"card-action white-text\">\n            No. of Questions: 10<br>\n            No. of Questions Visited: {{this.visited.length}}<br>\n            No. of Questions Answered: {{this.answered.length}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div></li>\n  <li>\n    <a (click)=\"testOver()\">Leave Test&nbsp;&nbsp;</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(quiz, router, auth) {
        this.quiz = quiz;
        this.router = router;
        this.auth = auth;
        this.quess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.user = {
            name: '',
            email: '',
            mob_num: ''
        };
        this.name = '';
        this.user.name = auth.user.name;
        this.user.email = auth.user.email;
        this.user.mob_num = auth.user.mob_num;
        this.canSubmit = quiz.canSubmit;
        this.visited = quiz.visited;
        this.mandatory = quiz.countMandatory;
        this.answered = quiz.answered;
    }
    NavComponent.prototype.ngOnInit = function () {
        var name = this.auth.user.name;
        if (name != '') {
            this.name = name;
        }
    };
    NavComponent.prototype.testOver = function () {
        this.auth.user.name = '';
        this.auth.user.email = '';
        this.auth.user.mob_num = '';
        if (this.quiz.visited.length > 1) {
            this.quiz.visited = new Array(1);
        }
        if (this.quiz.visited.length > 1) {
            this.quiz.answered = new Array(1);
        }
        window.location.href = '/';
    };
    NavComponent.prototype.process = function (e) {
        var curr_id = e.target.id.split('-')[1];
        this.changeColor(curr_id);
    };
    NavComponent.prototype.changeColor = function (curr_id) {
        curr_id = curr_id - 1;
        console.log('v ' + this.quiz.visited + ' a ' + this.quiz.answered + ' c ' + curr_id);
        var temp;
        var btn_id;
        var str;
        var buttons = document.getElementsByClassName('questions');
        for (var i = 0; i < buttons.length; i++) {
            str = buttons[i].id.split('-')[1];
            btn_id = parseInt(str) - 1;
            temp = this.quiz.visited.indexOf(btn_id);
            if (temp != -1) {
                temp = this.quiz.answered.indexOf(btn_id);
                if (temp != -1) {
                    if (curr_id != btn_id) {
                        //$('#' + buttons[i].id).removeClass('red');
                        $('#' + buttons[i].id).removeClass('yellow');
                        $('#' + buttons[i].id).addClass('green');
                    }
                    else {
                        //$('#' + buttons[i].id).removeClass('yellow');
                        //$('#' + buttons[i].id).removeClass('red');
                        $('#' + buttons[i].id).removeClass('green');
                        $('#' + buttons[i].id).addClass('blue');
                    }
                }
                else {
                    if (curr_id != btn_id) {
                        $('#' + buttons[i].id).removeClass('red');
                        $('#' + buttons[i].id).addClass('yellow');
                    }
                    else {
                        $('#' + buttons[i].id).removeClass('yellow');
                        $('#' + buttons[i].id).addClass('blue');
                    }
                }
            }
        }
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/picture/picture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/picture/picture.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</h5>\n</div>\n<div class=\"divider\"></div>\n<div class=\"row\">\n<div class=\"col s16 m6 l6\">\n  <br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt1.id)\" type=\"radio\" id=\"1\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt1.ans}}\"/>\n    <label for=\"1\">{{quiz.quiz[this.qno].opt1.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt2.id)\" class=\"answers\" type=\"radio\" id=\"2\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt2.ans}}\"/>\n    <label for=\"2\">{{quiz.quiz[this.qno].opt2.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt3.id)\" class=\"answers\" type=\"radio\" id=\"3\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt3.ans}}\"/>\n    <label for=\"3\">{{quiz.quiz[this.qno].opt3.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt4.id)\" class=\"answers\" type=\"radio\" id=\"4\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt4.ans}}\"/>\n    <label for=\"4\">{{quiz.quiz[this.qno].opt4.ans}}</label>\n  </p><br>\n</div>\n  <div class=\"col s6 m6 l6\">\n    <img class=\"responsive-img\" src=\"../../assets/images/everton-football-club-logo-preview.png\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/picture/picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PictureComponent = /** @class */ (function () {
    function PictureComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
    }
    PictureComponent.prototype.ngOnInit = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
        this.getAnswers();
    };
    PictureComponent.prototype.storeAnswer = function (id) {
        if (this.quiz.replies[this.qno].ans) {
            if (this.quiz.replies[this.qno].ans == id) {
                var field = document.getElementById(id);
                field.checked = false;
                this.quiz.replies[this.qno].ans = '';
                this.quiz.checkMandatory(this.qno + 1, false);
            }
        }
        if (this.quiz.answered.indexOf(this.qno) == -1) {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, true);
            //console.log(this.quiz.countMandatory);
            //console.log(this.quiz.answered);
        }
        this.quiz.replies[this.qno] = { ans: id };
        //console.log(this.quiz.replies);
    };
    PictureComponent.prototype.getAnswers = function () {
        if (this.quiz.replies[this.qno].ans) {
            var str;
            str = String(this.quiz.replies[this.qno].ans);
            var field = document.getElementById(str);
            field.checked = true;
        }
    };
    PictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-picture',
            template: __webpack_require__("../../../../../src/app/picture/picture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/picture/picture.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], PictureComponent);
    return PictureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.quiz = [
            {
                question: 'Which Player broke the world record transfer?',
                opt1: { id: 1, ans: 'Paul Pogba' },
                opt2: { id: 2, ans: 'Neymar' },
                opt3: { id: 3, ans: 'Dembele' },
                opt4: { id: 4, ans: 'Messi' },
                answers: [''],
                column: [''],
                question_part1: '',
                question_part2: '',
            },
            {
                question: 'Who came out of managerial retirement to take over Everton?',
                opt1: { id: 1, ans: 'Sam Allardyce' },
                opt2: { id: 2, ans: 'Terry Venables' },
                opt3: { id: 3, ans: 'Alan Curbishley' },
                opt4: { id: 4, ans: 'David Moyes' },
                answers: [''],
                column: [''],
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'Arrange the following in descending order of number of champions league trophies.Drag the options to rearrange them.',
                opt1: { id: 1, ans: '' },
                opt2: { id: 2, ans: '' },
                opt3: { id: 3, ans: '' },
                opt4: { id: 4, ans: '' },
                answers: ['Liverpool', 'Barcelona', 'Manchester United', 'Athletico Madrid'],
                column: [''],
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'Drag and rearrange the player names in second column to the corresponding club in the first column.',
                opt1: { id: 1, ans: '' },
                opt2: { id: 2, ans: '' },
                opt3: { id: 3, ans: '' },
                opt4: { id: 4, ans: '' },
                column: ['Liverpool', 'Barcelona', 'P.S.G', 'Manchester United'],
                answers: ['Neymar', 'Adam Lallana', 'Sanchez', 'Coutinho'],
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'Fill in the blank for the following line from Liverpool F.C Anthem .',
                opt1: { id: 1, ans: '' },
                opt2: { id: 2, ans: '' },
                opt3: { id: 3, ans: '' },
                opt4: { id: 4, ans: '' },
                question_part1: 'Walk on through the wind, Walk on through the rain Though your',
                question_part2: 'be tossed and blown',
                answers: [''],
                column: ['']
            },
            {
                question: 'Which club has most points in a season in EPL?',
                answers: [''],
                column: [''],
                opt1: { id: 1, ans: '' },
                opt2: { id: 2, ans: '' },
                opt3: { id: 3, ans: '' },
                opt4: { id: 4, ans: '' },
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'Gues the club from the following logo?',
                opt1: { id: 1, ans: 'Chelsea' },
                opt2: { id: 2, ans: 'Man City' },
                opt3: { id: 3, ans: 'Arsenal' },
                opt4: { id: 4, ans: 'Tottenham' },
                answers: [''],
                column: [''],
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'Manchester City signed just one player in January. Who was it?',
                opt1: { id: 1, ans: 'Benjamin Mendy' },
                opt2: { id: 2, ans: 'Gabriel Jesus' },
                opt3: { id: 3, ans: 'Leroy Sane' },
                opt4: { id: 4, ans: 'William Best' },
                answers: [''],
                column: [''],
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'How many managerial departures were there in the Premier League and Football League altogether?',
                opt1: { id: 1, ans: 67 },
                opt2: { id: 2, ans: 52 },
                opt3: { id: 3, ans: 43 },
                opt4: { id: 4, ans: 31 },
                answers: [''],
                column: [''],
                question_part1: '',
                question_part2: ''
            },
            {
                question: 'Between them, promoted sides Brighton, Huddersfield and Newcastle signed how many players in the summer transfer window?',
                opt1: { id: 1, ans: 20 },
                opt2: { id: 2, ans: 33 },
                opt3: { id: 3, ans: 9 },
                opt4: { id: 4, ans: 15 },
                answers: [''],
                column: [''],
                question_part1: '',
                question_part2: ''
            },
        ];
        this.multi = new Array(4);
        this.visited = new Array();
        this.answered = new Array();
        this.replies = [{ ans: 0 }, { ans: [0, 0, 0, 0] }, { ans: [1, 2, 3, 4] }, { ans: [1, 2, 3, 4] }, { ans: '' }, { ans: '' }, { ans: 0 }, { ans: 0 }, { ans: 0 }, { ans: 0 }];
        this.answers = [{ ans: 1 }, { ans: [1, 3] }, { ans: [2, 1, 4, 3] }, { ans: [1, 3, 2, 4] }, { ans: 'text' }, { ans: 'another' }, { ans: 3 }, { ans: 4 }, { ans: 1 }, { ans: 2 }];
        this.mandatory = [1, 3, 5];
        this.canSubmit = true;
        this.countMandatory = 0;
    }
    QuestionService.prototype.checkMandatory = function (qno, flag) {
        if (this.mandatory.indexOf(qno) != -1 && flag) {
            this.countMandatory++;
        }
        else if (this.mandatory.indexOf(qno) != -1 && !flag) {
            this.countMandatory--;
            this.canSubmit = true;
            $('#submit-test').addClass('tooltipped');
        }
        if (this.countMandatory == this.mandatory.length) {
            this.canSubmit = false;
            $('#submit-test').removeClass('tooltipped');
        }
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/single/single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single/single.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Q{{this.qno+1}}.{{quiz.quiz[this.qno].question}}</h5>\n</div>\n<div class=\"divider\"></div>\n<div class=\"col s12 m12 l12\">\n  <br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt1.id)\" type=\"radio\" id=\"1\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt1.ans}}\"/>\n    <label for=\"1\">{{quiz.quiz[this.qno].opt1.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt2.id)\" class=\"answers\" type=\"radio\" id=\"2\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt2.ans}}\"/>\n    <label for=\"2\">{{quiz.quiz[this.qno].opt2.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt3.id)\" class=\"answers\" type=\"radio\" id=\"3\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt3.ans}}\"/>\n    <label for=\"3\">{{quiz.quiz[this.qno].opt3.ans}}</label>\n  </p><br>\n  <p>\n    <input (click)=\"storeAnswer(quiz.quiz[this.qno].opt4.id)\" class=\"answers\" type=\"radio\" id=\"4\" name=\"ans\" value=\"{{quiz.quiz[this.qno].opt4.ans}}\"/>\n    <label for=\"4\">{{quiz.quiz[this.qno].opt4.ans}}</label>\n  </p><br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/single/single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleComponent = /** @class */ (function () {
    function SingleComponent(quiz) {
        this.quiz = quiz;
        this.qno = 0;
    }
    SingleComponent.prototype.ngOnInit = function () {
        var a = window.location.pathname;
        this.qno = parseInt(a.split('/')[1]);
        this.qno = this.qno - 1;
        this.getAnswers();
        if (this.quiz.visited.indexOf(this.qno) == -1) {
            this.quiz.visited.push(this.qno);
        }
    };
    SingleComponent.prototype.storeAnswer = function (id) {
        if (this.quiz.replies[this.qno].ans) {
            if (this.quiz.replies[this.qno].ans == id) {
                var field = document.getElementById(id);
                field.checked = false;
                this.quiz.replies[this.qno].ans = '';
                this.quiz.checkMandatory(this.qno + 1, false);
            }
        }
        if (this.quiz.answered.indexOf(this.qno) == -1) {
            this.quiz.answered.push(this.qno);
            this.quiz.checkMandatory(this.qno + 1, true);
        }
        this.quiz.replies[this.qno] = { ans: id };
    };
    SingleComponent.prototype.getAnswers = function () {
        if (this.quiz.replies[this.qno].ans) {
            var str;
            str = String(this.quiz.replies[this.qno].ans);
            var field = document.getElementById(str);
            field.checked = true;
            return true;
        }
        else {
            return false;
        }
    };
    SingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single',
            template: __webpack_require__("../../../../../src/app/single/single.component.html"),
            styles: [__webpack_require__("../../../../../src/app/single/single.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map