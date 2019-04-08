webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressService = /** @class */ (function () {
    function AddressService(http, authservice) {
        this.http = http;
        this.authservice = authservice;
    }
    AddressService.prototype.save = function (address) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/addresses?access_token=' + this.authservice.getToken(), address);
    };
    AddressService.prototype.getUserAddresses = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/addresses/getByUserId/' + userId + '?access_token=' + this.authservice.getToken());
    };
    AddressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__["a" /* AuthServerProvider */]])
    ], AddressService);
    return AddressService;
}());

//# sourceMappingURL=address.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_order_popover_add_order_popover__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_settings_windowRef__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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













//import { Printer, PrintOptions } from '@ionic-native/printer';
/**
 * Generated class for the AddOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddOrderPage = /** @class */ (function () {
    function AddOrderPage(navCtrl, navParams, poverCtrl, modalController, toastCtrl, translateService, loading, platform, builder, windowRef, user, app, principal, orderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poverCtrl = poverCtrl;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loading = loading;
        this.platform = platform;
        this.builder = builder;
        this.windowRef = windowRef;
        this.user = user;
        this.app = app;
        this.principal = principal;
        this.orderService = orderService;
        this.account = null;
        this.formsValid = false;
        this.userList = [];
        // public forms = [];
        this.orderString = '';
        this.ordersArray = [];
        // public cities = [
        //   {
        //     name:"dddd",
        //     id:1
        //   },
        //   {
        //     name:"hhh",
        //     id:2
        //   }
        // ]
        this.order = {
            userId: null,
            orders: ['']
        };
        this.alex = 'Alexandria';
        this.address = null;
        this.language = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].direction;
        this.alexValue = '';
        this.cairoValue = '';
        this.tantaValue = '';
        this.shibinValue = '';
        this.daminhoorValue = '';
        this.banhaValue = '';
        this.order1 = {
            name: '',
            address: '',
            secondAddress: '',
            firstPhone: '',
            secondPhone: ''
        };
        this.print = false;
        console.log('con');
        this.address = this.navParams.get("address");
        this.translateService.get(['ADD_ORDER_ERROR', 'ADD_ORDER_SUCCESS', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM', 'BANHA', 'PLEASE_WAIT']).subscribe(function (values) {
            console.log(values);
            _this.addORDERError = values.ADD_ORDER_ERROR;
            _this.addORDERSuccessString = values.ADD_ORDER_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.alexValue = values.ALEX;
            _this.cairoValue = values.CAIRO;
            _this.daminhoorValue = values.DAMNHOR;
            _this.tantaValue = values.TANTA;
            _this.shibinValue = values.SHIPIN_ELKOM;
            _this.banhaValue = values.BANHA;
        });
        this.myForm = builder.group({
            //'userId':['', [Validators.required ]],
            'name': ['', []],
            'phone': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("(01)[0-9]{9}")]],
            'secondPhone': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("(01)[0-9]{9}")]],
            'address1': ['', []],
            'address2': ['', []],
            'city': ["'Alexandria'", []],
            //"order": ['', [Validators.required, Validators.maxLength(45)]],
            "fromAddress": ['', []]
        });
        this.myForm.get('city').setValue('Alexandria');
        this.myForm.get('city').updateValueAndValidity();
        this.myForm.get('city').markAsDirty();
        this.myForm.get('city').markAsTouched();
        this.myForm.get('city').markAsPristine();
        console.log(this.myForm.get('city').dirty);
        this.platform.registerBackButtonAction(function () {
            if (_this.userType == 'User') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
            }
        });
        // let form = builder.group({
        //   "order":['',[Validators.required , Validators.maxLength(45)]]
        // });
        // this.forms.push(form);
        //this.getAllUsers();
    }
    AddOrderPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            load.dismiss();
            if (account === null || (account.authorities[0] != 'ROLE_AGENCY' && account.authorities[0] != 'ROLE_USER')) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_7__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                _this.userType = "Agency";
                _this.account = account;
                _this.myForm.get("address1").clearValidators();
                _this.myForm.get("address1").setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)]);
                _this.myForm.get("address1").updateValueAndValidity();
                _this.myForm.get("address2").clearValidators();
                _this.myForm.get("address2").setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)]);
                _this.myForm.get("address2").updateValueAndValidity();
                _this.myForm.get("name").clearValidators();
                _this.myForm.get("name").setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]);
                _this.myForm.get("name").updateValueAndValidity();
                _this.myForm.get("city").clearValidators();
                _this.myForm.get("city").setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]);
                _this.myForm.get("city").updateValueAndValidity();
            }
            else if (account.authorities[0] == 'ROLE_USER') {
                _this.myForm.get("fromAddress").clearValidators();
                _this.myForm.get("fromAddress").setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)]);
                _this.myForm.get("fromAddress").updateValueAndValidity();
                _this.userType = "User";
                _this.account = account;
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    AddOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddOrderPage');
    };
    AddOrderPage.prototype.getAllUsers = function () {
        var _this = this;
        this.user.findAll().subscribe(function (res) {
            console.log(res, "res");
            _this.userList = res;
        }, function (err) {
            console.log(err, "err");
        });
    };
    AddOrderPage.prototype.add = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.poverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_add_order_popover_add_order_popover__["a" /* AddOrderPopoverComponent */])];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss(function (dataReturned) {
                            if (dataReturned !== null) {
                                console.log('Modal Sent Data :', dataReturned);
                                _this.orderString += dataReturned.name;
                                _this.orderString += ' - ';
                                _this.ordersArray.push(dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present({
                                ev: event
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddOrderPage.prototype.addOrder = function () {
        //let orderValue = '';
        // this.forms.forEach(element => {
        var _this = this;
        //   let value = element.get('order').value + " - ";
        //   orderValue +=  value;
        // });
        //orderValue = this.o
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        var orderObject = {
            //userId : this.myForm.get('userId').value,
            orders: this.orderString,
            name: this.myForm.get("name").value,
            firstPhone: this.myForm.get("phone").value,
            secondPhone: this.myForm.get("secondPhone").value,
            city: this.getCity(this.myForm.get("city").value),
            address: this.myForm.get("address1").value,
            secondAddress: this.myForm.get("address2").value,
            status: 'not assigned',
            captainId: 0,
            agencyId: this.account.id,
            userId: 0,
            fromAddress: null,
            isUserOrder: false,
            addressId: 0,
            subOrders: this.ordersArray
        };
        this.order1.address = this.myForm.get("address1").value;
        this.order1.firstPhone = orderObject.firstPhone;
        this.order1.name = orderObject.name;
        this.order1.secondAddress = orderObject.secondAddress;
        this.order1.secondPhone = orderObject.secondPhone;
        if (this.userType == 'User') {
            orderObject.userId = this.account.id;
            orderObject.fromAddress = this.myForm.get('fromAddress').value;
            orderObject.isUserOrder = true;
            orderObject.addressId = this.address.id;
            orderObject.agencyId = 0;
            orderObject.name = this.account.firstName + ' ' + this.account.lastName;
        }
        console.log(orderObject, 'ssssssssssss');
        this.orderService.save(orderObject).subscribe(function (res) {
            console.log(res, 'res');
            var obj = res;
            load.dismiss();
            if (_this.userType != 'User' && !_this.platform.is("cordova")) {
                _this.print = true;
                setTimeout(function () {
                    _this.printCheck(obj, _this.print);
                }, 700);
            }
            else {
                if (_this.userType == 'User') {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
                }
                else {
                    _this.navCtrl.setRoot('AssignOrderPage', { item: obj });
                }
            }
            // let toast = this.toastCtrl.create({
            //   message: this.addORDERSuccessString,
            //   duration: 3000,
            //   position: 'top'
            // });
            // toast.present();
        }, function (err) {
            console.log('error', err);
            // Unable to add address
            // const error = JSON.parse(err.error);
            var displayError = _this.addORDERError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    AddOrderPage.prototype.printCheck = function (obj, print) {
        // if (print) {
        //   if (this.platform.is("cordova")) {
        //     this.printer.isAvailable().then(onSuccess => {
        //       console.log(onSuccess, "success");
        //       this.print = true;
        //       var dev = document.getElementById("print");
        //       let options: PrintOptions = {
        //         name: 'MyDocument',
        //         printerId: 'printer007',
        //         duplex: true,
        //         landscape: true,
        //         grayscale: true
        //       }
        //       this.printer.print(dev, options).then(onSuccess2 => {
        //         console.log("success", onSuccess2);
        //         if (this.userType == 'User') {
        //           this.app.getRootNavs()[0].setRoot(UserOrdersPage);
        //         } else {
        //           this.navCtrl.setRoot('AssignOrderPage', { item: obj })
        //         }
        //       }, err2 => {
        //         console.log(err2, '11111111111111111111');
        //         if (this.userType == 'User') {
        //           this.app.getRootNavs()[0].setRoot(UserOrdersPage);
        //         } else {
        //           this.navCtrl.setRoot('AssignOrderPage', { item: obj })
        //         }
        //       })
        //     }, err => {
        //       console.log(err, '22222222222222222222222');
        //       if (this.userType == 'User') {
        //         this.app.getRootNavs()[0].setRoot(UserOrdersPage);
        //       } else {
        //         this.navCtrl.setRoot('AssignOrderPage', { item: obj })
        //       }
        //     })
        //   } else {
        // console.log(this.print);
        // console.log("not cordova");
        this.windowRef.nativeWindow.print();
        if (this.userType == 'User') {
            this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
        }
        else {
            this.navCtrl.setRoot('AssignOrderPage', { item: obj });
        }
        //   }
        // } else {
        //   this.print = true;
        //   this.printCheck(obj, this.print);
        // }
    };
    AddOrderPage.prototype.change = function () {
        // let valid = true;
        // this.forms.forEach(element =>{
        //   if(!element.valid){
        //     valid = false;
        //   }
        // })
        // this.formsValid = valid;
    };
    AddOrderPage.prototype.hasError = function (field, error, form) {
        var ctrl = form.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AddOrderPage.prototype.check = function (item) {
        console.log(item, this.myForm.get("city").value, 'ssssssss');
        var flag = false;
        if (item == this.myForm.get("city").value) {
            console.log('************');
            flag = true;
        }
        console.log(flag);
        return flag;
    };
    AddOrderPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    AddOrderPage.prototype.getCity = function (cityValue) {
        console.log(cityValue, 'ssssssssssss');
        var city = '';
        if (cityValue == 'Alexandria') {
            city = this.alexValue;
        }
        else if (cityValue == 'Cairo') {
            city = this.cairoValue;
        }
        else if (cityValue == 'Tanta') {
            city = this.tantaValue;
        }
        else if (cityValue == 'Damnhor') {
            city = this.daminhoorValue;
        }
        else if (cityValue == 'Shibin Elkom') {
            city = this.shibinValue;
        }
        else if (cityValue == 'Banha') {
            city = this.banhaValue;
        }
        return city;
    };
    AddOrderPage.prototype.back = function () {
        if (this.userType == 'User') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
        }
    };
    AddOrderPage.prototype.getTotal = function () {
        var total = 10.0;
        this.ordersArray.forEach(function (element) {
            total += Number.parseFloat(element.price);
        });
        return total;
    };
    AddOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-order',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-order\add-order.html"*/'<ion-header *ngIf="!print">\n\n  <ion-navbar>\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11 [style.margin-top]="language == \'en\' ? \'5px\' : \'2px\'">\n          <ion-title>{{ \'ADD_ORDER\' | translate }}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center *ngIf="!print">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm" *ngIf="!print">\n      <!-- <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'USER\' | translate }}\n        </ion-label>\n        <ion-select formControlName="userId">\n          <ion-option *ngFor="let item of userList" [selected]="item.firstName ==item.firstName && item.lastName ==item.lastName" [value]="item.id">{{item.firstName}} {{item.lastName}} </ion-option>\n\n        </ion-select>\n      </ion-item> -->\n\n      <!-- <p class="validationHint" *ngIf="hasError(\'userId\', \'required\' , myForm )"> {{ \'REQURIED\' | translate }} </p> -->\n\n\n      <ion-item *ngIf="userType != \'User\'">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'NAME\' | translate }}\n        </ion-label>\n        <ion-input type="text" formControlName="name" name="name" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'name\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'name\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p>\n\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="call" item-start class="text-primary"></ion-icon>\n          {{ \'PHONE\' | translate }}\n        </ion-label>\n        <ion-input type="number" formControlName="phone" name="phone" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'phone\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'phone\', \'pattern\' , myForm)">{{ \'PHONE_NUMBER\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="call" item-start class="text-primary"></ion-icon>\n          {{ \'SECOND_PHONE\' | translate }}\n        </ion-label>\n        <ion-input type="number" formControlName="secondPhone" name="secondPhone" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'secondPhone\', \'pattern\' , myForm)">{{ \'PHONE_NUMBER\' | translate }} </p>\n\n      <ion-item *ngIf="userType != \'User\'">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\': \'right top\'">\n          <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n          {{ \'CITY\' | translate }}\n        </ion-label>\n        <ion-select formControlName="city" [placeholder]="alexValue" [(ngModel)]="alex" [lang]="language" [dir]="direction">\n          <ion-option [selected]="alex == item" [value]="\'Alexandria\'" [dir]="direction">{{\'ALEX\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Cairo\'" [dir]="direction">{{\'CAIRO\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Tanta\'" [dir]="direction">{{\'TANTA\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Damnhor\'" [dir]="direction">{{\'DAMNHOR\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Shibin Elkom\'" [dir]="direction">{{\'SHIPIN_ELKOM\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Banha\'" [dir]="direction">{{\'BANHA\' | translate}} </ion-option>\n\n        </ion-select>\n      </ion-item>\n      <p class="validationHint" *ngIf="hasError(\'city\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n\n      <ion-item *ngIf="userType == \'User\'">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\': \'right top\'">\n          <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n          {{ \'FROM_ADDRESS\' | translate }}\n        </ion-label>\n        <ion-input type="text" formControlName="fromAddress" name="fromAddress" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'fromAddress\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'fromAddress\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p>\n\n\n      <ion-item *ngIf="userType != \'User\'">\n        <ion-label floating [style.transform-origin]="language ==\'en\'? \'left top\': \'right top\'">\n          <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n          {{ \'FULL_ADDRESS\' | translate }} 1\n        </ion-label>\n        <ion-input type="text" formControlName="address1" name="address1" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'address1\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'address1\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p>\n\n      <ion-item *ngIf="userType != \'User\'">\n        <ion-label floating [style.transform-origin]="language ==\'en\'? \'left top\': \'right top\'" *ngIf="userType != \'User\'">\n          <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n          {{ \'FULL_ADDRESS\' | translate }} 2\n        </ion-label>\n        <ion-input type="text" formControlName="address2" name="address2" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'address2\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'address2\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p>\n\n\n      <div class="account-info info-div">\n        <ion-item class="item-background" *ngIf="ordersArray.length == 0">\n          <p text-center>\n            <strong text-wrap>{{\'NO_ITEMS_YET\' | translate}}</strong>\n          </p>\n        </ion-item>\n        <ion-item class="item-background" *ngFor="let or of ordersArray">\n          <p>\n            {{\'NAME\' | translate}} :\n            <strong text-wrap>{{or.name}}</strong>\n          </p>\n          <p>\n            {{\'PRICE\' | translate}} :\n            <strong text-wrap>{{or.price}}</strong>\n          </p>\n        </ion-item>\n      </div>\n\n      <!-- <form class="list-form" *ngFor="let item of order.orders;let count = index" [formGroup]="forms[count]"> -->\n      <!-- <ion-item>\n        <ion-label floating [style.transform-origin]="language ==\'en\'? \'left top\': \'right top\'">\n          <ion-icon name="reorder" item-start class="text-primary"></ion-icon>\n          {{ \'ORDER\' | translate }}\n        </ion-label>\n        <ion-input type="text" name="item+count" (input)="change()" formControlName="order" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n      <p class="validationHint" *ngIf="hasError(\'order\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'order\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p> -->\n\n      <!-- </form>    -->\n\n    </form>\n    <ion-buttons end class="btn-style" *ngIf="!print">\n      <button ion-button (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div margin-top style="margin-bottom: 40px;" *ngIf="!print">\n      <button ion-button block color="dark" tappable (click)="addOrder($event)" [disabled]="!myForm.valid || ordersArray.length == 0">\n        {{ \'ADD_ORDER_BUTTON\' | translate }}\n      </button>\n    </div>\n\n\n    <div id="print" *ngIf="print">\n\n      <div class="account-info info-div">\n        <p>\n          {{ \'NAME\' | translate }} :\n          <strong text-wrap>{{order1.name}}</strong>\n        </p>\n        <p>\n          {{ \'ADDRESS\' | translate }} 1 :\n          <strong text-wrap>{{order1.address}}</strong>\n        </p>\n        <p *ngIf="order1.secondAddress != null && order1.secondAddress != \'\'">\n          {{ \'ADDRESS\' | translate }} 2 :\n          <strong text-wrap>{{order1.secondAddress}}</strong>\n        </p>\n        <p>\n          {{ \'PHONE_NUMBER_PHONE\' | translate }} 1 :\n          <strong text-wrap>{{order1.firstPhone}}</strong>\n        </p>\n        <p *ngIf="order1.secondPhone != null && order1.secondPhone != \'\'">\n          {{ \'PHONE_NUMBER_PHONE\' | translate }} 2 :\n          <strong text-wrap>{{order1.secondPhone}}</strong>\n        </p>\n\n      </div>\n      <div class="account-info info-div2">\n        <ion-item class="item-background2">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6>\n                <p>\n                  {{\'NAME\' | translate}}\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                <p>\n                  <strong text-wrap>|</strong>\n                </p>\n              </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  {{\'PRICE\' | translate}}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item class="item-background2" *ngFor="let sub of ordersArray">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6 style="padding: 0px">\n                <p>\n                  <strong text-wrap>{{sub.name}}</strong>\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                <p>\n                  <strong text-wrap>|</strong>\n                </p>\n              </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  <strong text-wrap>{{sub.price}}</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item class="item-background2">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6 style="padding: 0px">\n                <p>\n                  <strong text-wrap>{{\'DELIVER_PRICE\' | translate}}</strong>\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                <p>\n                  <strong text-wrap>|</strong>\n                </p>\n              </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  <strong text-wrap>10.0</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item class="item-background2">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6 style="padding: 0px">\n                <p>\n                  <strong text-wrap>{{\'TOTAL\' | translate}}</strong>\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                <p>\n                  <strong text-wrap>|</strong>\n                </p>\n              </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  <strong text-wrap>{{getTotal()}}</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-order\add-order.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_12__providers_settings_windowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_settings_windowRef__["a" /* WindowRef */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* User */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__["a" /* Principal */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */]) === "function" && _p || Object])
    ], AddOrderPage);
    return AddOrderPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=add-order.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubAssignDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agency_captains_agency_captains__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__captain_assign_details_captain_assign_details__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_assign_captain_edit_assign_captain__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SubAssignDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubAssignDetailsPage = /** @class */ (function () {
    function SubAssignDetailsPage(navCtrl, navParams, platform, loading, translateService, accountService, captainService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loading = loading;
        this.translateService = translateService;
        this.accountService = accountService;
        this.captainService = captainService;
        this.assingCaptains = [];
        this.pleaseWait = null;
        this.language = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].direction;
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.from = null;
        this.captain = null;
        this.agency = null;
        this.id = 0;
        this.assign = navParams.get("item");
        this.from = navParams.get("from");
        this.captain = navParams.get("captain");
        this.agency = navParams.get("agency");
        if (this.from == 'AgencyCaptainsPage') {
            this.id = this.assign.lastAssignId;
        }
        else {
            this.id = this.assign.id;
        }
        this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.from == 'AgencyCaptainsPage') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */], { item: _this.agency });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__captain_assign_details_captain_assign_details__["a" /* CaptainAssignDetailsPage */], { item: _this.captain });
            }
        });
        this.getSubAssign(0);
    }
    SubAssignDetailsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getSubAssign(_this.pageNum);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    SubAssignDetailsPage.prototype.getSubAssign = function (pageNum) {
        var _this = this;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.assingCaptains = [];
        }
        this.captainService.getSubAssignes(this.id, pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.assingCaptains = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.assingCaptains.push(element);
                });
            }
        }, function (err) {
            console.log(err, 'errorrrr');
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    SubAssignDetailsPage.prototype.back = function () {
        if (this.from == 'AgencyCaptainsPage') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */], { item: this.agency });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__captain_assign_details_captain_assign_details__["a" /* CaptainAssignDetailsPage */], { item: this.captain });
        }
    };
    SubAssignDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubAssignDetailsPage');
    };
    SubAssignDetailsPage.prototype.convertToTime = function (time) {
        var timeInt = parseInt(time);
        var minutes = Math.trunc((timeInt / (1000 * 60)) % 60);
        var hours = Math.trunc(timeInt / (1000 * 60 * 60));
        var hoursStr = (hours < 10) ? "0" + hours : hours;
        var minutesStr = (minutes < 10) ? "0" + minutes : minutes;
        return hoursStr + ":" + minutesStr;
    };
    SubAssignDetailsPage.prototype.editAssign = function (assign) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__edit_assign_captain_edit_assign_captain__["a" /* EditAssignCaptainPage */], { subAssign: assign, agency: this.agency, captain: this.captain, from: this.from, suberAssign: this.assign });
    };
    SubAssignDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-assign-details',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\sub-assign-details\sub-assign-details.html"*/'<!--\n  Generated template for the SubAssignDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'9px\' : \'5px\'">\n          <ion-title>{{ \'CAPTAIN_ASSIGN_DETAILS\' | translate }}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <div text-center *ngIf="assingCaptains.length == 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../../assets/img/sad.png" class="not-found-img">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let assign of assingCaptains">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" src="../../assets/img/clockImage.jpg" />\n          </ion-col>\n\n          <ion-col class="btn-col" col-9>\n\n            <div class="account-info info-div">\n              <p style="margin-top: 10px">\n                {{\'DAY\' | translate}} :\n                <strong text-wrap>{{assign.date}}</strong>\n              </p>\n              <p style="margin-top: 10px">\n                {{\'FROM\' | translate}} :\n                <strong text-wrap>{{assign.startTime}}</strong>\n              </p>\n              <p style="margin-top: 10px">\n                {{\'TO\' | translate}} :\n                <strong text-wrap>{{assign.endTime}}</strong>\n              </p>\n              <p style="margin-top: 10px">\n                {{\'HOURS_COUNT\' | translate}} :\n                <strong text-wrap>{{convertToTime(assign.time)}}</strong>\n              </p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n              <ion-buttons class="btn-style" style="width: 100%; padding: 0px;">\n                <button ion-button (click)="editAssign(assign)" style="width: 100%;padding: 0px;">\n                  {{ \'EDIT_ASSIGN_DETAILS\' | translate }}\n                </button>\n              </ion-buttons>\n  \n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="assingCaptains.length != 0">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\sub-assign-details\sub-assign-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_captain_service__["a" /* CaptainService */]])
    ], SubAssignDetailsPage);
    return SubAssignDetailsPage;
}());

//# sourceMappingURL=sub-assign-details.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaptainService = /** @class */ (function () {
    function CaptainService(http, authservice) {
        this.http = http;
        this.authservice = authservice;
    }
    CaptainService.prototype.save = function (captain) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captains?access_token=' + this.authservice.getToken(), captain);
    };
    CaptainService.prototype.assignCaptains = function (assignCaptains) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/assignCaptains?access_token=' + this.authservice.getToken(), assignCaptains);
    };
    CaptainService.prototype.editAssignCaptains = function (assignCaptains) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/updateSubAssign?access_token=' + this.authservice.getToken(), assignCaptains);
    };
    CaptainService.prototype.updateLocation = function (updateLocation) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/updateLocation?access_token=' + this.authservice.getToken(), updateLocation);
    };
    CaptainService.prototype.updateCaptainInformation = function (updateLocation) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captains?access_token=' + this.authservice.getToken(), updateLocation);
    };
    CaptainService.prototype.updateWorking = function (updateWorking) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/updateWorking?access_token=' + this.authservice.getToken(), updateWorking);
    };
    CaptainService.prototype.unAssignCaptain = function (captainId, day) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/unAssignCaptains/' + captainId + '/' + day + '?access_token=' + this.authservice.getToken(), null);
    };
    CaptainService.prototype.getAll = function (pageNum) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/allcaptains/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.captainsPickList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captainsPickList?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getByUserId = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captainsByUserId/' + userId + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getCaptainDetails = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captainDetails/' + userId + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getNotAssigned = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captainsNotAssigned?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getByAgencyId = function (agencyId, pageNum) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captainsByAgencyId/' + agencyId + '/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.captainsPickListByAgencyId = function (agencyId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/captainsPickListByAgencyId/' + agencyId + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getCaptainElevation = function (captainId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/evaluationsByCaptainId/' + captainId + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getSubAssignes = function (suberAssignId, pageNum) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/subAssignsBySuberId/' + suberAssignId + '/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    CaptainService.prototype.getCaptainAssignDetails = function (searchFilter, pageNum) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/getCaptainAssignDetails/' + pageNum + '?access_token=' + this.authservice.getToken(), searchFilter);
    };
    CaptainService.prototype.updateEvaluation = function (evaluation) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/evaluations?access_token=' + this.authservice.getToken(), evaluation);
    };
    CaptainService.prototype.autoUnAssign = function () {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/autoUnAssign?access_token=' + this.authservice.getToken(), null);
    };
    CaptainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__["a" /* AuthServerProvider */]])
    ], CaptainService);
    return CaptainService;
}());

//# sourceMappingURL=captain.service.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_mode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_location_accuracy__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_admob_free__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















