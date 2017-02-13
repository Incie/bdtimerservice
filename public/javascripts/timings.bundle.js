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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
  __webpack_require__(18),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\timing-app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timing-app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7d1e118", Component.options)
  } else {
    hotAPI.reload("data-v-d7d1e118", Component.options)
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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var interact = __webpack_require__(5),
    EventEmitter = __webpack_require__(3).EventEmitter;

function GestureDetector(target) {
    this.target = target || document;

    interact.on('start', this.target, this.__boundStart = this._start.bind(this));

    interact.on('drag', this.target, this.__boundStart = this._drag.bind(this));

    interact.on('end', this.target, this.__boundEnd = this._end.bind(this));

    this.gestures = [];
}
GestureDetector.prototype = Object.create(EventEmitter.prototype);
GestureDetector.prototype.constructor = GestureDetector;
GestureDetector.prototype._start = function (interaction) {
    interaction.points = [];
};
GestureDetector.prototype._drag = function (interaction) {
    interaction.points.push({
        x: interaction.pageX,
        y: interaction.pageY
    });
};
GestureDetector.prototype._end = function (interaction) {
    var detector = this;
    this.gestures.forEach(function (gesture) {
        var gestureName = gesture.call(this, interaction.points);
        if (gestureName) {
            detector.emit('gesture', {
                name: gestureName,
                points: interaction.points
            });
        }
    });
};
GestureDetector.destroy = function () {
    interact.off('start', this.target, this.__boundStart);

    interact.on('end', this.target, this.__boundEnd);
};

module.exports = GestureDetector;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var interactions = [],
    minMoveDistance = 5,
    interact,
    maximumMovesToPersist = 1000,
    // Should be plenty..
propertiesToCopy = 'target,pageX,pageY,clientX,clientY,offsetX,offsetY,screenX,screenY,shiftKey,x,y'.split(','); // Stuff that will be on every interaction.

function Interact() {
    this._elements = [];
}
Interact.prototype.on = function (eventName, target, callback) {
    if (!target) {
        return;
    }
    target._interactEvents = target._interactEvents || {};
    target._interactEvents[eventName] = target._interactEvents[eventName] || [];
    target._interactEvents[eventName].push({
        callback: callback,
        interact: this
    });

    return this;
};
Interact.prototype.emit = function (eventName, target, event, interaction) {
    if (!target) {
        return;
    }

    var interact = this,
        currentTarget = target;

    interaction.originalEvent = event;
    interaction.preventDefault = function () {
        event.preventDefault();
    };
    interaction.stopPropagation = function () {
        event.stopPropagation();
    };

    while (currentTarget) {
        currentTarget._interactEvents && currentTarget._interactEvents[eventName] && currentTarget._interactEvents[eventName].forEach(function (listenerInfo) {
            if (listenerInfo.interact === interact) {
                listenerInfo.callback.call(interaction, interaction);
            }
        });
        currentTarget = currentTarget.parentNode;
    }

    return this;
};
Interact.prototype.off = Interact.prototype.removeListener = function (eventName, target, callback) {
    if (!target || !target._interactEvents || !target._interactEvents[eventName]) {
        return;
    }
    var interactListeners = target._interactEvents[eventName],
        listenerInfo;
    for (var i = 0; i < interactListeners.length; i++) {
        listenerInfo = interactListeners[i];
        if (listenerInfo.interact === interact && listenerInfo.callback === callback) {
            interactListeners.splice(i, 1);
            i--;
        }
    }

    return this;
};
interact = new Interact();

// For some reason touch browsers never change the event target during a touch.
// This is, lets face it, fucking stupid.
function getActualTarget() {
    var scrollX = window.scrollX,
        scrollY = window.scrollY;

    // IE is stupid and doesn't support scrollX/Y
    if (scrollX === undefined) {
        scrollX = document.body.scrollLeft;
        scrollY = document.body.scrollTop;
    }

    return document.elementFromPoint(this.pageX - window.scrollX, this.pageY - window.scrollY);
}

function _getMoveDistance(x1, y1, x2, y2) {
    var adj = Math.abs(x1 - x2),
        opp = Math.abs(y1 - y2);

    return Math.sqrt(Math.pow(adj, 2) + Math.pow(opp, 2));
}

function destroyInteraction(interaction) {
    for (var i = 0; i < interactions.length; i++) {
        if (interactions[i].identifier === interaction.identifier) {
            interactions.splice(i, 1);
        }
    }
}

function getInteraction(identifier) {
    for (var i = 0; i < interactions.length; i++) {
        if (interactions[i].identifier === identifier) {
            return interactions[i];
        }
    }
}

function setInheritedData(interaction, data) {
    for (var i = 0; i < propertiesToCopy.length; i++) {
        interaction[propertiesToCopy[i]] = data[propertiesToCopy[i]];
    }
}

function Interaction(event, interactionInfo) {
    // If there is no event (eg: desktop) just make the identifier undefined
    if (!event) {
        event = {};
    }
    // If there is no extra info about the interaction (eg: desktop) just use the event itself
    if (!interactionInfo) {
        interactionInfo = event;
    }

    // If there is another interaction with the same ID, something went wrong.
    // KILL IT WITH FIRE!
    var oldInteraction = getInteraction(interactionInfo.identifier);
    oldInteraction && oldInteraction.destroy();

    this.identifier = interactionInfo.identifier;

    this.moves = [];

    interactions.push(this);
}

Interaction.prototype = {
    constructor: Interaction,
    getActualTarget: getActualTarget,
    destroy: function destroy() {
        interact.on('destroy', this.target, this, this);
        destroyInteraction(this);
    },
    start: function start(event, interactionInfo) {
        // If there is no extra info about the interaction (eg: desktop) just use the event itself
        if (!interactionInfo) {
            interactionInfo = event;
        }

        var lastStart = {
            time: new Date()
        };
        setInheritedData(lastStart, interactionInfo);
        this.lastStart = lastStart;

        setInheritedData(this, interactionInfo);

        interact.emit('start', event.target, event, this);
        return this;
    },
    move: function move(event, interactionInfo) {
        // If there is no extra info about the interaction (eg: desktop) just use the event itself
        if (!interactionInfo) {
            interactionInfo = event;
        }

        var currentTouch = {
            time: new Date()
        };

        setInheritedData(currentTouch, interactionInfo);

        // Update the interaction
        setInheritedData(this, interactionInfo);

        this.moves.push(currentTouch);

        // Memory saver, culls any moves that are over the maximum to keep.
        this.moves = this.moves.slice(-maximumMovesToPersist);

        var lastMove = this.moves[this.moves.length - 2];
        lastMove && (currentTouch.angle = Math.atan2(currentTouch.pageY - lastMove.pageY, currentTouch.pageX - lastMove.pageX) * 180 / Math.PI);
        this.angle = currentTouch.angle || 0;

        interact.emit('move', event.target, event, this);
        return this;
    },
    drag: function drag(event, interactionInfo) {
        // If there is no extra info about the interaction (eg: desktop) just use the event itself
        if (!interactionInfo) {
            interactionInfo = event;
        }

        var currentTouch = {
            time: new Date(),
            isDrag: true
        };

        setInheritedData(currentTouch, interactionInfo);

        // Update the interaction
        setInheritedData(this, interactionInfo);

        if (!this.moves) {
            this.moves = [];
        }

        this.moves.push(currentTouch);

        // Memory saver, culls any moves that are over the maximum to keep.
        this.moves = this.moves.slice(-maximumMovesToPersist);

        if (!this.dragStarted && _getMoveDistance(this.lastStart.pageX, this.lastStart.pageY, currentTouch.pageX, currentTouch.pageY) > minMoveDistance) {
            this.dragStarted = true;
        }

        var lastDrag = this.moves[this.moves.length - 2] || this.lastStart;
        lastDrag && (currentTouch.angle = Math.atan2(currentTouch.pageY - lastDrag.pageY, currentTouch.pageX - lastDrag.pageX) * 180 / Math.PI);
        this.angle = currentTouch.angle || 0;

        if (this.dragStarted) {
            interact.emit('drag', event.target, event, this);
        }
        return this;
    },
    end: function end(event, interactionInfo) {
        if (!interactionInfo) {
            interactionInfo = event;
        }

        // Update the interaction
        setInheritedData(this, interactionInfo);

        interact.emit('end', event.target, event, this);

        return this;
    },
    cancel: function cancel(event, interactionInfo) {
        if (!interactionInfo) {
            interactionInfo = event;
        }

        // Update the interaction
        setInheritedData(this, interactionInfo);

        interact.emit('cancel', event.target, event, this);

        return this;
    },
    getMoveDistance: function getMoveDistance() {
        if (this.moves.length > 1) {
            var current = this.moves[this.moves.length - 1],
                previous = this.moves[this.moves.length - 2];

            return _getMoveDistance(current.pageX, current.pageY, previous.pageX, previous.pageY);
        }
    },
    getMoveDelta: function getMoveDelta() {
        if (this.moves.length > 1) {
            var current = this.moves[this.moves.length - 1],
                previous = this.moves[this.moves.length - 2];

            return {
                x: current.pageX - previous.pageX,
                y: current.pageY - previous.pageY
            };
        }
    },
    getSpeed: function getSpeed() {
        if (this.moves.length > 1) {
            var current = this.moves[this.moves.length - 1],
                previous = this.moves[this.moves.length - 2];

            return this.getMoveDistance() / (current.time - previous.time);
        }
        return 0;
    },
    getCurrentAngle: function getCurrentAngle(blend) {
        var currentPosition,
            lastAngle,
            i = this.moves.length - 1,
            angle,
            firstAngle,
            angles = [],
            blendSteps = 20 / (this.getSpeed() * 2 + 1),
            stepsUsed = 0;

        if (this.moves && this.moves.length) {

            currentPosition = this.moves[i];
            angle = firstAngle = currentPosition.angle;

            if (blend && this.moves.length > 1) {
                while (--i > 0 && this.moves.length - i < blendSteps) {
                    lastAngle = this.moves[i].angle;
                    if (Math.abs(lastAngle - firstAngle) > 180) {
                        angle -= lastAngle;
                    } else {
                        angle += lastAngle;
                    }
                    stepsUsed++;
                }
                angle = angle / stepsUsed;
            }
        }
        return angle;
    },
    getAllInteractions: function getAllInteractions() {
        return interactions.slice();
    }
};

function start(event) {
    var touch;

    for (var i = 0; i < event.changedTouches.length; i++) {
        touch = event.changedTouches[i];
        new Interaction(event, event.changedTouches[i]).start(event, touch);
    }
}
function drag(event) {
    var touch;

    for (var i = 0; i < event.changedTouches.length; i++) {
        touch = event.changedTouches[i];
        getInteraction(touch.identifier).drag(event, touch);
    }
}
function end(event) {
    var touch;

    for (var i = 0; i < event.changedTouches.length; i++) {
        touch = event.changedTouches[i];
        getInteraction(touch.identifier).end(event, touch).destroy();
    }
}
function cancel(event) {
    var touch;

    for (var i = 0; i < event.changedTouches.length; i++) {
        touch = event.changedTouches[i];
        getInteraction(touch.identifier).cancel(event, touch).destroy();
    }
}

addEvent(document, 'touchstart', start);
addEvent(document, 'touchmove', drag);
addEvent(document, 'touchend', end);
addEvent(document, 'touchcancel', cancel);

var mouseIsDown = false;
addEvent(document, 'mousedown', function (event) {
    mouseIsDown = true;
    if (!interactions.length) {
        new Interaction(event);
    }
    getInteraction().start(event);
});
addEvent(document, 'mousemove', function (event) {
    if (!interactions.length) {
        new Interaction(event);
    }
    var interaction = getInteraction();
    if (!interaction) {
        return;
    }
    if (mouseIsDown) {
        interaction.drag(event);
    } else {
        interaction.move(event);
    }
});
addEvent(document, 'mouseup', function (event) {
    mouseIsDown = false;
    var interaction = getInteraction();
    if (!interaction) {
        return;
    }
    interaction.end(event, null);
});

function addEvent(element, type, callback) {
    if (element.addEventListener) {
        element.addEventListener(type, callback);
    } else if (document.attachEvent) {
        element.attachEvent("on" + type, callback);
    }
}

module.exports = interact;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function KeyboardCode(code, success) {
    this.code = code || [];
    this.success = success || function () {};
    this.codeIndex = 0;

    if (window.addEventListener) {
        window.addEventListener("keyup", this.checkCode.bind(this), false);
    } else {
        window.attachEvent("onkeyup", this.checkCode.bind(this));
    }
}

KeyboardCode.prototype.checkCode = function checkCode(event) {
    if (event.keyCode === this.code[this.codeIndex++]) {
        if (this.codeIndex === this.code.length) {
            this.success();
            this.codeIndex = 0;
        }
    } else {
        this.codeIndex = 0;
    }
};

module.exports = KeyboardCode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KonamiKeyboard = __webpack_require__(8),
    KonamiTouch = __webpack_require__(9);

function Konami(success) {
    new KonamiKeyboard(success || function () {});
    new KonamiTouch(success || function () {});
}

Konami.prototype.constructor = Konami;

module.exports = Konami;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
    KeyboardCode = __webpack_require__(6);

function KonamiKeyboard(success) {
    KeyboardCode.call(this, konamiCode, success || function () {});
}

KonamiKeyboard.prototype = Object.create(KeyboardCode.prototype);
KonamiKeyboard.prototype.constructor = KonamiKeyboard;

module.exports = KonamiKeyboard;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'tap', 'tap', 'tap'],
    GestureDetector = __webpack_require__(4),
    radiansToDegrees = __webpack_require__(11),
    linearRegresion = __webpack_require__(10);

