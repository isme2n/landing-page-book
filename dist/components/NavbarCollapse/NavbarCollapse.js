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

var NavbarCollapse = function (_Component) {
  _inherits(NavbarCollapse, _Component);

  function NavbarCollapse() {
    _classCallCheck(this, NavbarCollapse);

    return _possibleConstructorReturn(this, (NavbarCollapse.__proto__ || Object.getPrototypeOf(NavbarCollapse)).apply(this, arguments));
  }

  _createClass(NavbarCollapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          children = _props.children,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        { className: className + ' ' + (!isOpen ? 'collapse' : '') + ' navbar-collapse' },
        children
      );
    }
  }]);

  return NavbarCollapse;
}(_react.Component);

NavbarCollapse.propTypes = {
  /**
   * Open or close component.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * Elements show into the NavbarCollapse
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Class of the component.
   */
  className: _propTypes2.default.string
};
NavbarCollapse.defaultProps = {
  isOpen: true,
  children: null,
  className: ''
};

exports.default = (0, _WithStyles2.default)(NavbarCollapse);