//declare var backgroundGeolocation;
var MyApp = /** @class */ (function () {
    function MyApp(translate, device, admobFree, backgroundMode, menu, platform, settings, config, statusBar, locationAccuracy, toastCtrl, loginService, captainService, app, principal, splashScreen, keyboard) {
        var _this = this;
        this.translate = translate;
        this.device = device;
        this.admobFree = admobFree;
        this.backgroundMode = backgroundMode;
        this.menu = menu;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.locationAccuracy = locationAccuracy;
        this.toastCtrl = toastCtrl;
        this.loginService = loginService;
        this.captainService = captainService;
        this.app = app;
        this.principal = principal;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__["a" /* LandingPage */];
        this.menuSide = "right";
        this.isLogOut = false;
        this.account = null;
        this.userType = '';
        this.userTypeText = '';
        // public userAdmin = 'Admin';
        // public userCaptain = 'Captain';
        // public userAgency = 'Agency';
        // public userUser = 'User';
        // public ordersText = 'Orders';
        // public captainsText = 'Captains';
        // public agenciesText = 'Agencies';
        // public settingText = 'Setting';
        // public userOrdersText = 'User Orders';
        // public yourCaptainsText = 'Your Captains';
        // public dashbardText = 'Dashboard';
        this.internal = null;
        this.autoAssignInternal = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.keyboard.disableScroll(false);
            if (_this.platform.is("android")) {
                _this.showBannerAd();
            }
        });
        this.initTranslate();
        this.translateMenu();
        this.platform.setDir("rtl", true);
        console.log("pppppppppppppppppppppp");
        //backgroundGeolocation = new BackgroundGeolocation();
        //this.startTracking()
        // this.appMenuItems = [
        //   // {title: 'Home', component: HomePage, icon: 'home'},
        //   // {title: 'Local Weather', component: EntityPage, icon: 'person'}
        // ];
    }
    MyApp_1 = MyApp;
    MyApp.prototype.showBannerAd = function () {
        var bannerConfig = {
            // isTesting: true, // Remove in production
            autoShow: true,
            id: "ca-app-pub-3499153975001140/3738705665"
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare().then(function () {
            console.log("banner success");
        }).catch(function (e) { return console.log("baner erroooor", e); });
    };
    MyApp.prototype.ngOnInit = function () {
        this.checkAccess();
    };
    MyApp.prototype.checkAccess = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account, 'app');
            if (account == null) {
                console.log('***************');
                _this.account = account;
                _this.userType = '';
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                console.log(MyApp_1.language);
                _this.isLogOut = false;
                _this.userType = 'Agency';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
                //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
                //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
                // ];
                _this.nav.setRoot("OrdersPage");
            }
            else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                console.log(MyApp_1.language);
                _this.isLogOut = false;
                _this.userType = 'User';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }
                // ];
                _this.nav.setRoot("UserOrdersPage");
            }
            else if (account.authorities[0] == 'ROLE_CAPTAIN') {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                console.log(MyApp_1.language);
                _this.isLogOut = false;
                _this.userType = 'Captain';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.ordersText, component: CaptainOrdersPage, icon: 'basket' },
                //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' },
                //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
                // ];
                _this.nav.setRoot("CaptainOrdersPage");
                _this.getCaptain(account.id);
            }
            else {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                console.log(MyApp_1.language);
                _this.isLogOut = false;
                _this.userType = 'Admin';
                _this.autoUnAssign();
                _this.autoAssignRedunduncy();
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.dashbardText, component: AdminDashboardPage, icon: 'stats' },
                //   { title: this.agenciesText, component: AgenciesPage, icon: 'home' },
                //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
                //   { title: this.yourCaptainsText, component: AgencyCaptainsPage, icon: 'bicycle' },
                //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
                //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }
                // ];
                _this.nav.setRoot("AdminDashboardPage");
            }
            console.log(_this.userType, 'user');
        });
        console.log(MyApp_1.language);
    };
    MyApp.prototype.checkAccessToSignUp = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account, 'app');
            if (account == null) {
                console.log('***************');
                _this.account = account;
                _this.userType = '';
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                _this.isLogOut = false;
                _this.userType = 'Agency';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
                //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
                //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
                // ];
                _this.nav.setRoot("OrdersPage");
            }
            else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                _this.isLogOut = false;
                _this.userType = 'User';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }
                // ];
                // this.nav.setRoot("UserOrdersPage")
            }
            else if (account.authorities[0] == 'ROLE_CAPTAIN') {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                _this.isLogOut = false;
                _this.userType = 'Captain';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.ordersText, component: CaptainOrdersPage, icon: 'basket' },
                //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' },
                //   { title: this.settingText, component: SettingsPage, icon: 'construct' }
                // ];
                _this.nav.setRoot("CaptainOrdersPage");
                _this.getCaptain(account.id);
            }
            else {
                MyApp_1.language = account.langKey;
                _this.translate.use(MyApp_1.language);
                if (account.langKey == 'en') {
                    _this.menuSide = 'left';
                    _this.platform.setDir("ltr", true);
                    MyApp_1.direction = 'ltr';
                }
                else {
                    _this.menuSide = 'right';
                    _this.platform.setDir("rtl", true);
                    MyApp_1.direction = 'rtl';
                }
                _this.isLogOut = false;
                _this.userType = 'Admin';
                _this.translateMenu();
                _this.account = account;
                // this.appMenuItems = [
                //   { title: this.dashbardText, component: AdminDashboardPage, icon: 'stats' },
                //   { title: this.agenciesText, component: AgenciesPage, icon: 'home' },
                //   { title: this.captainsText, component: CaptainsPage, icon: 'bicycle' },
                //   { title: this.yourCaptainsText, component: AgencyCaptainsPage, icon: 'bicycle' },
                //   { title: this.ordersText, component: OrdersPage, icon: 'basket' },
                //   { title: this.userOrdersText, component: UserOrdersPage, icon: 'basket' }
                // ];
                _this.nav.setRoot("AdminDashboardPage");
            }
            console.log(_this.userType, 'user');
        });
    };
    MyApp.prototype.autoUnAssign = function () {
        this.captainService.autoUnAssign().subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err, 'errrror');
        });
    };
    MyApp.prototype.getCaptain = function (captainId) {
        var _this = this;
        this.captainService.getByUserId(captainId).subscribe(function (data) {
            _this.captain = data;
            _this.updateLocation(_this);
            _this.updateLocationTimer(_this);
        }, function (err) {
            console.log(err, 'errror');
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(MyApp_1.language);
        // if (this.translate.getBrowserLang() !== undefined) {
        //   this.translate.use(this.translate.getBrowserLang());
        // } else {
        this.translate.use(MyApp_1.language); // Set your language here
        //}
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        console.log(page);
        this.app.getRootNavs()[0].setRoot(page);
        //this.menu.close("authenticated");
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.menu.close().then(function (res) {
            if (_this.internal != null) {
                console.log("unsubscribe");
                _this.internal.unsubscribe();
                _this.backgroundMode.disable();
                _this.internal = null;
            }
            _this.loginService.logout();
            //this.userType = '';
            //this.account = null;
            _this.checkAccess();
            _this.isLogOut = true;
            // this.app.getRootNavs()[0].setRoot(FirstRunPage);
        });
    };
    MyApp.prototype.openMenu = function () {
        this.menu.open();
    };
    MyApp.prototype.updateLocation = function (classIn) {
        var _this = this;
        if (this.platform.is("android") || this.platform.is("ios")) {
            console.log("---------------------------");
            // this.locationAccuracy.canRequest().then((canRequest: any) => {
            //   console.log('canRequest' , canRequest);
            // if(canRequest == 0) {
            // the accuracy option will be ignored by iOS
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                console.log("success");
                _this.getLocation(classIn);
            }, function (error) { return console.log('Error requesting location permissions', error); });
            //   }else{
            //     this.getLocation(classIn) 
            //   }
            // }).catch(
            //   err =>{
            //     console.log('error' , err);
            //   }
            // );
        }
        else {
            this.getLocation(classIn);
        }
    };
    MyApp.prototype.getLocation = function (classIn) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var location = {
                lat: position.coords.latitude + '',
                lng: position.coords.longitude + '',
                captainId: classIn.captain.id
            };
            console.log(location);
            console.log("******************");
            classIn.captainService.updateLocation(location).subscribe(function (res) {
                console.log(res, 'sssssssssss');
            }, function (err) {
                console.log(err, 'errrrrrpr');
            });
        }, function (err) {
            console.log(err, 'error sssssssssssss');
        });
    };
    MyApp.prototype.updateLocationTimer = function (classIn) {
        if (this.platform.is('android')) {
            if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
                this.backgroundMode.enable();
            }
        }
        else {
            this.backgroundMode.enable();
        }
        this.internal = __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].interval(1000 * 60 * 10).subscribe(function (x) {
            console.log(x, 'eeeeeeeeeeeeeeee');
            classIn.updateLocation(classIn);
        });
    };
    MyApp.prototype.autoAssignRedunduncy = function () {
        var _this = this;
        this.autoAssignInternal = __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].interval(1000 * 60 * 60).subscribe(function (x) {
            console.log(x, 'eeeeeeeeeeeeeeee');
            _this.autoUnAssign();
        });
    };
    MyApp.prototype.translateMenu = function () {
        var _this = this;
        console.log('translateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        this.translate.get(['AGENCY', 'ADMIN', 'USER', 'CAPTAIN']).subscribe(function (values) {
            console.log(values);
            if (_this.userType == 'Admin') {
                _this.userTypeText = values.ADMIN;
            }
            else if (_this.userType == 'Agency') {
                _this.userTypeText = values.AGENCY;
            }
            else if (_this.userType == 'User') {
                _this.userTypeText = values.USER;
            }
            else if (_this.userType == 'Captain') {
                _this.userTypeText = values.CAPTAIN;
            }
            console.log(_this.userTypeText, 'user type text');
        });
    };
    MyApp.language = "ar";
    MyApp.direction = "rtl";
    MyApp.getCaptainImage = false;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = MyApp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\app\app.html"*/'<ion-menu [side]="menuSide" id="authenticated" [content]="content" *ngIf = "account != null && (userType == \'Admin\' || userType == \'Agency\' || userType == \'Captain\' || userType == \'User\')">\n  <ion-header *ngIf = "!isLogOut" >\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row> \n          <ion-col col-4>\n              <div class="user-avatar" *ngIf = "userType == \'Admin\' || userType == \'User\' || userType == \'Agency\' || (userType == \'Captain\' && !captain)  || (userType == \'Captain\' && captain && !captain.image)">\n                <img src="../assets/img/person.png">\n              </div>\n              <div class="user-avatar" *ngIf = "userType == \'Captain\' && captain && captain.image">\n                <img [src]="[\'data:image/jpg;base64\',captain.image]">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8 *ngIf = "(userType != \'Captain\' || !captain)">\n            <h2 ion-text class="no-margin bold text-white">\n              {{account?.firstName}} {{account?.lastName}}\n            </h2>\n            <span ion-text color="light">{{userTypeText}}</span>\n          </ion-col>\n          <ion-col padding-top col-8 *ngIf = "(userType == \'Captain\' && captain)">\n            <h2 ion-text class="no-margin bold text-white">\n              {{captain?.name}}\n            </h2>\n            <span ion-text color="light">{{userTypeText}}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <!-- <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col> -->\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light"  (click)="logout()">\n              <ion-icon name="log-out"  style="margin-right: 5px;margin-left: 5px"></ion-icon>\n              {{ \'LOG_OUT\' | translate }}\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary" *ngIf = "!isLogOut" >\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'AdminDashboardPage\')" *ngIf="userType == \'Admin\'">\n        <ion-icon item-left name="stats" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'DASHBOARD\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'CaptainAssignDetailsPage\')" *ngIf="userType == \'Admin\'">\n          <ion-icon item-left name="clock" color="primary"></ion-icon>\n          <span ion-text color="primary">{{\'ASSIGN_TIME_DETAILS\' | translate}}</span>\n        </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'AgenciesPage\')" *ngIf="userType == \'Admin\'">\n        <ion-icon item-left name="home" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'AGENCIES\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'OrdersPage\')" *ngIf="userType == \'Admin\' || userType == \'Agency\'">\n        <ion-icon item-left name="basket" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'ORDERS\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'CaptainOrdersPage\')" *ngIf="userType == \'Captain\'">\n        <ion-icon item-left name="basket" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'ORDERS\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'CaptainsPage\')" *ngIf="userType == \'Admin\' || userType == \'Agency\'">\n        <ion-icon item-left name="bicycle" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'CAPTAINS\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'AgencyCaptainsPage\')" *ngIf="userType == \'Admin\'">\n        <ion-icon item-left name="bicycle" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'YOUR_CAPTAINS\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'UserOrdersPage\')" *ngIf="userType == \'Admin\' || userType == \'Captain\' || userType == \'User\'">\n        <ion-icon item-left name="basket" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'USER_ORDERS\' | translate}}</span>\n      </button>\n      <button ion-item menuClose class="text-1x" (click)="openPage(\'SettingsPage\')">\n        <ion-icon item-left name="construct" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'SETTING\' | translate}}</span>\n      </button>\n      \n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_mode__["a" /* BackgroundMode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_mode__["a" /* BackgroundMode */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_providers__["b" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_providers__["b" /* Settings */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_16__ionic_native_location_accuracy__["a" /* LocationAccuracy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__ionic_native_location_accuracy__["a" /* LocationAccuracy */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* ToastController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__providers_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_login_login_service__["a" /* LoginService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_11__providers_auth_captain_service__["a" /* CaptainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_auth_captain_service__["a" /* CaptainService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__["a" /* Principal */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _t || Object])
    ], MyApp);
    return MyApp;
    var MyApp_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_address_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation_ngx__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_order_add_order__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_orders_user_orders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__choose_address_choose_address__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_location_accuracy__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(navCtrl, loading, navParams, locationAccuracy, addressService, toastCtrl, translateService, app, platform, principal, geolocation, builder, plaform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.locationAccuracy = locationAccuracy;
        this.addressService = addressService;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.app = app;
        this.platform = platform;
        this.principal = principal;
        this.geolocation = geolocation;
        this.builder = builder;
        this.plaform = plaform;
        this.mapStyle = {
            height: "0%",
            width: "0%"
        };
        this.openMap = false;
        this.mainMarker = null;
        this.alex = 'Alexandria';
        this.address = {
            country: 'Egypt',
            city: '',
            street: '',
            userId: 0,
            postalCode: '',
            latitude: '26.555555555555',
            longitude: '12.5824526'
        };
        this.to = null;
        this.language = __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].direction;
        this.egyptText = 'Egypt';
        this.alexValue = '';
        this.cairoValue = '';
        this.tantaValue = '';
        this.shibinValue = '';
        this.daminhoorValue = '';
        this.banhaValue = '';
        this.locationDisable = true;
        this.to = this.navParams.get("address");
        this.translateService.get(['ADD_ADDRESS_ERROR', 'ADD_ADDRESS_SUCCESS', 'EGYPT', 'ALEX', 'CAIRO', 'TANTA', 'DAMNHOR', 'SHIPIN_ELKOM', 'BANHA', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.addAddressError = values.ADD_ADDRESS_ERROR;
            _this.addAdressSuccessString = values.ADD_ADDRESS_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.alexValue = values.ALEX;
            _this.cairoValue = values.CAIRO;
            _this.daminhoorValue = values.DAMNHOR;
            _this.tantaValue = values.TANTA;
            _this.shibinValue = values.SHIPIN_ELKOM;
            _this.banhaValue = values.BANHA;
            _this.egyptText = values.EGYPT;
        });
        this.myForm = builder.group({
            //'country': ['', [Validators.required, Validators.maxLength(45)]],
            'city': ['Alexandria', []],
            'street': ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(45)]],
            'postalCode': ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].maxLength(45)]],
        });
        this.myForm.get('city').setValue('Alexandria');
        this.myForm.get('city').updateValueAndValidity();
        this.myForm.get('city').markAsDirty();
        this.myForm.get('city').markAsTouched();
        this.myForm.get('city').markAsPristine();
        if (this.to != null && this.to != undefined) {
            this.platform.registerBackButtonAction(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__choose_address_choose_address__["a" /* ChooseAddressPage */]);
            });
        }
    }
    AddAddressPage.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.user = account;
            }
        });
    };
    AddAddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddAddressPage');
        if (this.plaform.is("android") || this.plaform.is("ios")) {
            console.log("---------------------------");
            // this.locationAccuracy.canRequest().then((canRequest: any) => {
            // //this.diagnostic.isLocationEnabled().then((isEnabled) =>{
            //   console.log('canRequest' , canRequest);
            // if(canRequest == 0) {
            // the accuracy option will be ignored by iOS
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                console.log("success");
                _this.loadMap();
            }, function (error) { return console.log('Error requesting location permissions', error); });
            // }else{
            //   this.loadMap() 
            // }
            // }).catch(
            //   err =>{
            //     console.log('error' , err);
            //   }
            // );
        }
        else {
            this.loadMap();
        }
    };
    AddAddressPage.prototype.save = function () {
        var _this = this;
        console.log(this.locationDisable);
        if (this.locationDisable) {
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                console.log("success");
                _this.loadMap();
            }, function (error) { return console.log('Error requesting location permissions', error); });
        }
        this.mapStyle.height = "100%";
        this.mapStyle.width = "100%";
        this.openMap = true;
    };
    AddAddressPage.prototype.loadMap = function () {
        var mainClass = this;
        var options = { timeout: 30000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            mainClass.address.latitude = position.coords.latitude + '';
            mainClass.address.longitude = position.coords.longitude + '';
            var mapOptions = {
                center: latLng,
                zoom: 15
            };
            mainClass.map = new google.maps.Map(mainClass.elementRef.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: mainClass.map,
                animation: google.maps.Animation.DROP,
                position: mainClass.map.getCenter()
            });
            mainClass.mainMarker = marker;
            //  console.log(this.map , 'map');
            //  console.log(this.mainMarker , "marker");
            var superclass = mainClass;
            google.maps.event.addListener(mainClass.map, 'click', function (event) {
                superclass.mainMarker.setMap(null);
                var newmarker = new google.maps.Marker({
                    position: event.latLng,
                    map: superclass.map
                });
                superclass.mainMarker = newmarker;
                superclass.address.latitude = event.latLng.lat();
                superclass.address.longitude = event.latLng.lng();
                console.log(superclass.address);
            });
            mainClass.locationDisable = false;
            console.log(mainClass.locationDisable);
        }, function (err) {
            var _this = this;
            console.log(err, 'errrrrrrrrrrrrrrrrrrrrrrrrrrror');
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                console.log("success");
                _this.loadMap();
            }, function (error) { return console.log('Error requesting location permissions', error); });
            // let toast = mainClass.toastCtrl.create({
            //   message: "error " + err.message,
            //   duration: 10000,
            //   position: 'top'
            // });
            // toast.present();
        });
    };
    AddAddressPage.prototype.chooseLocation = function () {
        // this.address.userId = Number.parseInt(localStorage.getItem("userId"));
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.address.userId = this.user.id;
        this.address.city = this.getCity(this.myForm.get("city").value);
        this.address.country = this.egyptText;
        console.log(this.address, 'sssssssssssssssss');
        this.addressService.save(this.address).subscribe(function (res) {
            console.log(res, 'res');
            var toast = _this.toastCtrl.create({
                message: _this.addAdressSuccessString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            // this.myApp.checkAccess();
            if (_this.to == null || _this.to == undefined) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__user_orders_user_orders__["a" /* UserOrdersPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__add_order_add_order__["a" /* AddOrderPage */], { address: res });
            }
        }, function (err) {
            console.log('error', err);
            // Unable to add address
            // const error = JSON.parse(err.error);
            var displayError = _this.addAddressError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    AddAddressPage.prototype.getCity = function (cityValue) {
        console.log(cityValue, 'ssssssssssss');
        var city = '';
        if (cityValue == 'Alexandria') {
            city = this.alexValue;
        }
        else if (cityValue == 'Cairo') {
            city = this.cairoValue;
        }
        else if (cityValue == 'Tanta') {
            city = this.tantaValue;
        }
        else if (cityValue == 'Damnhor') {
            city = this.daminhoorValue;
        }
        else if (cityValue == 'Shibin Elkom') {
            city = this.shibinValue;
        }
        else if (cityValue == 'Banha') {
            city = this.banhaValue;
        }
        return city;
    };
    AddAddressPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AddAddressPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__choose_address_choose_address__["a" /* ChooseAddressPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], AddAddressPage.prototype, "elementRef", void 0);
    AddAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-address',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-address\add-address.html"*/'<!--\n  Generated template for the AddAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1 *ngIf="to != null && to != undefined">\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11 [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title *ngIf="!openMap">{{ \'ADD_ADDRESS\' | translate }}</ion-title>\n                <ion-title *ngIf="openMap">{{ \'MAP\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-navbar>\n\n\n  <!-- <ion-buttons end *ngIf="openMap">\n    <button ion-button (click)="chooseLocation()">\n      <ion-icon name="add"></ion-icon> Choose Location </button>\n  </ion-buttons> -->\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content" *ngIf="!openMap">\n\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n\n    <form class="list-form" [formGroup]="myForm">\n      <!-- <ion-item>\n        <ion-label floating>\n          <ion-icon name="home" item-start class="text-primary"></ion-icon>\n          {{ \'COUNTRY\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="address.country" formControlName="country" name="country"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'country\', \'required\')"> {{ \'REQURIED\' | translate }}  </p>\n      <p class="validationHint" *ngIf="hasError(\'country\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p> -->\n\n      <!-- <ion-item>\n        <ion-label floating>\n          <ion-icon name="home" item-start class="text-primary"></ion-icon>\n          {{ \'CITY\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="address.city" formControlName="city" name="city"></ion-input>\n      </ion-item> -->\n\n      <ion-item >\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n          {{ \'CITY\' | translate }}\n        </ion-label>\n        <ion-select formControlName="city" [placeholder]="alexValue" [(ngModel)] = "alex" [lang]="language" [dir]="direction">\n          <ion-option [selected]="alex == item" [value]="\'Alexandria\'" [dir]="direction" >{{\'ALEX\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Cairo\'" [dir]="direction" >{{\'CAIRO\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Tanta\'" [dir]="direction" >{{\'TANTA\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Damnhor\'" [dir]="direction" >{{\'DAMNHOR\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Shibin Elkom\'" [dir]="direction" >{{\'SHIPIN_ELKOM\' | translate}} </ion-option>\n          <ion-option [selected]="alex == item" [value]="\'Banha\'" [dir]="direction" >{{\'BANHA\' | translate}} </ion-option>\n\n        </ion-select>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'city\', \'required\')">{{ \'REQURIED\' | translate }}  </p>\n      <p class="validationHint" *ngIf="hasError(\'city\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n          {{ \'DETAILS\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="address.street" formControlName="street" name="street" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'street\', \'required\')">{{ \'REQURIED\' | translate }}  </p>\n      <p class="validationHint" *ngIf="hasError(\'street\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          {{ \'POSTAL_CODE\' | translate }}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="address.postalCode" formControlName="postalCode" name="postalcode" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'postalCode\', \'required\')">{{ \'REQURIED\' | translate }}  </p>\n      <p class="validationHint" *ngIf="hasError(\'postalCode\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n\n    </form>\n\n    <div margin-top style="margin-bottom: 40px;">\n      <button ion-button block color="dark" tappable (click)="save()" [disabled]="!myForm.valid" >\n        {{ \'ADD-ADDRESS\' | translate }}\n      </button>\n    </div>\n  </div>\n  <div [ngStyle]="mapStyle">\n    <ion-grid [ngStyle]="mapStyle">\n      <ion-row [ngStyle]="mapStyle">\n        <ion-col [ngStyle]="mapStyle">\n          <div #map id="map" [ngStyle]="mapStyle"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div margin-top *ngIf="openMap">\n            <button ion-button block color="dark" tappable (click)="chooseLocation()" [disabled]="locationDisable">\n              {{ \'CHOOSE_LOCATION\' | translate }}\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-address\add-address.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_location_accuracy__["a" /* LocationAccuracy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_location_accuracy__["a" /* LocationAccuracy */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_address_service__["a" /* AddressService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_principal_service__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_principal_service__["a" /* Principal */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation_ngx__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation_ngx__["a" /* Geolocation */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _p || Object])
    ], AddAddressPage);
    return AddAddressPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_address_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_order_add_order__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_address_add_address__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_orders_user_orders__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ChooseAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseAddressPage = /** @class */ (function () {
    function ChooseAddressPage(navCtrl, navParams, builder, loading, platform, addressService, app, principal, toastCtrl, translateService, orderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.loading = loading;
        this.platform = platform;
        this.addressService = addressService;
        this.app = app;
        this.principal = principal;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.orderService = orderService;
        this.addressList = [];
        this.account = null;
        this.userType = '';
        this.value = null;
        this.language = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].direction;
        this.translateService.get(['PLEASE_WAIT']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            //'userId':['', [Validators.required ]],
            'address': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__user_orders_user_orders__["a" /* UserOrdersPage */]);
        });
        //this.getAllCaptains();
    }
    ChooseAddressPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            _this.account = account;
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.account = account;
                _this.userType = 'Admin';
                _this.getAddresses();
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    ChooseAddressPage.prototype.getAddresses = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.addressList = [];
        this.addressService.getUserAddresses(this.account.id).subscribe(function (res) {
            _this.addressList = res;
            load.dismiss();
        }, function (err) {
            console.log(err, 'errrrrrrrrror');
            load.dismiss();
        });
    };
    ChooseAddressPage.prototype.chooseAddress = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__add_order_add_order__["a" /* AddOrderPage */], { address: this.myForm.get("address").value });
    };
    ChooseAddressPage.prototype.newAddress = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__add_address_add_address__["a" /* AddAddressPage */], { address: "to add order" });
    };
    ChooseAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseAddressPage');
    };
    ChooseAddressPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    ChooseAddressPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__user_orders_user_orders__["a" /* UserOrdersPage */]);
    };
    ChooseAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choose-address',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\choose-address\choose-address.html"*/'<!--\n  Generated template for the ChooseAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1>\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title>{{ \'CHOOSE_ADDRESS\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="pin" item-start class="text-primary"></ion-icon>\n            {{ \'ADDRESS\' | translate }}\n          </ion-label>\n          <ion-select formControlName="address" [lang]="language" [dir]="direction" >\n            <ion-option *ngFor="let item of addressList" text-wrap [dir]="direction" [selected]="item.country ==item.country && item.city == item.city && item.street == item.street && item.postalCode == item.postalCode" [value]="item"  >{{item.street}} , {{item.city}} </ion-option>\n  \n          </ion-select>\n        </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'address\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n\n\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="chooseAddress()" [disabled]="!myForm.valid">\n        {{ \'CHOOSE_ADDRESS\' | translate }}\n      </button>\n    </div>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="newAddress()">\n        {{ \'NEW_ADDRESS\' | translate }}\n      </button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\choose-address\choose-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_address_service__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_order_service__["a" /* OrderService */]])
    ], ChooseAddressPage);
    return ChooseAddressPage;
}());

