webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/fumiya.kohno/repos/github.com/fnwiya/color-watch/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Home = function Home() {
  var timer = useTimer(new Date());
  var h = timer.getHours();
  var m = timer.getMinutes();
  var s = timer.getSeconds();
  var bg_1 = h === 0 ? 0 : Math.round(255 / h);
  var bg_2 = m === 0 ? 0 : Math.round(255 / m);
  var bg_3 = h === 0 ? 0 : Math.round(255 / s);
  var colors = [bg_1, bg_2, bg_3];
  var bg_r = colors[Math.floor(Math.random() * colors.length)];
  var bg_g = colors[Math.floor(Math.random() * colors.length)];
  var bg_b = colors[Math.floor(Math.random() * colors.length)];
  var font_r = 255 - bg_r;
  var font_g = 255 - bg_g;
  var font_b = 255 - bg_b;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]) + " " + "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]) + " " + "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "$", timer.toLocaleTimeString()), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "(rgb($", bg_r, ", $", bg_g, ", $", bg_b, "))")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1756970469",
    dynamic: [bg_r, bg_g, bg_b, font_r, font_g, font_b],
    __self: this
  }, ".bg.__jsx-style-dynamic-selector{height:100vh;width:100vw;background-color:rgb(".concat(bg_r, ",").concat(bg_g, ",").concat(bg_b, ");display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.time.__jsx-style-dynamic-selector{text-align:center;color:rgb(").concat(font_r, ",").concat(font_g, ",").concat(font_b, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdW1peWEua29obm8vcmVwb3MvZ2l0aHViLmNvbS9mbndpeWEvY29sb3Itd2F0Y2gvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHd0IsQUFRSyxhQVBOLEtBUXdGLE9BUFcsMkZBUWpILGtCQVBlLDBFQUNNLDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvZnVtaXlhLmtvaG5vL3JlcG9zL2dpdGh1Yi5jb20vZm53aXlhL2NvbG9yLXdhdGNoL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgdGltZXIgPSB1c2VUaW1lcihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgaCA9IHRpbWVyLmdldEhvdXJzKCk7XG4gIGNvbnN0IG0gPSB0aW1lci5nZXRNaW51dGVzKCk7XG4gIGNvbnN0IHMgPSB0aW1lci5nZXRTZWNvbmRzKCk7XG4gIGNvbnN0IGJnXzEgPSBoID09PSAwID8gMCA6IE1hdGgucm91bmQoMjU1IC8gaCk7XG4gIGNvbnN0IGJnXzIgPSBtID09PSAwID8gMCA6IE1hdGgucm91bmQoMjU1IC8gbSk7XG4gIGNvbnN0IGJnXzMgPSBoID09PSAwID8gMCA6IE1hdGgucm91bmQoMjU1IC8gcyk7XG4gIGNvbnN0IGNvbG9ycyA9IFtiZ18xLCBiZ18yLCBiZ18zXTtcbiAgY29uc3QgYmdfciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gIGNvbnN0IGJnX2cgPSBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICBjb25zdCBiZ19iID0gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgY29uc3QgZm9udF9yID0gMjU1IC0gYmdfcjtcbiAgY29uc3QgZm9udF9nID0gMjU1IC0gYmdfZztcbiAgY29uc3QgZm9udF9iID0gMjU1IC0gYmdfYjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxuICAgICAgICA8ZGl2PiR7dGltZXIudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgKHJnYigke2JnX3J9LCAke2JnX2d9LCAke2JnX2J9KSlcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJnIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoJHtiZ19yfSwgJHtiZ19nfSwgJHtiZ19ifSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50aW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHJnYigke2ZvbnRfcn0sICR7Zm9udF9nfSwgJHtmb250X2J9KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlVGltZXIoY3VycmVudERhdGUpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gUmVhY3QudXNlU3RhdGUoY3VycmVudERhdGUpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB0aW1lcklEID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGljaygpLCAxMDAwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJRCk7XG4gICAgfTtcbiAgfSk7XG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/fumiya.kohno/repos/github.com/fnwiya/color-watch/pages/index.jsx */")));
};

function useTimer(currentDate) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(currentDate),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var timerID = setInterval(function () {
      return tick();
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return date;
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8405efb9b03f2abe77fd.hot-update.js.map