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
      title: "Posts | ".concat(router.asPath.split('/')[2]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiRmlsdGVyZWRQb3N0cyIsInBvc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiZmlsdGVyZWRQb3N0cyIsInNldEZpbHRlcmVkUG9zdHMiLCJ1c2VFZmZlY3QiLCJzZWFyY2giLCJwb3N0c0ZpbHRlciIsImFzUGF0aCIsInNwbGl0Iiwic3R5bGVzIiwiZmFrZV9jb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBOztBQUllLFNBQVNBLGFBQVQsT0FBK0M7QUFBQTs7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBRTVELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRjRELHlCQUd2Q0MseURBQWUsRUFId0I7QUFBQSxNQUdwREMsUUFIb0Qsb0JBR3BEQSxRQUhvRDs7QUFBQSxvQkFJaENDLGlEQUFVLENBQUNDLG1EQUFELENBSnNCO0FBQUEsTUFJcERDLEtBSm9ELGVBSXBEQSxLQUpvRDtBQUFBLE1BSTdDQyxRQUo2QyxlQUk3Q0EsUUFKNkM7O0FBQUEsa0JBS2hCQywrQ0FBUSxDQUFVLEVBQVYsQ0FMUTtBQUFBLE1BS3BEQyxhQUxvRDtBQUFBLE1BS3JDQyxnQkFMcUM7O0FBTzVEQyxrREFBUyxDQUFDLFlBQU07QUFDZEosWUFBUSxpQ0FBTUQsS0FBTjtBQUFhTSxZQUFNLEVBQUU7QUFBckIsT0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUQsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELG9CQUFnQixDQUNkRyw0REFBVyxDQUFDUCxLQUFLLENBQUNNLE1BQVAsRUFBZWIsS0FBZixDQURHLENBQWhCO0FBSUQsR0FMUSxFQUtOLENBQUNPLEtBQUssQ0FBQ00sTUFBUCxFQUFlWixNQUFNLENBQUNjLE1BQXRCLENBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFDRSxXQUFLLG9CQUFhZCxNQUFNLENBQUNjLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUFiLENBRFA7QUFFRSxpQkFBVyxFQUFDLDBHQUZkO0FBR0UsY0FBUSxFQUFDO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0U7QUFBQSxpQkFDSVosUUFBUSxpQkFDUiw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJRTtBQUFTLGlCQUFTLEVBQUVhLHVFQUFwQjtBQUFBLG1CQUNJLENBQUNiLFFBQUQsaUJBQ0QsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSCxlQUtFLDhEQUFDLDhEQUFEO0FBQVMsZUFBSyxFQUFFTTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLEVBT0ksQ0FBQ04sUUFBRCxpQkFDQTtBQUFNLG1CQUFTLEVBQUVhLHNFQUFlQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUEsa0JBREY7QUEwQkQ7O0dBNUN1Qm5CLGE7VUFFUEcsa0QsRUFDTUMscUQ7OztLQUhDSixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS44OTY0YjBkMWQ1NWRiMTQ1YWNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgU0VPIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9TRU9cIjtcclxuaW1wb3J0IHsgTWFzb25yeSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RzL01hc29ucnlcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RzL0NhdGVnb3JpZXNcIjtcclxuXHJcbmltcG9ydCB1c2VEZXZpY2VEZXRlY3QgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZURldmljZVwiO1xyXG5pbXBvcnQgeyBzaXplcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgcG9zdHNGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbHNcIjtcclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgSVBvc3RzUHJvcHMsIElQb3N0IH0gZnJvbSAnLi4vLi4vdHlwZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jbGllbnRcIjtcclxuaW1wb3J0IHsgYWRhcHRlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hZGFwdGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJlZFBvc3RzKHsgcG9zdHMgfTogSVBvc3RzUHJvcHMpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKVxyXG4gIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcclxuICBjb25zdCBbIGZpbHRlcmVkUG9zdHMsIHNldEZpbHRlcmVkUG9zdHMgXSA9IHVzZVN0YXRlPElQb3N0W10+KFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgc2VhcmNoOiAnJyB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWRQb3N0cyhcclxuICAgICAgcG9zdHNGaWx0ZXIoc3RhdGUuc2VhcmNoLCBwb3N0cylcclxuICAgIClcclxuXHJcbiAgfSwgW3N0YXRlLnNlYXJjaCwgcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U0VPXHJcbiAgICAgICAgdGl0bGU9e2BQb3N0cyB8ICR7cm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzJdfWB9XHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJRdWVyIHNhYmVyIGNvbW8gc2VyIHVtIHByb2dyYW1hZG9yPyBDb25maXJhIG5vc3NvcyBwb3N0cyBlIHNlamEgYmVtIHZpbmRvIGFvIG11bmRvIGRhIHByb2dyYW1hw6fDo28hXCJcclxuICAgICAgICBrZXl3b3Jkcz1cInByb2dyYW1hw6fDo28sIGVzdHVkb3MsIHRlY25vbG9naWEsIGNvbXB1dGHDp8OjbywgZ2FtZXMsIHdlYiwgYXBsaWNhdGl2b3MsIGNhcnJlaXJhIGVtIHRpLCBkZXNlbnZvbHZpbWVudG8gcHJvZmlzc2lvbmFsLCBtZXJjYWRvIGRlIHRpXCJcclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHsgaXNNb2JpbGUgJiYgXHJcbiAgICAgICAgICA8Q2F0ZWdvcmllcyAvPiBcclxuICAgICAgICB9XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIHsgIWlzTW9iaWxlICYmXHJcbiAgICAgICAgICAgPENhdGVnb3JpZXMgLz4gXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPE1hc29ucnkgcG9zdHM9e2ZpbHRlcmVkUG9zdHN9IC8+XHJcblxyXG4gICAgICAgICAgeyAhaXNNb2JpbGUgJiYgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZha2VfY29sfT48L3NwYW4+ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxyXG4gIGNvbnN0IHBhdGhzID0gYWxsUG9zdHMubWFwKFxyXG4gICAgKHBvc3QpID0+IHBvc3QuY2F0ZWdvcmllcy5zcGxpdCgnLCcpLm1hcChcclxuICAgICAgKGNhdCkgPT4gYC9wb3N0cy8ke2NhdH1gXHJcbiAgICApXHJcbiAgKS5mbGF0KClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbFBvc3RzKClcclxuICBsZXQgcG9zdHMgPSBkYXRhXHJcbiAgLmZpbHRlcihwb3N0ID0+IHBvc3QuY2F0ZWdvcmllcy5pbmNsdWRlcyhgJHtwYXJhbXMuc2x1Z31gKSApXHJcbiAgLm1hcChjb250ZW50ID0+IGFkYXB0ZXIoY29udGVudCkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDEyMFxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==