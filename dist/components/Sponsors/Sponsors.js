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

var _ImageList = require('../ImageList');

var _ImageList2 = _interopRequireDefault(_ImageList);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sponsors = function (_React$Component) {
  _inherits(Sponsors, _React$Component);

  function Sponsors(props) {
    _classCallCheck(this, Sponsors);

    var _this = _possibleConstructorReturn(this, (Sponsors.__proto__ || Object.getPrototypeOf(Sponsors)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Sponsors, [{
    key: 'render',
    value: function render() {
      var sponsors = this.props.sponsors;

      return _react2.default.createElement(_ImageList2.default, _extends({ images: sponsors }, (0, _ExtractProps2.default)('image', this.props)));
    }
  }]);

  return Sponsors;
}(_react2.default.Component);

Sponsors.propTypes = {
  /**
   * Companies to show.
   */
  sponsors: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    image: _propTypes2.default.string
  }))
};

Sponsors.defaultProps = {
  sponsors: []
};

exports.default = (0, _WithStyles2.default)(Sponsors);