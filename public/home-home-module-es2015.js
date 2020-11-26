(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./kaart/kaart.component */ "./src/app/home/kaart/kaart.component.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");


































class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_31__["HomeRoutingModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_30__["MatCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__["DragDropModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
        _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_29__["KaartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_31__["HomeRoutingModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_30__["MatCarouselModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__["DragDropModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_31__["HomeRoutingModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_30__["MatCarouselModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__["DragDropModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                    _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_29__["KaartComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map