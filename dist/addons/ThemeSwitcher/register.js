'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _themes = require('../../../storybook-utils/configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  width: '100%'
};
var button = {
  padding: '15px',
  cursor: 'pointer',
  width: '100%',
  border: 'none'
};

var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes() {
    var _ref;

    _classCallCheck(this, Notes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Notes.__proto__ || Object.getPrototypeOf(Notes)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      theme: localStorage.getItem('selector-current-theme') || 'default'
    };
    _this.changeTheme = _this.changeTheme.bind(_this);
    return _this;
  }

  _createClass(Notes, [{
    key: 'changeTheme',
    value: function changeTheme($event) {
      var iframe = document.getElementById('storybook-preview-iframe');
      if (iframe) {
        var Iframedocument = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
        var link = Iframedocument.getElementById('story-book-themes');
        if (link) {
          var root = Iframedocument.getElementById('root');
          if (root) {
            root.style.display = 'none';
          }
          link.setAttribute('href', 'themes/' + $event.currentTarget.id.toLowerCase() + '/index.css');
          var loaderTheme = Iframedocument.getElementById('story-book-loader-theme');
          if (!loaderTheme) {
            loaderTheme = Iframedocument.createElement('div');
            loaderTheme.setAttribute('class', 'ui active inverted dimmer');
            loaderTheme.setAttribute('id', 'story-book-loader-theme');
            loaderTheme.innerHTML = '<div class="text-center mt-5"><i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i></div><div class="text-center">Changing theme</div>';
            Iframedocument.body.appendChild(loaderTheme);
          }
          loaderTheme.style.height = '90%';
          loaderTheme.style.display = 'block';
          setTimeout(function () {
            if (root) {
              root.style.display = 'block';
            }
            loaderTheme.style.display = 'none';
          }, 1000);
          this.setState({ theme: $event.currentTarget.id.toLowerCase() });
          localStorage.setItem('selector-current-theme', $event.currentTarget.id.toLowerCase());
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var theme = this.state.theme;

      return _react2.default.createElement(
        'div',
        { style: styles },
        _themes2.default.map(function (them) {
          return _react2.default.createElement(
            'button',
            {
              key: them.id,
              id: them.id,
              type: 'submit',
              style: theme === them.id ? _extends({}, button, {
                backgroundColor: '#4285f4',
                color: '#fff'
              }) : button,
              onClick: _this2.changeTheme
            },
            them.name
          );
        })
      );
    }
  }]);

  return Notes;
}(_react2.default.Component);

// Register the addon with a unique name.


_addons2.default.register('theme/switcher', function (api) {
  var notesLocal = _react2.default.createElement(Notes, { channel: _addons2.default.getChannel(), api: api });
  // Also need to set a unique name to the panel.
  _addons2.default.addPanel('theme/switcher/panel', {
    title: 'Themes',
    render: function render() {
      return notesLocal;
    }
  });
});