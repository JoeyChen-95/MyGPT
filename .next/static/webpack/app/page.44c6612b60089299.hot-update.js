"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./styles/markdown.css":
/*!*****************************!*\
  !*** ./styles/markdown.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c0670836c868\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9tYXJrZG93bi5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9tYXJrZG93bi5jc3M/YjU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMwNjcwODM2Yzg2OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/markdown.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/EventBusContext.tsx":
/*!****************************************!*\
  !*** ./components/EventBusContext.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventBusContextProvider; },\n/* harmony export */   useEventBusContext: function() { return /* binding */ useEventBusContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useEventBusContext,default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst EventBusContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction useEventBusContext() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EventBusContext);\n}\n_s(useEventBusContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n// receive children property, nest children components\nfunction EventBusContextProvider(param) {\n    let { children } = param;\n    _s1();\n    //state which saves the callback function, according to the event type\n    const [listeners, setListeners] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const subscribe = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event, callback)=>{\n        if (!listeners[event]) {\n            listeners[event] = [];\n        }\n        listeners[event].push(callback);\n        setListeners({\n            ...listeners\n        });\n    }, [\n        listeners\n    ]);\n    const unsubscribe = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event, callback)=>{\n        if (listeners[event]) {\n            listeners[event] = listeners[event].filter((cb)=>cb !== callback);\n            setListeners({\n                ...listeners\n            });\n        }\n    }, [\n        listeners\n    ]);\n    const publish = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event, data)=>{\n        if (listeners[event]) {\n            listeners[event].forEach((callback)=>callback(data));\n        }\n    }, [\n        listeners\n    ]);\n    // useMemo=>cache the result\n    // only when its dependency is changed, the object will be reloaded, and the contextValue changes\n    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            subscribe,\n            unsubscribe,\n            publish\n        };\n    }, [\n        subscribe,\n        unsubscribe,\n        publish\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EventBusContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/chenjunjian/Code/MyGPT/components/EventBusContext.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s1(EventBusContextProvider, \"ukpZvg4bOI380KTvmKZ4pqjFLcE=\");\n_c = EventBusContextProvider;\nvar _c;\n$RefreshReg$(_c, \"EventBusContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRXZlbnRCdXNDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2tJO0FBWWxJLE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQXVCO0FBRXJELFNBQVNNOztJQUNaLE9BQU9KLGlEQUFVQSxDQUFDRztBQUN0QjtHQUZnQkM7QUFJaEIsc0RBQXNEO0FBQ3ZDLFNBQVNDLHdCQUF3QixLQUkvQztRQUorQyxFQUM1Q0MsUUFBUSxFQUdYLEdBSitDOztJQUs1QyxzRUFBc0U7SUFDdEUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFrQyxDQUFDO0lBRTdFLE1BQU1PLFlBQVlWLGtEQUFXQSxDQUFDLENBQUNXLE9BQWVDO1FBQzFDLElBQUksQ0FBQ0osU0FBUyxDQUFDRyxNQUFNLEVBQUU7WUFDbkJILFNBQVMsQ0FBQ0csTUFBTSxHQUFHLEVBQUU7UUFDekI7UUFDQUgsU0FBUyxDQUFDRyxNQUFNLENBQUNFLElBQUksQ0FBQ0Q7UUFDdEJILGFBQWE7WUFBRSxHQUFHRCxTQUFTO1FBQUM7SUFFaEMsR0FBRztRQUFDQTtLQUFVO0lBRWQsTUFBTU0sY0FBY2Qsa0RBQVdBLENBQUMsQ0FBQ1csT0FBZUM7UUFDNUMsSUFBSUosU0FBUyxDQUFDRyxNQUFNLEVBQUU7WUFDbEJILFNBQVMsQ0FBQ0csTUFBTSxHQUFHSCxTQUFTLENBQUNHLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDLENBQUNDLEtBQU9BLE9BQU9KO1lBQzFESCxhQUFhO2dCQUFFLEdBQUdELFNBQVM7WUFBQztRQUNoQztJQUNKLEdBQUc7UUFBQ0E7S0FBVTtJQUVkLE1BQU1TLFVBQVVqQixrREFBV0EsQ0FBQyxDQUFDVyxPQUFlTztRQUN4QyxJQUFJVixTQUFTLENBQUNHLE1BQU0sRUFBRTtZQUNsQkgsU0FBUyxDQUFDRyxNQUFNLENBQUNRLE9BQU8sQ0FBQyxDQUFDUCxXQUFhQSxTQUFTTTtRQUNwRDtJQUNKLEdBQUc7UUFBQ1Y7S0FBVTtJQUdkLDRCQUE0QjtJQUM1QixpR0FBaUc7SUFDakcsTUFBTVksZUFBZWxCLDhDQUFPQSxDQUFDO1FBQ3pCLE9BQU87WUFBRVE7WUFBV0k7WUFBYUc7UUFBUTtJQUM3QyxHQUFHO1FBQUNQO1FBQVdJO1FBQWFHO0tBQVE7SUFDcEMscUJBQ0ksOERBQUNiLGdCQUFnQmlCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQzVCYjs7Ozs7O0FBR2I7SUF6Q3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V2ZW50QnVzQ29udGV4dC50c3g/MTQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgRGlzcGF0Y2gsIFJlYWN0Tm9kZSwgU2V0U3RhdGVBY3Rpb24sIGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbi8vY2FsbGJhY2sgZnVuY3Rpb24sIHJlY2VvdmUgYW55IHR5cGUgb2YgZGF0YSBhcyBpbnB1dFxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0bmVyID0gKGRhdGE/OiBhbnkpID0+IHZvaWRcblxudHlwZSBFdmVudEJ1c0NvbnRleHRQcm9wcyA9IHtcbiAgICBzdWJzY3JpYmU6IChldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0bmVyKSA9PiB2b2lkXG4gICAgdW5zdWJzY3JpYmU6IChldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0bmVyKSA9PiB2b2lkXG4gICAgLy9ldmVudDogdHlwZSBvZiBldmVudCwgZGF0YTogZXZlbnQncyBkYXRhXG4gICAgcHVibGlzaDogKGV2ZW50OiBzdHJpbmcsIGRhdGE/OiBhbnkpID0+IHZvaWRcbn1cblxuY29uc3QgRXZlbnRCdXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxFdmVudEJ1c0NvbnRleHRQcm9wcz4obnVsbCEpXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFdmVudEJ1c0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoRXZlbnRCdXNDb250ZXh0KTtcbn1cblxuLy8gcmVjZWl2ZSBjaGlsZHJlbiBwcm9wZXJ0eSwgbmVzdCBjaGlsZHJlbiBjb21wb25lbnRzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEJ1c0NvbnRleHRQcm92aWRlcih7XG4gICAgY2hpbGRyZW5cbn06IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXG59KSB7XG4gICAgLy9zdGF0ZSB3aGljaCBzYXZlcyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24sIGFjY29yZGluZyB0byB0aGUgZXZlbnQgdHlwZVxuICAgIGNvbnN0IFtsaXN0ZW5lcnMsIHNldExpc3RlbmVyc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBFdmVudExpc3RlbmVyW10+Pih7fSk7XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdG5lcikgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjaylcbiAgICAgICAgc2V0TGlzdGVuZXJzKHsgLi4ubGlzdGVuZXJzIH0pXG5cbiAgICB9LCBbbGlzdGVuZXJzXSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RuZXIpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBsaXN0ZW5lcnNbZXZlbnRdLmZpbHRlcigoY2IpID0+IGNiICE9PSBjYWxsYmFjaylcbiAgICAgICAgICAgIHNldExpc3RlbmVycyh7IC4uLmxpc3RlbmVycyB9KVxuICAgICAgICB9XG4gICAgfSwgW2xpc3RlbmVyc10pXG5cbiAgICBjb25zdCBwdWJsaXNoID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBzdHJpbmcsIGRhdGE/OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRhdGEpKVxuICAgICAgICB9XG4gICAgfSwgW2xpc3RlbmVyc10pXG5cblxuICAgIC8vIHVzZU1lbW89PmNhY2hlIHRoZSByZXN1bHRcbiAgICAvLyBvbmx5IHdoZW4gaXRzIGRlcGVuZGVuY3kgaXMgY2hhbmdlZCwgdGhlIG9iamVjdCB3aWxsIGJlIHJlbG9hZGVkLCBhbmQgdGhlIGNvbnRleHRWYWx1ZSBjaGFuZ2VzXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1YnNjcmliZSwgdW5zdWJzY3JpYmUsIHB1Ymxpc2ggfVxuICAgIH0sIFtzdWJzY3JpYmUsIHVuc3Vic2NyaWJlLCBwdWJsaXNoXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8RXZlbnRCdXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0V2ZW50QnVzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJFdmVudEJ1c0NvbnRleHQiLCJ1c2VFdmVudEJ1c0NvbnRleHQiLCJFdmVudEJ1c0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibGlzdGVuZXJzIiwic2V0TGlzdGVuZXJzIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJjYWxsYmFjayIsInB1c2giLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsImNiIiwicHVibGlzaCIsImRhdGEiLCJmb3JFYWNoIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/EventBusContext.tsx\n"));

/***/ })

});