//# sourceMappingURL=choose-address.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_interval__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the CaptainOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaptainOrdersPage = /** @class */ (function () {
    function CaptainOrdersPage(navCtrl, loginService, loading, accountService, captainService, app, principal, navParams, orderService, translateService, toastCtrl) {
        // this.captain = this.navParams.get("item");
        var _this = this;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.loading = loading;
        this.accountService = accountService;
        this.captainService = captainService;
        this.app = app;
        this.principal = principal;
        this.navParams = navParams;
        this.orderService = orderService;
        this.translateService = translateService;
        this.toastCtrl = toastCtrl;
        this.ordersList = [];
        this.deliverOrderSuccess = null;
        this.deliverOrderError = null;
        this.autoAssign = false;
        this.myVar = null;
        this.assingOrderSuccess = null;
        this.assignOrderError = null;
        this.interval = null;
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.translateService.get(['DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.deliverOrderError = values.DELIVER_ORDER_ERROR;
            _this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;
            _this.assignOrderError = values.ASSIGN_ORDER_ERROR;
            _this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
    }
    CaptainOrdersPage.prototype.ngOnInit = function () {
    };
    CaptainOrdersPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            if (_this.myVar == 'not assigned') {
                _this.getNotAssigned(_this.myVar, _this.pageNum);
            }
            else {
                _this.getAllOrders(_this.myVar, _this.pageNum);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    CaptainOrdersPage.prototype.updateLocation = function (classIn) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var location = {
                lat: position.coords.latitude + '',
                lng: position.coords.longitude + '',
                captainId: classIn.captain.id
            };
            console.log(location);
            console.log("******************");
            classIn.captainService.updateLocation(location).subscribe(function (res) {
                console.log(res, 'sssssssssss');
            }, function (err) {
                console.log(err, 'errrrrrpr');
            });
        }, function (err) {
            console.log(err, 'error sssssssssssss');
        });
    };
    CaptainOrdersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CaptainOrdersPage');
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        var classIn = this;
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null || account.authorities[0] != 'ROLE_CAPTAIN') {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.captainService.getByUserId(account.id).subscribe(function (data) {
                    _this.captain = data;
                    console.log(data, _this.captain);
                    _this.myVar = 'assigned';
                    console.log("**********");
                    load.dismiss();
                    _this.getAllOrders(_this.myVar, 0);
                    if (_this.captain.agencyId != 0) {
                        _this.getCaptainAgency();
                    }
                    console.log("********************");
                    //classIn.updateLocationTimer(classIn);
                }, function (err) {
                    console.log(err, 'errror');
                    load.dismiss();
                });
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    CaptainOrdersPage.prototype.updateLocationTimer = function (classIn) {
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].interval(10000).subscribe(function (x) {
            console.log(x, 'eeeeeeeeeeeeeeee');
            classIn.updateLocation(classIn);
        });
    };
    CaptainOrdersPage.prototype.getCaptainAgency = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.accountService.getById(this.captain.agencyId).subscribe(function (res) {
            console.log(res, 'nnnnnnnnnnnnn');
            _this.agency = res;
            _this.autoAssign = res.autoAssign;
            load.dismiss();
        }, function (err) {
            load.dismiss();
            console.log(err, 'errrrrrrror');
        });
    };
    CaptainOrdersPage.prototype.getNotAssigned = function (status, pageNum) {
        var _this = this;
        this.myVar = status;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.ordersList = [];
            this.pageNum = 1;
        }
        console.log("orders");
        console.log(this.captain);
        this.orderService.getAllByStatus(status, this.captain.agencyId, false, pageNum).subscribe(function (res) {
            console.log(res);
            console.log("*************");
            if (pageNum == 0) {
                _this.ordersList = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.ordersList.push(element);
                });
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    CaptainOrdersPage.prototype.getAllOrders = function (status, pageNum) {
        var _this = this;
        this.myVar = status;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.ordersList = [];
            this.pageNum = 1;
        }
        this.orderService.getCaptainOrders(this.captain.id, status, pageNum).subscribe(function (res) {
            if (pageNum == 0) {
                _this.ordersList = res;
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.ordersList.push(element);
                });
            }
            if (pageNum == 0) {
                load.dismiss();
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    CaptainOrdersPage.prototype.viewOrder = function (orders) {
        var items = [];
        var flag = true;
        while (flag) {
            var index = orders.indexOf('-');
            console.log(index, 'vvvv');
            if (index != -1) {
                // for (let index = 0; index < orders.length; index++) {  
                console.log(orders, orders.length, 'sssssssssssss');
                console.log(index, 'index');
                console.log(orders.charAt(index));
                if (orders.charAt(index) === '-' && orders.charAt(index - 1) === ' ' && orders.charAt(index + 1) === ' ') {
                    var subOrder = {
                        name: orders.substring(0, index - 1),
                        index: items.length + 1
                    };
                    items.push(subOrder);
                    orders = orders.substring(index + 1, orders.length);
                }
                //}
            }
            else {
                flag = false;
            }
        }
        console.log(items);
        var subOrder1 = {
            name: orders,
            index: items.length + 1
        };
        items.push(subOrder1);
        console.log(items, 'mmmmmmmmmmmmmmm');
        return items;
    };
    CaptainOrdersPage.prototype.finish = function (item) {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.orderService.finishOrder(item.id).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.deliverOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log("success");
            load.dismiss();
            _this.getAllOrders(_this.myVar, 0);
        }, function (err) {
            console.log(err);
            var displayError = _this.deliverOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    CaptainOrdersPage.prototype.assignOrder = function (order) {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.orderService.assign(this.captain.id, order.id).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.assingOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            _this.getAllOrders(_this.myVar, 0);
        }, function (err) {
            console.log(err);
            var displayError = _this.assignOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    CaptainOrdersPage.prototype.logout = function () {
        this.loginService.logout();
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */]);
    };
    CaptainOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-captain-orders',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-orders\captain-orders.html"*/'<!--\n  Generated template for the CaptainsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{ \'CAPTAIN_ORDERS\' | translate }}\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button (click)="logout()" id="logout">\n        Logout\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <ion-grid style="width: 100%">\n    <ion-row>\n      <ion-col style="padding: 0px" *ngIf="autoAssign">\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'not assigned\', \'tap-notselected\': myVar != \'not assigned\'}"\n          (click)="getNotAssigned(\'not assigned\' , 0)">\n          <!-- <ion-icon name="close" item-start></ion-icon> -->\n          {{ \'NOT_ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px">\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'assigned\', \'tap-notselected\': myVar != \'assigned\'}"\n          (click)="getAllOrders(\'assigned\' , 0)">\n          <!-- <ion-icon name="stats" item-start></ion-icon> -->\n          {{ \'ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px">\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'delivered\', \'tap-notselected\': myVar != \'delivered\'}"\n          (click)="getAllOrders(\'delivered\' , 0)">\n          <!-- <ion-icon name="checkmark" item-start></ion-icon> -->\n          {{ \'DELIVERED\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div text-center *ngIf="ordersList.length == 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../../assets/img/sad.png" class="not-found-img">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let order of ordersList">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" src="../../assets/img/orders.jpg" />\n          </ion-col>\n\n          <ion-col col-9>\n\n            <div class="account-info info-div">\n              <p>\n                {{ \'NAME\' | translate }} : <strong text-wrap>{{order.name}}</strong>\n              </p>\n              <p>\n                {{ \'ADDRESS\' | translate }} 1 : <strong text-wrap>{{order.address}}</strong>\n              </p>\n              <p *ngIf="order.secondAddress != null && order.secondAddress != \'\'">\n                {{ \'ADDRESS\' | translate }} 2 : <strong text-wrap>{{order.secondAddress}}</strong>\n              </p>\n              <p>\n                {{ \'PHONE_NUMBER_PHONE\' | translate }} 1 : <strong text-wrap>{{order.firstPhone}}</strong>\n              </p>\n              <p *ngIf="order.secondPhone != null && order.secondPhone != \'\'">\n                {{ \'PHONE_NUMBER_PHONE\' | translate }} 2 : <strong text-wrap>{{order.secondPhone}}</strong>\n              </p>\n              <p>\n                {{ \'ORDERS\' | translate }} :-\n              </p>\n              <!-- <div *ngFor="let item of viewOrder(order.orders)">\n                <p style="margin-left: 15px;margin-right: 15px">\n                  {{item.index}}- <strong text-wrap>{{item.name}}</strong>\n                </p>\n              </div> -->\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class="account-info info-div2">\n          <ion-item class="item-background2">\n            <ion-grid style="padding: 0px">\n              <ion-row style="padding: 0px">\n                <ion-col col-6>\n                  <p>\n                    {{\'NAME\' | translate}}\n                  </p>\n                </ion-col>\n                <ion-col col-1 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>|</strong>\n                    </p>\n                  </ion-col>\n                <ion-col col-5 style="padding: 0px">\n                  <p text-center>\n                    {{\'PRICE\' | translate}}\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item class="item-background2" *ngFor="let sub of order.subOrders">\n            <ion-grid style="padding: 0px">\n              <ion-row style="padding: 0px">\n                <ion-col col-6 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>{{sub.name}}</strong>\n                  </p>\n                </ion-col>\n                <ion-col col-1 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>|</strong>\n                    </p>\n                  </ion-col>\n                <ion-col col-5 style="padding: 0px">\n                  <p text-center>\n                    <strong text-wrap>{{sub.price}}</strong>\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item class="item-background2">\n            <ion-grid style="padding: 0px">\n              <ion-row style="padding: 0px">\n                <ion-col col-6 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>{{\'DELIVER_PRICE\' | translate}}</strong>\n                  </p>\n                </ion-col>\n                <ion-col col-1 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>|</strong>\n                    </p>\n                  </ion-col>\n                <ion-col col-5 style="padding: 0px">\n                  <p text-center>\n                    <strong text-wrap>10.0</strong>\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item class="item-background2">\n            <ion-grid style="padding: 0px">\n              <ion-row style="padding: 0px">\n                <ion-col col-6 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>{{\'TOTAL\' | translate}}</strong>\n                  </p>\n                </ion-col>\n                <ion-col col-1 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>|</strong>\n                    </p>\n                  </ion-col>\n                <ion-col col-5 style="padding: 0px">\n                  <p text-center>\n                    <strong text-wrap>{{order.total}}</strong>\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </div>\n\n      <ion-buttons end class="btn-style" *ngIf="myVar == \'assigned\'">\n        <button ion-button (click)="finish(order)">\n          {{ \'DELIVER\' | translate }}\n        </button>\n      </ion-buttons>\n      <ion-buttons end class="btn-style" *ngIf="myVar == \'not assigned\'">\n        <button ion-button (click)="assignOrder(order)">\n          {{ \'ASSIGN_ORDER\' | translate }}\n        </button>\n      </ion-buttons>\n    </ion-item>\n\n\n\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="ordersList.length != 0">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-orders\captain-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CaptainOrdersPage);
    return CaptainOrdersPage;
}());

//# sourceMappingURL=captain-orders.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignCaptainsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agencies_agencies__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agency_captains_agency_captains__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the AssignCaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignCaptainsPage = /** @class */ (function () {
    function AssignCaptainsPage(navCtrl, navParams, datePicker, platform, principal, app, loading, builder, captainService, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.platform = platform;
        this.principal = principal;
        this.app = app;
        this.loading = loading;
        this.builder = builder;
        this.captainService = captainService;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.captainList = [];
        this.assingOrderSuccess = null;
        this.assignOrderError = null;
        this.agency = null;
        this.user = null;
        this.language = __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].direction;
        this.dates = [];
        this.selectedDate = new Date();
        this.startDate = '';
        this.endDate = '';
        this.isCordova = false;
        this.isCordova = this.platform.is("cordova");
        console.log(this.isCordova);
        this.agency = this.navParams.get("item");
        this.today = new Date();
        this.yesterday = new Date(this.today);
        this.yesterday.setDate(this.today.getDate() - 1);
        console.log(this.yesterday, 'yesterDay date');
        var CurrentYear = new Date().getFullYear();
        this.maxDate = CurrentYear + 1;
        this.minDate = CurrentYear;
        this.translateService.get(['ASSIGN_CAPTAIN_ERROR', 'ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.assignOrderError = values.ASSIGN_CAPTAIN_ERROR;
            _this.assingOrderSuccess = values.ASSIGN_CAPTAIN_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            //'userId':['', [Validators.required ]],
            'captainIds': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            // 'startDate': ['', [Validators.required]],
            // 'endDate': ['', [Validators.required]],
            'startTime': ['', []],
            'endTime': ['', []],
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.agency == null || _this.agency == undefined) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__agencies_agencies__["a" /* AgenciesPage */]);
            }
        });
        this.getAllCaptains();
    }
    AssignCaptainsPage.prototype.formatDate = function (date) {
        var strDate = "";
        strDate += date.getFullYear();
        strDate += "-";
        if ((date.getMonth() + 1) < 10) {
            strDate += "0";
        }
        var month = date.getMonth() + 1;
        strDate += month;
        strDate += "-";
        if (date.getDate() < 10) {
            strDate += "0";
        }
        strDate += date.getDate();
        console.log(strDate, "strDate");
        return strDate;
    };
    AssignCaptainsPage.prototype.add = function () {
        var date = {
            date: this.formatDate(this.selectedDate),
            startTime: this.myForm.get("startTime").value,
            endTime: this.myForm.get("endTime").value
        };
        this.dates.push(date);
        console.log(this.dates, 'dates');
        this.myForm.get("startTime").setValue('');
        this.myForm.get("endTime").setValue("");
        console.log(this.dates, 'dartes');
    };
    AssignCaptainsPage.prototype.dateSelected = function (event) {
        // console.log(event , "date");
        // console.log(this.selectedDate , '');
        // //console.log(this.myForm.get("startDate").value);
        // if(this.myForm.get("startTime").value != '' && this.myForm.get("endTime").value != '' ){
        //   let date = {
        //     date : this.lastSelectedDate,
        //     startTime:this.myForm.get("startTime").value,
        //     endTime:this.myForm.get("endTime").value
        //   }
        //   this.dates.push(date)
        //   this.myForm.get("startTime").setValue('');
        //   this.myForm.get("endTime").setValue("");
        //   console.log(this.dates , 'dartes');
        //   this.lastSelectedDate = event
        // }else if(this.myForm.get("startTime").value == '' && this.myForm.get("endTime").value == '' ){
        //   this.lastSelectedDate = event
        // }else{
        //   this.selectedDate = this.lastSelectedDate;
        //   let toast = this.toastCtrl.create({
        //     message: "ssssssssssssssss",
        //     duration: 3000,
        //     position: 'middle'
        //   });
        //   toast.present();
        // }
        console.log(event);
        this.selectedDate = event;
        //this.selectedDate.setDate(event.getDate());
        console.log(this.selectedDate);
    };
    AssignCaptainsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.user = account;
            }
        });
    };
    AssignCaptainsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignCaptainsPage');
    };
    AssignCaptainsPage.prototype.getAllCaptains = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.getNotAssigned().subscribe(function (res) {
            console.log(res, "res");
            _this.captainList = res;
            load.dismiss();
        }, function (err) {
            console.log(err, "err");
            load.dismiss();
        });
    };
    AssignCaptainsPage.prototype.assignCaptain = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        var ids = this.myForm.get("captainIds").value;
        console.log(ids, 'ids');
        if (this.myForm.get("startTime").value != null && this.myForm.get("startTime").value != '') {
            var date = {
                date: this.formatDate(this.selectedDate),
                startTime: this.myForm.get("startTime").value,
                endTime: this.myForm.get("endTime").value
            };
            this.dates.push(date);
        }
        var assignCaptains = {
            agencyId: 0,
            captainsIds: ids,
            adminAssign: false,
            // endDate:this.myForm.get("endDate").value,
            // startDate:this.myForm.get("startDate").value,
            // startTime: this.myForm.get("startTime").value,
            // endTime: this.myForm.get("endTime").value
            subAssignModels: this.dates
        };
        if (this.agency == null || this.agency == undefined) {
            assignCaptains.agencyId = this.user.id;
            assignCaptains.adminAssign = true;
        }
        else {
            assignCaptains.agencyId = this.agency.id;
        }
        this.captainService.assignCaptains(assignCaptains).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.assingOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            //this.navCtrl.push(AgenciesPage);
            if (_this.agency == null || _this.agency == undefined) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_8__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */]);
            }
            else {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__agencies_agencies__["a" /* AgenciesPage */]);
            }
        }, function (err) {
            var displayError = _this.assignOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    AssignCaptainsPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AssignCaptainsPage.prototype.back = function () {
        if (this.agency == null || this.agency == undefined) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__agencies_agencies__["a" /* AgenciesPage */]);
        }
    };
    AssignCaptainsPage.prototype.validateTimes = function () {
        if ((this.myForm.get("startTime").value != '' && this.myForm.get("endTime").value != '') || ((this.myForm.get("startTime").value == '' && this.myForm.get("endTime").value == '') && this.dates.length != 0)) {
            return false;
        }
        else {
            return true;
        }
    };
    AssignCaptainsPage.prototype.showDateTimePicker = function (event) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: false,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log(date);
            _this.startDate = '';
            _this.startDate += date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
            _this.startDate += ":";
            _this.startDate += date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
            console.log(_this.startDate);
            //event.target.value = date 
        }, function (err) { return console.log('Error occurred while getting date: ' + err); });
    };
    AssignCaptainsPage.prototype.showDateTimePickerEnd = function (event) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: false,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log(date);
            _this.endDate = '';
            _this.endDate += date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
            _this.endDate += ":";
            _this.endDate += date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
            console.log(_this.endDate);
            //event.target.value = date 
        }, function (err) { return console.log('Error occurred while getting date: ' + err); });
    };
    AssignCaptainsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-assign-captains',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\assign-captains\assign-captains.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n          <ion-title>{{ \'ASSIGN-CAPTAINS\' | translate }}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item style="padding-bottom: 15px;">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="bicycle" item-start class="text-primary"></ion-icon>\n          {{ \'CAPTAIN\' | translate }}\n        </ion-label>\n        <ion-select formControlName="captainIds" multiple [lang]="language" [dir]="direction">\n          <ion-option *ngFor="let item of captainList" [selected]="item.name ==item.name" [value]="item.id" [dir]="direction">{{item.name}} </ion-option>\n\n        </ion-select>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'captainIds\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n      <div [dir]="direction" class="account-info info-div">\n          <ion-item class="item-background" *ngIf="dates.length == 0">\n              <p text-center>\n                <strong text-wrap>{{\'NO_ITEMS_YET\' | translate}}</strong>\n              </p>\n            </ion-item>\n        <ion-item class="item-background" *ngFor="let item of dates;let count = index;">\n          <p style="margin-left: 15px;" [dir]="direction">\n           {{ \'DAY\' | translate }} {{item.date}} {{ \'FROM\' | translate}} {{item.startTime}} {{ \'TO\' | translate}} {{item.endTime}}\n          </p>\n        </ion-item>\n      </div>\n\n      <ionic-calendar-date-picker [fromDate]="yesterday" [date]="selectedDate" [backgroundStyle]="{ \'background-color\': \'transparent\' }"\n        (onSelect)="dateSelected($event)" [lang]="language" [dir]="direction"></ionic-calendar-date-picker>\n\n\n      <!-- <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n          {{ \'START_DATE\' | translate }}\n        </ion-label>\n        <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}"  min="{{minDate}}" formControlName="startDate" [lang]="language" [dir]="direction"></ion-datetime> \n      </ion-item> -->\n      <!-- <p class="validationHint" *ngIf="hasError(\'startDate\', \'required\')"> {{ \'REQURIED\' | translate }} </p> -->\n      <!-- <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n            {{ \'END_DATE\' | translate }}\n          </ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}"  min="{{minDate}}" formControlName="endDate" [lang]="language" [dir]="direction"></ion-datetime>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'endDate\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n       -->\n\n\n      <!-- <ion-item>\n        <ion-label stacked color="primary">Start</ion-label>\n        <ion-input [(ngModel)]="startDate" formControlName="startTime" type="text" placeholder="Enter start date" readonly="readonly"\n          (focus)="$event.stopPropagation(); showDateTimePicker($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary">End</ion-label>\n        <ion-input [(ngModel)]="endDate" formControlName="endTime" type="text" placeholder="Enter end date" readonly="readonly" (focus)="$event.stopPropagation(); showDateTimePicker($event)"></ion-input>\n      </ion-item> -->\n      <ion-item *ngIf="isCordova">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n          {{ \'START_TIME\' | translate }}\n        </ion-label>\n        <ion-input [(ngModel)]="startDate" [lang]="language" [dir]="direction" formControlName="startTime" type="text" readonly (focus)="$event.stopPropagation(); showDateTimePicker($event)"></ion-input>\n      </ion-item>\n      <p class="validationHint" *ngIf="isCordova && hasError(\'startTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <ion-item *ngIf="isCordova">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n          {{ \'END_TIME\' | translate }}\n        </ion-label>\n        <ion-input [(ngModel)]="endDate" [lang]="language" [dir]="direction" formControlName="endTime" type="text" readonly (focus)="$event.stopPropagation(); showDateTimePickerEnd($event)"></ion-input>\n      </ion-item>\n      <p class="validationHint" *ngIf="isCordova && hasError(\'endTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n      <ion-item *ngIf="!isCordova">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n          {{ \'START_TIME\' | translate }}\n        </ion-label>\n        <ion-datetime displayFormat="hh:mm a" pickerFormat="hh:mm a" formControlName="startTime" [lang]="en" [dir]="ltr"></ion-datetime>\n      </ion-item>\n      <p class="validationHint" *ngIf="!isCordova && hasError(\'startTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <ion-item *ngIf="!isCordova">\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n          {{ \'END_TIME\' | translate }}\n        </ion-label>\n        <ion-datetime displayFormat="hh:mm a" pickerFormat="hh:mm a" formControlName="endTime" [lang]="en" [dir]="ltr"></ion-datetime>\n      </ion-item>\n      <p class="validationHint" *ngIf="!isCordova&&hasError(\'endTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n    </form>\n\n    <ion-buttons end class="btn-style">\n      <button ion-button (click)="add()" [disabled]="!this.myForm.get(\'startTime\').value.length>0 || !this.myForm.get(\'endTime\').value.length>0">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="assignCaptain()" [disabled]="!myForm.valid || validateTimes()">\n        {{ \'ASSIGN_CAPTAINS_BUTTON\' | translate }}\n      </button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\assign-captains\assign-captains.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_principal_service__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_principal_service__["a" /* Principal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */]) === "function" && _l || Object])
    ], AssignCaptainsPage);
    return AssignCaptainsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=assign-captains.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainAssignDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__captains_captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_assign_details_sub_assign_details__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the CaptainAssignDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaptainAssignDetailsPage = /** @class */ (function () {
    function CaptainAssignDetailsPage(navCtrl, navParams, builder, platform, loading, translateService, accountService, captainService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.platform = platform;
        this.loading = loading;
        this.translateService = translateService;
        this.accountService = accountService;
        this.captainService = captainService;
        this.assingCaptains = [];
        this.pleaseWait = null;
        this.language = __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].direction;
        this.seachFlag = false;
        this.seaarchFilter = {
            captainId: null,
            startDate: null,
            endDate: null,
            agencyId: null
        };
        this.captainList = [];
        this.agenciesList = [];
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.captain = navParams.get("item");
        var CurrentYear = new Date().getFullYear();
        this.maxDate = CurrentYear + 2;
        this.myForm = builder.group({
            //'userId':['', [Validators.required ]],
            'captainId': ['', []],
            'agencyId': ['', []],
            'startDate': ['', []],
            'endDate': ['', []],
        });
        this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__captains_captains__["a" /* CaptainsPage */]);
        });
        this.getCaptainAssignes(0);
        if (this.captain == null || this.captain == undefined) {
            this.getAllCaptains();
            this.getAllAgencyies();
        }
    }
    CaptainAssignDetailsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getCaptainAssignes(_this.pageNum);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    CaptainAssignDetailsPage.prototype.getAllCaptains = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.captainsPickList().subscribe(function (res) {
            console.log(res, "res");
            _this.captainList = res;
            load.dismiss();
        }, function (err) {
            console.log(err, "err");
            load.dismiss();
        });
    };
    CaptainAssignDetailsPage.prototype.getAllAgencyies = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.accountService.getAllAgency().subscribe(function (res) {
            console.log(res, "res");
            _this.agenciesList = res;
            load.dismiss();
        }, function (err) {
            console.log(err, "err");
            load.dismiss();
        });
    };
    CaptainAssignDetailsPage.prototype.getCaptainAssignes = function (pageNum) {
        var _this = this;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.assingCaptains = [];
        }
        if (this.captain == null || this.captain == undefined) {
            if (this.seaarchFilter.endDate == '' || this.seaarchFilter.endDate == undefined) {
                this.seaarchFilter.endDate = null;
            }
            if (this.seaarchFilter.startDate == '' || this.seaarchFilter.startDate == undefined) {
                this.seaarchFilter.startDate = null;
            }
            var captainId = this.myForm.get("captainId").value;
            if (captainId != null && captainId != undefined && captainId != '') {
                this.seaarchFilter.captainId = captainId;
            }
            else {
                this.seaarchFilter.captainId = null;
            }
            var agencyId = this.myForm.get("agencyId").value;
            if (agencyId != null && agencyId != undefined && agencyId != '') {
                this.seaarchFilter.agencyId = agencyId;
            }
            else {
                this.seaarchFilter.agencyId = null;
            }
            console.log('searchFilter', this.seaarchFilter);
        }
        else {
            this.seaarchFilter.endDate = null;
            this.seaarchFilter.startDate = null;
            this.seaarchFilter.agencyId = null;
            this.seaarchFilter.captainId = this.captain.id;
        }
        this.captainService.getCaptainAssignDetails(this.seaarchFilter, pageNum).subscribe(function (res) {
            if (pageNum == 0) {
                _this.assingCaptains = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.assingCaptains.push(element);
                });
            }
        }, function (err) {
            console.log(err, 'errorrrr');
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    CaptainAssignDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaptainAssignDetailsPage');
    };
    CaptainAssignDetailsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__captains_captains__["a" /* CaptainsPage */]);
    };
    CaptainAssignDetailsPage.prototype.toggleSearch = function () {
        this.seachFlag = !this.seachFlag;
    };
    CaptainAssignDetailsPage.prototype.clear = function () {
        this.myForm.get("captainId").setValue("");
        this.myForm.get("agencyId").setValue("");
        this.myForm.get("startDate").setValue("");
        this.myForm.get("endDate").setValue("");
        this.seaarchFilter = {
            captainId: null,
            startDate: null,
            endDate: null,
            agencyId: null
        };
        this.myForm.get("startDate").clearValidators();
        this.myForm.get("startDate").updateValueAndValidity();
        this.myForm.get("endDate").clearValidators();
        this.myForm.get("endDate").updateValueAndValidity();
    };
    CaptainAssignDetailsPage.prototype.dateChange = function () {
        if ((this.seaarchFilter.startDate != null && this.seaarchFilter.startDate != undefined && this.seaarchFilter.startDate != '') || (this.seaarchFilter.endDate != null && this.seaarchFilter.endDate != undefined && this.seaarchFilter.endDate != '')) {
            this.myForm.get("startDate").clearValidators();
            this.myForm.get("startDate").updateValueAndValidity();
            this.myForm.get("startDate").setValidators(__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required);
            this.myForm.get("startDate").updateValueAndValidity();
            this.myForm.get("endDate").clearValidators();
            this.myForm.get("endDate").updateValueAndValidity();
            this.myForm.get("endDate").setValidators(__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required);
            this.myForm.get("endDate").updateValueAndValidity();
        }
        else {
            this.myForm.get("startDate").clearValidators();
            this.myForm.get("startDate").updateValueAndValidity();
            this.myForm.get("endDate").clearValidators();
            this.myForm.get("endDate").updateValueAndValidity();
        }
    };
    CaptainAssignDetailsPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    CaptainAssignDetailsPage.prototype.assignDetails = function (assign) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__sub_assign_details_sub_assign_details__["a" /* SubAssignDetailsPage */], { item: assign, from: "CaptainAssignDetailsPage", captain: this.captain });
    };
    CaptainAssignDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-captain-assign-details',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-assign-details\captain-assign-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n      <button ion-button menuToggle *ngIf="captain == null || captain == undefined">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n    \n    \n        <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1 *ngIf="captain != null && captain != undefined">\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11 [style.margin-top]="captain != null && captain != undefined && language == \'en\' ? \'10px\' : \'0px\'">\n                <ion-title [style.margin-top]="captain != null && captain != undefined && language == \'ar\' ? \'7px\' : \'0px\'">{{ \'CAPTAIN_ASSIGN_DETAILS\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    \n    \n    \n    \n    \n    \n        <ion-buttons end class="btn-style"  *ngIf="captain == null || captain == undefined">\n          <button ion-button (click)="toggleSearch()">\n              <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    \n\n\n\n\n\n\n\n    <!-- <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11 style="margin-top: 5px;">\n          <ion-title>{{ \'CAPTAIN_ASSIGN_DETAILS\' | translate }}</ion-title>\n\n          <ion-buttons end class="btn-style" *ngIf="captain == null || captain == undefined">\n            <button ion-button (click)="toggleSearch()">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-buttons>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page2">\n\n    <div class="login-content">\n\n    <form class="list-form" [formGroup]="myForm" style="width: 86%;margin-right: 7%;margin-left: 7%;"  *ngIf="seachFlag">\n\n    <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'CAPTAIN\' | translate }}\n        </ion-label>\n        <ion-select formControlName="captainId" [lang]="language" [dir]="direction">\n          <ion-option *ngFor="let item of captainList" [selected]="item.name ==item.name" [value]="item.id" [dir]="direction">{{item.name}} </ion-option>      \n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            {{ \'AGENCY\' | translate }}\n          </ion-label>\n          <ion-select formControlName="agencyId" [lang]="language" [dir]="direction">\n            <ion-option *ngFor="let item of agenciesList" [selected]="item.email ==item.email" [value]="item.id" [dir]="direction">{{item.firstName}} {{item.lastName}}</ion-option>      \n          </ion-select>\n        </ion-item>\n      <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n            {{ \'START_DATE_FROM\' | translate }}\n          </ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}" (ionChange)="dateChange()" formControlName="startDate" [(ngModel)] ="seaarchFilter.startDate" [lang]="language" [dir]="direction"></ion-datetime>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'startDate\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <ion-item>\n            <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n              <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n              {{ \'START_DATE_TO\' | translate }}\n            </ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}" (ionChange)="dateChange()" formControlName="endDate" [(ngModel)] ="seaarchFilter.endDate" [lang]="language" [dir]="direction"></ion-datetime>\n          </ion-item>\n          <p class="validationHint" *ngIf="hasError(\'endDate\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n  </form>\n\n  <ion-grid  *ngIf="seachFlag">\n\n      <ion-row>\n          <ion-col col-6>\n            <ion-buttons end class="btn-style" style="width: 100%;">\n              <button ion-button (click)="getCaptainAssignes(0)" style="width: 100%;" [disabled]  = "!myForm.valid">\n                {{ \'SEARCH\' | translate }}\n              </button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-6>\n            <ion-buttons end class="btn-style" style="width: 100%;">\n              <button ion-button (click)="clear()" style="width: 100%;">\n                {{ \'CLEAR_FIELDS\' | translate }}\n              </button>\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n  \n\n\n  <div text-center *ngIf="assingCaptains.length == 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../../assets/img/sad.png" class="not-found-img">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let assign of assingCaptains">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" src="../../assets/img/clockImage.jpg" />\n          </ion-col>\n\n          <ion-col class="btn-col" col-9>\n\n            <div class="account-info info-div">\n                <p style="margin-top: 13px">\n                    {{\'CAPTAIN_TEXT\' | translate}} :\n                  <strong text-wrap> {{assign.captainName}}</strong>\n                </p>\n              <p style="margin-top: 13px">\n                  {{\'AGENCY_TEXT\' | translate}} :\n                <strong text-wrap> {{assign.firstName}} {{assign.lastName}}</strong>\n              </p>\n\n              <p style="margin-top: 10px">\n                {{\'FROM\' | translate}} :\n                <strong text-wrap>{{assign.startDate}}</strong>\n              </p>\n              <p style="margin-top: 10px">\n                {{\'TO\' | translate}} :\n                <strong text-wrap>{{assign.endDate}}</strong>\n              </p>\n              <!-- <p style="margin-top: 10px">\n                {{\'FROM\' | translate}} :\n                <strong text-wrap>{{assign.startTime}}</strong>\n              </p>\n              <p style="margin-top: 10px">\n                {{\'TO\' | translate}} :\n                <strong text-wrap>{{assign.endTime}}</strong>\n              </p> -->\n              <p style="margin-top: 10px">\n                {{\'HOURS_COUNT\' | translate}} :\n                <strong text-wrap>{{assign.hoursResult}}</strong>\n              </p>\n              <p style="margin-top: 10px" *ngIf="assign.unAssignDetails != null && assign.unAssignDetails != \'\'">\n                {{\'STATUS\' | translate}} :\n                <strong text-wrap>{{assign.unAssignDetails}}</strong>\n              </p>\n              <p style="margin-top: 10px" *ngIf="assign.unAssignDetails == null || assign.unAssignDetails == \'\'">\n                {{\'STATUS\' | translate}} :\n                <strong text-wrap>{{\'STILL_ASSIGN\' | translate}}</strong>\n              </p>\n\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-buttons class="btn-style" style="width: 100%; padding: 0px;">\n              <button ion-button (click)="assignDetails(assign)" style="width: 100%;padding: 0px;">\n                {{ \'VIEW_ASSIGN_DETAILS\' | translate }}\n              </button>\n            </ion-buttons>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="assingCaptains.length != 0">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-assign-details\captain-assign-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_captain_service__["a" /* CaptainService */]])
    ], CaptainAssignDetailsPage);
    return CaptainAssignDetailsPage;
}());

//# sourceMappingURL=captain-assign-details.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__captains_captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_captain_edit_captain__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CaptainDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaptainDetailsPage = /** @class */ (function () {
    function CaptainDetailsPage(navCtrl, navParams, platform, loading, translateService, captainService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loading = loading;
        this.translateService = translateService;
        this.captainService = captainService;
        this.captain = {
            id: 0,
            name: "",
            code: "",
            phone: "",
            email: "",
            orderCount: '',
            creationDate: '2019-01-01T00:00:00.000Z',
            password: ""
        };
        this.togglePassword = true;
        this.passwordEye = "eye";
        this.language = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].direction;
        this.item = navParams.get("item");
        this.translateService.get(['PLEASE_WAIT']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__captains_captains__["a" /* CaptainsPage */]);
        });
        this.getCaptain();
    }
    CaptainDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaptainDetailsPage');
    };
    CaptainDetailsPage.prototype.getCaptain = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.getCaptainDetails(this.item.id).subscribe(function (res) {
            console.log(res);
            _this.captain = res;
            load.dismiss();
        }, function (err) {
            console.log(err);
            load.dismiss();
        });
    };
    CaptainDetailsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__captains_captains__["a" /* CaptainsPage */]);
    };
    CaptainDetailsPage.prototype.getFormattedDate = function (dateString) {
        var date = new Date(dateString);
        var str = date.getFullYear() + "-";
        str += (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
        str += "-";
        str += date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        str += " ";
        str += date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        str += ":";
        str += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        str += ":";
        str += date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return str;
    };
    CaptainDetailsPage.prototype.togglePasswordMethod = function () {
        this.togglePassword = !this.togglePassword;
        if (this.togglePassword) {
            this.passwordEye = "eye";
        }
        else {
            this.passwordEye = "eye-off";
        }
    };
    CaptainDetailsPage.prototype.viewStars = function (password) {
        console.log(password);
        var result = "";
        for (var i = 0; i < password.length; i++) {
            result += "*";
        }
        return result;
    };
    CaptainDetailsPage.prototype.editCaptain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__edit_captain_edit_captain__["a" /* EditCaptainPage */], { item: this.captain, captain: this.item });
    };
    CaptainDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-captain-details',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-details\captain-details.html"*/'<!--\n  Generated template for the CaptainDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px;padding-bottom: 0px;padding-top: 0px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-9.5 [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n          <ion-title>{{ \'CAPTAIN_DETAILS\' | translate }}</ion-title>\n        </ion-col>\n        <ion-col col-1 text-center>\n            <ion-buttons style="padding-bottom: 0px;padding-top: 0px" class="btn-style" >\n              <button ion-button (click)="editCaptain()">\n                <ion-icon name="create"></ion-icon>\n              </button>\n            </ion-buttons>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <div padding text-center style="width: 100%;height:40%;">\n\n\n    <div [ngClass]="language == \'en\' ?  \'circle-pic-div\' : \'circle-pic-div-ar\'" style="width:100%;height: 70%;" text-center>\n\n      <img class="circle-pic" style="width: 50%;height: 100%;" *ngIf="!captain.image || captain.image == \'O\'" src="../../assets/img/person.png"\n      />\n      <img class="circle-pic" style="width: 50%;height: 100%;" *ngIf="captain.image  && captain.image != \'O\'" [src]="[\'data:image/jpg;base64\',captain.image]"\n      />\n\n    </div>\n\n\n    <h2 ion-text style="color: black" text-wrap>\n      {{ captain.name }}\n    </h2>\n  </div>\n\n  <div class="account-info info-div" style="margin-top: 5%;padding-right: 10px">\n      <ion-item class="item-background">\n          <p>\n            {{\'CODE\' | translate}} :\n            <strong text-wrap>{{captain.code}}</strong>\n          </p>\n        </ion-item>\n      <ion-item class="item-background">\n          <p>\n            {{\'PHONE\' | translate}} :\n            <strong text-wrap>{{captain.phone}}</strong>\n          </p>\n        </ion-item>\n    <ion-item class="item-background">\n      <p>\n        {{\'EMAIL\' | translate}} :\n        <strong text-wrap>{{captain.email}}</strong>\n      </p>\n    </ion-item>\n    <ion-item class="item-background">\n      <p>\n        {{\'CREATION_DATE\' | translate}} :\n        <strong text-wrap>{{getFormattedDate(captain.creationDate)}}</strong>\n      </p>\n    </ion-item>\n    <ion-item class="item-background">\n      <p>\n        {{\'ORDERS_COUNT\' | translate}} :\n        <strong text-wrap>{{captain.orderCount}}</strong>\n      </p>\n    </ion-item>\n    <ion-item class="item-background">\n      <p>\n        {{\'PASSWORD\' | translate}} :\n        <strong text-wrap >{{ togglePassword ? viewStars(captain.password) : captain.password}}\n          <ion-icon [name]="passwordEye" (click)="togglePasswordMethod()" [style.margin-right]="language == \'en\' ? \'0px\' : \'10px\'" [style.margin-left]="language == \'en\' ? \'10px\' : \'0px\'"></ion-icon>\n        </strong>\n        </p>\n    </ion-item>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-details\captain-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]])
    ], CaptainDetailsPage);
    return CaptainDetailsPage;
}());

//# sourceMappingURL=captain-details.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agencies_agencies__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_agency_edit_agency__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AgencyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgencyDetailsPage = /** @class */ (function () {
    function AgencyDetailsPage(navCtrl, navParams, platform, loading, translateService, accountService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loading = loading;
        this.translateService = translateService;
        this.accountService = accountService;
        this.agencyDetail = {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            orderCount: '',
            creationDate: '2019-01-01T00:00:00.000Z',
            password: ""
        };
        this.passwordEye = "eye";
        this.language = __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].direction;
        this.togglePassword = true;
        this.item = navParams.get("item");
        this.translateService.get(['PLEASE_WAIT']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__agencies_agencies__["a" /* AgenciesPage */]);
        });
        this.getAgency();
    }
    AgencyDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgencyDetailsPage');
    };
    AgencyDetailsPage.prototype.getAgency = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.accountService.getAgencyDetails(this.item.id).subscribe(function (res) {
            console.log(res);
            _this.agencyDetail = res;
            load.dismiss();
        }, function (err) {
            console.log(err);
            load.dismiss();
        });
    };
    AgencyDetailsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__agencies_agencies__["a" /* AgenciesPage */]);
    };
    AgencyDetailsPage.prototype.getFormattedDate = function (dateString) {
        var date = new Date(dateString);
        var str = date.getFullYear() + "-";
        str += (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
        str += "-";
        str += date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        str += " ";
        str += date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        str += ":";
        str += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        str += ":";
        str += date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return str;
    };
    AgencyDetailsPage.prototype.togglePasswordMethod = function () {
        this.togglePassword = !this.togglePassword;
        if (this.togglePassword) {
            this.passwordEye = "eye";
        }
        else {
            this.passwordEye = "eye-off";
        }
    };
    AgencyDetailsPage.prototype.viewStars = function (password) {
        console.log(password);
        var result = "";
        for (var i = 0; i < password.length; i++) {
            result += "*";
        }
        return result;
    };
    AgencyDetailsPage.prototype.editAgency = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__edit_agency_edit_agency__["a" /* EditAgencyPage */], { item: this.agencyDetail, agency: this.item });
    };
    AgencyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agency-details',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\agency-details\agency-details.html"*/'<!--\n  Generated template for the AgencyDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px;padding-bottom: 0px;padding-top: 0px" class="btn-style" >\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-9.5  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n          <ion-title>{{ \'AGENCY_DETAILS\' | translate }}</ion-title>\n        </ion-col>\n        <ion-col col-1 text-center>\n            <ion-buttons style="padding-bottom: 0px;padding-top: 0px;" class="btn-style" >\n              <button ion-button (click)="editAgency()">\n                <ion-icon name="create"></ion-icon>\n              </button>\n            </ion-buttons>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <div padding text-center style="width: 100%;height:40%;">\n    <div class="person"></div>\n    <h2 ion-text style="color: black" text-wrap>\n      {{ agencyDetail.firstName }} {{ agencyDetail.lastName }}\n    </h2>\n  </div>\n\n  <div class="account-info info-div" style="margin-top: 10%;padding-right: 10px">\n    <ion-item class="item-background">\n      <p>\n        {{\'EMAIL\' | translate}} :\n        <strong text-wrap>{{agencyDetail.email}}</strong>\n      </p>\n    </ion-item>\n    <ion-item class="item-background">\n    <p>\n      {{\'CREATION_DATE\' | translate}} :\n      <strong text-wrap>{{getFormattedDate(agencyDetail.creationDate)}}</strong>\n    </p>\n  </ion-item>\n    <ion-item class="item-background">\n    <p>\n      {{\'ORDERS_COUNT\' | translate}} :\n      <strong text-wrap>{{agencyDetail.orderCount}}</strong>\n    </p>\n  </ion-item>\n  <ion-item class="item-background">\n    <p>\n      {{\'PASSWORD\' | translate}} :\n      <strong text-wrap >{{ togglePassword ? viewStars(agencyDetail.password) : agencyDetail.password}}\n        <ion-icon [name]="passwordEye" (click)="togglePasswordMethod()" [style.margin-right]="language == \'en\' ? \'0px\' : \'10px\'" [style.margin-left]="language == \'en\' ? \'10px\' : \'0px\'"></ion-icon>\n      </strong>\n      </p>\n  </ion-item>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\agency-details\agency-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_account_service__["a" /* AccountService */]) === "function" && _f || Object])
    ], AgencyDetailsPage);
    return AgencyDetailsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=agency-details.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Principal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Principal = /** @class */ (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    Principal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]])
    ], Principal);
    return Principal;
}());

