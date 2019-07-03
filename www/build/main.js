webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AppointmentbookPage } from '../appointmentbook/appointmentbook';

var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__["a" /* AppointmentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="false"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Appts." tabIcon="md-calendar" tabsHideOnSubPages="false"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Chats" tabIcon="md-chatboxes" tabsHideOnSubPages="false"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Account" tabIcon="md-person" tabsHideOnSubPages="false"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myfeedbacks_myfeedbacks__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_terms__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.myfeedbacks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */]);
    };
    AccountPage.prototype.blogs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__blogs_blogs__["a" /* BlogsPage */]);
    };
    AccountPage.prototype.aboutus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__["a" /* AboutusPage */]);
    };
    AccountPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__terms_terms__["a" /* TermsPage */]);
    };
    AccountPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    AccountPage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\account\account.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            My Accounts\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n    <ion-card (click)="profile()">\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Emili Williamson</h2>\n\n            <p>Complete your profile</p>\n\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <div class="">\n\n        <ion-list>\n\n            <ion-item (click)="myfeedbacks()">\n\n                <ion-icon name="md-thumbs-up" item-start class="text-danger"></ion-icon>\n\n                <span>\n\n                    Doctors Feedbacks\n\n                    <small>List of doctors Feedbacks</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <!-- <ion-item (click)="blogs()">\n\n                <ion-icon name="md-paper" item-start class="text-danger"></ion-icon>\n\n                <span>\n\n                    Health Blogs\n\n                    <small>Real articals & blogs about health & fitness</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item> -->\n\n            <!-- <ion-item (click)="aboutus()">\n\n                <ion-icon name="md-information-circle" item-start class="text-danger"></ion-icon>\n\n                <span>\n\n                    About DotoHub\n\n                    <small>Company details abput DotoHub</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item> -->\n\n            <ion-item (click)="terms()">\n\n                <ion-icon name="md-clipboard" item-start class="text-danger"></ion-icon>\n\n                <span>Terms & Condition\n\n                <small>Terms condition & privacy policy of DotoHub</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <!-- <ion-item (click)="help()">\n\n                <ion-icon name="md-mail" item-start class="text-danger"></ion-icon>\n\n                <span>Help & Support\n\n                <small>Let us know your query or any suggetions</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item> -->\n\n            <!-- <ion-item>\n\n                <ion-icon name="md-share" item-start class="text-danger"></ion-icon>\n\n                <span>Share D&C App\n\n                <small>Share App with your friends & family members</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item> -->\n\n            <!-- <ion-item (click)="setting()">\n\n                <ion-icon name="md-settings" item-start class="text-danger"></ion-icon>\n\n                <span>Setting\n\n                <small>Share App with your friends & family members</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item> -->\n\n        </ion-list>\n\n    </div>\n\n\n\n\n\n    <ion-list>\n\n\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            My Profile\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="profile-img">\n\n        <img src="assets/imgs/profile1.png">\n\n        <ion-icon name="md-camera"></ion-icon>\n\n    </div>\n\n    <ion-item-group>\n\n        <ion-item-divider>\n\n            <ion-label>Full Name</ion-label>\n\n            <ion-input type="text" value="Emili Williams" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Email ID</ion-label>\n\n            <ion-input type="text" value="Emiliwilliams@mail.com" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Gender</ion-label>\n\n            <ion-input type="text" value="Female" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Date Of Birth</ion-label>\n\n            <ion-input type="text" value="25 june 1989" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Height</ion-label>\n\n            <ion-input type="text" value="5\'11 ft" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Weight</ion-label>\n\n            <ion-input type="text" value="62 kgs(136Ibs)" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Blood Group</ion-label>\n\n            <ion-input type="text" value="A+" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <ion-label>Location</ion-label>\n\n            <ion-input type="text" value="Center Park, New York" readonly></ion-input>\n\n        </ion-item-divider>\n\n        <ion-item-divider>\n\n            <button class="btn success" full ion-button>Update Profile</button>\n\n        </ion-item-divider>\n\n    </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyfeedbacksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyfeedbacksPage = /** @class */ (function () {
    function MyfeedbacksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyfeedbacksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myfeedbacks',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\myfeedbacks\myfeedbacks.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Doctors Feedbacks\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2><span>From</span> Josephan Williamson</h2>\n\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n\n            <!-- <div class="rate">\n\n                <strong>4.5</strong>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>20 Dec 2017</span>\n\n            </div> -->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile2.png">\n\n            </ion-avatar>\n\n            <h2><span>From</span> Josephan Williamson</h2>\n\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n\n            <!-- <div class="rate">\n\n                <strong>4.5</strong>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>20 Dec 2017</span>\n\n            </div> -->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile3.png">\n\n            </ion-avatar>\n\n            <h2><span>From</span> Josephan Williamson</h2>\n\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n\n            <!-- <div class="rate">\n\n                <strong>4.5</strong>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>20 Dec 2017</span>\n\n            </div> -->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile4.png">\n\n            </ion-avatar>\n\n            <h2><span>From</span> Josephan Williamson</h2>\n\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n\n            <!-- <div class="rate">\n\n                <strong>4.5</strong>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>20 Dec 2017</span>\n\n            </div> -->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\myfeedbacks\myfeedbacks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyfeedbacksPage);
    return MyfeedbacksPage;
}());

//# sourceMappingURL=myfeedbacks.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Preferences\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="bg-white">\n\n        <p class="text-danger">Notification Settings</p>\n\n        <ion-item>\n\n            <ion-label>Appointment<small>Sound when info receive regarding appointment</small></ion-label>\n\n            <ion-toggle color="danger" checked="true"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Chat<small>Sound when info receive regarding appointment</small></ion-label>\n\n            <ion-toggle color="danger" checked="true"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Offer & updates<small>Sound when info receive regarding appointment</small></ion-label>\n\n            <ion-toggle color="danger" checked="true"></ion-toggle>\n\n        </ion-item>\n\n    </div>\n\n    <div class="bg-white">\n\n        <p class="text-danger">General</p>\n\n        <ion-item>\n\n            <ion-label>Profile Edit</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>DoctoHub Website</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Rate DoctoHub</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Are you a Doctor?</ion-label>\n\n        </ion-item>\n\n    </div>\n\n    <div class="fix-btn"><button ion-button full class="btn text-success">Logout <ion-icon name="md-log-out"></ion-icon></button></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctorprofile_doctorprofile__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctroslist_doctroslist__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatDoctorList_chatDoctorList__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myfeedbacks_myfeedbacks__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medical_medical__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FinddoctorPage } from '../finddoctor/finddoctor';




