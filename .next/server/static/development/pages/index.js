module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/william.brinkert/Desktop/Code/Personal_Projects/faunadb-demo/components/TableRow.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  creditCard,
  firstName,
  loading,
  lastName,
  telephone
}) => __jsx("div", {
  className: "jsx-4247137942" + " " + "table table-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-4247137942" + " " + ((loading ? 'loading' : '') || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, firstName, " ", lastName), __jsx("p", {
  className: "jsx-4247137942" + " " + `telephone ${loading ? 'loading' : ''}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, telephone), __jsx("p", {
  className: "jsx-4247137942" + " " + `credit-card ${loading ? 'loading' : ''}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, creditCard && __jsx("img", {
  src: "/static/icons/visa.svg",
  className: "jsx-4247137942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), creditCard), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4247137942",
  __self: undefined
}, ".table.jsx-4247137942{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:grid;grid-auto-flow:column;grid-template-columns:3fr 3fr 4fr;padding:0 32px;}.table-row.jsx-4247137942{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;border-top:1px solid #eaeaea;height:64px;}.credit-card.jsx-4247137942{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}.credit-card-number.jsx-4247137942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@-webkit-keyframes Loading-jsx-4247137942{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes Loading-jsx-4247137942{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.loading.jsx-4247137942{-webkit-animation:Loading-jsx-4247137942 2s ease infinite;animation:Loading-jsx-4247137942 2s ease infinite;background:linear-gradient(270deg,#d1d1d1,#eaeaea);background-size:200% 200%;height:16px;width:80%;}img.jsx-4247137942{height:24px;margin-right:8px;}@media screen and (max-width:580px){.table.jsx-4247137942{padding:0 16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLmJyaW5rZXJ0L0Rlc2t0b3AvQ29kZS9QZXJzb25hbF9Qcm9qZWN0cy9mYXVuYWRiLWRlbW8vY29tcG9uZW50cy9UYWJsZVJvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFLOEIsQUFPQSxBQU1BLEFBSU4sQUFJZ0IsQUFHRSxBQUdGLEFBSU0sQUFPdkIsQUFLSyxZQUpBLEdBS2pCLFlBdEJBLEFBTUEsRUFIQSxBQWVGLDZDQXRCQSxtQkFqQmUsQUFPRCxBQU1LLFlBTFksQ0FQUCxFQThCK0IsRUFqQnZELGtCQVpvQyxNQU90QixZQUNkLGFBc0I0QixHQTdCWCxlQUNqQixRQTZCYyxZQUNGLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW0uYnJpbmtlcnQvRGVza3RvcC9Db2RlL1BlcnNvbmFsX1Byb2plY3RzL2ZhdW5hZGItZGVtby9jb21wb25lbnRzL1RhYmxlUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHtjcmVkaXRDYXJkLCBmaXJzdE5hbWUsIGxvYWRpbmcsIGxhc3ROYW1lLCB0ZWxlcGhvbmV9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtcm93XCI+XG4gICAgPHAgY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2xvYWRpbmcnIDogJyd9PlxuICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9e2B0ZWxlcGhvbmUgJHtsb2FkaW5nID8gJ2xvYWRpbmcnIDogJyd9YH0+e3RlbGVwaG9uZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPXtgY3JlZGl0LWNhcmQgJHtsb2FkaW5nID8gJ2xvYWRpbmcnIDogJyd9YH0+XG4gICAgICB7Y3JlZGl0Q2FyZCAmJiA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvdmlzYS5zdmdcIi8+fVxuICAgICAge2NyZWRpdENhcmR9XG4gICAgPC9wPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLyogVGFibGVSb3cuanMgKi9cblxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmciA0ZnI7XG4gICAgICAgICAgcGFkZGluZzogMCAzMnB4O1xuICAgICAgICB9XG4gICAgICAgIC50YWJsZS1yb3cge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgfVxuICAgICAgICAuY3JlZGl0LWNhcmQge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmNyZWRpdC1jYXJkLW51bWJlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogTG9hZGluZyAycyBlYXNlIGluZmluaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNkMWQxZDEsICNlYWVhZWEpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/Users/william.brinkert/Desktop/Code/Personal_Projects/faunadb-demo/components/TableRow.js */")));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TableRow */ "./components/TableRow.js");
var _jsxFileName = "/Users/william.brinkert/Desktop/Code/Personal_Projects/faunadb-demo/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getData() {
      const res = await fetch('/api');
      const newData = await res.json();
      console.log('newData: ', newData);
      setData(newData);
    }

    getData();
  }, []);
  return (//jsx here...
    __jsx("main", {
      className: "jsx-3601541212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, __jsx("title", {
      className: "jsx-3601541212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, "Next.js, FaunDB, and Node.js")), __jsx("h1", {
      className: "jsx-3601541212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, "Next.js, FaunDB, and Node.js"), __jsx("hr", {
      className: "jsx-3601541212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }), __jsx("div", {
      className: "jsx-3601541212" + " " + "container-scroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-3601541212" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, __jsx("h2", {
      className: "jsx-3601541212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "Customer Data"), __jsx("div", {
      className: "jsx-3601541212" + " " + "table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, __jsx("h4", {
      className: "jsx-3601541212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, "name"), __jsx("h4", {
      className: "jsx-3601541212" + " " + "telephone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, "telephone"), __jsx("h4", {
      className: "jsx-3601541212" + " " + "credit-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "credit card")), data.length > 0 ? data.map(row => __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: row.data.telephone,
      creditCard: row.data.creditCard.number,
      firstName: row.data.firstName,
      lastName: row.data.lastName,
      telephone: row.data.telephone,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }), __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }), __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3601541212",
      __self: undefined
    }, "main.jsx-3601541212{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:640px;margin:0 auto;font-size:16px;line-height:1.65;}header.jsx-3601541212{height:152px;margin-top:3em;}img.jsx-3601541212{height:48px;margin-right:8px;width:48px;}img.loading.jsx-3601541212{background:#eaeaea;border-radius:50%;}hr.jsx-3601541212{border:none;border-top:1px solid #eaeaea;margin-bottom:48px;}h1.jsx-3601541212{font-size:1.5em;font-weight:500;}h2.jsx-3601541212{font-size:16px;font-weight:700;margin:0;padding:0 32px;}h4.jsx-3601541212{color:#666666;font-size:12px;font-weight:400;text-align:left;text-transform:uppercase;}.container-scroll.jsx-3601541212{overflow:scroll;}.container.jsx-3601541212{border:1px solid #eaeaea;border-radius:4px;min-width:512px;overflow:scroll;padding-top:24px;}.table.jsx-3601541212{display:grid;grid-auto-flow:column;grid-template-columns:3fr 3fr 4fr;padding:0 32px;}.credit-card.jsx-3601541212{margin-left:auto;}@media screen and (max-width:580px){main.jsx-3601541212{font-size:14px;}header.jsx-3601541212{height:9em;}h2.jsx-3601541212,.table.jsx-3601541212{padding:0 16px;}}@media screen and (max-width:474px){main.jsx-3601541212{font-size:12px;padding:4px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLmJyaW5rZXJ0L0Rlc2t0b3AvQ29kZS9QZXJzb25hbF9Qcm9qZWN0cy9mYXVuYWRiLWRlbW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQixBQUtnQyxBQVFSLEFBSUQsQUFLTyxBQUlQLEFBS0ksQUFJRCxBQU1ELEFBT0UsQUFHUyxBQU9aLEFBTUksQUFJQSxBQUdKLEFBSUksQUFLQSxXQVJqQixDQXREaUIsQUFTWSxDQWJkLEFBNkNPLENBakJQLENBTkMsQUFpQ2hCLEFBT0EsQUFLYyxDQWpERSxBQWlCbEIsQ0FnQkEsRUExQ29CLE1BNkJBLEVBOEJsQixDQW5FRixDQUlhLEFBd0JLLEVBTlAsQ0FKWCxHQTJCb0MsRUFwQ3BDLEdBSkEsQUFrQmlCLENBVkksRUF5QkgsRUFUQSxVQUxsQixJQWVrQixDQXpCbEIsQ0FnQjJCLFFBZ0JWLE1BTkUsU0FPbkIsRUFoQkEsSUF4Q3lCLEVBa0R6QixxQkFqRGtCLGdCQUNGLGNBQ0MsZUFDRSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW0uYnJpbmtlcnQvRGVza3RvcC9Db2RlL1BlcnNvbmFsX1Byb2plY3RzL2ZhdW5hZGItZGVtby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlUm93J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFsgZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGknKVxuICAgICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKCduZXdEYXRhOiAnLCBuZXdEYXRhKTtcbiAgICAgIHNldERhdGEobmV3RGF0YSlcbiAgICB9XG4gICAgZ2V0RGF0YSgpXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIC8vanN4IGhlcmUuLi5cbiAgICA8bWFpbj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC5qcywgRmF1bkRCLCBhbmQgTm9kZS5qczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDE+TmV4dC5qcywgRmF1bkRCLCBhbmQgTm9kZS5qczwvaDE+XG4gICAgICA8aHIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItc2Nyb2xsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyPkN1c3RvbWVyIERhdGE8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgIDxoND5uYW1lPC9oND5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZWxlcGhvbmVcIj50ZWxlcGhvbmU8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNyZWRpdC1jYXJkXCI+Y3JlZGl0IGNhcmQ8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBkYXRhLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICBrZXk9e3Jvdy5kYXRhLnRlbGVwaG9uZX1cbiAgICAgICAgICAgICAgICBjcmVkaXRDYXJkPXtyb3cuZGF0YS5jcmVkaXRDYXJkLm51bWJlcn1cbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e3Jvdy5kYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBsYXN0TmFtZT17cm93LmRhdGEubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgdGVsZXBob25lPXtyb3cuZGF0YS50ZWxlcGhvbmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBsb2FkaW5nIC8+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBsb2FkaW5nIC8+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBsb2FkaW5nIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBJY29ucycsICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLFxuICAgICAgICAgICAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42NTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGhlaWdodDogMTUycHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZy5sb2FkaW5nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBociB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICAgICAgfVxuICAgICAgICBoNCB7XG4gICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXItc2Nyb2xsIHtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogNTEycHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAzZnIgNGZyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICAgICAgfVxuICAgICAgICAuY3JlZGl0LWNhcmQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDllbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIsXG4gICAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc0cHgpIHtcbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cblxuXG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/william.brinkert/Desktop/Code/Personal_Projects/faunadb-demo/pages/index.js */"))
  );
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/william.brinkert/Desktop/Code/Personal_Projects/faunadb-demo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map