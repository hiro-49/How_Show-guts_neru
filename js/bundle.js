/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dateCalc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dateCalc.js */ \"./src/js/modules/dateCalc.js\");\n\n\n\n{\n  //各要素を取得\n  var i_date0 = document.getElementById('date0');\n  var i_date1 = document.getElementById('date1');\n  var s_days = document.getElementById('days');\n  var needle0 = document.getElementById('needle0'); //正規表現\n\n  var regexp_date = new RegExp(/^\\d{4}-\\d{2}-\\d{2}$/);\n  var regexp_days = new RegExp(/^\\d+$/); //インスタンス\n\n  var c_dateCalc = new _modules_dateCalc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //イベントリスナーを追加\n\n  i_date0.addEventListener('blur', function () {\n    if (regexp_date.test(i_date0.value)) {} else {\n      i_date0.value = \"false\";\n    }\n  });\n  i_date1.addEventListener('blur', function () {\n    if (regexp_date.test(i_date1.value)) {\n      s_days.value = c_dateCalc.CalcDate0_Date1(i_date0, i_date1);\n    } else {\n      i_date1.value = \"false\";\n    }\n  });\n  s_days.addEventListener('blur', function () {\n    if (regexp_days.test(s_days.value)) {\n      i_date1.value = c_dateCalc.Date0_Days(i_date0, s_days);\n    } else {\n      s_days.value = \"false\";\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/dateCalc.js":
/*!************************************!*\
  !*** ./src/js/modules/dateCalc.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dateCalc; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar dateCalc =\n/*#__PURE__*/\nfunction () {\n  //配列用定数\n  // var this.Y = 0;\n  // var this.M = 1;\n  // var this.D = 2;\n  function dateCalc() {\n    _classCallCheck(this, dateCalc);\n\n    this.Y = 0;\n    this.M = 1;\n    this.D = 2;\n  } //二つの日付から日数を計算する\n\n\n  _createClass(dateCalc, [{\n    key: \"CalcDate0_Date1\",\n    value: function CalcDate0_Date1(i_date0, i_date1) {\n      var separatedDate0 = i_date0.value.split(\"-\");\n      var separatedDate1 = i_date1.value.split(\"-\");\n      var Date0 = new Array(3);\n      var originDate1 = new Array(3);\n      var days = 0;\n\n      for (var i = 0; i < 3; i++) {\n        Date0[i] = parseInt(separatedDate0[i]);\n        originDate1[i] = parseInt(separatedDate1[i]);\n      }\n\n      days = originDate1[this.D] - Date0[this.D];\n      console.log(days);\n\n      while (Date0[this.M] != originDate1[this.M]) {\n        days += HowMonthDays(Date0[this.M], IsLeapYear(Date0[this.Y]));\n        Date0[this.M]++;\n\n        if (Date0[this.M] > 12) {\n          Date0[this.M] = 1;\n          Date0[this.Y]++;\n        }\n      }\n\n      console.log(days);\n      var correctionNum = originDate1[this.M] >= 3 ? 1 : 0;\n\n      while (Date0[this.Y] != originDate1[this.Y]) {\n        days += IsLeapYear(Date0[this.Y] + correctionNum) ? 366 : 365;\n        Date0[this.Y]++;\n      }\n\n      console.log(days);\n      return days;\n    } //日付と日数から新たな日付を計算\n\n  }, {\n    key: \"CalcDate0_Days\",\n    value: function CalcDate0_Days(i_date0, s_days) {\n      var separatedDate0 = i_date0.value.split(\"-\");\n      var originDate = new Array(3);\n      var date = new Array(3);\n\n      for (var i = 0; i < 3; i++) {\n        originDate[i] = parseInt(separatedDate0[i]);\n        date[i] = originDate[i];\n      }\n\n      var correctionNum = originDate[this.M] >= 3 ? 1 : 0;\n      var days = parseInt(s_days.value);\n      var nextYearDays = IsLeapYear(date[this.Y] + correctionNum) ? 366 : 365;\n\n      while (days >= nextYearDays) {\n        days -= nextYearDays;\n        date[this.Y]++;\n        nextYearDays = IsLeapYear(date[this.Y] + correctionNum) ? 366 : 365;\n      }\n\n      var thisMonthDays = HowMonthDays(date[this.M], IsLeapYear(date[this.Y]));\n\n      while (days >= thisMonthDays) {\n        days -= thisMonthDays;\n        date[this.M]++;\n\n        if (date[this.M] == 13) {\n          date[this.M] = 1;\n          date[this.Y]++;\n        }\n\n        thisMonthDays = HowMonthDays(date[this.M], IsLeapYear(date[this.Y]));\n      }\n\n      date[this.D] += days;\n\n      if (date[this.D] > thisMonthDays) {\n        date[this.M]++;\n        date[this.D] -= thisMonthDays;\n\n        if (date[this.M] == 13) {\n          date[this.M] = 1;\n          date[this.Y]++;\n        }\n\n        if (date[this.M] == 2) {\n          thisMonthDays = HowMonthDays(date[this.M], IsLeapYear(date[this.Y]));\n        }\n      }\n\n      return date[this.Y] + '-' + date[this.M] + '-' + date[this.D];\n    } //yearが閏年かどうか\n\n  }, {\n    key: \"IsLeapYear\",\n    value: function IsLeapYear(year) {\n      if (year % 4 != 0) {\n        return false;\n      } else if (year % 100 == 0 && year % 400 != 0) {\n        return false;\n      } else {\n        return true;\n      }\n    } // monthの日数を返す\n\n  }, {\n    key: \"HowMonthDays\",\n    value: function HowMonthDays(month, isLeapYear) {\n      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {\n        return 31;\n      } else if (month == 2) {\n        if (isLeapYear) {\n          return 29;\n        } else {\n          return 28;\n        }\n      } else {\n        return 30;\n      }\n    }\n  }]);\n\n  return dateCalc;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/modules/dateCalc.js?");

/***/ })

/******/ });