// import { AppointmentbookPage } from '../appointmentbook/appointmentbook';
// import { LabPage } from '../lab/lab';




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.location = "HomePage";
    }
    HomePage.prototype.finddoctor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatDoctorList_chatDoctorList__["a" /* ChatDoctorListPage */]);
    };
    HomePage.prototype.lab = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */]);
    };
    HomePage.prototype.medical = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__medical_medical__["a" /* MedicalPage */]);
    };
    HomePage.prototype.bookAppointment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__doctroslist_doctroslist__["a" /* DoctroslistPage */]);
        // this.navCtrl.push(AppointmentbookPage);
    };
    HomePage.prototype.nav = function (event) {
        switch (this.location) {
            case "AccountPage":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
                break;
            case "AccountPage":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
                break;
            case "DoctorprofilePage":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__doctorprofile_doctorprofile__["a" /* DoctorprofilePage */]);
                break;
            case "ProfilePage":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
                break;
            case "SettingsPag":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
                break;
            default:
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <img src="assets/imgs/header-logo.png">\n\n            <!-- <span><small margin-right>All Navigation</small>\n\n                <ion-select [(ngModel)]="location" (ionChange)="nav($event)" interface="popover" class="location">\n\n                    <small>Location</small>\n\n                    <ion-option value="ProfilePage">Profile Page</ion-option>\n\n                    <ion-option value="MyfeedbacksPage">My Feedbacks Page</ion-option>\n\n                    <ion-option value="HelpPage">Help</ion-option>\n\n                    <ion-option value="SettingsPag">Settings</ion-option>\n\n                </ion-select>\n\n            </span> -->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/home-header.png">\n\n    <div class="book-now"><button (click)="bookAppointment()" ion-button full class="btn success">Book an appointment\n\n            Now</button></div>\n\n    <div class="">\n\n        <ion-list>\n\n            <ion-item (click)="finddoctor()">\n\n                <img src="assets/imgs/ic_chatwith_doctor.png" item-start>\n\n                <span>\n\n                    Chat with doctor\n\n                    <small>Get free consultation from doctors through chats</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item (click)="lab()">\n\n                <img src="assets/imgs/ic_scan.png" item-start>\n\n                <span>\n\n                    Doctors Feedback\n\n                    <small>List of Feedbacks given to you</small>\n\n                </span>\n\n\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item (click)="medical()">\n\n                <img src="assets/imgs/ic_medicals.png" item-start>\n\n                <span>\n\n                    Call doctor or hospital\n\n                    <small>Get a quick list of doctors available near you</small>\n\n                </span>\n\n\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctroslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointmentbook_appointmentbook__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DoctorprofilePage } from '../doctorprofile/doctorprofile';

var DoctroslistPage = /** @class */ (function () {
    function DoctroslistPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "b1";
        this.category = "a1";
    }
    DoctroslistPage.prototype.map = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        modal.present();
    };
    DoctroslistPage.prototype.filter = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    DoctroslistPage.prototype.doctorprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appointmentbook_appointmentbook__["a" /* AppointmentbookPage */]);
        // this.navCtrl.push(DoctorprofilePage);
    };
    DoctroslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctroslist',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\doctroslist\doctroslist.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="location"><small>Speciality</small>\n\n            <ion-select [(ngModel)]="category" interface="popover" style="padding-left: 0;">\n\n                <ion-option value="a1">Cardiologist</ion-option>\n\n                <ion-option value="a2">Orthalmologist</ion-option>\n\n                <ion-option value="a3">Dermatologist</ion-option>\n\n            </ion-select>\n\n            </span>\n\n            <!-- <span class="location"><small margin-right>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="b1">Wallington</ion-option>\n\n                <ion-option value="b2">Nerobi</ion-option>\n\n                <ion-option value="b3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span> -->\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="filter" padding>\n\n        <ion-row>\n\n            <ion-col col-4 class="text-danger" text-left (click)="filter()">\n\n                <ion-icon name="md-funnel"></ion-icon>Filter</ion-col>\n\n            <ion-col col-4 text-center>234 result found</ion-col>\n\n            <!-- <ion-col col-4 class="text-danger" text-right (click)="map()">View in map</ion-col> -->\n\n        </ion-row>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Book</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile2.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Book</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington,New york\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile3.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Book</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington,New york\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile4.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success">Book</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington,New york\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\doctroslist\doctroslist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], DoctroslistPage);
    return DoctroslistPage;
}());

//# sourceMappingURL=doctroslist.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.location = "b1";
    }
    MapPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\map\map.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Map View\n\n            <span class="location"><small>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="b1">Wallington</ion-option>\n\n                <ion-option value="b2">Nerobi</ion-option>\n\n                <ion-option value="b3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/map.png" style="position: absolute;height: 100%;bottom: 0;z-index: -99;">\n\n\n\n    <div class="profile">\n\n        <div class="profile-img" style="top: 20%; left: 20%"><img src="assets/imgs/profile1.png"></div>\n\n        <div class="profile-img" style="top: 30%; left: 70%"><img src="assets/imgs/profile2.png"></div>\n\n        <div class="profile-img active" style="top: 42%; left: 45%"><img src="assets/imgs/profile3.png"></div>\n\n        <div class="profile-img" style="top: 40%; left: 80%"><img src="assets/imgs/profile4.png"></div>\n\n        <div class="profile-img" style="top: 70%; left: 30%"><img src="assets/imgs/profile5.png"></div>\n\n    </div>\n\n\n\n\n\n\n\n    <div class="card-container">\n\n        <ion-scroll scrollX="true" style="height:125px;white-space: nowrap;">\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile5.png">\n\n                    </ion-avatar>\n\n                    <h2>Dr. Josephan Williamson</h2>\n\n                    <p>Cardiac Surgeon</p>\n\n                    <ion-icon name="ios-information-circle-outline"></ion-icon>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    At apple hospital, Walter street, Wallington,New york\n\n                </ion-card-content>\n\n                <ion-row class="about-row">\n\n                    <ion-col col-5 center text-left>\n\n                        Exp. <strong>22 Years</strong>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        Fee <strong>$30</strong>\n\n                    </ion-col>\n\n                    <ion-col col-5 center text-right>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>&nbsp;&nbsp;(123)</span>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile5.png">\n\n                    </ion-avatar>\n\n                    <h2>Dr. Josephan Williamson</h2>\n\n                    <p>Cardiac Surgeon</p>\n\n                    <ion-icon name="ios-information-circle-outline"></ion-icon>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    At apple hospital, Walter street, Wallington,New york\n\n                </ion-card-content>\n\n                <ion-row class="about-row">\n\n                    <ion-col col-5 center text-left>\n\n                        Exp. <strong>22 Years</strong>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        Fee <strong>$30</strong>\n\n                    </ion-col>\n\n                    <ion-col col-5 center text-right>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>&nbsp;&nbsp;(123)</span>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile5.png">\n\n                    </ion-avatar>\n\n                    <h2>Dr. Josephan Williamson</h2>\n\n                    <p>Cardiac Surgeon</p>\n\n                    <ion-icon name="ios-information-circle-outline"></ion-icon>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    At apple hospital, Walter street, Wallington,New york\n\n                </ion-card-content>\n\n                <ion-row class="about-row">\n\n                    <ion-col col-5 center text-left>\n\n                        Exp. <strong>22 Years</strong>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        Fee <strong>$30</strong>\n\n                    </ion-col>\n\n                    <ion-col col-5 center text-right>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>&nbsp;&nbsp;(123)</span>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n        </ion-scroll>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\filter\filter.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Filter\n\n            <span class="location" (click)="dismiss()">Reset</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light" padding-top>\n\n    <ion-list radio-group>\n\n        <ion-list-header>\n\n            <span class="text-danger">Sort by</span>\n\n        </ion-list-header>\n\n\n\n        <ion-item>\n\n            <ion-label>Consultancy fees</ion-label>\n\n            <ion-radio checked="true" value="fee"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Rating</ion-label>\n\n            <ion-radio value="rate"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Nearer place</ion-label>\n\n            <ion-radio value="near"></ion-radio>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div></div>\n\n    <ion-list radio-group>\n\n        <ion-list-header>\n\n            <span class="text-danger">Consultancy fees</span>\n\n        </ion-list-header>\n\n\n\n        <ion-item>\n\n            <ion-label>0$ - 10 $</ion-label>\n\n            <ion-radio checked="true" value="0-10"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>11$ - 30 $</ion-label>\n\n            <ion-radio value="11-30"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>31$ - more</ion-label>\n\n            <ion-radio value="31-more"></ion-radio>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div></div>\n\n    <ion-list class="check-items" radio-group>\n\n        <ion-list-header>\n\n            <span class="text-danger">Gender</span>\n\n        </ion-list-header>\n\n        <ion-row class="bg-white">\n\n            <ion-col col-6>\n\n                <ion-item>\n\n                    <ion-label>Male</ion-label>\n\n                    <ion-radio checked="true" value="male"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-item>\n\n                    <ion-label>Female</ion-label>\n\n                    <ion-radio value="female"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n    <p style="position: relative;height: 60px"></p>\n\n    <div class="fix-btn"><button ion-button full class="btn success" (click)="dismiss()">Apply Now</button></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentdetailPage = /** @class */ (function () {
    function AppointmentdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointmentdetail',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\appointmentdetail\appointmentdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Appointment Detail\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <span class="text-danger">Cancel</span>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="md-calendar" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    <small>Appointment date & time</small>\n\n                    <strong>12 March,12:00 noon</strong>\n\n                    <span>in 3 days</span>\n\n                </ion-col>\n\n                <ion-col class="option text-success">Reschedule</ion-col>\n\n            </ion-row>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="ios-pin" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    <small>Location</small>\n\n                    <strong>At Apple Hospital,</strong>\n\n                    <span>Walter Street, Wallington, New Yoek</span>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="md-clipboard" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    <small>Appointment booked for</small>\n\n                    <strong>Email Johnson</strong>\n\n                    <span>908765435</span>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="md-information-circle" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    <small>Appointment number</small>\n\n                    <strong>66554492</strong>\n\n                    <span>Just forreference purpose</span>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <!-- <div class="fix-btn"><button ion-button full class="btn success">Get Direction</button></div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\appointmentdetail\appointmentdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentdetailPage);
    return AppointmentdetailPage;
}());

