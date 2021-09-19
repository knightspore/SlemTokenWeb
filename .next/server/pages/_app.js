/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/LoginStatusIndicator.js":
/*!********************************************!*\
  !*** ./components/LoginStatusIndicator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginStatusIndicator)\n/* harmony export */ });\n/* harmony import */ var _Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Meta/MetaMaskProvider */ \"./components/_Meta/MetaMaskProvider.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/c/Desktop/dev/web3/metamask/components/LoginStatusIndicator.js\";\n\n\nfunction LoginStatusIndicator() {\n  const data = (0,_Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_0__.useMMContext)();\n  const id = data.global.userId || null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"absolute right-2 top-2 card\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      className: \"text-sm font-bold flex items-center gap-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Indicator, {\n        id: id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginStatus, {\n        id: id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\nfunction LoginStatus({\n  id\n}) {\n  return id !== null ? `${id.slice(0, 6)}...${id.slice(38, id.length)}` : `Metamask Not Found 😓`;\n}\n\nfunction Indicator({\n  id\n}) {\n  return id != null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: `h-2 w-2 bg-green-500 rounded-full`\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: `h-2 w-2 bg-red-500 rounded-full`\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luU3RhdHVzSW5kaWNhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0Msb0JBQVQsR0FBZ0M7QUFDN0MsUUFBTUMsSUFBSSxHQUFHRixvRUFBWSxFQUF6QjtBQUNBLFFBQU1HLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxNQUFMLENBQVlDLE1BQVosSUFBc0IsSUFBakM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFDLDJDQUFiO0FBQUEsOEJBQ0UsOERBQUMsU0FBRDtBQUFXLFVBQUUsRUFBRUY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxXQUFEO0FBQWEsVUFBRSxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRUQsU0FBU0csV0FBVCxDQUFxQjtBQUFFSCxFQUFBQTtBQUFGLENBQXJCLEVBQTZCO0FBQzNCLFNBQU9BLEVBQUUsS0FBSyxJQUFQLEdBQ0YsR0FBRUEsRUFBRSxDQUFDSSxLQUFILENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBZSxNQUFLSixFQUFFLENBQUNJLEtBQUgsQ0FBUyxFQUFULEVBQWFKLEVBQUUsQ0FBQ0ssTUFBaEIsQ0FBd0IsRUFENUMsR0FFRix1QkFGTDtBQUdEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUI7QUFBRU4sRUFBQUE7QUFBRixDQUFuQixFQUEyQjtBQUN6QixTQUFPQSxFQUFFLElBQUksSUFBTixnQkFDTDtBQUFLLGFBQVMsRUFBRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREssZ0JBR0w7QUFBSyxhQUFTLEVBQUc7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhGO0FBS0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhbWFzay8uL2NvbXBvbmVudHMvTG9naW5TdGF0dXNJbmRpY2F0b3IuanM/OTFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNTUNvbnRleHQgfSBmcm9tIFwiLi9fTWV0YS9NZXRhTWFza1Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luU3RhdHVzSW5kaWNhdG9yKCkge1xuICBjb25zdCBkYXRhID0gdXNlTU1Db250ZXh0KCk7XG4gIGNvbnN0IGlkID0gZGF0YS5nbG9iYWwudXNlcklkIHx8IG51bGw7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIHRvcC0yIGNhcmRcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgIDxJbmRpY2F0b3IgaWQ9e2lkfSAvPlxuICAgICAgICA8TG9naW5TdGF0dXMgaWQ9e2lkfSAvPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBMb2dpblN0YXR1cyh7IGlkIH0pIHtcbiAgcmV0dXJuIGlkICE9PSBudWxsXG4gICAgPyBgJHtpZC5zbGljZSgwLCA2KX0uLi4ke2lkLnNsaWNlKDM4LCBpZC5sZW5ndGgpfWBcbiAgICA6IGBNZXRhbWFzayBOb3QgRm91bmQg8J+Yk2A7XG59XG5cbmZ1bmN0aW9uIEluZGljYXRvcih7IGlkIH0pIHtcbiAgcmV0dXJuIGlkICE9IG51bGwgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BoLTIgdy0yIGJnLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGxgfSAvPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaC0yIHctMiBiZy1yZWQtNTAwIHJvdW5kZWQtZnVsbGB9IC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlTU1Db250ZXh0IiwiTG9naW5TdGF0dXNJbmRpY2F0b3IiLCJkYXRhIiwiaWQiLCJnbG9iYWwiLCJ1c2VySWQiLCJMb2dpblN0YXR1cyIsInNsaWNlIiwibGVuZ3RoIiwiSW5kaWNhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginStatusIndicator.js\n");

/***/ }),

