webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/styles.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./css/styles.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "* {\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  /* Style the header */\r\n  .header {\r\n    grid-area: header;\r\n    background-color: #ffffff;\r\n    text-align: left;\r\n    font-size: 35px;\r\n    \r\n  }\r\n  \r\n  /* The grid container */\r\n  .grid-container {\r\n    display: grid;\r\n    grid-template-columns:20px 1300px 20px ;\r\n    grid-template-areas: \r\n      'left header right ' \r\n      'left middle  right ' \r\n      ' left footer  right ';\r\n    /* grid-column-gap: 10px; - if you want gap between the columns */\r\n  } \r\n  \r\n  .middle\r\n   {\r\n    height: auto; /* Should be removed. Only for demonstration */\r\n  }\r\n  \r\n  \r\n  /* Style the left column */\r\n  .left {\r\n    grid-area: left;\r\n\r\n  }\r\n  \r\n  /* Style the middle column */\r\n  .middle {\r\n    grid-area: middle;\r\n  }\r\n  \r\n  /* Style the right column */\r\n  .right {\r\n    grid-area: right;\r\n  }\r\n  \r\n  /* Style the footer */\r\n  .footer {\r\n    grid-area: footer;\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n  \r\n  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .grid-container  {\r\n      grid-template-areas: \r\n        'header header header header header header' \r\n        'left left left left left left' \r\n        'middle middle middle middle middle middle' \r\n        'right right right right right right' \r\n        'footer footer footer footer footer footer';\r\n    }\r\n  }\r\n\r\n  .brand{\r\n    float: left;\r\n  }\r\n  .topnav {\r\n    float: right;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    margin-top: 15px;\r\n    \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    \r\n    color: #000000;\r\n    text-align: center;\r\n    padding: 10px 40px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n   \r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .topnav a.navbutton {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  .topnav a.navbutton:hover {\r\n    background-color: white;\r\n    border: 1px black solid;\r\n  \r\n  }\r\n  #slider\r\n  {\r\n    background-image: url('/img_slider.jpg');\r\n    \r\n    display: -moz-box;\r\n    \r\n    display: flex;\r\n  \r\n    -moz-box-orient: vertical;\r\n  \r\n    -moz-box-direction: normal;\r\n  \r\n         flex-direction: column;\r\n    height: 470px;\r\n  }\r\n  #virtual\r\n  {\r\n    background-image: url('/virtual reality.jpg');\r\n    background-size: 100% 100%;\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n#virtual:hover {\r\n  background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/virtual reality.jpg');\r\n  color: #000000;\r\n}\r\n  #estate\r\n  {\r\n    background-image: url('/real estate video.jpg');\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    color: #ffffff;\r\n    position: relative;\r\n\r\n  }\r\n  #estate:hover\r\n  {\r\n    background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/real estate video.jpg');\r\n    color: #000000;\r\n  }\r\n  .textslider\r\n  {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    \r\n  }\r\n  .box\r\n  {\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n  }\r\n  .title\r\n  {\r\n    color:yellow\r\n  }\r\n  .rendering\r\n  {\r\n    text-align: left;\r\n    background:linear-gradient(185deg, black, black 80%, lightgray 20%, lightgray);\r\n    color: white;\r\n    height: 500px;\r\n  }\r\n  .boxbutton\r\n  {\r\n    text-align: right;\r\n    margin-top: 50px;\r\n  }\r\n  .button\r\n  {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n    padding: 10px 80px;\r\n    border-radius: 5%;\r\n    border: none;\r\n  }\r\n  .button:hover\r\n  {\r\n    background-color: white;\r\n  }\r\n  .team\r\n  {\r\n   background-color: black;\r\n   color: white;\r\n   \r\n\r\n  }\r\n  .team-item\r\n  {\r\n    list-style-type: none;\r\n  }\r\n\r\n\r\n\r\n\r\n  \r\n  .rows\r\n  {\r\n    display: -moz-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -moz-box-orient: horizontal;\r\n    -moz-box-direction: normal;\r\n         flex-direction: row;\r\n    -moz-box-pack: center;\r\n         justify-content: center;\r\n  }\r\n  .rows > div\r\n  { \r\n    margin: 50px;\r\n    text-align: left;\r\n    width: 200px;\r\n    \r\n  }\r\n  #imgfooter\r\n  {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 0px;\r\n  }\r\n", "",{"version":3,"sources":["C:/Users/saido/Documents/3dbrand/css/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAAsB;SAAtB,sBAAsB;EACxB;;EAEA;IACE,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA,qBAAqB;EACrB;IACE,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;;EAEjB;;EAEA,uBAAuB;EACvB;IACE,aAAa;IACb,uCAAuC;IACvC;;;4BAGwB;IACxB,iEAAiE;EACnE;;EAEA;;IAEE,YAAY,EAAE,8CAA8C;EAC9D;;;EAGA,0BAA0B;EAC1B;IACE,eAAe;;EAEjB;;EAEA,4BAA4B;EAC5B;IACE,iBAAiB;EACnB;;EAEA,2BAA2B;EAC3B;IACE,gBAAgB;EAClB;;EAEA,qBAAqB;EACrB;IACE,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA,yGAAyG;EACzG;IACE;MACE;;;;;mDAK6C;IAC/C;EACF;;EAEA;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;;EAElB;;EAEA;IACE,WAAW;;IAEX,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;EACjB;;EAEA;;IAEE,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,uBAAuB;IACvB,uBAAuB;;EAEzB;EACA;;IAEE,wCAAwC;;IAExC,iBAAa;;IAAb,aAAa;;IAEb,yBAAsB;;IAAtB,0BAAsB;;SAAtB,sBAAsB;IACtB,aAAa;EACf;EACA;;IAEE,6CAA6C;IAC7C,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;EACE,kHAAkH;EAClH,cAAc;AAChB;EACE;;IAEE,+CAA+C;IAC/C,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,cAAc;IACd,kBAAkB;;EAEpB;EACA;;IAEE,oHAAoH;IACpH,cAAc;EAChB;EACA;;IAEE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;;EAEpB;EACA;;IAEE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;;IAEE;EACF;EACA;;IAEE,gBAAgB;IAChB,8EAA8E;IAC9E,YAAY;IACZ,aAAa;EACf;EACA;;IAEE,iBAAiB;IACjB,gBAAgB;EAClB;EACA;;IAEE,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;EACd;EACA;;IAEE,uBAAuB;EACzB;EACA;;GAEC,uBAAuB;GACvB,YAAY;;;EAGb;EACA;;IAEE,qBAAqB;EACvB;;;;;;EAMA;;IAEE,iBAAa;IAAb,aAAa;IACb,eAAe;IACf,2BAAmB;IAAnB,0BAAmB;SAAnB,mBAAmB;IACnB,qBAAuB;SAAvB,uBAAuB;EACzB;EACA;;IAEE,YAAY;IACZ,gBAAgB;IAChB,YAAY;;EAEd;EACA;;IAEE,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,UAAU;EACZ","file":"styles.css","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  /* Style the header */\r\n  .header {\r\n    grid-area: header;\r\n    background-color: #ffffff;\r\n    text-align: left;\r\n    font-size: 35px;\r\n    \r\n  }\r\n  \r\n  /* The grid container */\r\n  .grid-container {\r\n    display: grid;\r\n    grid-template-columns:20px 1300px 20px ;\r\n    grid-template-areas: \r\n      'left header right ' \r\n      'left middle  right ' \r\n      ' left footer  right ';\r\n    /* grid-column-gap: 10px; - if you want gap between the columns */\r\n  } \r\n  \r\n  .middle\r\n   {\r\n    height: auto; /* Should be removed. Only for demonstration */\r\n  }\r\n  \r\n  \r\n  /* Style the left column */\r\n  .left {\r\n    grid-area: left;\r\n\r\n  }\r\n  \r\n  /* Style the middle column */\r\n  .middle {\r\n    grid-area: middle;\r\n  }\r\n  \r\n  /* Style the right column */\r\n  .right {\r\n    grid-area: right;\r\n  }\r\n  \r\n  /* Style the footer */\r\n  .footer {\r\n    grid-area: footer;\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n  \r\n  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .grid-container  {\r\n      grid-template-areas: \r\n        'header header header header header header' \r\n        'left left left left left left' \r\n        'middle middle middle middle middle middle' \r\n        'right right right right right right' \r\n        'footer footer footer footer footer footer';\r\n    }\r\n  }\r\n\r\n  .brand{\r\n    float: left;\r\n  }\r\n  .topnav {\r\n    float: right;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    margin-top: 15px;\r\n    \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    \r\n    color: #000000;\r\n    text-align: center;\r\n    padding: 10px 40px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n   \r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .topnav a.navbutton {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  .topnav a.navbutton:hover {\r\n    background-color: white;\r\n    border: 1px black solid;\r\n  \r\n  }\r\n  #slider\r\n  {\r\n    background-image: url('/img_slider.jpg');\r\n    \r\n    display: flex;\r\n  \r\n    flex-direction: column;\r\n    height: 470px;\r\n  }\r\n  #virtual\r\n  {\r\n    background-image: url('/virtual reality.jpg');\r\n    background-size: 100% 100%;\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n#virtual:hover {\r\n  background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/virtual reality.jpg');\r\n  color: #000000;\r\n}\r\n  #estate\r\n  {\r\n    background-image: url('/real estate video.jpg');\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    color: #ffffff;\r\n    position: relative;\r\n\r\n  }\r\n  #estate:hover\r\n  {\r\n    background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/real estate video.jpg');\r\n    color: #000000;\r\n  }\r\n  .textslider\r\n  {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    \r\n  }\r\n  .box\r\n  {\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n  }\r\n  .title\r\n  {\r\n    color:yellow\r\n  }\r\n  .rendering\r\n  {\r\n    text-align: left;\r\n    background:linear-gradient(185deg, black, black 80%, lightgray 20%, lightgray);\r\n    color: white;\r\n    height: 500px;\r\n  }\r\n  .boxbutton\r\n  {\r\n    text-align: right;\r\n    margin-top: 50px;\r\n  }\r\n  .button\r\n  {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n    padding: 10px 80px;\r\n    border-radius: 5%;\r\n    border: none;\r\n  }\r\n  .button:hover\r\n  {\r\n    background-color: white;\r\n  }\r\n  .team\r\n  {\r\n   background-color: black;\r\n   color: white;\r\n   \r\n\r\n  }\r\n  .team-item\r\n  {\r\n    list-style-type: none;\r\n  }\r\n\r\n\r\n\r\n\r\n  \r\n  .rows\r\n  {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n  .rows > div\r\n  { \r\n    margin: 50px;\r\n    text-align: left;\r\n    width: 200px;\r\n    \r\n  }\r\n  #imgfooter\r\n  {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 0px;\r\n  }\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxNQUFNLG9DQUFvQyxvQ0FBb0MsT0FBTyxrQkFBa0Isa0RBQWtELDBCQUEwQiwyQkFBMkIsT0FBTyxpREFBaUQsMEJBQTBCLGtDQUFrQyx5QkFBeUIsd0JBQXdCLGVBQWUsMkRBQTJELHNCQUFzQixnREFBZ0QsNkhBQTZILGlDQUFpQyxnREFBZ0QsNEJBQTRCLHFCQUFxQix1REFBdUQsMERBQTBELHdCQUF3QixXQUFXLHdEQUF3RCwwQkFBMEIsT0FBTyxzREFBc0QseUJBQXlCLE9BQU8saURBQWlELDBCQUEwQixrQ0FBa0MsdUJBQXVCLDJCQUEyQiwyQkFBMkIsT0FBTyx1SkFBdUosMEJBQTBCLHFTQUFxUyxTQUFTLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLGVBQWUscUJBQXFCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLGVBQWUsdUJBQXVCLG9CQUFvQiwrQkFBK0IsMkJBQTJCLDJCQUEyQiw4QkFBOEIsd0JBQXdCLE9BQU8sNkJBQTZCLDRCQUE0QiwwQkFBMEIsT0FBTyxpQ0FBaUMsaUNBQWlDLHFCQUFxQiwwQkFBMEIsT0FBTyxpQ0FBaUMsZ0NBQWdDLGdDQUFnQyxhQUFhLG9CQUFvQixpREFBaUQsa0NBQWtDLDhCQUE4Qix3Q0FBd0MseUNBQXlDLDBDQUEwQyxzQkFBc0IsT0FBTyxxQkFBcUIsc0RBQXNELG1DQUFtQyxxQkFBcUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLEtBQUssd0JBQXdCLHlIQUF5SCxxQkFBcUIsS0FBSyxvQkFBb0Isd0RBQXdELHFCQUFxQixzQkFBc0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsV0FBVywwQkFBMEIsNkhBQTZILHVCQUF1QixPQUFPLHdCQUF3QiwyQkFBMkIsb0JBQW9CLG9CQUFvQiwy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c0IsT0FBTyxxQkFBcUIsc0RBQXNELG1DQUFtQyxxQkFBcUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLEtBQUssd0JBQXdCLHlIQUF5SCxxQkFBcUIsS0FBSyxvQkFBb0Isd0RBQXdELHFCQUFxQixzQkFBc0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsV0FBVywwQkFBMEIsNkhBQTZILHVCQUF1QixPQUFPLHdCQUF3QiwyQkFBMkIsb0JBQW9CLG9CQUFvQiwyQkFBMkIsZUFBZSxpQkFBaUIsMkJBQTJCLDBCQUEwQixPQUFPLG1CQUFtQiwyQkFBMkIsdUJBQXVCLHlCQUF5Qix1RkFBdUYscUJBQXFCLHNCQUFzQixPQUFPLHVCQUF1QiwwQkFBMEIseUJBQXlCLE9BQU8sb0JBQW9CLGlDQUFpQyxxQkFBcUIsMEJBQTBCLDJCQUEyQiwwQkFBMEIscUJBQXFCLE9BQU8sMEJBQTBCLGdDQUFnQyxPQUFPLGtCQUFrQiwrQkFBK0Isb0JBQW9CLGtCQUFrQix1QkFBdUIsOEJBQThCLE9BQU8sd0NBQXdDLHNCQUFzQix3QkFBd0IsNEJBQTRCLGdDQUFnQyxPQUFPLHdCQUF3QixzQkFBc0IseUJBQXlCLHFCQUFxQixlQUFlLHVCQUF1QixtQkFBbUIsMkJBQTJCLGtCQUFrQixtQkFBbUIsT0FBTyxPQUFPO0FBQ3J3VztBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmZkODZkZjMyZTE5MzRjNTMzZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgaGVhZGVyICovXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFRoZSBncmlkIGNvbnRhaW5lciAqL1xcclxcbiAgLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIwcHggMTMwMHB4IDIwcHggO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAnbGVmdCBoZWFkZXIgcmlnaHQgJyBcXHJcXG4gICAgICAnbGVmdCBtaWRkbGUgIHJpZ2h0ICcgXFxyXFxuICAgICAgJyBsZWZ0IGZvb3RlciAgcmlnaHQgJztcXHJcXG4gICAgLyogZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4OyAtIGlmIHlvdSB3YW50IGdhcCBiZXR3ZWVuIHRoZSBjb2x1bW5zICovXFxyXFxuICB9IFxcclxcbiAgXFxyXFxuICAubWlkZGxlXFxyXFxuICAge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87IC8qIFNob3VsZCBiZSByZW1vdmVkLiBPbmx5IGZvciBkZW1vbnN0cmF0aW9uICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGxlZnQgY29sdW1uICovXFxyXFxuICAubGVmdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIG1pZGRsZSBjb2x1bW4gKi9cXHJcXG4gIC5taWRkbGUge1xcclxcbiAgICBncmlkLWFyZWE6IG1pZGRsZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIHJpZ2h0IGNvbHVtbiAqL1xcclxcbiAgLnJpZ2h0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGZvb3RlciAqL1xcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHRocmVlIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuZ3JpZC1jb250YWluZXIgIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcicgXFxyXFxuICAgICAgICAnbGVmdCBsZWZ0IGxlZnQgbGVmdCBsZWZ0IGxlZnQnIFxcclxcbiAgICAgICAgJ21pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlJyBcXHJcXG4gICAgICAgICdyaWdodCByaWdodCByaWdodCByaWdodCByaWdodCByaWdodCcgXFxyXFxuICAgICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXInO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnJhbmR7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgLnRvcG5hdiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9wbmF2IGEge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYTpob3ZlciB7XFxyXFxuICAgXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYS5uYXZidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICAudG9wbmF2IGEubmF2YnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAjc2xpZGVyXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZ19zbGlkZXIuanBnJyk7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBcXHJcXG4gICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG4gIFxcclxcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gIFxcclxcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogNDcwcHg7XFxyXFxuICB9XFxyXFxuICAjdmlydHVhbFxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy92aXJ0dWFsIHJlYWxpdHkuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlydHVhbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTEsIDI1NSwgMzcsIDAuNjUxKSxyZ2JhKDI1MSwgMjU1LCAyNSwgMC42MSkpLCB1cmwoJy92aXJ0dWFsIHJlYWxpdHkuanBnJyk7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuICAjZXN0YXRlXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3JlYWwgZXN0YXRlIHZpZGVvLmpwZycpO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgfVxcclxcbiAgI2VzdGF0ZTpob3ZlclxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTEsIDI1NSwgMzcsIDAuNjUxKSxyZ2JhKDI1MSwgMjU1LCAyNSwgMC42MSkpLCB1cmwoJy9yZWFsIGVzdGF0ZSB2aWRlby5qcGcnKTtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB9XFxyXFxuICAudGV4dHNsaWRlclxcclxcbiAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5ib3hcXHJcXG4gIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIC50aXRsZVxcclxcbiAge1xcclxcbiAgICBjb2xvcjp5ZWxsb3dcXHJcXG4gIH1cXHJcXG4gIC5yZW5kZXJpbmdcXHJcXG4gIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTg1ZGVnLCBibGFjaywgYmxhY2sgODAlLCBsaWdodGdyYXkgMjAlLCBsaWdodGdyYXkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICB9XFxyXFxuICAuYm94YnV0dG9uXFxyXFxuICB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvblxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5idXR0b246aG92ZXJcXHJcXG4gIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAudGVhbVxcclxcbiAge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICBcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC50ZWFtLWl0ZW1cXHJcXG4gIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgXFxyXFxuICAucm93c1xcclxcbiAge1xcclxcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxyXFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5yb3dzID4gZGl2XFxyXFxuICB7IFxcclxcbiAgICBtYXJnaW46IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAjaW1nZm9vdGVyXFxyXFxuICB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgfVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3NhaWRvL0RvY3VtZW50cy8zZGJyYW5kL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQXNCO1NBQXRCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0VBRWpCOztFQUVBLHVCQUF1QjtFQUN2QjtJQUNFLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkM7Ozs0QkFHd0I7SUFDeEIsaUVBQWlFO0VBQ25FOztFQUVBOztJQUVFLFlBQVksRUFBRSw4Q0FBOEM7RUFDOUQ7OztFQUdBLDBCQUEwQjtFQUMxQjtJQUNFLGVBQWU7O0VBRWpCOztFQUVBLDRCQUE0QjtFQUM1QjtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQSx5R0FBeUc7RUFDekc7SUFDRTtNQUNFOzs7OzttREFLNkM7SUFDL0M7RUFDRjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLFdBQVc7O0lBRVgsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsdUJBQXVCOztFQUV6QjtFQUNBOztJQUVFLHdDQUF3Qzs7SUFFeEMsaUJBQWE7O0lBQWIsYUFBYTs7SUFFYix5QkFBc0I7O0lBQXRCLDBCQUFzQjs7U0FBdEIsc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtFQUNBOztJQUVFLDZDQUE2QztJQUM3QywwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxrSEFBa0g7RUFDbEgsY0FBYztBQUNoQjtFQUNFOztJQUVFLCtDQUErQztJQUMvQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCOztFQUVwQjtFQUNBOztJQUVFLG9IQUFvSDtJQUNwSCxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCOztFQUVwQjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRTtFQUNGO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLDhFQUE4RTtJQUM5RSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7O0lBRUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7O0dBRUMsdUJBQXVCO0dBQ3ZCLFlBQVk7OztFQUdiO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCOzs7Ozs7RUFNQTs7SUFFRSxpQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLDBCQUFtQjtTQUFuQixtQkFBbUI7SUFDbkIscUJBQXVCO1NBQXZCLHVCQUF1QjtFQUN6QjtFQUNBOztJQUVFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTs7RUFFZDtFQUNBOztJQUVFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7RUFDWlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgaGVhZGVyICovXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFRoZSBncmlkIGNvbnRhaW5lciAqL1xcclxcbiAgLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIwcHggMTMwMHB4IDIwcHggO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAnbGVmdCBoZWFkZXIgcmlnaHQgJyBcXHJcXG4gICAgICAnbGVmdCBtaWRkbGUgIHJpZ2h0ICcgXFxyXFxuICAgICAgJyBsZWZ0IGZvb3RlciAgcmlnaHQgJztcXHJcXG4gICAgLyogZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4OyAtIGlmIHlvdSB3YW50IGdhcCBiZXR3ZWVuIHRoZSBjb2x1bW5zICovXFxyXFxuICB9IFxcclxcbiAgXFxyXFxuICAubWlkZGxlXFxyXFxuICAge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87IC8qIFNob3VsZCBiZSByZW1vdmVkLiBPbmx5IGZvciBkZW1vbnN0cmF0aW9uICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGxlZnQgY29sdW1uICovXFxyXFxuICAubGVmdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIG1pZGRsZSBjb2x1bW4gKi9cXHJcXG4gIC5taWRkbGUge1xcclxcbiAgICBncmlkLWFyZWE6IG1pZGRsZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIHJpZ2h0IGNvbHVtbiAqL1xcclxcbiAgLnJpZ2h0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGZvb3RlciAqL1xcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHRocmVlIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuZ3JpZC1jb250YWluZXIgIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcicgXFxyXFxuICAgICAgICAnbGVmdCBsZWZ0IGxlZnQgbGVmdCBsZWZ0IGxlZnQnIFxcclxcbiAgICAgICAgJ21pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlJyBcXHJcXG4gICAgICAgICdyaWdodCByaWdodCByaWdodCByaWdodCByaWdodCByaWdodCcgXFxyXFxuICAgICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXInO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnJhbmR7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgLnRvcG5hdiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9wbmF2IGEge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYTpob3ZlciB7XFxyXFxuICAgXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYS5uYXZidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICAudG9wbmF2IGEubmF2YnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAjc2xpZGVyXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZ19zbGlkZXIuanBnJyk7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogNDcwcHg7XFxyXFxuICB9XFxyXFxuICAjdmlydHVhbFxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy92aXJ0dWFsIHJlYWxpdHkuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlydHVhbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTEsIDI1NSwgMzcsIDAuNjUxKSxyZ2JhKDI1MSwgMjU1LCAyNSwgMC42MSkpLCB1cmwoJy92aXJ0dWFsIHJlYWxpdHkuanBnJyk7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuICAjZXN0YXRlXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3JlYWwgZXN0YXRlIHZpZGVvLmpwZycpO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgfVxcclxcbiAgI2VzdGF0ZTpob3ZlclxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTEsIDI1NSwgMzcsIDAuNjUxKSxyZ2JhKDI1MSwgMjU1LCAyNSwgMC42MSkpLCB1cmwoJy9yZWFsIGVzdGF0ZSB2aWRlby5qcGcnKTtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB9XFxyXFxuICAudGV4dHNsaWRlclxcclxcbiAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5ib3hcXHJcXG4gIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIC50aXRsZVxcclxcbiAge1xcclxcbiAgICBjb2xvcjp5ZWxsb3dcXHJcXG4gIH1cXHJcXG4gIC5yZW5kZXJpbmdcXHJcXG4gIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTg1ZGVnLCBibGFjaywgYmxhY2sgODAlLCBsaWdodGdyYXkgMjAlLCBsaWdodGdyYXkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICB9XFxyXFxuICAuYm94YnV0dG9uXFxyXFxuICB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvblxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5idXR0b246aG92ZXJcXHJcXG4gIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAudGVhbVxcclxcbiAge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICBcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC50ZWFtLWl0ZW1cXHJcXG4gIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgXFxyXFxuICAucm93c1xcclxcbiAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnJvd3MgPiBkaXZcXHJcXG4gIHsgXFxyXFxuICAgIG1hcmdpbjogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gICNpbWdmb290ZXJcXHJcXG4gIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxuICB9XFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==