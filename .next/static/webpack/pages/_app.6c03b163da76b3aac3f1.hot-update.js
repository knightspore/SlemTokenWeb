"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/LoginStatusIndicator.js":
/*!********************************************!*\
  !*** ./components/LoginStatusIndicator.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginStatusIndicator; }\n/* harmony export */ });\n/* harmony import */ var _Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Meta/MetaMaskProvider */ \"./components/_Meta/MetaMaskProvider.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/c/Desktop/dev/web3/metamask/components/LoginStatusIndicator.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction LoginStatusIndicator() {\n  _s();\n\n  var data = (0,_Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_0__.useMMContext)();\n  var id = data.global.userId || null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"absolute right-2 top-2 card\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      className: \"text-sm font-bold flex items-center gap-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Indicator, {\n        id: id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginStatus, {\n        id: id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n_s(LoginStatusIndicator, \"9rof+aDgpU6a7LRNb/pMvrojOJI=\", false, function () {\n  return [_Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_0__.useMMContext];\n});\n\n_c = LoginStatusIndicator;\n\nfunction LoginStatus(_ref) {\n  var id = _ref.id;\n  return id !== null ? \"\".concat(id.slice(0, 6), \"...\").concat(id.slice(38, id.length)) : \"Metamask Not Found \\uD83D\\uDE13\";\n}\n\n_c2 = LoginStatus;\n\nfunction Indicator(_ref2) {\n  var id = _ref2.id;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"h-2 w-2 bg-\".concat(id ? \"green\" : \"red\", \"-500 rounded-full\")\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Indicator;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LoginStatusIndicator\");\n$RefreshReg$(_c2, \"LoginStatus\");\n$RefreshReg$(_c3, \"Indicator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luU3RhdHVzSW5kaWNhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0Msb0JBQVQsR0FBZ0M7QUFBQTs7QUFDN0MsTUFBTUMsSUFBSSxHQUFHRixvRUFBWSxFQUF6QjtBQUNBLE1BQU1HLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxNQUFMLENBQVlDLE1BQVosSUFBc0IsSUFBakM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFDLDJDQUFiO0FBQUEsOEJBQ0UsOERBQUMsU0FBRDtBQUFXLFVBQUUsRUFBRUY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxXQUFEO0FBQWEsVUFBRSxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBWHVCRjtVQUNURDs7O0tBRFNDOztBQWF4QixTQUFTSyxXQUFULE9BQTZCO0FBQUEsTUFBTkgsRUFBTSxRQUFOQSxFQUFNO0FBQzNCLFNBQU9BLEVBQUUsS0FBSyxJQUFQLGFBQ0FBLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFaLENBREEsZ0JBQ29CSixFQUFFLENBQUNJLEtBQUgsQ0FBUyxFQUFULEVBQWFKLEVBQUUsQ0FBQ0ssTUFBaEIsQ0FEcEIscUNBQVA7QUFHRDs7TUFKUUY7O0FBTVQsU0FBU0csU0FBVCxRQUEyQjtBQUFBLE1BQU5OLEVBQU0sU0FBTkEsRUFBTTtBQUN6QixzQkFDRTtBQUFLLGFBQVMsdUJBQWdCQSxFQUFFLEdBQUcsT0FBSCxHQUFhLEtBQS9CO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O01BSlFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW5TdGF0dXNJbmRpY2F0b3IuanM/OTFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNTUNvbnRleHQgfSBmcm9tIFwiLi9fTWV0YS9NZXRhTWFza1Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luU3RhdHVzSW5kaWNhdG9yKCkge1xuICBjb25zdCBkYXRhID0gdXNlTU1Db250ZXh0KCk7XG4gIGNvbnN0IGlkID0gZGF0YS5nbG9iYWwudXNlcklkIHx8IG51bGw7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIHRvcC0yIGNhcmRcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgIDxJbmRpY2F0b3IgaWQ9e2lkfSAvPlxuICAgICAgICA8TG9naW5TdGF0dXMgaWQ9e2lkfSAvPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBMb2dpblN0YXR1cyh7IGlkIH0pIHtcbiAgcmV0dXJuIGlkICE9PSBudWxsXG4gICAgPyBgJHtpZC5zbGljZSgwLCA2KX0uLi4ke2lkLnNsaWNlKDM4LCBpZC5sZW5ndGgpfWBcbiAgICA6IGBNZXRhbWFzayBOb3QgRm91bmQg8J+Yk2A7XG59XG5cbmZ1bmN0aW9uIEluZGljYXRvcih7IGlkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGgtMiB3LTIgYmctJHtpZCA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9LTUwMCByb3VuZGVkLWZ1bGxgfSAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZU1NQ29udGV4dCIsIkxvZ2luU3RhdHVzSW5kaWNhdG9yIiwiZGF0YSIsImlkIiwiZ2xvYmFsIiwidXNlcklkIiwiTG9naW5TdGF0dXMiLCJzbGljZSIsImxlbmd0aCIsIkluZGljYXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginStatusIndicator.js\n");

/***/ })

});