//# sourceMappingURL=appointmentdetail.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestsPage = /** @class */ (function () {
    function TestsPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    TestsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tests',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\tests\tests.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Search\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for tests"></ion-searchbar>\n\n    <ion-list>\n\n        <ion-item>\n\n            Acetoacetate<strong>40 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetoaceti Acid<strong>20 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetone<strong>10 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetylcholine Receptor<strong>23 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetylcholine Receptor Antibody<strong>15 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetylcholine Receptor Binding<strong>47 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetylcholine Receptor Blocking<strong>50 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetylcholine Modulating Antibody<strong>35 $</strong>\n\n        </ion-item>\n\n        <ion-item>\n\n            Acetylsalicylic Acide<strong>19 $</strong>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\tests\tests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], TestsPage);
    return TestsPage;
}());

//# sourceMappingURL=tests.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.login = "signin";
    }
    SigninPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.forgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    SigninPage.prototype.location = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\signin\signin.html"*/'<!--\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Sign In\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n<ion-content class="bg-light">\n\n    <div class="logo bg-white" text-center>\n\n        <img src="assets/imgs/logo.png">\n\n    </div>\n\n\n\n    <div class="defult-tab bg-white">\n\n        <ion-segment [(ngModel)]="login" padding-left padding-right>\n\n            <ion-segment-button value="signin" class="text-white">\n\n                Sign in\n\n            </ion-segment-button>\n\n            <ion-segment-button value="signup" class="text-white">\n\n                Sign up\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="login" class="difault-form bg-light" padding>\n\n        <ion-list *ngSwitchCase="\'signin\'">\n\n            <ion-item class="bg-light">\n\n                <ion-input type="number" placeholder="Email"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="password" placeholder="Password"></ion-input>\n\n                <small class="password">Forgot?</small>\n\n            </ion-item>\n\n            <small class="password" (click)="forgotpassword()">Forgot?</small>\n\n            <br>\n\n            <button ion-button full class="btn danger" (click)="location()">Sign in</button>\n\n            <!-- <ion-row class="btn-grup">\n\n                <ion-col col-6 text-center>New user?</ion-col>\n\n                <ion-col col-6><button ion-button full class="btn text-danger">Register Now</button></ion-col>\n\n            </ion-row> -->\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'signup\'">\n\n            <ion-item class="bg-light">\n\n                <ion-input type="number" placeholder="Email"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" placeholder="Full Name"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" placeholder="Password"></ion-input>\n\n            </ion-item>\n\n            <br>\n\n            <button ion-button full class="btn danger" (click)="location()">Sign up</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__readblog_readblog__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogsPage = /** @class */ (function () {
    function BlogsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BlogsPage.prototype.readblog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__readblog_readblog__["a" /* ReadblogPage */]);
    };
    BlogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blogs',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\blogs\blogs.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Health Blogs\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card (click)="readblog()">\n\n        <ion-card-content>\n\n            <img src="assets/imgs/blog-1.png">\n\n            <div class="blog-text">\n\n                <p><span class="text-danger">Dental</span>12 Dec, 18</p>\n\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n\n                <p>Dr.Sam Smith, Dentist\n\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n\n                </p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="readblog()">\n\n        <ion-card-content>\n\n            <img src="assets/imgs/blog-2.png">\n\n            <div class="blog-text">\n\n                <p><span class="text-danger">Hair Care</span>12 Dec, 18</p>\n\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n\n                <p>Dr.Sam Smith, Dentist\n\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n\n                </p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="readblog()">\n\n        <ion-card-content>\n\n            <img src="assets/imgs/blog-3.png">\n\n            <div class="blog-text">\n\n                <p><span class="text-danger">Food & Health</span>12 Dec, 18</p>\n\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n\n                <p>Dr.Sam Smith, Dentist\n\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n\n                </p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="readblog()">\n\n        <ion-card-content>\n\n            <img src="assets/imgs/blog-4.png">\n\n            <div class="blog-text">\n\n                <p><span class="text-danger">Skin Care</span>12 Dec, 18</p>\n\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n\n                <p>Dr.Sam Smith, Dentist\n\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n\n                </p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\blogs\blogs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], BlogsPage);
    return BlogsPage;
}());

//# sourceMappingURL=blogs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadblogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadblogPage = /** @class */ (function () {
    function ReadblogPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReadblogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-readblog',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\readblog\readblog.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-share" float-right class="text-white"></ion-icon>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/blog-header.png">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="blog-text">\n\n                <p><span class="text-danger">Dental</span>12 Dec, 18</p>\n\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n\n                <p>Dr.Sam Smith, Dentist</p>\n\n                <br>\n\n                <h6>In order for virtual scroll to efficiently size and locate every item, it\'s very important every element within each virtual item</h6>\n\n                <h5>10 Powerfull Winter Foods</h5>\n\n                <strong>Green Garlic</strong>\n\n                <h6>When including images within Virtual Scroll, be sure to use. In order for virtual scroll to efficiently size and locate every item, it\'s very important every element within each virtual item</h6>\n\n                <strong>Hara Chana/Fesh Green Garbanzos</strong>\n\n                <h6>In order for virtual scroll to efficiently size and locate every item, it\'s very important every element within each virtual item does not dynamically change its dimensions or location. The best way to ensure size and location does not change, it\'s recommended each virtual item has locked in its size via CSS.</h6>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\readblog\readblog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ReadblogPage);
    return ReadblogPage;
}());