//# sourceMappingURL=principal.service.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = /** @class */ (function () {
    function AccountService(http, authservice) {
        this.http = http;
        this.authservice = authservice;
    }
    AccountService.prototype.get = function () {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
        });
        var options = {
            headers: headers
        };
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/account?access_token=' + this.authservice.getToken());
    };
    AccountService.prototype.getById = function (userId) {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/account/' + userId + '?access_token=' + this.authservice.getToken());
    };
    AccountService.prototype.getAgencyDetails = function (userId) {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/agencyAccountDetails/' + userId + '?access_token=' + this.authservice.getToken());
    };
    AccountService.prototype.getAllAgency = function () {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/users/getAllAgency?access_token=' + this.authservice.getToken());
    };
    AccountService.prototype.getAllAgencyWithPagination = function (pageNum) {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/users/getAllAgencyWithPagenation/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    AccountService.prototype.save = function (account) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/account?access_token=' + this.authservice.getToken(), account);
    };
    AccountService.prototype.registerCaptain = function (accountInfo) {
        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/registerCaptainUser?access_token=' + this.authservice.getToken(), accountInfo);
    };
    AccountService.prototype.registerAgency = function (accountInfo) {
        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/registerAgency?access_token=' + this.authservice.getToken(), accountInfo);
    };
    AccountService.prototype.updateAutoAssign = function (accountInfo) {
        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/updateAutoAssign?access_token=' + this.authservice.getToken(), accountInfo);
    };
    AccountService.prototype.updateUserInformation = function (accountInfo) {
        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/updateUserInformation?access_token=' + this.authservice.getToken(), accountInfo);
    };
    AccountService.prototype.updateLanguage = function (updateLanguageModel) {
        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/uaa/api/updateLanguage?access_token=' + this.authservice.getToken(), updateLanguageModel);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__["a" /* AuthServerProvider */]])
    ], AccountService);
    return AccountService;
}());

//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* unused harmony export MainPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'LandingPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'HomePage';
var Tab2Root = 'EntityPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-address/add-address.module": [
		302
	],
	"../pages/add-agency/add-agency.module": [
		401
	],
	"../pages/add-captain/add-captain.module": [
		409
	],
	"../pages/add-order/add-order.module": [
		410
	],
	"../pages/admin-dashboard/admin-dashboard.module": [
		566
	],
	"../pages/agencies/agencies.module": [
		411
	],
	"../pages/agency-captains/agency-captains.module": [
		412
	],
	"../pages/agency-details/agency-details.module": [
		413
	],
	"../pages/assign-captains/assign-captains.module": [
		414
	],
	"../pages/assign-order/assign-order.module": [
		546
	],
	"../pages/captain-assign-details/captain-assign-details.module": [
		574
	],
	"../pages/captain-details/captain-details.module": [
		547
	],
	"../pages/captain-evaluation/captain-evaluation.module": [
		548
	],
	"../pages/captain-orders/captain-orders.module": [
		549
	],
	"../pages/captains-map/captains-map.module": [
		550
	],
	"../pages/captains/captains.module": [
		551
	],
	"../pages/choose-address/choose-address.module": [
		552
	],
	"../pages/edit-agency/edit-agency.module": [
		553
	],
	"../pages/edit-assign-captain/edit-assign-captain.module": [
		554
	],
	"../pages/edit-captain/edit-captain.module": [
		555
	],
	"../pages/entities/entity.module": [
		556
	],
	"../pages/home/home.module": [
		573
	],
	"../pages/landing/landing.module": [
		564
	],
	"../pages/login/login.module": [
		978,
		4
	],
	"../pages/menu/menu.module": [
		979,
		3
	],
	"../pages/orders-map/orders-map.module": [
		567
	],
	"../pages/orders/orders.module": [
		568
	],
	"../pages/settings/settings.module": [
		569
	],
	"../pages/signup/signup.module": [
		570
	],
	"../pages/sub-assign-details/sub-assign-details.module": [
		571
	],
	"../pages/tabs/tabs.module": [
		980,
		2
	],
	"../pages/tutorial/tutorial.module": [
		981,
		1
	],
	"../pages/user-orders/user-orders.module": [
		572
	],
	"../pages/welcome/welcome.module": [
		982,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 301;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_address__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_address_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddAddressPageModule = /** @class */ (function () {
    function AddAddressPageModule() {
    }
    AddAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_address_service__["a" /* AddressService */]
            ]
        })
    ], AddAddressPageModule);
    return AddAddressPageModule;
}());

//# sourceMappingURL=add-address.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = /** @class */ (function () {
    function OrderService(http, authservice) {
        this.http = http;
        this.authservice = authservice;
    }
    OrderService.prototype.save = function (captain) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/orders?access_token=' + this.authservice.getToken(), captain);
    };
    OrderService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/orders?access_token=' + this.authservice.getToken());
    };
    OrderService.prototype.getAllByStatus = function (status, agencyId, isUserOrder, pageNum) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/ordersByStatus/' + status + '/' + agencyId + '/' + isUserOrder + '/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    OrderService.prototype.getAdminStatistics = function (searchFilter) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/getAdminDashboard?access_token=' + this.authservice.getToken(), searchFilter);
    };
    OrderService.prototype.getCaptainOrders = function (captainId, status, pageNum) {
        console.log(captainId, 'ssssssssssssssss');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/ordersToCaptain/' + captainId + '/' + status + '/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    OrderService.prototype.getUserOrders = function (userId, captainId, status, pageNum) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/ordersToUser/' + userId + '/' + captainId + '/' + status + '/' + pageNum + '?access_token=' + this.authservice.getToken());
    };
    OrderService.prototype.assign = function (captainId, orderId) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/assignOrder/orderId/' + orderId + '/captainId/' + captainId + '?access_token=' + this.authservice.getToken(), null);
    };
    OrderService.prototype.assignToFreeCaptain = function (orderId) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/assignOrderToFreeCaptain/orderId/' + orderId + '?access_token=' + this.authservice.getToken(), null);
    };
    OrderService.prototype.finishOrder = function (orderId) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */].API_URL_login + '/tlabatac/api/finishOrder/orderId/' + orderId + '?access_token=' + this.authservice.getToken(), null);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__auth_jwt_service__["a" /* AuthServerProvider */]])
    ], OrderService);
    return OrderService;
}());

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__captain_orders_captain_orders__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_dashboard_admin_dashboard__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_orders_user_orders__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams, app, principal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.principal = principal;
        this.validateUser();
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.start = function () {
        //console.log("****");
        //this.app.getRootNavs()[0].setRoot(LoginPage);
        this.navCtrl.setRoot('LoginPage');
    };
    LandingPage.prototype.validateUser = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null) {
                //this.app.getRootNavs()[0].setRoot(FirstRunPage);
            }
            else {
                //this.account = account;
                // console.log(this.account, '555555555555');
                if (account.authorities[0] === 'ROLE_CAPTAIN') {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__captain_orders_captain_orders__["a" /* CaptainOrdersPage */]);
                }
                else if (account.authorities[0] == 'ROLE_AGENCY') {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__orders_orders__["a" /* OrdersPage */]);
                }
                else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__user_orders_user_orders__["a" /* UserOrdersPage */]);
                }
                else {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */]);
                }
            }
        });
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\landing\landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'WELCOME_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/img/talabatk_logo.jpeg">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <!-- <div class="wrapper"> -->\n        <button ion-button round class="btn-style" style="width: 120px;" (click)="start()">{{ \'Start\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- </div> -->\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_principal_service__["a" /* Principal */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminDashboardPage = /** @class */ (function () {
    function AdminDashboardPage(navCtrl, navParams, captainService, builder, orderServic, app, loading, translateService, principal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.captainService = captainService;
        this.builder = builder;
        this.orderServic = orderServic;
        this.app = app;
        this.loading = loading;
        this.translateService = translateService;
        this.principal = principal;
        this.seachFlag = false;
        this.captainList = [];
        this.seaarchFilter = {
            captainId: null,
            startDate: null,
            endDate: null
        };
        this.language = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].direction;
        this.translateService.get(['PLEASE_WAIT']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        var CurrentYear = new Date().getFullYear();
        this.maxDate = CurrentYear + 2;
        this.myForm = builder.group({
            //'userId':['', [Validators.required ]],
            'captainId': ['', []],
            'startDate': ['', []],
            'endDate': ['', []],
        });
        this.getAdminStatistcs();
        this.getAllCaptains();
    }
    AdminDashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.account = account;
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    AdminDashboardPage.prototype.toggleSearch = function () {
        this.seachFlag = !this.seachFlag;
    };
    AdminDashboardPage.prototype.getAllCaptains = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.captainsPickList().subscribe(function (res) {
            console.log(res, "res");
            _this.captainList = res;
            load.dismiss();
        }, function (err) {
            console.log(err, "err");
            load.dismiss();
        });
    };
    AdminDashboardPage.prototype.getAdminStatistcs = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        if (this.seaarchFilter.endDate == '' || this.seaarchFilter.endDate == undefined) {
            this.seaarchFilter.endDate = null;
        }
        if (this.seaarchFilter.startDate == '' || this.seaarchFilter.startDate == undefined) {
            this.seaarchFilter.startDate = null;
        }
        var captainId = this.myForm.get("captainId").value;
        if (captainId != null && captainId != undefined && captainId != '') {
            this.seaarchFilter.captainId = captainId;
        }
        else {
            this.seaarchFilter.captainId = null;
        }
        console.log(this.seaarchFilter, 'filter');
        this.orderServic.getAdminStatistics(this.seaarchFilter).subscribe(function (res) {
            console.log(res, 'res');
            _this.statistic = res;
            load.dismiss();
        }, function (err) {
            console.log(err, 'err');
            load.dismiss();
        });
    };
    AdminDashboardPage.prototype.clear = function () {
        this.myForm.get("captainId").setValue("");
        this.myForm.get("startDate").setValue("");
        this.myForm.get("endDate").setValue("");
        this.seaarchFilter = {
            captainId: null,
            startDate: null,
            endDate: null
        };
    };
    AdminDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminDashboardPage');
    };
    AdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-dashboard',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\admin-dashboard\admin-dashboard.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      {{ \'DASHBOARD\' | translate }}\n    </ion-title>\n    <ion-buttons end class="btn-style">\n        <button ion-button (click)="toggleSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="auth-page2">\n  <!-- <section text-center margin-bottom>\n    <ion-icon name="person"></ion-icon>\n    <h1 style="font-size:1.4em" no-margin>{{ \'WELCOME\' | translate }}, <br>\n      {{account?.firstName}} {{account?.lastName}}</h1>\n  </section> -->\n  <div class="login-content">\n\n      <form class="list-form" [formGroup]="myForm" style="width: 86%;margin-right: 7%;margin-left: 7%;"  *ngIf="seachFlag">\n\n          <ion-item>\n              <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n                <ion-icon name="person" item-start class="text-primary"></ion-icon>\n                {{ \'CAPTAIN\' | translate }}\n              </ion-label>\n              <ion-select formControlName="captainId" [lang]="language" [dir]="direction">\n                <ion-option *ngFor="let item of captainList" [selected]="item.name ==item.name" [value]="item.id" [dir]="direction">{{item.name}} </ion-option>      \n              </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n                  <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n                  {{ \'START_DATE\' | translate }}\n                </ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}" formControlName="startDate" [(ngModel)] ="seaarchFilter.startDate" [lang]="language" [dir]="direction"></ion-datetime>\n              </ion-item>\n              <ion-item>\n                  <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n                    <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n                    {{ \'END_DATE\' | translate }}\n                  </ion-label>\n                  <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}" formControlName="endDate" [(ngModel)] ="seaarchFilter.endDate" [lang]="language" [dir]="direction"></ion-datetime>\n                </ion-item>\n        </form>\n\n        <ion-grid  *ngIf="seachFlag">\n\n            <ion-row>\n                <ion-col col-6>\n                  <ion-buttons end class="btn-style" style="width: 100%;">\n                    <button ion-button (click)="getAdminStatistcs()" style="width: 100%;">\n                      {{ \'SEARCH\' | translate }}\n                    </button>\n                  </ion-buttons>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-buttons end class="btn-style" style="width: 100%;">\n                    <button ion-button (click)="clear()" style="width: 100%;">\n                      {{ \'CLEAR_FIELDS\' | translate }}\n                    </button>\n                  </ion-buttons>\n      \n                </ion-col>\n      \n              </ion-row>\n\n        </ion-grid>\n      \n\n\n    <ion-grid [ngClass]="{\'search\': !seachFlag , \'not-search\': seachFlag}">\n      <ion-row>\n        <ion-col col-6>\n          <ion-card text-center padding color="#4c6df9">\n            <ion-icon name="clock" class="ion-icon2"></ion-icon>\n            <h2>{{ \'DELIVER_TIME_AVERAGE\' | translate }}</h2>\n            <h1>{{statistic?.deliverTimeAverage}}</h1>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card text-center padding color="#4c6df9">\n            <ion-icon name="basket" class="ion-icon2"></ion-icon>\n            <h2>{{ \'ORDER_COUNT_AVERAGE\' | translate }}</h2>\n            <h1>{{statistic?.ordersByDayAverage}}</h1>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\admin-dashboard\admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_captain_service__["a" /* CaptainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_captain_service__["a" /* CaptainService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_principal_service__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_principal_service__["a" /* Principal */]) === "function" && _j || Object])
    ], AdminDashboardPage);
    return AdminDashboardPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=admin-dashboard.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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




/**
 * Generated class for the AddOrderPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddOrderPopoverComponent = /** @class */ (function () {
    function AddOrderPopoverComponent(viewCtrl, builder) {
        this.viewCtrl = viewCtrl;
        this.builder = builder;
        this.language = __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */].direction;
        this.myForm = builder.group({
            "order": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]],
            "price": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]]
        });
    }
    AddOrderPopoverComponent.prototype.ngOnInit = function () {
    };
    AddOrderPopoverComponent.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewCtrl.dismiss(null)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddOrderPopoverComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var subOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subOrder = {
                            name: this.myForm.get("order").value,
                            price: this.myForm.get("price").value
                        };
                        return [4 /*yield*/, this.viewCtrl.dismiss(subOrder)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddOrderPopoverComponent.prototype.hasError = function (field, error, form) {
        var ctrl = form.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AddOrderPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-order-popover',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\components\add-order-popover\add-order-popover.html"*/'<!-- Generated template for the AddOrderPopoverComponent component -->\n<ion-content class="auth-page">\n    <div class="login-content">\n      <!-- Login form -->\n      <form class="list-form" [formGroup]="myForm">\n        <ion-item>\n          <ion-label floating [style.transform-origin]="language ==\'en\'? \'left top\': \'right top\'">\n            <ion-icon name="reorder" item-start class="text-primary"></ion-icon>\n            {{ \'ORDER\' | translate }}\n          </ion-label>\n          <ion-input type="text" name="order" formControlName="order" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'order\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'order\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language ==\'en\'? \'left top\': \'right top\'">\n            <ion-icon name="cash" item-start class="text-primary"></ion-icon>\n            {{ \'PRICE\' | translate }}\n          </ion-label>\n          <ion-input type="number" name="price" formControlName="price" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'order\', \'required\' , myForm)"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'order\', \'maxlength\' , myForm)">{{ \'MAX_LENGTH\' | translate }} </p>\n  \n      </form>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-buttons>\n              <button ion-button block color="dark" tappable (click)="cancel()">\n                {{ \'CANCEL\' | translate }}\n              </button>\n            </ion-buttons>\n          </ion-col>\n  \n          <ion-col col-6>\n            <ion-buttons>\n              <button ion-button block color="dark" tappable (click)="save()" [disabled]="!myForm.valid">\n                {{ \'ADD\' | translate }}\n              </button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\components\add-order-popover\add-order-popover.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
    ], AddOrderPopoverComponent);
    return AddOrderPopoverComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-order-popover.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());

//# sourceMappingURL=windowRef.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAgencyPageModule", function() { return AddAgencyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_agency__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_account_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddAgencyPageModule = /** @class */ (function () {
    function AddAgencyPageModule() {
    }
    AddAgencyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_agency__["a" /* AddAgencyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_agency__["a" /* AddAgencyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_agency__["a" /* AddAgencyPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_agency__["a" /* AddAgencyPage */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_auth_account_service__["a" /* AccountService */]
            ]
        })
    ], AddAgencyPageModule);
    return AddAgencyPageModule;
}());

//# sourceMappingURL=add-agency.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAgencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agencies_agencies__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AddAgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAgencyPage = /** @class */ (function () {
    function AddAgencyPage(navCtrl, user, toastCtrl, translateService, loginService, loading, app, platform, accountService, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loginService = loginService;
        this.loading = loading;
        this.app = app;
        this.platform = platform;
        this.accountService = accountService;
        this.builder = builder;
        this.account = {
            login: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            langKey: 'ar',
            activated: true
        };
        this.language = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].direction;
        this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS',
            'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.signupErrorString = values.SIGNUP_ERROR;
            _this.signupSuccessString = values.SIGNUP_SUCCESS;
            _this.existingUserError = values.EXISTING_USER_ERROR;
            _this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            'firstName': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]],
            'lastName': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
            'passwordConfirm': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__agencies_agencies__["a" /* AgenciesPage */]);
        });
    }
    AddAgencyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAgencyPage');
    };
    AddAgencyPage.prototype.addAgency = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        // set login to same as email
        this.account.login = this.account.email;
        this.account.activated = true;
        // Attempt to login in through our User service
        this.accountService.registerAgency(this.account).subscribe(function (res) {
            console.log(res);
            // var id = res;
            var toast = _this.toastCtrl.create({
                message: _this.signupSuccessString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            //this.navCtrl.push(AgenciesPage);
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_7__agencies_agencies__["a" /* AgenciesPage */]);
        }, function (err) {
            // Unable to sign up
            console.log(err);
            //const error = JSON.parse(err.error);
            var displayError = _this.signupErrorString;
            if (err.status === 400 && (err.error.errorKey == 'userexists' || err.error.message == 'error.userexists' || err.error.title == 'Login name already used!')) {
                displayError = _this.existingUserError;
            }
            else if (err.status === 400 && err.error.message === 'error.validation'
                && err.error.fieldErrors[0].field === 'password' && err.error.fieldErrors[0].message === 'Size') {
                displayError = _this.invalidPasswordError;
            }
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
        });
    };
    AddAgencyPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AddAgencyPage.prototype.notMathces = function () {
        var ctrl = this.myForm.get("passwordConfirm");
        return ctrl.dirty && ctrl.value != this.myForm.get("password").value;
    };
    AddAgencyPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__agencies_agencies__["a" /* AgenciesPage */]);
    };
    AddAgencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-agency',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-agency\add-agency.html"*/'<ion-header>\n\n  <ion-navbar>\n<ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n            <ion-title>{{ \'ADD_AGENCY_TITLE\' | translate }}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>   \n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'FIRST_NAME\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.firstName" name="firstName" formControlName="firstName" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'firstName\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'firstName\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'LAST_NAME\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.lastName" name="lastName" formControlName="lastName" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'lastName\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'lastName\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          {{ \'EMAIL\' | translate }}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" formControlName="email" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'email\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'email\', \'email\')">{{ \'EMAIL_VALID\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" formControlName="password" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'password\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'password\', \'minlength\')">{{ \'MIN_LENGTH\' | translate }} </p>\n\n      <ion-item >\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'CONFIRM_PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" name="passwordConfirm" formControlName="passwordConfirm" [disabled] = "!myForm.get(\'password\').valid" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'passwordConfirm\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="notMathces()">{{ \'CONFIRM_PASSWORD_VALIDATE\' | translate }} </p>\n\n    </form>\n\n    <div margin-top style="margin-bottom: 40px;">\n      <button ion-button block color="dark" tappable (click)="addAgency()" [disabled]="!myForm.valid || notMathces()">\n        {{ \'ADD_AGENCY_BUTTON\' | translate }}\n      </button>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-agency\add-agency.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* User */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_login_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_account_service__["a" /* AccountService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _k || Object])
    ], AddAgencyPage);
    return AddAgencyPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=add-agency.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCaptainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__captains_captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_webstorage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the AddCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCaptainPage = /** @class */ (function () {
    function AddCaptainPage(navCtrl, navParams, _alert, imagePicker, camera, toastCtrl, captainService, loading, backgroundMode, device, platform, storage, translateService, app, builder, user, accountService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alert = _alert;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.captainService = captainService;
        this.loading = loading;
        this.backgroundMode = backgroundMode;
        this.device = device;
        this.platform = platform;
        this.storage = storage;
        this.translateService = translateService;
        this.app = app;
        this.builder = builder;
        this.user = user;
        this.accountService = accountService;
        this.account = {
            login: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            langKey: 'ar',
            activated: true
        };
        this.language = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].direction;
        this.captain = {
            code: null,
            name: '',
            phone: '',
            image: null,
            imageContentType: '',
            latitude: '31.214262511126286',
            longitude: '29.98716374830485',
            lastAssignId: 0,
            busy: false,
            userId: 0,
            agencyId: 0,
            working: true
        };
        this.choosePhoto = '';
        this.chooseFromGalary = '';
        this.takePhoto = '';
        this.translateService.get(['ADD_CAPTAIN_ERROR', 'ADD_CAPTAIN_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'SIGNUP_ERROR']).subscribe(function (values) {
            _this.addAddressError = values.ADD_CAPTAIN_ERROR;
            _this.addAdressSuccessString = values.ADD_CAPTAIN_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.takePhoto = values.TAKE_A_PHOTO;
            _this.chooseFromGalary = values.CHOOSE_FROM_GALARY;
            _this.existingUserError = values.EXISTING_USER_ERROR;
            _this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
            _this.choosePhoto = values.CHOOSE_PHOTO;
            _this.signupErrorString = values.SIGNUP_ERROR;
        });
        this.myForm = builder.group({
            'code': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required]],
            'name': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(45)]],
            'phone': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].pattern("(01)[0-9]{9}")]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(6)]],
            'passwordConfirm': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required]]
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__captains_captains__["a" /* CaptainsPage */]);
        });
    }
    AddCaptainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCaptainPage');
    };
    AddCaptainPage.prototype.showDialog = function () {
        var _this = this;
        var alert = this._alert.create({
            title: this.choosePhoto,
            buttons: [
                {
                    text: this.chooseFromGalary,
                    handler: function () {
                        _this.openImagePicker();
                    }
                },
                {
                    text: this.takePhoto,
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        alert.present();
    };
    // openImagePicker() {
    //   //console.log(this.device.version , parseInt(this.device.version, 10) , this.device.platform.toLowerCase());
    //   // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
    //   //   this.backgroundMode.enable();
    //   // }
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //     targetWidth: 1280,
    //     targetHeight: 1280,
    //     cameraDirection: this.camera.Direction.BACK,
    //   }
    //     this.camera.getPicture(options).then((imageData) => {
    //       // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
    //       //   this.backgroundMode.disable();
    //       // }
    //       this.captain.image = imageData;
    //     }, (err) => {
    //       // Handle error
    //       console.log(err, 'error');
    //       let toast = this.toastCtrl.create({
    //         message: err,
    //         duration: 3000,
    //         position: 'top'
    //       });
    //       toast.present();
    //     })
    // }
    AddCaptainPage.prototype.openImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 200,
            height: 200,
            // quality of resized image, defaults to 100
            quality: 100,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            _this.captain.image = results[0];
        }, function (err) {
            alert(err);
        });
    };
    AddCaptainPage.prototype.takePicture = function () {
        // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
        //   this.backgroundMode.enable();
        // }
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        //this.backgroundMode.enable();
        this.camera.getPicture(options)
            .then(function (data) {
            // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
            //   this.backgroundMode.disable();
            // }
            _this.captain.image = data;
        }, function (error) {
            console.log(error);
            var toast = this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    AddCaptainPage.prototype.addCaptain = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.account.login = this.account.email;
        this.account.activated = true;
        this.account.firstName = this.captain.name;
        this.account.lastName = this.captain.name;
        if (this.captain.image == 'O') {
            this.captain.image = null;
        }
        // Attempt to login in through our User service
        this.accountService.registerCaptain(this.account).subscribe(function (res1) {
            console.log(res1, 'sssssssssssss');
            _this.captain.userId = res1.id;
            _this.captainService.save(_this.captain).subscribe(function (res) {
                console.log(res, 'res');
                var toast = _this.toastCtrl.create({
                    message: _this.addAdressSuccessString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                load.dismiss();
                //this.navCtrl.push(CaptainsPage);
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__captains_captains__["a" /* CaptainsPage */]);
            }, function (err1) {
                console.log('error', err1);
                // Unable to add address
                // const error = JSON.parse(err.error);
                var displayError = _this.addAddressError;
                var toast = _this.toastCtrl.create({
                    message: displayError,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                load.dismiss();
            });
        }, function (err) {
            // Unable to sign up
            console.log(err);
            var displayError = _this.signupErrorString;
            if (err.status === 400 && (err.error.errorKey == 'userexists' || err.error.message == 'error.userexists' || err.error.title == 'Login name already used!')) {
                displayError = _this.existingUserError;
            }
            else if (err.status === 400 && err.error.message === 'error.validation'
                && err.error.fieldErrors[0].field === 'password' && err.error.fieldErrors[0].message === 'Size') {
                displayError = _this.invalidPasswordError;
            }
            load.dismiss();
            console.log(displayError, 'ssssssssssssss');
            var toast1 = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast1.present();
            console.log("8888888888888888888888888888");
        });
    };
    AddCaptainPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AddCaptainPage.prototype.notMathces = function () {
        var ctrl = this.myForm.get("passwordConfirm");
        return ctrl.dirty && ctrl.value != this.myForm.get("password").value;
    };
    AddCaptainPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__captains_captains__["a" /* CaptainsPage */]);
    };
    AddCaptainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-captain',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-captain\add-captain.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1>\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n          <ion-title>{{ \'ADD_CAPTAIN\' | translate }}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n    <div [ngClass]="language == \'en\' ?  \'circle-pic-div\' : \'circle-pic-div-ar\'" style="width:100%" text-center>\n\n      <ion-grid class="grid-image" style="width: 50%">\n        <ion-row class="grid-image">\n          <ion-col class="grid-image" class="btn-col" col-9>\n\n            <img class="circle-pic" *ngIf="!captain.image || captain.image == \'O\'" src="../../assets/img/person.png" />\n            <img class="circle-pic" *ngIf="captain.image  && captain.image != \'O\'" [src]="[\'data:image/jpg;base64\',captain.image]" />\n          </ion-col>\n\n          <ion-col class="btn-col" col-3 text-center>\n            <button ion-button icon-only clear class="icon-btn" float-left (click)="showDialog()">\n              <ion-icon name="camera"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="flag" item-start class="text-primary"></ion-icon>\n          {{ \'CODE\' | translate }}\n        </ion-label>\n        <ion-input type="number" [(ngModel)]="captain.code" formControlName="code" name="code" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'code\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'NAME\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="captain.name" formControlName="name" name="name" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'name\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'name\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="call" item-start class="text-primary"></ion-icon>\n          {{ \'PHONE\' | translate }}\n        </ion-label>\n        <ion-input type="number" [(ngModel)]="captain.phone" formControlName="phone" name="phone" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'phone\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'phone\', \'pattern\')">{{ \'PHONE_NUMBER\' | translate }} </p>\n\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          {{ \'EMAIL\' | translate }}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" formControlName="email" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'email\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'email\', \'email\')">{{ \'EMAIL_VALID\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" formControlName="password" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'password\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'password\', \'minlength\')">{{ \'MIN_LENGTH\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'CONFIRM_PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" name="passwordConfirm" formControlName="passwordConfirm" [lang]="language" [dir]="direction"  [disabled]="!myForm.get(\'password\').valid"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'passwordConfirm\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="notMathces()">{{ \'CONFIRM_PASSWORD_VALIDATE\' | translate }} </p>\n\n\n      <!-- <ion-item>\n        <ion-label floating>\n          <ion-icon name="bookmarks" item-start class="text-primary"></ion-icon>\n          {{ \'EVALUATION\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="captain.evaluation" name="evaluation"></ion-input>\n      </ion-item> -->\n    </form>\n\n    <div margin-top style="margin-bottom: 40px;">\n      <button ion-button block color="dark" tappable (click)="addCaptain()" [disabled]="!myForm.valid || notMathces()">\n        {{ \'ADD_CAPTAIN_BUTTON\' | translate }}\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\add-captain\add-captain.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__["a" /* Device */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_13_ngx_webstorage__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_ngx_webstorage__["a" /* LocalStorageService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* User */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_9__providers_auth_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_auth_account_service__["a" /* AccountService */]) === "function" && _s || Object])
    ], AddCaptainPage);
    return AddCaptainPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
}());

//# sourceMappingURL=add-captain.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainsMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__captains_captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CaptainsMapPage = /** @class */ (function () {
    // public captains = [
    //   {
    //     busy: true,
    //     code: 259,
    //     evaluation: "4",
    //     id: 1003,
    //     image: null,
    //     imageContentType: "",
    //     latitude: 26.555555512,
    //     longitude: 12.5824521259,
    //     name: "mahmoud",
    //     phone: "052558662"
    //   },
    //   {
    //     busy: false,
    //     code: 259,
    //     evaluation: "4",
    //     id: 1003,
    //     image: null,
    //     imageContentType: "",
    //     latitude: 24.555555512,
    //     longitude: 12.5824521259,
    //     name: "ahmed",
    //     phone: "052558662"
    //   },
    //   {
    //     busy: true,
    //     code: 259,
    //     evaluation: "4",
    //     id: 1003,
    //     image: null,
    //     imageContentType: "",
    //     latitude: 25.555555512,
    //     longitude: 12.5824521259,
    //     name: "mostafa",
    //     phone: "052558662"
    //   }
    // ]
    function CaptainsMapPage(navCtrl, navParams, platform, loading, translateService, app, principal, captainService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loading = loading;
        this.translateService = translateService;
        this.app = app;
        this.principal = principal;
        this.captainService = captainService;
        this.account = null;
        this.userType = '';
        this.captainsMarkers = [];
        this.language = __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].direction;
        this.translateService.get(['PLEASE_WAIT']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__captains_captains__["a" /* CaptainsPage */]);
        });
    }
    CaptainsMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CaptainsMapPage');
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            _this.account = account;
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                _this.userType = 'agency';
                _this.loadmap();
            }
            else {
                _this.userType = 'admin';
                _this.loadmap();
            }
            console.log(_this.userType);
        }).catch(function (err) {
            load.dismiss();
        });
    };
    CaptainsMapPage.prototype.loadmap = function () {
        var latLng = new google.maps.LatLng(31.214262511126286, 29.98716374830485);
        var mapOptions = {
            center: latLng,
            zoom: 12
        };
        this.map = new google.maps.Map(this.elementRef.nativeElement, mapOptions);
        console.log('----------');
        console.log(this.account, this.userType);
        if (this.userType == 'admin') {
            this.getAllCaptains();
        }
        else if (this.userType == 'agency') {
            this.getAllAgencyCaptains();
        }
    };
    CaptainsMapPage.prototype.getAllCaptains = function () {
        var _this = this;
        console.log('****');
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.deletemarkers();
        this.captainService.captainsPickList().subscribe(function (res) {
            console.log(res, 'res');
            res.forEach(function (element) {
                var latLng = new google.maps.LatLng(element.latitude, element.longitude);
                if (!element.busy) {
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: latLng,
                        animation: google.maps.Animation.DROP,
                        title: element.name,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                    });
                    _this.captainsMarkers.push(marker);
                }
                else {
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: latLng,
                        animation: google.maps.Animation.DROP,
                        title: element.name,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    });
                    _this.captainsMarkers.push(marker);
                }
            });
            load.dismiss();
        }, function (err) {
            console.log(err, 'err');
            load.dismiss();
        });
    };
    CaptainsMapPage.prototype.getAllAgencyCaptains = function () {
        var _this = this;
        console.log('****');
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.deletemarkers();
        this.captainService.captainsPickListByAgencyId(this.account.id).subscribe(function (res) {
            console.log(res, 'res');
            res.forEach(function (element) {
                var latLng = new google.maps.LatLng(Number.parseFloat(element.latitude), Number.parseFloat(element.longitude));
                if (!element.busy) {
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: latLng,
                        animation: google.maps.Animation.DROP,
                        title: element.name,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                    });
                    _this.captainsMarkers.push(marker);
                }
                else {
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: latLng,
                        animation: google.maps.Animation.DROP,
                        title: element.name,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    });
                    _this.captainsMarkers.push(marker);
                }
            });
            load.dismiss();
        }, function (err) {
            console.log(err, 'err');
            load.dismiss();
        });
    };
    CaptainsMapPage.prototype.deletemarkers = function () {
        this.clearMarkers();
        this.captainsMarkers = [];
    };
    CaptainsMapPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.captainsMarkers.length; i++) {
            this.captainsMarkers[i].setMap(map);
        }
    };
    CaptainsMapPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    CaptainsMapPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__captains_captains__["a" /* CaptainsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CaptainsMapPage.prototype, "elementRef", void 0);
    CaptainsMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-captains-map',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captains-map\captains-map.html"*/'<!--\n  Generated template for the CaptainsMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1>\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title>{{ \'CAPTAINS_ON_MAP\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n    \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <div #map id="map" class="map-style"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captains-map\captains-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__["a" /* CaptainService */]])
    ], CaptainsMapPage);
    return CaptainsMapPage;
}());

