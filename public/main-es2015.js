(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+tRV":
/*!***********************************************!*\
  !*** ./src/app/home/kaart/kaart.component.ts ***!
  \***********************************************/
/*! exports provided: KaartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaartComponent", function() { return KaartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visitors.service */ "a3DH");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../countries.service */ "Y6iY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");










const _c0 = ["mySvg"];
function KaartComponent_mat_progress_bar_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 9);
} }
function KaartComponent_div_30_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const PB_Element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Foto van ", PB_Element_r4.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", PB_Element_r4.ImageScr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", PB_Element_r4.Name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function KaartComponent_div_30_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KaartComponent_div_30_div_15_div_1_Template, 7, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const PB_Element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", PB_Element_r4.Name);
} }
function KaartComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.zoomIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.zoomOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "zoom_out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.resetZoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_div_30_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.closePBdata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Land: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bezoekers: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KaartComponent_div_30_div_15_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.PbLand, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.PbNumbersVisit, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.aPrikboardList)("ngForTrackBy", ctx_r2.trackByVisitors);
} }
function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
}
class KaartComponent {
    constructor(elementRef, __VisitorsService, __CountriesService, __Router, changeDetectorRef) {
        this.elementRef = elementRef;
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.__Router = __Router;
        this.changeDetectorRef = changeDetectorRef;
        this.ErrorActive = false;
        this.OpenBrikboard = true;
        //zoom
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
        this.aPrikboardList = [
            {
                'Name': '',
                'ImageScr': ''
            }
        ];
        this.PbLand = "";
        this.PbNumbersVisit = "0";
    }
    ngOnInit() {
        this.visitors = this.__VisitorsService.getData();
        if (!this.visitors) {
            this.__Router.navigate(['/']);
        }
    }
    ngAfterViewInit() {
        // initializing the function
        var $this = this;
        var __objElm = this.mySvg.nativeElement;
        __objElm.onload = () => {
            $this.Main(__objElm);
        };
    }
    getDataFromServer() {
        console.log("getDataFromServer");
    }
    Main(objElm) {
        console.log("main");
        let country = this.__CountriesService.getCountry();
        let dataVisitor = this.__VisitorsService.getData().members;
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
        }
        //console.log(country)
        //console.log(dataVisitor)
        this.ShowCountry(country, dataVisitor, objElm.contentDocument);
        for (let i = 0; i < country.length; i++) {
            this.AnimationMap(country[i], dataVisitor, objElm.contentDocument);
        }
    }
    AnimationMap(country, DataFromJs, HTLM) {
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
            var color = '#34642d';
            //console.log($this.GvCountryClick)
            var style_valueV = '';
            var style_value = '';
            //Prikboard
            $this.PbNumbersVisit = String($this.getDataFromCountry(DataFromJs, country));
            $this.PbLand = country;
            $this.OpenBrikboard = true;
            $this.changeDetectorRef.detectChanges();
            //color country 
            if ($this.GvCountryClick !== null || undefined) {
                let LcountryV = $this.GvCountryClick;
                if (LcountryV === undefined) {
                    LcountryV = "france";
                }
                //cut
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
        }
        //variabelen
        var t, state, found;
        //tokken zoeken en weergeven op de kaart
        for (let i = 0; i < DataJSON.length; i++) {
            found = false;
            for (let ii = 0; ii < aAllCountry.length; ii++) {
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
    }
    //Color visit country
    ColorVisitCountry(country, HTML) {
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
    getDataFromCountry(dataInJSON, DataClickCountry) {
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
        const LenPrikboardList = this.aPrikboardList.length;
        this.aPrikboardList.splice(1, LenPrikboardList);
        var numberOfFound = 0;
        var lastID = 0;
        //Create new
        for (let i = 0; i < dataInJSON.length; i++) {
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
    }
    //zoom
    onMouseWheel(e) {
        const currentScale = this.scale;
        const newScale = clamp(this.scale + Math.sign(e.deltaY) / 10.0, 1, 3.0);
        if (currentScale !== newScale) {
            this.translate = this.calculateTranslationToZoomPoint(currentScale, newScale, this.translate, e);
            this.scale = newScale;
            this.updateTransformAnimationState();
        }
        e.preventDefault();
    }
    calculateTranslationToZoomPoint(currentScale, newScale, currentTranslation, e) {
        // kudos to this awesome answer on stackoverflow:
        // https://stackoverflow.com/a/27611642/1814576
        const [eventLayerX, eventLayerY] = this.projectToLayer(e);
        const xAtCurrentScale = (eventLayerX - currentTranslation[0]) / currentScale;
        const yAtCurrentScale = (eventLayerY - currentTranslation[1]) / currentScale;
        const xAtNewScale = xAtCurrentScale * newScale;
        const yAtNewScale = yAtCurrentScale * newScale;
        return [eventLayerX - xAtNewScale, eventLayerY - yAtNewScale];
    }
    projectToLayer(eventClientXY) {
        const layerX = Math.round(eventClientXY.clientX - this.clientX);
        const layerY = Math.round(eventClientXY.clientY - this.clientY);
        return [layerX, layerY];
    }
    get clientX() {
        return this.elementRef.nativeElement.getBoundingClientRect().left;
    }
    get clientY() {
        return this.elementRef.nativeElement.getBoundingClientRect().top;
    }
    updateTransformAnimationState(duration = '.5s') {
        this.transformAnimationState = {
            value: this.scale + this.translate[0] + this.translate[1],
            params: {
                transform: `translate3d(${this.translate[0]}px, ${this.translate[1]}px, 0px) scale(${this.scale})`,
                duration
            }
        };
    }
    trackByVisitors(index, aPrikboardList) {
        console.log("trackByVisitors");
        console.log(index);
        return aPrikboardList.name;
    }
    closePBdata() {
        this.OpenBrikboard = false;
    }
    resetZoom() {
        this.scale = 1;
        this.translate = [0, 0];
        this.updateTransformAnimationState();
    }
    zoomIn() {
        console.log("zoom in");
        this.scale = this.scale + 0.1;
        this.translate = [0, 0];
        this.updateTransformAnimationState();
    }
    zoomOut() {
        console.log("zoom out");
        this.scale = this.scale - 0.1;
        this.translate = [0, 0];
        this.updateTransformAnimationState();
    }
    moveUp() {
        console.log("move up");
        let y = this.translate[0];
        console.log(y);
        this.translate = [
            this.translateOnPanStart[0],
            this.translateOnPanStart[1] = this.translateOnPanStart[1] + 10
        ];
        this.updateTransformAnimationState("0s");
    }
    moveDown() {
        console.log("move up");
        let y = this.translate[0];
        console.log(y);
        this.translate = [
            this.translateOnPanStart[0],
            this.translateOnPanStart[1] = this.translateOnPanStart[1] - 10
        ];
        this.updateTransformAnimationState("0s");
    }
    moveLeft() {
        //console.log("move left")
        this.translate = [
            this.translateOnPanStart[0] = this.translateOnPanStart[0] - 10,
            this.translateOnPanStart[1]
        ];
        this.updateTransformAnimationState("0s");
    }
    moveRight() {
        //console.log("move right")
        this.translate = [
            this.translateOnPanStart[0] = this.translateOnPanStart[0] + 10,
            this.translateOnPanStart[1]
        ];
        this.updateTransformAnimationState("0s");
    }
}
KaartComponent.ɵfac = function KaartComponent_Factory(t) { return new (t || KaartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
KaartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KaartComponent, selectors: [["app-kaart"]], viewQuery: function KaartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySvg = _t.first);
    } }, hostBindings: function KaartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function KaartComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); });
    } }, decls: 31, vars: 3, consts: [["id", "Kaart", 1, "container"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a refresh icon"], [1, "btn", "material-icons", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "grid-container-map"], [1, "grid-item-map"], ["id", "map", "data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("./assets/img/map/World_map.svg"), "type", "image/svg+xml", 1, "map-svg"], ["mySvg", ""], ["class", "grid-item-map-data background-Prikbord", 4, "ngIf"], ["mode", "indeterminate"], [1, "grid-item-map-data", "background-Prikbord"], [1, "btn", "red", "material-icons", 3, "click"], [3, "innerHTML"], ["id", "dataPostMap", "class", "grid-container-map-data-PB", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "dataPostMap", 1, "grid-container-map-data-PB"], ["class", "grid-container-map-data-Image-PB", 4, "ngIf"], [1, "grid-container-map-data-Image-PB"], [1, "grid-item-map-data-PB"], [1, "grid-item-map-data-Image-PB"], [1, "grid-item-map-data-Image-Style-PB", 3, "src", "alt"], [1, "grid-item-map-data-Text-PB"]], template: function KaartComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_11_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_13_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "zoom_out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_15_listener() { return ctx.resetZoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "replay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_17_listener() { return ctx.moveUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "arrow_drop_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_19_listener() { return ctx.moveDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_21_listener() { return ctx.moveLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KaartComponent_Template_button_click_23_listener() { return ctx.moveRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, KaartComponent_mat_progress_bar_25_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "object", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, KaartComponent_div_30_Template, 16, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.visitors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformAnimation", ctx.transformAnimationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OpenBrikboard);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".content-wrapper[_ngcontent-%COMP%] {\r\n  transform-origin: 0 0 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.map-svg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n.grid-container-map[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  background-color: rgb(129, 169, 195);\r\n  grid-template-columns: auto auto;\r\n}\r\n.grid-item-map[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n  transform-origin: 0 0 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n\r\n}\r\n.grid-item-map-data[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n}\r\n\r\n.grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: auto auto;\r\n  grid-row-gap: 5px;\r\n  grid-column-gap: 5px;\r\n  padding: 10px;\r\n}\r\n.grid-item-map-data-PB[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 10px;\r\n  font-size: 30px;\r\n  border-radius: 5px;\r\n  width: 200px;\r\n}\r\n.grid-container-map-data-Image-PB[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: auto auto;\r\n  padding: 10px;\r\n}\r\n.grid-item-map-data-Image-PB[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 5px;\r\n}\r\n.grid-item-map-data-Image-Style-PB[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.grid-item-map-data-Text-PB[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  font-family: ChildWriting !important;\r\n  font-weight: bold;\r\n}\r\n.container-prikbord-image-text[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.centered-prikbord-image-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n@media screen and (min-width: 280px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto;\r\n    max-width: 150px;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 528px) {\r\n  \r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n    max-width: 150px;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    padding: 30px;\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 500px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 628px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 835px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 1252px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: 70% 30%;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\r\n@media screen and (min-width: 1681px) {\r\n  .grid-container-map[_ngcontent-%COMP%] {\r\n    grid-template-columns: 70% 30%;\r\n  }\r\n\r\n  .grid-container-map-data-PB[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    grid-template-columns: auto auto auto auto auto auto;\r\n    grid-column-gap: 5px;\r\n\r\n  }\r\n\r\n  .grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n\r\n  }\r\n\r\n  .grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBS0E7RUFDRTtJQUNFLDJCQUEyQjs7RUFFN0I7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUY7QUFFQTtFQUNFOzs7T0FHSzs7RUFFTDtJQUNFLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUY7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxvQkFBb0I7O0VBRXRCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsb0JBQW9COztFQUV0Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyxvQkFBb0I7O0VBRXRCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxvREFBb0Q7SUFDcEQsb0JBQW9COztFQUV0Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJrYWFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyptYXAqL1xyXG4uY29udGVudC13cmFwcGVyIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYXAtc3ZnIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTY5LCAxOTUpO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLW1hcCB7XHJcbiAgLypwYWRkaW5nOiAyMHB4OyovXHJcbiAgLypmb250LXNpemU6IDMwcHg7Ki9cclxuICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tbWFwLWRhdGEge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyptYXAgZGF0YSovXHJcbi5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICBncmlkLXJvdy1nYXA6IDVweDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLW1hcC1kYXRhLVBCIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItbWFwLWRhdGEtSW1hZ2UtUEIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tbWFwLWRhdGEtSW1hZ2UtUEIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tbWFwLWRhdGEtSW1hZ2UtU3R5bGUtUEIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLW1hcC1kYXRhLVRleHQtUEIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IENoaWxkV3JpdGluZyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXByaWtib3JkLWltYWdlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2VudGVyZWQtcHJpa2JvcmQtaW1hZ2UtdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjgwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItbWFwLWRhdGEtUEIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1QcmlrYm9yZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVByaWtib3JkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyOHB4KSB7XHJcbiAgLyogLmdyaWQtY29udGFpbmVyLW1hcCB7XHJcbiAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bzsgXHJcbiAgICAgICAgIFxyXG4gICAgIH0qL1xyXG5cclxuICAuZ3JpZC1jb250YWluZXItbWFwLWRhdGEtUEIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUHJpa2JvcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxlIHtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVByaWtib3JkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjI4cHgpIHtcclxuICAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QcmlrYm9yZCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2UtU3R5bGUge1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzNXB4KSB7XHJcbiAgLmdyaWQtY29udGFpbmVyLW1hcCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXItbWFwLWRhdGEtUEIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVByaWtib3JkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTJweCkge1xyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLW1hcC1kYXRhLVBCIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyLVByaWtib3JkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUHJpa2JvcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxlIHtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXItbWFwIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lci1QcmlrYm9yZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QcmlrYm9yZCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaXRlbS1QQi1JbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0tUEItSW1hZ2UtU3R5bGUge1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transformAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: '{{transform}}' }), { params: { transform: 'scale(1)', duration: '0s' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{duration}} ease'))])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KaartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kaart',
                templateUrl: './kaart.component.html',
                styleUrls: ['./kaart.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transformAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: '{{transform}}' }), { params: { transform: 'scale(1)', duration: '0s' } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{duration}} ease'))])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"] }, { type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { mySvg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mySvg']
        }], onMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousewheel', ['$event']]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\p-wil\Desktop\CloneOnzeTok\AngularOnzeTok\OnzeTokDeWereldRond\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitors.service */ "a3DH");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countries.service */ "Y6iY");
