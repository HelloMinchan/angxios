"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAMESPACE = "angxios";
var NON_BODY_HTTP_METHOD = ["get", "delete", "options"];

_axios["default"].interceptors.request.use(function (config) {
  var angxiosConfig = config[NAMESPACE] || {};

  if (Object.keys(angxiosConfig).length === 0) {
    config[NAMESPACE] = angxiosConfig;
    angxiosConfig.retryCount = Angxios.retryCount;
  } else {
    --angxiosConfig.retryCount;
  }

  return config;
});

_axios["default"].interceptors.response.use(function (config) {
  return config;
}, function (error) {
  var config = error.config;

  if (config[NAMESPACE].retryCount > 0) {
    if (NON_BODY_HTTP_METHOD.includes(config.method)) {
      return _axios["default"]["".concat(config.method)](config.url, config);
    } else {
      return _axios["default"]["".concat(config.method)](config.url, config.data, config);
    }
  }

  return Promise.reject(error);
});

var Angxios = new ( /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "retryCount", 0);

    _defineProperty(this, "axios", _axios["default"]);
  }

  _createClass(_class2, [{
    key: "setBaseURL",
    value:
    /**
     * @name setBaseURL
     * @description set global axios defaults base URL
     * @param {string} baseURL
     */
    function setBaseURL(baseURL) {
      _axios["default"].defaults.baseURL = baseURL;
    }
    /**
     * @name setTimeout
     * @description set global axios defaults timeout
     * @param {number} time
     */

  }, {
    key: "setTimeout",
    value: function setTimeout(time) {
      _axios["default"].defaults.timeout = time;
    }
    /**
     * @name setRetryCount
     * @description set request retry count
     * @param {number} retryCount
     */

  }, {
    key: "setRetryCount",
    value: function setRetryCount(retryCount) {
      this.retryCount = retryCount;
    } // request(config) {}
    // head(url, config) {}

    /**
     * @name get
     * @description axios get Function
     * @param {string} url
     * @param {?object} config
     */

  }, {
    key: "get",
    value: function get(url, config) {
      return _axios["default"].get(url, config ? config : null);
    }
    /**
     * @name delete
     * @description axios delete Function
     * @param {string} url
     * @param {?object} config
     */

  }, {
    key: "delete",
    value: function _delete(url, config) {
      return _axios["default"]["delete"](url, config ? config : null);
    }
    /**
     * @name options
     * @description axios options Function
     * @param {string} url
     * @param {?object} config
     */

  }, {
    key: "options",
    value: function options(url, config) {
      return _axios["default"].options(url, config ? config : null);
    }
    /**
     * @name post
     * @description axios post Function
     * @param {string} url
     * @param {?object} body
     * @param {?object} config
     */

  }, {
    key: "post",
    value: function post(url, body, config) {
      return _axios["default"].post(url, body ? body : null, config ? config : null);
    }
    /**
     * @name put
     * @description axios put Function
     * @param {string} url
     * @param {?object} body
     * @param {?object} config
     */

  }, {
    key: "put",
    value: function put(url, body, config) {
      return _axios["default"].put(url, body ? body : null, config ? config : null);
    }
    /**
     * @name patch
     * @description axios patch Function
     * @param {string} url
     * @param {?object} body
     * @param {?object} config
     */

  }, {
    key: "patch",
    value: function patch(url, body, config) {
      return _axios["default"].patch(url, body ? body : null, config ? config : null);
    }
  }]);

  return _class2;
}())();
var _default = Angxios;
exports["default"] = _default;
//# sourceMappingURL=index.js.map