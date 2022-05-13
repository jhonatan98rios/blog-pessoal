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
      title: "".concat(router.asPath.split('/')[1], " | Posts"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiRmlsdGVyZWRQb3N0cyIsInBvc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiZmlsdGVyZWRQb3N0cyIsInNldEZpbHRlcmVkUG9zdHMiLCJ1c2VFZmZlY3QiLCJzZWFyY2giLCJwb3N0c0ZpbHRlciIsImFzUGF0aCIsInNwbGl0Iiwic3R5bGVzIiwiZmFrZV9jb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBOztBQUllLFNBQVNBLGFBQVQsT0FBK0M7QUFBQTs7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBRTVELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRjRELHlCQUd2Q0MseURBQWUsRUFId0I7QUFBQSxNQUdwREMsUUFIb0Qsb0JBR3BEQSxRQUhvRDs7QUFBQSxvQkFJaENDLGlEQUFVLENBQUNDLG1EQUFELENBSnNCO0FBQUEsTUFJcERDLEtBSm9ELGVBSXBEQSxLQUpvRDtBQUFBLE1BSTdDQyxRQUo2QyxlQUk3Q0EsUUFKNkM7O0FBQUEsa0JBS2hCQywrQ0FBUSxDQUFVLEVBQVYsQ0FMUTtBQUFBLE1BS3BEQyxhQUxvRDtBQUFBLE1BS3JDQyxnQkFMcUM7O0FBTzVEQyxrREFBUyxDQUFDLFlBQU07QUFDZEosWUFBUSxpQ0FBTUQsS0FBTjtBQUFhTSxZQUFNLEVBQUU7QUFBckIsT0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUQsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELG9CQUFnQixDQUNkRyw0REFBVyxDQUFDUCxLQUFLLENBQUNNLE1BQVAsRUFBZWIsS0FBZixDQURHLENBQWhCO0FBSUQsR0FMUSxFQUtOLENBQUNPLEtBQUssQ0FBQ00sTUFBUCxFQUFlWixNQUFNLENBQUNjLE1BQXRCLENBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFDRSxXQUFLLFlBQUtkLE1BQU0sQ0FBQ2MsTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQUwsYUFEUDtBQUVFLGlCQUFXLEVBQUMsMEdBRmQ7QUFHRSxjQUFRLEVBQUM7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFBLGlCQUNJWixRQUFRLGlCQUNSLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUlFO0FBQVMsaUJBQVMsRUFBRWEsdUVBQXBCO0FBQUEsbUJBQ0ksQ0FBQ2IsUUFBRCxpQkFDRCw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZILGVBS0UsOERBQUMsOERBQUQ7QUFBUyxlQUFLLEVBQUVNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsRUFPSSxDQUFDTixRQUFELGlCQUNBO0FBQU0sbUJBQVMsRUFBRWEsc0VBQWVDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQSxrQkFERjtBQTBCRDs7R0E1Q3VCbkIsYTtVQUVQRyxrRCxFQUNNQyxxRDs7O0tBSENKLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjI5OWRmMTEwYzkxYmNhOTRiOTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBTRU8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVkL1NFT1wiO1xyXG5pbXBvcnQgeyBNYXNvbnJ5IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdHMvTWFzb25yeVwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdHMvQ2F0ZWdvcmllc1wiO1xyXG5cclxuaW1wb3J0IHVzZURldmljZURldGVjdCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCB7IHNpemVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBwb3N0c0ZpbHRlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsc1wiO1xyXG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJUG9zdHNQcm9wcywgSVBvc3QgfSBmcm9tICcuLi8uLi90eXBlcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBhZGFwdGVyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FkYXB0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkUG9zdHMoeyBwb3N0cyB9OiBJUG9zdHNQcm9wcykge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpXHJcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KVxyXG4gIGNvbnN0IFsgZmlsdGVyZWRQb3N0cywgc2V0RmlsdGVyZWRQb3N0cyBdID0gdXNlU3RhdGU8SVBvc3RbXT4oW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBzZWFyY2g6ICcnIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZFBvc3RzKFxyXG4gICAgICBwb3N0c0ZpbHRlcihzdGF0ZS5zZWFyY2gsIHBvc3RzKVxyXG4gICAgKVxyXG5cclxuICB9LCBbc3RhdGUuc2VhcmNoLCByb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTRU9cclxuICAgICAgICB0aXRsZT17YCR7cm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzFdfSB8IFBvc3RzYH1cclxuICAgICAgICBkZXNjcmlwdGlvbj1cIlF1ZXIgc2FiZXIgY29tbyBzZXIgdW0gcHJvZ3JhbWFkb3I/IENvbmZpcmEgbm9zc29zIHBvc3RzIGUgc2VqYSBiZW0gdmluZG8gYW8gbXVuZG8gZGEgcHJvZ3JhbWHDp8OjbyFcIlxyXG4gICAgICAgIGtleXdvcmRzPVwicHJvZ3JhbWHDp8OjbywgZXN0dWRvcywgdGVjbm9sb2dpYSwgY29tcHV0YcOnw6NvLCBnYW1lcywgd2ViLCBhcGxpY2F0aXZvcywgY2FycmVpcmEgZW0gdGksIGRlc2Vudm9sdmltZW50byBwcm9maXNzaW9uYWwsIG1lcmNhZG8gZGUgdGlcIlxyXG4gICAgICAvPlxyXG4gICAgICBcclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgeyBpc01vYmlsZSAmJiBcclxuICAgICAgICAgIDxDYXRlZ29yaWVzIC8+IFxyXG4gICAgICAgIH1cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgeyAhaXNNb2JpbGUgJiZcclxuICAgICAgICAgICA8Q2F0ZWdvcmllcyAvPiBcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8TWFzb25yeSBwb3N0cz17ZmlsdGVyZWRQb3N0c30gLz5cclxuXHJcbiAgICAgICAgICB7ICFpc01vYmlsZSAmJiBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZmFrZV9jb2x9Pjwvc3Bhbj4gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpXHJcbiAgY29uc3QgcGF0aHMgPSBhbGxQb3N0cy5tYXAoXHJcbiAgICAocG9zdCkgPT4gcG9zdC5jYXRlZ29yaWVzLnNwbGl0KCcsJykubWFwKFxyXG4gICAgICAoY2F0KSA9PiBgL3Bvc3RzLyR7Y2F0fWBcclxuICAgIClcclxuICApLmZsYXQoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxyXG4gIGxldCBwb3N0cyA9IGRhdGFcclxuICAuZmlsdGVyKHBvc3QgPT4gcG9zdC5jYXRlZ29yaWVzLmluY2x1ZGVzKGAke3BhcmFtcy5zbHVnfWApIClcclxuICAubWFwKGNvbnRlbnQgPT4gYWRhcHRlcihjb250ZW50KSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMTIwXHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9