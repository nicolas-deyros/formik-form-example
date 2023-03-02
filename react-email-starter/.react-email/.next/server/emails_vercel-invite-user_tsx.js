"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_vercel-invite-user_tsx";
exports.ids = ["emails_vercel-invite-user_tsx"];
exports.modules = {

/***/ "./emails/vercel-invite-user.tsx":
/*!***************************************!*\
  !*** ./emails/vercel-invite-user.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VercelInviteUserEmail\": () => (/* binding */ VercelInviteUserEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst VercelInviteUserEmail = ({ username =\"zenorocha\" , userImage =`${baseUrl}/static/vercel-user.png` , invitedByUsername =\"bukinoshita\" , invitedByEmail =\"bukinoshita@example.com\" , teamName =\"My Project\" , teamImage =`${baseUrl}/static/vercel-team.png` , inviteLink =\"https://vercel.com/teams/invite/foo\" , inviteFromIp =\"204.13.186.218\" , inviteFromLocation =\"S\\xe3o Paulo, Brazil\"  })=>{\n    const previewText = `Join ${invitedByUsername} on Vercel`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: previewText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                    style: container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                            style: {\n                                marginTop: \"32px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                src: `${baseUrl}/static/vercel-logo.png`,\n                                width: \"40\",\n                                height: \"37\",\n                                alt: \"Vercel\",\n                                style: logo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                            style: h1,\n                            children: [\n                                \"Join \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: teamName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 18\n                                }, undefined),\n                                \" on \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Vercel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 49\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: text,\n                            children: [\n                                \"Hello \",\n                                username,\n                                \",\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: text,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"bukinoshita\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" (\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    href: `mailto:${invitedByEmail}`,\n                                    style: link,\n                                    children: invitedByEmail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                \") has invited you to the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: teamName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 38\n                                }, undefined),\n                                \" team on\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Vercel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Row, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {\n                                        align: \"right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                            style: avatar,\n                                            src: userImage,\n                                            width: \"64\",\n                                            height: \"64\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {\n                                        align: \"center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                            src: `${baseUrl}/static/vercel-arrow.png`,\n                                            width: \"12\",\n                                            height: \"9\",\n                                            alt: \"invited you to\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {\n                                        align: \"left\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                            style: avatar,\n                                            src: teamImage,\n                                            width: \"64\",\n                                            height: \"64\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                            style: {\n                                textAlign: \"center\",\n                                marginTop: \"26px\",\n                                marginBottom: \"26px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                pX: 20,\n                                pY: 12,\n                                style: btn,\n                                href: inviteLink,\n                                children: \"Join the team\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: text,\n                            children: [\n                                \"or copy and paste this URL into your browser:\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    href: inviteLink,\n                                    target: \"_blank\",\n                                    style: link,\n                                    rel: \"noreferrer\",\n                                    children: inviteLink\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                            style: hr\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: footer,\n                            children: [\n                                \"This invitation was intended for\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: black,\n                                    children: [\n                                        username,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                \".This invite was sent from\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: black,\n                                    children: inviteFromIp\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" located in\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: black,\n                                    children: inviteFromLocation\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, undefined),\n                                \". If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ndeyros\\\\Documents\\\\dev-test\\\\form-example\\\\react-email-starter\\\\.react-email\\\\emails\\\\vercel-invite-user.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VercelInviteUserEmail);\nconst main = {\n    backgroundColor: \"#ffffff\",\n    margin: \"0 auto\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\"\n};\nconst container = {\n    border: \"1px solid #eaeaea\",\n    borderRadius: \"5px\",\n    margin: \"40px auto\",\n    padding: \"20px\",\n    width: \"465px\"\n};\nconst logo = {\n    margin: \"0 auto\"\n};\nconst h1 = {\n    color: \"#000\",\n    fontSize: \"24px\",\n    fontWeight: \"normal\",\n    textAlign: \"center\",\n    margin: \"30px 0\",\n    padding: \"0\"\n};\nconst avatar = {\n    borderRadius: \"100%\"\n};\nconst link = {\n    color: \"#067df7\",\n    textDecoration: \"none\"\n};\nconst text = {\n    color: \"#000\",\n    fontSize: \"14px\",\n    lineHeight: \"24px\"\n};\nconst black = {\n    color: \"black\"\n};\nconst center = {\n    verticalAlign: \"middle\"\n};\nconst btn = {\n    backgroundColor: \"#000\",\n    borderRadius: \"5px\",\n    color: \"#fff\",\n    fontSize: \"12px\",\n    fontWeight: 500,\n    lineHeight: \"50px\",\n    textDecoration: \"none\",\n    textAlign: \"center\"\n};\nconst hr = {\n    border: \"none\",\n    borderTop: \"1px solid #eaeaea\",\n    margin: \"26px 0\",\n    width: \"100%\"\n};\nconst footer = {\n    color: \"#666666\",\n    fontSize: \"12px\",\n    lineHeight: \"24px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkO0FBRUEsTUFBTVgsUUFBUTtJQUNaTyxPQUFPO0FBQ1Q7QUFFQSxNQUFNSyxTQUFTO0lBQ2JDLGVBQWU7QUFDakI7QUFFQSxNQUFNbkIsTUFBTTtJQUNWTyxpQkFBaUI7SUFDakJJLGNBQWM7SUFDZEUsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFlBQVk7SUFDWkUsWUFBWTtJQUNaRCxnQkFBZ0I7SUFDaEJwQixXQUFXO0FBQ2I7QUFFQSxNQUFNTyxLQUFLO0lBQ1RPLFFBQVE7SUFDUlUsV0FBVztJQUNYWixRQUFRO0lBQ1J2QixPQUFPO0FBQ1Q7QUFFQSxNQUFNbUIsU0FBUztJQUNiUyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkcsWUFBWTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtcHJldmlldy8uL2VtYWlscy92ZXJjZWwtaW52aXRlLXVzZXIudHN4PzhlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm9keSxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIENvbHVtbixcbiAgSGVhZCxcbiAgSGVhZGluZyxcbiAgSHIsXG4gIEh0bWwsXG4gIEltZyxcbiAgTGluayxcbiAgUHJldmlldyxcbiAgUm93LFxuICBTZWN0aW9uLFxuICBUZXh0LFxufSBmcm9tICdAcmVhY3QtZW1haWwvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBWZXJjZWxJbnZpdGVVc2VyRW1haWxQcm9wcyB7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICB1c2VySW1hZ2U/OiBzdHJpbmc7XG4gIGludml0ZWRCeVVzZXJuYW1lPzogc3RyaW5nO1xuICBpbnZpdGVkQnlFbWFpbD86IHN0cmluZztcbiAgdGVhbU5hbWU/OiBzdHJpbmc7XG4gIHRlYW1JbWFnZT86IHN0cmluZztcbiAgaW52aXRlTGluaz86IHN0cmluZztcbiAgaW52aXRlRnJvbUlwPzogc3RyaW5nO1xuICBpbnZpdGVGcm9tTG9jYXRpb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WRVJDRUxfVVJMXG4gID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWBcbiAgOiAnJztcblxuZXhwb3J0IGNvbnN0IFZlcmNlbEludml0ZVVzZXJFbWFpbCA9ICh7XG4gIHVzZXJuYW1lID0gJ3plbm9yb2NoYScsXG4gIHVzZXJJbWFnZSA9IGAke2Jhc2VVcmx9L3N0YXRpYy92ZXJjZWwtdXNlci5wbmdgLFxuICBpbnZpdGVkQnlVc2VybmFtZSA9ICdidWtpbm9zaGl0YScsXG4gIGludml0ZWRCeUVtYWlsID0gJ2J1a2lub3NoaXRhQGV4YW1wbGUuY29tJyxcbiAgdGVhbU5hbWUgPSAnTXkgUHJvamVjdCcsXG4gIHRlYW1JbWFnZSA9IGAke2Jhc2VVcmx9L3N0YXRpYy92ZXJjZWwtdGVhbS5wbmdgLFxuICBpbnZpdGVMaW5rID0gJ2h0dHBzOi8vdmVyY2VsLmNvbS90ZWFtcy9pbnZpdGUvZm9vJyxcbiAgaW52aXRlRnJvbUlwID0gJzIwNC4xMy4xODYuMjE4JyxcbiAgaW52aXRlRnJvbUxvY2F0aW9uID0gJ1PDo28gUGF1bG8sIEJyYXppbCcsXG59OiBWZXJjZWxJbnZpdGVVc2VyRW1haWxQcm9wcykgPT4ge1xuICBjb25zdCBwcmV2aWV3VGV4dCA9IGBKb2luICR7aW52aXRlZEJ5VXNlcm5hbWV9IG9uIFZlcmNlbGA7XG5cbiAgcmV0dXJuIChcbiAgICA8SHRtbD5cbiAgICAgIDxIZWFkIC8+XG4gICAgICA8UHJldmlldz57cHJldmlld1RleHR9PC9QcmV2aWV3PlxuICAgICAgPEJvZHkgc3R5bGU9e21haW59PlxuICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXtjb250YWluZXJ9PlxuICAgICAgICAgIDxTZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogJzMycHgnIH19PlxuICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9L3N0YXRpYy92ZXJjZWwtbG9nby5wbmdgfVxuICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzdcIlxuICAgICAgICAgICAgICBhbHQ9XCJWZXJjZWxcIlxuICAgICAgICAgICAgICBzdHlsZT17bG9nb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgIDxIZWFkaW5nIHN0eWxlPXtoMX0+XG4gICAgICAgICAgICBKb2luIDxzdHJvbmc+e3RlYW1OYW1lfTwvc3Ryb25nPiBvbiA8c3Ryb25nPlZlcmNlbDwvc3Ryb25nPlxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17dGV4dH0+SGVsbG8ge3VzZXJuYW1lfSw8L1RleHQ+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3RleHR9PlxuICAgICAgICAgICAgPHN0cm9uZz5idWtpbm9zaGl0YTwvc3Ryb25nPiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgbWFpbHRvOiR7aW52aXRlZEJ5RW1haWx9YH0gc3R5bGU9e2xpbmt9PlxuICAgICAgICAgICAgICB7aW52aXRlZEJ5RW1haWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApIGhhcyBpbnZpdGVkIHlvdSB0byB0aGUgPHN0cm9uZz57dGVhbU5hbWV9PC9zdHJvbmc+IHRlYW0gb257JyAnfVxuICAgICAgICAgICAgPHN0cm9uZz5WZXJjZWw8L3N0cm9uZz4uXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbHVtbiBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPEltZyBzdHlsZT17YXZhdGFyfSBzcmM9e3VzZXJJbWFnZX0gd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgLz5cbiAgICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgICAgIDxDb2x1bW4gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9L3N0YXRpYy92ZXJjZWwtYXJyb3cucG5nYH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiOVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbnZpdGVkIHlvdSB0b1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgICAgIDxDb2x1bW4gYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPEltZyBzdHlsZT17YXZhdGFyfSBzcmM9e3RlYW1JbWFnZX0gd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgLz5cbiAgICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgPFNlY3Rpb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzI2cHgnLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcyNnB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbiBwWD17MjB9IHBZPXsxMn0gc3R5bGU9e2J0bn0gaHJlZj17aW52aXRlTGlua30+XG4gICAgICAgICAgICAgIEpvaW4gdGhlIHRlYW1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17dGV4dH0+XG4gICAgICAgICAgICBvciBjb3B5IGFuZCBwYXN0ZSB0aGlzIFVSTCBpbnRvIHlvdXIgYnJvd3Nlcjp7JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17aW52aXRlTGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmt9XG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aW52aXRlTGlua31cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEhyIHN0eWxlPXtocn0gLz5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17Zm9vdGVyfT5cbiAgICAgICAgICAgIFRoaXMgaW52aXRhdGlvbiB3YXMgaW50ZW5kZWQgZm9yeycgJ31cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtibGFja30+e3VzZXJuYW1lfSA8L3NwYW4+LlRoaXMgaW52aXRlIHdhcyBzZW50IGZyb217JyAnfVxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2JsYWNrfT57aW52aXRlRnJvbUlwfTwvc3Bhbj4gbG9jYXRlZCBpbnsnICd9XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17YmxhY2t9PntpbnZpdGVGcm9tTG9jYXRpb259PC9zcGFuPi4gSWYgeW91IHdlcmUgbm90XG4gICAgICAgICAgICBleHBlY3RpbmcgdGhpcyBpbnZpdGF0aW9uLCB5b3UgY2FuIGlnbm9yZSB0aGlzIGVtYWlsLiBJZiB5b3UgYXJlXG4gICAgICAgICAgICBjb25jZXJuZWQgYWJvdXQgeW91ciBhY2NvdW50J3Mgc2FmZXR5LCBwbGVhc2UgcmVwbHkgdG8gdGhpcyBlbWFpbCB0b1xuICAgICAgICAgICAgZ2V0IGluIHRvdWNoIHdpdGggdXMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm9keT5cbiAgICA8L0h0bWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZXJjZWxJbnZpdGVVc2VyRW1haWw7XG5cbmNvbnN0IG1haW4gPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBmb250RmFtaWx5OlxuICAgIFwiLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZlwiLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICBib3JkZXI6ICcxcHggc29saWQgI2VhZWFlYScsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIG1hcmdpbjogJzQwcHggYXV0bycsXG4gIHBhZGRpbmc6ICcyMHB4JyxcbiAgd2lkdGg6ICc0NjVweCcsXG59O1xuXG5jb25zdCBsb2dvID0ge1xuICBtYXJnaW46ICcwIGF1dG8nLFxufTtcblxuY29uc3QgaDEgPSB7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGZvbnRTaXplOiAnMjRweCcsXG4gIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxuICBtYXJnaW46ICczMHB4IDAnLFxuICBwYWRkaW5nOiAnMCcsXG59O1xuXG5jb25zdCBhdmF0YXIgPSB7XG4gIGJvcmRlclJhZGl1czogJzEwMCUnLFxufTtcblxuY29uc3QgbGluayA9IHtcbiAgY29sb3I6ICcjMDY3ZGY3JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbn07XG5cbmNvbnN0IHRleHQgPSB7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4Jyxcbn07XG5cbmNvbnN0IGJsYWNrID0ge1xuICBjb2xvcjogJ2JsYWNrJyxcbn07XG5cbmNvbnN0IGNlbnRlciA9IHtcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG59O1xuXG5jb25zdCBidG4gPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBjb2xvcjogJyNmZmYnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICc1MHB4JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbn07XG5cbmNvbnN0IGhyID0ge1xuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlYWVhZWEnLFxuICBtYXJnaW46ICcyNnB4IDAnLFxuICB3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgZm9vdGVyID0ge1xuICBjb2xvcjogJyM2NjY2NjYnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG59O1xuIl0sIm5hbWVzIjpbIkJvZHkiLCJCdXR0b24iLCJDb250YWluZXIiLCJDb2x1bW4iLCJIZWFkIiwiSGVhZGluZyIsIkhyIiwiSHRtbCIsIkltZyIsIkxpbmsiLCJQcmV2aWV3IiwiUm93IiwiU2VjdGlvbiIsIlRleHQiLCJSZWFjdCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsIlZlcmNlbEludml0ZVVzZXJFbWFpbCIsInVzZXJuYW1lIiwidXNlckltYWdlIiwiaW52aXRlZEJ5VXNlcm5hbWUiLCJpbnZpdGVkQnlFbWFpbCIsInRlYW1OYW1lIiwidGVhbUltYWdlIiwiaW52aXRlTGluayIsImludml0ZUZyb21JcCIsImludml0ZUZyb21Mb2NhdGlvbiIsInByZXZpZXdUZXh0Iiwic3R5bGUiLCJtYWluIiwiY29udGFpbmVyIiwibWFyZ2luVG9wIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsb2dvIiwiaDEiLCJzdHJvbmciLCJ0ZXh0IiwiaHJlZiIsImxpbmsiLCJhbGlnbiIsImF2YXRhciIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInBYIiwicFkiLCJidG4iLCJ0YXJnZXQiLCJyZWwiLCJociIsImZvb3RlciIsInNwYW4iLCJibGFjayIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJjZW50ZXIiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./emails/vercel-invite-user.tsx\n");

/***/ })

};
;