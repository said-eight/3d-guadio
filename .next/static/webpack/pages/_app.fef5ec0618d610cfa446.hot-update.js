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
exports.push([module.i, "* {\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  /* Style the header */\r\n  .header {\r\n    grid-area: header;\r\n    background-color: #ffffff;\r\n    text-align: left;\r\n    font-size: 35px;\r\n    \r\n  }\r\n  \r\n  /* The grid container */\r\n  .grid-container {\r\n    display: grid;\r\n    grid-template-columns:20px auto auto auto auto 20px ;\r\n    grid-template-areas: \r\n      'left header header header header right ' \r\n      'left middle middle middle middle right ' \r\n      ' left footer footer footer footer right ';\r\n    /* grid-column-gap: 10px; - if you want gap between the columns */\r\n  } \r\n  \r\n  .middle\r\n   {\r\n    height: auto; /* Should be removed. Only for demonstration */\r\n  }\r\n  \r\n  \r\n  /* Style the left column */\r\n  .left {\r\n    grid-area: left;\r\n\r\n  }\r\n  \r\n  /* Style the middle column */\r\n  .middle {\r\n    grid-area: middle;\r\n  }\r\n  \r\n  /* Style the right column */\r\n  .right {\r\n    grid-area: right;\r\n  }\r\n  \r\n  /* Style the footer */\r\n  .footer {\r\n    grid-area: footer;\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n  \r\n  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .grid-container  {\r\n      grid-template-areas: \r\n        'header header header header header header' \r\n        'left left left left left left' \r\n        'middle middle middle middle middle middle' \r\n        'right right right right right right' \r\n        'footer footer footer footer footer footer';\r\n    }\r\n  }\r\n\r\n  .brand{\r\n    float: left;\r\n  }\r\n  .topnav {\r\n    float: right;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    margin-top: 15px;\r\n    \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    \r\n    color: #000000;\r\n    text-align: center;\r\n    padding: 10px 40px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n   \r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .topnav a.navbutton {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  .topnav a.navbutton:hover {\r\n    background-color: white;\r\n    border: 1px black solid;\r\n  \r\n  }\r\n  #slider\r\n  {\r\n    background-image: url('/img_slider.jpg');\r\n    \r\n    display: -moz-box;\r\n    \r\n    display: flex;\r\n  \r\n    -moz-box-orient: vertical;\r\n  \r\n    -moz-box-direction: normal;\r\n  \r\n         flex-direction: column;\r\n    height: 470px;\r\n  }\r\n  #virtual\r\n  {\r\n    background-image: url('/virtual reality.jpg');\r\n    background-size: 100% 100%;\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n#virtual:hover {\r\n  background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/virtual reality.jpg');\r\n  color: #000000;\r\n}\r\n  #estate\r\n  {\r\n    background-image: url('/real estate video.jpg');\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    color: #ffffff;\r\n    position: relative;\r\n\r\n  }\r\n  #estate:hover\r\n  {\r\n    background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/real estate video.jpg');\r\n    color: #000000;\r\n  }\r\n  .textslider\r\n  {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    \r\n  }\r\n  .box\r\n  {\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n  }\r\n  .title\r\n  {\r\n    color:yellow\r\n  }\r\n  .rendering\r\n  {\r\n    text-align: left;\r\n    background:linear-gradient(185deg, black, black 80%, lightgray 20%, lightgray);\r\n    color: white;\r\n    height: 500px;\r\n  }\r\n  .boxbutton\r\n  {\r\n    text-align: right;\r\n    margin-top: 50px;\r\n  }\r\n  .button\r\n  {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n    padding: 10px 80px;\r\n    border-radius: 5%;\r\n    border: none;\r\n  }\r\n  .button:hover\r\n  {\r\n    background-color: white;\r\n  }\r\n \r\n  .list-team\r\n  {\r\n    list-style-type: none;\r\n    \r\n\r\n\r\n  }\r\n  .list-team-item\r\n  {\r\n     margin-top: 20px;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-pack:justify;\r\n         justify-content:space-between;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    border: 1px solid thistle;\r\n    padding: 10px;\r\n    \r\n  }\r\n  .imgteam\r\n  {\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n\r\n  \r\n  .rows\r\n  {\r\n    display: -moz-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -moz-box-orient: horizontal;\r\n    -moz-box-direction: normal;\r\n         flex-direction: row;\r\n    -moz-box-pack: center;\r\n         justify-content: center;\r\n  }\r\n  .rows > div\r\n  { \r\n    margin: 50px;\r\n    text-align: left;\r\n    width: 200px;\r\n    \r\n  }\r\n  #imgfooter\r\n  {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 0px;\r\n  }\r\n", "",{"version":3,"sources":["C:/Users/saido/Documents/3dbrand/css/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAAsB;SAAtB,sBAAsB;EACxB;;EAEA;IACE,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA,qBAAqB;EACrB;IACE,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;;EAEjB;;EAEA,uBAAuB;EACvB;IACE,aAAa;IACb,oDAAoD;IACpD;;;gDAG4C;IAC5C,iEAAiE;EACnE;;EAEA;;IAEE,YAAY,EAAE,8CAA8C;EAC9D;;;EAGA,0BAA0B;EAC1B;IACE,eAAe;;EAEjB;;EAEA,4BAA4B;EAC5B;IACE,iBAAiB;EACnB;;EAEA,2BAA2B;EAC3B;IACE,gBAAgB;EAClB;;EAEA,qBAAqB;EACrB;IACE,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA,yGAAyG;EACzG;IACE;MACE;;;;;mDAK6C;IAC/C;EACF;;EAEA;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;;EAElB;;EAEA;IACE,WAAW;;IAEX,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;EACjB;;EAEA;;IAEE,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,uBAAuB;IACvB,uBAAuB;;EAEzB;EACA;;IAEE,wCAAwC;;IAExC,iBAAa;;IAAb,aAAa;;IAEb,yBAAsB;;IAAtB,0BAAsB;;SAAtB,sBAAsB;IACtB,aAAa;EACf;EACA;;IAEE,6CAA6C;IAC7C,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;EACE,kHAAkH;EAClH,cAAc;AAChB;EACE;;IAEE,+CAA+C;IAC/C,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,cAAc;IACd,kBAAkB;;EAEpB;EACA;;IAEE,oHAAoH;IACpH,cAAc;EAChB;EACA;;IAEE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;;EAEpB;EACA;;IAEE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;;IAEE;EACF;EACA;;IAEE,gBAAgB;IAChB,8EAA8E;IAC9E,YAAY;IACZ,aAAa;EACf;EACA;;IAEE,iBAAiB;IACjB,gBAAgB;EAClB;EACA;;IAEE,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;EACd;EACA;;IAEE,uBAAuB;EACzB;;EAEA;;IAEE,qBAAqB;;;;EAIvB;EACA;;KAEG,gBAAgB;IACjB,iBAAa;IAAb,aAAa;IACb,qBAA6B;SAA7B,6BAA6B;IAC7B,sBAAmB;SAAnB,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;;EAEf;EACA;;IAEE,kBAAkB;EACpB;;;;;;EAMA;;IAEE,iBAAa;IAAb,aAAa;IACb,eAAe;IACf,2BAAmB;IAAnB,0BAAmB;SAAnB,mBAAmB;IACnB,qBAAuB;SAAvB,uBAAuB;EACzB;EACA;;IAEE,YAAY;IACZ,gBAAgB;IAChB,YAAY;;EAEd;EACA;;IAEE,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,UAAU;EACZ","file":"styles.css","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  /* Style the header */\r\n  .header {\r\n    grid-area: header;\r\n    background-color: #ffffff;\r\n    text-align: left;\r\n    font-size: 35px;\r\n    \r\n  }\r\n  \r\n  /* The grid container */\r\n  .grid-container {\r\n    display: grid;\r\n    grid-template-columns:20px auto auto auto auto 20px ;\r\n    grid-template-areas: \r\n      'left header header header header right ' \r\n      'left middle middle middle middle right ' \r\n      ' left footer footer footer footer right ';\r\n    /* grid-column-gap: 10px; - if you want gap between the columns */\r\n  } \r\n  \r\n  .middle\r\n   {\r\n    height: auto; /* Should be removed. Only for demonstration */\r\n  }\r\n  \r\n  \r\n  /* Style the left column */\r\n  .left {\r\n    grid-area: left;\r\n\r\n  }\r\n  \r\n  /* Style the middle column */\r\n  .middle {\r\n    grid-area: middle;\r\n  }\r\n  \r\n  /* Style the right column */\r\n  .right {\r\n    grid-area: right;\r\n  }\r\n  \r\n  /* Style the footer */\r\n  .footer {\r\n    grid-area: footer;\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n  \r\n  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .grid-container  {\r\n      grid-template-areas: \r\n        'header header header header header header' \r\n        'left left left left left left' \r\n        'middle middle middle middle middle middle' \r\n        'right right right right right right' \r\n        'footer footer footer footer footer footer';\r\n    }\r\n  }\r\n\r\n  .brand{\r\n    float: left;\r\n  }\r\n  .topnav {\r\n    float: right;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    margin-top: 15px;\r\n    \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    \r\n    color: #000000;\r\n    text-align: center;\r\n    padding: 10px 40px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n   \r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .topnav a.navbutton {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  .topnav a.navbutton:hover {\r\n    background-color: white;\r\n    border: 1px black solid;\r\n  \r\n  }\r\n  #slider\r\n  {\r\n    background-image: url('/img_slider.jpg');\r\n    \r\n    display: flex;\r\n  \r\n    flex-direction: column;\r\n    height: 470px;\r\n  }\r\n  #virtual\r\n  {\r\n    background-image: url('/virtual reality.jpg');\r\n    background-size: 100% 100%;\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n#virtual:hover {\r\n  background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/virtual reality.jpg');\r\n  color: #000000;\r\n}\r\n  #estate\r\n  {\r\n    background-image: url('/real estate video.jpg');\r\n    width: 300px;\r\n    height: 235px;\r\n    margin-left: auto;\r\n    color: #ffffff;\r\n    position: relative;\r\n\r\n  }\r\n  #estate:hover\r\n  {\r\n    background-image: linear-gradient(rgba(251, 255, 37, 0.651),rgba(251, 255, 25, 0.61)), url('/real estate video.jpg');\r\n    color: #000000;\r\n  }\r\n  .textslider\r\n  {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    \r\n  }\r\n  .box\r\n  {\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n  }\r\n  .title\r\n  {\r\n    color:yellow\r\n  }\r\n  .rendering\r\n  {\r\n    text-align: left;\r\n    background:linear-gradient(185deg, black, black 80%, lightgray 20%, lightgray);\r\n    color: white;\r\n    height: 500px;\r\n  }\r\n  .boxbutton\r\n  {\r\n    text-align: right;\r\n    margin-top: 50px;\r\n  }\r\n  .button\r\n  {\r\n    background-color: yellow;\r\n    color: black;\r\n    font-weight: bold;\r\n    padding: 10px 80px;\r\n    border-radius: 5%;\r\n    border: none;\r\n  }\r\n  .button:hover\r\n  {\r\n    background-color: white;\r\n  }\r\n \r\n  .list-team\r\n  {\r\n    list-style-type: none;\r\n    \r\n\r\n\r\n  }\r\n  .list-team-item\r\n  {\r\n     margin-top: 20px;\r\n    display: flex;\r\n    justify-content:space-between;\r\n    align-items: center;\r\n    border: 1px solid thistle;\r\n    padding: 10px;\r\n    \r\n  }\r\n  .imgteam\r\n  {\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n\r\n  \r\n  .rows\r\n  {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n  .rows > div\r\n  { \r\n    margin: 50px;\r\n    text-align: left;\r\n    width: 200px;\r\n    \r\n  }\r\n  #imgfooter\r\n  {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 0px;\r\n  }\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxNQUFNLG9DQUFvQyxvQ0FBb0MsT0FBTyxrQkFBa0Isa0RBQWtELDBCQUEwQiwyQkFBMkIsT0FBTyxpREFBaUQsMEJBQTBCLGtDQUFrQyx5QkFBeUIsd0JBQXdCLGVBQWUsMkRBQTJELHNCQUFzQiw2REFBNkQsMExBQTBMLGlDQUFpQyxnREFBZ0QsNEJBQTRCLHFCQUFxQix1REFBdUQsMERBQTBELHdCQUF3QixXQUFXLHdEQUF3RCwwQkFBMEIsT0FBTyxzREFBc0QseUJBQXlCLE9BQU8saURBQWlELDBCQUEwQixrQ0FBa0MsdUJBQXVCLDJCQUEyQiwyQkFBMkIsT0FBTyx1SkFBdUosMEJBQTBCLHFTQUFxUyxTQUFTLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPLGVBQWUscUJBQXFCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLGVBQWUsdUJBQXVCLG9CQUFvQiwrQkFBK0IsMkJBQTJCLDJCQUEyQiw4QkFBOEIsd0JBQXdCLE9BQU8sNkJBQTZCLDRCQUE0QiwwQkFBMEIsT0FBTyxpQ0FBaUMsaUNBQWlDLHFCQUFxQiwwQkFBMEIsT0FBTyxpQ0FBaUMsZ0NBQWdDLGdDQUFnQyxhQUFhLG9CQUFvQixpREFBaUQsa0NBQWtDLDhCQUE4Qix3Q0FBd0MseUNBQXlDLDBDQUEwQyxzQkFBc0IsT0FBTyxxQkFBcUIsc0RBQXNELG1DQUFtQyxxQkFBcUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLEtBQUssd0JBQXdCLHlIQUF5SCxxQkFBcUIsS0FBSyxvQkFBb0Isd0RBQXdELHFCQUFxQixzQkFBc0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsV0FBVywwQkFBMEIsNkhBQTZILHVCQUF1QixPQUFPLHdCQUF3QiwyQkFBMkIsb0JBQW9CLG9CQUFvQiwy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LDZCQUE2Qiw0QkFBNEIsMEJBQTBCLE9BQU8saUNBQWlDLGlDQUFpQyxxQkFBcUIsMEJBQTBCLE9BQU8saUNBQWlDLGdDQUFnQyxnQ0FBZ0MsYUFBYSxvQkFBb0IsaURBQWlELDhCQUE4QixxQ0FBcUMsc0JBQXNCLE9BQU8scUJBQXFCLHNEQUFzRCxtQ0FBbUMscUJBQXFCLHNCQUFzQiwwQkFBMEIsMkJBQTJCLHVCQUF1QixLQUFLLHdCQUF3Qix5SEFBeUgscUJBQXFCLEtBQUssb0JBQW9CLHdEQUF3RCxxQkFBcUIsc0JBQXNCLDBCQUEwQix1QkFBdUIsMkJBQTJCLFdBQVcsMEJBQTBCLDZIQUE2SCx1QkFBdUIsT0FBTyx3QkFBd0IsMkJBQTJCLG9CQUFvQixvQkFBb0IsMkJBQTJCLGVBQWUsaUJBQWlCLDJCQUEyQiwwQkFBMEIsT0FBTyxtQkFBbUIsMkJBQTJCLHVCQUF1Qix5QkFBeUIsdUZBQXVGLHFCQUFxQixzQkFBc0IsT0FBTyx1QkFBdUIsMEJBQTBCLHlCQUF5QixPQUFPLG9CQUFvQixpQ0FBaUMscUJBQXFCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLHFCQUFxQixPQUFPLDBCQUEwQixnQ0FBZ0MsT0FBTyw0QkFBNEIsOEJBQThCLHVCQUF1Qiw0QkFBNEIsMEJBQTBCLHNCQUFzQixzQ0FBc0MsNEJBQTRCLGtDQUFrQyxzQkFBc0IsZUFBZSxxQkFBcUIsMkJBQTJCLE9BQU8sd0NBQXdDLHNCQUFzQix3QkFBd0IsNEJBQTRCLGdDQUFnQyxPQUFPLHdCQUF3QixzQkFBc0IseUJBQXlCLHFCQUFxQixlQUFlLHVCQUF1QixtQkFBbUIsMkJBQTJCLGtCQUFrQixtQkFBbUIsT0FBTyxPQUFPO0FBQy8vWDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmVmNWVjMDYxOGQ2MTBjZmE0NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgaGVhZGVyICovXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFRoZSBncmlkIGNvbnRhaW5lciAqL1xcclxcbiAgLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIwcHggYXV0byBhdXRvIGF1dG8gYXV0byAyMHB4IDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgJ2xlZnQgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIHJpZ2h0ICcgXFxyXFxuICAgICAgJ2xlZnQgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlIHJpZ2h0ICcgXFxyXFxuICAgICAgJyBsZWZ0IGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciByaWdodCAnO1xcclxcbiAgICAvKiBncmlkLWNvbHVtbi1nYXA6IDEwcHg7IC0gaWYgeW91IHdhbnQgZ2FwIGJldHdlZW4gdGhlIGNvbHVtbnMgKi9cXHJcXG4gIH0gXFxyXFxuICBcXHJcXG4gIC5taWRkbGVcXHJcXG4gICB7XFxyXFxuICAgIGhlaWdodDogYXV0bzsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgbGVmdCBjb2x1bW4gKi9cXHJcXG4gIC5sZWZ0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xcclxcblxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgbWlkZGxlIGNvbHVtbiAqL1xcclxcbiAgLm1pZGRsZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogbWlkZGxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgcmlnaHQgY29sdW1uICovXFxyXFxuICAucmlnaHQge1xcclxcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgZm9vdGVyICovXFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdGhyZWUgY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5ncmlkLWNvbnRhaW5lciAge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJyBcXHJcXG4gICAgICAgICdsZWZ0IGxlZnQgbGVmdCBsZWZ0IGxlZnQgbGVmdCcgXFxyXFxuICAgICAgICAnbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZSBtaWRkbGUnIFxcclxcbiAgICAgICAgJ3JpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0JyBcXHJcXG4gICAgICAgICdmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5icmFuZHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICB9XFxyXFxuICAudG9wbmF2IHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYSB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvcG5hdiBhOmhvdmVyIHtcXHJcXG4gICBcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvcG5hdiBhLm5hdmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIC50b3BuYXYgYS5uYXZidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gICNzbGlkZXJcXHJcXG4gIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1nX3NsaWRlci5qcGcnKTtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIFxcclxcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgXFxyXFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgXFxyXFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiA0NzBweDtcXHJcXG4gIH1cXHJcXG4gICN2aXJ0dWFsXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3ZpcnR1YWwgcmVhbGl0eS5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMzVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbiN2aXJ0dWFsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1MSwgMjU1LCAzNywgMC42NTEpLHJnYmEoMjUxLCAyNTUsIDI1LCAwLjYxKSksIHVybCgnL3ZpcnR1YWwgcmVhbGl0eS5qcGcnKTtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG4gICNlc3RhdGVcXHJcXG4gIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvcmVhbCBlc3RhdGUgdmlkZW8uanBnJyk7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMzVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAjZXN0YXRlOmhvdmVyXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1MSwgMjU1LCAzNywgMC42NTEpLHJnYmEoMjUxLCAyNTUsIDI1LCAwLjYxKSksIHVybCgnL3JlYWwgZXN0YXRlIHZpZGVvLmpwZycpO1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIH1cXHJcXG4gIC50ZXh0c2xpZGVyXFxyXFxuICB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLmJveFxcclxcbiAge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgfVxcclxcbiAgLnRpdGxlXFxyXFxuICB7XFxyXFxuICAgIGNvbG9yOnllbGxvd1xcclxcbiAgfVxcclxcbiAgLnJlbmRlcmluZ1xcclxcbiAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODVkZWcsIGJsYWNrLCBibGFjayA4MCUsIGxpZ2h0Z3JheSAyMCUsIGxpZ2h0Z3JheSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIH1cXHJcXG4gIC5ib3hidXR0b25cXHJcXG4gIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZzogMTBweCA4MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvbjpob3ZlclxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gXFxyXFxuICAubGlzdC10ZWFtXFxyXFxuICB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICAubGlzdC10ZWFtLWl0ZW1cXHJcXG4gIHtcXHJcXG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtbW96LWJveC1wYWNrOmp1c3RpZnk7XFxyXFxuICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdGhpc3RsZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuaW1ndGVhbVxcclxcbiAge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICBcXHJcXG4gIC5yb3dzXFxyXFxuICB7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXHJcXG4gICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnJvd3MgPiBkaXZcXHJcXG4gIHsgXFxyXFxuICAgIG1hcmdpbjogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gICNpbWdmb290ZXJcXHJcXG4gIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxuICB9XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvc2FpZG8vRG9jdW1lbnRzLzNkYnJhbmQvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBc0I7U0FBdEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7O0VBRUEsdUJBQXVCO0VBQ3ZCO0lBQ0UsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRDs7O2dEQUc0QztJQUM1QyxpRUFBaUU7RUFDbkU7O0VBRUE7O0lBRUUsWUFBWSxFQUFFLDhDQUE4QztFQUM5RDs7O0VBR0EsMEJBQTBCO0VBQzFCO0lBQ0UsZUFBZTs7RUFFakI7O0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBLHlHQUF5RztFQUN6RztJQUNFO01BQ0U7Ozs7O21EQUs2QztJQUMvQztFQUNGOztFQUVBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsV0FBVzs7SUFFWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0VBRXpCO0VBQ0E7O0lBRUUsd0NBQXdDOztJQUV4QyxpQkFBYTs7SUFBYixhQUFhOztJQUViLHlCQUFzQjs7SUFBdEIsMEJBQXNCOztTQUF0QixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmO0VBQ0E7O0lBRUUsNkNBQTZDO0lBQzdDLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtFQUNFLGtIQUFrSDtFQUNsSCxjQUFjO0FBQ2hCO0VBQ0U7O0lBRUUsK0NBQStDO0lBQy9DLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7O0VBRXBCO0VBQ0E7O0lBRUUsb0hBQW9IO0lBQ3BILGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7O0VBRXBCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFO0VBQ0Y7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsOEVBQThFO0lBQzlFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSx1QkFBdUI7RUFDekI7O0VBRUE7O0lBRUUscUJBQXFCOzs7O0VBSXZCO0VBQ0E7O0tBRUcsZ0JBQWdCO0lBQ2pCLGlCQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUE2QjtTQUE3Qiw2QkFBNkI7SUFDN0Isc0JBQW1CO1NBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTs7RUFFZjtFQUNBOztJQUVFLGtCQUFrQjtFQUNwQjs7Ozs7O0VBTUE7O0lBRUUsaUJBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUFtQjtJQUFuQiwwQkFBbUI7U0FBbkIsbUJBQW1CO0lBQ25CLHFCQUF1QjtTQUF2Qix1QkFBdUI7RUFDekI7RUFDQTs7SUFFRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7O0VBRWQ7RUFDQTs7SUFFRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0VBQ1pcIixcImZpbGVcIjpcInN0eWxlcy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGhlYWRlciAqL1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBUaGUgZ3JpZCBjb250YWluZXIgKi9cXHJcXG4gIC5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoyMHB4IGF1dG8gYXV0byBhdXRvIGF1dG8gMjBweCA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICdsZWZ0IGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciByaWdodCAnIFxcclxcbiAgICAgICdsZWZ0IG1pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZSByaWdodCAnIFxcclxcbiAgICAgICcgbGVmdCBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgcmlnaHQgJztcXHJcXG4gICAgLyogZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4OyAtIGlmIHlvdSB3YW50IGdhcCBiZXR3ZWVuIHRoZSBjb2x1bW5zICovXFxyXFxuICB9IFxcclxcbiAgXFxyXFxuICAubWlkZGxlXFxyXFxuICAge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87IC8qIFNob3VsZCBiZSByZW1vdmVkLiBPbmx5IGZvciBkZW1vbnN0cmF0aW9uICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGxlZnQgY29sdW1uICovXFxyXFxuICAubGVmdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIG1pZGRsZSBjb2x1bW4gKi9cXHJcXG4gIC5taWRkbGUge1xcclxcbiAgICBncmlkLWFyZWE6IG1pZGRsZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIHJpZ2h0IGNvbHVtbiAqL1xcclxcbiAgLnJpZ2h0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU3R5bGUgdGhlIGZvb3RlciAqL1xcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHRocmVlIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuZ3JpZC1jb250YWluZXIgIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcicgXFxyXFxuICAgICAgICAnbGVmdCBsZWZ0IGxlZnQgbGVmdCBsZWZ0IGxlZnQnIFxcclxcbiAgICAgICAgJ21pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlJyBcXHJcXG4gICAgICAgICdyaWdodCByaWdodCByaWdodCByaWdodCByaWdodCByaWdodCcgXFxyXFxuICAgICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXInO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnJhbmR7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgLnRvcG5hdiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9wbmF2IGEge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYTpob3ZlciB7XFxyXFxuICAgXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b3BuYXYgYS5uYXZidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICAudG9wbmF2IGEubmF2YnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICAjc2xpZGVyXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltZ19zbGlkZXIuanBnJyk7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogNDcwcHg7XFxyXFxuICB9XFxyXFxuICAjdmlydHVhbFxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy92aXJ0dWFsIHJlYWxpdHkuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlydHVhbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTEsIDI1NSwgMzcsIDAuNjUxKSxyZ2JhKDI1MSwgMjU1LCAyNSwgMC42MSkpLCB1cmwoJy92aXJ0dWFsIHJlYWxpdHkuanBnJyk7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuICAjZXN0YXRlXFxyXFxuICB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3JlYWwgZXN0YXRlIHZpZGVvLmpwZycpO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgfVxcclxcbiAgI2VzdGF0ZTpob3ZlclxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTEsIDI1NSwgMzcsIDAuNjUxKSxyZ2JhKDI1MSwgMjU1LCAyNSwgMC42MSkpLCB1cmwoJy9yZWFsIGVzdGF0ZSB2aWRlby5qcGcnKTtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB9XFxyXFxuICAudGV4dHNsaWRlclxcclxcbiAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5ib3hcXHJcXG4gIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIC50aXRsZVxcclxcbiAge1xcclxcbiAgICBjb2xvcjp5ZWxsb3dcXHJcXG4gIH1cXHJcXG4gIC5yZW5kZXJpbmdcXHJcXG4gIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTg1ZGVnLCBibGFjaywgYmxhY2sgODAlLCBsaWdodGdyYXkgMjAlLCBsaWdodGdyYXkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICB9XFxyXFxuICAuYm94YnV0dG9uXFxyXFxuICB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvblxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5idXR0b246aG92ZXJcXHJcXG4gIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuIFxcclxcbiAgLmxpc3QtdGVhbVxcclxcbiAge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbiAgfVxcclxcbiAgLmxpc3QtdGVhbS1pdGVtXFxyXFxuICB7XFxyXFxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdGhpc3RsZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuaW1ndGVhbVxcclxcbiAge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICBcXHJcXG4gIC5yb3dzXFxyXFxuICB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAucm93cyA+IGRpdlxcclxcbiAgeyBcXHJcXG4gICAgbWFyZ2luOiA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgI2ltZ2Zvb3RlclxcclxcbiAge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9