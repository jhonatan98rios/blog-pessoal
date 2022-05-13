self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ FilteredPosts; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Desktop_Projects_pessoal_BlogPessoal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Shared_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Shared/SEO */ "./src/components/Shared/SEO/index.tsx");
/* harmony import */ var _components_Posts_Masonry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Posts/Masonry */ "./src/components/Posts/Masonry/index.tsx");
/* harmony import */ var _components_Posts_Categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Posts/Categories */ "./src/components/Posts/Categories/index.tsx");
/* harmony import */ var _hooks_useDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useDevice */ "./src/hooks/useDevice.ts");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.ts");
/* harmony import */ var _context_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/store */ "./src/context/store.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/posts/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Desktop\\Projects\\pessoal\\BlogPessoal\\src\\pages\\posts\\[slug].tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Desktop_Projects_pessoal_BlogPessoal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var __N_SSG = true;
function FilteredPosts(_ref) {
  _s();

  var posts = _ref.posts;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useDeviceDetect = (0,_hooks_useDevice__WEBPACK_IMPORTED_MODULE_7__.default)(),
      isMobile = _useDeviceDetect.isMobile;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_store__WEBPACK_IMPORTED_MODULE_9__.default),
      state = _useContext.state,
      setState = _useContext.setState;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      filteredPosts = _useState[0],
      setFilteredPosts = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      search: ''
    }));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setFilteredPosts((0,_services_utils__WEBPACK_IMPORTED_MODULE_8__.postsFilter)(state.search, posts));
  }, [state.search, router.asPath]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_SEO__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: "".concat(router.asPath, " | Posts"),
      description: "Quer saber como ser um programador? Confira nossos posts e seja bem vindo ao mundo da programa\xE7\xE3o!",
      keywords: "programa\xE7\xE3o, estudos, tecnologia, computa\xE7\xE3o, games, web, aplicativos, carreira em ti, desenvolvimento profissional, mercado de ti"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Categories__WEBPACK_IMPORTED_MODULE_6__.Categories, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [!isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Categories__WEBPACK_IMPORTED_MODULE_6__.Categories, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 12
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Masonry__WEBPACK_IMPORTED_MODULE_5__.Masonry, {
          posts: filteredPosts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), !isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().fake_col)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(FilteredPosts, "P5XA/M4DBMV2QeKzt59I+TZqSQE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _hooks_useDevice__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = FilteredPosts;

var _c;

$RefreshReg$(_c, "FilteredPosts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiRmlsdGVyZWRQb3N0cyIsInBvc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiZmlsdGVyZWRQb3N0cyIsInNldEZpbHRlcmVkUG9zdHMiLCJ1c2VFZmZlY3QiLCJzZWFyY2giLCJwb3N0c0ZpbHRlciIsImFzUGF0aCIsInN0eWxlcyIsImZha2VfY29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTs7QUFJZSxTQUFTQSxhQUFULE9BQStDO0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUU1RCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUY0RCx5QkFHdkNDLHlEQUFlLEVBSHdCO0FBQUEsTUFHcERDLFFBSG9ELG9CQUdwREEsUUFIb0Q7O0FBQUEsb0JBSWhDQyxpREFBVSxDQUFDQyxtREFBRCxDQUpzQjtBQUFBLE1BSXBEQyxLQUpvRCxlQUlwREEsS0FKb0Q7QUFBQSxNQUk3Q0MsUUFKNkMsZUFJN0NBLFFBSjZDOztBQUFBLGtCQUtoQkMsK0NBQVEsQ0FBVSxFQUFWLENBTFE7QUFBQSxNQUtwREMsYUFMb0Q7QUFBQSxNQUtyQ0MsZ0JBTHFDOztBQU81REMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsaUNBQU1ELEtBQU47QUFBYU0sWUFBTSxFQUFFO0FBQXJCLE9BQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFELGtEQUFTLENBQUMsWUFBTTtBQUNkRCxvQkFBZ0IsQ0FDZEcsNERBQVcsQ0FBQ1AsS0FBSyxDQUFDTSxNQUFQLEVBQWViLEtBQWYsQ0FERyxDQUFoQjtBQUlELEdBTFEsRUFLTixDQUFDTyxLQUFLLENBQUNNLE1BQVAsRUFBZVosTUFBTSxDQUFDYyxNQUF0QixDQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQ0UsV0FBSyxZQUFLZCxNQUFNLENBQUNjLE1BQVosYUFEUDtBQUVFLGlCQUFXLEVBQUMsMEdBRmQ7QUFHRSxjQUFRLEVBQUM7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFBLGlCQUNJWCxRQUFRLGlCQUNSLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUlFO0FBQVMsaUJBQVMsRUFBRVksdUVBQXBCO0FBQUEsbUJBQ0ksQ0FBQ1osUUFBRCxpQkFDRCw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZILGVBS0UsOERBQUMsOERBQUQ7QUFBUyxlQUFLLEVBQUVNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsRUFPSSxDQUFDTixRQUFELGlCQUNBO0FBQU0sbUJBQVMsRUFBRVksc0VBQWVDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQSxrQkFERjtBQTBCRDs7R0E1Q3VCbEIsYTtVQUVQRyxrRCxFQUNNQyxxRDs7O0tBSENKLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjY2YzM1OTU2ZWQ2Nzc1N2QyMDU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBTRU8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVkL1NFT1wiO1xyXG5pbXBvcnQgeyBNYXNvbnJ5IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdHMvTWFzb25yeVwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdHMvQ2F0ZWdvcmllc1wiO1xyXG5cclxuaW1wb3J0IHVzZURldmljZURldGVjdCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IHNpemVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBwb3N0c0ZpbHRlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsc1wiO1xyXG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJUG9zdHNQcm9wcywgSVBvc3QgfSBmcm9tICcuLi8uLi90eXBlcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBhZGFwdGVyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FkYXB0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkUG9zdHMoeyBwb3N0cyB9OiBJUG9zdHNQcm9wcykge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpXHJcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KVxyXG4gIGNvbnN0IFsgZmlsdGVyZWRQb3N0cywgc2V0RmlsdGVyZWRQb3N0cyBdID0gdXNlU3RhdGU8SVBvc3RbXT4oW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBzZWFyY2g6ICcnIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZFBvc3RzKFxyXG4gICAgICBwb3N0c0ZpbHRlcihzdGF0ZS5zZWFyY2gsIHBvc3RzKVxyXG4gICAgKVxyXG5cclxuICB9LCBbc3RhdGUuc2VhcmNoLCByb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTRU9cclxuICAgICAgICB0aXRsZT17YCR7cm91dGVyLmFzUGF0aH0gfCBQb3N0c2B9XHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJRdWVyIHNhYmVyIGNvbW8gc2VyIHVtIHByb2dyYW1hZG9yPyBDb25maXJhIG5vc3NvcyBwb3N0cyBlIHNlamEgYmVtIHZpbmRvIGFvIG11bmRvIGRhIHByb2dyYW1hw6fDo28hXCJcclxuICAgICAgICBrZXl3b3Jkcz1cInByb2dyYW1hw6fDo28sIGVzdHVkb3MsIHRlY25vbG9naWEsIGNvbXB1dGHDp8OjbywgZ2FtZXMsIHdlYiwgYXBsaWNhdGl2b3MsIGNhcnJlaXJhIGVtIHRpLCBkZXNlbnZvbHZpbWVudG8gcHJvZmlzc2lvbmFsLCBtZXJjYWRvIGRlIHRpXCJcclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHsgaXNNb2JpbGUgJiYgXHJcbiAgICAgICAgICA8Q2F0ZWdvcmllcyAvPiBcclxuICAgICAgICB9XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIHsgIWlzTW9iaWxlICYmXHJcbiAgICAgICAgICAgPENhdGVnb3JpZXMgLz4gXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPE1hc29ucnkgcG9zdHM9e2ZpbHRlcmVkUG9zdHN9IC8+XHJcblxyXG4gICAgICAgICAgeyAhaXNNb2JpbGUgJiYgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZha2VfY29sfT48L3NwYW4+ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxyXG4gIGNvbnN0IHBhdGhzID0gYWxsUG9zdHMubWFwKFxyXG4gICAgKHBvc3QpID0+IHBvc3QuY2F0ZWdvcmllcy5zcGxpdCgnLCcpLm1hcChcclxuICAgICAgKGNhdCkgPT4gYC9wb3N0cy8ke2NhdH1gXHJcbiAgICApXHJcbiAgKS5mbGF0KClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbFBvc3RzKClcclxuICBsZXQgcG9zdHMgPSBkYXRhXHJcbiAgLmZpbHRlcihwb3N0ID0+IHBvc3QuY2F0ZWdvcmllcy5pbmNsdWRlcyhgJHtwYXJhbXMuc2x1Z31gKSApXHJcbiAgLm1hcChjb250ZW50ID0+IGFkYXB0ZXIoY29udGVudCkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDEyMFxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==