//# sourceMappingURL=readblog.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\aboutus\aboutus.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            About Us\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/about.png">\n\n    <div class="text-page">\n\n        <h1 class="text-danger heading">About D&C</h1>\n\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\aboutus\aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tnc = "tc";
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\terms\terms.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Terms & Condition\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="defult-tab">\n\n        <ion-segment [(ngModel)]="tnc" padding-left padding-right>\n\n            <ion-segment-button value="tc" class="text-white">\n\n                Terms\n\n            </ion-segment-button>\n\n            <ion-segment-button value="pp" class="text-white pp">\n\n                Privacy Policy\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="tnc" class="difault-form bg-light" padding>\n\n        <ion-list *ngSwitchCase="\'tc\'">\n\n            <div class="text-page">\n\n\n\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n\n                <h1 class="text-danger heading">Terms With D&C</h1>\n\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>\n\n            </div>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'pp\'">\n\n            <div class="text-page">\n\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n\n                <h1 class="text-danger heading">Privacy Policy With D&C</h1>\n\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\terms\terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\help\help.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Help & Support\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/about.png">\n\n    <div class="difault-form bg-white" padding>\n\n        <strong class="text-danger">Let us know your issue</strong>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="Phone Number"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="Issue regarding"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-textarea type="text" placeholder="Describe your issue" style="height: 100px;"></ion-textarea>\n\n            </ion-item>\n\n            <br>\n\n            <button ion-button full class="btn success">Send Message</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatscreen_chatscreen__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatsPage.prototype.chatscreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatscreen_chatscreen__["a" /* ChatscreenPage */]);
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\chats\chats.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Chats\n\n            <ion-icon name="md-add" float-right></ion-icon>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card (click)="chatscreen()">\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <span>2 min ago</span>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="md-chatbubbles" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    Yes sure,Can you click a picture and send me?\n\n                </ion-col>\n\n                <ion-col class="option">\n\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="chatscreen()">\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <span>2 min ago</span>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="md-chatbubbles" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    Yes sure,Can you click a picture and send me?\n\n                </ion-col>\n\n                <ion-col class="option">\n\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="chatscreen()">\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <span>2 min ago</span>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <ion-row class="appot-detail">\n\n                <ion-col class="icon">\n\n                    <ion-icon name="md-chatbubbles" class="text-danger"></ion-icon>\n\n                </ion-col>\n\n                <ion-col class="detail">\n\n                    Yes sure,Can you click a picture and send me?\n\n                </ion-col>\n\n                <ion-col class="option">\n\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatscreenPage = /** @class */ (function () {
    function ChatscreenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatscreen',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\chatscreen\chatscreen.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Dr.Joseph Williamson\n\n            <ion-icon name="ios-information-circle-outline" float-right></ion-icon>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="chat-bg" style="background: url(assets/imgs/chat-bg.png);" padding>\n\n    <p class="send">Hello Doctor,<br>Tell me if it is good time to talk?<small>12:29</small></p>\n\n    <p class="receve"><img src="assets/imgs/profile1.png">Hello, How may I help you.?<br>Tell me about your problem.<small>12:29</small></p>\n\n    <p class="send">Thanks you.!<br>Actually from last 2-3days<br>I am feeling too sickness<small>12:29</small></p>\n\n    <div class="chat-input">\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="Write your message"></ion-input>\n\n        </ion-item>\n\n        <ion-icon name="attach" class="attachment"></ion-icon>\n\n        <ion-icon name="send" class="text-success"></ion-icon>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\chatscreen\chatscreen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatscreenPage);
    return ChatscreenPage;
}());

//# sourceMappingURL=chatscreen.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointmentbook_appointmentbook__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addfeedback_addfeedback__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorprofilePage = /** @class */ (function () {
    function DoctorprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.doctor = "about";
        this.Short = "n1";
    }
    DoctorprofilePage.prototype.addfeedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addfeedback_addfeedback__["a" /* AddfeedbackPage */]);
    };
    DoctorprofilePage.prototype.appointmentbook = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointmentbook_appointmentbook__["a" /* AppointmentbookPage */]);
    };
    DoctorprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctorprofile',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\doctorprofile\doctorprofile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            &nbsp;\n\n            <span>\n\n                <ion-icon name="ios-bookmark-outline" item-start></ion-icon>\n\n                <ion-icon name="md-share" item-start></ion-icon>\n\n                <ion-icon name="md-more" item-start></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/img-1-burl.png" style="width: 100%;display: block;">\n\n    <div class="doctor-detail">\n\n        <img src="assets/imgs/profile4.png">\n\n        <div>\n\n            <h2 class="text-white">Dr.Joseph Williamson</h2>\n\n            <p class="text-white">Cardiac Surgen</p>\n\n            <h3>MBBS, MCH - Cardio Therecic & Vascular Surgery, FRCS Surgery</h3>\n\n        </div>\n\n    </div>\n\n    <div class="defult-tab bg-white">\n\n        <ion-segment [(ngModel)]="doctor" padding-left padding-right>\n\n            <ion-segment-button value="about" class="text-white">\n\n                About\n\n            </ion-segment-button>\n\n            <ion-segment-button value="feedback" class="text-white">\n\n                Feedback\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="doctor" class="bg-light mb">\n\n        <ion-list *ngSwitchCase="\'about\'">\n\n            <div class="bg-white overview">\n\n                <p class="text-danger header">Overview</p>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <ion-icon name="md-medkit"></ion-icon>\n\n                            <p>Experience</p>\n\n                            <h2>18 Years</h2>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <ion-icon name="md-thumbs-up"></ion-icon>\n\n                            <p>Feedback</p>\n\n                            <h2>4.9\n\n                                <ion-icon name="md-star" class="active"></ion-icon>\n\n                                <ion-icon name="md-star" class="active"></ion-icon>\n\n                                <ion-icon name="md-star" class="active"></ion-icon>\n\n                                <ion-icon name="md-star" class="active"></ion-icon>\n\n                                <ion-icon name="md-star"></ion-icon>\n\n                                <span>(124)</span>\n\n                            </h2>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <ion-icon name="logo-usd"></ion-icon>\n\n                            <p>Consultancy fees</p>\n\n                            <h2>$28</h2>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <ion-icon name="md-time"></ion-icon>\n\n                            <p>Availability</p>\n\n                            <h2>Available at 012:00 to 13:00</h2>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div class="bg-white overview">\n\n                <p class="text-danger header">Address</p>\n\n                <p class="header"><strong>Apple Hospital, Water street, Wallington, New York. </strong></p>\n\n                <div class="map-location">\n\n                    <img src="assets/imgs/map-location.png" style="position: absolute;height: 100%;bottom: 0;z-index: 0;">\n\n                    <div class="profile-img active" style="top: 42%; left: 45%"><img src="assets/imgs/profile3.png"></div>\n\n                </div>\n\n            </div>\n\n            <div class="bg-white overview">\n\n                <p class="text-danger header">Services</p>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Hypertension Treatment</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Health Checkup (General)</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>COPD Treatment</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Fever Treatment</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Diabetes Managment</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Non Intereventional Cardiology</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>ECG</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Diabetology</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Obesity Treatment</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <br>\n\n            </div>\n\n            <div class="bg-white overview">\n\n                <p class="text-danger header">Specialization</p>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Gernal Physican</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Family Physican</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Cardiologist</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Consultant Physican</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <div>\n\n                            <img src="assets/imgs/list-icon.png">\n\n                            <h3>Diabetologist</h3>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <br>\n\n            </div>\n\n            <div class="bg-white overview practics">\n\n                <p class="text-danger header">Also Practics at</p>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <h5>Health Roots Clinics</h5>\n\n                        <p>1124, Edison Street, Willington, Newyork </p>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <h5>Appolo Hospital</h5>\n\n                        <p>JJ towers, Johnson street, Hemilton, New york.</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <br>\n\n            </div>\n\n            <div class="bg-white overview practics">\n\n                <p class="text-danger header">Available Timings</p>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <h5>Mon<span float-right>12:00 to 13:00</span></h5>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <h5>Tue<span float-right>12:00 to 13:00</span></h5>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <h5>Wed<span float-right>12:00 to 13:00</span></h5>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <h5>Thu<span float-right>12:00 to 13:00</span></h5>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <h5>Fri<span float-right>Closed</span></h5>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <h5>Sat<span float-right>12:00 to 13:00</span></h5>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <h5>Sun<span float-right>Closed</span></h5>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <br><br>\n\n            <button ion-button full class="btn success fixed" (click)="appointmentbook()"><ion-icon name="md-calendar"></ion-icon>Book Appointment now</button>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'feedback\'">\n\n\n\n            <div class="bg-white rate-over-all">\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <div class="rate">\n\n                            <span>Overall</span>\n\n                            <ion-icon name="md-star" class="active"></ion-icon>\n\n                            <ion-icon name="md-star" class="active"></ion-icon>\n\n                            <ion-icon name="md-star" class="active"></ion-icon>\n\n                            <ion-icon name="md-star" class="active"></ion-icon>\n\n                            <ion-icon name="md-star"></ion-icon>\n\n                            <span>(124)</span>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6 style="padding-right: 0;">\n\n                        <div class="rate">\n\n                            <span>Short By</span>\n\n                            <ion-select [(ngModel)]="Short" interface="popover" class="location">\n\n                                <ion-option value="n1">Recent</ion-option>\n\n                                <ion-option value="n2">Oldest</ion-option>\n\n                            </ion-select>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile1.png">\n\n                    </ion-avatar>\n\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n\n                    <div class="rate">\n\n                        <strong>4.5</strong>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>20 Dec 2017</span>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile1.png">\n\n                    </ion-avatar>\n\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n\n                    <div class="rate">\n\n                        <strong>4.5</strong>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>20 Dec 2017</span>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile1.png">\n\n                    </ion-avatar>\n\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n\n                    <div class="rate">\n\n                        <strong>4.5</strong>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>20 Dec 2017</span>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile1.png">\n\n                    </ion-avatar>\n\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n\n                    <div class="rate">\n\n                        <strong>4.5</strong>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star" class="active"></ion-icon>\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                        <span>20 Dec 2017</span>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n\n                </ion-card-content>\n\n            </ion-card><br><br>\n\n            <button ion-button full class="btn success fixed" (click)="addfeedback()"><ion-icon name="md-thumbs-up"></ion-icon>Give Feedback</button>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\doctorprofile\doctorprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DoctorprofilePage);
    return DoctorprofilePage;
}());

