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

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subTitle = _props.subTitle,
          children = _props.children,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'section',
        { className: 'Section ' + className, style: style },
        (title || subTitle) && _react2.default.createElement(
          'div',
          { className: 'mb-5 text-center' },
          title && _react2.default.createElement(
            _Header2.default,
            _extends({
              type: 'h2',
              className: 'Section__Title',
              marginBottom: '2'
            }, (0, _ExtractProps2.default)('title', this.props)),
            title
          ),
          subTitle && _react2.default.createElement(
            _Header2.default,
            _extends({
              type: 'h3',
              className: 'Section__Subtitle',
              marginBottom: '2'
            }, (0, _ExtractProps2.default)('subTitle', this.props)),
            subTitle
          )
        ),
        children
      );
    }
  }]);

  return Section;
}(_react.Component);

Section.propTypes = {
  /**
   * Section title.
   */
  title: _propTypes2.default.string,
  /**
   * Section subtitle.
   */
  subTitle: _propTypes2.default.string,
  /**
   * Section css class.
   */
  className: _propTypes2.default.string,
  /**
   * Customs styles to tramsform your Hero
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Elements to show inside of Section.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Font size of title.
   */
  titleFontSize: _propTypes2.default.string,
  /**
   * Font size of sub title.
   */
  subTitleFontSize: _propTypes2.default.string
};
Section.defaultProps = {
  title: '',
  subTitle: '',
  className: '',
  style: null,
  // eslint-disable-next-line react/default-props-match-prop-types
  padding: '5',
  children: null,
  titleFontSize: '3',
  subTitleFontSize: '1'
};

exports.default = (0, _WithStyles2.default)(Section);