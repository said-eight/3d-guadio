webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\saido\\Documents\\3dbrand\\pages\\team.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Team = function Team(props) {
  return __jsx("div", {
    className: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "box team",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-team",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "OUR TEAM"), props.users.map(function (user) {
    return __jsx("li", {
      className: "list-team-item",
      key: user.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, user.first_name, " ", user.last_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, "Email: ", user.email), __jsx("button", {
      className: "button",
      onClick: function onClick() {
        return Router.push("/users/[id]", "/users/".concat(user.id));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }, "View profile")), __jsx("img", {
      src: user.avatar,
      alt: "",
      className: "imgteam",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }));
  }))));
};

_c = Team;

Team.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, resJSON;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("https://reqres.in/api/users");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            resJSON = _context.sent;
            return _context.abrupt("return", {
              users: resJSON.data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS5qcyJdLCJuYW1lcyI6WyJUZWFtIiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsIlJvdXRlciIsInB1c2giLCJhdmF0YXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iLCJyZXNKU09OIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsU0FDUjtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRDtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLFdBQ2Y7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBK0IsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJRCxJQUFJLENBQUNFLFVBRFQsT0FDc0JGLElBQUksQ0FBQ0csU0FEM0IsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVdILElBQUksQ0FBQ0ksS0FBaEIsQ0FKRixFQUtHO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQTJCLGFBQU8sRUFBRTtBQUFBLGVBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxpQ0FBcUNOLElBQUksQ0FBQ0MsRUFBMUMsRUFBTjtBQUFBLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEgsQ0FGRixFQVNFO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNPLE1BQWY7QUFBdUIsU0FBRyxFQUFDLEVBQTNCO0FBQThCLGVBQVMsRUFBQyxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsQ0FEZTtBQUFBLEdBQWhCLENBRkgsQ0FGRixDQUZDLENBRFE7QUFBQSxDQUFiOztLQUFNWCxJOztBQXlCTkEsSUFBSSxDQUFDWSxlQUFMO0FBQUEsOExBQXVCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hDLHVEQUFLLENBQUMsNkJBQUQsQ0FERjs7QUFBQTtBQUNmQyxlQURlO0FBQUE7QUFBQSxtQkFFQ0EsR0FBRyxDQUFDQyxJQUFKLEVBRkQ7O0FBQUE7QUFFZkMsbUJBRmU7QUFBQSw2Q0FHZDtBQUNMZixtQkFBSyxFQUFFZSxPQUFPLENBQUNDO0FBRFYsYUFIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZWxCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uMDFlNmUyNTMyMDA3OTZmYzlmMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5cclxuXHJcbmNvbnN0IFRlYW0gPSAocHJvcHMpID0+IChcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IHRlYW1cIj5cclxuICAgICAgXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXRlYW1cIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+T1VSIFRFQU08L2gxPlxyXG4gICAgICAgIHtwcm9wcy51c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LXRlYW0taXRlbVwiIGtleT17dXNlci5pZH0gPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAge3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL3VzZXJzL1tpZF1gLCBgL3VzZXJzLyR7dXNlci5pZH1gKX0gPlZpZXcgcHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWd0ZWFtXCIgIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcblRlYW0uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzXCIpO1xyXG4gIGNvbnN0IHJlc0pTT04gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyczogcmVzSlNPTi5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtOyJdLCJzb3VyY2VSb290IjoiIn0=