//# sourceMappingURL=doctorprofile.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatwithdoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatwithdoctorPage = /** @class */ (function () {
    function ChatwithdoctorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.Treatment = "v1";
    }
    ChatwithdoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatwithdoctor',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\chatwithdoctor\chatwithdoctor.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Ask doctor\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p padding-left padding-right><strong>Describe your issue</strong></p>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Treatment Type</ion-label>\n\n            <ion-select [(ngModel)]="Treatment" interface="popover">\n\n                <ion-option value="v1">Bones & Join Problem</ion-option>\n\n                <ion-option value="v2">Blood Presser Problem</ion-option>\n\n                <ion-option value="v3">Skin Problem</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Title</ion-label>\n\n            <ion-input type="text" placeholder="Tap to add title (100 words)"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-textarea type="text" placeholder="Describe your issue (300 words)"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label for="file">File attachment (optional)<span class="text-success" float-right>Upload file</span></ion-label>\n\n            <ion-input type="file" placeholder="Upload file" id="file"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <p text-center>Usually our doctor reply in 5-10 minutes</p>\n\n\n\n    <button ion-button full class="btn success fixed">Submit Question</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\chatwithdoctor\chatwithdoctor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatwithdoctorPage);
    return ChatwithdoctorPage;
}());

//# sourceMappingURL=chatwithdoctor.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddfeedbackPage = /** @class */ (function () {
    function AddfeedbackPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddfeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addfeedback',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\addfeedback\addfeedback.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Give Feedback\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="feedback" padding>\n\n        <p>Overall experience With Doctor</p>\n\n        <h3>\n\n            <ion-icon name="md-star"></ion-icon>\n\n            <ion-icon name="md-star"></ion-icon>\n\n            <ion-icon name="md-star"></ion-icon>\n\n            <ion-icon name="md-star"></ion-icon>\n\n            <ion-icon name="md-star"></ion-icon>\n\n        </h3>\n\n    </div>\n\n    <div class="feedback difault-form" padding>\n\n        <p>Visited Docotor for...</p>\n\n        <ion-item>\n\n            <ion-input type="text" placeholder="eg. Hear pain, Body Ache etc. "></ion-input>\n\n        </ion-item>\n\n    </div>\n\n    <div class="feedback difault-form" padding>\n\n        <p>How was your experiece?</p>\n\n        <ion-item>\n\n            <ion-textarea type="text" placeholder="Wright your experiece" style="min-height: 100px;"></ion-textarea>\n\n        </ion-item>\n\n    </div>\n\n    <br>\n\n    <button ion-button full class="btn success fixed">Submit Feedbback</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\addfeedback\addfeedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddfeedbackPage);
    return AddfeedbackPage;
}());

//# sourceMappingURL=addfeedback.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDoctorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointmentbook_appointmentbook__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DoctorprofilePage } from '../doctorprofile/doctorprofile';

var ChatDoctorListPage = /** @class */ (function () {
    function ChatDoctorListPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "b1";
        this.category = "a1";
    }
    ChatDoctorListPage.prototype.map = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        modal.present();
    };
    ChatDoctorListPage.prototype.filter = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    ChatDoctorListPage.prototype.doctorprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appointmentbook_appointmentbook__["a" /* AppointmentbookPage */]);
        // this.navCtrl.push(DoctorprofilePage);
    };
    ChatDoctorListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatDoctroslist',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\chatDoctorList\chatDoctorList.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="location"><small>Speciality</small>\n\n            <ion-select [(ngModel)]="category" interface="popover" style="padding-left: 0;">\n\n                <ion-option value="a1">Cardiologist</ion-option>\n\n                <ion-option value="a2">Orthalmologist</ion-option>\n\n                <ion-option value="a3">Dermatologist</ion-option>\n\n            </ion-select>\n\n            </span>\n\n            <!-- <span class="location"><small margin-right>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="b1">Wallington</ion-option>\n\n                <ion-option value="b2">Nerobi</ion-option>\n\n                <ion-option value="b3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span> -->\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="filter" padding>\n\n        <ion-row>\n\n            <ion-col col-4 class="text-danger" text-left (click)="filter()">\n\n                <ion-icon name="md-funnel"></ion-icon>Filter</ion-col>\n\n            <ion-col col-4 text-center>234 result found</ion-col>\n\n            <!-- <ion-col col-4 class="text-danger" text-right (click)="map()">View in map</ion-col> -->\n\n        </ion-row>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Chat</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile2.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Chat</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington,New york\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile3.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Chat</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington,New york\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile4.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success">Chat</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington,New york\n\n            <!-- <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n                <img src="assets/imgs/img-1.png">\n\n                <img src="assets/imgs/img-2.png">\n\n                <img src="assets/imgs/img-3.png">\n\n                <img src="assets/imgs/img-4.png">\n\n                <img src="assets/imgs/img-5.png">\n\n            </ion-scroll> -->\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\chatDoctorList\chatDoctorList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ChatDoctorListPage);
    return ChatDoctorListPage;
}());

//# sourceMappingURL=chatDoctorList.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicalmap_medicalmap__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MedicaldetailPage } from '../medicaldetail/medicaldetail';
var MedicalPage = /** @class */ (function () {
    function MedicalPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "n1";
    }
    MedicalPage.prototype.medicalmap = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medicalmap_medicalmap__["a" /* MedicalmapPage */]);
        modal.present();
    };
    MedicalPage.prototype.medicaldetail = function () {
        // this.navCtrl.push(MedicaldetailPage);
        alert("Calling 9922533180");
    };
    MedicalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medical',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\medical\medical.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Doctors and Hospital\n\n            <!-- <span><small margin-right>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="n1">Wallington</ion-option>\n\n                <ion-option value="n2">Nerobi</ion-option>\n\n                <ion-option value="n3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span> -->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <!-- <p class="text-danger bg-white heading" padding (click)="medicalmap()">View in map\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </p> -->\n\n    <ion-card>\n\n        <ion-item (click)="medicaldetail()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/medical-1.png">\n\n            </ion-avatar>\n\n            <h2>Johnson </h2>\n\n            <p>251 Erena street, NY 11102, USA</p>\n\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item (click)="medicaldetail()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/medical-2.png">\n\n            </ion-avatar>\n\n            <h2>Johnson </h2>\n\n            <p>251 Erena street, NY 11102, USA</p>\n\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item (click)="medicaldetail()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/medical-3.png">\n\n            </ion-avatar>\n\n            <h2>Johnson </h2>\n\n            <p>251 Erena street, NY 11102, USA</p>\n\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item (click)="medicaldetail()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/medical-4.png">\n\n            </ion-avatar>\n\n            <h2>Johnson </h2>\n\n            <p>251 Erena street, NY 11102, USA</p>\n\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\medical\medical.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MedicalPage);
    return MedicalPage;
}());

