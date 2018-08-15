module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.execOnce = execOnce;
exports.deprecated = deprecated;
exports.printAndExit = printAndExit;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _assign = _interopRequireDefault(__webpack_require__(23));

function warn(message) {
  if (false) {
    console.error(message);
  }
}

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

function deprecated(fn, message) {
  if (true) return fn;
  var warned = false;

  var newFn = function newFn() {
    if (!warned) {
      warned = true;
      console.error(message);
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.apply(this, args);
  }; // copy all properties


  (0, _assign.default)(newFn, fn);
  return newFn;
}

function printAndExit(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (code === 0) {
    console.log(message);
  } else {
    console.error(message);
  }

  process.exit(code);
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var props, compName, message;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Component.getInitialProps) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {});

          case 2:
            _context.next = 4;
            return Component.getInitialProps(ctx);

          case 4:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", props);

          case 7:
            if (props) {
              _context.next = 11;
              break;
            }

            compName = getDisplayName(Component);
            message = "\"".concat(compName, ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(message);

          case 11:
            return _context.abrupt("return", props);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEquals;

function shallowEquals(a, b) {
  for (var i in a) {
    if (b[i] !== a[i]) return false;
  }

  for (var _i in b) {
    if (b[_i] !== a[_i]) return false;
  }

  return true;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._rewriteUrlForNextExport = _rewriteUrlForNextExport;
exports.makePublicRouterInstance = makePublicRouterInstance;
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function get() {
    return _withRouter.default;
  }
});
exports.Router = exports.createRouter = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(12));

var _typeof2 = _interopRequireDefault(__webpack_require__(25));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(26));

var _defineProperty = _interopRequireDefault(__webpack_require__(42));

var _router = _interopRequireDefault(__webpack_require__(44));

var _utils = __webpack_require__(13);

var _withRouter = _interopRequireDefault(__webpack_require__(51));

/* global window */
var SingletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState'];
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    SingletonRouter.router.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});
var warnAboutRouterOnAppUpdated = (0, _utils.execOnce)(function () {
  console.warn("Router.onAppUpdated is removed - visit https://err.sh/next.js/no-on-app-updated-hook for more information.");
});
Object.defineProperty(SingletonRouter, 'onAppUpdated', {
  get: function get() {
    return null;
  },
  set: function set() {
    warnAboutRouterOnAppUpdated();
    return null;
  }
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


var _default = SingletonRouter; // Reexport the withRoute HOC

exports.default = _default;

// INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = new (Function.prototype.bind.apply(_router.default, [null].concat(args)))();
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.createRouter = createRouter;
var Router = _router.default;
exports.Router = Router;

function _rewriteUrlForNextExport(url) {
  var _url$split = url.split('#'),
      _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
      hash = _url$split2[1];

  url = url.replace(/#.*/, '');

  var _url$split3 = url.split('?'),
      _url$split4 = (0, _slicedToArray2.default)(_url$split3, 2),
      path = _url$split4[0],
      qs = _url$split4[1];

  path = path.replace(/\/$/, '');
  var newPath = path; // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) {
    newPath = "".concat(path, "/");
  }

  if (qs) {
    newPath = "".concat(newPath, "?").concat(qs);
  }

  if (hash) {
    newPath = "".concat(newPath, "#").concat(hash);
  }

  return newPath;
} // This function is used to create the `withRouter` router instance


function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _objectSpread2.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  }

  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37)


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38)


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(17);

var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUrl = createUrl;
exports.Container = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(12));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(18));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(10));

var _createClass2 = _interopRequireDefault(__webpack_require__(11));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(19));

var _inherits2 = _interopRequireDefault(__webpack_require__(20));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(21));

var _shallowEquals = _interopRequireDefault(__webpack_require__(22));

var _utils = __webpack_require__(13);