/* harmony import */ var _total_dist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../total-dist.service */ "qCVk");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general.service */ "j8bs");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngmodule/material-carousel */ "q5t6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");









function HomeComponent_mat_carousel_slide_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-carousel-slide", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);
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
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 7, consts: [["timings", "250ms ease-in", "interval", "5000", "color", "accent", "maxWidth", "auto", "proportion", "25", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""], [2, "width", "100%", "height", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center"], [2, "padding", "auto", "color", "white"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_mat_carousel_slide_3_Template, 5, 3, "mat-carousel-slide", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselSlideComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }, { type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"] }, { type: _total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"] }, { type: _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"] }]; }, null); })();


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "R89x");
/* harmony import */ var _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kaart/kaart.component */ "+tRV");
/* harmony import */ var _page_load_page_load_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-load/page-load.component */ "dBxa");
/* harmony import */ var _kaart_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kaart-resolver.service */ "Pxgy");










const HomeRoutes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                children: [
                    {
                        path: 'kaart',
                        component: _kaart_kaart_component__WEBPACK_IMPORTED_MODULE_5__["KaartComponent"],
                    },
                    {
                        path: '',
                        component: _page_load_page_load_component__WEBPACK_IMPORTED_MODULE_6__["PageLoadComponent"],
                        resolve: {
                            object: _kaart_resolver_service__WEBPACK_IMPORTED_MODULE_7__["KaartResolverService"]
                        }
                    }
                ]
            }
        ]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


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

