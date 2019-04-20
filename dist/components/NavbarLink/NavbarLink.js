'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarLink = function (_Component) {
  _inherits(NavbarLink, _Component);

  function NavbarLink() {
    _classCallCheck(this, NavbarLink);

    return _possibleConstructorReturn(this, (NavbarLink.__proto__ || Object.getPrototypeOf(NavbarLink)).apply(this, arguments));
  }

  _createClass(NavbarLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          target = _props.target,
          onClick = _props.onClick,
          children = _props.children,
          className = _props.className;

      return _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          'a',
          {
            className: className + ' nav-link NavbarLink',
            href: href,
            target: target,
            onClick: onClick
          },
          children
        )
      );
    }
  }]);

  return NavbarLink;
}(_react.Component);

NavbarLink.propTypes = {
  /**
   * Url to redirect on intem click.
   */
  href: _propTypes2.default.string,
  /**
   * Link target.
   */
  target: _propTypes2.default.string,
  /**
   * Called when link is clicked
   */
  onClick: _propTypes2.default.func,
  /**
   * Elements show into the NavbarLink
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Class of the component.
   */
  className: _propTypes2.default.string
};
NavbarLink.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  textColor: 'light',
  href: '#',
  target: '',
  onClick: function onClick() {},
  children: null,
  className: ''
};

exports.default = (0, _WithStyles2.default)(NavbarLink);