/***/ "./components/_Meta/MetaMaskProvider.js":
/*!**********************************************!*\
  !*** ./components/_Meta/MetaMaskProvider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MetaMaskWrapper\": () => (/* binding */ MetaMaskWrapper),\n/* harmony export */   \"useMMContext\": () => (/* binding */ useMMContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/c/Desktop/dev/web3/metamask/components/_Meta/MetaMaskProvider.js\";\n\n\n\n\nlet Web3 = __webpack_require__(/*! web3 */ \"web3\");\n\nconst MMContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nfunction MetaMaskWrapper({\n  children\n}) {\n  const {\n    0: web3,\n    1: setWeb3\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const {\n    0: address,\n    1: setAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.ethereum ? ethereum.request({\n      method: \"eth_requestAccounts\"\n    }).then(accounts => {\n      setAddress(accounts[0]);\n      let w3 = new Web3(ethereum);\n      setWeb3(w3);\n    }).catch(err => console.log(err)) : setWeb3(\"Disconnected\");\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MMContext.Provider, {\n    value: {\n      global: {\n        web3,\n        userId: address\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\nfunction useMMContext() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MMContext);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19NZXRhL01ldGFNYXNrUHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBLElBQUlJLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFsQjs7QUFFQSxNQUFNQyxTQUFTLGdCQUFHTixvREFBYSxFQUEvQjtBQUVPLFNBQVNPLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUF1QztBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JQLCtDQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDUSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlQsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkVyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FDSUEsUUFBUSxDQUNMQyxPQURILENBQ1c7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FEWCxFQUVHQyxJQUZILENBRVNDLFFBQUQsSUFBYztBQUNsQk4sTUFBQUEsVUFBVSxDQUFDTSxRQUFRLENBQUMsQ0FBRCxDQUFULENBQVY7QUFDQSxVQUFJQyxFQUFFLEdBQUcsSUFBSWYsSUFBSixDQUFTVSxRQUFULENBQVQ7QUFDQUosTUFBQUEsT0FBTyxDQUFDUyxFQUFELENBQVA7QUFDRCxLQU5ILEVBT0dDLEtBUEgsQ0FPVUMsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVBsQixDQURKLEdBU0lYLE9BQU8sQ0FBQyxjQUFELENBVFg7QUFVRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0UsOERBQUMsU0FBRCxDQUFXLFFBQVg7QUFBb0IsU0FBSyxFQUFFO0FBQUVjLE1BQUFBLE1BQU0sRUFBRTtBQUFFZixRQUFBQSxJQUFGO0FBQVFnQixRQUFBQSxNQUFNLEVBQUVkO0FBQWhCO0FBQVYsS0FBM0I7QUFBQSxjQUNHSDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRU0sU0FBU2tCLFlBQVQsR0FBd0I7QUFDN0IsU0FBT3pCLGlEQUFVLENBQUNLLFNBQUQsQ0FBakI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGFtYXNrLy4vY29tcG9uZW50cy9fTWV0YS9NZXRhTWFza1Byb3ZpZGVyLmpzP2YzMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xubGV0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcblxuY29uc3QgTU1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gTWV0YU1hc2tXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuZXRoZXJldW1cbiAgICAgID8gZXRoZXJldW1cbiAgICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgICAudGhlbigoYWNjb3VudHMpID0+IHtcbiAgICAgICAgICAgIHNldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgbGV0IHczID0gbmV3IFdlYjMoZXRoZXJldW0pO1xuICAgICAgICAgICAgc2V0V2ViMyh3Myk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIDogc2V0V2ViMyhcIkRpc2Nvbm5lY3RlZFwiKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPE1NQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBnbG9iYWw6IHsgd2ViMywgdXNlcklkOiBhZGRyZXNzIH0gfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NTUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNTUNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KE1NQ29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldlYjMiLCJyZXF1aXJlIiwiTU1Db250ZXh0IiwiTWV0YU1hc2tXcmFwcGVyIiwiY2hpbGRyZW4iLCJ3ZWIzIiwic2V0V2ViMyIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsImFjY291bnRzIiwidzMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWwiLCJ1c2VySWQiLCJ1c2VNTUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_Meta/MetaMaskProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_Meta/MetaMaskProvider */ \"./components/_Meta/MetaMaskProvider.js\");\n/* harmony import */ var _components_LoginStatusIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginStatusIndicator */ \"./components/LoginStatusIndicator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/c/Desktop/dev/web3/metamask/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Meta_MetaMaskProvider__WEBPACK_IMPORTED_MODULE_2__.MetaMaskWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"$lemtoken\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_LoginStatusIndicator__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQyw4RUFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhbWFzay8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IE1ldGFNYXNrV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL19NZXRhL01ldGFNYXNrUHJvdmlkZXJcIjtcbmltcG9ydCBMb2dpblN0YXR1c0luZGljYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblN0YXR1c0luZGljYXRvclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWV0YU1hc2tXcmFwcGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4kbGVtdG9rZW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TG9naW5TdGF0dXNJbmRpY2F0b3IgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L01ldGFNYXNrV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIk1ldGFNYXNrV3JhcHBlciIsIkxvZ2luU3RhdHVzSW5kaWNhdG9yIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();