//# sourceMappingURL=captains-map.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainEvaluationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__captains_captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CaptainEvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaptainEvaluationPage = /** @class */ (function () {
    function CaptainEvaluationPage(navCtrl, navParams, toastCtrl, captainService, loading, app, platform, translateService, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.captainService = captainService;
        this.loading = loading;
        this.app = app;
        this.platform = platform;
        this.translateService = translateService;
        this.builder = builder;
        this.evaluation = {
            moral: 1,
            appearance: 1,
            speed: 1,
            commitment: 1,
            excellence: 1,
        };
        this.language = __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].direction;
        this.captain = this.navParams.get("item");
        this.getEvaluation(this.captain.id);
        this.translateService.get(['EDIT_EVALUATION_ERROR', 'EDIT_EVALUATION_SUCCESS', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.editEvaluationError = values.EDIT_EVALUATION_ERROR;
            _this.editEvaluationSuccess = values.EDIT_EVALUATION_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            'moral': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("[1-5]{1}")]],
            'appearnce': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("[1-5]{1}")]],
            'speed': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("[1-5]{1}")]],
            'commitment': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("[1-5]{1}")]],
            'excellence': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("[1-5]{1}")]],
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__captains_captains__["a" /* CaptainsPage */]);
        });
    }
    CaptainEvaluationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaptainEvaluationPage');
    };
    CaptainEvaluationPage.prototype.getEvaluation = function (captainId) {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.getCaptainElevation(captainId).subscribe(function (res) {
            _this.evaluation = res;
            load.dismiss();
        }, function (err) {
            console.log(err, 'errrrrror');
            load.dismiss();
        });
    };
    CaptainEvaluationPage.prototype.editEvaluation = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.updateEvaluation(this.evaluation).subscribe(function (res) {
            console.log(res, 'res');
            var toast = _this.toastCtrl.create({
                message: _this.editEvaluationSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            //this.navCtrl.push(CaptainsPage);
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__captains_captains__["a" /* CaptainsPage */]);
        }, function (err1) {
            console.log('error', err1);
            // Unable to add address
            // const error = JSON.parse(err.error);
            var displayError = _this.editEvaluationError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    CaptainEvaluationPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    CaptainEvaluationPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__captains_captains__["a" /* CaptainsPage */]);
    };
    CaptainEvaluationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-captain-evaluation',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-evaluation\captain-evaluation.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1>\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title>{{ \'Edit_EVALUATION\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="thumbs-up" item-start class="text-primary"></ion-icon>\n          {{ \'MORAL\' | translate }}\n        </ion-label>\n        <ion-input type="number" min="1" max="5" formControlName="moral" name="moral" [lang]="language" [dir]="direction" [(ngModel)]="evaluation.moral"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'moral\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'moral\', \'pattern\' )">{{ \'EVALUATION_VALID\' | translate }} </p>\n\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="man" item-start class="text-primary"></ion-icon>\n          {{ \'APPEARANCE\' | translate }}\n        </ion-label>\n        <ion-input type="number" min="1" max="5" formControlName="appearnce" name="appearnce" [lang]="language" [dir]="direction" [(ngModel)]="evaluation.appearance"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'appearnce\', \'required\' )"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'appearnce\', \'pattern\' )">{{ \'EVALUATION_VALID\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="speedometer" item-start class="text-primary"></ion-icon>\n          {{ \'SPEED\' | translate }}\n        </ion-label>\n        <ion-input type="number" min="1" max="5" formControlName="speed" name="speed" [lang]="language" [dir]="direction" [(ngModel)]="evaluation.speed"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'speed\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'speed\', \'pattern\' )">{{ \'EVALUATION_VALID\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="clock" item-start class="text-primary"></ion-icon>\n          {{ \'COMMITMENT\' | translate }}\n        </ion-label>\n        <ion-input type="number" min="1" max="5" formControlName="commitment" name="commitment" [lang]="language" [dir]="direction" [(ngModel)]="evaluation.commitment"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'commitment\', \'required\' )"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'commitment\', \'pattern\' )">{{ \'EVALUATION_VALID\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="done-all" item-start class="text-primary"></ion-icon>\n          {{ \'EXCELLENCE\' | translate }}\n        </ion-label>\n        <ion-input type="number" min="1" max="5" formControlName="excellence" name="excellence" [lang]="language" [dir]="direction" [(ngModel)]="evaluation.excellence"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'excellence\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'excellence\', \'pattern\')">{{ \'EVALUATION_VALID\' | translate }} </p>\n\n    </form>\n\n    <div margin-top style="margin-bottom: 40px;">\n      <button ion-button block color="dark" tappable (click)="editEvaluation()" [disabled]="!myForm.valid">\n        {{ \'EDIT_EVALUATION_BUTTON\' | translate }}\n      </button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captain-evaluation\captain-evaluation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CaptainEvaluationPage);
    return CaptainEvaluationPage;
}());

//# sourceMappingURL=captain-evaluation.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCaptainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_webstorage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__captain_details_captain_details__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the EditCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditCaptainPage = /** @class */ (function () {
    function EditCaptainPage(navCtrl, navParams, _alert, imagePicker, camera, toastCtrl, captainService, loading, backgroundMode, device, platform, storage, translateService, app, builder, user, accountService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alert = _alert;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.captainService = captainService;
        this.loading = loading;
        this.backgroundMode = backgroundMode;
        this.device = device;
        this.platform = platform;
        this.storage = storage;
        this.translateService = translateService;
        this.app = app;
        this.builder = builder;
        this.user = user;
        this.accountService = accountService;
        this.account = {
            id: 0,
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        };
        this.language = __WEBPACK_IMPORTED_MODULE_13__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_13__app_app_component__["a" /* MyApp */].direction;
        this.captain = {
            id: 0,
            code: '',
            name: '',
            phone: '',
            image: null,
            imageContentType: ''
        };
        this.code = '';
        this.name = '';
        this.phone = '';
        this.image = null;
        this.email = '';
        this.password = '';
        this.choosePhoto = '';
        this.chooseFromGalary = '';
        this.takePhoto = '';
        this.oldCaptain = this.navParams.get("captain");
        this.captainDetails = this.navParams.get("item");
        this.account.id = this.captainDetails.userId;
        this.account.email = this.captainDetails.email;
        this.captain.id = this.captainDetails.id;
        this.captain.code = this.captainDetails.code;
        this.captain.image = this.captainDetails.image;
        this.captain.imageContentType = this.captainDetails.imageContentType;
        this.captain.name = this.captainDetails.name;
        this.captain.phone = this.captainDetails.phone;
        this.email = this.captainDetails.email;
        this.code = this.captainDetails.code;
        this.image = this.captainDetails.image;
        this.name = this.captainDetails.name;
        this.phone = this.captainDetails.phone;
        this.password = this.captainDetails.password;
        this.translateService.get(['EDIT_CAPTAIN_ERROR', 'EDIT_CAPTAIN_SUCCESS', 'CHOOSE_PHOTO', 'CHOOSE_FROM_GALARY', 'TAKE_A_PHOTO', 'PLEASE_WAIT', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'SIGNUP_ERROR']).subscribe(function (values) {
            _this.addAddressError = values.EDIT_CAPTAIN_ERROR;
            _this.addAdressSuccessString = values.ADD_CAPTAIN_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.takePhoto = values.TAKE_A_PHOTO;
            _this.chooseFromGalary = values.CHOOSE_FROM_GALARY;
            _this.existingUserError = values.EXISTING_USER_ERROR;
            _this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
            _this.choosePhoto = values.CHOOSE_PHOTO;
            _this.signupErrorString = values.SIGNUP_ERROR;
        });
        this.myForm = builder.group({
            'code': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            'name': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]],
            'phone': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("(01)[0-9]{9}")]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
            'passwordConfirm': ['', []]
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__captain_details_captain_details__["a" /* CaptainDetailsPage */], { item: _this.oldCaptain });
        });
    }
    EditCaptainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditCaptainPage');
    };
    EditCaptainPage.prototype.showDialog = function () {
        var _this = this;
        var alert = this._alert.create({
            title: this.choosePhoto,
            buttons: [
                {
                    text: this.chooseFromGalary,
                    handler: function () {
                        _this.openImagePicker();
                    }
                },
                {
                    text: this.takePhoto,
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        alert.present();
    };
    EditCaptainPage.prototype.openImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 200,
            height: 200,
            // quality of resized image, defaults to 100
            quality: 100,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            _this.captain.image = results[0];
        }, function (err) {
            alert(err);
        });
    };
    EditCaptainPage.prototype.takePicture = function () {
        // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
        //   this.backgroundMode.enable();
        // }
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        //this.backgroundMode.enable();
        this.camera.getPicture(options)
            .then(function (data) {
            // if (this.device.platform.toLowerCase() == 'android' && parseInt(this.device.version, 10) < 8) {
            //   this.backgroundMode.disable();
            // }
            _this.captain.image = data;
        }, function (error) {
            console.log(error);
            var toast = this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    EditCaptainPage.prototype.editCaptain = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        var editAccount = {
            id: this.account.id,
            firstName: this.captain.name,
            lastName: this.captain.name,
            email: this.myForm.get("email").value,
            password: this.myForm.get("password").value,
            emailChanged: this.email != this.myForm.get("email").value
        };
        if (this.myForm.get("password").value != this.password && this.myForm.get("password").value != '' && this.myForm.get("password").value != null) {
            editAccount.password = this.myForm.get("password").value;
        }
        else {
            editAccount.password = null;
        }
        if (this.captain.image == 'O') {
            this.captain.image = null;
        }
        // Attempt to login in through our User service
        this.accountService.updateUserInformation(editAccount).subscribe(function (res1) {
            _this.captainService.updateCaptainInformation(_this.captain).subscribe(function (res) {
                console.log(res, 'res');
                var toast = _this.toastCtrl.create({
                    message: _this.addAdressSuccessString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                load.dismiss();
                //this.navCtrl.push(CaptainsPage);
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_12__captain_details_captain_details__["a" /* CaptainDetailsPage */], { item: _this.oldCaptain });
            }, function (err1) {
                console.log('error', err1);
                // Unable to add address
                // const error = JSON.parse(err.error);
                var displayError = _this.addAddressError;
                var toast = _this.toastCtrl.create({
                    message: displayError,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                load.dismiss();
            });
        }, function (err) {
            // Unable to sign up
            console.log(err);
            var displayError = _this.signupErrorString;
            if (err.status === 400 && (err.error.errorKey == 'userexists' || err.error.message == 'error.userexists' || err.error.title == 'Login name already used!')) {
                displayError = _this.existingUserError;
            }
            else if (err.status === 400 && err.error.message === 'error.validation'
                && err.error.fieldErrors[0].field === 'password' && err.error.fieldErrors[0].message === 'Size') {
                displayError = _this.invalidPasswordError;
            }
            load.dismiss();
            console.log(displayError, 'ssssssssssssss');
            var toast1 = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast1.present();
            console.log("8888888888888888888888888888");
        });
    };
    EditCaptainPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    EditCaptainPage.prototype.notMathces = function () {
        var ctrl = this.myForm.get("passwordConfirm");
        return ctrl.dirty && ctrl.value != this.myForm.get("password").value;
    };
    EditCaptainPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__captain_details_captain_details__["a" /* CaptainDetailsPage */], { item: this.oldCaptain });
    };
    EditCaptainPage.prototype.valuesChanges = function () {
        if (this.code != this.captain.code || this.name != this.captain.name || this.phone != this.captain.phone || (this.image != this.captain.image && this.captain.image != 'O') || this.email != this.account.email || (this.password != this.myForm.get("password").value && this.myForm.get("password").value != '' && this.myForm.get("password").value != null)) {
            return true;
        }
        else {
            return false;
        }
    };
    EditCaptainPage.prototype.passwordChange = function () {
        if (this.myForm.get("password").value != '' && this.myForm.get("password").value != null) {
            this.myForm.get("passwordConfirm").clearValidators();
            this.myForm.get("passwordConfirm").updateValueAndValidity();
            this.myForm.get("passwordConfirm").setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
            this.myForm.get("passwordConfirm").clearValidators();
            this.myForm.get("passwordConfirm").updateValueAndValidity();
        }
        else {
            this.myForm.get("passwordConfirm").clearValidators();
            this.myForm.get("passwordConfirm").updateValueAndValidity();
        }
    };
    EditCaptainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-captain',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\edit-captain\edit-captain.html"*/'<!--\n  Generated template for the EditCaptainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n    <ion-navbar>\n        <ion-grid style="width: 100%">\n              <ion-row>\n                <ion-col col-1>\n                  <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                    <button ion-button (click)="back()">\n                      <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                    </button>\n                  </ion-buttons>\n                </ion-col>\n                <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                    <ion-title>{{ \'EDIT_CAPTAIN_TITLE\' | translate }}</ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-grid>   \n          </ion-navbar>\n</ion-header>\n\n\n<ion-content class="auth-page">\n    <div class="login-content">\n      <div [ngClass]="language == \'en\' ?  \'circle-pic-div\' : \'circle-pic-div-ar\'" style="width:100%" text-center>\n  \n        <ion-grid class="grid-image" style="width: 50%">\n          <ion-row class="grid-image">\n            <ion-col class="grid-image" class="btn-col" col-9>\n  \n              <img class="circle-pic" *ngIf="!captain.image || captain.image == \'O\'" src="../../assets/img/person.png" />\n              <img class="circle-pic" *ngIf="captain.image  && captain.image != \'O\'" [src]="[\'data:image/jpg;base64\',captain.image]" />\n            </ion-col>\n  \n            <ion-col class="btn-col" col-3 text-center>\n              <button ion-button icon-only clear class="icon-btn" float-left (click)="showDialog()">\n                <ion-icon name="camera"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  \n      <!-- Login form -->\n      <form class="list-form" [formGroup]="myForm">\n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="flag" item-start class="text-primary"></ion-icon>\n            {{ \'CODE\' | translate }}\n          </ion-label>\n          <ion-input type="number" [(ngModel)]="captain.code" formControlName="code" name="code" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'code\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n  \n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            {{ \'NAME\' | translate }}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="captain.name" formControlName="name" name="name" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'name\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'name\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n  \n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="call" item-start class="text-primary"></ion-icon>\n            {{ \'PHONE\' | translate }}\n          </ion-label>\n          <ion-input type="number" [(ngModel)]="captain.phone" formControlName="phone" name="phone" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'phone\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'phone\', \'pattern\')">{{ \'PHONE_NUMBER\' | translate }} </p>\n  \n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            {{ \'EMAIL\' | translate }}\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="account.email" name="email" formControlName="email" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'email\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'email\', \'email\')">{{ \'EMAIL_VALID\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            {{ \'PASSWORD\' | translate }}\n          </ion-label>\n          <ion-input type="password" name="password" formControlName="password" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        \n        <p class="validationHint" *ngIf="hasError(\'password\', \'minlength\')">{{ \'MIN_LENGTH\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            {{ \'CONFIRM_PASSWORD\' | translate }}\n          </ion-label>\n          <ion-input type="password" name="passwordConfirm" formControlName="passwordConfirm" [lang]="language" [dir]="direction"  [disabled]="!myForm.get(\'password\').valid"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'passwordConfirm\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="notMathces()">{{ \'CONFIRM_PASSWORD_VALIDATE\' | translate }} </p>\n  \n      </form>\n  \n      <div margin-top style="margin-bottom: 40px;">\n        <button ion-button block color="dark" tappable (click)="editCaptain()" [disabled]="!myForm.valid || notMathces() || !valuesChanges()">\n          {{ \'EDIT_CAPTAIN_BUTTON\' | translate }}\n        </button>\n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\edit-captain\edit-captain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_captain_service__["a" /* CaptainService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_webstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* User */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_account_service__["a" /* AccountService */]])
    ], EditCaptainPage);
    return EditCaptainPage;
}());

//# sourceMappingURL=edit-captain.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAssignCaptainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agency_captains_agency_captains__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sub_assign_details_sub_assign_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the EditAssignCaptainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAssignCaptainPage = /** @class */ (function () {
    function EditAssignCaptainPage(navCtrl, navParams, principal, app, loading, builder, captainService, toastCtrl, datePicker, platform, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.principal = principal;
        this.app = app;
        this.loading = loading;
        this.builder = builder;
        this.captainService = captainService;
        this.toastCtrl = toastCtrl;
        this.datePicker = datePicker;
        this.platform = platform;
        this.translateService = translateService;
        this.assingOrderSuccess = null;
        this.assignOrderError = null;
        this.assign = {
            date: "",
            startTime: "",
            endTime: "",
            id: "",
        };
        this.user = null;
        this.language = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].direction;
        this.fromToday = "today";
        this.agency = null;
        this.captain = null;
        this.from = null;
        this.suberAssign = null;
        this.endDateValue = '';
        this.endTimeValue = '';
        this.startTimeValue = '';
        this.isCordova = false;
        this.isCordova = this.platform.is("cordova");
        this.assign = this.navParams.get("subAssign");
        //this.lastAssign = this.navParams.get("item");
        var dateString = this.assign.date + "T00:00:00";
        this.date = new Date(dateString);
        console.log(this.date);
        this.endDateValue = this.assign.date;
        this.endTimeValue = this.assign.endTime;
        this.startTimeValue = this.assign.startTime;
        this.selectedDate = this.assign.date;
        this.formatedDate = this.assign.date;
        this.today = new Date();
        this.yesterday = new Date(this.today);
        this.yesterday.setDate(this.today.getDate() - 1);
        this.agency = this.navParams.get("agency");
        this.captain = this.navParams.get("captain");
        this.from = this.navParams.get("from");
        this.suberAssign = this.navParams.get("suberAssign");
        console.log('edit agency ', this.agency);
        // var CurrentYear = new Date().getFullYear()
        // this.maxDate = CurrentYear + 1;
        // this.minDate = CurrentYear;
        this.translateService.get(['EDIT_ASSIGN_ORDER_ERROR', 'EDIT_ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.assignOrderError = values.EDIT_ASSIGN_ORDER_ERROR;
            _this.assingOrderSuccess = values.EDIT_ASSIGN_ORDER_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            //'endDate': ['', [Validators.required]],
            'startTime': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            'endTime': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__sub_assign_details_sub_assign_details__["a" /* SubAssignDetailsPage */], { item: _this.suberAssign, captain: _this.captain, from: _this.from, agency: _this.agency });
        });
    }
    EditAssignCaptainPage.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.user = account;
            }
        });
    };
    EditAssignCaptainPage.prototype.formatDate = function (date) {
        var strDate = "";
        strDate += date.getFullYear();
        strDate += "-";
        if ((date.getMonth() + 1) < 10) {
            strDate += "0";
        }
        var month = date.getMonth() + 1;
        strDate += month;
        strDate += "-";
        if (date.getDate() < 10) {
            strDate += "0";
        }
        strDate += date.getDate();
        console.log(strDate, "strDate");
        return strDate;
    };
    EditAssignCaptainPage.prototype.dateSelected = function (event) {
        this.selectedDate = event;
        this.formatedDate = this.formatDate(this.selectedDate);
        console.log(this.formatedDate);
    };
    EditAssignCaptainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAssignCaptainPage');
    };
    EditAssignCaptainPage.prototype.editAssignCaptain = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        var assignCaptains = {
            id: this.assign.id,
            date: null,
            startTime: this.myForm.get("startTime").value,
            endTime: this.myForm.get("endTime").value,
        };
        if (this.selectedDate == this.assign.date) {
            assignCaptains.date = this.assign.date;
        }
        else {
            assignCaptains.date = this.formatDate(this.selectedDate);
        }
        this.captainService.editAssignCaptains(assignCaptains).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.assingOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            //this.navCtrl.push(AgenciesPage);
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_8__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */], { item: _this.agency });
        }, function (err) {
            var displayError = _this.assignOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    EditAssignCaptainPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    EditAssignCaptainPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__sub_assign_details_sub_assign_details__["a" /* SubAssignDetailsPage */], { item: this.suberAssign, captain: this.captain, from: this.from, agency: this.agency });
    };
    EditAssignCaptainPage.prototype.validateChange = function () {
        if (this.endTimeValue == this.assign.endTime && this.startTimeValue == this.assign.startTime && this.endDateValue == this.formatedDate) {
            return true;
        }
        else {
            return false;
        }
    };
    EditAssignCaptainPage.prototype.showDateTimePicker = function (event) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: false,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log(date);
            _this.assign.startTime = '';
            _this.assign.startTime += date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
            _this.assign.startTime += ":";
            _this.assign.startTime += date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
            console.log(_this.assign.startTime);
            //event.target.value = date 
        }, function (err) { return console.log('Error occurred while getting date: ' + err); });
    };
    EditAssignCaptainPage.prototype.showDateTimePickerEnd = function (event) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: false,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log(date);
            _this.assign.endTime = '';
            _this.assign.endTime += date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
            _this.assign.endTime += ":";
            _this.assign.endTime += date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
            console.log(_this.assign.endTime);
            //event.target.value = date 
        }, function (err) { return console.log('Error occurred while getting date: ' + err); });
    };
    EditAssignCaptainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-assign-captain',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\edit-assign-captain\edit-assign-captain.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1>\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11 [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title>{{ \'EDIT_ASSIGN_CAPTAINS\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <!-- <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div> -->\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      \n        <ionic-calendar-date-picker [fromDate]="yesterday" [date]="date" [backgroundStyle]="{ \'background-color\': \'transparent\' }" (onSelect)="dateSelected($event)" [lang]="language" [dir]="direction" ></ionic-calendar-date-picker>	\n\n      <!-- <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n            {{ \'END_DATE\' | translate }}\n          </ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" max="{{maxDate}}"  min="{{minDate}}" [(ngModel)]="assign.endDate" formControlName="endDate" [lang]="language" [dir]="direction"></ion-datetime>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'endDate\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n       -->\n       <ion-item *ngIf="isCordova">\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n            {{ \'START_TIME\' | translate }}\n          </ion-label>\n          <ion-input [(ngModel)]="assign.startTime" [lang]="language" [dir]="direction" formControlName="startTime" type="text" readonly (focus)="$event.stopPropagation(); showDateTimePicker($event)"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="isCordova && hasError(\'startTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <ion-item *ngIf="isCordova">\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n            {{ \'END_TIME\' | translate }}\n          </ion-label>\n          <ion-input  [(ngModel)]="assign.endTime" [lang]="language" [dir]="direction" formControlName="endTime" type="text" readonly (focus)="$event.stopPropagation();  showDateTimePickerEnd($event)"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="isCordova && hasError(\'endTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n  \n        <ion-item *ngIf="!isCordova">\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n            {{ \'START_TIME\' | translate }}\n          </ion-label>\n          <ion-datetime displayFormat="hh:mm a" pickerFormat="hh:mm a" formControlName="startTime" [(ngModel)]="assign.startTime"></ion-datetime>\n        </ion-item>\n        <p  class="validationHint" *ngIf="!isCordova && hasError(\'startTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <ion-item *ngIf="!isCordova">\n            <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n              <ion-icon name="calendar" item-start class="text-primary"></ion-icon>\n              {{ \'END_TIME\' | translate }}\n            </ion-label>\n            <ion-datetime displayFormat="hh:mm a" pickerFormat="hh:mm a" formControlName="endTime" [(ngModel)]="assign.endTime"></ion-datetime>\n          </ion-item>\n          <p class="validationHint" *ngIf="!isCordova && hasError(\'endTime\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n       \n          <!-- <ion-list radio-group style="background-color: #ffffff" formControlName="fromToday" [(ngModel)]="fromToday">\n\n            <ion-list-header>\n                {{\'CHANGE_FROM\' | translate}}\n            </ion-list-header>\n      \n            <ion-grid style="padding-top: 0px">\n              <ion-row>\n                <ion-col col-6>\n                  <ion-item text-center>\n                    <ion-label>{{\'TODAY\' | translate}}</ion-label>\n                    <ion-radio value="today"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item text-center>\n                    <ion-label>{{\'TOMMOROW\' | translate}}</ion-label>\n                    <ion-radio value="tomorrow"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      \n      \n      \n      \n          </ion-list>     -->\n\n    </form>\n\n      <div margin-top>\n        <button ion-button block color="dark" tappable (click)="editAssignCaptain()" [disabled]  = "(!myForm.valid) || validateChange()" >\n          {{ \'EDIT_ASSIGN_CAPTAINS_BUTTON\' | translate }}\n        </button>\n      </div>\n      \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\edit-assign-captain\edit-assign-captain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["d" /* TranslateService */]])
    ], EditAssignCaptainPage);
    return EditAssignCaptainPage;
}());

//# sourceMappingURL=edit-assign-captain.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAgencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agency_details_agency_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditAgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAgencyPage = /** @class */ (function () {
    function EditAgencyPage(navCtrl, navParams, user, toastCtrl, translateService, loginService, loading, app, platform, accountService, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loginService = loginService;
        this.loading = loading;
        this.app = app;
        this.platform = platform;
        this.accountService = accountService;
        this.builder = builder;
        this.account = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            id: 0
        };
        this.language = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].direction;
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.account = navParams.get("item");
        this.agency = navParams.get("agency");
        this.email = this.account.email;
        this.password = this.account.password;
        this.firstName = this.account.firstName;
        this.lastName = this.account.lastName;
        this.translateService.get(['UPDATE_AGENCY_ERROR', 'UPDATE_AGENCY_SUCCESS',
            'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.signupErrorString = values.UPDATE_AGENCY_ERROR;
            _this.signupSuccessString = values.UPDATE_AGENCY_SUCCESS;
            _this.existingUserError = values.EXISTING_USER_ERROR;
            _this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            'firstName': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]],
            'lastName': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(45)]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
            'passwordConfirm': ['', []]
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__agency_details_agency_details__["a" /* AgencyDetailsPage */], { item: _this.agency });
        });
    }
    EditAgencyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAgencyPage');
    };
    EditAgencyPage.prototype.EditAgency = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        // set login to same as email
        // Attempt to login in through our User service
        var editAccount = {
            id: this.account.id,
            firstName: this.myForm.get("firstName").value,
            lastName: this.myForm.get("lastName").value,
            email: this.myForm.get("email").value,
            password: this.myForm.get("password").value,
            emailChanged: this.email != this.myForm.get("email").value
        };
        console.log(this.myForm.get("password").value != this.password, this.password);
        if (this.myForm.get("password").value != this.password && this.myForm.get("password").value != '' && this.myForm.get("password").value != null) {
            editAccount.password = this.myForm.get("password").value;
        }
        else {
            editAccount.password = null;
        }
        this.accountService.updateUserInformation(editAccount).subscribe(function (res) {
            console.log(res);
            // var id = res;
            var toast = _this.toastCtrl.create({
                message: _this.signupSuccessString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            //this.navCtrl.push(AgenciesPage);
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__agency_details_agency_details__["a" /* AgencyDetailsPage */], { item: _this.agency });
        }, function (err) {
            // Unable to sign up
            console.log(err);
            //const error = JSON.parse(err.error);
            var displayError = _this.signupErrorString;
            if (err.status === 400 && (err.error.errorKey == 'userexists' || err.error.message == 'error.userexists' || err.error.title == 'Login name already used!')) {
                displayError = _this.existingUserError;
            }
            else if (err.status === 400 && err.error.message === 'error.validation'
                && err.error.fieldErrors[0].field === 'password' && err.error.fieldErrors[0].message === 'Size') {
                displayError = _this.invalidPasswordError;
            }
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
        });
    };
    EditAgencyPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    EditAgencyPage.prototype.notMathces = function () {
        var ctrl = this.myForm.get("passwordConfirm");
        return ctrl.dirty && ctrl.value != this.myForm.get("password").value;
    };
    EditAgencyPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__agency_details_agency_details__["a" /* AgencyDetailsPage */], { item: this.agency });
    };
    EditAgencyPage.prototype.valuesChanges = function () {
        if (this.firstName != this.account.firstName || this.lastName != this.account.lastName || this.email != this.account.email || (this.password != this.myForm.get("password").value && this.myForm.get("password").value != '' && this.myForm.get("password").value != null)) {
            return true;
        }
        else {
            return false;
        }
    };
    EditAgencyPage.prototype.passwordChange = function () {
        if (this.myForm.get("password").value != '' && this.myForm.get("password").value != null) {
            this.myForm.get("passwordConfirm").clearValidators();
            this.myForm.get("passwordConfirm").updateValueAndValidity();
            this.myForm.get("passwordConfirm").setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
            this.myForm.get("passwordConfirm").clearValidators();
            this.myForm.get("passwordConfirm").updateValueAndValidity();
        }
        else {
            this.myForm.get("passwordConfirm").clearValidators();
            this.myForm.get("passwordConfirm").updateValueAndValidity();
        }
    };
    EditAgencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-agency',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\edit-agency\edit-agency.html"*/'<ion-header>\n\n    <ion-navbar>\n  <ion-grid style="width: 100%">\n        <ion-row>\n          <ion-col col-1>\n            <ion-buttons style="margin-block-start: 2px" class="btn-style">\n              <button ion-button (click)="back()">\n                <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n              </button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n              <ion-title>{{ \'EDIT_AGENCY_TITLE\' | translate }}</ion-title>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <!-- -->\n  <ion-content class="auth-page">\n    <div class="login-content">\n      <!-- Login form -->\n      <form class="list-form" [formGroup]="myForm">\n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            {{ \'FIRST_NAME\' | translate }}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.firstName" name="firstName" formControlName="firstName" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'firstName\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'firstName\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            {{ \'LAST_NAME\' | translate }}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.lastName" name="lastName" formControlName="lastName" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'lastName\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'lastName\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            {{ \'EMAIL\' | translate }}\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="account.email" name="email" formControlName="email" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'email\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="hasError(\'email\', \'email\')">{{ \'EMAIL_VALID\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            {{ \'PASSWORD\' | translate }}\n          </ion-label>\n          <ion-input type="password" name="password" formControlName="password" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'password\', \'minlength\')">{{ \'MIN_LENGTH\' | translate }} </p>\n  \n        <ion-item>\n          <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            {{ \'CONFIRM_PASSWORD\' | translate }}\n          </ion-label>\n          <ion-input type="password" name="passwordConfirm" (ionChange)="passwordChange()" formControlName="passwordConfirm" [disabled] = "!myForm.get(\'password\').valid || myForm.get(\'password\').value.length == 0" [lang]="language" [dir]="direction"></ion-input>\n        </ion-item>\n  \n        <p class="validationHint" *ngIf="hasError(\'passwordConfirm\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n        <p class="validationHint" *ngIf="notMathces()">{{ \'CONFIRM_PASSWORD_VALIDATE\' | translate }} </p>\n  \n      </form>\n  \n      <div margin-top style="margin-bottom: 40px;">\n        <button ion-button block color="dark" tappable (click)="EditAgency()" [disabled]="!myForm.valid || notMathces() || !valuesChanges()">\n          {{ \'EDIT_AGENCY_BUTTON\' | translate }}\n        </button>\n  \n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\edit-agency\edit-agency.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditAgencyPage);
    return EditAgencyPage;
}());

//# sourceMappingURL=edit-agency.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCaptainPageModule", function() { return AddCaptainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_captain__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_account_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddCaptainPageModule = /** @class */ (function () {
    function AddCaptainPageModule() {
    }
    AddCaptainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_captain__["a" /* AddCaptainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_captain__["a" /* AddCaptainPage */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_captain__["a" /* AddCaptainPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_captain__["a" /* AddCaptainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_account_service__["a" /* AccountService */]
            ]
        })
    ], AddCaptainPageModule);
    return AddCaptainPageModule;
}());

//# sourceMappingURL=add-captain.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderPageModule", function() { return AddOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_order__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_windowRef__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddOrderPageModule = /** @class */ (function () {
    function AddOrderPageModule() {
    }
    AddOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_order__["a" /* AddOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_order__["a" /* AddOrderPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_order__["a" /* AddOrderPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_order__["a" /* AddOrderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* User */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_windowRef__["a" /* WindowRef */]
            ]
        })
    ], AddOrderPageModule);
    return AddOrderPageModule;
}());