//# sourceMappingURL=medical.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicaldetail_medicaldetail__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicalmapPage = /** @class */ (function () {
    function MedicalmapPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.location = "b1";
    }
    MedicalmapPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicalmapPage.prototype.medicaldetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medicaldetail_medicaldetail__["a" /* MedicaldetailPage */]);
    };
    MedicalmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicalmap',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\medicalmap\medicalmap.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Map View\n\n            <span class="location"><small>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="b1">Wallington</ion-option>\n\n                <ion-option value="b2">Nerobi</ion-option>\n\n                <ion-option value="b3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/map.png" style="position: absolute;height: 100%;bottom: 0;z-index: -99;">\n\n\n\n    <div class="location-point">\n\n        <ion-icon name="pin" class="text-danger" style="top: 20%; left: 20%"></ion-icon>\n\n        <ion-icon name="pin" class="text-danger" style="top: 40%; left: 70%"></ion-icon>\n\n        <ion-icon name="pin" class="text-danger" style="top: 60%; left: 10%"></ion-icon>\n\n        <ion-icon name="pin" class="text-danger" style="top: 45%; left: 85%"></ion-icon>\n\n        <ion-icon name="pin" class="text-success" style="top: 50%; left: 20%"></ion-icon>\n\n    </div>\n\n\n\n\n\n\n\n    <div class="card-container">\n\n        <ion-scroll scrollX="true" style="height:110px;white-space: nowrap;">\n\n            <ion-card>\n\n                <ion-item (click)="medicaldetail()" (click)="dismiss()">\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/medical-1.png">\n\n                    </ion-avatar>\n\n                    <h2>Johnson Medical Store</h2>\n\n                    <p>251 Erena street, NY 11102, USA</p>\n\n                    <h6 class="text-success">Open 07:00 to 22:00 </h6>\n\n                </ion-item>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item (click)="medicaldetail()" (click)="dismiss()">\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/medical-1.png">\n\n                    </ion-avatar>\n\n                    <h2>Johnson Medical Store</h2>\n\n                    <p>251 Erena street, NY 11102, USA</p>\n\n                    <h6 class="text-success">Open 07:00 to 22:00 </h6>\n\n                </ion-item>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item (click)="medicaldetail()" (click)="dismiss()">\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/medical-1.png">\n\n                    </ion-avatar>\n\n                    <h2>Johnson Medical Store</h2>\n\n                    <p>251 Erena street, NY 11102, USA</p>\n\n                    <h6 class="text-success">Open 07:00 to 22:00 </h6>\n\n                </ion-item>\n\n            </ion-card>\n\n        </ion-scroll>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\medicalmap\medicalmap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], MedicalmapPage);
    return MedicalmapPage;
}());

//# sourceMappingURL=medicalmap.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicaldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicaldetailPage = /** @class */ (function () {
    function MedicaldetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MedicaldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicaldetail',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\medicaldetail\medicaldetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Medical Shop\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-list>\n\n        <ion-card>\n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                    <img src="assets/imgs/medical-1.png">\n\n                </ion-avatar>\n\n                <h2>Johnson Medical Store</h2>\n\n                <p>251 Erena street, NY 11102, USA</p>\n\n                <h6 class="text-danger">Open Now<span>08:00 to 22:00</span></h6>\n\n            </ion-item>\n\n        </ion-card>\n\n        <div class="bg-white overview">\n\n            <p class="text-danger header">Address<strong float-right class="text-success">Get Direction</strong></p>\n\n            <p class="header"><strong>251 Erena street, NY 11102, USA</strong></p>\n\n            <div class="map-location">\n\n                <ion-icon name="ios-pin" class="text-danger" style="top: 42%; left: 45%"></ion-icon>\n\n                <img src="assets/imgs/map-location.png" style="position: absolute;height: 100%;bottom: 0;z-index: 0;width: 100%;">\n\n            </div>\n\n        </div>\n\n        <div class="bg-white overview">\n\n            <p class="text-danger header">Facilities</p>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Parking not available</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>E-Reports available</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Card accepted</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Prescriprion Pick up available</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Report doorstep drop available</h3>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n            <br>\n\n        </div>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <div padding class="fixed">\n\n        <ion-row>\n\n            <ion-col col-6><button ion-button full class="btn text-danger">Message</button></ion-col>\n\n            <ion-col col-6><button ion-button full class="btn success">CallNow</button></ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\medicaldetail\medicaldetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MedicaldetailPage);
    return MedicaldetailPage;
}());

//# sourceMappingURL=medicaldetail.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentPage.prototype.appointmentdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */]);
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\appointment\appointment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            My Appointment\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="heading">Upcoming Appointments</p>\n\n    <ion-list class="doctor-list">\n\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n\n            <ion-col text-center class="date">\n\n                <small>WED</small>\n\n                <strong class="text-danger">12</strong>\n\n                <small>12:00</small>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-card>\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/profile1.png">\n\n                        </ion-avatar>\n\n                        <h2>Dr. Josephan Williamson</h2>\n\n                        <p>Cardiac Surgeon</p>\n\n                        <ion-icon name="md-more"></ion-icon>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        At apple hospital, Walter street, Wallington\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n\n            <ion-col text-center class="date">\n\n                <small>WED</small>\n\n                <strong class="text-danger">12</strong>\n\n                <small>12:00</small>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-card>\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/profile1.png">\n\n                        </ion-avatar>\n\n                        <h2>Dr. Josephan Williamson</h2>\n\n                        <p>Cardiac Surgeon</p>\n\n                        <ion-icon name="md-more"></ion-icon>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        At apple hospital, Walter street, Wallington\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n    <p class="heading">Past Appointments</p>\n\n    <ion-list class="doctor-list">\n\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n\n            <ion-col text-center class="date">\n\n                <small>WED</small>\n\n                <strong class="text-danger">12</strong>\n\n                <small>12:00</small>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-card>\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/profile1.png">\n\n                        </ion-avatar>\n\n                        <h2>Dr. Josephan Williamson</h2>\n\n                        <p>Cardiac Surgeon</p>\n\n                        <ion-icon name="md-more"></ion-icon>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        At apple hospital, Walter street, Wallington\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n\n            <ion-col text-center class="date">\n\n                <small>WED</small>\n\n                <strong class="text-danger">12</strong>\n\n                <small>12:00</small>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-card>\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/profile1.png">\n\n                        </ion-avatar>\n\n                        <h2>Dr. Josephan Williamson</h2>\n\n                        <p>Cardiac Surgeon</p>\n\n                        <ion-icon name="md-more"></ion-icon>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        At apple hospital, Walter street, Wallington\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\appointment\appointment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\forgotpassword\forgotpassword.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Forgot Password?\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="bg-white" padding text-center>\n\n        <br>\n\n        <p style="margin-bottom: 2rem"><strong class="text-danger">Don\'t worry, it will take less than 1 min.</strong></p>\n\n        <p>Enter your 10 digit phone number, <br>We\'ll send you intruction on sms how to<br>reset password.</p>\n\n        <br>\n\n    </div>\n\n    <div class="difault-form bg-light" padding>\n\n        <ion-list>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="number" placeholder="Add your phone number"></ion-input>\n\n            </ion-item>\n\n            <br>\n\n            <button ion-button full class="btn danger">Submit</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\forgotpassword\forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctroslist_doctroslist__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecilitiesPage = /** @class */ (function () {
    function SpecilitiesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.location = "n1";
    }
    SpecilitiesPage.prototype.doctroslist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__doctroslist_doctroslist__["a" /* DoctroslistPage */]);
    };
    SpecilitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specilities',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\specilities\specilities.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Find Doctor\n\n            <span><small margin-right>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="n1">Wallington</ion-option>\n\n                <ion-option value="n2">Nerobi</ion-option>\n\n                <ion-option value="n3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Doctor, specialities, clinic"></ion-searchbar>\n\n    <div class="bg-white">\n\n        <p class="text-danger">Top Specialities</p>\n\n        <ion-list>\n\n            <ion-item (click)="doctroslist()">\n\n                Cardiologist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Orthalmologist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Dermatologist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Gynecologist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Neonatologist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n    <div class="bg-white">\n\n        <p class="text-danger">List of Specialities</p>\n\n        <ion-list>\n\n            <ion-item>\n\n                Addiction Psychiatrist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Adolescent medicine Specialities\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Allegrist (immunologist)\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Addiction Psychiatrist\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Adolescent medicine Specialities\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                Allegrist (immunologist)\n\n                <span float-right>234</span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\specilities\specilities.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SpecilitiesPage);
    return SpecilitiesPage;
}());

