/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/root.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/js/components/Mobile_footer.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/Mobile_footer.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileFooter = function (_React$Component) {
    _inherits(MobileFooter, _React$Component);

    function MobileFooter() {
        _classCallCheck(this, MobileFooter);

        return _possibleConstructorReturn(this, (MobileFooter.__proto__ || Object.getPrototypeOf(MobileFooter)).apply(this, arguments));
    }

    _createClass(MobileFooter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                null,
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_antd.Col, { span: 2 }),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 20 },
                        "\xA9\xA02018 React News. All Rights Reserved."
                    ),
                    _react2.default.createElement(_antd.Col, { span: 2 })
                )
            );
        }
    }]);

    return MobileFooter;
}(_react2.default.Component);

exports.default = MobileFooter;

/***/ }),

/***/ "./src/js/components/Mobile_header.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/Mobile_header.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;
var TabPane = _antd.Tabs.TabPane;

var MobileHeader = function (_React$Component) {
    _inherits(MobileHeader, _React$Component);

    function MobileHeader() {
        _classCallCheck(this, MobileHeader);

        var _this = _possibleConstructorReturn(this, (MobileHeader.__proto__ || Object.getPrototypeOf(MobileHeader)).call(this));

        _this.state = {
            current: "app",
            action: "login",
            hasLogined: false,
            userNickName: '',
            userId: ""

        };
        return _this;
    }

    _createClass(MobileHeader, [{
        key: 'handleClick',
        value: function handleClick(e) {
            if (e.key = "register") {
                this.setState({
                    current: "register"
                });
                this.setModalVisible(true);
            } else {
                this.setState({
                    current: e.key
                });
            }
        }
    }, {
        key: 'setModalVisible',
        value: function setModalVisible(value) {
            this.setState({
                modalVisible: value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var myFetchOptions = {
                method: "GET"
            };
            var formData = this.props.form.getFieldProps;
            fetch().then().then();
            this.setModalVisible(false);
        }
    }, {
        key: 'login',
        value: function login() {
            this.setModalVisible(true);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var getFieldProps = this.props.form.getFieldProps;


            var userShow = this.state.haslogined ? _react2.default.createElement(
                Link,
                null,
                _react2.default.createElement(_antd.Icon, { type: 'inbox' })
            ) : _react2.default.createElement(_antd.Icon, { type: 'setting', onClick: this.login.bind(this) });
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement('img', { src: './src/img/logo.png', alt: 'logo' }),
                _react2.default.createElement(
                    'span',
                    null,
                    'ReactNews'
                ),
                userShow,
                _react2.default.createElement(
                    _antd.Modal,
                    { title: '\u7528\u6237\u4E2D\u5FC3', wrapClassName: 'vertial-center-modal', visible: this.state.modalVisible, onCancel: function onCancel() {
                            return _this2.setModalVisible(false);
                        }, onOk: function onOk() {
                            return _this2.setModalVisible(false);
                        }, okText: '\u5173\u95ED' },
                    _react2.default.createElement(
                        _antd.Tabs,
                        { type: 'card' },
                        _react2.default.createElement(
                            _antd.Form,
                            { horizontal: true, onSubmit: this.handleSubmit.bind(this) },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u8D26\u6237' },
                                _react2.default.createElement(_antd.Input, _extends({ placeholder: '\u8BF7\u8F93\u5165\u8D26\u53F7' }, getFieldProps("r_username")))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u5BC6\u7801' },
                                _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801' }, getFieldProps("r_password")))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u786E\u8BA4\u5BC6\u7801' },
                                _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801' }, getFieldProps("r_confirmpassword")))
                            ),
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', htmlType: 'submit' },
                                '\u6CE8\u518C'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MobileHeader;
}(_react2.default.Component);

exports.default = MobileHeader = _antd.Form.create({})(MobileHeader);

/***/ }),

/***/ "./src/js/components/mobile_index.jsx":
/*!********************************************!*\
  !*** ./src/js/components/mobile_index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Mobile_header = __webpack_require__(/*! ./Mobile_header.jsx */ "./src/js/components/Mobile_header.jsx");

var _Mobile_header2 = _interopRequireDefault(_Mobile_header);

var _Mobile_footer = __webpack_require__(/*! ./Mobile_footer.jsx */ "./src/js/components/Mobile_footer.jsx");

var _Mobile_footer2 = _interopRequireDefault(_Mobile_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileIndex = function (_React$Component) {
    _inherits(MobileIndex, _React$Component);

    function MobileIndex() {
        _classCallCheck(this, MobileIndex);

        return _possibleConstructorReturn(this, (MobileIndex.__proto__ || Object.getPrototypeOf(MobileIndex)).apply(this, arguments));
    }

    _createClass(MobileIndex, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "mobile" },
                _react2.default.createElement(_Mobile_header2.default, null),
                _react2.default.createElement(_Mobile_footer2.default, null)
            );
        }
    }]);

    return MobileIndex;
}(_react2.default.Component);

