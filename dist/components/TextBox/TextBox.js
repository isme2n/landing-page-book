'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextBox = function TextBox(_ref) {
  var className = _ref.className,
      title = _ref.title,
      text = _ref.text,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    _react2.default.createElement(
      'h3',
      { className: 'TextBox__title' },
      title
    ),
    _react2.default.createElement(
      'p',
      { className: 'TextBox__content' },
      text
    )
  );
};

TextBox.propTypes = {
  /**
   * Text to show as title.
   */
  title: _propTypes2.default.string,
  /**
   * Text to show as content.
   */
  text: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Class to applay to component
   */
  className: _propTypes2.default.string
};

TextBox.defaultProps = {
  title: '',
  text: '',
  style: null,
  className: null
};

var TextBoxWithStyles = (0, _WithStyles2.default)(TextBox);
exports.default = TextBoxWithStyles;