var _router = __webpack_require__(24);

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(App, _Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (App.__proto__ || (0, _getPrototypeOf.default)(App)).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      var headManager = this.props.headManager;
      return {
        headManager: headManager,
        router: (0, _router.makePublicRouterInstance)(this.props.router),
        _containerProps: (0, _objectSpread2.default)({}, this.props)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          router = _props.router,
          Component = _props.Component,
          pageProps = _props.pageProps;
      var url = createUrl(router);
      return _react.default.createElement(Container, null, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return (0, _utils.loadGetInitialProps)(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);
  return App;
}(_react.Component);

exports.default = App;
Object.defineProperty(App, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'App'
});
Object.defineProperty(App, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _containerProps: _propTypes.default.any,
    headManager: _propTypes.default.object,
    router: _propTypes.default.object
  }
});

var Container =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(Container, _Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (Container.__proto__ || (0, _getPrototypeOf.default)(Container)).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = this.props.hash;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // need this check not to rerender component which has already thrown an error
      return !(0, _shallowEquals.default)(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_react.default.Fragment, null, children);
    }
  }]);
  return Container;
}(_react.Component);

exports.Container = Container;
Object.defineProperty(Container, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _containerProps: _propTypes.default.any
  }
});
var warnUrl = (0, _utils.execOnce)(function () {
  if (false) {
    (0, _utils.warn)("Warning: the 'url' property is deprecated. https://err.sh/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(26));

var _typeof2 = _interopRequireDefault(__webpack_require__(25));

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(16));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(12));

var _set = _interopRequireDefault(__webpack_require__(27));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(10));

var _createClass2 = _interopRequireDefault(__webpack_require__(11));

var _url2 = __webpack_require__(46);

var _EventEmitter = _interopRequireDefault(__webpack_require__(47));

var _shallowEquals = _interopRequireDefault(__webpack_require__(22));

var _pQueue = _interopRequireDefault(__webpack_require__(48));

var _utils = __webpack_require__(13);

var _ = __webpack_require__(24);

/* global __NEXT_DATA__ */
var historyUnavailableWarning = (0, _utils.execOnce)(function () {
  (0, _utils.warn)("Warning: window.history is not available.");
});
var historyMethodWarning = (0, _utils.execOnce)(function (method) {
  (0, _utils.warn)("Warning: window.history.".concat(method, " is not available"));
});

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent,
        err = _ref.err;

    (0, _classCallCheck2.default)(this, Router);
    // represents the current component key
    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (Component !== ErrorComponent) {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App // Handling Router Events

    };
    this.events = new _EventEmitter.default();
    this.pageLoader = pageLoader;
    this.prefetchQueue = new _pQueue.default({
      concurrency: 2
    });
    this.ErrorComponent = ErrorComponent;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set.default();
    this.componentLoadCancel = null;
    this.onPopState = this.onPopState.bind(this);

    this._beforePopState = function () {
      return true;
    };

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', (0, _url2.format)({
        pathname: pathname,
        query: query
      }), (0, _utils.getURL)());
      window.addEventListener('popstate', this.onPopState);
    }
  }

  (0, _createClass2.default)(Router, [{
    key: "onPopState",
    value: function onPopState(e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var pathname = this.pathname,
            query = this.query;
        this.changeState('replaceState', (0, _url2.format)({
          pathname: pathname,
          query: query
        }), (0, _utils.getURL)());
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (!this._beforePopState(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;
      this.replace(url, as, options);
    }
  }, {
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = (0, _objectSpread2.default)({}, data, {
        Component: Component
      });
      this.components[route] = newData;

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function () {
      var _reload = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(route) {
        var pathname, query, url, as, routeInfo, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                delete this.components[route];
                this.pageLoader.clearCache(route);

                if (!(route !== this.route)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                pathname = this.pathname, query = this.query;
                url = window.location.href; // This makes sure we only use pathname + query + hash, to mirror `asPath` coming from the server.

                as = window.location.pathname + window.location.search + window.location.hash;
                this.events.emit('routeChangeStart', url);
                _context.next = 10;
                return this.getRouteInfo(route, pathname, query, as);

              case 10:
                routeInfo = _context.sent;
                error = routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.notify(routeInfo);

                if (!error) {
                  _context.next = 18;
                  break;
                }

                this.events.emit('routeChangeError', error, url);
                throw error;

              case 18:
                this.events.emit('routeChangeComplete', url);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function reload(_x) {
        return _reload.apply(this, arguments);
      };
    }()
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(method, _url, _as, options) {
        var url, as, _parse, pathname, query, route, _options$shallow, shallow, routeInfo, _routeInfo, error, hash;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // If url and as provided as an object representation,
                // we'll format them into the string version here.
                url = (0, _typeof2.default)(_url) === 'object' ? (0, _url2.format)(_url) : _url;
                as = (0, _typeof2.default)(_as) === 'object' ? (0, _url2.format)(_as) : _as; // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly for the SSR page.

                if (__NEXT_DATA__.nextExport) {
                  as = (0, _._rewriteUrlForNextExport)(as);
                }

                this.abortComponentLoad(as); // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!this.onlyAHashChange(as)) {
                  _context2.next = 10;
                  break;
                }

                this.events.emit('hashChangeStart', as);
                this.changeState(method, url, as);
                this.scrollToHash(as);
                this.events.emit('hashChangeComplete', as);
                return _context2.abrupt("return", true);

              case 10:
                _parse = (0, _url2.parse)(url, true), pathname = _parse.pathname, query = _parse.query; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitalProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)

                if (!this.urlIsNew(pathname, query)) {
                  method = 'replaceState';
                }

                route = toRoute(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeInfo = null;
                this.events.emit('routeChangeStart', as); // If shallow === false and other conditions met, we reuse the
                // existing routeInfo for this route.
                // Because of this, getInitialProps would not run.

                if (!(shallow && this.isShallowRoutingPossible(route))) {
                  _context2.next = 20;
                  break;
                }

                routeInfo = this.components[route];
                _context2.next = 23;
                break;

              case 20:
                _context2.next = 22;
                return this.getRouteInfo(route, pathname, query, as);

              case 22:
                routeInfo = _context2.sent;

              case 23:
                _routeInfo = routeInfo, error = _routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context2.next = 26;
                  break;
                }

                return _context2.abrupt("return", false);

              case 26:
                this.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                hash = window.location.hash.substring(1);
                this.set(route, pathname, query, as, (0, _objectSpread2.default)({}, routeInfo, {
                  hash: hash
                }));

                if (!error) {
                  _context2.next = 33;
                  break;
                }

                this.events.emit('routeChangeError', error, as);
                throw error;

              case 33:
                this.events.emit('routeChangeComplete', as);
                return _context2.abrupt("return", true);

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function change(_x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      };
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (typeof window.history === 'undefined') {
        historyUnavailableWarning();
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        historyMethodWarning(method);
        return;
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(route, pathname, query, as) {
        var routeInfo, _routeInfo2, Component, ctx, _Component, _ctx;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                routeInfo = null;
                _context3.prev = 1;
                routeInfo = this.components[route];

                if (routeInfo) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return this.fetchComponent(route, as);

              case 6:
                _context3.t0 = _context3.sent;
                routeInfo = {
                  Component: _context3.t0
                };

              case 8:
                _routeInfo2 = routeInfo, Component = _routeInfo2.Component;

                if (!(typeof Component !== 'function')) {
                  _context3.next = 11;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 11:
                ctx = {
                  pathname: pathname,
                  query: query,
                  asPath: as
                };
                _context3.next = 14;
                return this.getInitialProps(Component, ctx);

              case 14:
                routeInfo.props = _context3.sent;
                this.components[route] = routeInfo;
                _context3.next = 40;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t1 = _context3["catch"](1);

                if (!(_context3.t1.code === 'PAGE_LOAD_ERROR')) {
                  _context3.next = 24;
                  break;
                }

                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So, we need to mark it as a cancelled error and stop the routing logic.

                _context3.t1.cancelled = true;
                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 24:
                if (!_context3.t1.cancelled) {
                  _context3.next = 26;
                  break;
                }

                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 26:
                _Component = this.ErrorComponent;
                routeInfo = {
                  Component: _Component,
                  err: _context3.t1
                };
                _ctx = {
                  err: _context3.t1,
                  pathname: pathname,
                  query: query
                };
                _context3.prev = 29;
                _context3.next = 32;
                return this.getInitialProps(_Component, _ctx);

              case 32:
                routeInfo.props = _context3.sent;
                _context3.next = 39;
                break;

              case 35:
                _context3.prev = 35;
                _context3.t2 = _context3["catch"](29);
                console.error('Error in error page `getInitialProps`: ', _context3.t2);
                routeInfo.props = {};

              case 39:
                routeInfo.error = _context3.t1;

              case 40:
                return _context3.abrupt("return", routeInfo);

              case 41:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 18], [29, 35]]);
      }));

      return function getRouteInfo(_x6, _x7, _x8, _x9) {
        return _getRouteInfo.apply(this, arguments);
      };
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._beforePopState = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _asPath$split = this.asPath.split('#'),
          _asPath$split2 = (0, _slicedToArray2.default)(_asPath$split, 2),
          oldUrlNoHash = _asPath$split2[0],
          oldHash = _asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2.default)(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      }

      var el = document.getElementById(hash);

      if (el) {
        el.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(pathname, query) {
      return this.pathname !== pathname || !(0, _shallowEquals.default)(query, this.query);
    }
  }, {
    key: "isShallowRoutingPossible",
    value: function isShallowRoutingPossible(route) {
      return (// If there's cached routeInfo for the route.
        Boolean(this.components[route]) && // If the route is already rendered on the screen.
        this.route === route
      );
    }
  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(url) {
        var _this = this;

        var _parse2, pathname, route;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (true) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _parse2 = (0, _url2.parse)(url), pathname = _parse2.pathname;
                route = toRoute(pathname);
                return _context4.abrupt("return", this.prefetchQueue.add(function () {
                  return _this.fetchRoute(route);
                }));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function prefetch(_x10) {
        return _prefetch.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(route, as) {
        var cancelled, cancel, Component, error;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.fetchRoute(route);

              case 4:
                Component = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context5.abrupt("return", Component);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function fetchComponent(_x11, _x12) {
        return _fetchComponent.apply(this, arguments);
      };
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(Component, ctx) {
        var cancelled, cancel, App, props, err;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;
                App = this.components['/_app'].Component;
                _context6.next = 6;
                return (0, _utils.loadGetInitialProps)(App, {
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 6:
                props = _context6.sent;

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context6.next = 12;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 12:
                return _context6.abrupt("return", props);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getInitialProps(_x13, _x14) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchRoute",
    value: function () {
      var _fetchRoute = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(route) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.pageLoader.loadPage(route));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function fetchRoute(_x15) {
        return _fetchRoute.apply(this, arguments);
      };
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        this.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      var App = this.components['/_app'].Component;
      this.subscriptions.forEach(function (fn) {
        return fn((0, _objectSpread2.default)({}, data, {
          App: App
        }));
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this2 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this2.subscriptions.delete(fn);
      };
    }
  }]);
  return Router;
}();

exports.default = Router;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _set = _interopRequireDefault(__webpack_require__(27));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(10));

var _createClass2 = _interopRequireDefault(__webpack_require__(11));

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    (0, _classCallCheck2.default)(this, EventEmitter);
    Object.defineProperty(this, "listeners", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    });
  }

  (0, _createClass2.default)(EventEmitter, [{
    key: "on",
    value: function on(event, cb) {
      if (!this.listeners[event]) {
        this.listeners[event] = new _set.default();
      }

      if (this.listeners[event].has(cb)) {
        throw new Error("The listener already exising in event: ".concat(event));
      }

      this.listeners[event].add(cb);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      if (!this.listeners[event]) return;
      this.listeners[event].forEach(function (cb) {
        return cb.apply(void 0, data);
      }); // eslint-disable-line standard/no-callback-literal
    }
  }, {
    key: "off",
    value: function off(event, cb) {
      this.listeners[event].delete(cb);
    }
  }]);
  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__(49));

var _assign = _interopRequireDefault(__webpack_require__(23));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(10));