exports.default = MobileIndex;

/***/ }),

/***/ "./src/js/components/pc_footer.jsx":
/*!*****************************************!*\
  !*** ./src/js/components/pc_footer.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PCFooter = function (_React$Component) {
    _inherits(PCFooter, _React$Component);

    function PCFooter() {
        _classCallCheck(this, PCFooter);

        return _possibleConstructorReturn(this, (PCFooter.__proto__ || Object.getPrototypeOf(PCFooter)).apply(this, arguments));
    }

    _createClass(PCFooter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                null,
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_antd.Col, { span: 2 }),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 20 },
                        "\xA9\xA02018 React News. All Rights Reserved."
                    ),
                    _react2.default.createElement(_antd.Col, { span: 2 })
                )
            );
        }
    }]);

    return PCFooter;
}(_react2.default.Component);

exports.default = PCFooter;

/***/ }),

/***/ "./src/js/components/pc_header.jsx":
/*!*****************************************!*\
  !*** ./src/js/components/pc_header.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;
var TabPane = _antd.Tabs.TabPane;

var PCHeader = function (_React$Component) {
    _inherits(PCHeader, _React$Component);

    function PCHeader() {
        _classCallCheck(this, PCHeader);

        var _this = _possibleConstructorReturn(this, (PCHeader.__proto__ || Object.getPrototypeOf(PCHeader)).call(this));

        _this.state = {
            current: "app",
            action: "login",
            hasLogined: false,
            userNickName: '',
            userId: ""

        };
        return _this;
    }

    _createClass(PCHeader, [{
        key: 'handleClick',
        value: function handleClick(e) {
            if (e.key = "register") {
                this.setState({
                    current: "register"
                });
                this.setModalVisible(true);
            } else {
                this.setState({
                    current: e.key
                });
            }
        }
    }, {
        key: 'setModalVisible',
        value: function setModalVisible(value) {
            this.setState({
                modalVisible: value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var myFetchOptions = {
                method: "GET"
            };
            var formData = this.props.form.getFieldProps;
            fetch().then().then();
            this.setModalVisible(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var getFieldProps = this.props.form.getFieldProps;

            var userShow = this.state.hasLogined ? _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'logout', 'class': 'register' },
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', htmlType: 'button' },
                    this.state.userNickName
                ),
                '\xA0 \xA0',
                _react2.default.createElement(
                    Link,
                    { target: '_blank' },
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'dashed', htmlType: 'button' },
                        '\u4E2A\u4EBA\u4E2D\u5FC3'
                    )
                ),
                '\xA0 \xA0',
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'dashed', htmlType: 'button', onclick: '' },
                    '\u9000\u51FA'
                )
            ) : _react2.default.createElement(
                _antd.Menu.Item,
                null,
                _react2.default.createElement(_antd.Icon, { type: 'appstore', key: 'register' }),
                '\u6CE8\u518C/\u767B\u9646'
            );

            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_antd.Col, { span: 2 }),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 4 },
                        _react2.default.createElement(
                            'a',
                            { href: '/', className: 'logo' },
                            _react2.default.createElement('img', { src: './src/img/logo.png', alt: 'logo' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'ReactNews'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 16 },
                        _react2.default.createElement(
                            _antd.Menu,
                            { mode: 'horizontal', onClick: this.handleClick.bind(this), selectedKeys: [this.state.current] },
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'app' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u5934\u6761'
                            ),
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'shehui' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u793E\u4F1A'
                            ),
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'guonei' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u56FD\u5185'
                            ),
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'guoji' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u56FD\u9645'
                            ),
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'yule' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u5A31\u4E50'
                            ),
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'tiyu' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u4F53\u80B2'
                            ),
                            _react2.default.createElement(
                                _antd.Menu.Item,
                                { key: 'shishang' },
                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                '\u65F6\u5C1A'
                            ),
                            userShow
                        ),
                        _react2.default.createElement(
                            _antd.Modal,
                            { title: '\u7528\u6237\u4E2D\u5FC3', wrapClassName: 'vertial-center-modal', visible: this.state.modalVisible, onCancel: function onCancel() {
                                    return _this2.setModalVisible(false);
                                }, onOk: function onOk() {
                                    return _this2.setModalVisible(false);
                                }, okText: '\u5173\u95ED' },
                            _react2.default.createElement(
                                _antd.Tabs,
                                { type: 'card' },
                                _react2.default.createElement(
                                    _antd.Form,
                                    { horizontal: true, onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: '\u8D26\u6237' },
                                        _react2.default.createElement(_antd.Input, _extends({ placeholder: '\u8BF7\u8F93\u5165\u8D26\u53F7' }, getFieldProps("r_username")))
                                    ),
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: '\u5BC6\u7801' },
                                        _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801' }, getFieldProps("r_password")))
                                    ),
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: '\u786E\u8BA4\u5BC6\u7801' },
                                        _react2.default.createElement(_antd.Input, _extends({ type: 'password', placeholder: '\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801' }, getFieldProps("r_confirmpassword")))
                                    ),
                                    _react2.default.createElement(
                                        _antd.Button,
                                        { type: 'primary', htmlType: 'submit' },
                                        '\u6CE8\u518C'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_antd.Col, { span: 2 })
                )
            );
        }
    }]);

    return PCHeader;
}(_react2.default.Component);

exports.default = PCHeader = _antd.Form.create({})(PCHeader);

/***/ }),

