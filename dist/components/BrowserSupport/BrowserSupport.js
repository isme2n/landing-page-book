'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _Browser = require('../Browser');

var _Browser2 = _interopRequireDefault(_Browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserSupport = function (_Component) {
  _inherits(BrowserSupport, _Component);

  function BrowserSupport() {
    _classCallCheck(this, BrowserSupport);

    return _possibleConstructorReturn(this, (BrowserSupport.__proto__ || Object.getPrototypeOf(BrowserSupport)).apply(this, arguments));
  }

  _createClass(BrowserSupport, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          browsers = _props.browsers,
          showBrowserVendor = _props.showBrowserVendor,
          showBrowserVersion = _props.showBrowserVersion,
          imgFilter = _props.imgFilter;

      return _react2.default.createElement(
        'div',
        null,
        browsers.map(function (browser) {
          return _react2.default.createElement(
            'div',
            { className: 'd-inline-flex text-center pl-3 pr-3', key: browser.vendor },
            _react2.default.createElement(_Browser2.default, _extends({
              vendor: browser.vendor,
              version: browser.version,
              showBrowserVendor: showBrowserVendor,
              showBrowserVersion: showBrowserVersion,
              imgFilter: imgFilter
            }, (0, _ExtractProps2.default)('browser', _this2.props)))
          );
        })
      );
    }
  }]);

  return BrowserSupport;
}(_react.Component);

BrowserSupport.propTypes = {
  /**
   * Define if the browser name is displayed
   */
  showBrowserVendor: _propTypes2.default.bool,
  /**
   * Define if the browser version is displayed
   */
  showBrowserVersion: _propTypes2.default.bool,
  /**
   * Array of browsers
   */
  browsers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    vendor: _propTypes2.default.string,
    version: _propTypes2.default.string
  })),
  /**
   * The filter property defines visual effects (like blur and saturation) to an element (often <img>).
   */
  imgFilter: _propTypes2.default.string
};
BrowserSupport.defaultProps = {
  showBrowserVendor: true,
  showBrowserVersion: true,
  browsers: [],
  imgFilter: null
};

exports.default = BrowserSupport;