/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\timing-app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timing-app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5b6ff9a", Component.options)
  } else {
    hotAPI.reload("data-v-d5b6ff9a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _horseTier = __webpack_require__(13);

var HorseTierComponent = _interopRequireWildcard(_horseTier);

var _timeStatus = __webpack_require__(16);

var TimeStatusComponent = _interopRequireWildcard(_timeStatus);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    components: {
        'horse-tier': HorseTierComponent,
        'time-status': TimeStatusComponent
    },
    computed: {
        submitAllowed: function submitAllowed() {
            console.log("submitAllowed", window.submitAllowed);
            return window.submitAllowed;
        }
    },
    props: ['servername', 'data', 'now'],
    methods: {
        updateTiming: function updateTiming(e) {
            var pos = { posX: e.clientX, posY: e.clientY };
            eventBus.$emit('updateTiming', this.servername, pos);
        },
        currentStatus: function currentStatus(diffInMinutes) {
            if (diffInMinutes > 1) return "Last observed race was";else if (diffInMinutes >= -5) return "Registration is currently available and closes";else if (diffInMinutes > -10) return "Registration will be available very soon";else return "Registration will be available";
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    props: ['currentTier', 'tier'],
    computed: {
        cssClass: function cssClass() {
            var condition = this.currentTier == this.tier;
            return {
                'btn': true,
                'btn-primary': !condition,
                'btn-success': condition,
                'horse-tier': true
            };
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    props: ['groupvalue', 'value'],
    methods: {
        onClick: function onClick() {
            this.$emit('radioupdate', this.value);
        }
    },
    computed: {
        cssClass: function cssClass() {
            var b = this['groupvalue'] == this['value'];
            return {
                'btn': true,
                'btn-sm': true,
                'btn-info': b,
                'btn-warning': !b
            };
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    props: ['region', 'selectedRegion'],
    computed: {
        cssClass: function cssClass() {
            var thisRegion = this.region === this.selectedRegion;
            return {
                'btn': true,
                'btn-warning': !thisRegion,
                'btn-success': thisRegion
            };
        }
    },
    methods: {
        name: function name() {
            return this.region.toUpperCase();
        },
        changeRegion: function changeRegion() {
            this.$emit('new-region');
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    props: ['start', 'registered', 'now'],
    data: function data() {
        return {
            timeLeftInMinutes: 0
        };
    },
    methods: {
        minutesToHours: function minutesToHours(minutes) {
            return Math.floor(Math.abs(minutes / 60));
        },
        parseTime: function parseTime(minutes) {
            if (minutes < -60) return 'Last observed race was over ' + this.minutesToHours(minutes) + ' hours ago';
            if (minutes < -5) return 'Last observed race was ' + Math.abs(minutes) + ' minutes ago';
            if (minutes > -5 && minutes < 0) return "Registration active";

            return 'Next race in ' + minutes + ' minutes';
        }
    },
    computed: {
        timeLeft: function timeLeft() {
            var startTime = new Date();
            startTime.setTime(this.start);

            var diffInSeconds = (startTime.getTime() - this.now) / 1000;
            this.timeLeftInMinutes = Math.floor(diffInSeconds / 60);
            return this.parseTime(this.timeLeftInMinutes);
        },
        cssClass: function cssClass() {
            return {
                'btn-success': this.timeLeftInMinutes >= 0,
                'btn-warning': this.timeLeftInMinutes >= -5 && this.timeLeftInMinutes < 0
            };
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _timingDialog = __webpack_require__(17);

var timingDialog = _interopRequireWildcard(_timingDialog);

var _horseRace = __webpack_require__(12);

var horseRace = _interopRequireWildcard(_horseRace);

var _regionSelect = __webpack_require__(15);

var regionSelect = _interopRequireWildcard(_regionSelect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    el: '#bd-app',
    data: {
        region: "eu",
        allRegions: {},
        servernames: [],
        timings: {},
        now: new Date().getTime()
    },
    created: function created() {
        var _this = this;

        window.eventBus = new Vue();
        console.log("loading app");

        this.fetchServerNames();
        var hash = document.location.hash;
        hash = hash.substr(1, hash.length - 1);

        if (hash.includes('&submitallowed')) {
            console.log("submitAllowed");
            window.submitAllowed = true;
            hash.replace('&submitallowed', '');
        }

        if (hash !== 'eu' && hash !== 'us') hash = 'eu';
        this.setRegion(hash);
        setInterval(function () {
            return _this.now = new Date().getTime();
        }, 1000);
        eventBus.$on('updateTiming', function (serverName, pos) {
            eventBus.$emit('update-dialog', {
                region: _this.region,
                id: _this.servernames.indexOf(serverName),
                servername: serverName,
                posX: pos.posX,
                posY: pos.posY
            });
        });

        eventBus.$on('refresh-timings', function () {
            _this.refreshData();
        });

        setInterval(this.refreshData, 15 * 1000);
    },
    components: {
        'timing-dialog': timingDialog,
        'horse-race': horseRace,
        'region-select': regionSelect
    },
    methods: {
        fetchServerNames: function fetchServerNames() {
            var _this2 = this;

            fetch('/servernames').then(function (r) {
                return r.json();
            }).then(function (jsonResponse) {
                _this2.servernames = jsonResponse.names;
                _this2.refreshData();
            });
        },
        setRegion: function setRegion(newRegion) {
            this.region = newRegion;
            document.location.hash = this.region;

            this.updateTimings();
        },
        updateTimings: function updateTimings() {
            if (this.allRegions[this.region] === undefined) return;
            this.timings = this.allRegions[this.region].data;
        },
        refreshData: function refreshData() {
            var _this3 = this;

            fetch('/data').then(function (r) {
                return r.json();
            }).then(function (jsonResponse) {
                _this3.allRegions = jsonResponse;
                _this3.updateTimings();
            });
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _radioButton = __webpack_require__(14);

var RadioButtonComponent = _interopRequireWildcard(_radioButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    data: function data() {
        return {
            enabled: false,
            server: {},
            tier: 1,
            minutes: undefined,
            posX: 0,
            posY: 0
        };
    },
    components: {
        'radio-button': RadioButtonComponent
    },
    computed: {
        isEnabled: function isEnabled() {
            console.log("submitAllowed", window.submitAllowed);
            return this.enabled && window.submitAllowed;
        },
        positioning: function positioning() {
            var style = {
                right: window.innerWidth - this.posX + 'px'
            };

            if (this.posY > window.innerHeight * 0.5) {
                style['bottom'] = window.innerHeight - this.posY + 'px';
            } else style['top'] = this.posY + 'px';
            return style;
        }
    },
    created: function created() {
        var _this = this;

        eventBus.$on('update-dialog', function (data) {
            _this.server = data;
            _this.enabled = true;
            _this.posX = data.posX;
            _this.posY = data.posY;
        });
    },
    methods: {
        radio: function radio(newTierValue) {
            this.tier = newTierValue;
        },
        onClose: function onClose() {
            this.enabled = false;
        },
        prevent: function prevent(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        secondsToMilliseconds: function secondsToMilliseconds(seconds) {
            return 1000 * seconds;
        },
        onSend: function onSend() {
            var _this2 = this;

            if (this.minutes === undefined) return;

            var payload = {
                region: this.server.region,
                serverid: this.server.id,
                horseClass: this.tier,
                //TODO: Only add the extra 5 minutes if a "registration is available" checkbox is unchecked
                time: new Date().getTime() + this.secondsToMilliseconds(Number(this.minutes) * 60)
            };

            fetch("/update", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            }).then(function () {
                eventBus.$emit('refresh-timings');
                _this2.time = 0;
                _this2.onClose();
            }).catch(function () {
                return alert("failed to send");
            });
        },
        onTier: function onTier(n) {
            this.tier = n;
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.outer-dialog {\n    z-index: 1000;\n    background-color: rgba(0, 0, 0, 0.1);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    top: 0;\n    height: 100%;\n}\n.inner-dialog {\n    position: absolute;\n    border-radius: 4px;\n    border: 1px solid black;\n    width: 50%;\n    min-width: 200px;\n    max-width: 400px;\n}\n.radio {\n    padding-right: 5px;\n}\n.minutes {\n    background-color: black;\n    color: white;\n    border-radius: 5px;\n    border: 1px solid gray;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\horse-race.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] horse-race.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48095f56", Component.options)
  } else {
    hotAPI.reload("data-v-48095f56", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\horse-tier.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] horse-tier.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79c31432", Component.options)
  } else {
    hotAPI.reload("data-v-79c31432", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\radio-button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio-button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9dbf75ce", Component.options)
  } else {
    hotAPI.reload("data-v-9dbf75ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\region-select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] region-select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fdb5e70", Component.options)
  } else {
    hotAPI.reload("data-v-2fdb5e70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\time-status.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] time-status.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d66724a6", Component.options)
  } else {
    hotAPI.reload("data-v-d66724a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\bdtimerservice\\client\\timing-dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timing-dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e6245a6", Component.options)
  } else {
    hotAPI.reload("data-v-5e6245a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.cssClass,
    staticStyle: {
      "font-size": "125%"
    },
    on: {
      "click": _vm.changeRegion
    }
  }, [_vm._v("\n    " + _vm._s(this.name()) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fdb5e70", module.exports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "timingRow"
  }, [_c('h4', [_vm._v(_vm._s(_vm.servername))]), _vm._v(" "), _c('div', [_c('horse-tier', {
    attrs: {
      "title": "Unknown Tier",
      "tier": "?",
      "currentTier": _vm.data.horseClass
    }
  }), _vm._v(" "), _vm._l((8), function(n) {
    return _c('horse-tier', {
      attrs: {
        "tier": n,
        "currentTier": _vm.data.horseClass
      }
    })
  }), _vm._v(" "), _c('time-status', {
    attrs: {
      "now": _vm.now,
      "start": _vm.data.startTime,
      "registered": _vm.data.registeredTime
    }
  }), _vm._v(" "), (_vm.submitAllowed) ? _c('button', {
    staticClass: "btn btn-xs btn-info glyphicon glyphicon-cloud-upload",
    staticStyle: {
      "position": "absolute",
      "right": "3px",
      "top": "3px",
      "border-radius": "15px"
    },
    on: {
      "click": function($event) {
        _vm.updateTiming($event)
      }
    }
  }) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48095f56", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isEnabled) ? _c('div', {
    staticClass: "outer-dialog",
    on: {
      "click": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "inner-dialog bg-primary text-danger",
    style: (_vm.positioning),
    on: {
      "click": function($event) {
        _vm.prevent($event)
      }
    }
  }, [_c('h4', [_vm._v("Update race timing for "), _c('strong', {
    staticStyle: {
      "font-size": "140%"
    }
  }, [_vm._v(_vm._s(_vm.server.servername) + " on " + _vm._s(_vm.server.region))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "5px"
    }
  }, [_vm._v("\n            Minutes until race\n            "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.minutes),
      expression: "minutes"
    }],
    staticClass: "minutes",
    staticStyle: {
      "padding": "4px"
    },
    attrs: {
      "type": "text",
      "placeholder": "[0-60]"
    },
    domProps: {
      "value": _vm._s(_vm.minutes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.minutes = $event.target.value
      }
    }
  }), _c('br')])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "5px"
    }
  }, [_vm._v("\n            Horse-Tier\n            "), _c('div', [_c('radio-button', {
    attrs: {
      "value": "?",
      "groupvalue": _vm.tier
    },
    on: {
      "radioupdate": _vm.radio
    }
  }), _vm._v(" "), _vm._l((8), function(t) {
    return _c('span', [_c('radio-button', {
      attrs: {
        "value": t,
        "groupvalue": _vm.tier
      },
      on: {
        "radioupdate": _vm.radio
      }
    })], 1)
  })], 2)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "5px"
    }
  }, [_c('button', {
    staticClass: "btn btn-success btn-sm",
    on: {
      "click": _vm.onSend
    }
  }, [_vm._v("Send")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    on: {
      "click": _vm.onClose
    }
  }, [_vm._v("Close")])])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e6245a6", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.cssClass
  }, [_vm._v("\n    " + _vm._s(_vm.tier) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79c31432", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.cssClass,
    on: {
      "click": _vm.onClick
    }
  }, [_vm._v(_vm._s(_vm.value))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9dbf75ce", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('timing-dialog'), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "150%"
    }
  }, [_vm._v("Region")]), _vm._v(" "), _c('region-select', {
    attrs: {
      "region": "us",
      "selected-region": _vm.region
    },
    on: {
      "new-region": function($event) {
        _vm.setRegion('us')
      }
    }
  }), _vm._v(" "), _c('region-select', {
    attrs: {
      "region": "eu",
      "selected-region": _vm.region
    },
    on: {
      "new-region": function($event) {
        _vm.setRegion('eu')
      }
    }
  })], 1), _vm._v(" "), _c('div', _vm._l((_vm.timings), function(data, i) {
    return _c('horse-race', {
      staticClass: "horseRace bg-info",
      attrs: {
        "now": _vm.now,
        "data": data,
        "servername": _vm.servernames[i]
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5b6ff9a", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.cssClass,
    staticStyle: {
      "border-radius": "20px",
      "margin": "6px auto",
      "padding": "2px",
      "left": "5%",
      "width": "90%",
      "font-size": "120%"
    }
  }, [_vm._v("\n    " + _vm._s(this.timeLeft) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d66724a6", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("75cea26c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5e6245a6!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timing-dialog.vue", function() {
     var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5e6245a6!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timing-dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vueApp = __webpack_require__(1);

window.bootstrapTimingsApp = function () {
    new Vue(vueApp);
};

/***/ })
/******/ ]);