/***/ "./src/js/components/pc_index.jsx":
/*!****************************************!*\
  !*** ./src/js/components/pc_index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pc_header = __webpack_require__(/*! ./pc_header.jsx */ "./src/js/components/pc_header.jsx");

var _pc_header2 = _interopRequireDefault(_pc_header);

var _pc_footer = __webpack_require__(/*! ./pc_footer.jsx */ "./src/js/components/pc_footer.jsx");

var _pc_footer2 = _interopRequireDefault(_pc_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PCIndex = function (_React$Component) {
    _inherits(PCIndex, _React$Component);

    function PCIndex() {
        _classCallCheck(this, PCIndex);

        return _possibleConstructorReturn(this, (PCIndex.__proto__ || Object.getPrototypeOf(PCIndex)).apply(this, arguments));
    }

    _createClass(PCIndex, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_pc_header2.default, null),
                _react2.default.createElement(_pc_footer2.default, null)
            );
        }
    }]);

    return PCIndex;
}(_react2.default.Component);

exports.default = PCIndex;

/***/ }),

/***/ "./src/js/root.jsx":
/*!*************************!*\
  !*** ./src/js/root.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

__webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");

var _reactResponsive = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _pc_index = __webpack_require__(/*! ./components/pc_index.jsx */ "./src/js/components/pc_index.jsx");

