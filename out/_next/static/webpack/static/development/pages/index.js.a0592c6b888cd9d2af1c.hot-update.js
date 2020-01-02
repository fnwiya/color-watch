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
  var r = Math.round(255 / h);
  var g = Math.round(255 / m);
  var b = Math.round(255 / s);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3942964386", [r, g, b]]]) + " " + "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3942964386",
    dynamic: [r, g, b],
    __self: this
  }, ".bg.__jsx-style-dynamic-selector{height:100vh;width:100vw;background-color:rgb(".concat(r, ",").concat(g, ",").concat(b, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdW1peWEua29obm8vcmVwb3MvZ2l0aHViLmNvbS9mbndpeWEvY29sb3Itd2F0Y2gvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUd3QixhQUNELFlBQ21HLDZHQUNqSCIsImZpbGUiOiIvVXNlcnMvZnVtaXlhLmtvaG5vL3JlcG9zL2dpdGh1Yi5jb20vZm53aXlhL2NvbG9yLXdhdGNoL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgdGltZXIgPSB1c2VUaW1lcihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgaCA9IHRpbWVyLmdldEhvdXJzKCk7XG4gIGNvbnN0IG0gPSB0aW1lci5nZXRNaW51dGVzKCk7XG4gIGNvbnN0IHMgPSB0aW1lci5nZXRTZWNvbmRzKCk7XG4gIGNvbnN0IHIgPSBNYXRoLnJvdW5kKDI1NSAvIGgpO1xuICBjb25zdCBnID0gTWF0aC5yb3VuZCgyNTUgLyBtKTtcbiAgY29uc3QgYiA9IE1hdGgucm91bmQoMjU1IC8gcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKCR7cn0sICR7Z30sICR7Yn0pO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VUaW1lcihjdXJyZW50RGF0ZSkge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShjdXJyZW50RGF0ZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHRpbWVySUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aWNrKCksIDEwMDApO1xuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklEKTtcbiAgICB9O1xuICB9KTtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/fumiya.kohno/repos/github.com/fnwiya/color-watch/pages/index.jsx */")));
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
//# sourceMappingURL=index.js.a0592c6b888cd9d2af1c.hot-update.js.map