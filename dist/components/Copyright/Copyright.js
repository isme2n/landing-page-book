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

var Copyright = function (_Component) {
  _inherits(Copyright, _Component);

  function Copyright() {
    _classCallCheck(this, Copyright);

    return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).apply(this, arguments));
  }

  _createClass(Copyright, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showCopyRightText = _props.showCopyRightText,
          showCopyRightSymbol = _props.showCopyRightSymbol,
          showYear = _props.showYear,
          showAllRightText = _props.showAllRightText,
          allRightText = _props.allRightText,
          copyRightText = _props.copyRightText,
          text = _props.text,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: 'Copyright ' + className, style: style },
        showCopyRightText && _react2.default.createElement(
          'span',
          { className: 'mr-1' },
          copyRightText
        ),
        showCopyRightSymbol && _react2.default.createElement(
          'span',
          { className: 'mr-1' },
          '\xA9'
        ),
        showYear && _react2.default.createElement(
          'span',
          { className: 'mr-1' },
          new Date().getFullYear()
        ),
        text && _react2.default.createElement(
          'span',
          { className: 'mr-1' },
          text,
          '.'
        ),
        showAllRightText && _react2.default.createElement(
          'span',
          { className: 'mr-1' },
          allRightText
        )
      );
    }
  }]);

  return Copyright;
}(_react.Component);

Copyright.propTypes = {
  /**
   *  Show or hide `©` symbol
   */
  showCopyRightSymbol: _propTypes2.default.bool,
  /**
   * Show or hide copy right text
   */
  showCopyRightText: _propTypes2.default.bool,
  /**
   *  Show or hide year in copyright
   */
  showYear: _propTypes2.default.bool,
  /**
   *  Show or hide all right reserved text
   */
  showAllRightText: _propTypes2.default.bool,
  /**
   * Copy right text
   */
  copyRightText: _propTypes2.default.string,
  /**
   * All rights reserved text
   */
  allRightText: _propTypes2.default.string,
  /**
   *  Text in copyright, ex: <code>'Front10, Inc'</code>
   */
  text: _propTypes2.default.string,
  /**
   * Class to apply to icon
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Copyright.defaultProps = {
  showCopyRightSymbol: true,
  showCopyRightText: true,
  showYear: true,
  showAllRightText: true,
  copyRightText: 'Copyright',
  allRightText: 'All rights reserved',
  text: '',
  className: '',
  style: null
};

exports.default = (0, _WithStyles2.default)(Copyright);