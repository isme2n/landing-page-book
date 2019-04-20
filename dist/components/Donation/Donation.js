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

var _Image = require('../Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Donation = function (_Component) {
  _inherits(Donation, _Component);

  function Donation() {
    _classCallCheck(this, Donation);

    return _possibleConstructorReturn(this, (Donation.__proto__ || Object.getPrototypeOf(Donation)).apply(this, arguments));
  }

  _createClass(Donation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          image = _props.image,
          imageAlt = _props.imageAlt,
          imageWidth = _props.imageWidth,
          className = _props.className;

      return _react2.default.createElement(
        _Link2.default,
        { className: className, href: url, target: '_blank' },
        _react2.default.createElement(_Image2.default, _extends({
          alt: imageAlt,
          src: image,
          width: imageWidth
        }, (0, _ExtractProps2.default)('image', this.props)))
      );
    }
  }]);

  return Donation;
}(_react.Component);

Donation.propTypes = {
  /**
   * Image width
   */
  imageWidth: _propTypes2.default.string,
  /**
   * Url of the project to donate
   */
  url: _propTypes2.default.string.isRequired,
  /**
   * Link image
   */
  image: _propTypes2.default.string,
  /**
   * Image alt to accessibility
   */
  imageAlt: _propTypes2.default.string,
  /**
   * Class to apply to icon
   */
  className: _propTypes2.default.string
};
Donation.defaultProps = {
  image: 'https://opencollective.com/webpack/donate/button@2x.png?color=blue',
  imageAlt: 'Open collective logo',
  imageWidth: '300',
  className: ''
};

exports.default = (0, _WithStyles2.default)(Donation);