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

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageList = function (_Component) {
  _inherits(ImageList, _Component);

  function ImageList(props) {
    _classCallCheck(this, ImageList);

    var _this = _possibleConstructorReturn(this, (ImageList.__proto__ || Object.getPrototypeOf(ImageList)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ImageList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          images = _props.images,
          imageWidth = _props.imageWidth,
          className = _props.className,
          style = _props.style;
      /* eslint-disable react/no-array-index-key */

      return _react2.default.createElement(
        'div',
        { className: 'ImageList' },
        images.map(function (imag, key) {
          return _react2.default.createElement(
            'div',
            { className: 'ImageList__Container ' + className + ' ', style: style, key: key },
            _react2.default.createElement(
              'a',
              { href: imag.url },
              _react2.default.createElement(_Image2.default, _extends({
                tooltip: imag.tooltip,
                alt: 'This is an image example',
                src: imag.image,
                width: imageWidth
              }, (0, _ExtractProps2.default)('image', _this2.props)))
            )
          );
        })
      );
      /* eslint-enable react/no-array-index-key */
    }
  }]);

  return ImageList;
}(_react.Component);

ImageList.propTypes = {
  /**
   * CSS class name for custom styles
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Image width
   */
  imageWidth: _propTypes2.default.string,
  /**
   *  Padding to apply to Footer.
   */
  padding: _propTypes2.default.string,
  /**
   * Images to show
   */
  images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    image: _propTypes2.default.string
  }))
};
ImageList.defaultProps = {
  className: '',
  style: {},
  padding: '2',
  imageWidth: '100',
  images: []
};

exports.default = (0, _WithStyles2.default)(ImageList);