//# sourceMappingURL=add-order.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesPageModule", function() { return AgenciesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agencies__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgenciesPageModule = /** @class */ (function () {
    function AgenciesPageModule() {
    }
    AgenciesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agencies__["a" /* AgenciesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agencies__["a" /* AgenciesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__agencies__["a" /* AgenciesPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__agencies__["a" /* AgenciesPage */]
            ],
            providers: []
        })
    ], AgenciesPageModule);
    return AgenciesPageModule;
}());

//# sourceMappingURL=agencies.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyCaptainsPageModule", function() { return AgencyCaptainsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agency_captains__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AgencyCaptainsPageModule = /** @class */ (function () {
    function AgencyCaptainsPageModule() {
    }
    AgencyCaptainsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agency_captains__["a" /* AgencyCaptainsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agency_captains__["a" /* AgencyCaptainsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__agency_captains__["a" /* AgencyCaptainsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__agency_captains__["a" /* AgencyCaptainsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], AgencyCaptainsPageModule);
    return AgencyCaptainsPageModule;
}());

//# sourceMappingURL=agency-captains.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDetailsPageModule", function() { return AgencyDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agency_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgencyDetailsPageModule = /** @class */ (function () {
    function AgencyDetailsPageModule() {
    }
    AgencyDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agency_details__["a" /* AgencyDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agency_details__["a" /* AgencyDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__agency_details__["a" /* AgencyDetailsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__agency_details__["a" /* AgencyDetailsPage */]
            ],
            providers: []
        })
    ], AgencyDetailsPageModule);
    return AgencyDetailsPageModule;
}());

//# sourceMappingURL=agency-details.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCaptainsPageModule", function() { return AssignCaptainsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assign_captains__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_calendar_date_picker__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AssignCaptainsPageModule = /** @class */ (function () {
    function AssignCaptainsPageModule() {
    }
    AssignCaptainsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assign_captains__["a" /* AssignCaptainsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_calendar_date_picker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assign_captains__["a" /* AssignCaptainsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__assign_captains__["a" /* AssignCaptainsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__assign_captains__["a" /* AssignCaptainsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], AssignCaptainsPageModule);
    return AssignCaptainsPageModule;
}());

//# sourceMappingURL=assign-captains.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_jwt_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { JhiLanguageService } from 'ng-jhipster';



var LoginService = /** @class */ (function () {
    function LoginService(principal, authServerProvider, translate) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
        this.translate = translate;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    console.log(account, 'hhhhhhhhhhhhhhhhhhhhh');
                    if (account !== null) {
                        console.log(account, 'gfjfvjvhjv');
                        _this.translate.use(account.langKey);
                    }
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_principal_service__["a" /* Principal */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_jwt_service__["a" /* AuthServerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
    }
    Api_1 = Api;
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(Api_1.API_URL + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(Api_1.API_URL_login + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(Api_1.API_URL + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(Api_1.API_URL + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(Api_1.API_URL + '/' + endpoint, body, reqOpts);
    };
    // public static API_URL: string = 'http://localhost:9999';
    // //public static API_URL_login: string = 'http://localhost:6081';
    // public static API_URL_login: string = 'http://localhost:8888';
    // public static API_URL_Talabatk: string = 'http://localhost:6062';
    //online 
    Api.API_URL = 'https://d3rgr96gwzty3y.cloudfront.net';
    Api.API_URL_login = 'https://d3rgr96gwzty3y.cloudfront.net';
    Api.API_URL_Talabatk = 'https://d3rgr96gwzty3y.cloudfront.net';
    Api = Api_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], Api);
    return Api;
    var Api_1;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignOrderPageModule", function() { return AssignOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assign_order__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AssignOrderPageModule = /** @class */ (function () {
    function AssignOrderPageModule() {
    }
    AssignOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assign_order__["a" /* AssignOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assign_order__["a" /* AssignOrderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__assign_order__["a" /* AssignOrderPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__assign_order__["a" /* AssignOrderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */]
            ]
        })
    ], AssignOrderPageModule);
    return AssignOrderPageModule;
}());

//# sourceMappingURL=assign-order.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainDetailsPageModule", function() { return CaptainDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captain_details__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptainDetailsPageModule = /** @class */ (function () {
    function CaptainDetailsPageModule() {
    }
    CaptainDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captain_details__["a" /* CaptainDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__captain_details__["a" /* CaptainDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captain_details__["a" /* CaptainDetailsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captain_details__["a" /* CaptainDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], CaptainDetailsPageModule);
    return CaptainDetailsPageModule;
}());

//# sourceMappingURL=captain-details.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainEvaluationPageModule", function() { return CaptainEvaluationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captain_evaluation__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptainEvaluationPageModule = /** @class */ (function () {
    function CaptainEvaluationPageModule() {
    }
    CaptainEvaluationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captain_evaluation__["a" /* CaptainEvaluationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__captain_evaluation__["a" /* CaptainEvaluationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captain_evaluation__["a" /* CaptainEvaluationPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captain_evaluation__["a" /* CaptainEvaluationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], CaptainEvaluationPageModule);
    return CaptainEvaluationPageModule;
}());

//# sourceMappingURL=captain-evaluation.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainOrdersPageModule", function() { return CaptainOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captain_orders__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptainOrdersPageModule = /** @class */ (function () {
    function CaptainOrdersPageModule() {
    }
    CaptainOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captain_orders__["a" /* CaptainOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__captain_orders__["a" /* CaptainOrdersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captain_orders__["a" /* CaptainOrdersPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captain_orders__["a" /* CaptainOrdersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__["a" /* OrderService */]
            ]
        })
    ], CaptainOrdersPageModule);
    return CaptainOrdersPageModule;
}());

//# sourceMappingURL=captain-orders.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainsMapPageModule", function() { return CaptainsMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captains_map__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptainsMapPageModule = /** @class */ (function () {
    function CaptainsMapPageModule() {
    }
    CaptainsMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captains_map__["a" /* CaptainsMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__captains_map__["a" /* CaptainsMapPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captains_map__["a" /* CaptainsMapPage */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__captains_map__["a" /* CaptainsMapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], CaptainsMapPageModule);
    return CaptainsMapPageModule;
}());

//# sourceMappingURL=captains-map.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainsPageModule", function() { return CaptainsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptainsPageModule = /** @class */ (function () {
    function CaptainsPageModule() {
    }
    CaptainsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captains__["a" /* CaptainsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__captains__["a" /* CaptainsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captains__["a" /* CaptainsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captains__["a" /* CaptainsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], CaptainsPageModule);
    return CaptainsPageModule;
}());

//# sourceMappingURL=captains.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseAddressPageModule", function() { return ChooseAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_address__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_address_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChooseAddressPageModule = /** @class */ (function () {
    function ChooseAddressPageModule() {
    }
    ChooseAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_address__["a" /* ChooseAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_address__["a" /* ChooseAddressPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__choose_address__["a" /* ChooseAddressPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__choose_address__["a" /* ChooseAddressPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_address_service__["a" /* AddressService */]
            ]
        })
    ], ChooseAddressPageModule);
    return ChooseAddressPageModule;
}());

//# sourceMappingURL=choose-address.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAgencyPageModule", function() { return EditAgencyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_agency__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_account_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditAgencyPageModule = /** @class */ (function () {
    function EditAgencyPageModule() {
    }
    EditAgencyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_agency__["a" /* EditAgencyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_agency__["a" /* EditAgencyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_agency__["a" /* EditAgencyPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_agency__["a" /* EditAgencyPage */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_account_service__["a" /* AccountService */]
            ]
        })
    ], EditAgencyPageModule);
    return EditAgencyPageModule;
}());

//# sourceMappingURL=edit-agency.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAssignCaptainPageModule", function() { return EditAssignCaptainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_assign_captain__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_calendar_date_picker__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditAssignCaptainPageModule = /** @class */ (function () {
    function EditAssignCaptainPageModule() {
    }
    EditAssignCaptainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_assign_captain__["a" /* EditAssignCaptainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_calendar_date_picker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_assign_captain__["a" /* EditAssignCaptainPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_assign_captain__["a" /* EditAssignCaptainPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_assign_captain__["a" /* EditAssignCaptainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], EditAssignCaptainPageModule);
    return EditAssignCaptainPageModule;
}());

//# sourceMappingURL=edit-assign-captain.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCaptainPageModule", function() { return EditCaptainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_captain__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_account_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditCaptainPageModule = /** @class */ (function () {
    function EditCaptainPageModule() {
    }
    EditCaptainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_captain__["a" /* EditCaptainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_captain__["a" /* EditCaptainPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_captain__["a" /* EditCaptainPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_captain__["a" /* EditCaptainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_account_service__["a" /* AccountService */]
            ]
        })
    ], EditCaptainPageModule);
    return EditCaptainPageModule;
}());

//# sourceMappingURL=edit-captain.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityPageModule", function() { return EntityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_jhipster__ = __webpack_require__(934);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EntityPageModule = /** @class */ (function () {
    function EntityPageModule() {
    }
    EntityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__entity__["a" /* EntityPage */]
                /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__entity__["a" /* EntityPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ng_jhipster__["a" /* NgJhipsterModule */].forRoot({
                    alertAsToast: true,
                    i18nEnabled: false
                })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__entity__["a" /* EntityPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], EntityPageModule);
    return EntityPageModule;
}());

//# sourceMappingURL=entity.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]
            ]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_address_add_address__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_twitter_connect__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, myApp, tw, fb, loading, translateService, loginService, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.myApp = myApp;
        this.tw = tw;
        this.fb = fb;
        this.loading = loading;
        this.translateService = translateService;
        this.loginService = loginService;
        this.builder = builder;
        // The account fields for the signup form
        this.account = {
            login: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            langKey: __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].language,
            activated: true
        };
        this.language = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].direction;
        this.socialPassword = "FaceBook855Twitter2555LinkedIn1578";
        this.userData = {
            email: '',
            first_name: '',
            last_name: '',
        };
        this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS',
            'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.signupErrorString = values.SIGNUP_ERROR;
            _this.signupSuccessString = values.SIGNUP_SUCCESS;
            _this.existingUserError = values.EXISTING_USER_ERROR;
            _this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            'firstName': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(45)]],
            'lastName': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(45)]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].email]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(6)]],
            'passwordConfirm': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required]],
            "langKey": [this.language, []]
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        // set login to same as email
        this.account.login = this.account.email;
        this.account.activated = true;
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (res) {
            console.log(res);
            // var id = res;
            var loginAccount = {
                username: _this.account.email.toLowerCase(),
                password: _this.account.password,
                rememberMe: true,
            };
            //localStorage.setItem("userId" , id+"");
            _this.loginService.login(loginAccount).then(function (response) {
                _this.myApp.checkAccessToSignUp();
                var toast = _this.toastCtrl.create({
                    message: _this.signupSuccessString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__add_address_add_address__["a" /* AddAddressPage */]);
            });
        }, function (err) {
            // Unable to sign up
            console.log(err);
            loading.dismiss();
            var error = JSON.parse(err.error);
            var displayError = _this.signupErrorString;
            if (err.status === 400 && error.type.includes('already-used')) {
                displayError = _this.existingUserError;
            }
            else if (err.status === 400 && error.message === 'error.validation'
                && error.fieldErrors[0].field === 'password' && error.fieldErrors[0].message === 'Size') {
                displayError = _this.invalidPasswordError;
            }
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    SignupPage.prototype.notMathces = function () {
        var ctrl = this.myForm.get("passwordConfirm");
        return ctrl.dirty && ctrl.value != this.myForm.get("password").value;
    };
    SignupPage.prototype.twSignUp = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.tw.login()
            .then(function (res) {
            console.log(res, '1111111111111');
            _this.userData.email = res.userName + '@twitter.com';
            // Get user data
            // There is a bug which fires the success event in the error event.
            // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
            _this.tw.showUser()
                .then(function (user) {
                console.log(user, 'useeeeeeeeeeeeeeeeer');
                var name = user.name;
                var spaceIndex = name.indexOf(' ');
                if (spaceIndex == 0 || spaceIndex == -1) {
                    spaceIndex == name.length;
                }
                _this.userData.first_name = name.substr(0, spaceIndex);
                _this.userData.last_name = name.substr(name.indexOf(' ') + 1);
                loading.dismiss();
                _this.faceBookSignUp();
            }, function (err) {
                console.log(err, 'errrror');
                // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
            });
        }, function (err) {
            console.log(err, 'errrrrrrrrrror 11111111111');
            loading.dismiss();
        });
    };
    SignupPage.prototype.faceBookSignUp = function () {
        var _this = this;
        var signUpAccount = {
            login: this.userData.email,
            email: this.userData.email,
            firstName: this.userData.first_name,
            lastName: this.userData.last_name,
            password: this.socialPassword,
            langKey: __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */].language,
            activated: true
        };
        var loginAccount = {
            username: signUpAccount.login,
            password: signUpAccount.password,
            rememberMe: true,
        };
        // Attempt to login in through our User service
        this.user.signup(signUpAccount).subscribe(function (res) {
            console.log(res);
            // var id = res;
            //localStorage.setItem("userId" , id+"");
            _this.loginService.login(loginAccount).then(function (response) {
                _this.myApp.checkAccessToSignUp();
                var toast = _this.toastCtrl.create({
                    message: _this.signupSuccessString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__add_address_add_address__["a" /* AddAddressPage */]);
            });
        }, function (err) {
            // Unable to sign up
            console.log(err);
            var error = JSON.parse(err.error);
            if (err.status === 400 && error.type.includes('already-used')) {
                _this.loginService.login(loginAccount).then(function (response) {
                    _this.myApp.checkAccess();
                    var toast = _this.toastCtrl.create({
                        message: _this.signupSuccessString,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    //this.navCtrl.setRoot(AddAddressPage);
                });
            }
        });
    };
    SignupPage.prototype.fbSignUp = function () {
        // let load = this.loading.create({
        //   content: this.pleaseWait
        // })
        // load.present()
        var classlIn = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            // let toast1 = classlIn.toastCtrl.create({
            //   message: '----------------------------',
            //   duration: 5000,
            //   position: 'top'
            // });
            // toast1.present();
            classlIn.fb.api('me?fields=id,name,email,first_name,last_name', []).then(function (profile) {
                classlIn.userData = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'] };
                //load.dismiss()
                // let toast1 = classlIn.toastCtrl.create({
                //   message: '*****************************',
                //   duration: 1000,
                //   position: 'top'
                // });
                // toast1.present();
                // let toast = classlIn.toastCtrl.create({
                //   message: JSON.stringify(classlIn.userData),
                //   duration: 20000,
                //   position: 'top'
                // });
                // toast.present();
                classlIn.faceBookSignUp();
            }).catch(function (e) {
                console.log('Error logging into Facebook', e);
                //load.dismiss();
                //   let toast = classlIn.toastCtrl.create({
                //     message: JSON.stringify(e),
                //     duration: 20000,
                //     position: 'top'
                //   });
                //   toast.present();
            });
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            // let toast = classlIn.toastCtrl.create({
            //   message: JSON.stringify(e).substring(30, JSON.stringify(e).length - 1),
            //   duration: 20000,
            //   position: 'top'
            // });
            // toast.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'FIRST_NAME\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.firstName" name="firstName" formControlName="firstName"  [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'firstName\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'firstName\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          {{ \'LAST_NAME\' | translate }}\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.lastName" name="lastName" formControlName="lastName"  [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'lastName\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'lastName\', \'maxlength\')">{{ \'MAX_LENGTH\' | translate }} </p>\n    \n      \n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          {{ \'EMAIL\' | translate }}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" formControlName="email"  [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'email\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'email\', \'email\')">{{ \'EMAIL_VALID\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" formControlName="password"  [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'password\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="hasError(\'password\', \'minlength\')">{{ \'MIN_LENGTH\' | translate }} </p>\n\n      <ion-item >\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'CONFIRM_PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" name="passwordConfirm" formControlName="passwordConfirm"  [lang]="language" [dir]="direction" [disabled] = "!myForm.get(\'password\').valid"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'passwordConfirm\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      <p class="validationHint" *ngIf="notMathces()">{{ \'CONFIRM_PASSWORD_VALIDATE\' | translate }} </p>\n\n      <ion-list radio-group style="background-color: hsl" formControlName="langKey" [(ngModel)]="account.langKey">\n\n          <ion-list-header style="background-color: hsl;color: #4c6df9">\n              {{\'LANGUAGE\' | translate}}\n          </ion-list-header>\n    \n          <ion-grid style="padding-top: 0px">\n            <ion-row>\n              <ion-col col-6>\n                <ion-item text-center>\n                  <ion-label>{{\'ENGLISH\' | translate}}</ion-label>\n                  <ion-radio value="en"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item text-center>\n                  <ion-label>{{\'ARABIC\' | translate}}</ion-label>\n                  <ion-radio value="ar"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n    \n        </ion-list>\n\n    </form>\n    \n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="doSignup()" [disabled]="!myForm.valid || notMathces()">\n        {{ \'SIGNUP_BUTTON\' | translate }}\n      </button>\n      </div>\n      \n        <p text-center ion-text color="secondary">{{ \'SOCIAL_SIGN_UP\' | translate }}</p>\n\n        <button ion-button icon-only block class="btn-facebook" (click)="fbSignUp()">\n              <ion-icon name="logo-facebook"></ion-icon>\n              {{ \'LOGIN_FACEBOOK\' | translate }}\n            </button>\n         \n            <button ion-button icon-only block class="btn-twitter" (click)="twSignUp()" style="margin-top: 10px">\n              <ion-icon name="logo-twitter"></ion-icon>\n              {{ \'LOGIN_TWITTER\' | translate }}\n            </button>\n         \n\n   <!--\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-facebook">\n                <ion-icon name="logo-facebook"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-twitter">\n                <ion-icon name="logo-twitter"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-gplus">\n                <ion-icon name="logo-googleplus"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      -->\n\n      <!-- Other links -->\n      <div text-center margin-top>\n        <span ion-text color="primary" tappable (click)="login()">{{\'I_HAVE_AN_ACCOUNT\' | translate}}</span>\n      </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardPageModule", function() { return AdminDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_dashboard__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminDashboardPageModule = /** @class */ (function () {
    function AdminDashboardPageModule() {
    }
    AdminDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_dashboard__["a" /* AdminDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_dashboard__["a" /* AdminDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__admin_dashboard__["a" /* AdminDashboardPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__admin_dashboard__["a" /* AdminDashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], AdminDashboardPageModule);
    return AdminDashboardPageModule;
}());

//# sourceMappingURL=admin-dashboard.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersMapPageModule", function() { return OrdersMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_map__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersMapPageModule = /** @class */ (function () {
    function OrdersMapPageModule() {
    }
    OrdersMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders_map__["a" /* OrdersMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders_map__["a" /* OrdersMapPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__orders_map__["a" /* OrdersMapPage */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__orders_map__["a" /* OrdersMapPage */]
            ],
            providers: []
        })
    ], OrdersMapPageModule);
    return OrdersMapPageModule;
}());

//# sourceMappingURL=orders-map.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__["a" /* OrderService */]
            ]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAssignDetailsPageModule", function() { return SubAssignDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_assign_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SubAssignDetailsPageModule = /** @class */ (function () {
    function SubAssignDetailsPageModule() {
    }
    SubAssignDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_assign_details__["a" /* SubAssignDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_assign_details__["a" /* SubAssignDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sub_assign_details__["a" /* SubAssignDetailsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__sub_assign_details__["a" /* SubAssignDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__sub_assign_details__["a" /* SubAssignDetailsPage */]
            ]
        })
    ], SubAssignDetailsPageModule);
    return SubAssignDetailsPageModule;
}());

//# sourceMappingURL=sub-assign-details.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersPageModule", function() { return UserOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_orders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserOrdersPageModule = /** @class */ (function () {
    function UserOrdersPageModule() {
    }
    UserOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_orders__["a" /* UserOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_orders__["a" /* UserOrdersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__user_orders__["a" /* UserOrdersPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__user_orders__["a" /* UserOrdersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_order_service__["a" /* OrderService */]
            ]
        })
    ], UserOrdersPageModule);
    return UserOrdersPageModule;
}());

//# sourceMappingURL=user-orders.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(959);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainAssignDetailsPageModule", function() { return CaptainAssignDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captain_assign_details__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptainAssignDetailsPageModule = /** @class */ (function () {
    function CaptainAssignDetailsPageModule() {
    }
    CaptainAssignDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captain_assign_details__["a" /* CaptainAssignDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__captain_assign_details__["a" /* CaptainAssignDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captain_assign_details__["a" /* CaptainAssignDetailsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captain_assign_details__["a" /* CaptainAssignDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_captain_service__["a" /* CaptainService */]
            ]
        })
    ], CaptainAssignDetailsPageModule);
    return CaptainAssignDetailsPageModule;
}());

//# sourceMappingURL=captain-assign-details.module.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServerProvider = /** @class */ (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var _this = this;
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */].API_URL_login + '/auth/login', data).map(function (response) {
            var jwt = response['access_token'];
            if (jwt) {
                _this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        });
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    AuthServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["b" /* SessionStorageService */]])
    ], AuthServerProvider);
    return AuthServerProvider;
}());

//# sourceMappingURL=auth-jwt.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_jwt_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api, loginService, authservice) {
        this.api = api;
        this.loginService = loginService;
        this.authservice = authservice;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        this.loginService.login(accountInfo).then(function (res) {
            _this._loggedIn(res);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(res);
        }).catch(function (err) {
            console.error('ERROR', err);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(err);
        });
    };
    User.prototype.findAll = function () {
        return this.api.get('api/users?access_token=' + this.authservice.getToken());
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        return this.api.post('uaa/api/register', accountInfo, { responseType: 'text' }).share();
    };
    User.prototype.registerCaptain = function (accountInfo) {
        return this.api.post('api/registerCaptain?access_token=' + this.authservice.getToken(), accountInfo, { responseType: 'text' }).share();
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this.loginService.logout();
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__auth_auth_jwt_service__["a" /* AuthServerProvider */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choose_address_choose_address__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_captain_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UserOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserOrdersPage = /** @class */ (function () {
    function UserOrdersPage(navCtrl, navParams, toastCtrl, captainService, loading, translateService, app, principal, orderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.captainService = captainService;
        this.loading = loading;
        this.translateService = translateService;
        this.app = app;
        this.principal = principal;
        this.orderService = orderService;
        this.space = "  ";
        this.account = null;
        this.myVar = '';
        this.deliverOrderSuccess = null;
        this.deliverOrderError = null;
        this.ordersList = [];
        this.userType = '';
        this.userId = 0;
        this.captainId = 0;
        this.captain = null;
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.translateService.get(['DELIVER_ORDER_ERROR', 'DELIVER_ORDER_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.deliverOrderError = values.DELIVER_ORDER_ERROR;
            _this.deliverOrderSuccess = values.DELIVER_ORDER_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
    }
    UserOrdersPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getUserOrders(_this.myVar, _this.pageNum);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    UserOrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null) {
                load.dismiss();
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
                _this.account = account;
                _this.myVar = 'assigned';
                _this.userType = 'User';
                _this.userId = account.id;
                _this.captainId = 0;
                load.dismiss();
                _this.getUserOrders(_this.myVar, 0);
            }
            else if (account.authorities[0] == 'ROLE_CAPTAIN') {
                _this.account = account;
                _this.myVar = 'assigned';
                _this.userType = 'Captain';
                _this.userId = 0;
                _this.captainService.getByUserId(account.id).subscribe(function (data) {
                    _this.captain = data;
                    _this.captainId = data.id;
                    console.log(data, _this.captain);
                    load.dismiss();
                    _this.getUserOrders(_this.myVar, 0);
                }, function (err) {
                    console.log(err, 'errrrror');
                    ;
                });
            }
            else {
                _this.account = account;
                _this.myVar = 'assigned';
                _this.userType = 'Admin';
                _this.userId = 0;
                _this.captainId = 0;
                load.dismiss();
                _this.getUserOrders(_this.myVar, 0);
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    UserOrdersPage.prototype.getAllOrders = function (status, pageNum) {
        var _this = this;
        this.myVar = status;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.ordersList = [];
            this.pageNum = 1;
        }
        this.orderService.getAllByStatus(status, this.userId, true, pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.ordersList = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.ordersList.push(element);
                });
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    UserOrdersPage.prototype.getUserOrders = function (status, pageNum) {
        var _this = this;
        this.myVar = status;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.ordersList = [];
            this.pageNum = 1;
        }
        this.orderService.getUserOrders(this.userId, this.captainId, status, pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.ordersList = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.ordersList.push(element);
                });
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    UserOrdersPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__choose_address_choose_address__["a" /* ChooseAddressPage */]);
    };
    UserOrdersPage.prototype.viewOrder = function (orders) {
        var items = [];
        var flag = true;
        while (flag) {
            var index = orders.indexOf('-');
            // console.log(index, 'vvvv');
            if (index != -1) {
                // for (let index = 0; index < orders.length; index++) {  
                // console.log(orders, orders.length, 'sssssssssssss');
                // console.log(index, 'index');
                // console.log(orders.charAt(index));
                if (orders.charAt(index) === '-' && orders.charAt(index - 1) === ' ' && orders.charAt(index + 1) === ' ') {
                    var subOrder = {
                        name: orders.substring(0, index - 1),
                        index: items.length + 1
                    };
                    items.push(subOrder);
                    orders = orders.substring(index + 1, orders.length);
                }
                //}
            }
            else {
                flag = false;
            }
        }
        // console.log(items);
        var subOrder1 = {
            name: orders,
            index: items.length + 1
        };
        items.push(subOrder1);
        //console.log(items, 'mmmmmmmmmmmmmmm');
        return items;
    };
    UserOrdersPage.prototype.assingCaptain = function (order) {
        this.navCtrl.setRoot('AssignOrderPage', { item: order });
    };
    UserOrdersPage.prototype.finish = function (item) {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.orderService.finishOrder(item.id).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.deliverOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log("success");
            load.dismiss();
            _this.getUserOrders(_this.myVar, 0);
        }, function (err) {
            console.log(err);
            var displayError = _this.deliverOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    UserOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserOrdersPage');
    };
    UserOrdersPage.prototype.viewLocation = function (order) {
        this.navCtrl.setRoot('OrdersMapPage', { item: order });
    };
    UserOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-orders',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\user-orders\user-orders.html"*/'<!--\n  Generated template for the UserOrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>{{ \'USER_ORDERS\' | translate }}</ion-title>\n    <ion-buttons end class="btn-style">\n      <button ion-button (click)="add()" *ngIf="userType==\'User\'">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <ion-grid style="width: 100%" *ngIf="userType==\'Admin\'">\n    <ion-row>\n      <ion-col style="padding: 0px" col-4>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'not assigned\', \'tap-notselected\': myVar != \'not assigned\'}"\n          (click)="getUserOrders(\'not assigned\' , 0)">\n          <!-- <ion-icon name="close" item-start></ion-icon> -->\n          {{ \'NOT_ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px" col-4>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'assigned\', \'tap-notselected\': myVar != \'assigned\'}"\n          (click)="getUserOrders(\'assigned\' , 0)">\n          <!-- <ion-icon name="stats" item-start></ion-icon> -->\n          {{ \'ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px" col-4>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'delivered\', \'tap-notselected\': myVar != \'delivered\'}"\n          (click)="getUserOrders(\'delivered\' , 0)">\n          <!-- <ion-icon name="checkmark" item-start></ion-icon> -->\n          {{ \'DELIVERED\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n  <ion-grid style="width: 100%" *ngIf="userType==\'Captain\'">\n    <ion-row>\n\n      <ion-col style="padding: 0px" col-6>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'assigned\', \'tap-notselected\': myVar != \'assigned\'}"\n          (click)="getUserOrders(\'assigned\' , 0)">\n          <!-- <ion-icon name="stats" item-start></ion-icon> -->\n          {{ \'ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px" col-6>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'delivered\', \'tap-notselected\': myVar != \'delivered\'}"\n          (click)="getUserOrders(\'delivered\' , 0)">\n          <!-- <ion-icon name="checkmark" item-start></ion-icon> -->\n          {{ \'DELIVERED\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n\n  <div text-center *ngIf="ordersList.length == 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../../assets/img/sad.png" class="not-found-img">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let order of ordersList">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" src="../../assets/img/orders.jpg" />\n          </ion-col>\n\n          <ion-col col-9>\n\n            <div class="account-info info-div">\n              <p>\n                {{ \'NAME\' | translate }} :\n                <strong text-wrap>{{order.name}}</strong>\n              </p>\n              <p>\n                {{ \'FROM\' | translate }} :\n                <strong text-wrap>{{order.fromAddress}}</strong>\n              </p>\n              <!--  <li style="margin-left: 22px;margin-right: 22px"></li>  <br/>  -->\n              <p>\n                {{ \'TO\' | translate }} :\n                <strong text-wrap>{{order.street}} , {{order.addressCity}} , {{order.country}}</strong>\n              </p>\n              <p>\n                {{ \'PHONE_NUMBER_PHONE\' | translate }} 1 :\n                <strong text-wrap>{{order.firstPhone}}</strong>\n              </p>\n              <p *ngIf="order.secondPhone != null && order.secondPhone != \'\'">\n                {{ \'PHONE_NUMBER_PHONE\' | translate }} 2 :\n                <strong text-wrap>{{order.secondPhone}}</strong>\n              </p>\n              <p>\n                {{ \'ORDERS\' | translate }} :-\n              </p>\n              <!-- <div *ngFor="let item of viewOrder(order.orders)">\n                <p style="margin-left: 15px;margin-right: 15px">\n                  {{item.index}}-\n                  <strong text-wrap>{{item.name}}</strong>\n                </p>\n              </div> -->\n            </div>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n        <div class="account-info info-div2">\n            <ion-item class="item-background2">\n              <ion-grid style="padding: 0px">\n                <ion-row style="padding: 0px">\n                  <ion-col col-6>\n                    <p>\n                      {{\'NAME\' | translate}}\n                    </p>\n                  </ion-col>\n                  <ion-col col-1 style="padding: 0px">\n                      <p>\n                        <strong text-wrap>|</strong>\n                      </p>\n                    </ion-col>\n                  <ion-col col-5 style="padding: 0px">\n                    <p text-center>\n                      {{\'PRICE\' | translate}}\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class="item-background2" *ngFor="let sub of order.subOrders">\n              <ion-grid style="padding: 0px">\n                <ion-row style="padding: 0px">\n                  <ion-col col-6 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>{{sub.name}}</strong>\n                    </p>\n                  </ion-col>\n                  <ion-col col-1 style="padding: 0px">\n                      <p>\n                        <strong text-wrap>|</strong>\n                      </p>\n                    </ion-col>\n                  <ion-col col-5 style="padding: 0px">\n                    <p text-center>\n                      <strong text-wrap>{{sub.price}}</strong>\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class="item-background2">\n              <ion-grid style="padding: 0px">\n                <ion-row style="padding: 0px">\n                  <ion-col col-6 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>{{\'DELIVER_PRICE\' | translate}}</strong>\n                    </p>\n                  </ion-col>\n                  <ion-col col-1 style="padding: 0px">\n                      <p>\n                        <strong text-wrap>|</strong>\n                      </p>\n                    </ion-col>\n                  <ion-col col-5 style="padding: 0px">\n                    <p text-center>\n                      <strong text-wrap>10.0</strong>\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class="item-background2">\n              <ion-grid style="padding: 0px">\n                <ion-row style="padding: 0px">\n                  <ion-col col-6 style="padding: 0px">\n                    <p>\n                      <strong text-wrap>{{\'TOTAL\' | translate}}</strong>\n                    </p>\n                  </ion-col>\n                  <ion-col col-1 style="padding: 0px">\n                      <p>\n                        <strong text-wrap>|</strong>\n                      </p>\n                    </ion-col>\n                  <ion-col col-5 style="padding: 0px">\n                    <p text-center>\n                      <strong text-wrap>{{order.total}}</strong>\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </div>\n\n        <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-buttons end class="btn-style" style="width: 100%" *ngIf="myVar != \'delivered\' && userType==\'Admin\'">\n              <button ion-button style="width: 100%" (click)="assingCaptain(order)">\n                {{ \'ASSIGN_CAPTAIN\' | translate }}\n              </button>\n            </ion-buttons>\n\n            <ion-buttons end class="btn-style" style="width: 100%" *ngIf="myVar == \'assigned\' && userType==\'Captain\'">\n              <button ion-button style="width: 100%" (click)="finish(order)">\n                {{ \'DELIVER\' | translate }}\n              </button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-6>\n            <ion-buttons end class="btn-style" style="width: 100%;" *ngIf="myVar != \'delivered\' && (userType==\'Captain\' || userType==\'Admin\')">\n              <button ion-button (click)="viewLocation(order)" style="width: 100%;">\n                {{ \'VIEW_LOCATION\' | translate }}\n              </button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="ordersList.length != 0">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\user-orders\user-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */]])
    ], UserOrdersPage);
    return UserOrdersPage;
}());

