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

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"52af1199c578\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzI4Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1MmFmMTE5OWM1NzhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./client/components/TicketDetails.tsx":
/*!*********************************************!*\
  !*** ./client/components/TicketDetails.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst TicketDetails = (param)=>{\n    let { ticket, onClose, onStatusChange } = param;\n    _s();\n    const [replyText, setReplyText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newStatus, setNewStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((ticket === null || ticket === void 0 ? void 0 : ticket.status) || \"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setNewStatus((ticket === null || ticket === void 0 ? void 0 : ticket.status) || \"\");\n    }, [\n        ticket\n    ]);\n    const handleReplyChange = (e)=>{\n        setReplyText(e.target.value);\n    };\n    const handleReplySend = ()=>{\n        console.log(\"Would normally send an email here with body:\", replyText);\n        setReplyText(\"\");\n    };\n    const handleApplyChanges = async ()=>{\n        try {\n            const ticketId = ticket === null || ticket === void 0 ? void 0 : ticket.id;\n            if (ticketId !== undefined) {\n                if ([\n                    \"New\",\n                    \"In Progress\",\n                    \"Resolved\",\n                    \"Spam\"\n                ].includes(newStatus)) {\n                    await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"https://render-help-desk-app.onrender.com\", {\n                        ticketId: ticketId,\n                        newStatus: newStatus\n                    });\n                    onStatusChange({\n                        ...ticket,\n                        status: newStatus\n                    });\n                    console.log(\"Ticket status updated successfully\");\n                } else {\n                    console.error(\"Invalid status:\", newStatus);\n                }\n            }\n        } catch (error) {\n            console.error(\"Error updating ticket status:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setNewStatus((ticket === null || ticket === void 0 ? void 0 : ticket.status) || \"\");\n    }, [\n        ticket\n    ]);\n    if (!ticket) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 max-w-6xl max-h-4xl overflow-y-auto rounded-lg shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: ticket.subject\n                        }, void 0, false, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-gray-600 text-white py-2 px-4 rounded\",\n                            onClick: onClose,\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                ticket.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                ticket.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Problem Description:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                ticket.problemDescription\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Status:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                ticket.status\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Created:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                new Date(ticket.createdAt).toLocaleString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: \"Last Updated:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                new Date(ticket.updatedAt).toLocaleString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-gray-800 font-semibold\",\n                            children: \"Reply:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: replyText,\n                            onChange: handleReplyChange,\n                            rows: 4,\n                            className: \"w-full p-2 border border-gray-300 rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-2 bg-blue-500 text-white py-2 px-4 rounded\",\n                            onClick: handleReplySend,\n                            children: \"Send Reply\"\n                        }, void 0, false, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-gray-800 font-semibold\",\n                            children: \"Change Status:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: newStatus,\n                            onChange: (e)=>setNewStatus(e.target.value),\n                            className: \"w-full p-2 border border-gray-300 rounded\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"New\",\n                                    children: \"New\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"In Progress\",\n                                    children: \"In Progress\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Resolved\",\n                                    children: \"Resolved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Spam\",\n                                    children: \"Spam\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-2 bg-green-500 text-white py-2 px-4 rounded\",\n                    onClick: handleApplyChanges,\n                    children: \"Apply Changes\"\n                }, void 0, false, {\n                    fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/terrencekoo/render-help-desk/client/components/TicketDetails.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TicketDetails, \"bhhZbaQ9nOg23YwOb2uUxPSoeH8=\");\n_c = TicketDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketDetails);\nvar _c;\n$RefreshReg$(_c, \"TicketDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NsaWVudC9jb21wb25lbnRzL1RpY2tldERldGFpbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFTMUIsTUFBTUksZ0JBQThDO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGNBQWMsRUFBRTs7SUFDdEYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBU0ksQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRTyxNQUFNLEtBQUk7SUFFckVWLGdEQUFTQSxDQUFDO1FBQ1JTLGFBQWFOLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUU8sTUFBTSxLQUFJO0lBQ2pDLEdBQUc7UUFBQ1A7S0FBTztJQUVYLE1BQU1RLG9CQUFvQixDQUFDQztRQUN6QkwsYUFBYUssRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCQyxRQUFRQyxHQUFHLENBQUMsZ0RBQWdEWDtRQUM1REMsYUFBYTtJQUNmO0lBRUEsTUFBTVcscUJBQXFCO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxXQUFXaEIsbUJBQUFBLDZCQUFBQSxPQUFRaUIsRUFBRTtZQUMzQixJQUFJRCxhQUFhRSxXQUFXO2dCQUMxQixJQUFJO29CQUFDO29CQUFPO29CQUFlO29CQUFZO2lCQUFPLENBQUNDLFFBQVEsQ0FBQ2QsWUFBWTtvQkFDbEUsTUFBTVAsNkNBQUtBLENBQUNzQixHQUFHLENBQUUsNkNBQTRDO3dCQUMzREosVUFBVUE7d0JBQ1ZYLFdBQVdBO29CQUNiO29CQUVBSCxlQUFlO3dCQUFFLEdBQUdGLE1BQU07d0JBQUVPLFFBQVFGO29CQUFVO29CQUU5Q1EsUUFBUUMsR0FBRyxDQUFDO2dCQUNkLE9BQU87b0JBQ0xELFFBQVFRLEtBQUssQ0FBQyxtQkFBbUJoQjtnQkFDbkM7WUFDRjtRQUNGLEVBQUUsT0FBT2dCLE9BQU87WUFDZFIsUUFBUVEsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDakQ7SUFDRjtJQUdBeEIsZ0RBQVNBLENBQUM7UUFDUlMsYUFBYU4sQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRTyxNQUFNLEtBQUk7SUFDakMsR0FBRztRQUFDUDtLQUFPO0lBRVgsSUFBSSxDQUFDQSxRQUFRO1FBQ1gsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNzQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBc0J2QixPQUFPeUIsT0FBTzs7Ozs7O3NDQUNsRCw4REFBQ0M7NEJBQ0NILFdBQVU7NEJBQ1ZJLFNBQVMxQjtzQ0FDVjs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDcUI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBRUwsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFZO2dDQUFFdkIsT0FBTzhCLElBQUk7Ozs7Ozs7c0NBRTNELDhEQUFDRjs0QkFBRUwsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFhO2dDQUFFdkIsT0FBTytCLEtBQUs7Ozs7Ozs7c0NBRTdELDhEQUFDSDs0QkFBRUwsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUEyQjtnQ0FBRXZCLE9BQU9nQyxrQkFBa0I7Ozs7Ozs7c0NBRXhGLDhEQUFDSjs0QkFBRUwsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFjO2dDQUFFdkIsT0FBT08sTUFBTTs7Ozs7OztzQ0FFL0QsOERBQUNxQjs0QkFBRUwsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFlO2dDQUFFLElBQUlVLEtBQUtqQyxPQUFPa0MsU0FBUyxFQUFFQyxjQUFjOzs7Ozs7O3NDQUU1Riw4REFBQ1A7OzhDQUNDLDhEQUFDQztvQ0FBS04sV0FBVTs4Q0FBZ0I7Ozs7OztnQ0FBb0I7Z0NBQUUsSUFBSVUsS0FBS2pDLE9BQU9vQyxTQUFTLEVBQUVELGNBQWM7Ozs7Ozs7Ozs7Ozs7OEJBR2pHLDhEQUFDYjtvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNjOzRCQUFNZCxXQUFVO3NDQUF5Qzs7Ozs7O3NDQUMxRCw4REFBQ2U7NEJBQ0MzQixPQUFPUjs0QkFDUG9DLFVBQVUvQjs0QkFDVmdDLE1BQU07NEJBQ05qQixXQUFVOzs7Ozs7c0NBRVosOERBQUNHOzRCQUNDSCxXQUFVOzRCQUNWSSxTQUFTZjtzQ0FDVjs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDVTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNjOzRCQUFNZCxXQUFVO3NDQUF5Qzs7Ozs7O3NDQUMxRCw4REFBQ2tCOzRCQUNDOUIsT0FBT047NEJBQ1BrQyxVQUFVLENBQUM5QixJQUFNSCxhQUFhRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQzVDWSxXQUFVOzs4Q0FFViw4REFBQ21CO29DQUFPL0IsT0FBTTs4Q0FBTTs7Ozs7OzhDQUNwQiw4REFBQytCO29DQUFPL0IsT0FBTTs4Q0FBYzs7Ozs7OzhDQUM1Qiw4REFBQytCO29DQUFPL0IsT0FBTTs4Q0FBVzs7Ozs7OzhDQUN6Qiw4REFBQytCO29DQUFPL0IsT0FBTTs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd6Qiw4REFBQ2U7b0JBQ0NILFdBQVU7b0JBQ1ZJLFNBQVNaOzhCQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBckhNaEI7S0FBQUE7QUF1SE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvVGlja2V0RGV0YWlscy50c3g/YjRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUaWNrZXQgfSBmcm9tICcuL1RpY2tldCc7XG5cbmludGVyZmFjZSBUaWNrZXREZXRhaWxzUHJvcHMge1xuICB0aWNrZXQ6IFRpY2tldCB8IG51bGw7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9uU3RhdHVzQ2hhbmdlOiAodXBkYXRlZFRpY2tldDogVGlja2V0KSA9PiB2b2lkO1xufVxuXG5jb25zdCBUaWNrZXREZXRhaWxzOiBSZWFjdC5GQzxUaWNrZXREZXRhaWxzUHJvcHM+ID0gKHsgdGlja2V0LCBvbkNsb3NlLCBvblN0YXR1c0NoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtyZXBseVRleHQsIHNldFJlcGx5VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW25ld1N0YXR1cywgc2V0TmV3U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4odGlja2V0Py5zdGF0dXMgfHwgJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TmV3U3RhdHVzKHRpY2tldD8uc3RhdHVzIHx8ICcnKTtcbiAgfSwgW3RpY2tldF0pO1xuXG4gIGNvbnN0IGhhbmRsZVJlcGx5Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UmVwbHlUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXBseVNlbmQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1dvdWxkIG5vcm1hbGx5IHNlbmQgYW4gZW1haWwgaGVyZSB3aXRoIGJvZHk6JywgcmVwbHlUZXh0KTtcbiAgICBzZXRSZXBseVRleHQoJycpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5Q2hhbmdlcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdGlja2V0SWQgPSB0aWNrZXQ/LmlkO1xuICAgICAgaWYgKHRpY2tldElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKFtcIk5ld1wiLCBcIkluIFByb2dyZXNzXCIsIFwiUmVzb2x2ZWRcIiwgXCJTcGFtXCJdLmluY2x1ZGVzKG5ld1N0YXR1cykpIHtcbiAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHBzOi8vcmVuZGVyLWhlbHAtZGVzay1hcHAub25yZW5kZXIuY29tYCwge1xuICAgICAgICAgICAgdGlja2V0SWQ6IHRpY2tldElkLFxuICAgICAgICAgICAgbmV3U3RhdHVzOiBuZXdTdGF0dXMsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBvblN0YXR1c0NoYW5nZSh7IC4uLnRpY2tldCwgc3RhdHVzOiBuZXdTdGF0dXMgfSBhcyBUaWNrZXQpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RpY2tldCBzdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHN0YXR1czonLCBuZXdTdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRpY2tldCBzdGF0dXM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TmV3U3RhdHVzKHRpY2tldD8uc3RhdHVzIHx8ICcnKTtcbiAgfSwgW3RpY2tldF0pO1xuXG4gIGlmICghdGlja2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggbWF4LXctNnhsIG1heC1oLTR4bCBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57dGlja2V0LnN1YmplY3R9PC9oMj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5OYW1lOjwvc3Bhbj4ge3RpY2tldC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+RW1haWw6PC9zcGFuPiB7dGlja2V0LmVtYWlsfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+UHJvYmxlbSBEZXNjcmlwdGlvbjo8L3NwYW4+IHt0aWNrZXQucHJvYmxlbURlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+U3RhdHVzOjwvc3Bhbj4ge3RpY2tldC5zdGF0dXN9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DcmVhdGVkOjwvc3Bhbj4ge25ldyBEYXRlKHRpY2tldC5jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkxhc3QgVXBkYXRlZDo8L3NwYW4+IHtuZXcgRGF0ZSh0aWNrZXQudXBkYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGRcIj5SZXBseTo8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e3JlcGx5VGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSZXBseUNoYW5nZX1cbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlcGx5U2VuZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZW5kIFJlcGx5XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGRcIj5DaGFuZ2UgU3RhdHVzOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9e25ld1N0YXR1c31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTmV3XCI+TmV3PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW4gUHJvZ3Jlc3NcIj5JbiBQcm9ncmVzczwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJlc29sdmVkXCI+UmVzb2x2ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcGFtXCI+U3BhbTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFwcGx5Q2hhbmdlc31cbiAgICAgICAgPlxuICAgICAgICAgIEFwcGx5IENoYW5nZXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpY2tldERldGFpbHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlRpY2tldERldGFpbHMiLCJ0aWNrZXQiLCJvbkNsb3NlIiwib25TdGF0dXNDaGFuZ2UiLCJyZXBseVRleHQiLCJzZXRSZXBseVRleHQiLCJuZXdTdGF0dXMiLCJzZXROZXdTdGF0dXMiLCJzdGF0dXMiLCJoYW5kbGVSZXBseUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVJlcGx5U2VuZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBcHBseUNoYW5nZXMiLCJ0aWNrZXRJZCIsImlkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwdXQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3ViamVjdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic3BhbiIsIm5hbWUiLCJlbWFpbCIsInByb2JsZW1EZXNjcmlwdGlvbiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsInVwZGF0ZWRBdCIsImxhYmVsIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsInJvd3MiLCJzZWxlY3QiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./client/components/TicketDetails.tsx\n"));

/***/ })

});