'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  ## Overview
  `@front10/landing-page-book/Analytics` is used to send statistics of visits to google analytics
  ## How to use
  1- Add following content to import the component:
  ```js
   import Analytics from "@front10/landing-page-book/dist/components/Analytics";
  ```
  2- Put this code into jsx page:
  ```html
   <Analytics idTracking='UA-0000000-1' />
  ```
 */
var Analytics = function (_Component) {
  _inherits(Analytics, _Component);

  function Analytics(props) {
    _classCallCheck(this, Analytics);

    var _this = _possibleConstructorReturn(this, (Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call(this, props));

    _reactGa2.default.initialize(props.idTracking, {
      debug: props.debug,
      testMode: props.testMode
    });
    return _this;
  }

  _createClass(Analytics, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var urlPath = this.props.urlPath;

      _reactGa2.default.pageview(urlPath);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      _reactGa2.default.pageview(prevProps.urlPath);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return Analytics;
}(_react.Component);

Analytics.propTypes = {
  /**
   * Tracking ID code of your property in google analytics
   */
  idTracking: _propTypes2.default.string.isRequired,
  /**
   * Path you want to track, for example '/section/page1'
   */
  urlPath: _propTypes2.default.string,
  /**
   * If set to true, will output additional feedback to the console
   */
  debug: _propTypes2.default.bool,
  /**
   * Enable test mode in the component
   */
  testMode: _propTypes2.default.bool
};
Analytics.defaultProps = {
  urlPath: typeof window !== 'undefined' && typeof window.location !== 'undefined' ? window.location.pathname + window.location.search : '',
  debug: false,
  testMode: false
};

exports.default = Analytics;