//# sourceMappingURL=user-orders.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_twitter_connect__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, forgotCtrl, tw, api, app, user, loginService, toastCtrl, loading, translateService, builder, principal, authService, fb, platform, accountService, captainService, myApp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.forgotCtrl = forgotCtrl;
        this.tw = tw;
        this.api = api;
        this.app = app;
        this.user = user;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.translateService = translateService;
        this.builder = builder;
        this.principal = principal;
        this.authService = authService;
        this.fb = fb;
        this.platform = platform;
        this.accountService = accountService;
        this.captainService = captainService;
        this.myApp = myApp;
        // The account fields for the login form.
        this.account = {
            username: '',
            password: '',
            rememberMe: true,
        };
        this.socialPassword = "FaceBook855Twitter2555LinkedIn1578";
        this.language = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].direction;
        this.userData = {
            email: '',
            first_name: '',
            last_name: '',
        };
        this.translateService.get(['LOGIN_ERROR', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.loginErrorString = values.LOGIN_ERROR;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.validateUser();
        this.myForm = builder.group({
            'username': ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required]],
        });
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.account.username = this.account.username.toLowerCase();
        console.log(this.account.username.toLowerCase(), 'lower case');
        this.loginService.login(this.account).then(function (response) {
            load.dismiss();
            _this.myApp.checkAccess();
            _this.validateUser();
        }, function (err) {
            // Unable to log in
            _this.account.password = '';
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
        });
    };
    LoginPage.prototype.validateUser = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            load.dismiss();
            console.log(account);
            if (account === null) {
                //this.app.getRootNavs()[0].setRoot(FirstRunPage);
            }
            else {
                _this.account = account;
                console.log(_this.account, '555555555555');
                if (account.authorities[0] === 'ROLE_CAPTAIN') {
                    //this.app.getRootNavs()[0].setRoot(CaptainOrdersPage);
                }
                else if (account.authorities[0] == 'ROLE_AGENCY') {
                    // this.app.getRootNavs()[0].setRoot(OrdersPage);
                }
                else {
                    //this.app.getRootNavs()[0].setRoot(AgenciesPage);
                }
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    LoginPage.prototype.fbLogin = function () {
        // let load = this.loading.create({
        //   content: this.pleaseWait
        var _this = this;
        // })
        // load.present()
        if (this.platform.is("cordova")) {
            var classlIn_1 = this;
            this.fb.login(['public_profile', 'email'])
                .then(function (res) {
                console.log('Logged into Facebook!', res);
                // let toast1 = classlIn.toastCtrl.create({
                //   message: '----------------------------',
                //   duration: 5000,
                //   position: 'top'
                // });
                // toast1.present();
                classlIn_1.fb.api('me?fields=id,name,email,first_name,last_name', []).then(function (profile) {
                    classlIn_1.userData = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'] };
                    //load.dismiss()
                    // let toast1 = classlIn.toastCtrl.create({
                    //   message: '*****************************',
                    //   duration: 1000,
                    //   position: 'top'
                    // });
                    // toast1.present();
                    // let toast = classlIn.toastCtrl.create({
                    //   message: JSON.stringify(classlIn.userData),
                    //   duration: 20000,
                    //   position: 'top'
                    // });
                    // toast.present();
                    classlIn_1.doLoginToFacebook();
                }).catch(function (e) {
                    console.log('Error logging into Facebook', e);
                    //load.dismiss();
                    //   let toast = classlIn.toastCtrl.create({
                    //     message: JSON.stringify(e),
                    //     duration: 20000,
                    //     position: 'top'
                    //   });
                    //   toast.present();
                });
            })
                .catch(function (e) {
                console.log('Error logging into Facebook', e);
                // let toast = classlIn.toastCtrl.create({
                //   message: JSON.stringify(e).substring(30, JSON.stringify(e).length - 1),
                //   duration: 20000,
                //   position: 'top'
                // });
                // toast.present();
            });
        }
        else {
            this.authService.signIn(__WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (data) {
                _this.userData = { email: data.email, first_name: data.firstName, last_name: data.lastName };
                _this.doLoginToFacebook();
            }).catch(function (err) {
                console.log(err, 'errr 222222222222');
            });
        }
    };
    LoginPage.prototype.doLoginToFacebook = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        var account = {
            username: this.userData.email,
            password: this.socialPassword,
            rememberMe: true,
        };
        this.loginService.login(account).then(function (response) {
            load.dismiss();
            _this.myApp.checkAccess();
            _this.validateUser();
        }, function (err) {
            // Unable to log in
            _this.account.password = '';
            console.log(err);
            if (err.error.status == 400 && err.error.title == "Incorrect password") {
                _this.faceBookSignUp(account);
            }
            load.dismiss();
        });
    };
    LoginPage.prototype.faceBookSignUp = function (loginAccount) {
        var _this = this;
        var signUpAccount = {
            login: this.userData.email,
            email: this.userData.email,
            firstName: this.userData.first_name,
            lastName: this.userData.last_name,
            password: this.socialPassword,
            langKey: __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].language,
            activated: true
        };
        // Attempt to login in through our User service
        this.user.signup(signUpAccount).subscribe(function (res) {
            console.log(res);
            // var id = res;
            //localStorage.setItem("userId" , id+"");
            _this.loginService.login(loginAccount).then(function (response) {
                _this.myApp.checkAccess();
            });
        }, function (err) {
            // Unable to sign up
            console.log(err);
        });
    };
    LoginPage.prototype.twLogin = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.tw.login()
            .then(function (res) {
            console.log(res, '1111111111111');
            _this.userData.email = res.userName + '@twitter.com';
            // Get user data
            // There is a bug which fires the success event in the error event.
            // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
            _this.tw.showUser()
                .then(function (user) {
                console.log(user, 'useeeeeeeeeeeeeeeeer');
                var name = user.name;
                var spaceIndex = name.indexOf(' ');
                if (spaceIndex == 0 || spaceIndex == -1) {
                    spaceIndex == name.length;
                }
                _this.userData.first_name = name.substr(0, spaceIndex);
                _this.userData.last_name = name.substr(name.indexOf(' ') + 1);
                loading.dismiss();
                _this.doLoginToFacebook();
            }, function (err) {
                console.log(err, 'errrror');
                // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
            });
        }, function (err) {
            console.log(err, 'errrrrrrrrrror 11111111111');
            loading.dismiss();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>{{ \'TLABATAC\' | translate }}</strong>\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          {{ \'USERNAME\' | translate }}\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="account.username" name="username" formControlName="username" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'username\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          {{ \'PASSWORD\' | translate }}\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" formControlName="password" [lang]="language" [dir]="direction"></ion-input>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'password\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n\n    </form>\n\n    <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n   -->\n    <div>\n      <button ion-button icon-start block color="dark" tappable (click)="doLogin()" [disabled]="!myForm.valid">\n        <ion-icon name="log-in" style="margin-left: 5px;margin-right: 5px"></ion-icon>\n        {{ \'LOGIN_BUTTON\' | translate }}\n      </button>\n\n\n      <p text-center ion-text color="secondary">{{ \'OR_SIGN_IN_WITH\' | translate }}</p>\n\n      \n            <button ion-button icon-only block class="btn-facebook" (click)="fbLogin()">\n              <ion-icon name="logo-facebook"></ion-icon>\n              {{ \'LOGIN_FACEBOOK\' | translate }}\n            </button>\n         \n            <button ion-button icon-only block class="btn-twitter" (click)="twLogin()" style="margin-top: 10px">\n              <ion-icon name="logo-twitter"></ion-icon>\n              {{ \'LOGIN_TWITTER\' | translate }}\n            </button>\n         \n\n      <!--\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-facebook">\n                <ion-icon name="logo-facebook"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-twitter">\n                <ion-icon name="logo-twitter"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-gplus">\n                <ion-icon name="logo-googleplus"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n      </div>\n  \n  -->\n\n      <div text-center margin-top>\n        <span ion-text color="secondary" tappable (click)="register()">{{\'NEW_HERE\' | translate}}\n          <strong>{{\'SIGN_UP\' | translate}}</strong>\n        </span>\n      </div>\n\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_13__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_principal_service__["a" /* Principal */],
            __WEBPACK_IMPORTED_MODULE_14_angular4_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(620);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptainsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_captain_add_captain__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__captains_map_captains_map__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__captain_evaluation_captain_evaluation__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__captain_assign_details_captain_assign_details__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__captain_details_captain_details__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the CaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaptainsPage = /** @class */ (function () {
    function CaptainsPage(navCtrl, navParams, loading, translateService, app, principal, captainService) {
        //this.getAllCaptains();
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.translateService = translateService;
        this.app = app;
        this.principal = principal;
        this.captainService = captainService;
        this.captainsList = [];
        this.userType = '';
        this.account = null;
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
    }
    CaptainsPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            _this.account = account;
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                _this.userType = 'agency';
                _this.getAgencyCaptains(0);
            }
            else {
                _this.userType = 'admin';
                _this.getAllCaptains(0);
            }
            console.log(_this.userType);
        }).catch(function (err) {
            load.dismiss();
        });
    };
    CaptainsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaptainsPage');
    };
    CaptainsPage.prototype.getAllCaptains = function (pageNum) {
        var _this = this;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.captainsList = [];
        }
        //this.captainsList = [];
        this.captainService.getAll(pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.captainsList = res;
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.captainsList.push(element);
                });
            }
            if (pageNum == 0) {
                load.dismiss();
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    CaptainsPage.prototype.getAgencyCaptains = function (pageNum) {
        var _this = this;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.captainsList = [];
        }
        //this.captainsList = [];
        this.captainService.getByAgencyId(this.account.id, pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.captainsList = res;
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.captainsList.push(element);
                });
            }
            if (pageNum == 0) {
                load.dismiss();
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    CaptainsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            if (_this.userType == 'agency') {
                _this.getAgencyCaptains(_this.pageNum);
            }
            else {
                _this.getAllCaptains(_this.pageNum);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    CaptainsPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_captain_add_captain__["a" /* AddCaptainPage */]);
    };
    CaptainsPage.prototype.openMap = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__captains_map_captains_map__["a" /* CaptainsMapPage */]);
    };
    CaptainsPage.prototype.openEvaluation = function (captain) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__captain_evaluation_captain_evaluation__["a" /* CaptainEvaluationPage */], { item: captain });
    };
    CaptainsPage.prototype.viewAssignDetails = function (captain) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__captain_assign_details_captain_assign_details__["a" /* CaptainAssignDetailsPage */], { item: captain });
    };
    CaptainsPage.prototype.captainDetails = function (captain) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__captain_details_captain_details__["a" /* CaptainDetailsPage */], { item: captain });
    };
    CaptainsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-captains',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captains\captains.html"*/'<!--\n  Generated template for the CaptainsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title> {{ \'CAPTAINS\' | translate }}</ion-title>\n    <ion-buttons end class="btn-style">\n        <button ion-button (click)="openMap()">\n          <ion-icon name="map"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-buttons end class="btn-style" *ngIf="userType == \'admin\'">\n      <button ion-button (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n    <div text-center *ngIf="captainsList.length == 0">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src="../../assets/img/sad.png" class="not-found-img">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n    \n              <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    \n      </div>\n\n\n\n  <ion-list style="padding-top: 15px;">\n\n\n      <ion-item class="item-background" *ngFor="let captain of captainsList">\n        <ion-grid>\n          <ion-row >\n            <ion-col  class="img-col" col-3>\n              <img class="circle-pic" *ngIf="!captain.image"src="../../assets/img/person.png"\n              />\n              <img class="circle-pic" *ngIf="captain.image" [src]="[\'data:image/jpg;base64\',captain.image]" />\n            </ion-col>\n\n            <ion-col  class="btn-col" col-9 (click)="captainDetails(captain)">\n\n              <div class="account-info info-div">\n                <p>\n                  <strong text-wrap> {{captain.name}} </strong>\n                </p>\n\n                <p>\n                  {{\'CODE\' | translate}} : <strong text-wrap>{{captain.code}}</strong> \n                </p>\n\n              </div>\n            </ion-col>\n          </ion-row>\n\n        <ion-row *ngIf="userType == \'admin\'">\n            <ion-col col-6>\n                <ion-buttons end class="btn-style" style="width: 100%; padding: 0px;">\n                    <button ion-button (click)="openEvaluation(captain)" style="width: 100%; padding: 0px;">\n                      {{ \'EDIT_EVALUATION\' | translate }}\n                    </button>\n                  </ion-buttons> \n            </ion-col>\n            <ion-col col-6>\n              <ion-buttons class="btn-style" style="width: 100%; padding: 0px;">\n                <button ion-button (click)="viewAssignDetails(captain)" style="width: 100%;padding: 0px;">\n                  {{ \'VIEW_ASSIGN_DETAILS\' | translate }}\n                </button>\n              </ion-buttons>\n  \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-item>\n\n\n\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="captainsList.length != 0">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n \n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\captains\captains.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__["a" /* CaptainService */]])
    ], CaptainsPage);
    return CaptainsPage;
}());

//# sourceMappingURL=captains.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth_jwt_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_webstorage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth_interceptor__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_entities_entity_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_landing_landing_module__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup_module__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_address_add_address_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation_ngx__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_captain_add_captain_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_home_module__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_captains_captains_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_captains_map_captains_map_module__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_keyboard__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_add_order_add_order_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_orders_orders_module__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_assign_order_assign_order_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_captain_orders_captain_orders_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_captain_evaluation_captain_evaluation_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_add_agency_add_agency_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_agencies_agencies_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_assign_captains_assign_captains_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_agency_captains_agency_captains_module__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_settings_settings_module__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_background_mode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_admin_dashboard_admin_dashboard_module__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_user_orders_user_orders_module__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_choose_address_choose_address_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_orders_map_orders_map_module__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_facebook__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_twitter_connect__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_edit_assign_captain_edit_assign_captain_module__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_device__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic_calendar_date_picker__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_date_picker__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_admob_free__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_location_accuracy__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_captain_assign_details_captain_assign_details_module__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_sub_assign_details_sub_assign_details_module__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_agency_details_agency_details_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_captain_details_captain_details_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_edit_agency_edit_agency_module__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_edit_captain_edit_captain_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_add_order_popover_add_order_popover__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angular4_social_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































//import { settings } from 'cluster';






















//import { Printer} from '@ionic-native/printer';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_10__providers_providers__["b" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var config = new __WEBPACK_IMPORTED_MODULE_60_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_60_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_60_angular4_social_login__["FacebookLoginProvider"]("340338943258185")
    }
]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_59__components_add_order_popover_add_order_popover__["a" /* AddOrderPopoverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_60_angular4_social_login__["SocialLoginModule"].initialize(config),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_49_ionic_calendar_date_picker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-agency/add-agency.module#AddAgencyPageModule', name: 'AddAgencyPage', segment: 'add-agency', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-captain/add-captain.module#AddCaptainPageModule', name: 'AddCaptainPage', segment: 'add-captain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-order/add-order.module#AddOrderPageModule', name: 'AddOrderPage', segment: 'add-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agencies/agencies.module#AgenciesPageModule', name: 'AgenciesPage', segment: 'agencies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agency-captains/agency-captains.module#AgencyCaptainsPageModule', name: 'AgencyCaptainsPage', segment: 'agency-captains', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agency-details/agency-details.module#AgencyDetailsPageModule', name: 'AgencyDetailsPage', segment: 'agency-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-captains/assign-captains.module#AssignCaptainsPageModule', name: 'AssignCaptainsPage', segment: 'assign-captains', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-order/assign-order.module#AssignOrderPageModule', name: 'AssignOrderPage', segment: 'assign-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/captain-details/captain-details.module#CaptainDetailsPageModule', name: 'CaptainDetailsPage', segment: 'captain-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/captain-evaluation/captain-evaluation.module#CaptainEvaluationPageModule', name: 'CaptainEvaluationPage', segment: 'captain-evaluation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/captain-orders/captain-orders.module#CaptainOrdersPageModule', name: 'CaptainOrdersPage', segment: 'captain-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/captains-map/captains-map.module#CaptainsMapPageModule', name: 'CaptainsMapPage', segment: 'captains-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/captains/captains.module#CaptainsPageModule', name: 'CaptainsPage', segment: 'captains', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-address/choose-address.module#ChooseAddressPageModule', name: 'ChooseAddressPage', segment: 'choose-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-agency/edit-agency.module#EditAgencyPageModule', name: 'EditAgencyPage', segment: 'edit-agency', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-assign-captain/edit-assign-captain.module#EditAssignCaptainPageModule', name: 'EditAssignCaptainPage', segment: 'edit-assign-captain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-captain/edit-captain.module#EditCaptainPageModule', name: 'EditCaptainPage', segment: 'edit-captain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entities/entity.module#EntityPageModule', name: 'EntityPage', segment: 'entity', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', name: 'AdminDashboardPage', segment: 'admin-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders-map/orders-map.module#OrdersMapPageModule', name: 'OrdersMapPage', segment: 'orders-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sub-assign-details/sub-assign-details.module#SubAssignDetailsPageModule', name: 'SubAssignDetailsPage', segment: 'sub-assign-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-orders/user-orders.module#UserOrdersPageModule', name: 'UserOrdersPage', segment: 'user-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/captain-assign-details/captain-assign-details.module#CaptainAssignDetailsPageModule', name: 'CaptainAssignDetailsPage', segment: 'captain-assign-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__pages_entities_entity_module__["EntityPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_landing_landing_module__["LandingPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_address_add_address_module__["AddAddressPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_captain_add_captain_module__["AddCaptainPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_captains_captains_module__["CaptainsPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_captains_map_captains_map_module__["CaptainsMapPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_add_order_add_order_module__["AddOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_orders_orders_module__["OrdersPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_assign_order_assign_order_module__["AssignOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_captain_orders_captain_orders_module__["CaptainOrdersPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_captain_evaluation_captain_evaluation_module__["CaptainEvaluationPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_add_agency_add_agency_module__["AddAgencyPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_agencies_agencies_module__["AgenciesPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_assign_captains_assign_captains_module__["AssignCaptainsPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_agency_captains_agency_captains_module__["AgencyCaptainsPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_admin_dashboard_admin_dashboard_module__["AdminDashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_user_orders_user_orders_module__["UserOrdersPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_choose_address_choose_address_module__["ChooseAddressPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_orders_map_orders_map_module__["OrdersMapPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_edit_assign_captain_edit_assign_captain_module__["EditAssignCaptainPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_captain_assign_details_captain_assign_details_module__["CaptainAssignDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_sub_assign_details_sub_assign_details_module__["SubAssignDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_agency_details_agency_details_module__["AgencyDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_captain_details_captain_details_module__["CaptainDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_57__pages_edit_agency_edit_agency_module__["EditAgencyPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_edit_captain_edit_captain_module__["EditCaptainPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_59__components_add_order_popover_add_order_popover__["a" /* AddOrderPopoverComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__providers_providers__["c" /* User */],
                __WEBPACK_IMPORTED_MODULE_12__providers_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_39__providers_auth_captain_service__["a" /* CaptainService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_principal_service__["a" /* Principal */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth_jwt_service__["a" /* AuthServerProvider */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_webstorage__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_webstorage__["b" /* SessionStorageService */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                //Printer,
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_date_picker__["a" /* DatePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__providers_providers__["b" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth_interceptor__["a" /* AuthInterceptor */], multi: true }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_agency_add_agency__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assign_captains_assign_captains__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agency_captains_agency_captains__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agency_details_agency_details__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AgenciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgenciesPage = /** @class */ (function () {
    function AgenciesPage(navCtrl, navParams, loading, translateService, accountService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.translateService = translateService;
        this.accountService = accountService;
        this.agenciesList = [];
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
        this.getAllAgincies(0);
    }
    AgenciesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgenciesPage');
    };
    AgenciesPage.prototype.getAllAgincies = function (pageNum) {
        var _this = this;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.agenciesList = [];
        }
        //this.agenciesList = [];
        this.accountService.getAllAgencyWithPagination(pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.agenciesList = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.agenciesList.push(element);
                });
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    AgenciesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getAllAgincies(_this.pageNum);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    AgenciesPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_agency_add_agency__["a" /* AddAgencyPage */]);
    };
    AgenciesPage.prototype.assingCaptains = function (agency) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__assign_captains_assign_captains__["a" /* AssignCaptainsPage */], { item: agency });
    };
    AgenciesPage.prototype.viewCaptains = function (agency) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__agency_captains_agency_captains__["a" /* AgencyCaptainsPage */], { item: agency });
    };
    AgenciesPage.prototype.agencyDetails = function (agency) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__agency_details_agency_details__["a" /* AgencyDetailsPage */], { item: agency });
    };
    AgenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agencies',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\agencies\agencies.html"*/'<!--\n  Generated template for the CaptainsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n\n      <ion-title>{{ \'AGENCIES\' | translate }}</ion-title>\n\n      <ion-buttons end class="btn-style">\n        <button ion-button (click)="add()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n    <div text-center *ngIf="agenciesList.length == 0">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src="../../assets/img/sad.png" class="not-found-img">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n    \n              <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    \n      </div>\n    \n\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let agency of agenciesList">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" src="../../assets/img/person.png" />\n          </ion-col>\n\n          <ion-col class="btn-col"col-9  (click)="agencyDetails(agency)">\n\n            <div class="account-info info-div">\n              <p style="margin-top: 13px">\n                <strong text-wrap> {{agency.firstName}} {{agency.lastName}}</strong>\n              </p>\n\n              <p style="margin-top: 10px">\n                {{\'EMAIL\' | translate}} : <strong text-wrap>{{agency.email}}</strong>\n              </p>\n\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-buttons end class="btn-style" style="width: 100%;">\n              <button ion-button (click)="assingCaptains(agency)" style="width: 100%;">\n                {{ \'ASSIGN_CAPTAIN\' | translate }}\n              </button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col>\n            <ion-buttons end class="btn-style" style="width: 100%;">\n              <button ion-button (click)="viewCaptains(agency)" style="width: 100%;">\n                {{ \'CAPTAINS\' | translate }}\n              </button>\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="agenciesList.length != 0">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\agencies\agencies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["d" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_account_service__["a" /* AccountService */]) === "function" && _e || Object])
    ], AgenciesPage);
    return AgenciesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=agencies.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user__["a"]; });




