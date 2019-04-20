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

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_React$Component) {
  _inherits(Features, _React$Component);

  function Features() {
    _classCallCheck(this, Features);

    return _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).apply(this, arguments));
  }

  _createClass(Features, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showImage = _props.showImage,
          showTitle = _props.showTitle,
          showSubtitle = _props.showSubtitle,
          showSummary = _props.showSummary,
          features = _props.features,
          imageCircle = _props.imageCircle,
          imageBorder = _props.imageBorder,
          contentAlign = _props.contentAlign,
          showFooter = _props.showFooter,
          shadow = _props.shadow,
          imageShadow = _props.imageShadow,
          buttonOutline = _props.buttonOutline,
          buttonColor = _props.buttonColor,
          columnClassName = _props.columnClassName;


      var featuresWithId = features.map(function (feature) {
        var featureWithId = _extends({}, feature);
        if (!featureWithId.id) {
          featureWithId.id = Math.floor(Math.random() * 10000 + 1);
        }
        return featureWithId;
      });
      return _react2.default.createElement(
        'div',
        { className: 'Features d-flex flex-wrap Features--' + contentAlign },
        featuresWithId.map(function (feature) {
          return _react2.default.createElement(
            'div',
            { className: columnClassName + ' text-' + contentAlign + ' mb-4', key: feature.id },
            _react2.default.createElement(
              _Card2.default,
              _extends({
                imageCircle: imageCircle,
                subTitle: showSubtitle ? feature.subtitle : '',
                title: showTitle ? feature.title : '',
                summary: showSummary ? feature.summary : '',
                contentAlign: contentAlign,
                imageBorder: imageBorder,
                image: showImage ? feature.image : '',
                shadow: shadow,
                imageShadow: imageShadow
              }, (0, _ExtractProps2.default)('feature', _this2.props)),
              showFooter && feature.link && _react2.default.createElement(
                _Button2.default,
                _extends({
                  outline: buttonOutline,
                  color: buttonColor,
                  onClick: function onClick() {
                    return Features.routeChange(feature.link);
                  }
                }, (0, _ExtractProps2.default)('button', _this2.props)),
                'See more'
              )
            )
          );
        })
      );
    }
  }], [{
    key: 'routeChange',
    value: function routeChange(path) {
      if (window !== 'undefined' && typeof window.location !== 'undefined') window.location.assign(path);
    }
  }]);

  return Features;
}(_react2.default.Component);

Features.propTypes = {
  /**
   * Establishes shadow for each card
   */
  shadow: _propTypes2.default.bool,
  /**
   * Show or hide image
   */
  showImage: _propTypes2.default.bool,
  /**
   * Show or hide title
   */
  showTitle: _propTypes2.default.bool,
  /**
   * Show or hide subtitle
   */
  showSubtitle: _propTypes2.default.bool,
  /**
   * Show or hide summary
   */
  showSummary: _propTypes2.default.bool,
  /**
   * Establishes if image is circled
   */
  imageCircle: _propTypes2.default.bool,
  /**
   * Establishes if image is with border
   */
  imageBorder: _propTypes2.default.bool,
  /**
   * Establishes image with shadow
   */
  imageShadow: _propTypes2.default.bool,
  /**
   * Show or hide Card footer
   */
  showFooter: _propTypes2.default.bool,
  /**
   * Establishes if <code>'See more'</code> button is outline
   */
  buttonOutline: _propTypes2.default.bool,
  /**
   * Establishes color button
   */
  buttonColor: _propTypes2.default.string,
  /**
   * Establishes if feature card has border
   */
  featureBorder: _propTypes2.default.bool,
  /**
   * Align of a component content. Can be <code>'left'</code>, <code>'center'</code> and <code>'right'</code>
   */
  contentAlign: _propTypes2.default.string,
  /**
   * CSS class name for column
   */
  columnClassName: _propTypes2.default.string,
  /**
   * Array of features to show
   */
  features: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    image: _propTypes2.default.string,
    title: _propTypes2.default.string,
    subtitle: _propTypes2.default.string,
    summary: _propTypes2.default.string,
    link: _propTypes2.default.string,
    linktext: _propTypes2.default.string
  }))
};

Features.defaultProps = {
  shadow: false,
  showImage: true,
  showTitle: true,
  showSubtitle: true,
  showSummary: true,
  imageCircle: false,
  imageBorder: false,
  imageShadow: false,
  showFooter: true,
  buttonOutline: true,
  buttonColor: 'primary',
  featureBorder: false,
  contentAlign: 'center',
  columnClassName: 'col-12 col-sm- col-md',
  features: []
};

exports.default = Features;