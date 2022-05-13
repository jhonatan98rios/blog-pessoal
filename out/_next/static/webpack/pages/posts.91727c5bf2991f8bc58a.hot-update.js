self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Posts; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Shared_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Shared/SEO */ "./src/components/Shared/SEO/index.tsx");
/* harmony import */ var _components_Posts_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Posts/Categories */ "./src/components/Posts/Categories/index.tsx");
/* harmony import */ var _components_Posts_Masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Posts/Masonry */ "./src/components/Posts/Masonry/index.tsx");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.ts");
/* harmony import */ var _hooks_useDevice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useDevice */ "./src/hooks/useDevice.ts");
/* harmony import */ var _context_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/store */ "./src/context/store.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/posts/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Desktop\\Projects\\pessoal\\BlogPessoal\\src\\pages\\posts\\index.tsx",
    _s = $RefreshSig$();









var __N_SSG = true;
function Posts(_ref) {
  _s();

  var posts = _ref.posts;

  var _useDeviceDetect = (0,_hooks_useDevice__WEBPACK_IMPORTED_MODULE_6__.default)(),
      isMobile = _useDeviceDetect.isMobile;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_store__WEBPACK_IMPORTED_MODULE_7__.default),
      state = _useContext.state;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      filteredPosts = _useState[0],
      setFilteredPosts = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setFilteredPosts((0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.postsFilter)(state.search, posts));
  }, [state.search]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_SEO__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Posts",
      description: "Quer saber como ser um programador? Confira nossos posts e seja bem vindo ao mundo da programa\xE7\xE3o!",
      keywords: "".concat(state.search, ", programa\xE7\xE3o, estudos, tecnologia, computa\xE7\xE3o, games, web, aplicativos, carreira em ti, desenvolvimento profissional, mercado de ti")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Categories__WEBPACK_IMPORTED_MODULE_3__.Categories, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: [!isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Categories__WEBPACK_IMPORTED_MODULE_3__.Categories, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 12
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Masonry__WEBPACK_IMPORTED_MODULE_4__.Masonry, {
          posts: filteredPosts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), !isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fake_col)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Posts, "qkpzDZvzfNWMvJgqkw2OFOSUSyQ=", false, function () {
  return [_hooks_useDevice__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Posts;

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3RzIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0Iiwic3RhdGUiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkUG9zdHMiLCJzZXRGaWx0ZXJlZFBvc3RzIiwidXNlRWZmZWN0IiwicG9zdHNGaWx0ZXIiLCJzZWFyY2giLCJzdHlsZXMiLCJmYWtlX2NvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTs7QUFFZSxTQUFTQSxLQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjs7QUFBQSx5QkFFL0JDLHlEQUFlLEVBRmdCO0FBQUEsTUFFNUNDLFFBRjRDLG9CQUU1Q0EsUUFGNEM7O0FBQUEsb0JBR2xDQyxpREFBVSxDQUFDQyxtREFBRCxDQUh3QjtBQUFBLE1BRzVDQyxLQUg0QyxlQUc1Q0EsS0FINEM7O0FBQUEsa0JBSVJDLCtDQUFRLENBQVUsRUFBVixDQUpBO0FBQUEsTUFJNUNDLGFBSjRDO0FBQUEsTUFJN0JDLGdCQUo2Qjs7QUFNcERDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxvQkFBZ0IsQ0FDZEUsNERBQVcsQ0FBQ0wsS0FBSyxDQUFDTSxNQUFQLEVBQWVYLEtBQWYsQ0FERyxDQUFoQjtBQUlELEdBTFEsRUFLTixDQUFDSyxLQUFLLENBQUNNLE1BQVAsQ0FMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUNFLFdBQUssU0FEUDtBQUVFLGlCQUFXLEVBQUMsMEdBRmQ7QUFHRSxjQUFRLFlBQUtOLEtBQUssQ0FBQ00sTUFBWDtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUEsaUJBQ0VULFFBQVEsaUJBQ1IsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBUyxpQkFBUyxFQUFFVSxzRUFBcEI7QUFBQSxtQkFDSSxDQUFDVixRQUFELGlCQUNELDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkgsZUFLRSw4REFBQyw4REFBRDtBQUFTLGVBQUssRUFBRUs7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixFQU9JLENBQUNMLFFBQUQsaUJBQ0E7QUFBTSxtQkFBUyxFQUFFVSxxRUFBZUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBLGtCQURGO0FBMkJEOztHQXhDdUJkLEs7VUFFREUscUQ7OztLQUZDRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjkxNzI3YzViZjI5OTFmOGJjNThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW1wb3J0IFNFTyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaGFyZWQvU0VPXCI7XHJcbmltcG9ydCB7IENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0cy9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IE1hc29ucnkgfSBmcm9tICAnLi4vLi4vY29tcG9uZW50cy9Qb3N0cy9NYXNvbnJ5J1xyXG5cclxuaW1wb3J0IHsgYWRhcHRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkYXB0ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NsaWVudCdcclxuaW1wb3J0IHsgcG9zdHNGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbHNcIjtcclxuaW1wb3J0IHVzZURldmljZURldGVjdCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRGV2aWNlXCI7XHJcbmltcG9ydCBTdG9yZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9zdG9yZSdcclxuXHJcbmltcG9ydCB7IElQb3N0c1Byb3BzLCBJUG9zdCB9IGZyb20gJy4uLy4uL3R5cGVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMgfTogSVBvc3RzUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KClcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcclxuICBjb25zdCBbIGZpbHRlcmVkUG9zdHMsIHNldEZpbHRlcmVkUG9zdHMgXSA9IHVzZVN0YXRlPElQb3N0W10+KFtdKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJlZFBvc3RzKFxyXG4gICAgICBwb3N0c0ZpbHRlcihzdGF0ZS5zZWFyY2gsIHBvc3RzKVxyXG4gICAgKVxyXG5cclxuICB9LCBbc3RhdGUuc2VhcmNoXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTRU9cclxuICAgICAgICB0aXRsZT17YFBvc3RzYH1cclxuICAgICAgICBkZXNjcmlwdGlvbj1cIlF1ZXIgc2FiZXIgY29tbyBzZXIgdW0gcHJvZ3JhbWFkb3I/IENvbmZpcmEgbm9zc29zIHBvc3RzIGUgc2VqYSBiZW0gdmluZG8gYW8gbXVuZG8gZGEgcHJvZ3JhbWHDp8OjbyFcIlxyXG4gICAgICAgIGtleXdvcmRzPXtgJHtzdGF0ZS5zZWFyY2h9LCBwcm9ncmFtYcOnw6NvLCBlc3R1ZG9zLCB0ZWNub2xvZ2lhLCBjb21wdXRhw6fDo28sIGdhbWVzLCB3ZWIsIGFwbGljYXRpdm9zLCBjYXJyZWlyYSBlbSB0aSwgZGVzZW52b2x2aW1lbnRvIHByb2Zpc3Npb25hbCwgbWVyY2FkbyBkZSB0aWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgeyBpc01vYmlsZSAmJiBcclxuICAgICAgICA8Q2F0ZWdvcmllcyAvPiBcclxuICAgICAgfVxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgeyAhaXNNb2JpbGUgJiZcclxuICAgICAgICAgICA8Q2F0ZWdvcmllcyAvPiBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPE1hc29ucnkgcG9zdHM9e2ZpbHRlcmVkUG9zdHN9IC8+XHJcblxyXG4gICAgICAgICAgeyAhaXNNb2JpbGUgJiYgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZha2VfY29sfT48L3NwYW4+ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxyXG4gIGNvbnN0IHBvc3RzID0gZGF0YS5tYXAoY29udGVudCA9PiBhZGFwdGVyKGNvbnRlbnQpKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDEyMFxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=