function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./prikbord/prikbord.component */
    "./src/app/prikbord/prikbord.component.ts");
    /* harmony import */


    var _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./over-ons/over-ons.component */
    "./src/app/over-ons/over-ons.component.ts");
    /* harmony import */


    var _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./teken-onze-tok/teken-onze-tok.component */
    "./src/app/teken-onze-tok/teken-onze-tok.component.ts");
    /* harmony import */


    var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./volg-ons/volg-ons.component */
    "./src/app/volg-ons/volg-ons.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var appRoutes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      },
      data: {
        preload: false
      }
    }, {
      path: 'OverOns',
      component: _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_3__["OverOnsComponent"]
    }, {
      path: 'Prikbord',
      component: _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_2__["PrikbordComponent"]
    }, {
      path: 'TekenOnzeTok',
      component: _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_4__["TekenOnzeTokComponent"]
    }, {
      path: 'VolgOns',
      component: _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_5__["VolgOnsComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
        enableTracing: false
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
            enableTracing: false
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _visitors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visitors.service */
    "./src/app/visitors.service.ts");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./countries.service */
    "./src/app/countries.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["mySvg"];

    var _c1 = function _c1() {
      return ["/"];
    };

    var _c2 = function _c2() {
      return ["/kaart"];
    };

    var _c3 = function _c3() {
      return ["/Prikbord"];
    };

    var _c4 = function _c4() {
      return ["/TekenOnzeTok"];
    };

    var _c5 = function _c5() {
      return ["/OverOns"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(changeDetectorRef, media, elementRef, __VisitorsService, __CountriesService) {
        _classCallCheck(this, AppComponent);

        this.elementRef = elementRef;
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.title = 'OnzeTokDeWereldRond';
        this.fillerNav = Array.from({
          length: 50
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(AppComponent, [{
        key: "getAnimationData",
        value: function getAnimationData(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySvg = _t.first);
        }
      },
      decls: 89,
      vars: 21,
      consts: [["color", "primary", "SideClass", "navbar navbar-expand-lg navbar-dark orange accent-3 ie-nav fixed-top", 3, "containerInside"], ["href", "", 1, "logo", "navbar-brand"], [1, "navbar-nav", "mr-auto"], ["mdbWavesEffect", "", 1, "nav-item", "active", "waves-light"], ["routerLinkActive", "active", "mat-button", "", 1, "nav-link", 3, "routerLink"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light"], ["href", "#", "routerLinkActive", "active", "mat-button", "", 1, "nav-link", 3, "routerLink"], [1, "navbar-nav", "nav-flex-icons"], [1, "nav-link"], ["fab", "", "icon", "facebook-f"], ["fab", "", "icon", "twitter"], ["fab", "", "icon", "instagram"], [2, "min-height", "1500px"], [1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-2"], [1, "col-md-3", "mb-md-0", "mb-3"], ["width", "200"], ["href", "https://www.facebook.com/noordzeegouw/", "target", "new"], ["src", "./assets/img/fb.png"], ["href", " https://www.instagram.com/ksanoordzeegouw", "target", "new"], ["src", "./assets/img/instagram.png"], ["src", "./assets/img/LOGOKSA.png", "width", "90%"], [1, "list-unstyled"], ["href", "#", "mat-button", "", 3, "routerLink"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://www.ksa.be/werkkringen/ksa-noordzeegouw"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Onze Tok de wereld rond");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kaart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Prikbord");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "TekenOnzeTok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OverOns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mdb-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mdb-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mdb-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "footer", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Onze tok de wereld rond");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " KSA Noordzeegouw vzw ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Dwarsweg 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 8560 Gullegem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 056 40 48 12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " info@ksanoordzeegouw.be");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Volg ons:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Kaart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Prikbord");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "TekenOnzeTok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "OverOns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\xA9 2020 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "KSA NZG WERKGROEP MULTIMEDIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FabDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".example-icon[_ngcontent-%COMP%] {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]
        }, {
          type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]
        }];
      }, {
        mySvg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mySvg']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./prikbord/prikbord.component */
    "./src/app/prikbord/prikbord.component.ts");
    /* harmony import */


    var _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./over-ons/over-ons.component */
    "./src/app/over-ons/over-ons.component.ts");
    /* harmony import */


    var _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./teken-onze-tok/teken-onze-tok.component */
    "./src/app/teken-onze-tok/teken-onze-tok.component.ts");
    /* harmony import */


    var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./volg-ons/volg-ons.component */
    "./src/app/volg-ons/volg-ons.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./home/home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["IconsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["MDBBootstrapModule"].forRoot(), _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__["MatCarouselModule"].forRoot(), _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__["HomeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_31__["PrikbordComponent"], _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_32__["OverOnsComponent"], _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_33__["TekenOnzeTokComponent"], _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_34__["VolgOnsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_35__["PageNotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["IconsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["MDBRootModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__["MatCarouselModule"], _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__["HomeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_31__["PrikbordComponent"], _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_32__["OverOnsComponent"], _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_33__["TekenOnzeTokComponent"], _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_34__["VolgOnsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_35__["PageNotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["IconsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["MDBBootstrapModule"].forRoot(), _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__["MatCarouselModule"].forRoot(), _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__["HomeRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/countries.service.ts":
  /*!**************************************!*\
    !*** ./src/app/countries.service.ts ***!
    \**************************************/

  /*! exports provided: CountriesService */

  /***/
  function srcAppCountriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
      return CountriesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CountriesService = /*#__PURE__*/function () {
      function CountriesService() {
        _classCallCheck(this, CountriesService);

        this.country = ["kalimantan", "papua new guinea", "mexico", "estonia", "algeria", "morocco", "mauretania", "senegal", "gambia", "casamance", "bissau", "guinee", "sierra leone", "liberia", "ivoire", "mali", "burkina", "niger", "ghana", "togo", "benin", "nigeria", "tunisia", "libya", "egypt", "chad", "south_sudan", "sudan", "cameroon", "eritrea", "djibouti", "ethiopia", "somaliland", "soqotra", "somalia", "centrafrique", "sao tome", "principe", "bioko", "gabon", //"equatorial guinea",
        "congo", "cabinda", "drc", "rwanda", "burundi", "uganda", "kenya", "tanzania", "zambia", "angola", "malawi", "mozambique", "zimbabwe", "namibia", "botswana", "swaziland", "lesotho", "south africa", "greenland", "disko", "milne", "east antarctica", //"antarctic peninsula",
        //"thurston",
        //"alexander",
        //"smyley",
        //"robert",
        //"king george",
        // "james ross",
        //"elephant",
        "australia", "tasmania", "new zealand north island", "new zealand south island", "new caledonia", "sumatra", "east malaysia", //"brunei",
        "sulawesi", "maluku", "seram", "java", "bali", "lombok", "sumba", "flores", "timor", "new ireland", "new britain", "bougainville", "choiseul", "new georgia", "santa isabel", "malaita", "santa ana", "rennell", "espiritu santo", "malakula", "efate", "fiji", "palawan", "negros", "cebu", "samar", "luzon", "mindoro", "hainan", "taiwan", "kyushu", "shikoku", "honshu", "hokkaido", "iturup", "urup", "paramushir", "onekotan", "sakhalin", "bering island", "medny", "attu", "amchitka", "adak", "umnak", "unalaska", "st. lawrence island", "st. lawrence island west", "alaska", "chukotka", "wrangel-w", "unalaska west", "umnak west", "another aleutian west", "adak west", "amchitka west", "attu west", "kerguelen", "mauritius", "reunion", "madagascar", "grande comore", "mayotte", "aldabra", "praslin", "mahe", "male", "maldive", "gan", "terceira", "pico", "sao miguel", "madeira", "lanzarote", "gran canaria", "tenerife", "santo antao", "boa vista", "santiago", "kauai", "oahu", "kahului", "hawaii", "raiatea", "tahiti", "guadeloupe", "dominica", "martinique", "st. lucia", "st. vincent", "grenada", "trinidad", "puerto rico", //"haiti-dominican border",
        "domincan republic", "haiti", "falklands west", "falklands east", "iceland", "spitsbergen", "nordaustlandet", "edgeoya", "prince george", "salisbury", "wilczek", "bell", "novaya zemlya north", "novaya zemlya south", "komsomolets", "october", "bolshevik", "kotelny", "novaya sibir", "lyakhovsky", "wrangel", "sri lanka", "cuba", "bimini", "andros", "inagua", "eleuthera", "grand bahama", "jamaica", "irian jaya", "alaska-westcopy", "galapagos", "banks", "prince patrick", "eglinton", "mackenzie king", "king christian", "ellef ringnes", "amund ringnes", "axel heiberg", "victoria", "prince of wales", "prescott", "cornwallis", "bathurst", "devon", "baffin", "bylot", "ellesmere", "southhampton", "newfoundland", "canada", "usa", "haida gwaii", "vancouver", "guatemala", "honduras", "el salvador", "nicaragua", "costa rica", "panama", "colombia", "venezuela", "guyana", "suriname", "guyane", "ecuador", "peru", "bolivia", "paraguay", "uruguay", "argentina", "tierra del fuego chile", "tierra del fuego argentina", "chile", "chiloe", "brazil", "belize", "russia", "china", "mongolia", "north korea", "south korea", "kazakhstan", "turkmenistan", "uzbekistan", "tajikistan", "kirgizstan", "afghanistan", "pakistan", "india", "nepal", "bhutan", "bangladesh", "burma", "thailand", "malaysia", "cambodia", "laos", "vietnam", "georgia", "armenia", "azerbaijan", "iran", "turkey", "yemen", "oman", "emirates", "qatar", "kuwait", "saudi", "syria", "iraq", "jordan", "lebanon", "israel", "cyprus", "norway", "britain", //"ulster",
        "ireland", "sweden", "finland", "hiumaa", "saaremaa", "lithuania", "belarus", "poland", "spain", "portugal", "majorca", "sardinia", "corsica", "france", "netherlands", "belgium", "germany", "denmark", "sjælland", "gotland", "switzerland", "czech", "slovakia", "austria", "hungary", "slovenia", "croatia", "bosnia", "italy", "sicily", "malta", "ukraine", "moldova", "romania", "montenegro", "serbia", "bulgaria", "albania", "macedonia", "greece", "thrace", "crete"];
        this.countryAll = ["kalimantan", "papua new guinea", "mexico", "estonia", "algeria", "morocco", "mauretania", "senegal", "gambia", "casamance", "bissau", "guinee", "sierra leone", "liberia", "ivoire", "mali", "burkina", "niger", "ghana", "togo", "benin", "nigeria", "tunisia", "libya", "egypt", "chad", "south_sudan", "sudan", "cameroon", "eritrea", "djibouti", "ethiopia", "somaliland", "soqotra", "somalia", "centrafrique", "sao tome", "principe", "bioko", "gabon", "congo", "cabinda", "drc", "rwanda", "burundi", "uganda", "kenya", "tanzania", "zambia", "angola", "malawi", "mozambique", "zimbabwe", "namibia", "botswana", "swaziland", "lesotho", "south africa", "greenland", "disko", "milne", "east antarctica", "australia", "tasmania", "new zealand north island", "new zealand south island", "new caledonia", "sumatra", "east malaysia", "sulawesi", "maluku", "seram", "java", "bali", "lombok", "sumba", "flores", "timor", "new ireland", "new britain", "bougainville", "choiseul", "new georgia", "santa isabel", "malaita", "santa ana", "rennell", "espiritu santo", "malakula", "efate", "fiji", "palawan", "negros", "cebu", "samar", "luzon", "mindoro", "hainan", "taiwan", "kyushu", "shikoku", "honshu", "hokkaido", "iturup", "urup", "paramushir", "onekotan", "sakhalin", "bering island", "medny", "attu", "amchitka", "adak", "umnak", "unalaska", "st. lawrence island", "st. lawrence island west", "alaska", "chukotka", "wrangel-w", "unalaska west", "umnak west", "another aleutian west", "adak west", "amchitka west", "attu west", "kerguelen", "mauritius", "reunion", "madagascar", "grande comore", "mayotte", "aldabra", "praslin", "mahe", "male", "maldive", "gan", "terceira", "pico", "sao miguel", "madeira", "lanzarote", "gran canaria", "tenerife", "santo antao", "boa vista", "santiago", "kauai", "oahu", "kahului", "hawaii", "raiatea", "tahiti", "guadeloupe", "dominica", "martinique", "st. lucia", "st. vincent", "grenada", "trinidad", "puerto rico", "domincan republic", "haiti", "falklands west", "falklands east", "iceland", "spitsbergen", "nordaustlandet", "edgeoya", "prince george", "salisbury", "wilczek", "bell", "novaya zemlya north", "novaya zemlya south", "komsomolets", "october", "bolshevik", "kotelny", "novaya sibir", "lyakhovsky", "wrangel", "sri lanka", "cuba", "bimini", "andros", "inagua", "eleuthera", "grand bahama", "jamaica", "irian jaya", "alaska-westcopy", "galapagos", "banks", "prince patrick", "eglinton", "mackenzie king", "king christian", "ellef ringnes", "amund ringnes", "axel heiberg", "victoria", "prince of wales", "prescott", "cornwallis", "bathurst", "devon", "baffin", "bylot", "ellesmere", "southhampton", "newfoundland", "canada", "usa", "haida gwaii", "vancouver", "guatemala", "honduras", "el salvador", "nicaragua", "costa rica", "panama", "colombia", "venezuela", "guyana", "suriname", "guyane", "ecuador", "peru", "bolivia", "paraguay", "uruguay", "argentina", "tierra del fuego chile", "tierra del fuego argentina", "chile", "chiloe", "brazil", "belize", "russia", "china", "mongolia", "north korea", "south korea", "kazakhstan", "turkmenistan", "uzbekistan", "tajikistan", "kirgizstan", "afghanistan", "pakistan", "india", "nepal", "bhutan", "bangladesh", "burma", "thailand", "malaysia", "cambodia", "laos", "vietnam", "georgia", "armenia", "azerbaijan", "iran", "turkey", "yemen", "oman", "emirates", "qatar", "kuwait", "saudi", "syria", "iraq", "jordan", "lebanon", "israel", "cyprus", "norway", "britain", "ireland", "sweden", "finland", "hiumaa", "saaremaa", "lithuania", "belarus", "poland", "spain", "portugal", "majorca", "sardinia", "corsica", "france", "netherlands", "germany", "denmark", "sjælland", "gotland", "switzerland", "czech", "slovakia", "austria", "hungary", "slovenia", "croatia", "bosnia", "italy", "sicily", "malta", "ukraine", "moldova", "romania", "montenegro", "serbia", "bulgaria", "albania", "macedonia", "greece", "thrace", "crete"];
        this.countryAllTranslation = ["Kalimantan", "Papoea-Nieuw-Guinea", "Mexico", "Estland", "Algerije", "Marokko", "Mauretanië", "Senegal", "Gambia", "Casamance", "Bissau", "Guinee", "Sierra Leone", "Liberia", "Ivoire", "Mali", "Burkina", "Niger", "Ghana", "Togo", "Benin", "Nigeria", "Tunesië", "Libië", "Egypte", "Tsjaad", "Zuid-Soedan", "Soedan", "Kameroen", "Eritrea", "Djibouti", "Ethiopië", "Somaliland", "Socotra", "Somalië", "Centraal Afrikaanse Republiek", "Sao Tomé en Principe", "Principe", "Bioko", "Gabon", "Congo-Kinshasa", "Cabinda", "Congo-Kinshasa", "Rwanda", "Burundi", "Uganda", "Kenia", "Tanzania", "Zambia", "Angola", "malawi", "Mozambique", "Zimbabwe", "Namibië", "Botswana", "eSwatini", "Lesotho", "Zuid-Afrika", "Groenland", "Disko", "Milne", "Oost-Antarctica", "Australië", "Tasmanië", "Noordereiland ", "Zuidereiland", "Nieuw-Caledonië", "Sumatra", "Oost-Maleisië", "Celebes", "Molukken", "Seram", "Java", "Bali", "Lombok", "Soemba", "Flores", "Timor", "Nieuw-Ierland", "Nieuw-Brittannië", "Bougainville", "Choiseul", "New Georgia-eilanden", "Santa Isabel Island", "Malaita", "Santa Ana", "Rennell Island", "Espiritu Santo", "Malakula", "Efate", "Fiji", "Palawan", "Negros", "Cebu City", "Samar", "Luzon", "Mindoro", "Hainan", "Taiwan", "Kyushu", "Shikoku", "Honshu", "Hokkaido", "Itoeroep", "Oeroep", "Paramoesjir", "Onekotan", "Sachalin", "Beringeiland", "Mednyeiland", "Attu Island", "Amchitka", "Adak", "Umnak", "Unalaska", "st. lawrence island", "st. lawrence island west", "Alaska", "Tsjoekotka", "wrangel-w", "unalaska west", "umnak west", "another aleutian west", "Adak West", "Amchitka", "Attu Island", "Kerguelen", "Mauritius", "Réunion", "Madagaskar", "Grande Comore", "Mayotte", "Aldabra", "Praslin", "Mahe", "Male", "Maldiven", "Gan", "Terceira", "Pico", "São Miguel", "Madeira", "Lanzarote", "Gran Canaria", "Tenerife", "Santo Antão", "Boa Vista", "Santiago de Compostella", "Kauai", "O'ahu", "Kahului", "Hawaï", "Raiatea", "Tahiti", "Guadeloupe", "Dominica", "Martinique", "st. lucia", "st. vincent", "Grenada", "Trinidad en Tobago", "Puerto Rico", "Dominicaanse Republiek", "Haïti", "West-Falkland", "Oost-Falkland", "IJsland", "Spitsbergen", "Noord-Oostland", "Edgeøya", "Prince George", "Salisbury", "Wilczek", "Bell", "Novaya Zemlya Noord", "Novaya Zemlya Zuid", "Komsomolets", "October", "Bolsjewiek", "Kotelny", "Nieuw-Siberië", "Ljachovski-eilanden", "Wrangel", "Sri Lanka", "Cuba", "Bimini", "Andros", "Inagua", "Eleuthera", "Grand Bahama", "Jamaica", "Irian Jaya", "Alaska-Westcopy", "Galapagos", "Banks", "Prince Patrick", "Eglinton", "Mackenzie King", "King Christian", "Ellef Ringnes", "Amund Ringnes", "Axel Heiberg", "Victoria", "Prince of Wales", "Prescott", "Cornwallis", "Bathurst", "Devon", "Baffin", "Bylot Island", "Ellesmere-eiland", "Southampton County", "Newfoundland", "Canada", "Verenigde Staten", "Koningin Charlotte-eilanden", "Vancouver", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama", "Colombia", "Venezuela", "Guyana", "Suriname", "Frans-Guyana", "Ecuador", "Peru", "Bolivia", "Paraguay", "Uruguay", "Argentinië", "Tierra del Fuego", "Vuurland", "Chili", "Chiloé", "Brazilië", "Belize", "Rusland", "China", "Mongolië", "Noord-Korea", "Zuid-Korea", "Kazachstan", "Turkmenistan", "Oezbekistan", "Tadzjikistan", "Kirgizstan", "Afghanistan", "Pakistan", "India", "Nepal", "Bhutan", "Bangladesh", "Myanmar ", "Thailand", "Maleisië", "Cambodja", "Laos", "Vietnam", "Georgia", "Armenië", "Azerbeidzjan", "Iran", "Turkije", "Jemen", "Oman", "Verenigde Arabische Emiraten", "Qatar", "Koeweit", "Saudi-Arabië", "Syrië", "Irak", "Jordanië", "Libanon", "Israël", "Cyprus", "Noorwegen", "Verenigd Koninkrijk", "Ierland", "Zweden", "Finland", "hiumaa", "Saaremaa", "Litouwen", "Wit-Rusland", "Polen", "Spanje", "Portugal", "Majorca", "Sardinië", "Corsica", "Frankrijk", "Nederland", "Duitsland", "Denemarken", "Seeland", "Gotland", "Zwitserland", "Tsjechië", "Slowakije", "Oostenrijk", "Hongarije", "Slovenië", "Kroatië", "Bosnië", "Italië", "Sicilië", "Malta", "Oekraïne", "Moldavië", "Roemenië", "Montenegro", "Servië", "Bulgarije", "Albanië", "Noord-Macedonië", "Griekenland", "Thracië", "Kreta"];
      } //getters


      _createClass(CountriesService, [{
        key: "getCountry",
        value: function getCountry() {
          return this.country;
        }
      }, {
        key: "getCountryAll",
        value: function getCountryAll() {
          return this.countryAll;
        }
      }, {
        key: "getCountryAllTranslation",
        value: function getCountryAllTranslation() {
          return this.countryAllTranslation;
        }
      }]);

      return CountriesService;
    }();

    CountriesService.ɵfac = function CountriesService_Factory(t) {
      return new (t || CountriesService)();
    };

    CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CountriesService,
      factory: CountriesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/general.service.ts":
  /*!************************************!*\
    !*** ./src/app/general.service.ts ***!
    \************************************/

  /*! exports provided: GeneralService */

  /***/
  function srcAppGeneralServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralService", function () {
      return GeneralService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GeneralService = /*#__PURE__*/function () {
      function GeneralService() {
        _classCallCheck(this, GeneralService);
      }

      _createClass(GeneralService, [{
        key: "getFullYear",
        value: function getFullYear() {
          var full = new Date();
          var FullYear = full.getFullYear(); //console.log(FullYear)

          return FullYear;
        }
      }, {
        key: "myBrowser",
        value: function myBrowser() {
          if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
          } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return 'Chrome';
          } else if (navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
          } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return 'Firefox'; // }else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
            // return 'IE'; 
          } else {
            return 'unknown';
          }
        }
      }]);

      return GeneralService;
    }();

    GeneralService.ɵfac = function GeneralService_Factory(t) {
      return new (t || GeneralService)();
    };

    GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeneralService,
      factory: GeneralService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/dashboard/dashboard.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/dashboard/dashboard.component.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppHomeDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../visitors.service */
    "./src/app/visitors.service.ts");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../countries.service */
    "./src/app/countries.service.ts");
    /* harmony import */


    var _total_dist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../total-dist.service */
    "./src/app/total-dist.service.ts");
    /* harmony import */


    var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../general.service */
    "./src/app/general.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function DashboardComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 20);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(__VisitorsService, __CountriesService, __TotalDistService, __GeneralService) {
        _classCallCheck(this, DashboardComponent);

        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.__TotalDistService = __TotalDistService;
        this.__GeneralService = __GeneralService;
        this.SelectYear = ["alles", 2020, 2019, 2018];
        this.selectedYear = this.__GeneralService.getFullYear();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.LoadData = false;

          var currentYear = this.__GeneralService.getFullYear(); //debug
          //console.log(currentYear)
          //Get data


          var $this = this;

          this.__TotalDistService.getDataFromHttp(currentYear).then(function (response) {
            $this.data = response;
            $this.LoadData = true; //console.log(response)
          }, function (error) {
            $this.LoadData = false;
            console.log("error: ", error);
          });
        }
      }, {
        key: "changeData",
        value: function changeData() {
          this.LoadData = false;
          console.log(this.selectedYear); //Get data

          var $this = this;

          this.__TotalDistService.getDataFromHttp(this.selectedYear).then(function (response) {
            $this.data = response;
            $this.LoadData = true; //console.log(response)
          }, function (error) {
            $this.LoadData = false;
            console.log("error: ", error);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 53,
      vars: 8,
      consts: [["mode", "indeterminate", 4, "ngIf"], ["id", "TotaleAfstand", 1, "container"], [1, "grid-container-home"], [1, "grid-item-home"], [1, "grid-container-KM"], [1, "grid-item-KM"], ["id", "km100000"], ["id", "km10000"], ["id", "km1000"], ["id", "km100"], ["id", "km10"], ["id", "km1"], [1, "row"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "alles"], ["value", "2019"], ["value", "2020"], ["value", "2021"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon", 3, "click"], ["mode", "indeterminate"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "km");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "De tok legt jaarlijk heel wat kilometers af. Op de kilometerteler is te zien hoeveel kilometer de tok totaal aflegde.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wenst u de afstand te zien van een andere jaar? Maak een keuze:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Kies een jaartal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_mat_select_valueChange_40_listener($event) {
            return ctx.selectedYear = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Alles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_49_listener() {
            return ctx.changeData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.LoadData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.z5);

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"]],
      styles: [".grid-container-home[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    padding: 10px;\r\n  }\r\n.grid-item-home[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n@media only screen and (max-width: 900px) {\r\n    .grid-container-home[_ngcontent-%COMP%] {\r\n        grid-template-columns: auto;\r\n    }\r\n  }\r\n\r\n.grid-container-KM[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto auto auto;\r\n    background-color: #111;\r\n    padding: 10px;\r\n}\r\n.grid-item-KM[_ngcontent-%COMP%] {\r\n    background-color: rgba(75, 75, 79, 1);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    font-family: digital7;\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n@media only screen and (max-width: 376px) {\r\n    .grid-item-KM[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n        font-size: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxhQUFhO0VBQ2Y7QUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBR0E7SUFDRTtRQUNJLDJCQUEyQjtJQUMvQjtFQUNGO0FBR0YsYUFBYTtBQUNiO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8qS00gdmFuIGh1aXMgKi9cclxuLmdyaWQtY29udGFpbmVyLWhvbWUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1pdGVtLWhvbWUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmdyaWQtY29udGFpbmVyLWhvbWUge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4vKktNIHRlbGxlciAqL1xyXG4uZ3JpZC1jb250YWluZXItS00ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLUtNIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3OSwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogZGlnaXRhbDc7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCkge1xyXG4gICAgLmdyaWQtaXRlbS1LTSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]
        }, {
          type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]
        }, {
          type: _total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]
        }, {
          type: _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/home/dashboard/dashboard.component.ts");
    /* harmony import */


    var _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kaart/kaart.component */
    "./src/app/home/kaart/kaart.component.ts");
    /* harmony import */


    var _page_load_page_load_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-load/page-load.component */
    "./src/app/home/page-load/page-load.component.ts");
    /* harmony import */


    var _kaart_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./kaart-resolver.service */
    "./src/app/home/kaart-resolver.service.ts");

    var HomeRoutes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      children: [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        children: [{
          path: 'kaart',
          component: _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_5__["KaartComponent"]
        }, {
          path: '',
          component: _page_load_page_load_component__WEBPACK_IMPORTED_MODULE_6__["PageLoadComponent"],
          resolve: {
            object: _kaart_resolver_service__WEBPACK_IMPORTED_MODULE_7__["KaartResolverService"]
          }
        }]
      }]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../visitors.service */
    "./src/app/visitors.service.ts");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../countries.service */
    "./src/app/countries.service.ts");
    /* harmony import */


    var _total_dist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../total-dist.service */
    "./src/app/total-dist.service.ts");
    /* harmony import */


    var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../general.service */
    "./src/app/general.service.ts");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomeComponent_mat_carousel_slide_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-carousel-slide", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r1.image)("hideOverlay", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.slides[i_r2].tekst, " ");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(__VisitorsService, __CountriesService, __TotalDistService, __GeneralService) {
        _classCallCheck(this, HomeComponent);

        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.__TotalDistService = __TotalDistService;
        this.__GeneralService = __GeneralService; // Slider Images

        this.slides = [{
          'image': './assets/img/Demo/OmslagTok.jpg',
          'tekst': "onze tok de wereld rond"
        }, {
          'image': './assets/img/Demo/1.jpg',
          'tekst': ""
        }, {
          'image': './assets/img/Demo/2.jpg',
          'tekst': ""
        }, {
          'image': './assets/img/Demo/3.jpg',
          'tekst': ""
        }, {
          'image': './assets/img/Demo/4.jpg',
          'tekst': ""
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 7,
      consts: [["timings", "250ms ease-in", "interval", "5000", "color", "accent", "maxWidth", "auto", "proportion", "25", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""], [2, "width", "100%", "height", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center"], [2, "padding", "auto", "color", "white"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_mat_carousel_slide_3_Template, 5, 3, "mat-carousel-slide", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselSlideComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]
        }, {
          type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]
        }, {
          type: _total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]
        }, {
          type: _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/kaart-resolver.service.ts":
  /*!************************************************!*\
    !*** ./src/app/home/kaart-resolver.service.ts ***!
    \************************************************/

  /*! exports provided: KaartResolverService */

  /***/
  function srcAppHomeKaartResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KaartResolverService", function () {
      return KaartResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! .././visitors.service */
    "./src/app/visitors.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var KaartResolverService = /*#__PURE__*/function () {
      function KaartResolverService(__VisitorsService, __Router) {
        _classCallCheck(this, KaartResolverService);

        this.__VisitorsService = __VisitorsService;
        this.__Router = __Router;
      }

      _createClass(KaartResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var $this = this;

          this.__VisitorsService.getDataFromHttp().then(function (response) {
            console.log("Resolver, data get");

            $this.__Router.navigate(['/kaart']);
          }, function (error) {
            console.log("Resolver error: ", error);
          });
        }
      }]);

      return KaartResolverService;
    }();

    KaartResolverService.ɵfac = function KaartResolverService_Factory(t) {
      return new (t || KaartResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    KaartResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KaartResolverService,
      factory: KaartResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KaartResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/kaart/kaart.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/kaart/kaart.component.ts ***!
    \***********************************************/

  /*! exports provided: KaartComponent */

  /***/
  function srcAppHomeKaartKaartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KaartComponent", function () {
      return KaartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _visitors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../visitors.service */
    "./src/app/visitors.service.ts");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../countries.service */
    "./src/app/countries.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var _c0 = ["mySvg"];

    function KaartComponent_mat_progress_bar_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 11);
      }
    }

    function KaartComponent_div_30_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var PB_Element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", PB_Element_r4.ImageScr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Foto van ", PB_Element_r4.Name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](PB_Element_r4.Name);
      }
    }

    function KaartComponent_div_30_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KaartComponent_div_30_div_17_div_1_Template, 7, 3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var PB_Element_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", PB_Element_r4.Name);
      }
    }

    function KaartComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.zoomIn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "zoom_in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.zoomOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "zoom_out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.resetZoom();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "replay");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.closePBdata();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Land: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "bezoekers: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, KaartComponent_div_30_div_17_Template, 2, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.PbLand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.PbNumbersVisit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.aPrikboardList);
      }
    }

    function clamp(n, min, max) {
      return Math.min(max, Math.max(min, n));
    }

    var KaartComponent = /*#__PURE__*/function () {
      function KaartComponent(elementRef, __VisitorsService, __CountriesService, __Router) {
        _classCallCheck(this, KaartComponent);

        this.elementRef = elementRef;
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.__Router = __Router;
        this.ErrorActive = false;
        this.OpenBrikboard = true; //zoom

        this.scale = 1;
        this.translate = [0, 0];
        this.translateOnPanStart = [0, 0];
        this.transformAnimationState = {
          value: null,
          params: {
            transform: 'scale(1)',
            duration: '0s'
          }
        };
        this.aPrikboardList = [{
          'Name': '',
          'ImageScr': ''
        }];
        this.PbLand = "";
        this.PbNumbersVisit = "0";
      }

      _createClass(KaartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.visitors = this.__VisitorsService.getData();

          if (!this.visitors) {
            this.__Router.navigate(['/']);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // initializing the function
          var $this = this;
          var __objElm = this.mySvg.nativeElement;

          __objElm.onload = function () {
            $this.Main(__objElm);
          };
        }
      }, {
        key: "getDataFromServer",
        value: function getDataFromServer() {
          console.log("getDataFromServer");
        }
      }, {
        key: "Main",
        value: function Main(objElm) {
          console.log("main");

          var country = this.__CountriesService.getCountry();

          var dataVisitor = this.__VisitorsService.getData().members;

          this.ErrorActive = false;

          if (country == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load: counrtry");
            return;
          }

          if (dataVisitor == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load: dataVisitor");
            return;
          }

          if (objElm == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load: objElm");
            return;
          }

          if (objElm.contentDocument == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load: objElm.contentDocument");
            return;
          } //console.log(country)
          //console.log(dataVisitor)


          this.ShowCountry(country, dataVisitor, objElm.contentDocument);

          for (var i = 0; i < country.length; i++) {
            this.AnimationMap(country[i], dataVisitor, objElm.contentDocument);
          }
        }
      }, {
        key: "AnimationMap",
        value: function AnimationMap(country, DataFromJs, HTLM) {
          //Check input parameters
          if (country == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (AnimationMap): country");
            return;
          }

          if (DataFromJs == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (AnimationMap): DataFromJs");
            return;
          }

          if (HTLM == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (AnimationMap): HTLM");
            return;
          }

          var ms = HTLM.getElementById(country);

          if (ms == null || undefined) {
            this.ErrorActive = true;
            console.log("error: ", country);
            return;
          }

          if (this.GvCountryClick !== null || this.GvCountryClick !== undefined) {
            var msv = HTLM.getElementById(this.GvCountryClick);
          }

          var $this = this;

          ms.onclick = function (e) {
            var color = '#34642d'; //console.log($this.GvCountryClick)

            var style_valueV = '';
            var style_value = ''; //Prikboard

            $this.PbNumbersVisit = String($this.getDataFromCountry(DataFromJs, country));
            $this.OpenBrikboard = true;
            $this.PbLand = country; //color country 

            if ($this.GvCountryClick !== null || undefined) {
              var LcountryV = $this.GvCountryClick;

              if (LcountryV === undefined) {
                LcountryV = "france";
              } //cut


              for (var _i = 0; _i < DataFromJs.length; _i++) {
                if (DataFromJs[_i].country === LcountryV) {
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
            } //Parsing style attribute values


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
      }, {
        key: "ShowCountry",
        value: function ShowCountry(aAllCountry, DataJSON, HTML) {
          if (aAllCountry == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (ShowCountry): aAllCountry");
            return;
          }

          if (DataJSON == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (ShowCountry): DataJSON");
            return;
          }

          if (HTML == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (ShowCountry): HTML");
            return;
          } //variabelen


          var t, state, found; //tokken zoeken en weergeven op de kaart

          for (var i = 0; i < DataJSON.length; i++) {
            found = false;

            for (var ii = 0; ii < aAllCountry.length; ii++) {
              t = HTML.getElementById(aAllCountry[ii] + '-tok');

              if (t != null || undefined) {
                state = t.getAttribute('display');
              }

              if (aAllCountry[ii] === DataJSON[i].country) {
                // console.log(aAllCountry[ii])
                this.ColorVisitCountry(aAllCountry[ii], HTML);
                state = 'block';

                if (t != null || undefined) {
                  t.setAttribute('display', state);
                }

                found = true;
              }
            }
          }
        } //Color visit country

      }, {
        key: "ColorVisitCountry",
        value: function ColorVisitCountry(country, HTML) {
          if (country == null || undefined) {
            console.log("data not load (ColorVisitCountry): country");
            return;
          }

          if (HTML == null || undefined) {
            console.log("data not load (ColorVisitCountry): HTML");
            return;
          }

          var ms = HTML.getElementById(country);

          if (ms == null || undefined) {
            this.ErrorActive = true;
            console.log("Error: " + country);
            return;
          }

          var style_value = ''; // parsing style attribute values

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
      }, {
        key: "getDataFromCountry",
        value: function getDataFromCountry(dataInJSON, DataClickCountry) {
          if (dataInJSON == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (CreatDataPrikboardOnClick): dataInJSON");
            return;
          }

          if (DataClickCountry == null || undefined) {
            this.ErrorActive = true;
            console.log("data not load (CreatDataPrikboardOnClick): DataClickCountry");
            return;
          }

          var LenPrikboardList = this.aPrikboardList.length;
          this.aPrikboardList.splice(1, LenPrikboardList);
          var numberOfFound = 0;
          var lastID = 0; //Create new

          for (var i = 0; i < dataInJSON.length; i++) {
            if (dataInJSON[i].country === DataClickCountry) {
              //Creat new
              numberOfFound++;
              this.aPrikboardList.push({
                'Name': String(dataInJSON[i].name),
                'ImageScr': String(dataInJSON[i].imgScr)
              });
              lastID = i;
            }
          }

          return numberOfFound;
        } //zoom

      }, {
        key: "onMouseWheel",
        value: function onMouseWheel(e) {
          var currentScale = this.scale;
          var newScale = clamp(this.scale + Math.sign(e.deltaY) / 10.0, 1, 3.0);

          if (currentScale !== newScale) {
            this.translate = this.calculateTranslationToZoomPoint(currentScale, newScale, this.translate, e);
            this.scale = newScale;
            this.updateTransformAnimationState();
          }

          e.preventDefault();
        }
      }, {
        key: "calculateTranslationToZoomPoint",
        value: function calculateTranslationToZoomPoint(currentScale, newScale, currentTranslation, e) {
          // kudos to this awesome answer on stackoverflow:
          // https://stackoverflow.com/a/27611642/1814576
          var _this$projectToLayer = this.projectToLayer(e),
              _this$projectToLayer2 = _slicedToArray(_this$projectToLayer, 2),
              eventLayerX = _this$projectToLayer2[0],
              eventLayerY = _this$projectToLayer2[1];

          var xAtCurrentScale = (eventLayerX - currentTranslation[0]) / currentScale;
          var yAtCurrentScale = (eventLayerY - currentTranslation[1]) / currentScale;
          var xAtNewScale = xAtCurrentScale * newScale;
          var yAtNewScale = yAtCurrentScale * newScale;
          return [eventLayerX - xAtNewScale, eventLayerY - yAtNewScale];
        }
      }, {
        key: "projectToLayer",
        value: function projectToLayer(eventClientXY) {
          var layerX = Math.round(eventClientXY.clientX - this.clientX);
          var layerY = Math.round(eventClientXY.clientY - this.clientY);
          return [layerX, layerY];
        }
      }, {
        key: "updateTransformAnimationState",
        value: function updateTransformAnimationState() {
          var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.5s';
          this.transformAnimationState = {
            value: this.scale + this.translate[0] + this.translate[1],
            params: {
              transform: "translate3d(".concat(this.translate[0], "px, ").concat(this.translate[1], "px, 0px) scale(").concat(this.scale, ")"),
              duration: duration
            }
          };
        }
      }, {
        key: "closePBdata",
        value: function closePBdata() {
          this.OpenBrikboard = false;
        }
      }, {
        key: "resetZoom",
        value: function resetZoom() {
          this.scale = 1;
          this.translate = [0, 0];
          this.updateTransformAnimationState();
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          console.log("zoom in");
          this.scale = this.scale + 0.1;
          this.translate = [0, 0];
          this.updateTransformAnimationState();
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          console.log("zoom out");
          this.scale = this.scale - 0.1;
          this.translate = [0, 0];
          this.updateTransformAnimationState();
        }
      }, {
        key: "moveUp",
        value: function moveUp() {
          console.log("move up");
          var y = this.translate[0];
          console.log(y);
          this.translate = [this.translateOnPanStart[0], this.translateOnPanStart[1] = this.translateOnPanStart[1] + 10];
          this.updateTransformAnimationState("0s");
        }
      }, {
        key: "moveDown",
        value: function moveDown() {
          console.log("move up");
          var y = this.translate[0];
          console.log(y);
          this.translate = [this.translateOnPanStart[0], this.translateOnPanStart[1] = this.translateOnPanStart[1] - 10];
          this.updateTransformAnimationState("0s");
        }
      }, {
        key: "moveLeft",
        value: function moveLeft() {
          console.log("move left");
          var y = this.translate[0];
          console.log(y);
          this.translate = [this.translateOnPanStart[0] = this.translateOnPanStart[0] - 10, this.translateOnPanStart[1]];
          this.updateTransformAnimationState("0s");
        }
      }, {
        key: "moveRight",
        value: function moveRight() {
          console.log("move right");
          var y = this.translate[0];
          console.log(y);
          this.translate = [this.translateOnPanStart[0] = this.translateOnPanStart[0] + 10, this.translateOnPanStart[1]];
          this.updateTransformAnimationState("0s");
        }
      }, {
        key: "onPanStart",
        value: function onPanStart(e) {
          console.log('click');
          this.translateOnPanStart = _toConsumableArray(this.translate);
          e.preventDefault();
        }
      }, {
        key: "onPan",
        value: function onPan(e) {
          console.log('click');
          this.translate = [this.translateOnPanStart[0] + e.deltaX, this.translateOnPanStart[1] + e.deltaY];
          this.updateTransformAnimationState("0s");
          e.preventDefault();
        }
      }, {
        key: "clientX",
        get: function get() {
          return this.elementRef.nativeElement.getBoundingClientRect().left;
        }
      }, {
        key: "clientY",
        get: function get() {
          return this.elementRef.nativeElement.getBoundingClientRect().top;
        }
      }]);

      return KaartComponent;
    }();

    KaartComponent.ɵfac = function KaartComponent_Factory(t) {
      return new (t || KaartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    KaartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KaartComponent,
      selectors: [["app-kaart"]],
      viewQuery: function KaartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySvg = _t.first);
        }
      },
      hostBindings: function KaartComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function KaartComponent_mousewheel_HostBindingHandler($event) {
            return ctx.onMouseWheel($event);
          })("panstart", function KaartComponent_panstart_HostBindingHandler($event) {
            return ctx.onPanStart($event);
          })("pan", function KaartComponent_pan_HostBindingHandler($event) {
            return ctx.onPan($event);
          });
        }
      },
      decls: 31,
      vars: 3,
      consts: [["id", "Kaart", 1, "container"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a refresh icon"], [1, "btn", "material-icons", 3, "click"], ["id", "zoom-out", 1, "btn", "material-icons", 3, "click"], ["id", "reset", 1, "btn", "material-icons", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "grid-container-map"], [1, "grid-item-map"], ["id", "map", "data", "./assets/img/map/World_map.svg", "type", "image/svg+xml", 1, "map-svg"], ["mySvg", ""], ["class", "grid-item-map-data background-Prikbord", 4, "ngIf"], ["mode", "indeterminate"], [1, "grid-item-map-data", "background-Prikbord"], [1, "btn", "red", "material-icons", 3, "click"], ["id", "PbLand"], ["id", "PbNumbersVisit"], ["id", "dataPostMap", "class", "grid-container-map-data-PB", 4, "ngFor", "ngForOf"], ["id", "dataPostMap", 1, "grid-container-map-data-PB"], ["class", "grid-container-map-data-Image-PB", 4, "ngIf"], [1, "grid-container-map-data-Image-PB"], [1, "grid-item-map-data-PB"], [1, "grid-item-map-data-Image-PB"], [1, "grid-item-map-data-Image-Style-PB", 3, "src", "alt"], [1, "grid-item-map-data-Text-PB"]],
      template: function KaartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kaart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welke landen bezocht de tok? Op de kaart is een overzicht te zien. Klik op een land en ontdek meer!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_11_listener() {
            return ctx.zoomIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_13_listener() {
            return ctx.zoomOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "zoom_out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_15_listener() {
            return ctx.resetZoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "replay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_17_listener() {
            return ctx.moveUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "arrow_drop_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_19_listener() {
            return ctx.moveDown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "arrow_drop_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_21_listener() {
            return ctx.moveLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_23_listener() {
            return ctx.moveRight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, KaartComponent_mat_progress_bar_25_Template, 1, 0, "mat-progress-bar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "object", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, KaartComponent_div_30_Template, 18, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.visitors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformAnimation", ctx.transformAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OpenBrikboard);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".content-wrapper[_ngcontent-%COMP%] {\r\n  transform-origin: 0 0 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.map-svg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n.grid-container-map[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  background-color: rgb(129, 169, 195);\r\n  grid-template-columns: auto auto;\r\n}\r\n.grid-item-map[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n  transform-origin: 0 0 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n\r\n}\r\n.grid-item-map-data[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n}\r\n\r\n.grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: auto auto;\r\n  grid-row-gap: 5px;\r\n  grid-column-gap: 5px;\r\n  padding: 10px;\r\n}\r\n.grid-item-map-data-PB[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 10px;\r\n  font-size: 30px;\r\n  border-radius: 5px;\r\n  width: 200px;\r\n}\r\n.grid-container-map-data-Image-PB[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: auto auto;\r\n  padding: 10px;\r\n}\r\n.grid-item-map-data-Image-PB[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 5px;\r\n}\r\n.grid-item-map-data-Image-Style-PB[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.grid-item-map-data-Text-PB[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  font-family: ChildWriting !important;\r\n  font-weight: bold;\r\n}\r\n.container-prikbord-image-text[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.centered-prikbord-image-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n@media screen and (min-width: 280px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto;\r\n    max-width: 150px;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 528px) {\r\n  \r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n    max-width: 150px;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    padding: 30px;\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 500px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 628px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 835px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 1252px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: 70% 30%;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 1681px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: 70% 30%;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto auto auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9rYWFydC9rYWFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTjtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQztBQUtBO0VBQ0U7SUFDRSwyQkFBMkI7O0VBRTdCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBRUE7RUFDRTs7O09BR0s7O0VBRUw7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsb0JBQW9COztFQUV0Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxvQkFBb0I7O0VBRXRCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBR0E7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsb0JBQW9COztFQUV0Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usb0RBQW9EO0lBQ3BELG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2thYXJ0L2thYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKm1hcCovXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hcC1zdmcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLW1hcCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjksIDE5NSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tbWFwIHtcclxuICAvKnBhZGRpbmc6IDIwcHg7Ki9cclxuICAvKmZvbnQtc2l6ZTogMzBweDsqL1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmdyaWQtaXRlbS1tYXAtZGF0YSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKm1hcCBkYXRhKi9cclxuLmdyaWQtY29udGFpbmVyLW1hcC1kYXRhLVBCIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG4gIGdyaWQtcm93LWdhcDogNXB4O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tbWFwLWRhdGEtUEIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1JbWFnZS1QQiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbS1tYXAtZGF0YS1JbWFnZS1QQiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbS1tYXAtZGF0YS1JbWFnZS1TdHlsZS1QQiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tbWFwLWRhdGEtVGV4dC1QQiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQ2hpbGRXcml0aW5nICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItcHJpa2JvcmQtaW1hZ2UtdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1wcmlrYm9yZC1pbWFnZS10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODBweCkge1xyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUHJpa2JvcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxlIHtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTI4cHgpIHtcclxuICAvKiAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvOyBcclxuICAgICAgICAgXHJcbiAgICAgfSovXHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QcmlrYm9yZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2UtU3R5bGUge1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLW1hcC1kYXRhLVBCIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1QcmlrYm9yZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUHJpa2JvcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxlIHtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjhweCkge1xyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLW1hcC1kYXRhLVBCIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVByaWtib3JkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM1cHgpIHtcclxuICAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUHJpa2JvcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxlIHtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MnB4KSB7XHJcbiAgLmdyaWQtY29udGFpbmVyLW1hcCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItbWFwLWRhdGEtUEIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QcmlrYm9yZCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2UtU3R5bGUge1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLW1hcC1kYXRhLVBCIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVByaWtib3JkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transformAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: '{{transform}}'
        }), {
          params: {
            transform: 'scale(1)',
            duration: '0s'
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{duration}} ease'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KaartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kaart',
          templateUrl: './kaart.component.html',
          styleUrls: ['./kaart.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transformAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: '{{transform}}'
          }), {
            params: {
              transform: 'scale(1)',
              duration: '0s'
            }
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{duration}} ease'))])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]
        }, {
          type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        mySvg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mySvg']
        }],
        onMouseWheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousewheel', ['$event']]
        }],
        onPanStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["panstart", ["$event"]]
        }],
        onPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["pan", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/page-load/page-load.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/page-load/page-load.component.ts ***!
    \*******************************************************/

  /*! exports provided: PageLoadComponent */

  /***/
  function srcAppHomePageLoadPageLoadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLoadComponent", function () {
      return PageLoadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageLoadComponent = /*#__PURE__*/function () {
      function PageLoadComponent() {
        _classCallCheck(this, PageLoadComponent);
      }

      _createClass(PageLoadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageLoadComponent;
    }();

    PageLoadComponent.ɵfac = function PageLoadComponent_Factory(t) {
      return new (t || PageLoadComponent)();
    };

    PageLoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageLoadComponent,
      selectors: [["app-page-load"]],
      decls: 2,
      vars: 0,
      template: function PageLoadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-load works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZS1sb2FkL3BhZ2UtbG9hZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-load',
          templateUrl: './page-load.component.html',
          styleUrls: ['./page-load.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/over-ons/over-ons.component.ts":
  /*!************************************************!*\
    !*** ./src/app/over-ons/over-ons.component.ts ***!
    \************************************************/

  /*! exports provided: OverOnsComponent */

  /***/
  function srcAppOverOnsOverOnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverOnsComponent", function () {
      return OverOnsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../volg-ons/volg-ons.component */
    "./src/app/volg-ons/volg-ons.component.ts");

    var OverOnsComponent = /*#__PURE__*/function () {
      function OverOnsComponent() {
        _classCallCheck(this, OverOnsComponent);
      }

      _createClass(OverOnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OverOnsComponent;
    }();

    OverOnsComponent.ɵfac = function OverOnsComponent_Factory(t) {
      return new (t || OverOnsComponent)();
    };

    OverOnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverOnsComponent,
      selectors: [["app-over-ons"]],
      decls: 18,
      vars: 0,
      consts: [["color", "accent", 1, "z-depth-0"], ["id", "LeesMeer", 1, "container"]],
      template: function OverOnsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Over ons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Het verhaal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lang geleden, toen de dieren nog spraken, of ja, misschien ook niet zooo lang geleden...kwamen een aantal KSA'ers op een prachtig idee! Ze zouden onze tok de wereld rond laten reizen, samen met alle KSA'ers. De eerste foto die we hiervan konden terugvinden is er eentje uit 1976. Toen was de tok samen met Hans Redee (KSA'er van KSA Torhout) in Parijs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Wat later ging de mooie traditie helaas verloren, maar daar willen we nu heel erg graag verandering in brengen. Als iedereen meedoet kunnen we onze tok een fantastische wereldreis bezorgen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Post je foto hier, samen met de datum en de plaats waar je de foto hebt genomen of stuur ze naar info@ksanoordzeegouw.be ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Met dank aan KSA 's Gravenwinkel Torhout voor het prachtige idee en de foto! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-volg-ons");
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_2__["VolgOnsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXItb25zL292ZXItb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverOnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-over-ons',
          templateUrl: './over-ons.component.html',
          styleUrls: ['./over-ons.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/prikbord/prikbord.component.ts":
  /*!************************************************!*\
    !*** ./src/app/prikbord/prikbord.component.ts ***!
    \************************************************/

  /*! exports provided: PrikbordComponent */

  /***/
  function srcAppPrikbordPrikbordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrikbordComponent", function () {
      return PrikbordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../visitors.service */
    "./src/app/visitors.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    function PrikbordComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mdb-card-img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mdb-card-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r1.imgScr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" LAND: ", x_r1.countryTanslation, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AFSTAND: ", x_r1.distance, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DATUM: ", x_r1.dateConvert, " ");
      }
    }

    var PrikbordComponent = /*#__PURE__*/function () {
      function PrikbordComponent(__VisitorsService) {
        _classCallCheck(this, PrikbordComponent);

        this.__VisitorsService = __VisitorsService;
      }

      _createClass(PrikbordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Get data
          var $this = this;

          this.__VisitorsService.getDataFromHttp().then(function (response) {
            //clear old data
            //Get data from server
            var DataHTTP = response;

            if (DataHTTP == null || undefined) {
              console.log("Error");
            } else {
              //gelukt
              $this.data = DataHTTP.members;
            }
          }, function (error) {
            console.log("error: ", error);
          });
        }
      }]);

      return PrikbordComponent;
    }();

    PrikbordComponent.ɵfac = function PrikbordComponent_Factory(t) {
      return new (t || PrikbordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]));
    };

    PrikbordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrikbordComponent,
      selectors: [["app-prikbord"]],
      decls: 10,
      vars: 1,
      consts: [[1, "background-Prikbord"], ["color", "accent", 1, "z-depth-0"], [1, "container"], [1, "row"], ["class", "col-12 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-4"], ["mdbWavesEffect", "", 1, "view", "rgba-white-slight", "waves-light"], ["alt", "Card image cap", 3, "src"], [1, "mask"]],
      template: function PrikbordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prikbord");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PrikbordComponent_div_9_Template, 17, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardImageComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardTextComponent"]],
      styles: [".grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto auto;\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 10px;\r\n    padding: 10px;  \r\n}\r\n\r\n.PrikboardMapEmty[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n.grid-item-Prikbord[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(1deg);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 0px;\r\n    font-size: 30px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.grid-container-PB-Image[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto 60px;\r\n    padding: 10px;\r\n}\r\n\r\n.grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 5px;\r\n    height: 150px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.grid-item-PB-Text[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    font-family: ChildWriting !important;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpa2JvcmQvcHJpa2JvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRyIsImZpbGUiOiJzcmMvYXBwL3ByaWtib3JkL3ByaWtib3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypQcmlrYm9yZCAqL1xyXG5cclxuLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDsgIFxyXG59XHJcblxyXG4uUHJpa2JvYXJkTWFwRW10eSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tUHJpa2JvcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLVByaWtib3JkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItUEItSW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA2MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbS1QQi1JbWFnZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tUEItSW1hZ2UtU3R5bGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLVBCLVRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBDaGlsZFdyaXRpbmcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjgwcHgpICB7XHJcbiAgICAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87IFxyXG4gICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXItbWFwLWRhdGEtUEIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1pdGVtLVByaWtib3Jke1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtaXRlbS1QQi1JbWFnZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4MHB4OyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0gKi9cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrikbordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prikbord',
          templateUrl: './prikbord.component.html',
          styleUrls: ['./prikbord.component.css']
        }]
      }], function () {
        return [{
          type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/teken-onze-tok/teken-onze-tok.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/teken-onze-tok/teken-onze-tok.component.ts ***!
    \************************************************************/

  /*! exports provided: TekenOnzeTokComponent */

  /***/
  function srcAppTekenOnzeTokTekenOnzeTokComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TekenOnzeTokComponent", function () {
      return TekenOnzeTokComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var TekenOnzeTokComponent = /*#__PURE__*/function () {
      function TekenOnzeTokComponent() {
        _classCallCheck(this, TekenOnzeTokComponent);
      }

      _createClass(TekenOnzeTokComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TekenOnzeTokComponent;
    }();

    TekenOnzeTokComponent.ɵfac = function TekenOnzeTokComponent_Factory(t) {
      return new (t || TekenOnzeTokComponent)();
    };

    TekenOnzeTokComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TekenOnzeTokComponent,
      selectors: [["app-teken-onze-tok"]],
      decls: 32,
      vars: 0,
      consts: [["color", "accent", 1, "z-depth-0"], ["id", "TekenOnzeTok", 1, "container"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6"], ["id", "myvideo", "height", "400", "width", "500", "controls", ""], ["src", "video/Tok-Deel1.mp4", "type", "video/mp4", 1, "active"], ["src", "video/Tok-Deel2.mp4", "type", "video/mp4"], ["color", "primary", "href", "/downloadSjabloon", "role", "button", "target", "new", 1, "btn", "blue"]],
      template: function TekenOnzeTokComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Teken onze tok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Teken onze tok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Teken je mee? Teken onze tok en pimp zo boeken, cursussen,...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Volg de instructies in de onderstaande video:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Deel 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "video", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Deel 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "video", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "source", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DOWNLOAD SJABLOON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Stuur het resultaat gerust door naar info@ksanoordzeegouw.be! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rla2VuLW9uemUtdG9rL3Rla2VuLW9uemUtdG9rLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TekenOnzeTokComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-teken-onze-tok',
          templateUrl: './teken-onze-tok.component.html',
          styleUrls: ['./teken-onze-tok.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/total-dist.service.ts":
  /*!***************************************!*\
    !*** ./src/app/total-dist.service.ts ***!
    \***************************************/

  /*! exports provided: TotalDistService */

  /***/
  function srcAppTotalDistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalDistService", function () {
      return TotalDistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TotalDistService = /*#__PURE__*/function () {
      function TotalDistService(http) {
        _classCallCheck(this, TotalDistService);

        this.http = http;
      } //http://localhost:3000/


      _createClass(TotalDistService, [{
        key: "getDataAsyn",
        value: function getDataAsyn(urlYear) {
          var _this = this;

          return new Promise(function (resolve) {
            _this.http.get("/TotalDist/" + urlYear).subscribe(function (data) {
              //console.log(data);
              _this.dataYear = data;
              resolve(data); //return data; 
            });
          });
        }
      }, {
        key: "getDataFromHttp",
        value: function getDataFromHttp(urlYear) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (urlYear == "alles") {
                      urlYear = 0;
                    }

                    _context.next = 3;
                    return this.getDataAsyn(urlYear);

                  case 3:
                    data = _context.sent;
                    return _context.abrupt("return", data);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          //console.log(this.dataYear);
          return this.dataYear;
        }
      }]);

      return TotalDistService;
    }();

    TotalDistService.ɵfac = function TotalDistService_Factory(t) {
      return new (t || TotalDistService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TotalDistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TotalDistService,
      factory: TotalDistService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TotalDistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visitors.service.ts":
  /*!*************************************!*\
    !*** ./src/app/visitors.service.ts ***!
    \*************************************/

  /*! exports provided: VisitorsService */

  /***/
  function srcAppVisitorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorsService", function () {
      return VisitorsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var VisitorsService = /*#__PURE__*/function () {
      function VisitorsService(http) {
        _classCallCheck(this, VisitorsService);

        this.http = http;
      } //http://localhost:3000


      _createClass(VisitorsService, [{
        key: "getDataAsyn",
        value: function getDataAsyn() {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2.http.get("/data/").subscribe(function (data) {
              console.log(data);
              _this2.Visitors = data;
              resolve(data); //return data; 
            });
          });
        }
      }, {
        key: "getDataFromHttp",
        value: function getDataFromHttp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getDataAsyn();

                  case 2:
                    data = _context2.sent;
                    return _context2.abrupt("return", data);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          console.log(this.Visitors);
          return this.Visitors;
        }
      }, {
        key: "getDatabaseInfo",
        value: function getDatabaseInfo() {
          var aTest = [{
            Tables_in_pomp: "2020"
          }];
          return aTest; //return this.http.get("http://localhost:3000/pomp/2020");
        }
      }]);

      return VisitorsService;
    }();

    VisitorsService.ɵfac = function VisitorsService_Factory(t) {
      return new (t || VisitorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    VisitorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VisitorsService,
      factory: VisitorsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/volg-ons/volg-ons.component.ts":
  /*!************************************************!*\
    !*** ./src/app/volg-ons/volg-ons.component.ts ***!
    \************************************************/

  /*! exports provided: VolgOnsComponent */

  /***/
  function srcAppVolgOnsVolgOnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolgOnsComponent", function () {
      return VolgOnsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VolgOnsComponent = /*#__PURE__*/function () {
      function VolgOnsComponent() {
        _classCallCheck(this, VolgOnsComponent);
      }

      _createClass(VolgOnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VolgOnsComponent;
    }();

    VolgOnsComponent.ɵfac = function VolgOnsComponent_Factory(t) {
      return new (t || VolgOnsComponent)();
    };

    VolgOnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VolgOnsComponent,
      selectors: [["app-volg-ons"]],
      decls: 13,
      vars: 0,
      consts: [["ng-controller", "socialeMedia"], [1, "container"], ["id", "fb-root"], ["data-href", "https://www.facebook.com/OnzeTokDeWereldRond/", "data-tabs", "timeline", "data-width", "", "data-height", "", "data-small-header", "false", "data-adapt-container-width", "true", "data-hide-cover", "false", "data-show-facepile", "true", 1, "fb-page"], ["cite", "https://www.facebook.com/OnzeTokDeWereldRond/", 1, "fb-xfbml-parse-ignore"], ["href", "https://www.facebook.com/OnzeTokDeWereldRond/"]],
      template: function VolgOnsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sociale media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "blockquote", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Onze tok, de wereld rond");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvbGctb25zL3ZvbGctb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolgOnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-volg-ons',
          templateUrl: './volg-ons.component.html',
          styleUrls: ['./volg-ons.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\p-wil\Desktop\CloneOnzeTok\AngularOnzeTok\OnzeTokDeWereldRond\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map