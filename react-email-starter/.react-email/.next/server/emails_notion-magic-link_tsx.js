"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_notion-magic-link_tsx";
exports.ids = ["emails_notion-magic-link_tsx"];
exports.modules = {

/***/ "./emails/notion-magic-link.tsx":
/*!**************************************!*\
  !*** ./emails/notion-magic-link.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotionMagicLinkEmail\": () => (/* binding */ NotionMagicLinkEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst NotionMagicLinkEmail = ({ loginCode =\"sparo-ndigo-amurt-secan\"  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: \"Log in with this magic link\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                    style: container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                            style: h1,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: \"https://notion.so\",\n                            target: \"_blank\",\n                            style: {\n                                ...link,\n                                display: \"block\",\n                                marginBottom: \"16px\"\n                            },\n                            children: \"Click here to log in with this magic link\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                marginBottom: \"14px\"\n                            },\n                            children: \"Or, copy and paste this temporary login code:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: code,\n                            children: loginCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                color: \"#ababab\",\n                                marginTop: \"14px\",\n                                marginBottom: \"16px\"\n                            },\n                            children: \"If you didn't try to login, you can safely ignore this email.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                color: \"#ababab\",\n                                marginTop: \"12px\",\n                                marginBottom: \"38px\"\n                            },\n                            children: \"Hint: You can set a permanent password in Settings & members → My account.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                            src: `${baseUrl}/static/notion-logo.png`,\n                            width: \"32\",\n                            height: \"32\",\n                            alt: \"Notion's Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: footer,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    href: \"https://notion.so\",\n                                    target: \"_blank\",\n                                    style: {\n                                        ...link,\n                                        color: \"#898989\"\n                                    },\n                                    children: \"Notion.so\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, undefined),\n                                \", the all-in-one-workspace\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 11\n                                }, undefined),\n                                \"for your notes, tasks, wikis, and databases.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\notion-magic-link.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotionMagicLinkEmail);\nconst main = {\n    backgroundColor: \"#ffffff\"\n};\nconst container = {\n    paddingLeft: \"12px\",\n    paddingRight: \"12px\",\n    margin: \"0 auto\"\n};\nconst h1 = {\n    color: \"#333\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"24px\",\n    fontWeight: \"bold\",\n    margin: \"40px 0\",\n    padding: \"0\"\n};\nconst link = {\n    color: \"#2754C5\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"14px\",\n    textDecoration: \"underline\"\n};\nconst text = {\n    color: \"#333\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"14px\",\n    margin: \"24px 0\"\n};\nconst footer = {\n    color: \"#898989\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"12px\",\n    lineHeight: \"22px\",\n    marginTop: \"12px\",\n    marginBottom: \"24px\"\n};\nconst code = {\n    display: \"inline-block\",\n    padding: \"16px 4.5%\",\n    width: \"90.5%\",\n    backgroundColor: \"#f4f4f4\",\n    borderRadius: \"5px\",\n    border: \"1px solid #eee\",\n    color: \"#333\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvbm90aW9uLW1hZ2ljLWxpbmsudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFVaUM7QUFDRjtBQU0vQixNQUFNVSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsR0FDbEMsQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsR0FDbkMsRUFBRTtBQUVDLE1BQU1DLHVCQUF1QixDQUFDLEVBQ25DQyxXQUFZLDBCQUF5QixFQUNYLGlCQUMxQiw4REFBQ1gseURBQUlBOzswQkFDSCw4REFBQ0YseURBQUlBOzs7OzswQkFDTCw4REFBQ0ssNERBQU9BOzBCQUFDOzs7Ozs7MEJBQ1QsOERBQUNQLHlEQUFJQTtnQkFBQ2dCLE9BQU9DOzBCQUNYLDRFQUFDaEIsOERBQVNBO29CQUFDZSxPQUFPRTs7c0NBQ2hCLDhEQUFDZiw0REFBT0E7NEJBQUNhLE9BQU9HO3NDQUFJOzs7Ozs7c0NBQ3BCLDhEQUFDYix5REFBSUE7NEJBQ0hjLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BMLE9BQU87Z0NBQ0wsR0FBR00sSUFBSTtnQ0FDUEMsU0FBUztnQ0FDVEMsY0FBYzs0QkFDaEI7c0NBQ0Q7Ozs7OztzQ0FHRCw4REFBQ2hCLHlEQUFJQTs0QkFBQ1EsT0FBTztnQ0FBRSxHQUFHUyxJQUFJO2dDQUFFRCxjQUFjOzRCQUFPO3NDQUFHOzs7Ozs7c0NBR2hELDhEQUFDRTs0QkFBS1YsT0FBT1U7c0NBQU9YOzs7Ozs7c0NBQ3BCLDhEQUFDUCx5REFBSUE7NEJBQ0hRLE9BQU87Z0NBQ0wsR0FBR1MsSUFBSTtnQ0FDUEUsT0FBTztnQ0FDUEMsV0FBVztnQ0FDWEosY0FBYzs0QkFDaEI7c0NBQ0Q7Ozs7OztzQ0FHRCw4REFBQ2hCLHlEQUFJQTs0QkFDSFEsT0FBTztnQ0FDTCxHQUFHUyxJQUFJO2dDQUNQRSxPQUFPO2dDQUNQQyxXQUFXO2dDQUNYSixjQUFjOzRCQUNoQjtzQ0FDRDs7Ozs7O3NDQUlELDhEQUFDbkIsd0RBQUdBOzRCQUNGd0IsS0FBSyxDQUFDLEVBQUVuQixRQUFRLHVCQUF1QixDQUFDOzRCQUN4Q29CLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLEtBQUk7Ozs7OztzQ0FFTiw4REFBQ3hCLHlEQUFJQTs0QkFBQ1EsT0FBT2lCOzs4Q0FDWCw4REFBQzNCLHlEQUFJQTtvQ0FDSGMsTUFBSztvQ0FDTEMsUUFBTztvQ0FDUEwsT0FBTzt3Q0FBRSxHQUFHTSxJQUFJO3dDQUFFSyxPQUFPO29DQUFVOzhDQUNwQzs7Ozs7O2dDQUVNOzhDQUVQLDhEQUFDTzs7Ozs7Z0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQU1kO0FBRUYsaUVBQWVwQixvQkFBb0JBLEVBQUM7QUFFcEMsTUFBTUcsT0FBTztJQUNYa0IsaUJBQWlCO0FBQ25CO0FBRUEsTUFBTWpCLFlBQVk7SUFDaEJrQixhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsUUFBUTtBQUNWO0FBRUEsTUFBTW5CLEtBQUs7SUFDVFEsT0FBTztJQUNQWSxZQUNFO0lBQ0ZDLFVBQVU7SUFDVkMsWUFBWTtJQUNaSCxRQUFRO0lBQ1JJLFNBQVM7QUFDWDtBQUVBLE1BQU1wQixPQUFPO0lBQ1hLLE9BQU87SUFDUFksWUFDRTtJQUNGQyxVQUFVO0lBQ1ZHLGdCQUFnQjtBQUNsQjtBQUVBLE1BQU1sQixPQUFPO0lBQ1hFLE9BQU87SUFDUFksWUFDRTtJQUNGQyxVQUFVO0lBQ1ZGLFFBQVE7QUFDVjtBQUVBLE1BQU1MLFNBQVM7SUFDYk4sT0FBTztJQUNQWSxZQUNFO0lBQ0ZDLFVBQVU7SUFDVkksWUFBWTtJQUNaaEIsV0FBVztJQUNYSixjQUFjO0FBQ2hCO0FBRUEsTUFBTUUsT0FBTztJQUNYSCxTQUFTO0lBQ1RtQixTQUFTO0lBQ1RaLE9BQU87SUFDUEssaUJBQWlCO0lBQ2pCVSxjQUFjO0lBQ2RDLFFBQVE7SUFDUm5CLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLXByZXZpZXcvLi9lbWFpbHMvbm90aW9uLW1hZ2ljLWxpbmsudHN4P2Q0MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udGFpbmVyLFxuICBIZWFkLFxuICBIZWFkaW5nLFxuICBIdG1sLFxuICBJbWcsXG4gIExpbmssXG4gIFByZXZpZXcsXG4gIFRleHQsXG59IGZyb20gJ0ByZWFjdC1lbWFpbC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIE5vdGlvbk1hZ2ljTGlua0VtYWlsUHJvcHMge1xuICBsb2dpbkNvZGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WRVJDRUxfVVJMXG4gID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWBcbiAgOiAnJztcblxuZXhwb3J0IGNvbnN0IE5vdGlvbk1hZ2ljTGlua0VtYWlsID0gKHtcbiAgbG9naW5Db2RlID0gJ3NwYXJvLW5kaWdvLWFtdXJ0LXNlY2FuJyxcbn06IE5vdGlvbk1hZ2ljTGlua0VtYWlsUHJvcHMpID0+IChcbiAgPEh0bWw+XG4gICAgPEhlYWQgLz5cbiAgICA8UHJldmlldz5Mb2cgaW4gd2l0aCB0aGlzIG1hZ2ljIGxpbms8L1ByZXZpZXc+XG4gICAgPEJvZHkgc3R5bGU9e21haW59PlxuICAgICAgPENvbnRhaW5lciBzdHlsZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRpbmcgc3R5bGU9e2gxfT5Mb2dpbjwvSGVhZGluZz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ub3Rpb24uc29cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLmxpbmssXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsaWNrIGhlcmUgdG8gbG9nIGluIHdpdGggdGhpcyBtYWdpYyBsaW5rXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFRleHQgc3R5bGU9e3sgLi4udGV4dCwgbWFyZ2luQm90dG9tOiAnMTRweCcgfX0+XG4gICAgICAgICAgT3IsIGNvcHkgYW5kIHBhc3RlIHRoaXMgdGVtcG9yYXJ5IGxvZ2luIGNvZGU6XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPGNvZGUgc3R5bGU9e2NvZGV9Pntsb2dpbkNvZGV9PC9jb2RlPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50ZXh0LFxuICAgICAgICAgICAgY29sb3I6ICcjYWJhYmFiJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzE0cHgnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIElmIHlvdSBkaWRuJmFwb3M7dCB0cnkgdG8gbG9naW4sIHlvdSBjYW4gc2FmZWx5IGlnbm9yZSB0aGlzIGVtYWlsLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRleHQsXG4gICAgICAgICAgICBjb2xvcjogJyNhYmFiYWInLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTJweCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgSGludDogWW91IGNhbiBzZXQgYSBwZXJtYW5lbnQgcGFzc3dvcmQgaW4gU2V0dGluZ3MgJiBtZW1iZXJzIOKGkiBNeVxuICAgICAgICAgIGFjY291bnQuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEltZ1xuICAgICAgICAgIHNyYz17YCR7YmFzZVVybH0vc3RhdGljL25vdGlvbi1sb2dvLnBuZ2B9XG4gICAgICAgICAgd2lkdGg9XCIzMlwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzJcIlxuICAgICAgICAgIGFsdD1cIk5vdGlvbidzIExvZ29cIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBzdHlsZT17Zm9vdGVyfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbm90aW9uLnNvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBzdHlsZT17eyAuLi5saW5rLCBjb2xvcjogJyM4OTg5ODknIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTm90aW9uLnNvXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICwgdGhlIGFsbC1pbi1vbmUtd29ya3NwYWNlXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgZm9yIHlvdXIgbm90ZXMsIHRhc2tzLCB3aWtpcywgYW5kIGRhdGFiYXNlcy5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb2R5PlxuICA8L0h0bWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3Rpb25NYWdpY0xpbmtFbWFpbDtcblxuY29uc3QgbWFpbiA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG59O1xuXG5jb25zdCBjb250YWluZXIgPSB7XG4gIHBhZGRpbmdMZWZ0OiAnMTJweCcsXG4gIHBhZGRpbmdSaWdodDogJzEycHgnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxufTtcblxuY29uc3QgaDEgPSB7XG4gIGNvbG9yOiAnIzMzMycsXG4gIGZvbnRGYW1pbHk6XG4gICAgXCItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gIGZvbnRTaXplOiAnMjRweCcsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgbWFyZ2luOiAnNDBweCAwJyxcbiAgcGFkZGluZzogJzAnLFxufTtcblxuY29uc3QgbGluayA9IHtcbiAgY29sb3I6ICcjMjc1NEM1JyxcbiAgZm9udEZhbWlseTpcbiAgICBcIi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcIixcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxufTtcblxuY29uc3QgdGV4dCA9IHtcbiAgY29sb3I6ICcjMzMzJyxcbiAgZm9udEZhbWlseTpcbiAgICBcIi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcIixcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbWFyZ2luOiAnMjRweCAwJyxcbn07XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgY29sb3I6ICcjODk4OTg5JyxcbiAgZm9udEZhbWlseTpcbiAgICBcIi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcIixcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbGluZUhlaWdodDogJzIycHgnLFxuICBtYXJnaW5Ub3A6ICcxMnB4JyxcbiAgbWFyZ2luQm90dG9tOiAnMjRweCcsXG59O1xuXG5jb25zdCBjb2RlID0ge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgcGFkZGluZzogJzE2cHggNC41JScsXG4gIHdpZHRoOiAnOTAuNSUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICBjb2xvcjogJyMzMzMnLFxufTtcbiJdLCJuYW1lcyI6WyJCb2R5IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRpbmciLCJIdG1sIiwiSW1nIiwiTGluayIsIlByZXZpZXciLCJUZXh0IiwiUmVhY3QiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJOb3Rpb25NYWdpY0xpbmtFbWFpbCIsImxvZ2luQ29kZSIsInN0eWxlIiwibWFpbiIsImNvbnRhaW5lciIsImgxIiwiaHJlZiIsInRhcmdldCIsImxpbmsiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwidGV4dCIsImNvZGUiLCJjb2xvciIsIm1hcmdpblRvcCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiZm9vdGVyIiwiYnIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./emails/notion-magic-link.tsx\n");

/***/ })

};
;