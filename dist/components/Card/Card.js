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

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardSubtitle = require('./CardSubtitle');

var _CardSubtitle2 = _interopRequireDefault(_CardSubtitle);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          title = _props.title,
          subTitle = _props.subTitle,
          summary = _props.summary,
          children = _props.children,
          imageShadow = _props.imageShadow,
          shadow = _props.shadow,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        { className: 'card h-100 Card ' + className + ' ' + (shadow ? 'Card--shadow' : '') },
        image && _react2.default.createElement(_Image2.default, _extends({
          src: image,
          shadow: imageShadow,
          alt: 'Generic placeholder'
        }, (0, _ExtractProps2.default)('image', this.props))),
        (title || subTitle || summary) && _react2.default.createElement(
          'div',
          { className: 'card-body' },
          title && _react2.default.createElement(_CardTitle2.default, _extends({ marginBottom: '2', content: title }, (0, _ExtractProps2.default)('title', this.props))),
          subTitle && _react2.default.createElement(_CardSubtitle2.default, _extends({
            marginBottom: '3',
            content: subTitle
          }, (0, _ExtractProps2.default)('subTitle', this.props))),
          summary && _react2.default.createElement(_Paragraph2.default, _extends({
            className: 'Card__Summary',
            text: summary
          }, (0, _ExtractProps2.default)('summary', this.props)))
        ),
        children && _react2.default.createElement(
          _CardFooter2.default,
          { bgColor: 'transparent', borderNone: true },
          _react2.default.createElement(
            _react2.default.Fragment,
            null,
            children
          )
        )
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.propTypes = {
  /**
   * Define if card have border
   */
  border: _propTypes2.default.bool,
  /**
   * Define if image   with shadow
   */
  imageShadow: _propTypes2.default.bool,
  /**
   * Define if card show with shadow
   */
  shadow: _propTypes2.default.bool,
  /**
   * Image url
   */
  image: _propTypes2.default.string,
  /**
   * Card title
   */
  title: _propTypes2.default.string,
  /**
   * Card subtitle
   */
  subTitle: _propTypes2.default.string,
  /**
   * Card summary
   */
  summary: _propTypes2.default.string,
  /**
   * Array of elements to show inside a card
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   *  Component class name
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Card.defaultProps = {
  border: true,
  imageShadow: false,
  shadow: false,
  image: '',
  title: '',
  subTitle: '',
  summary: '',
  children: null,
  className: null,
  style: null
};

exports.default = (0, _WithStyles2.default)(Card);