/***/ "Pxgy":
/*!************************************************!*\
  !*** ./src/app/home/kaart-resolver.service.ts ***!
  \************************************************/
/*! exports provided: KaartResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaartResolverService", function() { return KaartResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././visitors.service */ "a3DH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class KaartResolverService {
    constructor(__VisitorsService, __Router) {
        this.__VisitorsService = __VisitorsService;
        this.__Router = __Router;
    }
    resolve(route, state) {
        var $this = this;
        this.__VisitorsService.getDataFromHttp().then(function (response) {
            console.log("Resolver, data get");
            $this.__Router.navigate(['/kaart']);
        }, function (error) {
            console.log("Resolver error: ", error);
        });
    }
}
KaartResolverService.ɵfac = function KaartResolverService_Factory(t) { return new (t || KaartResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
KaartResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KaartResolverService, factory: KaartResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KaartResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "R89x":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visitors.service */ "a3DH");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../countries.service */ "Y6iY");
/* harmony import */ var _total_dist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../total-dist.service */ "qCVk");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general.service */ "j8bs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");














function DashboardComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 20);
} }
class DashboardComponent {
    constructor(__VisitorsService, __CountriesService, __TotalDistService, __GeneralService) {
        this.__VisitorsService = __VisitorsService;
        this.__CountriesService = __CountriesService;
        this.__TotalDistService = __TotalDistService;
        this.__GeneralService = __GeneralService;
        this.SelectYear = ["alles", 2020, 2019, 2018];
        this.selectedYear = this.__GeneralService.getFullYear();
    }
    ngOnInit() {
        this.LoadData = false;
        let currentYear = this.__GeneralService.getFullYear();
        //debug
        //console.log(currentYear)
        //Get data
        var $this = this;
        this.__TotalDistService.getDataFromHttp(currentYear).then(function (response) {
            $this.data = response;
            $this.LoadData = true;
            //console.log(response)
        }, function (error) {
            $this.LoadData = false;
            console.log("error: ", error);
        });
    }
    changeData() {
        this.LoadData = false;
        console.log(this.selectedYear);
        //Get data
        var $this = this;
        this.__TotalDistService.getDataFromHttp(this.selectedYear).then(function (response) {
            $this.data = response;
            $this.LoadData = true;
            //console.log(response)
        }, function (error) {
            $this.LoadData = false;
            console.log("error: ", error);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 53, vars: 8, consts: [["mode", "indeterminate", 4, "ngIf"], ["id", "TotaleAfstand", 1, "container"], [1, "grid-container-home"], [1, "grid-item-home"], [1, "grid-container-KM"], [1, "grid-item-KM"], ["id", "km100000"], ["id", "km10000"], ["id", "km1000"], ["id", "km100"], ["id", "km10"], ["id", "km1"], [1, "row"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "alles"], ["value", "2019"], ["value", "2020"], ["value", "2021"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon", 3, "click"], ["mode", "indeterminate"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wenst u de afstand te zien van een ander jaar? Maak een keuze:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Kies een jaartal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_mat_select_valueChange_40_listener($event) { return ctx.selectedYear = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_49_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "router-outlet");
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"]], styles: [".grid-container-home[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    padding: 10px;\r\n  }\r\n.grid-item-home[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n@media only screen and (max-width: 900px) {\r\n    .grid-container-home[_ngcontent-%COMP%] {\r\n        grid-template-columns: auto;\r\n    }\r\n  }\r\n\r\n.grid-container-KM[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto auto auto;\r\n    background-color: #111;\r\n    padding: 10px;\r\n}\r\n.grid-item-KM[_ngcontent-%COMP%] {\r\n    background-color: rgba(75, 75, 79, 1);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    font-family: digital7;\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n@media only screen and (max-width: 376px) {\r\n    .grid-item-KM[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n        font-size: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLGVBQWU7QUFDZjtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsYUFBYTtFQUNmO0FBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0U7UUFDSSwyQkFBMkI7SUFDL0I7RUFDRjtBQUdGLGFBQWE7QUFDYjtJQUNJLGFBQWE7SUFDYix5REFBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLypLTSB2YW4gaHVpcyAqL1xyXG4uZ3JpZC1jb250YWluZXItaG9tZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLWl0ZW0taG9tZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuZ3JpZC1jb250YWluZXItaG9tZSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbi8qS00gdGVsbGVyICovXHJcbi5ncmlkLWNvbnRhaW5lci1LTSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tS00ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzUsIDc5LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBkaWdpdGFsNztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XHJcbiAgICAuZ3JpZC1pdGVtLUtNIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }, { type: _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"] }, { type: _total_dist_service__WEBPACK_IMPORTED_MODULE_3__["TotalDistService"] }, { type: _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors.service */ "a3DH");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries.service */ "Y6iY");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");








const _c0 = ["mySvg"];
const _c1 = function () { return ["/"]; };
const _c2 = function () { return ["/Prikbord"]; };
const _c3 = function () { return ["/TekenOnzeTok"]; };
const _c4 = function () { return ["/OverOns"]; };
const _c5 = function () { return ["/kaart"]; };
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
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySvg = _t.first);
    } }, decls: 86, vars: 19, consts: [["color", "primary", "SideClass", "navbar navbar-expand-lg navbar-dark orange accent-3 ie-nav fixed-top", 3, "containerInside"], ["href", "", 1, "logo", "navbar-brand"], [1, "navbar-nav", "mr-auto"], ["mdbWavesEffect", "", 1, "nav-item", "active", "waves-light"], ["routerLinkActive", "active", "mat-button", "", 1, "nav-link", 3, "routerLink"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light"], ["href", "#", "routerLinkActive", "active", "mat-button", "", 1, "nav-link", 3, "routerLink"], [1, "navbar-nav", "nav-flex-icons"], [1, "nav-link"], ["fab", "", "icon", "facebook-f"], ["fab", "", "icon", "twitter"], ["fab", "", "icon", "instagram"], [2, "min-height", "1500px"], [1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-2"], [1, "col-md-3", "mb-md-0", "mb-3"], ["width", "200"], ["href", "https://www.facebook.com/noordzeegouw/", "target", "new"], ["src", "./assets/img/fb.png"], ["href", " https://www.instagram.com/ksanoordzeegouw", "target", "new"], ["src", "./assets/img/instagram.png"], ["src", "./assets/img/LOGOKSA.png", "width", "90%"], [1, "list-unstyled"], ["href", "#", "mat-button", "", 3, "routerLink"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://www.ksa.be/werkkringen/ksa-noordzeegouw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prikbord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TekenOnzeTok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "OverOns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mdb-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mdb-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mdb-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Onze tok de wereld rond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " KSA Noordzeegouw vzw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Dwarsweg 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 8560 Gullegem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 056 40 48 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " info@ksanoordzeegouw.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Volg ons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Kaart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Prikbord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "TekenOnzeTok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "OverOns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "KSA NZG WERKGROEP MULTIMEDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FabDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".example-icon[_ngcontent-%COMP%] {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAuZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAiXX0= */"] });
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

/***/ "TB6u":
/*!************************************************************!*\
  !*** ./src/app/teken-onze-tok/teken-onze-tok.component.ts ***!
  \************************************************************/
/*! exports provided: TekenOnzeTokComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TekenOnzeTokComponent", function() { return TekenOnzeTokComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");



class TekenOnzeTokComponent {
    constructor() { }
    ngOnInit() {
    }
}
TekenOnzeTokComponent.ɵfac = function TekenOnzeTokComponent_Factory(t) { return new (t || TekenOnzeTokComponent)(); };
TekenOnzeTokComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TekenOnzeTokComponent, selectors: [["app-teken-onze-tok"]], decls: 32, vars: 0, consts: [["color", "accent", 1, "z-depth-0"], ["id", "TekenOnzeTok", 1, "container"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6"], ["height", "400", "width", "500", "controls", ""], ["src", "video/Tok-Deel1.mp4", "type", "video/mp4", 1, "active"], ["src", "video/Tok-Deel2.mp4", "type", "video/mp4"], ["color", "primary", "href", "/downloadSjabloon", "role", "button", "target", "new", 1, "btn", "blue"]], template: function TekenOnzeTokComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["video[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  width: 500px\r\n}\r\n\r\n@media only screen and (max-width: 1204px) {\r\n    video[_ngcontent-%COMP%] {\r\n        height: 400px;\r\n        width: 350px\r\n      }\r\n}\r\n\r\n@media only screen and (max-width: 482px) {\r\n    video[_ngcontent-%COMP%] {\r\n        height: 400px;\r\n        width: 300px\r\n      }\r\n}\r\n\r\n@media only screen and (max-width: 300px) {\r\n    video[_ngcontent-%COMP%] {\r\n        height: 400px;\r\n        width: 200px\r\n      }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRla2VuLW9uemUtdG9rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2I7QUFDRjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiO01BQ0Y7QUFDTjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiO01BQ0Y7QUFDTjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiO01BQ0Y7QUFDTiIsImZpbGUiOiJ0ZWtlbi1vbnplLXRvay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDUwMHB4XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwNHB4KSB7XHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHhcclxuICAgICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgycHgpIHtcclxuICAgIHZpZGVvIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweFxyXG4gICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgIHZpZGVvIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweFxyXG4gICAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TekenOnzeTokComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teken-onze-tok',
                templateUrl: './teken-onze-tok.component.html',
                styleUrls: ['./teken-onze-tok.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y6iY":
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


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

/***/ "YP1z":
/*!************************************************!*\
  !*** ./src/app/over-ons/over-ons.component.ts ***!
  \************************************************/
/*! exports provided: OverOnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverOnsComponent", function() { return OverOnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../volg-ons/volg-ons.component */ "lfKi");




class OverOnsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverOnsComponent.ɵfac = function OverOnsComponent_Factory(t) { return new (t || OverOnsComponent)(); };
OverOnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverOnsComponent, selectors: [["app-over-ons"]], decls: 18, vars: 0, consts: [["color", "accent", 1, "z-depth-0"], ["id", "LeesMeer", 1, "container"]], template: function OverOnsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_2__["VolgOnsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVyLW9ucy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverOnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-over-ons',
                templateUrl: './over-ons.component.html',
                styleUrls: ['./over-ons.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./prikbord/prikbord.component */ "npFn");
/* harmony import */ var _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./over-ons/over-ons.component */ "YP1z");
/* harmony import */ var _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./teken-onze-tok/teken-onze-tok.component */ "TB6u");
/* harmony import */ var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./volg-ons/volg-ons.component */ "lfKi");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngmodule/material-carousel */ "q5t6");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./home/home-routing.module */ "A3+G");













































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["IconsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["MDBBootstrapModule"].forRoot(),
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__["MatCarouselModule"].forRoot(),
            _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__["HomeRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_31__["PrikbordComponent"],
        _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_32__["OverOnsComponent"],
        _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_33__["TekenOnzeTokComponent"],
        _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_34__["VolgOnsComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_35__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["WavesModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["IconsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["MDBRootModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__["MatCarouselModule"], _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_31__["PrikbordComponent"],
                    _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_32__["OverOnsComponent"],
                    _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_33__["TekenOnzeTokComponent"],
                    _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_34__["VolgOnsComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_35__["PageNotFoundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["WavesModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["IconsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_37__["MDBBootstrapModule"].forRoot(),
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_36__["MatCarouselModule"].forRoot(),
                    _home_home_routing_module__WEBPACK_IMPORTED_MODULE_39__["HomeRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a3DH":
/*!*************************************!*\
  !*** ./src/app/visitors.service.ts ***!
  \*************************************/
/*! exports provided: VisitorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsService", function() { return VisitorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class VisitorsService {
    constructor(http) {
        this.http = http;
    }
    //http://localhost:3000
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

/***/ "dBxa":
/*!*******************************************************!*\
  !*** ./src/app/home/page-load/page-load.component.ts ***!
  \*******************************************************/
/*! exports provided: PageLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoadComponent", function() { return PageLoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PageLoadComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLoadComponent.ɵfac = function PageLoadComponent_Factory(t) { return new (t || PageLoadComponent)(); };
PageLoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoadComponent, selectors: [["app-page-load"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function PageLoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Laden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-load',
                templateUrl: './page-load.component.html',
                styleUrls: ['./page-load.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j8bs":
/*!************************************!*\
  !*** ./src/app/general.service.ts ***!
  \************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class GeneralService {
    constructor() { }
    getFullYear() {
        let full = new Date();
        var FullYear = full.getFullYear();
        //console.log(FullYear)
        return FullYear;
    }
    myBrowser() {
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return 'Chrome';
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return 'Firefox';
            // }else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
            // return 'IE'; 
        }
        else {
            return 'unknown';
        }
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

/***/ "lfKi":
/*!************************************************!*\
  !*** ./src/app/volg-ons/volg-ons.component.ts ***!
  \************************************************/
/*! exports provided: VolgOnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolgOnsComponent", function() { return VolgOnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class VolgOnsComponent {
    constructor() { }
    ngOnInit() {
    }
}
VolgOnsComponent.ɵfac = function VolgOnsComponent_Factory(t) { return new (t || VolgOnsComponent)(); };
VolgOnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VolgOnsComponent, selectors: [["app-volg-ons"]], decls: 13, vars: 0, consts: [["ng-controller", "socialeMedia"], [1, "container"], ["id", "fb-root"], ["data-href", "https://www.facebook.com/OnzeTokDeWereldRond/", "data-tabs", "timeline", "data-width", "", "data-height", "", "data-small-header", "false", "data-adapt-container-width", "true", "data-hide-cover", "false", "data-show-facepile", "true", 1, "fb-page"], ["cite", "https://www.facebook.com/OnzeTokDeWereldRond/", 1, "fb-xfbml-parse-ignore"], ["href", "https://www.facebook.com/OnzeTokDeWereldRond/"]], template: function VolgOnsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2xnLW9ucy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolgOnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-volg-ons',
                templateUrl: './volg-ons.component.html',
                styleUrls: ['./volg-ons.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "npFn":
/*!************************************************!*\
  !*** ./src/app/prikbord/prikbord.component.ts ***!
  \************************************************/
/*! exports provided: PrikbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrikbordComponent", function() { return PrikbordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitors.service */ "a3DH");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");






function PrikbordComponent_div_9_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
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
PrikbordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrikbordComponent, selectors: [["app-prikbord"]], decls: 10, vars: 1, consts: [[1, "background-Prikbord"], ["color", "accent", 1, "z-depth-0"], [1, "container"], [1, "row"], ["class", "col-12 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-4"], ["mdbWavesEffect", "", 1, "view", "rgba-white-slight", "waves-light"], ["alt", "Card image cap", 3, "src"], [1, "mask"]], template: function PrikbordComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardImageComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardTextComponent"]], styles: [".grid-container-Prikbord[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto auto;\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 10px;\r\n    padding: 10px;  \r\n}\r\n\r\n.PrikboardMapEmty[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n.grid-item-Prikbord[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(1deg);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.grid-item-Prikbord[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 0px;\r\n    font-size: 30px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.grid-container-PB-Image[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto 60px;\r\n    padding: 10px;\r\n}\r\n\r\n.grid-item-PB-Image[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 5px;\r\n    height: 150px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.grid-item-PB-Image-Style[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.grid-item-PB-Text[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    font-family: ChildWriting !important;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWtib3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVo7SUFDSSxhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2QkciLCJmaWxlIjoicHJpa2JvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlByaWtib3JkICovXHJcblxyXG4uZ3JpZC1jb250YWluZXItUHJpa2JvcmQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbn1cclxuXHJcbi5QcmlrYm9hcmRNYXBFbXR5IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmdyaWQtaXRlbS1QcmlrYm9yZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tUHJpa2JvcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lci1QQi1JbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtLVBCLUltYWdlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmdyaWQtaXRlbS1QQi1JbWFnZS1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tUEItVGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IENoaWxkV3JpdGluZyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuLypAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODBweCkgIHtcclxuICAgIC5ncmlkLWNvbnRhaW5lci1tYXAge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bzsgXHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lci1tYXAtZGF0YS1QQiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lci1QcmlrYm9yZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWl0ZW0tUHJpa2JvcmR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1pdGVtLVBCLUltYWdle1xyXG4gICAgICAgIG1heC13aWR0aDogMTgwcHg7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1pdGVtLVBCLUltYWdlLVN0eWxle1xyXG4gICAgICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufSAqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrikbordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prikbord',
                templateUrl: './prikbord.component.html',
                styleUrls: ['./prikbord.component.css']
            }]
    }], function () { return [{ type: _visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"] }]; }, null); })();


/***/ }),

/***/ "qCVk":
/*!***************************************!*\
  !*** ./src/app/total-dist.service.ts ***!
  \***************************************/
/*! exports provided: TotalDistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalDistService", function() { return TotalDistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class TotalDistService {
    constructor(http) {
        this.http = http;
    }
    //http://localhost:3000/
    getDataAsyn(urlYear) {
        return new Promise(resolve => {
            this.http.get("/TotalDist/" + urlYear)
                .subscribe(data => {
                //console.log(data);
                this.dataYear = data;
                resolve(data);
                //return data; 
            });
        });
    }
    getDataFromHttp(urlYear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (urlYear == "alles") {
                urlYear = 0;
            }
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

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");



class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 9, vars: 0, consts: [["color", "accent", 1, "z-depth-0"], [1, "container"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Paginga niet gevonden!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pagina niet gevonden!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prikbord/prikbord.component */ "npFn");
/* harmony import */ var _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./over-ons/over-ons.component */ "YP1z");
/* harmony import */ var _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teken-onze-tok/teken-onze-tok.component */ "TB6u");
/* harmony import */ var _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./volg-ons/volg-ons.component */ "lfKi");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");









const appRoutes = [
    { path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule),
        data: { preload: false }
    },
    { path: 'OverOns', component: _over_ons_over_ons_component__WEBPACK_IMPORTED_MODULE_3__["OverOnsComponent"] },
    { path: 'Prikbord', component: _prikbord_prikbord_component__WEBPACK_IMPORTED_MODULE_2__["PrikbordComponent"] },
    { path: 'TekenOnzeTok', component: _teken_onze_tok_teken_onze_tok_component__WEBPACK_IMPORTED_MODULE_4__["TekenOnzeTokComponent"] },
    { path: 'VolgOns', component: _volg_ons_volg_ons_component__WEBPACK_IMPORTED_MODULE_5__["VolgOnsComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                enableTracing: false,
                relativeLinkResolution: 'legacy'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                        enableTracing: false,
                        relativeLinkResolution: 'legacy'
                    })],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




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
//# sourceMappingURL=main-es2015.js.map