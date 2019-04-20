'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGifPlayer = require('react-gif-player');

var _reactGifPlayer2 = _interopRequireDefault(_reactGifPlayer);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gif = function (_Component) {
  _inherits(Gif, _Component);

  function Gif() {
    _classCallCheck(this, Gif);

    return _possibleConstructorReturn(this, (Gif.__proto__ || Object.getPrototypeOf(Gif)).apply(this, arguments));
  }

  _createClass(Gif, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoplay = _props.autoplay,
          image = _props.image,
          preview = _props.preview,
          onPlayPause = _props.onPlayPause,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: 'Gif text-center ' + className, style: style },
        _react2.default.createElement(_reactGifPlayer2.default, { gif: image, autoplay: autoplay, still: preview, onTogglePlay: onPlayPause })
      );
    }
  }]);

  return Gif;
}(_react.Component);

Gif.propTypes = {
  /**
   * Define if gif is auto play
   */
  autoplay: _propTypes2.default.bool,
  /**
   * Image gif url
   */
  image: _propTypes2.default.string,
  /**
   * Initial image url
   */
  preview: _propTypes2.default.string,
  /**
   * Called when gif is payed or paused
   */
  onPlayPause: _propTypes2.default.func,
  /**
   * Class of the component
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Gif.defaultProps = {
  autoplay: false,
  image: '',
  preview: '',
  className: '',
  style: null,
  onPlayPause: function onPlayPause() {}
};

exports.default = (0, _WithStyles2.default)(Gif);