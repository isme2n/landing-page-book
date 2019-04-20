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

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

    _this.state = { loaded: false };
    _this.image = _react2.default.createRef();
    _this.onUpdate = _this.onUpdate.bind(_this);
    _this.handleImageLoaded = _this.handleImageLoaded.bind(_this);
    return _this;
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleImageLoaded();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onUpdate(prevProps);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(prevProps) {
      var src = this.props.src;

      if (prevProps.src !== src) this.setState({ loaded: false });
    }
  }, {
    key: 'handleImageLoaded',
    value: function handleImageLoaded() {
      var img = this.image.current;
      if (img && img.complete) {
        this.setState({ loaded: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          alt = _props.alt,
          src = _props.src,
          rounded = _props.rounded,
          border = _props.border,
          width = _props.width,
          tooltip = _props.tooltip,
          className = _props.className,
          shadow = _props.shadow,
          style = _props.style;
      var loaded = this.state.loaded;

      var tempClass = className;
      tempClass += ' img-fluid';
      if (rounded) tempClass += ' rounded-circle';
      if (border) tempClass += ' img-thumbnail';
      var styles = Object.assign({}, { display: !loaded ? 'none' : '' }, style);
      if (shadow) tempClass += ' img-shadow';
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('img', {
          title: tooltip,
          alt: alt,
          src: src,
          className: tempClass,
          width: width,
          style: styles,
          onLoad: this.handleImageLoaded,
          ref: this.image
        }),
        !loaded && _react2.default.createElement(
          'svg',
          { alt: alt, className: tempClass, width: width, viewBox: '0 0 100 100' },
          _react2.default.createElement(
            'g',
            null,
            tooltip && _react2.default.createElement(
              'title',
              null,
              tooltip
            ),
            _react2.default.createElement('rect', { width: '100', height: '100', fill: '#CCC' })
          )
        )
      );
    }
  }]);

  return Image;
}(_react.Component);

Image.propTypes = {
  /**
   * Show or hide image borders.
   */
  border: _propTypes2.default.bool,
  /**
   * Show circled image.
   */
  rounded: _propTypes2.default.bool,
  /**
   * Define if image is show with shadow.
   */
  shadow: _propTypes2.default.bool,
  /**
   * CSS class to apply to image.
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Image width.
   */
  width: _propTypes2.default.string,
  /**
   * Image tooltip.
   */
  tooltip: _propTypes2.default.string,
  /**
   *  Image alt.
   */
  alt: _propTypes2.default.string.isRequired,
  /**
   *  Image source.
   */
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};
Image.defaultProps = {
  border: false,
  rounded: false,
  shadow: false,
  className: 'img-fluid',
  style: null,
  width: undefined,
  tooltip: ''
};

exports.default = (0, _WithStyles2.default)(Image);