(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/landonmote/Projects/pulp-fiction-dash/client/src/main.ts */"zUnb");


/***/ }),

/***/ "1GhG":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.ts ***!
  \*************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [[1, "overview-container"], [1, "overview-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Today on Offprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.overview-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.overview-container[_ngcontent-%COMP%]   div.overview-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.overview-container[_ngcontent-%COMP%]   div.overview-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.overview-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFHUSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRE5BO0VBT1kscUJBQUE7RUFDQSxnQkFBQTtBQ0VaO0FEVkE7RUFhUSxhQUFBO0VBQ0EseUNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5vdmVydmlldy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpdi5vdmVydmlldy1oZWFkZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG4gICAgfVxufSIsImRpdi5vdmVydmlldy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5vdmVydmlldy1jb250YWluZXIgZGl2Lm92ZXJ2aWV3LWhlYWRlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmRpdi5vdmVydmlldy1jb250YWluZXIgZGl2Lm92ZXJ2aWV3LWhlYWRlciBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmRpdi5vdmVydmlldy1jb250YWluZXIgaHIuaGVhZGVyLWRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "25YW":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthGuard {
    canActivate(route, state) {
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "72Qd":
/*!**************************************!*\
  !*** ./src/app/pages/users/index.ts ***!
  \**************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ "Ag98");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_component__WEBPACK_IMPORTED_MODULE_0__["UsersComponent"]; });




/***/ }),

/***/ "7of8":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
























class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"]
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"]
                ],
                exports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "7yAP":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 12, vars: 0, consts: [[1, "news-container"], [1, "news-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "News Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.news-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.news-container[_ngcontent-%COMP%]   div.news-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.news-container[_ngcontent-%COMP%]   div.news-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.news-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFHUSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRE5BO0VBT1kscUJBQUE7RUFDQSxnQkFBQTtBQ0VaO0FEVkE7RUFhUSxhQUFBO0VBQ0EseUNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5uZXdzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGl2Lm5ld3MtaGVhZGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoci5oZWFkZXItZGl2aWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zaXRlLWJvcmRlcnMpO1xuICAgIH1cbn0iLCJkaXYubmV3cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5uZXdzLWNvbnRhaW5lciBkaXYubmV3cy1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5kaXYubmV3cy1jb250YWluZXIgZGl2Lm5ld3MtaGVhZGVyIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZGl2Lm5ld3MtY29udGFpbmVyIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");







class AuthService {
    constructor(http, router, snackBar) {
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.url = `/api/auth`;
        this.currUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currUserSubject.asObservable();
    }
    /**
     * Gets the current user value from the user subject.
     */
    get currUserValue() {
        return this.currUserSubject.value;
    }
    /* Authorization */
    /**
     * Logs a user in given the provided credentials.
     *
     * @param credentials A user's login credentials
     */
    login(credentials) {
        return this.http.post(`${this.url}/login`, credentials, { withCredentials: true, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            localStorage.setItem('currentUser', JSON.stringify(user.body.data));
            this.currUserSubject.next(user.body.data);
            this.router.navigate(['/home']).then(() => {
                location.reload();
            });
            return user.body.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            this.snackBar.open(err.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 12, vars: 0, consts: [[1, "users-container"], [1, "users-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.users-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.users-container[_ngcontent-%COMP%]   div.users-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.users-container[_ngcontent-%COMP%]   div.users-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.users-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBREZBO0VBR1EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QUROQTtFQU9ZLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRFZBO0VBYVEsYUFBQTtFQUNBLHlDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi51c2Vycy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpdi51c2Vycy1oZWFkZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG4gICAgfVxufSIsImRpdi51c2Vycy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi51c2Vycy1jb250YWluZXIgZGl2LnVzZXJzLWhlYWRlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmRpdi51c2Vycy1jb250YWluZXIgZGl2LnVzZXJzLWhlYWRlciBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmRpdi51c2Vycy1jb250YWluZXIgaHIuaGVhZGVyLWRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bsbq":
/*!**********************************************!*\
  !*** ./src/app/pages/docs/docs.component.ts ***!
  \**********************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DocsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(); };
DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["app-docs"]], decls: 12, vars: 0, consts: [[1, "docs-container"], [1, "docs-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documents & Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.docs-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.docs-container[_ngcontent-%COMP%]   div.docs-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.docs-container[_ngcontent-%COMP%]   div.docs-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.docs-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL2RvY3MvZG9jcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZG9jcy9kb2NzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFHUSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRE5BO0VBT1kscUJBQUE7RUFDQSxnQkFBQTtBQ0VaO0FEVkE7RUFhUSxhQUFBO0VBQ0EseUNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3MvZG9jcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5kb2NzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGl2LmRvY3MtaGVhZGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoci5oZWFkZXItZGl2aWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zaXRlLWJvcmRlcnMpO1xuICAgIH1cbn0iLCJkaXYuZG9jcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5kb2NzLWNvbnRhaW5lciBkaXYuZG9jcy1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5kaXYuZG9jcy1jb250YWluZXIgZGl2LmRvY3MtaGVhZGVyIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZGl2LmRvY3MtY29udGFpbmVyIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-docs',
                templateUrl: './docs.component.html',
                styleUrls: ['./docs.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FP9Q":
/*!************************************************!*\
  !*** ./src/app/pages/queue/queue.component.ts ***!
  \************************************************/
/*! exports provided: QueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function() { return QueueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QueueComponent {
    constructor() { }
    ngOnInit() {
    }
}
QueueComponent.ɵfac = function QueueComponent_Factory(t) { return new (t || QueueComponent)(); };
QueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QueueComponent, selectors: [["app-queue"]], decls: 12, vars: 0, consts: [[1, "queue-container"], [1, "queue-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function QueueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Content Approval Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.queue-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.queue-container[_ngcontent-%COMP%]   div.queue-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.queue-container[_ngcontent-%COMP%]   div.queue-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.queue-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL3F1ZXVlL3F1ZXVlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9xdWV1ZS9xdWV1ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBREZBO0VBR1EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QUROQTtFQU9ZLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRFZBO0VBYVEsYUFBQTtFQUNBLHlDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWV1ZS9xdWV1ZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5xdWV1ZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpdi5xdWV1ZS1oZWFkZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG4gICAgfVxufSIsImRpdi5xdWV1ZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5xdWV1ZS1jb250YWluZXIgZGl2LnF1ZXVlLWhlYWRlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmRpdi5xdWV1ZS1jb250YWluZXIgZGl2LnF1ZXVlLWhlYWRlciBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmRpdi5xdWV1ZS1jb250YWluZXIgaHIuaGVhZGVyLWRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-queue',
                templateUrl: './queue.component.html',
                styleUrls: ['./queue.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MbfK":
/*!****************************************!*\
  !*** ./src/app/pages/reports/index.ts ***!
  \****************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.component */ "qzPY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return _reports_component__WEBPACK_IMPORTED_MODULE_0__["ReportsComponent"]; });




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth */ "ly9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-feather */ "8mtn");













function AppComponent_ng_container_0_mat_progress_bar_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 13);
} }
function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_ng_container_0_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remember me for thirty days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_ng_container_0_mat_progress_bar_19_Template, 1, 0, "mat-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingLogin);
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/queue"]; };
const _c2 = function () { return ["/news"]; };
const _c3 = function () { return ["/docs"]; };
const _c4 = function () { return ["/reports"]; };
const _c5 = function () { return ["/users"]; };
const _c6 = function () { return ["/audit"]; };
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i-feather", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i-feather", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Audit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00A9 2020 Offprint Studios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.currentUser.profile.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'client';
        this.loadingLogin = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.authService.currentUser.subscribe(x => {
            this.currentUser = x;
        });
    }
    get loginFields() { return this.loginForm.controls; }
    submitLogin() {
        this.loadingLogin = true;
        const credentials = {
            email: this.loginFields.email.value,
            password: this.loginFields.password.value
        };
        this.authService.login(credentials).subscribe(() => {
            this.loadingLogin = false;
            this.loginForm.reset();
        }, () => {
            this.loadingLogin = false;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["isUser", ""], [1, "login-container"], [1, "login-box"], [1, "login-header"], ["src", "assets/icons/dashlogo.png"], [1, "login-body"], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "email", "placeholder", "someone@offprint.net"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Super Secret"], ["formControlName", "rememberMe"], ["type", "submit", "matRipple", "", 1, "button-primary"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"], [1, "main-page"], [1, "nav"], [1, "nav-box"], [1, "user-menu-nav"], [1, "user-menu-avatar", 3, "src"], [1, "user-menu-dropdown"], [1, "menu-icon"], [1, "stat-counter"], [1, "site-logo"], [1, "search-menu"], ["matRipple", "", 1, "search"], [1, "nav-items"], ["matRipple", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [1, "link-icon"], ["name", "home"], ["matRipple", "", "routerLinkActive", "router-link-active", 1, "inner-left", 3, "routerLink"], ["name", "list"], ["name", "hash"], ["name", "briefcase"], ["name", "alert-triangle"], ["name", "users"], ["name", "clipboard"], [1, "main-stage"], [1, "container"], [1, "footer"], [1, "footer-info"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 20, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 58, 15, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], angular_feather__WEBPACK_IMPORTED_MODULE_10__["FeatherComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], styles: ["div.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: auto;\n  border: 1px solid var(--site-borders);\n  box-shadow: var(--site-dropshadow);\n  border-radius: 4px;\n  background: var(--site-accent);\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%]   div.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%]   div.login-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%]   div.login-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%]   div.login-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%]   div.login-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ndiv.login-container[_ngcontent-%COMP%]   div.login-box[_ngcontent-%COMP%]   div.login-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  color: whitesmoke;\n  border: 1px solid whitesmoke;\n}\ndiv.main-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  \n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto 0 auto;\n  box-sizing: border-box;\n  background-color: var(--site-accent);\n  color: whitesmoke;\n  border-bottom: 1px solid var(--site-borders);\n  box-shadow: var(--site-dropshadow);\n  z-index: 5;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 80%;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   img.user-menu-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 50px;\n  max-height: 50px;\n  object-fit: cover;\n  border: 1px solid whitesmoke;\n  border-radius: 50%;\n  font-size: 0;\n  vertical-align: middle;\n  z-index: 15;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   div.user-menu-dropdown[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  display: inline;\n  position: relative;\n  padding: 5px;\n  top: 0.2rem;\n  left: -0.5rem;\n  border-top: 1px solid whitesmoke;\n  border-bottom: 1px solid whitesmoke;\n  border-right: 1px solid whitesmoke;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  z-index: 14;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   div.user-menu-dropdown[_ngcontent-%COMP%]:hover {\n  background-color: var(--site-accent-hover);\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   div.user-menu-dropdown[_ngcontent-%COMP%]   a.menu-icon[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  cursor: pointer;\n  margin-bottom: 0;\n  width: 100%;\n  height: 100%;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   div.user-menu-dropdown[_ngcontent-%COMP%]   a.menu-icon[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   div.user-menu-dropdown[_ngcontent-%COMP%]   a.menu-icon[_ngcontent-%COMP%]   span.stat-counter[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 0.5rem;\n  font-size: 18px;\n  font-weight: 600;\n  font-variant: small-caps;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   button.login[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  background-color: var(--site-accent);\n  color: whitesmoke;\n  border: 1px solid whitesmoke;\n  box-shadow: none;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.user-menu-nav[_ngcontent-%COMP%]   button.login[_ngcontent-%COMP%]:hover {\n  background-color: var(--site-accent-hover);\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.site-logo[_ngcontent-%COMP%] {\n  position: relative;\n  vertical-align: middle;\n  text-align: center;\n  flex: 1;\n  font-size: 0;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.search-menu[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.search-menu[_ngcontent-%COMP%]   button.search[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  background-color: var(--site-accent);\n  color: whitesmoke;\n  border: 1px solid whitesmoke;\n  box-shadow: none;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.nav-box[_ngcontent-%COMP%]   div.search-menu[_ngcontent-%COMP%]   button.search[_ngcontent-%COMP%]:hover {\n  background-color: var(--site-accent-hover);\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 2rem auto;\n  padding-top: 1.5rem;\n  border-bottom: 1px solid var(--site-borders);\n}\n@media (max-width: 1150px) {\n  div.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-self: center;\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%]   .mat-ripple[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  color: var(--site-text-color);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  font-size: 20px;\n  padding: 5px 10px;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n  background-color: var(--site-accent);\n  transition: 0.25s;\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%] {\n  background-color: var(--site-accent);\n  color: whitesmoke;\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.link-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n}\ndiv.main-page[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.nav-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.link-icon[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%] {\n  position: relative;\n  height: 20px;\n  width: 20px;\n  top: 0.25rem;\n  stroke-width: 1;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.main-stage[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 95%;\n  margin: 0 auto;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.footer[_ngcontent-%COMP%] {\n  width: 90%;\n  border-top: 1px solid var(--site-borders);\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center !important;\n  margin: 0 auto;\n}\ndiv.main-page[_ngcontent-%COMP%]   div.footer[_ngcontent-%COMP%]   div.footer-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjtBREhBO0VBS1EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQ1I7QURmQTtFQWlCWSxrQkFBQTtBQ0NaO0FEbEJBO0VBbUJnQixnQkFBQTtFQUNBLGlCQUFBO0FDRWhCO0FEdEJBO0VBdUJnQixpQkFBQTtBQ0VoQjtBRHpCQTtFQTRCWSxrQkFBQTtBQ0FaO0FENUJBO0VBOEJnQixnQkFBQTtBQ0NoQjtBRC9CQTtFQWlDZ0IsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQ2hCO0FES0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQ0hGLFdBQVc7QUFDYjtBREZBO0VBT1EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRlI7QURkQTtFQW9CZ0IsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0hoQjtBRHRCQTtFQTRCb0Isc0JBQUE7QUNIcEI7QUR6QkE7RUErQndCLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0h4QjtBRHBDQTtFQTBDd0IsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0h4QjtBREt3QjtFQUNJLDBDQUFBO0FDSDVCO0FEckRBO0VBNEQ0QixpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSjVCO0FETTRCO0VBQ0ksaUJBQUE7QUNKaEM7QUQvREE7RUF1RWdDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0xoQztBRHRFQTtFQWlGd0IsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ1J4QjtBRFV3QjtFQUNJLDBDQUFBO0FDUjVCO0FEaEZBO0VBOEZvQixrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ1hwQjtBRHZGQTtFQW9Hd0IsZ0JBQUE7RUFDQSxpQkFBQTtBQ1Z4QjtBRDNGQTtFQTBHb0Isc0JBQUE7QUNacEI7QUQ5RkE7RUE4R3dCLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNieEI7QURld0I7RUFDSSwwQ0FBQTtBQ2I1QjtBRHhHQTtFQThIUSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDbkJSO0FEcUJRO0VBQUE7SUFDSSxjQUFBO0VDbEJWO0FBQ0Y7QURuSEE7RUF3SVksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ2xCWjtBRHpIQTtFQThJZ0IsbUJBQUE7QUNsQmhCO0FENUhBO0VBa0pnQiwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ25CaEI7QURxQmdCO0VBQ0ksaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDbkJwQjtBRHFCZ0I7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0FDbkJwQjtBRGxKQTtFQXlLb0IscUJBQUE7RUFDQSxrQkFBQTtBQ3BCcEI7QUR0SkE7RUE0S3dCLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ25CeEI7QUQ3SkE7RUF3TFEsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDeEJSO0FEbEtBO0VBK0xRLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUMxQlI7QUQxS0E7RUF1TVksa0JBQUE7QUMxQloiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXYubG9naW4tYm94IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zaXRlLWJvcmRlcnMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaXRlLWRyb3BzaGFkb3cpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNpdGUtYWNjZW50KTtcblxuICAgICAgICBkaXYubG9naW4taGVhZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5sb2dpbi1ib2R5IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZGl2Lm1haW4tcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpdi5uYXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaXRlLWFjY2VudCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2l0ZS1kcm9wc2hhZG93KTtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgZGl2Lm5hdi1ib3gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICBcbiAgICAgICAgICAgICAgICBkaXYudXNlci1tZW51LW5hdiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1nLnVzZXItbWVudS1hdmF0YXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXYudXNlci1tZW51LWRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQtaG92ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5tZW51LWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3RhdC1jb3VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ubG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYWNjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYWNjZW50LWhvdmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgIGRpdi5zaXRlLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgZGl2LnNlYXJjaC1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2VhcmNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQtaG92ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIG5hdiB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG4gICAgICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBkaXYubmF2LWl0ZW1zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgICAgICAgLm1hdC1yaXBwbGUge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaXRlLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICBcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYWNjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgICBzcGFuLmxpbmstaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBpLWZlYXRoZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYubWFpbi1zdGFnZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAgIFxuICAgIC8qIEZvb3RlciAqL1xuICAgIGRpdi5mb290ZXIge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgZGl2LmZvb3Rlci1pbmZvIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJkaXYubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdi5sb2dpbi1jb250YWluZXIgZGl2LmxvZ2luLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2l0ZS1kcm9wc2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaXRlLWFjY2VudCk7XG59XG5kaXYubG9naW4tY29udGFpbmVyIGRpdi5sb2dpbi1ib3ggZGl2LmxvZ2luLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi5sb2dpbi1jb250YWluZXIgZGl2LmxvZ2luLWJveCBkaXYubG9naW4taGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuZGl2LmxvZ2luLWNvbnRhaW5lciBkaXYubG9naW4tYm94IGRpdi5sb2dpbi1oZWFkZXIgaDQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbmRpdi5sb2dpbi1jb250YWluZXIgZGl2LmxvZ2luLWJveCBkaXYubG9naW4tYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi5sb2dpbi1jb250YWluZXIgZGl2LmxvZ2luLWJveCBkaXYubG9naW4tYm9keSBmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmRpdi5sb2dpbi1jb250YWluZXIgZGl2LmxvZ2luLWJveCBkaXYubG9naW4tYm9keSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cbmRpdi5tYWluLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGb290ZXIgKi9cbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYWNjZW50KTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zaXRlLWJvcmRlcnMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaXRlLWRyb3BzaGFkb3cpO1xuICB6LWluZGV4OiA1O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnVzZXItbWVudS1uYXYge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYudXNlci1tZW51LW5hdiBpbWcudXNlci1tZW51LWF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE1O1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYudXNlci1tZW51LW5hdiBkaXYudXNlci1tZW51LWRyb3Bkb3duIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogMC4ycmVtO1xuICBsZWZ0OiAtMC41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIHotaW5kZXg6IDE0O1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYudXNlci1tZW51LW5hdiBkaXYudXNlci1tZW51LWRyb3Bkb3duOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQtaG92ZXIpO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYudXNlci1tZW51LW5hdiBkaXYudXNlci1tZW51LWRyb3Bkb3duIGEubWVudS1pY29uIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnVzZXItbWVudS1uYXYgZGl2LnVzZXItbWVudS1kcm9wZG93biBhLm1lbnUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYudXNlci1tZW51LW5hdiBkaXYudXNlci1tZW51LWRyb3Bkb3duIGEubWVudS1pY29uIHNwYW4uc3RhdC1jb3VudGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnVzZXItbWVudS1uYXYgYnV0dG9uLmxvZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnVzZXItbWVudS1uYXYgYnV0dG9uLmxvZ2luOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2l0ZS1hY2NlbnQtaG92ZXIpO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYuc2l0ZS1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnNpdGUtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnNlYXJjaC1tZW51IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmRpdi5tYWluLXBhZ2UgZGl2Lm5hdiBoZWFkZXIgZGl2Lm5hdi1ib3ggZGl2LnNlYXJjaC1tZW51IGJ1dHRvbi5zZWFyY2gge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaXRlLWFjY2VudCk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubmF2IGhlYWRlciBkaXYubmF2LWJveCBkaXYuc2VhcmNoLW1lbnUgYnV0dG9uLnNlYXJjaDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYWNjZW50LWhvdmVyKTtcbn1cbmRpdi5tYWluLXBhZ2UgbmF2IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgZGl2Lm1haW4tcGFnZSBuYXYge1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG59XG5kaXYubWFpbi1wYWdlIG5hdiBkaXYubmF2LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuZGl2Lm1haW4tcGFnZSBuYXYgZGl2Lm5hdi1pdGVtcyAubWF0LXJpcHBsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5kaXYubWFpbi1wYWdlIG5hdiBkaXYubmF2LWl0ZW1zIGEge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1zaXRlLXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbmRpdi5tYWluLXBhZ2UgbmF2IGRpdi5uYXYtaXRlbXMgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaXRlLWFjY2VudCk7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuZGl2Lm1haW4tcGFnZSBuYXYgZGl2Lm5hdi1pdGVtcyBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYWNjZW50KTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5kaXYubWFpbi1wYWdlIG5hdiBkaXYubmF2LWl0ZW1zIGEgc3Bhbi5saW5rLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbmRpdi5tYWluLXBhZ2UgbmF2IGRpdi5uYXYtaXRlbXMgYSBzcGFuLmxpbmstaWNvbiBpLWZlYXRoZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHRvcDogMC4yNXJlbTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYubWFpbi1zdGFnZSB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYuZm9vdGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuZGl2Lm1haW4tcGFnZSBkaXYuZm9vdGVyIGRpdi5mb290ZXItaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _services_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "UQwh":
/*!************************************************!*\
  !*** ./src/app/pages/audit/audit.component.ts ***!
  \************************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return AuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuditComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuditComponent.ɵfac = function AuditComponent_Factory(t) { return new (t || AuditComponent)(); };
AuditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuditComponent, selectors: [["app-audit"]], decls: 12, vars: 0, consts: [[1, "audit-container"], [1, "audit-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function AuditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Audit Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.audit-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.audit-container[_ngcontent-%COMP%]   div.audit-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.audit-container[_ngcontent-%COMP%]   div.audit-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.audit-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL2F1ZGl0L2F1ZGl0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9hdWRpdC9hdWRpdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBREZBO0VBR1EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QUROQTtFQU9ZLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRFZBO0VBYVEsYUFBQTtFQUNBLHlDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdWRpdC9hdWRpdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5hdWRpdC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpdi5hdWRpdC1oZWFkZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG4gICAgfVxufSIsImRpdi5hdWRpdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5hdWRpdC1jb250YWluZXIgZGl2LmF1ZGl0LWhlYWRlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmRpdi5hdWRpdC1jb250YWluZXIgZGl2LmF1ZGl0LWhlYWRlciBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmRpdi5hdWRpdC1jb250YWluZXIgaHIuaGVhZGVyLWRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2l0ZS1ib3JkZXJzKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audit',
                templateUrl: './audit.component.html',
                styleUrls: ['./audit.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X6oM":
/*!**************************************!*\
  !*** ./src/app/pages/queue/index.ts ***!
  \**************************************/
/*! exports provided: QueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _queue_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue.component */ "FP9Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function() { return _queue_component__WEBPACK_IMPORTED_MODULE_0__["QueueComponent"]; });




/***/ }),

/***/ "YtL+":
/*!***************************************************!*\
  !*** ./src/app/services/auth/auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "9ans");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        let currentUser = this.authService.currUserValue;
        if (currentUser && currentUser.token) {
            console.log(req);
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/material/material.module */ "7of8");
/* harmony import */ var _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/icons/icons.module */ "pxOu");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth */ "ly9n");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home */ "1GhG");
/* harmony import */ var _pages_queue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/queue */ "X6oM");
/* harmony import */ var _pages_news__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/news */ "uBbC");
/* harmony import */ var _pages_docs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/docs */ "gBC0");
/* harmony import */ var _pages_reports__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/reports */ "MbfK");
/* harmony import */ var _pages_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/users */ "72Qd");
/* harmony import */ var _pages_audit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/audit */ "bGt0");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true },
        { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2500 } }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _pages_queue__WEBPACK_IMPORTED_MODULE_12__["QueueComponent"], _pages_news__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"], _pages_docs__WEBPACK_IMPORTED_MODULE_14__["DocsComponent"],
        _pages_reports__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"], _pages_users__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"], _pages_audit__WEBPACK_IMPORTED_MODULE_17__["AuditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _pages_queue__WEBPACK_IMPORTED_MODULE_12__["QueueComponent"], _pages_news__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"], _pages_docs__WEBPACK_IMPORTED_MODULE_14__["DocsComponent"],
                    _pages_reports__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"], _pages_users__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"], _pages_audit__WEBPACK_IMPORTED_MODULE_17__["AuditComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true },
                    { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2500 } }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bGt0":