var _pc_index2 = _interopRequireDefault(_pc_index);

var _mobile_index = __webpack_require__(/*! ./components/mobile_index.jsx */ "./src/js/components/mobile_index.jsx");

var _mobile_index2 = _interopRequireDefault(_mobile_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // or 'antd/dist/antd.less'

var Root = function (_React$Component) {
    _inherits(Root, _React$Component);

    function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
    }

    _createClass(Root, [{
        key: 'render',
        value: function render() {
            return (
                /* 这里是现在程序的人口 */
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactResponsive2.default,
                        { query: '(min-device-width:1224px)' },
                        _react2.default.createElement(_pc_index2.default, null)
                    ),
                    _react2.default.createElement(
                        _reactResponsive2.default,
                        { query: '(max-device-width:1224px)' },
                        _react2.default.createElement(_mobile_index2.default, null)
                    )
                )
            );
        }
    }]);

    return Root;
}(_react2.default.Component);

;

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById("mainContainer"));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL01vYmlsZV9mb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL01vYmlsZV9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vYmlsZV9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGNfZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wY19oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3BjX2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcm9vdC5qc3giXSwibmFtZXMiOlsiTW9iaWxlRm9vdGVyIiwiQ29tcG9uZW50IiwiRm9ybUl0ZW0iLCJJdGVtIiwiU3ViTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJUYWJQYW5lIiwiTW9iaWxlSGVhZGVyIiwic3RhdGUiLCJjdXJyZW50IiwiYWN0aW9uIiwiaGFzTG9naW5lZCIsInVzZXJOaWNrTmFtZSIsInVzZXJJZCIsImUiLCJrZXkiLCJzZXRTdGF0ZSIsInNldE1vZGFsVmlzaWJsZSIsInZhbHVlIiwibW9kYWxWaXNpYmxlIiwicHJldmVudERlZmF1bHQiLCJteUZldGNoT3B0aW9ucyIsIm1ldGhvZCIsImZvcm1EYXRhIiwicHJvcHMiLCJmb3JtIiwiZ2V0RmllbGRQcm9wcyIsImZldGNoIiwidGhlbiIsInVzZXJTaG93IiwiaGFzbG9naW5lZCIsImxvZ2luIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImNyZWF0ZSIsIk1vYmlsZUluZGV4IiwiUENGb290ZXIiLCJQQ0hlYWRlciIsImhhbmRsZUNsaWNrIiwiUENJbmRleCIsIlJvb3QiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QkFBTXZDLFM7O2tCQUF0QnVDLE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFQOEI7O0lBU3hCQyxJOzs7Ozs7Ozs7OztpQ0FDTztBQUNMO0FBQ0k7QUFDQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQVksT0FBTSwyQkFBbEI7QUFDSTtBQURKLHFCQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFZLE9BQU0sMkJBQWxCO0FBQ0k7QUFESjtBQUpKO0FBRko7QUFZSDs7OztFQWRjLGdCQUFNeEMsUzs7QUFleEI7O0FBRUQsbUJBQVN5QyxNQUFULENBQ0ksOEJBQUMsSUFBRCxPQURKLEVBRUlDLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FGSixFIiwiZmlsZSI6Ii4vc3JjL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdXG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsbGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsbGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvanMvcm9vdC5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmY29weTsmbmJzcDsyMDE4IFJlYWN0IE5ld3MuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT48L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgTWVudSwgSWNvbiwgVGFicywgbWVzc2FnZSwgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tCb3gsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xyXG5jb25zdCBNZW51SXRlbUdyb3VwID0gTWVudS5JdGVtR3JvdXA7XHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5cclxuY2xhc3MgTW9iaWxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudDogXCJhcHBcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgICAgICAgIGhhc0xvZ2luZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VyTmlja05hbWU6ICcnLFxyXG4gICAgICAgICAgICB1c2VySWQ6IFwiXCJcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPSBcInJlZ2lzdGVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBcInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDogZS5rZXlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBzZXRNb2RhbFZpc2libGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9kYWxWaXNpYmxlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG15RmV0Y2hPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHRoaXMucHJvcHMuZm9ybS5nZXRGaWVsZFByb3BzO1xyXG4gICAgICAgIGZldGNoKClcclxuICAgICAgICAgICAgLnRoZW4oKVxyXG4gICAgICAgICAgICAudGhlbigpXHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxWaXNpYmxlKHRydWUpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgZ2V0RmllbGRQcm9wcyB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyU2hvdyA9IHRoaXMuc3RhdGUuaGFzbG9naW5lZCA/XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImluYm94XCI+PC9JY29uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPEljb24gdHlwZT1cInNldHRpbmdcIiBvbkNsaWNrPXt0aGlzLmxvZ2luLmJpbmQodGhpcyl9PjwvSWNvbj5cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoZWFkZXIgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3NyYy9pbWcvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlJlYWN0TmV3czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHt1c2VyU2hvd31cclxuICAgICAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIueUqOaIt+S4reW/g1wiIHdyYXBDbGFzc05hbWU9XCJ2ZXJ0aWFsLWNlbnRlci1tb2RhbFwiIHZpc2libGU9e3RoaXMuc3RhdGUubW9kYWxWaXNpYmxlfSBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9IG9uT2s9eygpID0+IHRoaXMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX0gb2tUZXh0PSflhbPpl60nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJzIHR5cGU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGhvcml6b250YWwgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtIGxhYmVsPVwi6LSm5oi3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6LSm5Y+3XCIgey4uLmdldEZpZWxkUHJvcHMoXCJyX3VzZXJuYW1lXCIpfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIuWvhueggVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWvhueggVwiIHsuLi5nZXRGaWVsZFByb3BzKFwicl9wYXNzd29yZFwiKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0gbGFiZWw9XCLnoa7orqTlr4bnoIFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7flho3mrKHovpPlhaXlr4bnoIFcIiB7Li4uZ2V0RmllbGRQcm9wcyhcInJfY29uZmlybXBhc3N3b3JkXCIpfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuazqOWGjDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9oZWFkZXIgPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlSGVhZGVyID0gRm9ybS5jcmVhdGUoe30pKE1vYmlsZUhlYWRlcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBNb2JpbGVIZWFkZXIgZnJvbSBcIi4vTW9iaWxlX2hlYWRlci5qc3hcIjtcclxuaW1wb3J0IE1vYmlsZUZvb3RlciBmcm9tIFwiLi9Nb2JpbGVfZm9vdGVyLmpzeFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZUluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZUhlYWRlcj48L01vYmlsZUhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNb2JpbGVGb290ZXI+PC9Nb2JpbGVGb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUENGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZjb3B5OyZuYnNwOzIwMTggUmVhY3QgTmV3cy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBNZW51LCBJY29uLCBUYWJzLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja0JveCwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnU7XHJcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcclxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcclxuY2xhc3MgUENIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiBcImFwcFwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IFwibG9naW5cIixcclxuICAgICAgICAgICAgaGFzTG9naW5lZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJOaWNrTmFtZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIlxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9IFwicmVnaXN0ZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBlLmtleVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHNldE1vZGFsVmlzaWJsZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb2RhbFZpc2libGU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbXlGZXRjaE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gdGhpcy5wcm9wcy5mb3JtLmdldEZpZWxkUHJvcHM7XHJcbiAgICAgICAgZmV0Y2goKVxyXG4gICAgICAgICAgICAudGhlbigpXHJcbiAgICAgICAgICAgIC50aGVuKClcclxuICAgICAgICB0aGlzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IGdldEZpZWxkUHJvcHMgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBsZXQgdXNlclNob3cgPSB0aGlzLnN0YXRlLmhhc0xvZ2luZWQgP1xyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImxvZ291dFwiIGNsYXNzPVwicmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cImJ1dHRvblwiPnt0aGlzLnN0YXRlLnVzZXJOaWNrTmFtZX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8TGluayB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYXNoZWRcIiBodG1sVHlwZT1cImJ1dHRvblwiPuS4quS6uuS4reW/gzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhc2hlZFwiIGh0bWxUeXBlPVwiYnV0dG9uXCIgb25jbGljaz1cIlwiPumAgOWHujwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImFwcHN0b3JlXCIga2V5PVwicmVnaXN0ZXJcIiAvPuazqOWGjC/nmbvpmYZcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3NyYy9pbWcvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlYWN0TmV3czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJhcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiYXBwc3RvcmVcIiAvPuWktOadoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNoZWh1aVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJhcHBzdG9yZVwiIC8+56S+5LyaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZ3VvbmVpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImFwcHN0b3JlXCIgLz7lm73lhoVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJndW9qaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJhcHBzdG9yZVwiIC8+5Zu96ZmFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwieXVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJhcHBzdG9yZVwiIC8+5aix5LmQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidGl5dVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJhcHBzdG9yZVwiIC8+5L2T6IKyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2hpc2hhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiYXBwc3RvcmVcIiAvPuaXtuWwmlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlclNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIueUqOaIt+S4reW/g1wiIHdyYXBDbGFzc05hbWU9XCJ2ZXJ0aWFsLWNlbnRlci1tb2RhbFwiIHZpc2libGU9e3RoaXMuc3RhdGUubW9kYWxWaXNpYmxlfSBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gb25Paz17KCkgPT4gdGhpcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpfSBva1RleHQ9J+WFs+mXrSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFicyB0eXBlPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGhvcml6b250YWwgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0gbGFiZWw9XCLotKbmiLdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpei0puWPt1wiIHsuLi5nZXRGaWVsZFByb3BzKFwicl91c2VybmFtZVwiKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtIGxhYmVsPVwi5a+G56CBXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiB7Li4uZ2V0RmllbGRQcm9wcyhcInJfcGFzc3dvcmRcIil9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIuehruiupOWvhueggVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi6K+35YaN5qyh6L6T5YWl5a+G56CBXCIgey4uLmdldEZpZWxkUHJvcHMoXCJyX2NvbmZpcm1wYXNzd29yZFwiKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+5rOo5YaMPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9oZWFkZXIgPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUENIZWFkZXIgPSBGb3JtLmNyZWF0ZSh7fSkoUENIZWFkZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUENIZWFkZXIgZnJvbSBcIi4vcGNfaGVhZGVyLmpzeFwiXHJcbmltcG9ydCBQQ0Zvb3RlciBmcm9tIFwiLi9wY19mb290ZXIuanN4XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQQ0luZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQQ0hlYWRlcj48L1BDSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFBDRm9vdGVyPjwvUENGb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7ICAvLyBvciAnYW50ZC9kaXN0L2FudGQubGVzcydcclxuXHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgUENJbmRleCBmcm9tIFwiLi9jb21wb25lbnRzL3BjX2luZGV4LmpzeFwiO1xyXG5pbXBvcnQgTW9iaWxlSW5kZXggZnJvbSBcIi4vY29tcG9uZW50cy9tb2JpbGVfaW5kZXguanN4XCI7XHJcblxyXG5jbGFzcyBSb290IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvKiDov5nph4zmmK/njrDlnKjnqIvluo/nmoTkurrlj6MgKi9cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IHF1ZXJ5PVwiKG1pbi1kZXZpY2Utd2lkdGg6MTIyNHB4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQQ0luZGV4PjwvUENJbmRleD5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IHF1ZXJ5PVwiKG1heC1kZXZpY2Utd2lkdGg6MTIyNHB4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2JpbGVJbmRleD48L01vYmlsZUluZGV4PlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8Um9vdCAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKVxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==