//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_order_add_order__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, loading, translateService, app, principal, orderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.translateService = translateService;
        this.app = app;
        this.principal = principal;
        this.orderService = orderService;
        this.account = null;
        this.myVar = '';
        this.ordersList = [];
        this.userType = '';
        this.userId = 0;
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.translateService.get(['PLEASE_WAIT', 'MORE_DATA']).subscribe(function (values) {
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
        });
    }
    OrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                _this.account = account;
                _this.myVar = 'assigned';
                _this.userType = 'Agency';
                _this.userId = account.id;
                _this.getAllOrders(_this.myVar, 0);
            }
            else {
                _this.account = account;
                _this.myVar = 'assigned';
                _this.userType = 'Admin';
                _this.userId = 0;
                _this.getAllOrders(_this.myVar, 0);
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getAllOrders(_this.myVar, _this.pageNum);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    OrdersPage.prototype.getAllOrders = function (status, pageNum) {
        var _this = this;
        this.myVar = status;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.ordersList = [];
            this.pageNum = 1;
        }
        this.orderService.getAllByStatus(status, this.userId, false, pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.ordersList = res;
                load.dismiss();
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.ordersList.push(element);
                });
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    OrdersPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__add_order_add_order__["a" /* AddOrderPage */]);
    };
    OrdersPage.prototype.viewOrder = function (orders) {
        var items = [];
        var flag = true;
        while (flag) {
            var index = orders.indexOf('-');
            console.log(index, 'vvvv');
            if (index != -1) {
                // for (let index = 0; index < orders.length; index++) {  
                console.log(orders, orders.length, 'sssssssssssss');
                console.log(index, 'index');
                console.log(orders.charAt(index));
                if (orders.charAt(index) === '-' && orders.charAt(index - 1) === ' ' && orders.charAt(index + 1) === ' ') {
                    var subOrder = {
                        name: orders.substring(0, index - 1),
                        index: items.length + 1
                    };
                    items.push(subOrder);
                    orders = orders.substring(index + 1, orders.length);
                }
                //}
            }
            else {
                flag = false;
            }
        }
        console.log(items);
        var subOrder1 = {
            name: orders,
            index: items.length + 1
        };
        items.push(subOrder1);
        console.log(items, 'mmmmmmmmmmmmmmm');
        return items;
    };
    OrdersPage.prototype.assingCaptain = function (order) {
        this.navCtrl.setRoot('AssignOrderPage', { item: order });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\orders\orders.html"*/'<!--\n  Generated template for the CaptainsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>{{ \'ORDERS\' | translate }}</ion-title>\n    <ion-buttons end class="btn-style">\n      <button ion-button (click)="add()" *ngIf="userType == \'Agency\'">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <ion-grid style="width: 100%">\n    <ion-row>\n      <ion-col style="padding: 0px" col-4>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'not assigned\', \'tap-notselected\': myVar != \'not assigned\'}"\n          (click)="getAllOrders(\'not assigned\' , 0)">\n          <!-- <ion-icon name="close" item-start></ion-icon> -->\n          {{ \'NOT_ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px" col-4>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'assigned\', \'tap-notselected\': myVar != \'assigned\'}"\n          (click)="getAllOrders(\'assigned\' , 0)">\n          <!-- <ion-icon name="stats" item-start></ion-icon> -->\n          {{ \'ASSIGNED\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col style="padding: 0px" col-4>\n        <button ion-button block tappable [ngClass]="{\'tap-selected\': myVar == \'delivered\', \'tap-notselected\': myVar != \'delivered\'}"\n          (click)="getAllOrders(\'delivered\' , 0)">\n          <!-- <ion-icon name="checkmark" item-start></ion-icon> -->\n          {{ \'DELIVERED\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div text-center *ngIf="ordersList.length == 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../../assets/img/sad.png" class="not-found-img">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let order of ordersList">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" src="../../assets/img/orders.jpg" />\n          </ion-col>\n\n          <ion-col col-9>\n\n            <div class="account-info info-div">\n              <p>\n                {{ \'NAME\' | translate }} :\n                <strong text-wrap>{{order.name}}</strong>\n              </p>\n              <p>\n                {{ \'ADDRESS\' | translate }} 1 :\n                <strong text-wrap>{{order.address}}</strong>\n              </p>\n              <p *ngIf="order.secondAddress != null && order.secondAddress != \'\'">\n                {{ \'ADDRESS\' | translate }} 2 :\n                <strong text-wrap>{{order.secondAddress}}</strong>\n              </p>\n              <p>\n                {{ \'PHONE_NUMBER_PHONE\' | translate }} 1 :\n                <strong text-wrap>{{order.firstPhone}}</strong>\n              </p>\n              <p *ngIf="order.secondPhone != null && order.secondPhone != \'\'">\n                {{ \'PHONE_NUMBER_PHONE\' | translate }} 2 :\n                <strong text-wrap>{{order.secondPhone}}</strong>\n              </p>\n              <p>\n                {{ \'ORDERS\' | translate }} :-\n              </p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- <div *ngFor="let item of viewOrder(order.orders)">\n                <p style="margin-left: 15px;margin-right: 15px">\n                  {{item.index}}- <strong text-wrap>{{item.name}}</strong>\n                </p>\n              </div> -->\n      <div class="account-info info-div2">\n        <ion-item class="item-background2">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6>\n                <p>\n                  {{\'NAME\' | translate}}\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>|</strong>\n                  </p>\n                </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  {{\'PRICE\' | translate}}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item class="item-background2" *ngFor="let sub of order.subOrders">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6 style="padding: 0px">\n                <p>\n                  <strong text-wrap>{{sub.name}}</strong>\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>|</strong>\n                  </p>\n                </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  <strong text-wrap>{{sub.price}}</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item class="item-background2">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6 style="padding: 0px">\n                <p>\n                  <strong text-wrap>{{\'DELIVER_PRICE\' | translate}}</strong>\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>|</strong>\n                  </p>\n                </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  <strong text-wrap>10.0</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item class="item-background2">\n          <ion-grid style="padding: 0px">\n            <ion-row style="padding: 0px">\n              <ion-col col-6 style="padding: 0px">\n                <p>\n                  <strong text-wrap>{{\'TOTAL\' | translate}}</strong>\n                </p>\n              </ion-col>\n              <ion-col col-1 style="padding: 0px">\n                  <p>\n                    <strong text-wrap>|</strong>\n                  </p>\n                </ion-col>\n              <ion-col col-5 style="padding: 0px">\n                <p text-center>\n                  <strong text-wrap>{{order.total}}</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n\n      <ion-buttons end class="btn-style" *ngIf="myVar != \'delivered\' && userType == \'Agency\'">\n        <button ion-button (click)="assingCaptain(order)">\n          {{ \'ASSIGN_CAPTAIN\' | translate }}\n        </button>\n      </ion-buttons>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="ordersList.length != 0">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_order_service__["a" /* OrderService */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyCaptainsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assign_captains_assign_captains__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agencies_agencies__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sub_assign_details_sub_assign_details__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the AgencyCaptainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgencyCaptainsPage = /** @class */ (function () {
    function AgencyCaptainsPage(navCtrl, _alert, navParams, platform, principal, app, loading, toastCtrl, captainService, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._alert = _alert;
        this.navParams = navParams;
        this.platform = platform;
        this.principal = principal;
        this.app = app;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.captainService = captainService;
        this.translateService = translateService;
        this.captainsList = [];
        this.agency = null;
        this.user = null;
        this.language = __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].direction;
        this.pageNum = 1;
        this.moreData = 'Loading more data...';
        this.unAssignAlertTilte = '';
        this.unAssignAlertMessage = '';
        this.yes = '';
        this.cancel = '';
        this.fromWhenMessage = '';
        this.todayMessage = '';
        this.tommorowMessage = '';
        this.agency = this.navParams.get("item");
        console.log('agency 3', this.agency);
        this.translateService.get(['UN_ASSIGN_CAPTAIN_ERROR', 'UN_ASSIGN_CAPTAIN_SUCCESS', 'PLEASE_WAIT', 'MORE_DATA',
            'UNASSIGN_ALERT_TITLE', 'UNASSIGN_ALERT_MESSAGE', 'YES',
            'CANCEL', 'FROM_WHEN_MESSAGE', 'FROM_TODAY', 'FROM_TOMMOROW']).subscribe(function (values) {
            _this.unassignCaptainError = values.UN_ASSIGN_CAPTAIN_ERROR;
            _this.unassignCaptainSuccess = values.UN_ASSIGN_CAPTAIN_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.moreData = values.MORE_DATA;
            _this.unAssignAlertTilte = values.UNASSIGN_ALERT_TITLE;
            _this.unAssignAlertMessage = values.UNASSIGN_ALERT_MESSAGE;
            _this.yes = values.YES;
            _this.cancel = values.CANCEL;
            _this.fromWhenMessage = values.FROM_WHEN_MESSAGE;
            _this.todayMessage = values.FROM_TODAY;
            _this.tommorowMessage = values.FROM_TOMMOROW;
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__agencies_agencies__["a" /* AgenciesPage */]);
        });
    }
    AgencyCaptainsPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.user = account;
                _this.getAgencyCaptains(0);
            }
        }).catch(function (err) {
            console.log(err, 'err');
            load.dismiss();
        });
    };
    AgencyCaptainsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgencyCaptainsPage');
    };
    AgencyCaptainsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getAgencyCaptains(_this.pageNum);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    AgencyCaptainsPage.prototype.getAgencyCaptains = function (pageNum) {
        var _this = this;
        var load;
        if (pageNum == 0) {
            load = this.loading.create({
                content: this.pleaseWait
            });
            load.present();
            this.captainsList = [];
        }
        var agencyId = 0;
        if (this.agency == null || this.agency == undefined) {
            agencyId = this.user.id;
        }
        else {
            agencyId = this.agency.id;
        }
        this.captainService.getByAgencyId(agencyId, pageNum).subscribe(function (res) {
            console.log(res);
            if (pageNum == 0) {
                _this.captainsList = res;
            }
            else {
                if (res.length > 0) {
                    _this.pageNum++;
                }
                res.forEach(function (element) {
                    _this.captainsList.push(element);
                });
            }
            if (pageNum == 0) {
                load.dismiss();
            }
        }, function (err) {
            console.log(err);
            if (pageNum == 0) {
                load.dismiss();
            }
        });
    };
    AgencyCaptainsPage.prototype.unAssingCaptain = function (captain) {
        var _this = this;
        var alert = this._alert.create({
            title: this.unAssignAlertTilte,
            message: this.unAssignAlertMessage,
            buttons: [
                {
                    text: this.yes,
                    handler: function () {
                        _this.fromWhenDialog(captain);
                    }
                },
                {
                    text: this.cancel,
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    AgencyCaptainsPage.prototype.fromWhenDialog = function (captain) {
        var _this = this;
        var alert = this._alert.create({
            title: this.unAssignAlertTilte,
            message: this.fromWhenMessage,
            buttons: [
                {
                    text: this.todayMessage,
                    handler: function () {
                        _this.doUnAssingCaptain(captain, 'today');
                    }
                },
                {
                    text: this.tommorowMessage,
                    handler: function () {
                        _this.doUnAssingCaptain(captain, 'tommorow');
                    }
                }
            ]
        });
        alert.present();
    };
    AgencyCaptainsPage.prototype.doUnAssingCaptain = function (captain, day) {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.unAssignCaptain(captain.id, day).subscribe(function (res) {
            load.dismiss();
            _this.getAgencyCaptains(0);
            var toast = _this.toastCtrl.create({
                message: _this.unassignCaptainSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }, function (err) {
            var displayError = _this.unassignCaptainError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    AgencyCaptainsPage.prototype.add = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__assign_captains_assign_captains__["a" /* AssignCaptainsPage */]);
    };
    AgencyCaptainsPage.prototype.assignDetails = function (captain) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__sub_assign_details_sub_assign_details__["a" /* SubAssignDetailsPage */], { item: captain, from: "AgencyCaptainsPage", agency: this.agency });
    };
    AgencyCaptainsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__agencies_agencies__["a" /* AgenciesPage */]);
    };
    AgencyCaptainsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agency-captains',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\agency-captains\agency-captains.html"*/'<!--\n  Generated template for the AgencyCaptainsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle *ngIf="agency == null || agency == undefined">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n\n    <ion-grid style="width: 100%">\n      <ion-row>\n        <ion-col col-1 *ngIf="agency != null && agency != undefined">\n          <ion-buttons style="margin-block-start: 2px" class="btn-style">\n            <button ion-button (click)="back()">\n              <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-11 [style.margin-top]="agency != null && agency != undefined  && language == \'en\' ? \'10px\' : \'0px\'">\n          <ion-title *ngIf="agency != null" [style.margin-top]="language == \'ar\' ? \'7px\' : \'0px\'">{{ \'AGENCY_CAPTAINS\' | translate }}</ion-title>\n          <ion-title *ngIf="agency == null">{{ \'YOUR_CAPTAINS\' | translate }}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n    <ion-buttons end class="btn-style" *ngIf="agency == null">\n      <button ion-button (click)="add()" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="auth-page-captain">\n\n  <div text-center *ngIf="captainsList.length == 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src="../../assets/img/sad.png" class="not-found-img">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <h3 class="not-found-text"> {{ \'EMPTY_LIST\' | translate }}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n  <ion-list style="padding-top: 15px;">\n\n\n    <ion-item class="item-background" *ngFor="let captain of captainsList">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="img-col" col-3>\n            <img class="circle-pic" *ngIf="!captain.image" src="../../assets/img/person.png" />\n            <img class="circle-pic" *ngIf="captain.image" [src]="[\'data:image/jpg;base64\',captain.image]" />\n          </ion-col>\n\n          <ion-col class="btn-col" col-9>\n\n            <div class="account-info info-div">\n              <p>\n                <strong text-wrap> {{captain.name}} </strong>\n              </p>\n\n              <p>\n                {{\'CODE\' | translate}} :\n                <strong text-wrap>{{captain.code}}</strong>\n              </p>\n\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col col-6>\n            <ion-buttons class="btn-style" style="width: 100%;padding: 0px;">\n              <button ion-button (click)="unAssingCaptain(captain)" style="width: 100%;padding: 0px;">\n                {{ \'UN_ASSIGN_CAPTAIN\' | translate }}\n              </button>\n            </ion-buttons>\n\n          </ion-col>\n          <ion-col col-6>\n            <ion-buttons class="btn-style" style="width: 100%; padding: 0px;">\n              <button ion-button (click)="assignDetails(captain)" style="width: 100%;padding: 0px;">\n                {{ \'VIEW_ASSIGN_DETAILS\' | translate }}\n              </button>\n            </ion-buttons>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="captainsList.length != 0">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      [loadingText]="moreData">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\agency-captains\agency-captains.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__["a" /* Principal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__["a" /* CaptainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__["a" /* CaptainService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */]) === "function" && _k || Object])
    ], AgencyCaptainsPage);
    return AgencyCaptainsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=agency-captains.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 415,
	"./af.js": 415,
	"./ar": 416,
	"./ar-dz": 417,
	"./ar-dz.js": 417,
	"./ar-kw": 418,
	"./ar-kw.js": 418,
	"./ar-ly": 419,
	"./ar-ly.js": 419,
	"./ar-ma": 420,
	"./ar-ma.js": 420,
	"./ar-sa": 421,
	"./ar-sa.js": 421,
	"./ar-tn": 422,
	"./ar-tn.js": 422,
	"./ar.js": 416,
	"./az": 423,
	"./az.js": 423,
	"./be": 424,
	"./be.js": 424,
	"./bg": 425,
	"./bg.js": 425,
	"./bm": 426,
	"./bm.js": 426,
	"./bn": 427,
	"./bn.js": 427,
	"./bo": 428,
	"./bo.js": 428,
	"./br": 429,
	"./br.js": 429,
	"./bs": 430,
	"./bs.js": 430,
	"./ca": 431,
	"./ca.js": 431,
	"./cs": 432,
	"./cs.js": 432,
	"./cv": 433,
	"./cv.js": 433,
	"./cy": 434,
	"./cy.js": 434,
	"./da": 435,
	"./da.js": 435,
	"./de": 436,
	"./de-at": 437,
	"./de-at.js": 437,
	"./de-ch": 438,
	"./de-ch.js": 438,
	"./de.js": 436,
	"./dv": 439,
	"./dv.js": 439,
	"./el": 440,
	"./el.js": 440,
	"./en-SG": 441,
	"./en-SG.js": 441,
	"./en-au": 442,
	"./en-au.js": 442,
	"./en-ca": 443,
	"./en-ca.js": 443,
	"./en-gb": 444,
	"./en-gb.js": 444,
	"./en-ie": 445,
	"./en-ie.js": 445,
	"./en-il": 446,
	"./en-il.js": 446,
	"./en-nz": 447,
	"./en-nz.js": 447,
	"./eo": 448,
	"./eo.js": 448,
	"./es": 449,
	"./es-do": 450,
	"./es-do.js": 450,
	"./es-us": 451,
	"./es-us.js": 451,
	"./es.js": 449,
	"./et": 452,
	"./et.js": 452,
	"./eu": 453,
	"./eu.js": 453,
	"./fa": 454,
	"./fa.js": 454,
	"./fi": 455,
	"./fi.js": 455,
	"./fo": 456,
	"./fo.js": 456,
	"./fr": 457,
	"./fr-ca": 458,
	"./fr-ca.js": 458,
	"./fr-ch": 459,
	"./fr-ch.js": 459,
	"./fr.js": 457,
	"./fy": 460,
	"./fy.js": 460,
	"./ga": 461,
	"./ga.js": 461,
	"./gd": 462,
	"./gd.js": 462,
	"./gl": 463,
	"./gl.js": 463,
	"./gom-latn": 464,
	"./gom-latn.js": 464,
	"./gu": 465,
	"./gu.js": 465,
	"./he": 466,
	"./he.js": 466,
	"./hi": 467,
	"./hi.js": 467,
	"./hr": 468,
	"./hr.js": 468,
	"./hu": 469,
	"./hu.js": 469,
	"./hy-am": 470,
	"./hy-am.js": 470,
	"./id": 471,
	"./id.js": 471,
	"./is": 472,
	"./is.js": 472,
	"./it": 473,
	"./it-ch": 474,
	"./it-ch.js": 474,
	"./it.js": 473,
	"./ja": 475,
	"./ja.js": 475,
	"./jv": 476,
	"./jv.js": 476,
	"./ka": 477,
	"./ka.js": 477,
	"./kk": 478,
	"./kk.js": 478,
	"./km": 479,
	"./km.js": 479,
	"./kn": 480,
	"./kn.js": 480,
	"./ko": 481,
	"./ko.js": 481,
	"./ku": 482,
	"./ku.js": 482,
	"./ky": 483,
	"./ky.js": 483,
	"./lb": 484,
	"./lb.js": 484,
	"./lo": 485,
	"./lo.js": 485,
	"./lt": 486,
	"./lt.js": 486,
	"./lv": 487,
	"./lv.js": 487,
	"./me": 488,
	"./me.js": 488,
	"./mi": 489,
	"./mi.js": 489,
	"./mk": 490,
	"./mk.js": 490,
	"./ml": 491,
	"./ml.js": 491,
	"./mn": 492,
	"./mn.js": 492,
	"./mr": 493,
	"./mr.js": 493,
	"./ms": 494,
	"./ms-my": 495,
	"./ms-my.js": 495,
	"./ms.js": 494,
	"./mt": 496,
	"./mt.js": 496,
	"./my": 497,
	"./my.js": 497,
	"./nb": 498,
	"./nb.js": 498,
	"./ne": 499,
	"./ne.js": 499,
	"./nl": 500,
	"./nl-be": 501,
	"./nl-be.js": 501,
	"./nl.js": 500,
	"./nn": 502,
	"./nn.js": 502,
	"./pa-in": 503,
	"./pa-in.js": 503,
	"./pl": 504,
	"./pl.js": 504,
	"./pt": 505,
	"./pt-br": 506,
	"./pt-br.js": 506,
	"./pt.js": 505,
	"./ro": 507,
	"./ro.js": 507,
	"./ru": 508,
	"./ru.js": 508,
	"./sd": 509,
	"./sd.js": 509,
	"./se": 510,
	"./se.js": 510,
	"./si": 511,
	"./si.js": 511,
	"./sk": 512,
	"./sk.js": 512,
	"./sl": 513,
	"./sl.js": 513,
	"./sq": 514,
	"./sq.js": 514,
	"./sr": 515,
	"./sr-cyrl": 516,
	"./sr-cyrl.js": 516,
	"./sr.js": 515,
	"./ss": 517,
	"./ss.js": 517,
	"./sv": 518,
	"./sv.js": 518,
	"./sw": 519,
	"./sw.js": 519,
	"./ta": 520,
	"./ta.js": 520,
	"./te": 521,
	"./te.js": 521,
	"./tet": 522,
	"./tet.js": 522,
	"./tg": 523,
	"./tg.js": 523,
	"./th": 524,
	"./th.js": 524,
	"./tl-ph": 525,
	"./tl-ph.js": 525,
	"./tlh": 526,
	"./tlh.js": 526,
	"./tr": 527,
	"./tr.js": 527,
	"./tzl": 528,
	"./tzl.js": 528,
	"./tzm": 529,
	"./tzm-latn": 530,
	"./tzm-latn.js": 530,
	"./tzm.js": 529,
	"./ug-cn": 531,
	"./ug-cn.js": 531,
	"./uk": 532,
	"./uk.js": 532,
	"./ur": 533,
	"./ur.js": 533,
	"./uz": 534,
	"./uz-latn": 535,
	"./uz-latn.js": 535,
	"./uz.js": 534,
	"./vi": 536,
	"./vi.js": 536,
	"./x-pseudo": 537,
	"./x-pseudo.js": 537,
	"./yo": 538,
	"./yo.js": 538,
	"./zh-cn": 539,
	"./zh-cn.js": 539,
	"./zh-hk": 540,
	"./zh-hk.js": 540,
	"./zh-tw": 541,
	"./zh-tw.js": 541
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 928;

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the AssignOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignOrderPage = /** @class */ (function () {
    function AssignOrderPage(navCtrl, navParams, platform, builder, captainService, loading, app, principal, toastCtrl, translateService, orderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.builder = builder;
        this.captainService = captainService;
        this.loading = loading;
        this.app = app;
        this.principal = principal;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.orderService = orderService;
        this.captainList = [];
        this.assingOrderSuccess = null;
        this.assignOrderError = null;
        this.language = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* MyApp */].direction;
        this.account = null;
        this.userType = '';
        this.order = this.navParams.get("item");
        this.translateService.get(['ASSIGN_ORDER_ERROR', 'ASSIGN_ORDER_SUCCESS', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.assignOrderError = values.ASSIGN_ORDER_ERROR;
            _this.assingOrderSuccess = values.ASSIGN_ORDER_SUCCESS;
            _this.pleaseWait = values.PLEASE_WAIT;
        });
        this.myForm = builder.group({
            //'userId':['', [Validators.required ]],
            'captainId': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.userType == 'Agency') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
            }
        });
        //this.getAllCaptains();
    }
    AssignOrderPage.prototype.ngOnInit = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            _this.account = account;
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_7__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                _this.account = account;
                _this.userType = 'Agency';
                _this.getAllCaptains();
            }
            else {
                _this.account = account;
                _this.userType = 'Admin';
                _this.getAllCaptains();
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    AssignOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignOrderPage');
    };
    AssignOrderPage.prototype.getAllCaptains = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.captainsPickListByAgencyId(this.account.id).subscribe(function (res) {
            console.log(res, "res");
            _this.captainList = res;
            load.dismiss();
        }, function (err) {
            console.log(err, "err");
            load.dismiss();
        });
    };
    AssignOrderPage.prototype.assignOrder = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.orderService.assign(this.myForm.get('captainId').value, this.order.id).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.assingOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            if (_this.userType == 'Admin') {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
            }
            else {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
            }
            //this.navCtrl.push(OrdersPage);
        }, function (err) {
            console.log(err);
            var displayError = _this.assignOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    AssignOrderPage.prototype.assignOrderToFreeCaptain = function () {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.orderService.assignToFreeCaptain(this.order.id).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: _this.assingOrderSuccess,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            load.dismiss();
            // this.navCtrl.push(OrdersPage);
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
        }, function (err) {
            console.log(err);
            var displayError = _this.assignOrderError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            load.dismiss();
        });
    };
    AssignOrderPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    AssignOrderPage.prototype.skip = function () {
        //this.navCtrl.push(OrdersPage);
        if (this.userType == 'Agency') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
        }
    };
    AssignOrderPage.prototype.back = function () {
        if (this.userType == 'Agency') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_orders_user_orders__["a" /* UserOrdersPage */]);
        }
    };
    AssignOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-assign-order',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\assign-order\assign-order.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1>\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title>{{ \'ASSIGN_CAPTAIN\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        {{ \'TLABATAC\' | translate }}\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating [style.transform-origin]="language == \'en\' ? \'left top\' : \'right top\'">\n          <ion-icon name="bicycle" item-start class="text-primary"></ion-icon>\n          {{ \'CAPTAIN\' | translate }}\n        </ion-label>\n        <ion-select formControlName="captainId" [lang]="language" [dir]="direction">\n          <ion-option *ngFor="let item of captainList" [selected]="item.name ==item.name" [value]="item.id" [dir]="direction" >{{item.name}}   {{ item.busy == true ? \'Busy\' : \'Free\' }} </ion-option>\n\n        </ion-select>\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'captainId\', \'required\')"> {{ \'REQURIED\' | translate }} </p>\n      \n    </form>\n\n      <div margin-top>\n        <button ion-button block color="dark" tappable (click)="assignOrder()" [disabled]  = "!myForm.valid" >\n          {{ \'ASSIGN_ORDER_BUTTON\' | translate }}\n        </button>\n      </div>\n      <!-- <div margin-top>\n        <button ion-button block color="dark" tappable (click)="assignOrderToFreeCaptain()"  >\n          {{ \'ASSIGN_ORDER_TO_FREE_BUTTON\' | translate }}\n        </button>\n      </div> -->\n\n      <div margin-top>\n        <button ion-button block color="dark" tappable (click)="skip()"  >\n          {{ \'SKIP\' | translate }}\n        </button>\n      </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\assign-order\assign-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_captain_service__["a" /* CaptainService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_principal_service__["a" /* Principal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_order_service__["a" /* OrderService */]])
    ], AssignOrderPage);
    return AssignOrderPage;
}());

//# sourceMappingURL=assign-order.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntityPage = /** @class */ (function () {
    function EntityPage(nav) {
        this.nav = nav;
        this.entities = [
        /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
        ];
    }
    EntityPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    EntityPage.prototype.ionViewWillLoad = function () {
        var page = location.hash.substring(location.hash.lastIndexOf('/') + 1);
        var urlParts = location.hash.split('/');
        page = page.charAt(0).toUpperCase() + page.substring(1) + 'Page';
        var destination;
        this.entities.forEach(function (entity) {
            if (entity.component === page) {
                destination = entity.component;
            }
        });
        if (destination) {
            this.nav.push(destination);
        }
        else if (urlParts.length === 5) {
            // convert from URL to page name: foo-detail to FooDetailPage
            var detailPage = this.urlToTitleCase(urlParts[3]) + 'Page';
            this.nav.push(detailPage, { id: urlParts[4] });
        }
    };
    EntityPage.prototype.urlToTitleCase = function (str) {
        return str.replace(/(-|^)([^-]?)/g, function (_, prep, letter) {
            return (prep && '') + letter.toUpperCase();
        });
    };
    EntityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-entity',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\entities\entity.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Entities\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let entity of entities" (click)="openPage(entity)">\n      <h2>{{entity.name}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\entities\entity.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], EntityPage);
    return EntityPage;
}());

//# sourceMappingURL=entity.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_orders_user_orders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersMapPage = /** @class */ (function () {
    function OrdersMapPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.order = null;
        this.language = __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */].language;
        this.direction = __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */].direction;
        this.order = this.navParams.get("item");
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__user_orders_user_orders__["a" /* UserOrdersPage */]);
        });
    }
    OrdersMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersMapPage');
        this.loadmap();
    };
    OrdersMapPage.prototype.loadmap = function () {
        var latLng = new google.maps.LatLng(Number.parseFloat(this.order.latitude), Number.parseFloat(this.order.longitude));
        var mapOptions = {
            center: latLng,
            zoom: 14
        };
        this.map = new google.maps.Map(this.elementRef.nativeElement, mapOptions);
        console.log('----------');
        var marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            title: this.order.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
    };
    OrdersMapPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__user_orders_user_orders__["a" /* UserOrdersPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], OrdersMapPage.prototype, "elementRef", void 0);
    OrdersMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders-map',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\orders-map\orders-map.html"*/'<!--\n  Generated template for the OrdersMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid style="width: 100%">\n          <ion-row>\n            <ion-col col-1>\n              <ion-buttons style="margin-block-start: 2px" class="btn-style">\n                <button ion-button (click)="back()">\n                  <ion-icon [name]="language != \'en\' ? \'arrow-round-forward\' : \'arrow-round-back\'"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col col-11  [style.margin-top] ="language == \'en\' ? \'5px\' : \'2px\'">\n                <ion-title>{{ \'ORDERS_ON_MAP\' | translate }}</ion-title>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <div #map id="map" class="map-style"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\orders-map\orders-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], OrdersMapPage);
    return OrdersMapPage;
}());

//# sourceMappingURL=orders-map.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_captain_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_component__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, formBuilder, principal, app, platform, captainService, loading, toastCtrl, accountService, alertCtrl, navParams, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.principal = principal;
        this.app = app;
        this.platform = platform;
        this.captainService = captainService;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.accountService = accountService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
        this.userType = '';
        this.pleaseWait = '';
        this.langKey = __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].language;
        this.doneMessage = '';
        this.cancelMessage = '';
        this.translate.get(['AUTO_ASSIGN_ERROR', 'AUTO_ASSIGN_SUCCESS',
            'AUTO_ASSIGN_CONFIRM_MESSAGE', 'AUTO_ASSIGN_CONFIRM_TITLE', 'WORKING_ERROR', 'WORKING_SUCCESS',
            'WORKING_CONFIRM_MESSAGE', 'WORKING_CONFIRM_TITLE', 'CHANGE_LANGUAGE_ERROR', 'CHANGE_LANGUAGE_SUCCESS',
            'CHANGE_LANGUAGE_MESSAGE', 'CHANGE_LANGUAGE_CONFIRM_TITLE', 'DONE', 'CANCEL', 'PLEASE_WAIT']).subscribe(function (values) {
            _this.changeAutoAssignError = values.AUTO_ASSIGN_ERROR;
            _this.changeAutoAssignSuccessString = values.AUTO_ASSIGN_SUCCESS;
            _this.confirmAutoAssignMessage = values.AUTO_ASSIGN_CONFIRM_MESSAGE;
            _this.confirmAutoAssignTitle = values.AUTO_ASSIGN_CONFIRM_TITLE;
            _this.changeWorkingError = values.WORKING_ERROR;
            _this.changeWorkingSuccessString = values.WORKING_SUCCESS;
            _this.confirmWorkingMessage = values.WORKING_CONFIRM_MESSAGE;
            _this.confirmWorkingTitle = values.WORKING_CONFIRM_TITLE;
            _this.changeChaneLanguageError = values.CHANGE_LANGUAGE_ERROR;
            _this.changeChaneLanguageSuccessString = values.CHANGE_LANGUAGE_SUCCESS;
            _this.confirmChaneLanguage = values.CHANGE_LANGUAGE_MESSAGE;
            _this.confirmChaneLanguageTitle = values.CHANGE_LANGUAGE_CONFIRM_TITLE;
            _this.pleaseWait = values.PLEASE_WAIT;
            _this.doneMessage = values.DONE;
            _this.cancelMessage = values.CANCEL;
        });
        this.myForm = formBuilder.group({
            'autoAssign': ['', []],
            'working': ['', []],
            'langKey': [this.langKey, []]
        });
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.ngOnInit = function () {
        this.validateUser(true);
    };
    SettingsPage.prototype.validateUser = function (flag) {
        var _this = this;
        console.log("++++++ 99999 -------");
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.principal.identity().then(function (account) {
            console.log(account);
            load.dismiss();
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["a" /* FirstRunPage */]);
            }
            else if (account.authorities[0] == 'ROLE_AGENCY') {
                console.log("555555555 ************** 555555555555555");
                _this.account = account;
                if (flag) {
                    _this.myForm.get("autoAssign").setValue(_this.account.autoAssign);
                }
                _this.userType = 'Agency';
            }
            else if (account.authorities[0] == 'ROLE_CAPTAIN') {
                _this.account = account;
                _this.userType = 'Captain';
                _this.getCaptain(_this.account.id);
            }
            else if (account.authorities[0] == 'ROLE_USER' && account.authorities.length == 1) {
                _this.account = account;
                _this.userType = 'User';
            }
            else {
                _this.account = account;
                _this.userType = 'Admin';
            }
        }).catch(function (err) {
            load.dismiss();
        });
    };
    SettingsPage.prototype.getCaptain = function (captainId) {
        var _this = this;
        var load = this.loading.create({
            content: this.pleaseWait
        });
        load.present();
        this.captainService.getByUserId(captainId).subscribe(function (data) {
            _this.captain = data;
            load.dismiss();
            _this.myForm.get("working").setValue(!_this.captain.working);
        }, function (err) {
            console.log(err, 'errror');
            load.dismiss();
        });
    };
    SettingsPage.prototype.changeAssign = function () {
        var _this = this;
        console.log("**************");
        console.log(this.myForm.get('autoAssign').value);
        var alert = this.alertCtrl.create({
            title: this.confirmAutoAssignTitle,
            message: this.confirmAutoAssignMessage,
            buttons: [{
                    text: this.doneMessage,
                    handler: function () {
                        console.log("----------------------");
                        _this.updateAutoAssign();
                    }
                }, {
                    text: this.cancelMessage,
                    handler: function () {
                        //nothing
                    }
                }]
        });
        alert.present();
    };
    SettingsPage.prototype.changeWorking = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.confirmWorkingTitle,
            message: this.confirmWorkingMessage,
            buttons: [{
                    text: this.doneMessage,
                    handler: function () {
                        console.log("----------------------");
                        _this.updateWorking();
                    }
                }, {
                    text: this.cancelMessage,
                    handler: function () {
                        //nothing
                    }
                }]
        });
        alert.present();
    };
    SettingsPage.prototype.updateWorking = function () {
        var _this = this;
        var obj = {
            captainId: this.captain.id,
            working: !this.myForm.get('working').value
        };
        this.captainService.updateWorking(obj).subscribe(function (res) {
            console.log(res);
            // var id = res;
            console.log("00000000000000000000000000");
            _this.captain.working = obj.working;
            // this.validateUser(false);
            var toast = _this.toastCtrl.create({
                message: _this.changeWorkingSuccessString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }, function (err) {
            // Unable to sign up
            var displayError = _this.changeWorkingError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SettingsPage.prototype.updateAutoAssign = function () {
        var _this = this;
        console.log("****************          ssssssssssssssssss");
        var obj = {
            userId: this.account.id,
            autoAssign: this.myForm.get('autoAssign').value
        };
        this.accountService.updateAutoAssign(obj).subscribe(function (res) {
            console.log(res);
            // var id = res;
            console.log("00000000000000000000000000");
            _this.account.autoAssign = obj.autoAssign;
            // this.validateUser(false);
            var toast = _this.toastCtrl.create({
                message: _this.changeAutoAssignSuccessString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }, function (err) {
            // Unable to sign up
            var displayError = _this.changeAutoAssignError;
            var toast = _this.toastCtrl.create({
                message: displayError,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SettingsPage.prototype.changeLanguage = function () {
        var _this = this;
        if (this.langKey != __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].language) {
            var alert_1 = this.alertCtrl.create({
                title: this.confirmChaneLanguageTitle,
                message: this.confirmChaneLanguage,
                buttons: [{
                        text: this.doneMessage,
                        handler: function () {
                            console.log("----------------------");
                            _this.updateLanguage();
                        }
                    }, {
                        text: this.cancelMessage,
                        handler: function () {
                            //nothing
                        }
                    }]
            });
            alert_1.present();
        }
    };
    SettingsPage.prototype.updateLanguage = function () {
        var _this = this;
        console.log(this.myForm.get('langKey').value, this.langKey);
        if (this.langKey != __WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */].language) {
            var obj = {
                id: this.account.id,
                language: this.langKey
            };
            this.accountService.updateLanguage(obj).subscribe(function (res) {
                console.log(res);
                // var id = res;
                console.log("00000000000000000000000000");
                var toast = _this.toastCtrl.create({
                    message: _this.changeChaneLanguageSuccessString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.app.getRootNavs()[0].setRoot(SettingsPage_1);
                window.location.reload();
                // this.validateUser(false);
            }, function (err) {
                // Unable to sign up
                var displayError = _this.changeChaneLanguageError;
                var toast = _this.toastCtrl.create({
                    message: displayError,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'SETTING\'| translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="auth-page">\n\n  <!-- <form [formGroup]="form" *ngIf="settingsReady">\n    <ion-list *ngIf="page == \'main\'">\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION1\' | translate }}</ion-label>\n        <ion-toggle formControlName="option1"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION2\' | translate }}</ion-label>\n        <ion-input formControlName="option2"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION3\' | translate }}</ion-label>\n        <ion-select formControlName="option3">\n          <ion-option value="1" checked="true">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n        {{ \'SETTINGS_PROFILE_BUTTON\' | translate }}\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="page == \'profile\'">\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION4\' | translate }}</ion-label>\n        <ion-input formControlName="option4"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form> -->\n\n  <form [formGroup]="myForm" class="list-form" style="width: 100%">\n\n    <ion-item *ngIf="userType == \'Agency\'">\n      <ion-label text-wrap>{{\'AUTO_ASSIGN_MESSAGE1\' | translate}}\n       {{\'AUTO_ASSIGN_MESSAGE2\' | translate}} </ion-label>\n      <ion-toggle formControlName="autoAssign" (ionChange)="changeAssign()"></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf="userType == \'Captain\'">\n      <ion-label text-wrap>{{\'WORKING_MESSAGE1\' | translate}} </ion-label>\n      <ion-toggle formControlName="working" (ionChange)="changeWorking()"></ion-toggle>\n    </ion-item>\n\n    <ion-list radio-group style="background-color: #ffffff" (ionChange)="changeLanguage()" formControlName="langKey" [(ngModel)]="langKey">\n\n      <ion-list-header>\n          {{\'LANGUAGE\' | translate}}\n      </ion-list-header>\n\n      <ion-grid style="padding-top: 0px">\n        <ion-row>\n          <ion-col col-6>\n            <ion-item text-center>\n              <ion-label>{{\'ENGLISH\' | translate}}</ion-label>\n              <ion-radio value="en"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item text-center>\n              <ion-label>{{\'ARABIC\' | translate}}</ion-label>\n              <ion-radio value="ar"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n    </ion-list>\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_principal_service__["a" /* Principal */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_captain_service__["a" /* CaptainService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_principal_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_login_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__captains_captains__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__captain_orders_captain_orders__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agencies_agencies__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, principal, app, loginService) {
        this.navCtrl = navCtrl;
        this.principal = principal;
        this.app = app;
        this.loginService = loginService;
        this.userType = 'admin';
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            console.log(account);
            if (account === null) {
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* FirstRunPage */]);
            }
            else {
                _this.account = account;
                console.log(_this.account, '555555555555');
                if (account.authorities[0] === 'ROLE_CAPTAIN') {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__captain_orders_captain_orders__["a" /* CaptainOrdersPage */]);
                }
                else if (account.authorities[0] === 'ROLE_AGENCY') {
                    _this.userType = 'agency';
                }
            }
        });
    };
    HomePage.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomePage.prototype.logout = function () {
        this.loginService.logout();
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* FirstRunPage */]);
    };
    HomePage.prototype.openCaptains = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__captains_captains__["a" /* CaptainsPage */]);
    };
    HomePage.prototype.openCustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__orders_orders__["a" /* OrdersPage */]);
    };
    HomePage.prototype.openAgency = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__agencies_agencies__["a" /* AgenciesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mostafa\Desktop\project\frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Welcome, {{account?.firstName}}!\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()" id="logout">\n        Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center class="auth-page">\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div margin-top>\n          <button ion-button round color="dark" tappable (click)="openCaptains()">\n            {{ \'CAPTAIN\' | translate }}\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf = "userType == \'admin\'">\n      <ion-col>\n        <div margin-top>\n          <button ion-button round color="dark" tappable (click)="save()">\n            {{ \'ONLINE_SHIPPING\' | translate }}\n          </button>\n        </div>\n\n\n      </ion-col>\n      <ion-col>\n        <div margin-top>\n          <button ion-button round color="dark" tappable (click)="save()">\n            {{ \'PARTNER\' | translate }}\n          </button>\n        </div>\n\n\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="userType == \'agency\'">\n      <ion-col>\n        <div margin-top>\n          <button ion-button round color="dark" tappable (click)="openCustomer()">\n            Orders\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  \n  <ion-row *ngIf="userType == \'admin\'">\n      <ion-col>\n        <div margin-top>\n          <button ion-button round color="dark" tappable (click)="openAgency()">\n            Agency\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mostafa\Desktop\project\frontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_principal_service__["a" /* Principal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login_service__["a" /* LoginService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(localStorage, sessionStorage) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                return event;
            }
        });
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["b" /* SessionStorageService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth-interceptor.js.map

/***/ })

},[615]);
//# sourceMappingURL=main.js.map