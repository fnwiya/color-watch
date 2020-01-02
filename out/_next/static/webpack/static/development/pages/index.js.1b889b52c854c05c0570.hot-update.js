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
  var bg_r = Math.round(255 / h);
  var bg_g = Math.round(255 / m);
  var bg_b = Math.round(255 / s);
  var font_r = 255 - bg_r;
  var font_g = 255 - bg_g;
  var font_b = 255 - bg_b;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]) + " " + "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]) + " " + "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "$", timer.toLocaleTimeString()), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1756970469", [bg_r, bg_g, bg_b, font_r, font_g, font_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "(rgb($", font_r, ", $", font_g, ", $", font_b, "))")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1756970469",
    dynamic: [bg_r, bg_g, bg_b, font_r, font_g, font_b],
    __self: this
  }, ".bg.__jsx-style-dynamic-selector{height:100vh;width:100vw;background-color:rgb(".concat(bg_r, ",").concat(bg_g, ",").concat(bg_b, ");display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.time.__jsx-style-dynamic-selector{text-align:center;color:rgb(").concat(font_r, ",").concat(font_g, ",").concat(font_b, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdW1peWEua29obm8vcmVwb3MvZ2l0aHViLmNvbS9mbndpeWEvY29sb3Itd2F0Y2gvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHd0IsQUFRSyxhQVBOLEtBUXdGLE9BUFcsMkZBUWpILGtCQVBlLDBFQUNNLDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvZnVtaXlhLmtvaG5vL3JlcG9zL2dpdGh1Yi5jb20vZm53aXlhL2NvbG9yLXdhdGNoL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgdGltZXIgPSB1c2VUaW1lcihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgaCA9IHRpbWVyLmdldEhvdXJzKCk7XG4gIGNvbnN0IG0gPSB0aW1lci5nZXRNaW51dGVzKCk7XG4gIGNvbnN0IHMgPSB0aW1lci5nZXRTZWNvbmRzKCk7XG4gIGNvbnN0IGJnX3IgPSBNYXRoLnJvdW5kKDI1NSAvIGgpO1xuICBjb25zdCBiZ19nID0gTWF0aC5yb3VuZCgyNTUgLyBtKTtcbiAgY29uc3QgYmdfYiA9IE1hdGgucm91bmQoMjU1IC8gcyk7XG4gIGNvbnN0IGZvbnRfciA9IDI1NSAtIGJnX3I7XG4gIGNvbnN0IGZvbnRfZyA9IDI1NSAtIGJnX2c7XG4gIGNvbnN0IGZvbnRfYiA9IDI1NSAtIGJnX2I7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgPGRpdj4ke3RpbWVyLnRvTG9jYWxlVGltZVN0cmluZygpfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIChyZ2IoJHtmb250X3J9LCAke2ZvbnRfZ30sICR7Zm9udF9ifSkpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKCR7Ymdfcn0sICR7YmdfZ30sICR7YmdfYn0pO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGltZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiByZ2IoJHtmb250X3J9LCAke2ZvbnRfZ30sICR7Zm9udF9ifSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVRpbWVyKGN1cnJlbnREYXRlKSB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKGN1cnJlbnREYXRlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdGltZXJJRCA9IHNldEludGVydmFsKCgpID0+IHRpY2soKSwgMTAwMCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVySUQpO1xuICAgIH07XG4gIH0pO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIHNldERhdGUobmV3IERhdGUoKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/fumiya.kohno/repos/github.com/fnwiya/color-watch/pages/index.jsx */")));
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
//# sourceMappingURL=index.js.1b889b52c854c05c0570.hot-update.js.map