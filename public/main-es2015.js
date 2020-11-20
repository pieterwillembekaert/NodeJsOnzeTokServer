(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors.service */ "./src/app/visitors.service.ts");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries.service */ "./src/app/countries.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");












const _c0 = ["mySvg"];
const _c1 = function () { return ["/"]; };
const _c2 = function () { return ["/kaart"]; };
const _c3 = function () { return ["/Prikbord"]; };
const _c4 = function () { return ["/TekenOnzeTok"]; };
const _c5 = function () { return ["/OverOns"]; };
const _c6 = function () { return ["/VolgOns"]; };
class AppComponent {
    constructor(changeDetectorRef, media, elementRef, __VisitorsService, __CountriesService) {
        this.elementRef = elementRef;
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.title = 'OnzeTokDeWereldRond';
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
        //Get data
        var $this = this;
        this.__VisitorsService.getDataFromHttp().then(function (response) {
            //$this.pompData=response; 
            //$this.dataSource= response; 
        }, function (error) {
            console.log("error: ", error);
        });
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySvg = _t.first);
    } }, decls: 93, vars: 32, consts: [["color", "primary"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-md", "true"], ["href", "#", "mat-button", "", 3, "routerLink"], ["fxShow", "true", "fxHide.gt-sm", "true"], [3, "click"], ["fxFlexFill", "", 1, "example-container"], ["fxLayout", "column"], ["sidenav", ""], ["href", "#", "mat-button", "", 3, "click"], ["fxFlexFill", ""], [1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-2"], [1, "col-md-3", "mb-md-0", "mb-3"], ["width", "200"], ["href", "https://www.facebook.com/noordzeegouw/", "target", "new"], ["src", "./assets/img/fb.png"], ["href", " https://www.instagram.com/ksanoordzeegouw", "target", "new"], ["src", "./assets/img/instagram.png"], ["src", "./assets/img/LOGOKSA.png", "width", "90%"], [1, "list-unstyled"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://www.ksa.be/werkkringen/ksa-noordzeegouw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Onze tok de wereld rond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kaart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prikbord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "TekenOnzeTok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "OverOns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Volg ons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Kaart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Prikbord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "TekenOnzeTok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "OverOns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-sidenav-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Onze tok de wereld rond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " KSA Noordzeegouw vzw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Dwarsweg 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 8560 Gullegem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 056 40 48 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " info@ksanoordzeegouw.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Volg ons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Kaart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Prikbord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "TekenOnzeTok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "OverOns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "KSA NZG WERKGROEP MULTIMEDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c5));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["FlexFillDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".example-icon[_ngcontent-%COMP%] {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"] }, { type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"] }]; }, { mySvg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mySvg']
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./kaart/kaart.component */ "./src/app/kaart/kaart.component.ts");
/* harmony import */ var _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./prikbord/prikbord.component */ "./src/app/prikbord/prikbord.component.ts");
/* harmony import */ var _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./over-ons/over-ons.component */ "./src/app/over-ons/over-ons.component.ts");
/* harmony import */ var _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./teken-onze-tok/teken-onze-tok.component */ "./src/app/teken-onze-tok/teken-onze-tok.component.ts");
/* harmony import */ var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./volg-ons/volg-ons.component */ "./src/app/volg-ons/volg-ons.component.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");













































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["IconsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["MDBBootstrapModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"] },
                { path: 'kaart', component: _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_32__["KaartComponent"] },
                { path: 'OverOns', component: _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_34__["OverOnsComponent"] },
                { path: 'Prikbord', component: _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_33__["PrikbordComponent"] },
                { path: 'TekenOnzeTok', component: _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_35__["TekenOnzeTokComponent"] },
                { path: 'VolgOns', component: _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_36__["VolgOnsComponent"] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__["LayoutModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_37__["MatCarouselModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["DashboardComponent"],
        _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_32__["KaartComponent"],
        _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_33__["PrikbordComponent"],
        _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_34__["OverOnsComponent"],
        _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_35__["TekenOnzeTokComponent"],
        _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_36__["VolgOnsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["WavesModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["IconsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["MDBRootModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__["LayoutModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_37__["MatCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["DashboardComponent"],
                    _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_32__["KaartComponent"],
                    _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_33__["PrikbordComponent"],
                    _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_34__["OverOnsComponent"],
                    _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_35__["TekenOnzeTokComponent"],
                    _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_36__["VolgOnsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["WavesModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["IconsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_38__["MDBBootstrapModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"] },
                        { path: 'kaart', component: _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_32__["KaartComponent"] },
                        { path: 'OverOns', component: _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_34__["OverOnsComponent"] },
                        { path: 'Prikbord', component: _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_33__["PrikbordComponent"] },
                        { path: 'TekenOnzeTok', component: _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_35__["TekenOnzeTokComponent"] },
                        { path: 'VolgOns', component: _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_36__["VolgOnsComponent"] },
                    ]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__["LayoutModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_37__["MatCarouselModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/countries.service.ts":
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CountriesService {
    constructor() {
        this.country = [
            "kalimantan",
            "papua new guinea",
            "mexico",
            "estonia",
            "algeria",
            "morocco",
            "mauretania",
            "senegal",
            "gambia",
            "casamance",
            "bissau",
            "guinee",
            "sierra leone",
            "liberia",
            "ivoire",
            "mali",
            "burkina",
            "niger",
            "ghana",
            "togo",
            "benin",
            "nigeria",
            "tunisia",
            "libya",
            "egypt",
            "chad",
            "south_sudan",
            "sudan",
            "cameroon",
            "eritrea",
            "djibouti",
            "ethiopia",
            "somaliland",
            "soqotra",
            "somalia",
            "centrafrique",
            "sao tome",
            "principe",
            "bioko",
            "gabon",
            //"equatorial guinea",
            "congo",
            "cabinda",
            "drc",
            "rwanda",
            "burundi",
            "uganda",
            "kenya",
            "tanzania",
            "zambia",
            "angola",
            "malawi",
            "mozambique",
            "zimbabwe",
            "namibia",
            "botswana",
            "swaziland",
            "lesotho",
            "south africa",
            "greenland",
            "disko",
            "milne",
            "east antarctica",
            //"antarctic peninsula",
            //"thurston",
            //"alexander",
            //"smyley",
            //"robert",
            //"king george",
            // "james ross",
            //"elephant",
            "australia",
            "tasmania",
            "new zealand north island",
            "new zealand south island",
            "new caledonia",
            "sumatra",
            "east malaysia",
            //"brunei",
            "sulawesi",
            "maluku",
            "seram",
            "java",
            "bali",
            "lombok",
            "sumba",
            "flores",
            "timor",
            "new ireland",
            "new britain",
            "bougainville",
            "choiseul",
            "new georgia",
            "santa isabel",
            "malaita",
            "santa ana",
            "rennell",
            "espiritu santo",
            "malakula",
            "efate",
            "fiji",
            "palawan",
            "negros",
            "cebu",
            "samar",
            "luzon",
            "mindoro",
            "hainan",
            "taiwan",
            "kyushu",
            "shikoku",
            "honshu",
            "hokkaido",
            "iturup",
            "urup",
            "paramushir",
            "onekotan",
            "sakhalin",
            "bering island",
            "medny",
            "attu",
            "amchitka",
            "adak",
            "umnak",
            "unalaska",
            "st. lawrence island",
            "st. lawrence island west",
            "alaska",
            "chukotka",
            "wrangel-w",
            "unalaska west",
            "umnak west",
            "another aleutian west",
            "adak west",
            "amchitka west",
            "attu west",
            "kerguelen",
            "mauritius",
            "reunion",
            "madagascar",
            "grande comore",
            "mayotte",
            "aldabra",
            "praslin",
            "mahe",
            "male",
            "maldive",
            "gan",
            "terceira",
            "pico",
            "sao miguel",
            "madeira",
            "lanzarote",
            "gran canaria",
            "tenerife",
            "santo antao",
            "boa vista",
            "santiago",
            "kauai",
            "oahu",
            "kahului",
            "hawaii",
            "raiatea",
            "tahiti",
            "guadeloupe",
            "dominica",
            "martinique",
            "st. lucia",
            "st. vincent",
            "grenada",
            "trinidad",
            "puerto rico",
            //"haiti-dominican border",
            "domincan republic",
            "haiti",
            "falklands west",
            "falklands east",
            "iceland",
            "spitsbergen",
            "nordaustlandet",
            "edgeoya",
            "prince george",
            "salisbury",
            "wilczek",
            "bell",
            "novaya zemlya north",
            "novaya zemlya south",
            "komsomolets",
            "october",
            "bolshevik",
            "kotelny",
            "novaya sibir",
            "lyakhovsky",
            "wrangel",
            "sri lanka",
            "cuba",
            "bimini",
            "andros",
            "inagua",
            "eleuthera",
            "grand bahama",
            "jamaica",
            "irian jaya",
            "alaska-westcopy",
            "galapagos",
            "banks",
            "prince patrick",
            "eglinton",
            "mackenzie king",
            "king christian",
            "ellef ringnes",
            "amund ringnes",
            "axel heiberg",
            "victoria",
            "prince of wales",
            "prescott",
            "cornwallis",
            "bathurst",
            "devon",
            "baffin",
            "bylot",
            "ellesmere",
            "southhampton",
            "newfoundland",
            "canada",
            "usa",
            "haida gwaii",
            "vancouver",
            "guatemala",
            "honduras",
            "el salvador",
            "nicaragua",
            "costa rica",
            "panama",
            "colombia",
            "venezuela",
            "guyana",
            "suriname",
            "guyane",
            "ecuador",
            "peru",
            "bolivia",
            "paraguay",
            "uruguay",
            "argentina",
            "tierra del fuego chile",
            "tierra del fuego argentina",
            "chile",
            "chiloe",
            "brazil",
            "belize",
            "russia",
            "china",
            "mongolia",
            "north korea",
            "south korea",
            "kazakhstan",
            "turkmenistan",
            "uzbekistan",
            "tajikistan",
            "kirgizstan",
            "afghanistan",
            "pakistan",
            "india",
            "nepal",
            "bhutan",
            "bangladesh",
            "burma",
            "thailand",
            "malaysia",
            "cambodia",
            "laos",
            "vietnam",
            "georgia",
            "armenia",
            "azerbaijan",
            "iran",
            "turkey",
            "yemen",
            "oman",
            "emirates",
            "qatar",
            "kuwait",
            "saudi",
            "syria",
            "iraq",
            "jordan",
            "lebanon",
            "israel",
            "cyprus",
            "norway",
            "britain",
            //"ulster",
            "ireland",
            "sweden",
            "finland",
            "hiumaa",
            "saaremaa",
            "lithuania",
            "belarus",
            "poland",
            "spain",
            "portugal",
            "majorca",
            "sardinia",
            "corsica",
            "france",
            "netherlands",
            "belgium",
            "germany",
            "denmark",
            "sjælland",
            "gotland",
            "switzerland",
            "czech",
            "slovakia",
            "austria",
            "hungary",
            "slovenia",
            "croatia",
            "bosnia",
            "italy",
            "sicily",
            "malta",
            "ukraine",
            "moldova",
            "romania",
            "montenegro",
            "serbia",
            "bulgaria",
            "albania",
            "macedonia",
            "greece",
            "thrace",
            "crete"
        ];
        this.countryAll = [
            "kalimantan",
            "papua new guinea",
            "mexico",
            "estonia",
            "algeria",
            "morocco",
            "mauretania",
            "senegal",
            "gambia",
            "casamance",
            "bissau",
            "guinee",
            "sierra leone",
            "liberia",
            "ivoire",
            "mali",
            "burkina",
            "niger",
            "ghana",
            "togo",
            "benin",
            "nigeria",
            "tunisia",
            "libya",
            "egypt",
            "chad",
            "south_sudan",
            "sudan",
            "cameroon",
            "eritrea",
            "djibouti",
            "ethiopia",
            "somaliland",
            "soqotra",
            "somalia",
            "centrafrique",
            "sao tome",
            "principe",
            "bioko",
            "gabon",
            "congo",
            "cabinda",
            "drc",
            "rwanda",
            "burundi",
            "uganda",
            "kenya",
            "tanzania",
            "zambia",
            "angola",
            "malawi",
            "mozambique",
            "zimbabwe",
            "namibia",
            "botswana",
            "swaziland",
            "lesotho",
            "south africa",
            "greenland",
            "disko",
            "milne",
            "east antarctica",
            "australia",
            "tasmania",
            "new zealand north island",
            "new zealand south island",
            "new caledonia",
            "sumatra",
            "east malaysia",
            "sulawesi",
            "maluku",
            "seram",
            "java",
            "bali",
            "lombok",
            "sumba",
            "flores",
            "timor",
            "new ireland",
            "new britain",
            "bougainville",
            "choiseul",
            "new georgia",
            "santa isabel",
            "malaita",
            "santa ana",
            "rennell",
            "espiritu santo",
            "malakula",
            "efate",
            "fiji",
            "palawan",
            "negros",
            "cebu",
            "samar",
            "luzon",
            "mindoro",
            "hainan",
            "taiwan",
            "kyushu",
            "shikoku",
            "honshu",
            "hokkaido",
            "iturup",
            "urup",
            "paramushir",
            "onekotan",
            "sakhalin",
            "bering island",
            "medny",
            "attu",
            "amchitka",
            "adak",
            "umnak",
            "unalaska",
            "st. lawrence island",
            "st. lawrence island west",
            "alaska",
            "chukotka",
            "wrangel-w",
            "unalaska west",
            "umnak west",
            "another aleutian west",
            "adak west",
            "amchitka west",
            "attu west",
            "kerguelen",
            "mauritius",
            "reunion",
            "madagascar",
            "grande comore",
            "mayotte",
            "aldabra",
            "praslin",
            "mahe",
            "male",
            "maldive",
            "gan",
            "terceira",
            "pico",
            "sao miguel",
            "madeira",
            "lanzarote",
            "gran canaria",
            "tenerife",
            "santo antao",
            "boa vista",
            "santiago",
            "kauai",
            "oahu",
            "kahului",
            "hawaii",
            "raiatea",
            "tahiti",
            "guadeloupe",
            "dominica",
            "martinique",
            "st. lucia",
            "st. vincent",
            "grenada",
            "trinidad",
            "puerto rico",
            "domincan republic",
            "haiti",
            "falklands west",
            "falklands east",
            "iceland",
            "spitsbergen",
            "nordaustlandet",
            "edgeoya",
            "prince george",
            "salisbury",
            "wilczek",
            "bell",
            "novaya zemlya north",
            "novaya zemlya south",
            "komsomolets",
            "october",
            "bolshevik",
            "kotelny",
            "novaya sibir",
            "lyakhovsky",
            "wrangel",
            "sri lanka",
            "cuba",
            "bimini",
            "andros",
            "inagua",
            "eleuthera",
            "grand bahama",
            "jamaica",
            "irian jaya",
            "alaska-westcopy",
            "galapagos",
            "banks",
            "prince patrick",
            "eglinton",
            "mackenzie king",
            "king christian",
            "ellef ringnes",
            "amund ringnes",
            "axel heiberg",
            "victoria",
            "prince of wales",
            "prescott",
            "cornwallis",
            "bathurst",
            "devon",
            "baffin",
            "bylot",
            "ellesmere",
            "southhampton",
            "newfoundland",
            "canada",
            "usa",
            "haida gwaii",
            "vancouver",
            "guatemala",
            "honduras",
            "el salvador",
            "nicaragua",
            "costa rica",
            "panama",
            "colombia",
            "venezuela",
            "guyana",
            "suriname",
            "guyane",
            "ecuador",
            "peru",
            "bolivia",
            "paraguay",
            "uruguay",
            "argentina",
            "tierra del fuego chile",
            "tierra del fuego argentina",
            "chile",
            "chiloe",
            "brazil",
            "belize",
            "russia",
            "china",
            "mongolia",
            "north korea",
            "south korea",
            "kazakhstan",
            "turkmenistan",
            "uzbekistan",
            "tajikistan",
            "kirgizstan",
            "afghanistan",
            "pakistan",
            "india",
            "nepal",
            "bhutan",
            "bangladesh",
            "burma",
            "thailand",
            "malaysia",
            "cambodia",
            "laos",
            "vietnam",
            "georgia",
            "armenia",
            "azerbaijan",
            "iran",
            "turkey",
            "yemen",
            "oman",
            "emirates",
            "qatar",
            "kuwait",
            "saudi",
            "syria",
            "iraq",
            "jordan",
            "lebanon",
            "israel",
            "cyprus",
            "norway",
            "britain",
            "ireland",
            "sweden",
            "finland",
            "hiumaa",
            "saaremaa",
            "lithuania",
            "belarus",
            "poland",
            "spain",
            "portugal",
            "majorca",
            "sardinia",
            "corsica",
            "france",
            "netherlands",
            "germany",
            "denmark",
            "sjælland",
            "gotland",
            "switzerland",
            "czech",
            "slovakia",
            "austria",
            "hungary",
            "slovenia",
            "croatia",
            "bosnia",
            "italy",
            "sicily",
            "malta",
            "ukraine",
            "moldova",
            "romania",
            "montenegro",
            "serbia",
            "bulgaria",
            "albania",
            "macedonia",
            "greece",
            "thrace",
            "crete"
        ];
        this.countryAllTranslation = [
            "Kalimantan",
            "Papoea-Nieuw-Guinea",
            "Mexico",
            "Estland",
            "Algerije",
            "Marokko",
            "Mauretanië",
            "Senegal",
            "Gambia",
            "Casamance",
            "Bissau",
            "Guinee",
            "Sierra Leone",
            "Liberia",
            "Ivoire",
            "Mali",
            "Burkina",
            "Niger",
            "Ghana",
            "Togo",
            "Benin",
            "Nigeria",
            "Tunesië",
            "Libië",
            "Egypte",
            "Tsjaad",
            "Zuid-Soedan",
            "Soedan",
            "Kameroen",
            "Eritrea",
            "Djibouti",
            "Ethiopië",
            "Somaliland",
            "Socotra",
            "Somalië",
            "Centraal Afrikaanse Republiek",
            "Sao Tomé en Principe",
            "Principe",
            "Bioko",
            "Gabon",
            "Congo-Kinshasa",
            "Cabinda",
            "Congo-Kinshasa",
            "Rwanda",
            "Burundi",
            "Uganda",
            "Kenia",
            "Tanzania",
            "Zambia",
            "Angola",
            "malawi",
            "Mozambique",
            "Zimbabwe",
            "Namibië",
            "Botswana",
            "eSwatini",
            "Lesotho",
            "Zuid-Afrika",
            "Groenland",
            "Disko",
            "Milne",
            "Oost-Antarctica",
            "Australië",
            "Tasmanië",
            "Noordereiland ",
            "Zuidereiland",
            "Nieuw-Caledonië",
            "Sumatra",
            "Oost-Maleisië",
            "Celebes",
            "Molukken",
            "Seram",
            "Java",
            "Bali",
            "Lombok",
            "Soemba",
            "Flores",
            "Timor",
            "Nieuw-Ierland",
            "Nieuw-Brittannië",
            "Bougainville",
            "Choiseul",
            "New Georgia-eilanden",
            "Santa Isabel Island",
            "Malaita",
            "Santa Ana",
            "Rennell Island",
            "Espiritu Santo",
            "Malakula",
            "Efate",
            "Fiji",
            "Palawan",
            "Negros",
            "Cebu City",
            "Samar",
            "Luzon",
            "Mindoro",
            "Hainan",
            "Taiwan",
            "Kyushu",
            "Shikoku",
            "Honshu",
            "Hokkaido",
            "Itoeroep",
            "Oeroep",
            "Paramoesjir",
            "Onekotan",
            "Sachalin",
            "Beringeiland",
            "Mednyeiland",
            "Attu Island",
            "Amchitka",
            "Adak",
            "Umnak",
            "Unalaska",
            "st. lawrence island",
            "st. lawrence island west",
            "Alaska",
            "Tsjoekotka",
            "wrangel-w",
            "unalaska west",
            "umnak west",
            "another aleutian west",
            "Adak West",
            "Amchitka",
            "Attu Island",
            "Kerguelen",
            "Mauritius",
            "Réunion",
            "Madagaskar",
            "Grande Comore",
            "Mayotte",
            "Aldabra",
            "Praslin",
            "Mahe",
            "Male",
            "Maldiven",
            "Gan",
            "Terceira",
            "Pico",
            "São Miguel",
            "Madeira",
            "Lanzarote",
            "Gran Canaria",
            "Tenerife",
            "Santo Antão",
            "Boa Vista",
            "Santiago de Compostella",
            "Kauai",
            "O'ahu",
            "Kahului",
            "Hawaï",
            "Raiatea",
            "Tahiti",
            "Guadeloupe",
            "Dominica",
            "Martinique",
            "st. lucia",
            "st. vincent",
            "Grenada",
            "Trinidad en Tobago",
            "Puerto Rico",
            "Dominicaanse Republiek",
            "Haïti",
            "West-Falkland",
            "Oost-Falkland",
            "IJsland",
            "Spitsbergen",
            "Noord-Oostland",
            "Edgeøya",
            "Prince George",
            "Salisbury",
            "Wilczek",
            "Bell",
            "Novaya Zemlya Noord",
            "Novaya Zemlya Zuid",
            "Komsomolets",
            "October",
            "Bolsjewiek",
            "Kotelny",
            "Nieuw-Siberië",
            "Ljachovski-eilanden",
            "Wrangel",
            "Sri Lanka",
            "Cuba",
            "Bimini",
            "Andros",
            "Inagua",
            "Eleuthera",
            "Grand Bahama",
            "Jamaica",
            "Irian Jaya",
            "Alaska-Westcopy",
            "Galapagos",
            "Banks",
            "Prince Patrick",
            "Eglinton",
            "Mackenzie King",
            "King Christian",
            "Ellef Ringnes",
            "Amund Ringnes",
            "Axel Heiberg",
            "Victoria",
            "Prince of Wales",
            "Prescott",
            "Cornwallis",
            "Bathurst",
            "Devon",
            "Baffin",
            "Bylot Island",
            "Ellesmere-eiland",
            "Southampton County",
            "Newfoundland",
            "Canada",
            "Verenigde Staten",
            "Koningin Charlotte-eilanden",
            "Vancouver",
            "Guatemala",
            "Honduras",
            "El Salvador",
            "Nicaragua",
            "Costa Rica",
            "Panama",
            "Colombia",
            "Venezuela",
            "Guyana",
            "Suriname",
            "Frans-Guyana",
            "Ecuador",
            "Peru",
            "Bolivia",
            "Paraguay",
            "Uruguay",
            "Argentinië",
            "Tierra del Fuego",
            "Vuurland",
            "Chili",
            "Chiloé",
            "Brazilië",
            "Belize",
            "Rusland",
            "China",
            "Mongolië",
            "Noord-Korea",
            "Zuid-Korea",
            "Kazachstan",
            "Turkmenistan",
            "Oezbekistan",
            "Tadzjikistan",
            "Kirgizstan",
            "Afghanistan",
            "Pakistan",
            "India",
            "Nepal",
            "Bhutan",
            "Bangladesh",
            "Myanmar ",
            "Thailand",
            "Maleisië",
            "Cambodja",
            "Laos",
            "Vietnam",
            "Georgia",
            "Armenië",
            "Azerbeidzjan",
            "Iran",
            "Turkije",
            "Jemen",
            "Oman",
            "Verenigde Arabische Emiraten",
            "Qatar",
            "Koeweit",
            "Saudi-Arabië",
            "Syrië",
            "Irak",
            "Jordanië",
            "Libanon",
            "Israël",
            "Cyprus",
            "Noorwegen",
            "Verenigd Koninkrijk",
            "Ierland",
            "Zweden",
            "Finland",
            "hiumaa",
            "Saaremaa",
            "Litouwen",
            "Wit-Rusland",
            "Polen",
            "Spanje",
            "Portugal",
            "Majorca",
            "Sardinië",
            "Corsica",
            "Frankrijk",
            "Nederland",
            "Duitsland",
            "Denemarken",
            "Seeland",
            "Gotland",
            "Zwitserland",
            "Tsjechië",
            "Slowakije",
            "Oostenrijk",
            "Hongarije",
            "Slovenië",
            "Kroatië",
            "Bosnië",
            "Italië",
            "Sicilië",
            "Malta",
            "Oekraïne",
            "Moldavië",
            "Roemenië",
            "Montenegro",
            "Servië",
            "Bulgarije",
            "Albanië",
            "Noord-Macedonië",
            "Griekenland",
            "Thracië",
            "Kreta"
        ];
    }
    //getters
    getCountry() {
        return this.country;
    }
    getCountryAll() {
        return this.countryAll;
    }
    getCountryAllTranslation() {
        return this.countryAllTranslation;
    }
}
CountriesService.ɵfac = function CountriesService_Factory(t) { return new (t || CountriesService)(); };
CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountriesService, factory: CountriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 41, vars: 0, consts: [[1, "slider"], [1, "slides"], ["src", "/static/images/Demo/OmslagTok.jpg"], [1, "caption", "center-align"], ["src", "/static/images/Demo/1.jpg"], ["src", "/static/images/Demo/2.jpg"], ["src", "/static/images/Demo/3.jpg"], ["id", "TotaleAfstand", 1, "container"], [1, "grid-container-home"], [1, "grid-item-home"], [1, "grid-container-KM"], [1, "grid-item-KM"], [1, "row"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Onze tok de wereld rond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "De tok legt jaarlijk heel wat kilometers af. Op de kilometerteler is te zien hoeveel kilometer de tok totaal aflegde.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Wenst u de afstand te zien van een andere jaar? Maak een keuze:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/general.service.ts":
/*!************************************!*\
  !*** ./src/app/general.service.ts ***!
  \************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GeneralService {
    constructor() { }
    getFullYear() {
        let full = new Date();
        var FullYear = full.getFullYear();
        console.log(FullYear);
        return FullYear;
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(); };
GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitors.service */ "./src/app/visitors.service.ts");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");
/* harmony import */ var _total_dist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../total-dist.service */ "./src/app/total-dist.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general.service */ "./src/app/general.service.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../kaart/kaart.component */ "./src/app/kaart/kaart.component.ts");














function HomeComponent_mat_carousel_slide_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-carousel-slide", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r1.image)("hideOverlay", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.slides[i_r2].tekst, " ");
} }
class HomeComponent {
    constructor(__VisitorsService, __CountriesService, __TotalDistService, __GeneralService) {
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.__TotalDistService = __TotalDistService;
        this.__GeneralService = __GeneralService;
        // Slider Images
        this.slides = [{
                'image': './assets/img/Demo/OmslagTok.jpg',
                'tekst': "onze tok de wereld rond"
            },
            {
                'image': './assets/img/Demo/1.jpg',
                'tekst': ""
            },
            {
                'image': './assets/img/Demo/2.jpg',
                'tekst': ""
            },
            {
                'image': './assets/img/Demo/3.jpg',
                'tekst': ""
            },
            {
                'image': './assets/img/Demo/4.jpg',
                'tekst': ""
            }
        ];
        this.selectedYear = 'option2';
        this.km1 = 1;
        this.km10 = 1;
        this.km100 = 1;
        this.km1000 = 1;
        this.km10000 = 1;
        this.km100000 = 1;
        this.SelectYear = ["alles", 2020, 2019, 2018];
    }
    ngOnInit() {
        let currentYear = this.__GeneralService.getFullYear();
        console.log(currentYear);
        //Get data
        var $this = this;
        this.__TotalDistService.getDataFromHttp(currentYear).then(function (response) {
            $this.data = response;
            //console.log($this.data)
        }, function (error) {
            console.log("error: ", error);
        });
    }
    changeData() {
        //console.log(this.selectedYear)
        //Get data
        var $this = this;
        this.__TotalDistService.getDataFromHttp(this.selectedYear).then(function (response) {
            $this.data = response;
            //console.log($this.data)
        }, function (error) {
            console.log("error: ", error);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 52, vars: 14, consts: [["timings", "250ms ease-in", "interval", "5000", "color", "accent", "maxWidth", "auto", "proportion", "25", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["id", "TotaleAfstand", 1, "container"], [1, "grid-container-home"], [1, "grid-item-home"], [1, "grid-container-KM"], [1, "grid-item-KM"], ["id", "km100000"], ["id", "km10000"], ["id", "km1000"], ["id", "km100"], ["id", "km10"], ["id", "km1"], [1, "row"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "alles"], ["value", "2019"], ["value", "2020"], ["value", "2021"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon", 3, "click"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""], [2, "width", "100%", "height", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center"], [2, "padding", "10px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_mat_carousel_slide_1_Template, 5, 3, "mat-carousel-slide", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "De tok legt jaarlijk heel wat kilometers af. Op de kilometerteler is te zien hoeveel kilometer de tok totaal aflegde.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Wenst u de afstand te zien van een andere jaar? Maak een keuze:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Kies een jaartal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_39_listener($event) { return ctx.selectedYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Alles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_48_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-kaart");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedYear);
    } }, directives: [_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_12__["KaartComponent"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselSlideComponent"]], styles: [".grid-container-KM[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto auto auto;\r\n    background-color: #111;\r\n    padding: 10px;\r\n}\r\n.grid-item-KM[_ngcontent-%COMP%] {\r\n    background-color: rgba(75, 75, 79, 1);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    font-family: digital7;\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n@media only screen and (max-width: 376px) {\r\n    .grid-item-KM[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n        font-size: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qS00gdGVsbGVyICovXHJcbi5ncmlkLWNvbnRhaW5lci1LTSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tS00ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc5LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBkaWdpdGFsNztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XHJcbiAgICAuZ3JpZC1pdGVtLUtNIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }, { type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"] }, { type: _total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"] }, { type: _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/kaart/kaart.component.ts":
/*!******************************************!*\
  !*** ./src/app/kaart/kaart.component.ts ***!
  \******************************************/
/*! exports provided: KaartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaartComponent", function() { return KaartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitors.service */ "./src/app/visitors.service.ts");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");




const _c0 = ["mySvg"];
class KaartComponent {
    constructor(elementRef, __VisitorsService, __CountriesService) {
        this.elementRef = elementRef;
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
    }
    ngOnInit() {
        //Get data
        var $this = this;
        this.__VisitorsService.getDataFromHttp().then(function (response) {
            //$this.pompData=response; 
            //$this.dataSource= response; 
        }, function (error) {
            console.log("error: ", error);
        });
    }
    ngAfterViewInit() {
        const objElm = this.mySvg.nativeElement;
        console.log(objElm.contentDocument);
        var $this = this;
        objElm.onload = () => {
            const paths = objElm.contentDocument.querySelectorAll('path');
            let country = this.__CountriesService.getCountry();
            let dataVisitor = this.__VisitorsService.getData().members;
            //console.log(country)
            //console.log(dataVisitor)
            this.ShowCountry(country, dataVisitor, objElm.contentDocument);
            for (let i = 0; i < country.length; i++) {
                $this.AnimationMap(country[i], dataVisitor, objElm.contentDocument);
            }
        };
    }
    AnimationMap(country, DataFromJs, HTLM) {
        //var ms = svg().getElementById(country);
        var ms = HTLM.getElementById(country);
        if (this.GvCountryClick !== null || this.GvCountryClick !== undefined) {
            var msv = HTLM.getElementById(this.GvCountryClick);
        }
        var $this = this;
        ms.onclick = function (e) {
            var color = '#34642d';
            console.log($this.GvCountryClick);
            var style_valueV = '';
            var style_value = '';
            var numbersVisitors = $this.CreatDataPrikboardOnClick(DataFromJs, country);
            if ($this.GvCountryClick !== null || undefined) {
                //let LcountryV = DataFromJs.GvCountryClick;
                let LcountryV = $this.GvCountryClick;
                if (LcountryV === undefined) {
                    LcountryV = "france";
                }
                //knip
                for (let i = 0; i < DataFromJs.length; i++) {
                    if (DataFromJs[i].country === LcountryV) {
                        color = '#d7731d';
                        break;
                    }
                }
                msv = HTLM.getElementById(LcountryV);
                var attrsV = msv.getAttribute('style').split(' ').join('').split(';');
                for (var iV in attrsV) {
                    var attrV = attrsV[iV].split(':');
                    if (attrV.length > 1) {
                        var kV = attrV[0];
                        var vV = attrV[1];
                    }
                    if (kV == 'fill') {
                        //toggle green
                        vV = color;
                    }
                    if (kV != "") {
                        style_valueV = style_valueV + kV + ':' + vV + ';';
                    }
                }
                msv.setAttribute('style', style_valueV);
            }
            var Prikbord = document.getElementsByClassName("grid-item-map-data");
            Prikbord[0].style.visibility = "visible";
            var PbLand = document.getElementById("PbLand");
            var PbNumbersVisit = document.getElementById("PbNumbersVisit");
            PbLand.innerHTML = country;
            PbNumbersVisit.innerHTML = numbersVisitors;
            //Parsing style attribute values
            var attrs = ms.getAttribute('style').split(' ').join('').split(';');
            for (var i in attrs) {
                var attr = attrs[i].split(':');
                if (attr.length > 1) {
                    var k = attr[0];
                    var v = attr[1];
                }
                if (k == 'fill') {
                    //Toggle blue
                    v = '#2e4ae8';
                    $this.GvCountryClick = country;
                }
                if (k != "") {
                    style_value = style_value + k + ':' + v + ';';
                }
            }
            ms.setAttribute('style', style_value);
        };
        ms.onmouseover = function (e) {
            ms.style.cursor = 'pointer';
        };
        ms.onmouseout = function (e) {
            ms.style.cursor = 'auto';
        };
    }
    ShowCountry(aAllCountry, DataJSON, HTML) {
        //variabelen
        var t, state, found;
        //tokken zoeken en weergeven op de kaart
        for (let i = 0; i < DataJSON.length; i++) {
            found = false;
            for (let ii = 0; ii < aAllCountry.length; ii++) {
                t = HTML.getElementById(aAllCountry[ii] + '-tok');
                state = t.getAttribute('display');
                if (aAllCountry[ii] === DataJSON[i].country) {
                    // console.log(aAllCountry[ii])
                    this.ColorVisitCountry(aAllCountry[ii], HTML);
                    state = 'block';
                    t.setAttribute('display', state);
                    found = true;
                }
            }
        }
    }
    //Color visit country
    ColorVisitCountry(country, HTML) {
        var ms = HTML.getElementById(country);
        var style_value = '';
        // parsing style attribute values
        var attrs = ms.getAttribute('style').split(' ').join('').split(';');
        for (var i in attrs) {
            var attr = attrs[i].split(':');
            if (attr.length > 1) {
                var k = attr[0];
                var v = attr[1];
            }
            if (k == 'fill') {
                // toggle color red vs green
                v = '#d7731d';
            }
            if (k != "") {
                style_value = style_value + k + ':' + v + ';';
            }
        }
        ms.setAttribute('style', style_value);
    }
    CreatDataPrikboardOnClick(dataInJSON, DataClickCountry) {
        var numberOfFound = 0;
        var lastID = 0;
        this.RemovePrikboardMap("dataPostMap");
        //Create new
        for (let i = 0; i < dataInJSON.length; i++) {
            if (dataInJSON[i].country === DataClickCountry) {
                //Creat new
                numberOfFound++;
                this.CreatePrikboardMap(dataInJSON, i, "dataPostMap");
                lastID = i;
            }
        }
        var modulo = numberOfFound % 2;
        if (modulo > 0) {
            this.CreatePrikboardMapEmty(dataInJSON, lastID, "dataPostMap");
        }
        if (numberOfFound == 0) {
            this.CreatePrikboardMapEmty(dataInJSON, lastID, "dataPostMap");
            this.CreatePrikboardMapEmty(dataInJSON, lastID, "dataPostMap");
        }
        return numberOfFound;
    }
    RemovePrikboardMap(parentID) {
        var post = document.getElementById("dataPostMap");
        var child = document.getElementsByClassName("grid-item-map-data-PB");
        var childKopie = [];
        var NumbersOffChild = 0;
        NumbersOffChild = child.length;
        for (let i = 0; i < NumbersOffChild; i++) {
            childKopie[i] = child[i];
        }
        for (let i = 0; i < NumbersOffChild; i++) {
            post.removeChild(childKopie[i]);
        }
    }
    CreatePrikboardMapEmty(dataInJSON, i, parentID) {
        var post = document.getElementById(parentID);
        //place to set new elements
        //creat elements
        var griditemPB = document.createElement("div");
        var gridContPbImage = document.createElement("div");
        var gridItemPBImage = document.createElement("div");
        var gridItemPBText = document.createElement("div");
        var image = document.createElement("img");
        //add css class
        griditemPB.classList.add("grid-item-map-data-PB");
        griditemPB.classList.add("PrikboardMapEmty");
        gridContPbImage.classList.add("grid-container-map-data-Image-PB");
        gridItemPBImage.classList.add("grid-item-map-data-Image-PB");
        gridItemPBText.classList.add("grid-item-map-data-Text-PB");
        image.classList.add("grid-item-map-data-Image-Style-PB");
        //add to the webpage
        griditemPB.appendChild(gridContPbImage);
        gridContPbImage.appendChild(gridItemPBImage);
        gridItemPBImage.appendChild(image);
        gridContPbImage.appendChild(gridItemPBText);
        //set the new elements
        post.appendChild(griditemPB);
    }
    CreatePrikboardMap(dataInJSON, i, parentID) {
        var post = document.getElementById(parentID);
        //place to set new elements
        //creat elements
        var griditemPB = document.createElement("div");
        var gridContPbImage = document.createElement("div");
        var gridItemPBImage = document.createElement("div");
        var gridItemPBText = document.createElement("div");
        var image = document.createElement("img");
        //add css class
        griditemPB.classList.add("grid-item-map-data-PB");
        gridContPbImage.classList.add("grid-container-map-data-Image-PB");
        gridItemPBImage.classList.add("grid-item-map-data-Image-PB");
        gridItemPBText.classList.add("grid-item-map-data-Text-PB");
        image.classList.add("grid-item-map-data-Image-Style-PB");
        //add data from data Object
        gridItemPBText.innerHTML = dataInJSON[i].name;
        image.src = dataInJSON[i].imgScr;
        //add to the webpage
        griditemPB.appendChild(gridContPbImage);
        gridContPbImage.appendChild(gridItemPBImage);
        gridItemPBImage.appendChild(image);
        gridContPbImage.appendChild(gridItemPBText);
        //set the new elements
        post.appendChild(griditemPB);
    }
    closePBdata() {
        var Prikbord = document.getElementsByClassName("grid-item-map-data");
        Prikbord[0].style.visibility = "hidden";
    }
}
KaartComponent.ɵfac = function KaartComponent_Factory(t) { return new (t || KaartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"])); };
KaartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KaartComponent, selectors: [["app-kaart"]], viewQuery: function KaartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySvg = _t.first);
    } }, decls: 25, vars: 0, consts: [["id", "Kaart", 1, "container"], [1, "grid-container-map"], [1, "grid-item-map"], ["id", "map", "data", "./assets/img/map/World_map.svg", "type", "image/svg+xml", 1, "map-svg"], ["mySvg", ""], [1, "grid-item-map-data", "background-Prikbord"], ["onclick", "ZoomIn()", "id", "zoom-in", 1, "btn", "KSA-blue", "material-icons"], ["onclick", "ZoomOut()", "id", "zoom-out", 1, "btn", "KSA-blue", "material-icons"], ["onclick", "ZoomReset()", "id", "reset", 1, "btn", "KSA-blue", "material-icons"], ["onclick", "closePBdata()", "id", "close", 1, "btn", "red", "material-icons", 3, "click"], ["id", "PbLand"], ["id", "PbNumbersVisit"], ["id", "dataPostMap", 1, "grid-container-map-data-PB"]], template: function KaartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kaart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welke landen bezocht de tok? Op de kaart is een overzicht te zien. Klik op een land en ontdek meer!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "object", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "zoom_out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "replay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_16_listener() { return ctx.closePBdata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Land: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "bezoekers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2thYXJ0L2thYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KaartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kaart',
                templateUrl: './kaart.component.html',
                styleUrls: ['./kaart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }, { type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"] }]; }, { mySvg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mySvg']
        }] }); })();


/***/ }),

/***/ "./src/app/over-ons/over-ons.component.ts":
/*!************************************************!*\
  !*** ./src/app/over-ons/over-ons.component.ts ***!
  \************************************************/
/*! exports provided: OverOnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverOnsComponent", function() { return OverOnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



class OverOnsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverOnsComponent.ɵfac = function OverOnsComponent_Factory(t) { return new (t || OverOnsComponent)(); };
OverOnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverOnsComponent, selectors: [["app-over-ons"]], decls: 15, vars: 0, consts: [["color", "primary"], ["id", "LeesMeer", 1, "container"]], template: function OverOnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Over ons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Het verhaal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lang geleden, toen de dieren nog spraken, of ja, misschien ook niet zooo lang geleden...kwamen een aantal KSA'ers op een prachtig idee! Ze zouden onze tok de wereld rond laten reizen, samen met alle KSA'ers. De eerste foto die we hiervan konden terugvinden is er eentje uit 1976. Toen was de tok samen met Hans Redee (KSA'er van KSA Torhout) in Parijs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Wat later ging de mooie traditie helaas verloren, maar daar willen we nu heel erg graag verandering in brengen. Als iedereen meedoet kunnen we onze tok een fantastische wereldreis bezorgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Post je foto hier, samen met de datum en de plaats waar je de foto hebt genomen of stuur ze naar info@ksanoordzeegouw.be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Met dank aan KSA 's Gravenwinkel Torhout voor het prachtige idee en de foto! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXItb25zL292ZXItb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverOnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-over-ons',
                templateUrl: './over-ons.component.html',
                styleUrls: ['./over-ons.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/prikbord/prikbord.component.ts":
/*!************************************************!*\
  !*** ./src/app/prikbord/prikbord.component.ts ***!
  \************************************************/
/*! exports provided: PrikbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrikbordComponent", function() { return PrikbordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitors.service */ "./src/app/visitors.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PrikbordComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", " ", x_r1.imgScr, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1.name, "");
} }
class PrikbordComponent {
    constructor(__VisitorsService) {
        this.__VisitorsService = __VisitorsService;
    }
    ngOnInit() {
        //Get data
        var $this = this;
        this.__VisitorsService.getDataFromHttp().then(function (response) {
            //clear old data
            //Get data from server
            var DataHTTP = response;
            if (DataHTTP == null || undefined) {
                console.log("Error");
            }
            else {
                //gelukt
                $this.data = DataHTTP.members;
            }
        }, function (error) { console.log("error: ", error); });
    }
}
PrikbordComponent.ɵfac = function PrikbordComponent_Factory(t) { return new (t || PrikbordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"])); };
PrikbordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrikbordComponent, selectors: [["app-prikbord"]], decls: 8, vars: 1, consts: [["color", "primary"], [1, "background-Prikbord"], [1, "container"], ["id", "dataPost", 1, "grid-container-Prikbord"], ["class", "grid-item-Prikbord", 4, "ngFor", "ngForOf"], [1, "grid-item-Prikbord"], [1, "grid-container-PB-Image"], [1, "grid-item-PB-Image"], [1, "grid-item-PB-Image-Style", 3, "src"], [1, "grid-item-PB-Text"]], template: function PrikbordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Prikbord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PrikbordComponent_div_7_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".background-Prikbord[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/img/Prikbord.png\");\r\n}\r\n.grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto auto;\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 10px;\r\n    padding: 10px;\r\n    \r\n}\r\n.PrikboardMapEmty[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n.grid-item-Prikbord[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(1deg);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 0px;\r\n    font-size: 30px;\r\n    border-radius: 5px;\r\n}\r\n.grid-container-PB-Image[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto 60px;\r\n    padding: 10px;\r\n}\r\n.grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 5px;\r\n    height: 150px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.grid-item-PB-Text[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    font-family: ChildWriting !important;\r\n    font-weight: bold;\r\n}\r\n@media screen and (min-width: 280px)  {\r\n    .grid-container-map[_ngcontent-%COMP%] {\r\n        grid-template-columns: auto; \r\n        \r\n    } \r\n\r\n    .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n        grid-template-columns: auto;\r\n        grid-template-rows: auto;\r\n        max-width: 150px;\r\n    }\r\n\r\n    .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n        grid-template-columns: auto;\r\n    }\r\n\r\n    .grid-item-Prikbord[_ngcontent-%COMP%]{\r\n        max-width: 400px;\r\n    }\r\n\r\n    .grid-item-PB-Image[_ngcontent-%COMP%]{\r\n        max-width: 180px; \r\n\r\n    }\r\n\r\n    .grid-item-PB-Image-Style[_ngcontent-%COMP%]{\r\n        max-width: 175px;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpa2JvcmQvcHJpa2JvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7SUFDSSxpREFBaUQ7QUFDckQ7QUFFQTtJQUNJLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEVBQTRFO0FBQ2hGO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCO0FBSUE7SUFDSTtRQUNJLDJCQUEyQjs7SUFFL0I7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcmlrYm9yZC9wcmlrYm9yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypQcmlrYm9yZCAqL1xyXG4uYmFja2dyb3VuZC1QcmlrYm9yZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9QcmlrYm9yZC5wbmdcIik7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lci1QcmlrYm9yZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLlByaWtib2FyZE1hcEVtdHkge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLVByaWtib3JkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmdyaWQtaXRlbS1QcmlrYm9yZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLVBCLUltYWdlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tUEItSW1hZ2Uge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtaXRlbS1QQi1UZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQ2hpbGRXcml0aW5nICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODBweCkgIHtcclxuICAgIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bzsgXHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lci1QcmlrYm9yZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWl0ZW0tUHJpa2JvcmR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1pdGVtLVBCLUltYWdle1xyXG4gICAgICAgIG1heC13aWR0aDogMTgwcHg7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxle1xyXG4gICAgICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrikbordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prikbord',
                templateUrl: './prikbord.component.html',
                styleUrls: ['./prikbord.component.css']
            }]
    }], function () { return [{ type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teken-onze-tok/teken-onze-tok.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teken-onze-tok/teken-onze-tok.component.ts ***!
  \************************************************************/
/*! exports provided: TekenOnzeTokComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TekenOnzeTokComponent", function() { return TekenOnzeTokComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



class TekenOnzeTokComponent {
    constructor() { }
    ngOnInit() {
    }
}
TekenOnzeTokComponent.ɵfac = function TekenOnzeTokComponent_Factory(t) { return new (t || TekenOnzeTokComponent)(); };
TekenOnzeTokComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TekenOnzeTokComponent, selectors: [["app-teken-onze-tok"]], decls: 20, vars: 0, consts: [["color", "primary"], ["id", "TekenOnzeTok", 1, "container"], ["id", "myvideo", "height", "400", "controls", ""], ["src", "video/Tok-Deel1.mp4", "type", "video/mp4", 1, "active"], ["src", "video/Tok-Deel2.mp4", "type", "video/mp4"], ["href", "/downloadSjabloon", "role", "button", "target", "new", 1, "btn", "KSA-blue", "lourdes-text-white-bt"]], template: function TekenOnzeTokComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Teken onze tok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Teken onze tok!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Teken je mee? Teken onze tok en pimp zo boeken, cursussen,... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Volg de instructies in de onderstaande video: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DOWNLOAD SJABLOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Stuur het resultaat gerust door naar info@ksanoordzeegouw.be! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rla2VuLW9uemUtdG9rL3Rla2VuLW9uemUtdG9rLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TekenOnzeTokComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teken-onze-tok',
                templateUrl: './teken-onze-tok.component.html',
                styleUrls: ['./teken-onze-tok.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/total-dist.service.ts":
/*!***************************************!*\
  !*** ./src/app/total-dist.service.ts ***!
  \***************************************/
/*! exports provided: TotalDistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalDistService", function() { return TotalDistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TotalDistService {
    constructor(http) {
        this.http = http;
    }
    getDataAsyn(urlYear) {
        return new Promise(resolve => {
            this.http.get("/TotalDist/" + urlYear)
                .subscribe(data => {
                console.log(data);
                this.dataYear = data;
                resolve(data);
                //return data; 
            });
        });
    }
    getDataFromHttp(urlYear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.getDataAsyn(urlYear);
            //debug
            //console.log(data)
            return data;
        });
    }
    getData() {
        //console.log(this.dataYear);
        return this.dataYear;
    }
}
TotalDistService.ɵfac = function TotalDistService_Factory(t) { return new (t || TotalDistService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TotalDistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TotalDistService, factory: TotalDistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TotalDistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/visitors.service.ts":
/*!*************************************!*\
  !*** ./src/app/visitors.service.ts ***!
  \*************************************/
/*! exports provided: VisitorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsService", function() { return VisitorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class VisitorsService {
    constructor(http) {
        this.http = http;
    }
    getDataAsyn() {
        return new Promise(resolve => {
            this.http.get("/data/")
                .subscribe(data => {
                console.log(data);
                this.Visitors = data;
                resolve(data);
                //return data; 
            });
        });
    }
    getDataFromHttp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.getDataAsyn();
            //debug
            //console.log(data)
            return data;
        });
    }
    getData() {
        console.log(this.Visitors);
        return this.Visitors;
    }
    getDatabaseInfo() {
        var aTest = [{
                Tables_in_pomp: "2020"
            }
        ];
        return aTest;
        //return this.http.get("http://localhost:3000/pomp/2020");
    }
}
VisitorsService.ɵfac = function VisitorsService_Factory(t) { return new (t || VisitorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VisitorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VisitorsService, factory: VisitorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/volg-ons/volg-ons.component.ts":
/*!************************************************!*\
  !*** ./src/app/volg-ons/volg-ons.component.ts ***!
  \************************************************/
/*! exports provided: VolgOnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolgOnsComponent", function() { return VolgOnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



class VolgOnsComponent {
    constructor() { }
    ngOnInit() {
    }
}
VolgOnsComponent.ɵfac = function VolgOnsComponent_Factory(t) { return new (t || VolgOnsComponent)(); };
VolgOnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VolgOnsComponent, selectors: [["app-volg-ons"]], decls: 14, vars: 0, consts: [["color", "primary"], ["ng-controller", "socialeMedia"], [1, "container"], ["id", "fb-root"], ["data-href", "https://www.facebook.com/OnzeTokDeWereldRond/", "data-tabs", "timeline", "data-width", "", "data-height", "", "data-small-header", "false", "data-adapt-container-width", "true", "data-hide-cover", "false", "data-show-facepile", "true", 1, "fb-page"], ["cite", "https://www.facebook.com/OnzeTokDeWereldRond/", 1, "fb-xfbml-parse-ignore"], ["href", "https://www.facebook.com/OnzeTokDeWereldRond/"]], template: function VolgOnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Volg ons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sociale media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "blockquote", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Onze tok, de wereld rond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvbGctb25zL3ZvbGctb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolgOnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-volg-ons',
                templateUrl: './volg-ons.component.html',
                styleUrls: ['./volg-ons.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\p-wil\Desktop\CloneOnzeTok\AngularOnzeTok\OnzeTokDeWereldRond\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map