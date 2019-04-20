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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          type = _props.type,
          children = _props.children,
          textAlign = _props.textAlign,
          icon = _props.icon,
          style = _props.style;

      var componentClassName = '' + className;
      return _react2.default.createElement(type, {
        className: componentClassName,
        style: style
      }, [icon && textAlign === 'left' && _react2.default.createElement(_Icon2.default, { icon: icon, className: 'mr-1' }), children, icon && textAlign === 'right' && _react2.default.createElement(_Icon2.default, { icon: icon, className: 'ml-1' })]);
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  /**
   * Class name of header
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Type of tag element. Can be <code>'h1'</code>, <code>'h2'</code>, <code>'h3'</code>, <code>'h4'</code>, <code>'h5'</code> and <code>'h6'</code>
   */
  type: _propTypes2.default.string,
  /**
   * Icon to show in component
   */
  icon: _propTypes2.default.string,
  /**
   * List of element to show inside as childrens.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Icon to show in component
   */
  textAlign: _propTypes2.default.string
};
Header.defaultProps = {
  icon: '',
  className: '',
  style: null,
  type: 'h1',
  children: null,
  textAlign: null
};

exports.default = (0, _WithStyles2.default)(Header);