function getGestureVector(moves) {
    var line = linearRegresion(moves),
        direction = 0,
        magitude = 0;

    if (line.length > 2) {
        var startPoint = line[0],
            endPoint = line[line.length - 1];

        direction = radiansToDegrees(Math.atan2(-(startPoint.x - endPoint.x), startPoint.y - endPoint.y));
        magitude = Math.sqrt(Math.pow(Math.abs(startPoint.x - endPoint.x), 2) + Math.pow(Math.abs(startPoint.y - endPoint.y), 2));
    }

    return {
        direction: direction,
        magitude: magitude
    };
}

function KonamiTouch(success) {

    this.code = konamiCode;
    this.success = success || function () {};
    this.codeIndex = 0;

    var detector = new GestureDetector();

    detector.gestures.push(function (moves) {
        var vector = getGestureVector(moves);

        if (vector.magitude < 5) {
            return 'tap';
        }
        if (vector.magitude > 5 && vector.magitude < 20) {
            return;
        }

        if (vector.direction > -45 && vector.direction < 45) {
            return 'up';
        }
        if (vector.direction < -135 || vector.direction > 135) {
            return 'down';
        }
        if (vector.direction < -45 && vector.direction > -135) {
            return 'left';
        }
        if (vector.direction > 45 && vector.direction < 135) {
            return 'right';
        }
    });

    detector.on('gesture', this.checkCode.bind(this));
}