/*!**************************************!*\
  !*** ./src/app/pages/audit/index.ts ***!
  \**************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audit.component */ "UQwh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return _audit_component__WEBPACK_IMPORTED_MODULE_0__["AuditComponent"]; });




/***/ }),

/***/ "gBC0":
/*!*************************************!*\
  !*** ./src/app/pages/docs/index.ts ***!
  \*************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.component */ "Bsbq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return _docs_component__WEBPACK_IMPORTED_MODULE_0__["DocsComponent"]; });




/***/ }),

/***/ "ly9n":
/*!****************************************!*\
  !*** ./src/app/services/auth/index.ts ***!
  \****************************************/
/*! exports provided: AuthService, AuthGuard, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "9ans");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "25YW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.interceptor */ "YtL+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"]; });






/***/ }),

/***/ "pxOu":
/*!***********************************************!*\
  !*** ./src/app/modules/icons/icons.module.ts ***!
  \***********************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ "8mtn");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather/icons */ "q7zL");






const icons = {
    Rss: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Rss"], BookOpen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["BookOpen"], Archive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Archive"], Book: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Book"], Coffee: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Coffee"], Inbox: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Inbox"], Settings: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Settings"],
    Feather: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Feather"], Plus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Plus"], Edit3: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Edit3"], Trash2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Trash2"], Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Lock"], Unlock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Unlock"], CheckSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["CheckSquare"],
    XSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["XSquare"], Type: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Type"], DownloadCloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["DownloadCloud"], Upload: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Upload"], Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Flag"], Clock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Clock"], Bold: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Bold"],
    Italic: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Italic"], EyeOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["EyeOff"], List: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["List"], Minus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Minus"], Code: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Code"], ThumbsDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ThumbsDown"], ThumbsUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ThumbsUp"],
    FolderPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["FolderPlus"], PlusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircle"], CheckCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["CheckCircle"], ChevronRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronRight"], XCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["XCircle"],
    Eye: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Eye"], Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], CornerUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["CornerUpLeft"], MessageSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["MessageSquare"], RefreshCw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["RefreshCw"], PlusSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["PlusSquare"],
    UploadCloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["UploadCloud"], Check: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Check"], X: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["X"], ArrowDownCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowDownCircle"], ArrowUpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowUpCircle"], ArrowLeftCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowLeftCircle"],
    ArrowRightCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowRightCircle"], Square: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Square"], Circle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Circle"], HelpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["HelpCircle"], LogOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["LogOut"], Key: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Key"], Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Menu"], Filter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Filter"],
    RotateCcw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["RotateCcw"], Bookmark: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Bookmark"], Edit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Edit"], BarChart2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["BarChart2"], MessageCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["MessageCircle"], PenTool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["PenTool"], Cloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Cloud"],
    Layers: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Layers"], ChevronLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronLeft"], Grid: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Grid"], AlertTriangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["AlertTriangle"], Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Users"], AlignJustify: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["AlignJustify"],
    Clipboard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Clipboard"], Hash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Hash"], Briefcase: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Briefcase"], Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Calendar"], Image: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Image"], User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["User"], Home: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Home"], Map: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Map"], Bell: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Bell"],
    Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Mail"], Heart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Heart"], Compass: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Compass"], UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["UserPlus"]
};
class IconsModule {
}
IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"].pick(icons)
        ], angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"].pick(icons)
                ],
                exports: [
                    angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qzPY":
/*!****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 12, vars: 0, consts: [[1, "reports-container"], [1, "reports-header"], [1, "header-divider"], [2, "text-align", "center", "margin-top", "2rem"], [2, "margin-bottom", "0"], [2, "margin-top", "0", "margin-bottom", "0", "font-style", "italic"], [2, "margin-top", "0", "font-style", "italic"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User & Content Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pardon the dust!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Looks like you came here a bit too early.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keep an eye on the patch notes to find out when this feature will be available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.reports-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.reports-container[_ngcontent-%COMP%]   div.reports-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\ndiv.reports-container[_ngcontent-%COMP%]   div.reports-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\ndiv.reports-container[_ngcontent-%COMP%]   hr.header-divider[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top: 1px solid var(--site-borders);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYW5kb25tb3RlL1Byb2plY3RzL3B1bHAtZmljdGlvbi1kYXNoL2NsaWVudC9zcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFHUSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRE5BO0VBT1kscUJBQUE7RUFDQSxnQkFBQTtBQ0VaO0FEVkE7RUFhUSxhQUFBO0VBQ0EseUNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5yZXBvcnRzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGl2LnJlcG9ydHMtaGVhZGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoci5oZWFkZXItZGl2aWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zaXRlLWJvcmRlcnMpO1xuICAgIH1cbn0iLCJkaXYucmVwb3J0cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5yZXBvcnRzLWNvbnRhaW5lciBkaXYucmVwb3J0cy1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5kaXYucmVwb3J0cy1jb250YWluZXIgZGl2LnJlcG9ydHMtaGVhZGVyIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZGl2LnJlcG9ydHMtY29udGFpbmVyIGhyLmhlYWRlci1kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpdGUtYm9yZGVycyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uBbC":
/*!*************************************!*\
  !*** ./src/app/pages/news/index.ts ***!
  \*************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component */ "7yAP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return _news_component__WEBPACK_IMPORTED_MODULE_0__["NewsComponent"]; });




/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_audit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/audit */ "bGt0");
/* harmony import */ var _pages_docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/docs */ "gBC0");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home */ "1GhG");
/* harmony import */ var _pages_news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/news */ "uBbC");
/* harmony import */ var _pages_queue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/queue */ "X6oM");
/* harmony import */ var _pages_reports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/reports */ "MbfK");
/* harmony import */ var _pages_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/users */ "72Qd");











const routes = [
    { path: 'home', component: _pages_home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'queue', component: _pages_queue__WEBPACK_IMPORTED_MODULE_6__["QueueComponent"] },
    { path: 'news', component: _pages_news__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: 'docs', component: _pages_docs__WEBPACK_IMPORTED_MODULE_3__["DocsComponent"] },
    { path: 'reports', component: _pages_reports__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"] },
    { path: 'users', component: _pages_users__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"] },
    { path: 'audit', component: _pages_audit__WEBPACK_IMPORTED_MODULE_2__["AuditComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map