//# sourceMappingURL=specilities.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_tests__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabdetailsPage = /** @class */ (function () {
    function LabdetailsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    LabdetailsPage.prototype.tests = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__tests_tests__["a" /* TestsPage */]);
        modal.present();
    };
    LabdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-labdetails',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\labdetails\labdetails.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Lab Info\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-list>\n\n        <ion-card>\n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                    <img src="assets/imgs/lab-1.png">\n\n                </ion-avatar>\n\n                <h2>Enzo Clinical Labs-Astoria</h2>\n\n                <p>251 Erena street, NY 11102, USA</p>\n\n                <h6 class="text-danger">Timing<span>08:00 to 22:00</span></h6>\n\n            </ion-item>\n\n        </ion-card>\n\n        <ion-searchbar (ionInput)="getItems($event)" (click)="tests()" placeholder="Search for tests"></ion-searchbar>\n\n        <div class="bg-white overview">\n\n            <p class="text-danger header">Address<strong float-right class="text-success">Get Direction</strong></p>\n\n            <p class="header"><strong>251 Erena street, NY 11102, USA</strong></p>\n\n            <div class="map-location">\n\n                <ion-icon name="ios-pin" class="text-danger" style="top: 42%; left: 45%"></ion-icon>\n\n                <img src="assets/imgs/map-location.png" style="position: absolute;height: 100%;bottom: 0;z-index: 0;width: 100%;">\n\n            </div>\n\n        </div>\n\n        <div class="bg-white overview">\n\n            <p class="text-danger header">Facilities</p>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Parking not available</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>E-Reports available</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Card accepted</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Prescriprion Pick up available</h3>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-12>\n\n                    <div>\n\n                        <img src="assets/imgs/list-icon.png">\n\n                        <h3>Report doorstep drop available</h3>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n            <br>\n\n        </div>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <div padding class="fixed">\n\n        <ion-row>\n\n            <ion-col col-6><button ion-button full class="btn text-danger">Message</button></ion-col>\n\n            <ion-col col-6><button ion-button full class="btn success">CallNow</button></ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\labdetails\labdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], LabdetailsPage);
    return LabdetailsPage;
}());

//# sourceMappingURL=labdetails.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appts_appts__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgotpassword_forgotpassword__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_location_location__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_finddoctor_finddoctor__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_specilities_specilities__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_doctroslist_doctroslist__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chatDoctorList_chatDoctorList__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_map_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_filter_filter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_doctorprofile_doctorprofile__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_feedback_feedback__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_appointment_appointment__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_appointmentbook_appointmentbook__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addfeedback_addfeedback__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chatwithdoctor_chatwithdoctor__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_lab_lab__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_labdetails_labdetails__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tests_tests__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_medical_medical__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_medicalmap_medicalmap__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_medicaldetail_medicaldetail__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_appointmentdetail_appointmentdetail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chatscreen_chatscreen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_myfeedbacks_myfeedbacks__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_blogs_blogs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_readblog_readblog__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_help_help__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appts_appts__["a" /* ApptsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_finddoctor_finddoctor__["a" /* FinddoctorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_specilities_specilities__["a" /* SpecilitiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doctroslist_doctroslist__["a" /* DoctroslistPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointmentbook_appointmentbook__["a" /* AppointmentbookPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_doctorprofile_doctorprofile__["a" /* DoctorprofilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addfeedback_addfeedback__["a" /* AddfeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_lab_lab__["a" /* LabPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_labdetails_labdetails__["a" /* LabdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tests_tests__["a" /* TestsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_medical_medical__["a" /* MedicalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_medicalmap_medicalmap__["a" /* MedicalmapPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_medicaldetail_medicaldetail__["a" /* MedicaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chatscreen_chatscreen__["a" /* ChatscreenPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_readblog_readblog__["a" /* ReadblogPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatDoctorList_chatDoctorList__["a" /* ChatDoctorListPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appts_appts__["a" /* ApptsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_finddoctor_finddoctor__["a" /* FinddoctorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_specilities_specilities__["a" /* SpecilitiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doctroslist_doctroslist__["a" /* DoctroslistPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointmentbook_appointmentbook__["a" /* AppointmentbookPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatDoctorList_chatDoctorList__["a" /* ChatDoctorListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_doctorprofile_doctorprofile__["a" /* DoctorprofilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addfeedback_addfeedback__["a" /* AddfeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_lab_lab__["a" /* LabPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_labdetails_labdetails__["a" /* LabdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tests_tests__["a" /* TestsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_medical_medical__["a" /* MedicalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_medicalmap_medicalmap__["a" /* MedicalmapPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_medicaldetail_medicaldetail__["a" /* MedicaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chatscreen_chatscreen__["a" /* ChatscreenPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_readblog_readblog__["a" /* ReadblogPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';

//import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
//import { LocationPage } from '../pages/location/location';
//import { FinddoctorPage } from '../pages/finddoctor/finddoctor';
//import { SpecilitiesPage } from '../pages/specilities/specilities';
//import { DoctroslistPage } from '../pages/doctroslist/doctroslist';
//import { MapPage } from '../pages/map/map';
//import { FilterPage } from '../pages/filter/filter';
//import { DoctorprofilePage } from '../pages/doctorprofile/doctorprofile';
//import { FeedbackPage } from '../pages/feedback/feedback';
//import { AppointmentPage } from '../pages/appointment/appointment';
//import { AppointmentbookPage } from '../pages/appointmentbook/appointmentbook';
//import { AddfeedbackPage } from '../pages/addfeedback/addfeedback';
//import { ChatwithdoctorPage } from '../pages/chatwithdoctor/chatwithdoctor';
//import { LabPage } from '../pages/lab/lab';
//import { LabdetailsPage } from '../pages/labdetails/labdetails';
//import { TestsPage } from '../pages/tests/tests';
//import { MedicalPage } from '../pages/medical/medical';
//import { MedicalmapPage } from '../pages/medicalmap/medicalmap';
//import { MedicaldetailPage } from '../pages/medicaldetail/medicaldetail';
//import { AppointmentdetailPage } from '../pages/appointmentdetail/appointmentdetail';
//import { ChatscreenPage } from '../pages/chatscreen/chatscreen';
//import { ProfilePage } from '../pages/profile/profile';
//import { MyfeedbacksPage } from '../pages/myfeedbacks/myfeedbacks';
//import { BlogsPage } from '../pages/blogs/blogs';
//import { ReadblogPage } from '../pages/readblog/readblog';
//import { AboutusPage } from '../pages/aboutus/aboutus';
//import { TermsPage } from '../pages/terms/terms';
//import { HelpPage } from '../pages/help/help';
//import { SettingsPage } from '../pages/settings/settings';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\doctor-appointment\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApptsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApptsPage = /** @class */ (function () {
    function ApptsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ApptsPage.prototype.appointmentdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */]);
    };
    ApptsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appts',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\appts\appts.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            My Appointments\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item (click)="appointmentdetail()">\n\n            <h2>Dr.Joseph Williamson</h2>\n\n            <small>Complete your profile</small>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\appts\appts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ApptsPage);
    return ApptsPage;
}());