KonamiTouch.prototype.checkCode = function checkCode(event) {
    if (event.name === this.code[this.codeIndex++]) {
        if (this.codeIndex === this.code.length) {
            this.success();
            this.codeIndex = 0;
        }
    } else {
        this.codeIndex = 0;
    }
};

module.exports = KonamiTouch;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function linearRegresion(points) {
    var sumX = 0,
        sumY = 0,
        sumXbyY = 0,
        sumXbyX = 0,
        x = 0,
        y = 0,
        numberOfPoints = points.length,
        results = [],
        m,
        b;

    if (numberOfPoints === 0) {
        return [];
    }

    for (var i = 0; i < numberOfPoints; i++) {
        x = points[i].x;
        y = points[i].y;
        sumX += x;
        sumY += y;
        sumXbyX += x * x;
        sumXbyY += x * y;
    }

    m = (numberOfPoints * sumXbyY - sumX * sumY) / (numberOfPoints * sumXbyX - sumX * sumX);
    b = sumY / numberOfPoints - m * sumX / numberOfPoints;

    for (var i = 0; i < numberOfPoints; i++) {
        results.push({
            x: points[i].x,
            y: points[i].x * m + b
        });
    }

    return results;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(12);

module.exports = function (radians) {
    return radians / constants.radiansInACircle * constants.degreesInACircle;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pi = Math.PI;

module.exports = {
    pi: pi,
    degreesInACircle: 360,
    radiansInACircle: 2 * pi
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _horseTier = __webpack_require__(23);

var HorseTierComponent = _interopRequireWildcard(_horseTier);

var _timeStatus = __webpack_require__(26);

var TimeStatusComponent = _interopRequireWildcard(_timeStatus);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    components: {
        'horse-tier': HorseTierComponent,
        'time-status': TimeStatusComponent
    },
    computed: {
        submitEnabled: function submitEnabled() {
            return this.submitAllowed;
        }
    },
    props: ['servername', 'data', 'now', 'submitAllowed'],
    methods: {
        updateTiming: function updateTiming(e) {
            var pos = { posX: e.clientX, posY: e.clientY };
            window.eventBus.$emit('updateTiming', this.servername, pos);
        }
    }
};

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
            if (minutes < -120) return 'Over ' + this.minutesToHours(minutes) + ' hours ago';
            if (minutes < -5) return Math.abs(minutes) + ' minutes ago (Next estimated race in ' + (60 - Math.abs(minutes) % 60 + 5) + ' minutes)';
            if (minutes >= -5 && minutes <= 0) return 5 - Math.abs(minutes) + ' minutes';

            return minutes + ' minutes';
        },
        currentStatus: function currentStatus(diffInMinutes) {
            if (diffInMinutes < -5) return "Last observed race was";else if (diffInMinutes <= 0) return "Registration is currently available and closes in";else if (diffInMinutes < 10) return "Registration will be available very soon";else return "Registration will be available in";
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
        secondaryStatus: function secondaryStatus() {
            var startTime = new Date();
            startTime.setTime(this.start);
            var diffInSeconds = (startTime.getTime() - this.now) / 1000;
            this.timeLeftInMinutes = Math.floor(diffInSeconds / 60);

            return this.currentStatus(this.timeLeftInMinutes);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _timingDialog = __webpack_require__(27);

var timingDialog = _interopRequireWildcard(_timingDialog);

var _horseRace = __webpack_require__(22);

var horseRace = _interopRequireWildcard(_horseRace);

var _regionSelect = __webpack_require__(25);

var regionSelect = _interopRequireWildcard(_regionSelect);

var _index = __webpack_require__(7);

var K = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    el: '#bd-app',
    data: {
        submitAllowed: false,
        region: "eu",
        allRegions: {},
        servernames: [],
        timings: {},
        now: new Date().getTime()
    },
    created: function created() {
        var _this = this;

        this.fetchServerNames();
        this.handleHash();

        new K.default(function () {
            return _this.submitAllowed = true;
        });

        window.onhashchange = this.handleHash;

        setInterval(this.updateTime, 1000);

        window.eventBus.$on('updateTiming', function (serverName, pos) {
            window.eventBus.$emit('update-dialog', {
                region: _this.region,
                id: _this.servernames.indexOf(serverName),
                servername: serverName,
                posX: pos.posX,
                posY: pos.posY
            });
        });

        window.eventBus.$on('refresh-timings', function () {
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
        handleHash: function handleHash() {
            var hash = document.location.hash;
            hash = hash.substr(1, hash.length - 1);

            if (hash.includes('&submitallowed')) {
                this.submitAllowed = true;
                hash.replace('&submitallowed', '');
            }

            if (hash !== 'eu' && hash !== 'us') hash = 'eu';
            this.setRegion(hash);
        },
        updateTime: function updateTime() {
            this.now = new Date().getTime();
        },
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _radioButton = __webpack_require__(24);

var RadioButtonComponent = _interopRequireWildcard(_radioButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    props: ['submitAllowed'],
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
            return this.enabled && this["submitAllowed"];
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

        window.eventBus.$on('update-dialog', function (data) {
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
                window.eventBus.$emit('refresh-timings');
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.outer-dialog {\n    z-index: 1000;\n    background-color: rgba(0, 0, 0, 0.1);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    top: 0;\n    height: 100%;\n}\n.inner-dialog {\n    position: absolute;\n    border-radius: 4px;\n    border: 1px solid black;\n    width: 50%;\n    min-width: 200px;\n    max-width: 400px;\n}\n.radio {\n    padding-right: 5px;\n}\n.minutes {\n    background-color: black;\n    color: white;\n    border-radius: 5px;\n    border: 1px solid gray;\n}\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\horse-race.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] horse-race.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46fbee97", Component.options)
  } else {
    hotAPI.reload("data-v-46fbee97", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(31),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\horse-tier.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] horse-tier.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bddf5b0", Component.options)
  } else {
    hotAPI.reload("data-v-7bddf5b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\radio-button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio-button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84a7efcc", Component.options)
  } else {
    hotAPI.reload("data-v-84a7efcc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\region-select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] region-select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-967008e2", Component.options)
  } else {
    hotAPI.reload("data-v-967008e2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\time-status.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] time-status.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-742bc68c", Component.options)
  } else {
    hotAPI.reload("data-v-742bc68c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Projects\\BlackDesertHorseTiming\\client\\timing-dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timing-dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39623a76", Component.options)
  } else {
    hotAPI.reload("data-v-39623a76", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
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
     require("vue-hot-reload-api").rerender("data-v-39623a76", module.exports)
  }
}

/***/ }),
/* 29 */
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
  }), _vm._v(" "), (_vm.submitEnabled) ? _c('button', {
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
     require("vue-hot-reload-api").rerender("data-v-46fbee97", module.exports)
  }
}

/***/ }),
/* 30 */
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
  }, [_c('div', [_vm._v(_vm._s(this.secondaryStatus))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(this.timeLeft))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-742bc68c", module.exports)
  }
}

/***/ }),
/* 31 */
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
     require("vue-hot-reload-api").rerender("data-v-7bddf5b0", module.exports)
  }
}

/***/ }),
/* 32 */
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
     require("vue-hot-reload-api").rerender("data-v-84a7efcc", module.exports)
  }
}

/***/ }),
/* 33 */
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
     require("vue-hot-reload-api").rerender("data-v-967008e2", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('timing-dialog', {
    attrs: {
      "submit-allowed": _vm.submitAllowed
    }
  }), _vm._v(" "), _c('div', {
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
        "submit-allowed": _vm.submitAllowed,
        "servername": _vm.servernames[i]
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d7d1e118", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("5e97a1d7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39623a76!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timing-dialog.vue", function() {
     var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39623a76!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timing-dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
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

var listToStyles = __webpack_require__(20)

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vueApp = __webpack_require__(1);

window.bootstrapTimingsApp = function () {
    window.eventBus = new Vue();
    new Vue(vueApp);
};

/***/ })
/******/ ]);