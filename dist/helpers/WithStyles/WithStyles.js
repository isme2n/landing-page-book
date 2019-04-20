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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withStyles = function withStyles(WrappedComponent) {
  var defaultProps = WrappedComponent ? WrappedComponent.defaultProps : {};

  var Styled = function (_Component) {
    _inherits(Styled, _Component);

    function Styled() {
      _classCallCheck(this, Styled);

      return _possibleConstructorReturn(this, (Styled.__proto__ || Object.getPrototypeOf(Styled)).apply(this, arguments));
    }

    _createClass(Styled, [{
      key: 'getLayoutBasedStyles',
      value: function getLayoutBasedStyles() {
        var _props = this.props,
            marginRight = _props.marginRight,
            marginLeft = _props.marginLeft,
            marginTop = _props.marginTop,
            marginBottom = _props.marginBottom,
            margin = _props.margin,
            paddingRight = _props.paddingRight,
            paddingLeft = _props.paddingLeft,
            paddingTop = _props.paddingTop,
            paddingBottom = _props.paddingBottom,
            padding = _props.padding;

        var layoutClasses = '';
        if (margin) layoutClasses = Styled.mapper(layoutClasses, 'm-' + margin);
        if (marginRight) layoutClasses = Styled.mapper(layoutClasses, 'mr-' + marginRight);
        if (marginLeft) layoutClasses = Styled.mapper(layoutClasses, 'ml-' + marginLeft);
        if (marginTop) layoutClasses = Styled.mapper(layoutClasses, 'mt-' + marginTop);
        if (marginBottom) layoutClasses = Styled.mapper(layoutClasses, 'mb-' + marginBottom);
        if (padding) layoutClasses = Styled.mapper(layoutClasses, 'p-' + padding);
        if (paddingRight) layoutClasses = Styled.mapper(layoutClasses, 'pr-' + paddingRight);
        if (paddingLeft) layoutClasses = Styled.mapper(layoutClasses, 'pl-' + paddingLeft);
        if (paddingTop) layoutClasses = Styled.mapper(layoutClasses, 'pt-' + paddingTop);
        if (paddingBottom) layoutClasses = Styled.mapper(layoutClasses, 'pb-' + paddingBottom);
        return layoutClasses;
      }
    }, {
      key: 'getColorBasedStyles',
      value: function getColorBasedStyles() {
        var _props2 = this.props,
            bgColor = _props2.bgColor,
            textColor = _props2.textColor;

        var colorBasedClasses = '';
        if (bgColor) colorBasedClasses = Styled.mapper(colorBasedClasses, 'bg-' + bgColor);
        if (textColor) colorBasedClasses = Styled.mapper(colorBasedClasses, 'text-' + textColor);
        return colorBasedClasses;
      }
    }, {
      key: 'getBorderBasedStyles',
      value: function getBorderBasedStyles() {
        var _props3 = this.props,
            border = _props3.border,
            borderTop = _props3.borderTop,
            borderRight = _props3.borderRight,
            borderBottom = _props3.borderBottom,
            borderLeft = _props3.borderLeft,
            borderNone = _props3.borderNone;

        var borderBasedClasses = '';
        if (border) borderBasedClasses = Styled.mapper(borderBasedClasses, 'border');
        if (borderTop) borderBasedClasses = Styled.mapper(borderBasedClasses, 'border-top');
        if (borderRight) borderBasedClasses = Styled.mapper(borderBasedClasses, 'border-right');
        if (borderBottom) borderBasedClasses = Styled.mapper(borderBasedClasses, 'border-bottom');
        if (borderLeft) borderBasedClasses = Styled.mapper(borderBasedClasses, 'border-left');
        if (borderNone) borderBasedClasses = Styled.mapper(borderBasedClasses, 'border-0');
        return borderBasedClasses;
      }
    }, {
      key: 'getTextBasedStyles',
      value: function getTextBasedStyles() {
        var _props4 = this.props,
            textAlign = _props4.textAlign,
            textTransform = _props4.textTransform,
            textTruncate = _props4.textTruncate,
            fontItalic = _props4.fontItalic,
            fontWeight = _props4.fontWeight,
            textMonoSpace = _props4.textMonoSpace,
            fontSize = _props4.fontSize,
            fontSizeSm = _props4.fontSizeSm,
            fontSizeMd = _props4.fontSizeMd,
            fontSizeLg = _props4.fontSizeLg,
            fontSizeXlg = _props4.fontSizeXlg;

        var textAlignBasedClasses = '';
        if (textAlign) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'text-' + textAlign);
        if (textTransform) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'text-' + textTransform);
        if (textTruncate) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'text-truncate');
        if (fontItalic) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'font-italic');
        if (fontWeight) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'font-weight-' + fontWeight);
        if (textMonoSpace) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'text-monospace');
        if (fontSize) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'fr-font-size-' + fontSize + '-x');
        if (fontSizeSm) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'fr-font-size-sm-' + fontSizeSm + '-x');
        if (fontSizeMd) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'fr-font-size-md-' + fontSizeMd + '-x');
        if (fontSizeLg) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'fr-font-size-lg-' + fontSizeLg + '-x');
        if (fontSizeXlg) textAlignBasedClasses = Styled.mapper(textAlignBasedClasses, 'fr-font-size-xlg-' + fontSizeXlg + '-x');
        return textAlignBasedClasses;
      }
    }, {
      key: 'getRoundedBasedStyles',
      value: function getRoundedBasedStyles() {
        var _props5 = this.props,
            rounded = _props5.rounded,
            roundedRight = _props5.roundedRight,
            roundedLeft = _props5.roundedLeft,
            roundedTop = _props5.roundedTop,
            roundedBottom = _props5.roundedBottom,
            roundedCircle = _props5.roundedCircle,
            roundedNone = _props5.roundedNone;

        var roundedBasedClasses = '';
        if (rounded) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded');
        if (roundedTop) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded-top');
        if (roundedRight) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded-right');
        if (roundedBottom) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded-bottom');
        if (roundedLeft) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded-left');
        if (roundedCircle) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded-circle');
        if (roundedNone) roundedBasedClasses = Styled.mapper(roundedBasedClasses, 'rounded-0');
        return roundedBasedClasses;
      }
    }, {
      key: 'getFloatBasedStyles',
      value: function getFloatBasedStyles() {
        var _props6 = this.props,
            floatLeft = _props6.floatLeft,
            floatRight = _props6.floatRight,
            floatNone = _props6.floatNone;

        var floatBasedClasses = '';
        if (floatLeft) floatBasedClasses = Styled.mapper(floatBasedClasses, 'float-left');
        if (floatRight) floatBasedClasses = Styled.mapper(floatBasedClasses, 'float-right');
        if (floatNone) floatBasedClasses = Styled.mapper(floatBasedClasses, 'float-none');
        return floatBasedClasses;
      }
    }, {
      key: 'getFilter',
      value: function getFilter() {
        var cssFilter = this.props.cssFilter;

        return { filter: cssFilter };
      }
    }, {
      key: 'translatePropsStyles',
      value: function translatePropsStyles() {
        var className = this.props.className;

        var finalClasses = '';
        if (className) finalClasses += ' ' + className;
        var layoutBasedClasses = this.getLayoutBasedStyles();
        var colorBasedClasses = this.getColorBasedStyles();
        var borderBasedClasses = this.getBorderBasedStyles();
        var textBasedClasses = this.getTextBasedStyles();
        var roundedBasedClasses = this.getRoundedBasedStyles();
        var floatBasedClasses = this.getFloatBasedStyles();

        if (layoutBasedClasses) {
          finalClasses = finalClasses + ' ' + layoutBasedClasses;
        }
        if (colorBasedClasses) {
          finalClasses = finalClasses + ' ' + colorBasedClasses;
        }
        if (borderBasedClasses) {
          finalClasses = finalClasses + ' ' + borderBasedClasses;
        }
        if (textBasedClasses) {
          finalClasses = finalClasses + ' ' + textBasedClasses;
        }
        if (roundedBasedClasses) {
          finalClasses = finalClasses + ' ' + roundedBasedClasses;
        }
        if (floatBasedClasses) {
          finalClasses = finalClasses + ' ' + floatBasedClasses;
        }
        return finalClasses;
      }
    }, {
      key: 'render',
      value: function render() {
        var className = this.translatePropsStyles();
        var style = this.props.style;

        var newStyles = Object.assign({}, style, this.getFilter());
        var props = _extends({}, this.props, { className: className });
        return _react2.default.createElement(WrappedComponent, _extends({}, props, { style: newStyles }));
      }
    }], [{
      key: 'mapper',
      value: function mapper(clase, prop) {
        return !clase.includes(prop) ? clase + ' ' + prop : clase;
      }
    }]);

    return Styled;
  }(_react.Component);

  Styled.propTypes = {
    margin: _propTypes2.default.string,
    marginRight: _propTypes2.default.string,
    marginLeft: _propTypes2.default.string,
    marginTop: _propTypes2.default.string,
    marginBottom: _propTypes2.default.string,
    padding: _propTypes2.default.string,
    paddingRight: _propTypes2.default.string,
    paddingLeft: _propTypes2.default.string,
    paddingTop: _propTypes2.default.string,
    paddingBottom: _propTypes2.default.string,
    rounded: _propTypes2.default.bool,
    roundedRight: _propTypes2.default.bool,
    roundedLeft: _propTypes2.default.bool,
    roundedTop: _propTypes2.default.bool,
    roundedBottom: _propTypes2.default.bool,
    roundedCircle: _propTypes2.default.bool,
    roundedNone: _propTypes2.default.bool,
    bgColor: _propTypes2.default.string,
    textColor: _propTypes2.default.string,
    border: _propTypes2.default.bool,
    borderTop: _propTypes2.default.bool,
    borderRight: _propTypes2.default.bool,
    borderBottom: _propTypes2.default.bool,
    borderLeft: _propTypes2.default.bool,
    borderNone: _propTypes2.default.bool,
    textAlign: _propTypes2.default.oneOf(['center', 'right', 'left', 'justify']),
    textTransform: _propTypes2.default.oneOf(['lowercase', 'uppercase', 'capitalize', '']),
    textTruncate: _propTypes2.default.bool,
    textMonoSpace: _propTypes2.default.bool,
    fontItalic: _propTypes2.default.bool,
    fontWeight: _propTypes2.default.oneOf(['bold', 'normal', 'light']),
    floatLeft: _propTypes2.default.bool,
    floatRight: _propTypes2.default.bool,
    floatNone: _propTypes2.default.bool,
    cssFilter: _propTypes2.default.string,
    fontSize: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeSm: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeMd: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeLg: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeXlg: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    style: _propTypes2.default.objectOf(_propTypes2.default.any)
  };

  Styled.defaultProps = {
    margin: defaultProps.margin || null,
    marginRight: defaultProps.marginRight || null,
    marginLeft: defaultProps.marginLeft || null,
    marginTop: defaultProps.marginTop || null,
    marginBottom: defaultProps.marginBottom || null,
    padding: defaultProps.padding || null,
    paddingRight: defaultProps.paddingRight || null,
    paddingLeft: defaultProps.paddingLeft || null,
    paddingTop: defaultProps.paddingTop || null,
    paddingBottom: defaultProps.paddingBottom || null,
    rounded: defaultProps.rounded || null,
    roundedRight: defaultProps.roundedRight || null,
    roundedLeft: defaultProps.roundedLeft || null,
    roundedTop: defaultProps.roundedTop || null,
    roundedBottom: defaultProps.roundedBottom || null,
    roundedCircle: defaultProps.roundedCircle || null,
    roundedNone: defaultProps.roundedNone || null,
    bgColor: defaultProps.bgColor || null,
    textColor: defaultProps.textColor || null,
    border: defaultProps.border || null,
    borderTop: defaultProps.borderTop || null,
    borderRight: defaultProps.borderRight || null,
    borderBottom: defaultProps.borderBottom || null,
    borderLeft: defaultProps.borderLeft || null,
    borderNone: defaultProps.borderNone || null,
    textAlign: defaultProps.textAlign || null,
    textTransform: defaultProps.textTransform || null,
    textTruncate: defaultProps.textTruncate || null,
    textMonoSpace: defaultProps.textMonoSpace || null,
    fontItalic: defaultProps.fontItalic || null,
    fontWeight: defaultProps.fontWeight || null,
    floatLeft: defaultProps.floatLeft || null,
    floatRight: defaultProps.floatRight || null,
    floatNone: defaultProps.floatNone || null,
    cssFilter: defaultProps.cssFilter || null,
    fontSize: defaultProps.fontSize || null,
    fontSizeSm: defaultProps.fontSizeSm || null,
    fontSizeMd: defaultProps.fontSizeMd || null,
    fontSizeLg: defaultProps.fontSizeLg || null,
    fontSizeXlg: defaultProps.fontSizeXlg || null,
    style: defaultProps.style || null
  };
  return Styled;
};

exports.default = withStyles;