//# sourceMappingURL=appts.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationPage = /** @class */ (function () {
    function LocationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LocationPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\location\location.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-search" padding-left padding-right></ion-icon>\n\n            Search Location\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-item (click)="tabs()">\n\n        Select current location\n\n        <ion-icon name="md-locate" item-end></ion-icon>\n\n    </ion-item>\n\n    <div class="my-map">\n\n        <img src="assets/imgs/map.png" style="position: absolute;height: calc(100% - 50px);bottom: 0;">\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinddoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specilities_specilities__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinddoctorPage = /** @class */ (function () {
    function FinddoctorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.location = "n1";
    }
    FinddoctorPage.prototype.specilities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__specilities_specilities__["a" /* SpecilitiesPage */]);
    };
    FinddoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finddoctor',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\finddoctor\finddoctor.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Find Doctor\n\n            <span><small  margin-right>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="n1">Wallington</ion-option>\n\n                <ion-option value="n2">Nerobi</ion-option>\n\n                <ion-option value="n3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Doctor, specialities, clinic"></ion-searchbar>\n\n\n\n    <!-- <div class="recent-search bg-white">\n\n        <p class="text-danger">Recent Search<span float-right class="text-success">Clear History</span></p>\n\n        <ion-list>\n\n            <ion-item>\n\n                <img src="assets/imgs/recent.png" item-start>\n\n                <span>\n\n                    Cardiologist\n\n                </span>\n\n            </ion-item>\n\n            <ion-item>\n\n                <img src="assets/imgs/recent.png" item-start>\n\n                <span>\n\n                    Cardiovascular surgeon\n\n                </span>\n\n\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n                <img src="assets/imgs/recent.png" item-start>\n\n                <span>\n\n                    Appolo hospital\n\n                </span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div> -->\n\n\n\n    <div class="quick-link bg-white">\n\n        <p class="text-danger">Quick Links</p>\n\n        <ion-list>\n\n            <ion-item (click)="specilities()">\n\n                <img src="assets/imgs/ic_doctors.png" item-start>\n\n                <span>\n\n                    Doctor\n\n                    <small>Allergist, Cardiologists, Dermatologiest</small>\n\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <img src="assets/imgs/ic_dentist.png" item-start>\n\n                <span>\n\n                    Dentist\n\n                    <small>Dentists, Prosthodonitions etc.</small>\n\n                </span>\n\n\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <img src="assets/imgs/ic_ayurvedic.png" item-start>\n\n                <span>\n\n                    Dentist\n\n                    <small>Ayurveda experties, Homeoprthi, etc </small>\n\n                </span>\n\n\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <img src="assets/imgs/ic_therapist.png" item-start>\n\n                <span>\n\n                    Therapst & Nutritionists\n\n                    <small>Acupunturist, Physiotherapist, etc</small>\n\n                </span>\n\n\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\finddoctor\finddoctor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FinddoctorPage);
    return FinddoctorPage;
}());

//# sourceMappingURL=finddoctor.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\feedback\feedback.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Doctor Profile Feedback\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <button ion-button clear class="btn success">Book</button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            At apple hospital, Walter street, Wallington\n\n            <div class="img-container">\n\n                <div class="imges-row">\n\n                    <img src="assets/imgs/img-1.png">\n\n                    <img src="assets/imgs/img-2.png">\n\n                    <img src="assets/imgs/img-3.png">\n\n                    <img src="assets/imgs/img-4.png">\n\n                    <img src="assets/imgs/img-5.png">\n\n                </div>\n\n            </div>\n\n        </ion-card-content>\n\n        <ion-row class="about-row">\n\n            <ion-col col-5 center text-left>\n\n                Experience <strong>22 Years</strong>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                Fee <strong>$30</strong>\n\n            </ion-col>\n\n            <ion-col col-5 center text-right>\n\n                Feedback\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star" class="active"></ion-icon>\n\n                <ion-icon name="md-star"></ion-icon>\n\n                <span>&nbsp;&nbsp;(123)</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labdetails_labdetails__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tests_tests__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LabPage = /** @class */ (function () {
    function LabPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "n1";
    }
    LabPage.prototype.labdetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__labdetails_labdetails__["a" /* LabdetailsPage */]);
    };
    LabPage.prototype.tests = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__tests_tests__["a" /* TestsPage */]);
        modal.present();
    };
    LabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lab',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\lab\lab.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Lab & Test\n\n            <span><small margin-right>Location</small>\n\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n\n                <ion-option value="n1">Wallington</ion-option>\n\n                <ion-option value="n2">Nerobi</ion-option>\n\n                <ion-option value="n3">Central Park</ion-option>\n\n              </ion-select>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-searchbar (ionInput)="getItems($event)" (click)="tests()" placeholder="Search for tests"></ion-searchbar>\n\n\n\n    <ion-card>\n\n        <ion-item (click)="labdetails()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/lab-1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item (click)="labdetails()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/lab-2.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item (click)="labdetails()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/lab-3.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item (click)="labdetails()">\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/lab-4.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\lab\lab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], LabPage);
    return LabPage;
}());

//# sourceMappingURL=lab.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentbookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatwithdoctor_chatwithdoctor__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentbookPage = /** @class */ (function () {
    function AppointmentbookPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentbookPage.prototype.chatwithdoctor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */]);
    };
    AppointmentbookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointmentbook',template:/*ion-inline-start:"C:\dev\doctor-appointment\src\pages\appointmentbook\appointmentbook.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Select Date & Time\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/profile1.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Josephan Williamson</h2>\n\n            <p>Cardiac Surgeon</p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="calender-container">\n\n        <div class="calander">\n\n            <div class="calander-row">\n\n                <div class="day active"><span>MON</span>12</div>\n\n                <div class="day"><span>TUE</span>13</div>\n\n                <div class="day"><span>WED</span>14</div>\n\n                <div class="day"><span>THU</span>15</div>\n\n                <div class="day"><span>FRI</span>16</div>\n\n                <div class="day"><span>SAT</span>17</div>\n\n                <div class="day"><span>SUN</span>18</div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class="icon-calander">\n\n        <ion-icon name="md-calendar" class="text-success"></ion-icon>\n\n    </div>\n\n    <div padding>\n\n        <p>Available Times</p>\n\n        <div class="timeing">\n\n            <ion-row>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n\n            </ion-row>\n\n        </div>\n\n        <p>Appointment for...</p>\n\n        <div class="difault-form">\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" placeholder="Full Name"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" placeholder="Address"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" placeholder="Phone Number"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Illness</ion-label>\n\n                <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancel" okText="Save">\n\n                    <ion-option value="bacon" selected="true">Bacon</ion-option>\n\n                    <ion-option value="olives">Black Olives</ion-option>\n\n                    <ion-option value="xcheese" selected="true">Extra Cheese</ion-option>\n\n                    <ion-option value="peppers">Green Peppers</ion-option>\n\n                    <ion-option value="mushrooms">Mushrooms</ion-option>\n\n                    <ion-option value="onions">Onions</ion-option>\n\n                    <ion-option value="pepperoni">Pepperoni</ion-option>\n\n                    <ion-option value="pineapple">Pineapple</ion-option>\n\n                    <ion-option value="sausage">Sausage</ion-option>\n\n                    <ion-option value="Spinach">Spinach</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" placeholder="Message to Doctor"></ion-input>\n\n            </ion-item>\n\n            <br>\n\n            <button ion-button full class="btn success fixed">Confirm Appointment</button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\dev\doctor-appointment\src\pages\appointmentbook\appointmentbook.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentbookPage);
    return AppointmentbookPage;
}());

//# sourceMappingURL=appointmentbook.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map