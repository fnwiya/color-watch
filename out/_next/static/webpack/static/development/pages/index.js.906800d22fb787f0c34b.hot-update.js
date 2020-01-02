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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350363180", [bg_r, bg_g, bg_b]]]) + " " + "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350363180", [bg_r, bg_g, bg_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350363180", [bg_r, bg_g, bg_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "$", timer.toLocaleTimeString()), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1350363180", [bg_r, bg_g, bg_b]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "(rgb($", font_r, ", $", font_g, ", $", font_b, "))")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1350363180",
    dynamic: [bg_r, bg_g, bg_b],
    __self: this
  }, ".bg.__jsx-style-dynamic-selector{height:100vh;width:100vw;background-color:rgb(".concat(bg_r, ",").concat(bg_g, ",").concat(bg_b, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdW1peWEua29obm8vcmVwb3MvZ2l0aHViLmNvbS9mbndpeWEvY29sb3Itd2F0Y2gvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHd0IsYUFDRCxZQUNtRyw2R0FDakgiLCJmaWxlIjoiL1VzZXJzL2Z1bWl5YS5rb2huby9yZXBvcy9naXRodWIuY29tL2Zud2l5YS9jb2xvci13YXRjaC9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVyID0gdXNlVGltZXIobmV3IERhdGUoKSk7XG4gIGNvbnN0IGggPSB0aW1lci5nZXRIb3VycygpO1xuICBjb25zdCBtID0gdGltZXIuZ2V0TWludXRlcygpO1xuICBjb25zdCBzID0gdGltZXIuZ2V0U2Vjb25kcygpO1xuICBjb25zdCBiZ19yID0gTWF0aC5yb3VuZCgyNTUgLyBoKTtcbiAgY29uc3QgYmdfZyA9IE1hdGgucm91bmQoMjU1IC8gbSk7XG4gIGNvbnN0IGJnX2IgPSBNYXRoLnJvdW5kKDI1NSAvIHMpO1xuICBjb25zdCBmb250X3IgPSAyNTUgLSBiZ19yO1xuICBjb25zdCBmb250X2cgPSAyNTUgLSBiZ19nO1xuICBjb25zdCBmb250X2IgPSAyNTUgLSBiZ19iO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZ1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj4ke3RpbWVyLnRvTG9jYWxlVGltZVN0cmluZygpfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIChyZ2IoJHtmb250X3J9LCAke2ZvbnRfZ30sICR7Zm9udF9ifSkpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKCR7Ymdfcn0sICR7YmdfZ30sICR7YmdfYn0pO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VUaW1lcihjdXJyZW50RGF0ZSkge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShjdXJyZW50RGF0ZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHRpbWVySUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aWNrKCksIDEwMDApO1xuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklEKTtcbiAgICB9O1xuICB9KTtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/fumiya.kohno/repos/github.com/fnwiya/color-watch/pages/index.jsx */")));
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
//# sourceMappingURL=index.js.906800d22fb787f0c34b.hot-update.js.map