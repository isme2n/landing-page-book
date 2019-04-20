'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSelector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var ThemeSelector = exports.ThemeSelector = function (_React$Component) {
  _inherits(ThemeSelector, _React$Component);

  function ThemeSelector() {
    _classCallCheck(this, ThemeSelector);

    return _possibleConstructorReturn(this, (ThemeSelector.__proto__ || Object.getPrototypeOf(ThemeSelector)).apply(this, arguments));
  }

  _createClass(ThemeSelector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var theme = this.props.theme;

      if (prevProps.theme != theme) this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      var bootstrapLink = document.getElementById('bootstrap-css');
      if (!bootstrapLink) {
        bootstrapLink = document.createElement('link');
        bootstrapLink.setAttribute('integrity', 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm');
        bootstrapLink.setAttribute('id', 'bootstrap-css');
        bootstrapLink.setAttribute('rel', 'stylesheet');
        bootstrapLink.setAttribute('crossorigin', 'anonymous');
        bootstrapLink.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
        document.head.appendChild(bootstrapLink);
      }

      var fontScript = document.getElementById('font-css');
      if (!fontScript) {
        fontScript = document.createElement('script');
        fontScript.setAttribute('id', 'font-css');
        fontScript.setAttribute('src', 'https://use.fontawesome.com/aea3714d4b.js');
        document.body.appendChild(fontScript);
      }

      var theme = this.props.theme;

      theme = theme ? theme : localStorage.getItem('selector-current-theme') || 'default';
      var link = document.getElementById('story-book-themes');
      if (!link) {
        var root = document.getElementById('root');
        if (root) root.style.display = 'none';
        var _link = document.createElement('link');
        _link.setAttribute('type', 'text/css');
        _link.setAttribute('rel', 'stylesheet');
        _link.setAttribute('href', 'themes/' + theme + '/index.css');
        _link.setAttribute('id', 'story-book-themes');
        _link.onload = function () {
          root.style.display = 'block';
        };
        document.head.appendChild(_link);
      } else {
        link.setAttribute('href', 'themes/' + theme + '/index.css');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var channel = _addons2.default.getChannel();

      channel.emit('theme/switch');
      return children;
    }
  }]);

  return ThemeSelector;
}(_react2.default.Component);

ThemeSelector.propTypes = {
  theme: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

ThemeSelector.defaultProps = {
  children: null
};