var _createClass2 = _interopRequireDefault(__webpack_require__(11));

// based on https://github.com/sindresorhus/p-queue (MIT)
// modified for browser support
var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    (0, _classCallCheck2.default)(this, Queue);
    this._queue = [];
  }

  (0, _createClass2.default)(Queue, [{
    key: "enqueue",
    value: function enqueue(run) {
      this._queue.push(run);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._queue.shift();
    }
  }, {
    key: "size",
    get: function get() {
      return this._queue.length;
    }
  }]);
  return Queue;
}();

var PQueue =
/*#__PURE__*/
function () {
  function PQueue(opts) {
    (0, _classCallCheck2.default)(this, PQueue);
    opts = (0, _assign.default)({
      concurrency: Infinity,
      queueClass: Queue
    }, opts);

    if (opts.concurrency < 1) {
      throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    }

    this.queue = new opts.queueClass(); // eslint-disable-line new-cap

    this._pendingCount = 0;
    this._concurrency = opts.concurrency;

    this._resolveEmpty = function () {};
  }

  (0, _createClass2.default)(PQueue, [{
    key: "_next",
    value: function _next() {
      this._pendingCount--;

      if (this.queue.size > 0) {
        this.queue.dequeue()();
      } else {
        this._resolveEmpty();
      }
    }
  }, {
    key: "add",
    value: function add(fn, opts) {
      var _this = this;

      return new _promise.default(function (resolve, reject) {
        var run = function run() {
          _this._pendingCount++;
          fn().then(function (val) {
            resolve(val);

            _this._next();
          }, function (err) {
            reject(err);

            _this._next();
          });
        };

        if (_this._pendingCount < _this._concurrency) {
          run();
        } else {
          _this.queue.enqueue(run, opts);
        }
      });
    }
  }, {
    key: "onEmpty",
    value: function onEmpty() {
      var _this2 = this;

      return new _promise.default(function (resolve) {
        var existingResolve = _this2._resolveEmpty;

        _this2._resolveEmpty = function () {
          existingResolve();
          resolve();
        };
      });
    }
  }, {
    key: "size",
    get: function get() {
      return this.queue.size;
    }
  }, {
    key: "pending",
    get: function get() {
      return this._pendingCount;
    }
  }]);
  return PQueue;
}();

exports.default = PQueue;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(17);

var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRouter;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(12));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(18));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(10));

var _createClass2 = _interopRequireDefault(__webpack_require__(11));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(19));

var _inherits2 = _interopRequireDefault(__webpack_require__(20));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(21));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(52));

var _utils = __webpack_require__(13);

function withRouter(ComposedComponent) {
  var displayName = (0, _utils.getDisplayName)(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithRouteWrapper, _Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (WithRouteWrapper.__proto__ || (0, _getPrototypeOf.default)(WithRouteWrapper)).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        var props = (0, _objectSpread2.default)({
          router: this.context.router
        }, this.props);
        return _react.default.createElement(ComposedComponent, props);
      }
    }]);
    return WithRouteWrapper;
  }(_react.Component);

  Object.defineProperty(WithRouteWrapper, "contextTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      router: _propTypes.default.object
    }
  });
  Object.defineProperty(WithRouteWrapper, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "withRouter(".concat(displayName, ")")
  });
  return (0, _hoistNonReactStatics.default)(WithRouteWrapper, ComposedComponent);
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ })
/******/ ]);