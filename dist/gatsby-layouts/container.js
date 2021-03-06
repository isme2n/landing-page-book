'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _Container = require('../components/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerLayout = function (_React$Component) {
  _inherits(ContainerLayout, _React$Component);

  function ContainerLayout() {
    _classCallCheck(this, ContainerLayout);

    return _possibleConstructorReturn(this, (ContainerLayout.__proto__ || Object.getPrototypeOf(ContainerLayout)).apply(this, arguments));
  }

  _createClass(ContainerLayout, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _main2.default,
          null,
          _react2.default.createElement(
            _Container2.default,
            null,
            children
          )
        )
      );
    }
  }]);

  return ContainerLayout;
}(_react2.default.Component);

ContainerLayout.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
ContainerLayout.defaultProps = {
  children: null
};

exports.default = ContainerLayout;