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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className,
          loading = _props.loading,
          tooltip = _props.tooltip,
          children = _props.children,
          ariaLabel = _props.ariaLabel,
          type = _props.type,
          onClick = _props.onClick,
          loadingClass = _props.loadingClass,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          active = _props.active,
          style = _props.style;

      var cssclass = className + ' btn-' + color;
      if (outline) cssclass += ' btn-outline-' + color;
      if (size) cssclass += ' btn-' + size;
      if (active) cssclass += ' active';
      /* eslint-disable react/button-has-type */
      return _react2.default.createElement(
        'button',
        {
          title: tooltip,
          disabled: disabled,
          className: 'Button btn ' + cssclass,
          onClick: onClick,
          'aria-label': ariaLabel,
          type: type,
          style: style
        },
        !loading && children,
        loading && _react2.default.createElement(_Icon2.default, { icon: loadingClass })
      );
      /* eslint-enable react/button-has-type */
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  /**
   * Disable or enable button
   */
  disabled: _propTypes2.default.bool,
  /**
   * Show loading mode
   */
  loading: _propTypes2.default.bool,
  /**
   * Define if button is only with border
   */
  outline: _propTypes2.default.bool,
  /**
   * Define if button is active
   */
  active: _propTypes2.default.bool,
  /**
   * Class to show loading indicator
   */
  loadingClass: _propTypes2.default.string,
  /**
   * Class to apply to button
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Aria label of the button
   */
  ariaLabel: _propTypes2.default.string,
  /**
   * Button tooltip
   */
  tooltip: _propTypes2.default.string,
  /**
   * Button size. Can be <code>'lg'</code>, <code>'sm'</code>
   */
  size: _propTypes2.default.string,
  /**
   * Type of the button
   */
  type: _propTypes2.default.string,
  /**
   * Color to apply to button
   */
  color: _propTypes2.default.string,
  /**
   * Button styles
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Called when button is clicked
   */
  onClick: _propTypes2.default.func
};
Button.defaultProps = {
  disabled: false,
  loading: false,
  outline: false,
  active: false,
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  className: '',
  style: {},
  ariaLabel: '',
  tooltip: '',
  size: '',
  type: 'button',
  color: 'light',
  children: null,
  onClick: function onClick() {}
};

var ButtonWithStyles = (0, _WithStyles2.default)(Button);

exports.default = ButtonWithStyles;