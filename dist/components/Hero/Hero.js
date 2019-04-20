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

var _reactLazyHero = require('react-lazy-hero');

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _Container = require('../Container/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _particlesSugarMapping = require('./particlesSugarMapping');

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import StarMeUpTemplate from './templates/StarMeUpTemplate';


var Hero = function (_Component) {
  _inherits(Hero, _Component);

  _createClass(Hero, null, [{
    key: 'onButtonClick',
    value: function onButtonClick(button) {
      if (button.onClick && typeof button.onClick === 'function') button.onClick({ button: button });
    }
  }, {
    key: 'getCustomCssFilterForImg',
    value: function getCustomCssFilterForImg(props, state) {
      var imgCssFilter = props.imgCssFilter;
      var randomClass = state.randomClass;

      return '\n    .Hero.' + randomClass + ' [src] {\n      filter: ' + imgCssFilter + ';\n    }';
    }
  }, {
    key: 'getParticlesParams',
    value: function getParticlesParams(particles, particlesSugar, particlesParams) {
      if (particlesParams) {
        return particlesParams;
      }
      if (!particlesParams && particlesSugar && particlesSugar === 'crazyStars') {
        return _particlesSugarMapping.crazyStars;
      }
      return {};
    }
  }]);

  function Hero(props) {
    _classCallCheck(this, Hero);

    var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

    _this.state = {
      randomClass: 'Hero_' + new Date().getTime() + '_' + Math.random().toString().replace('.', '')
    };
    return _this;
  }
  // static getTemplate(template) {
  //   if(template && template === 'starMeUp'){
  //     return StarMeUpTemplate;
  //   }
  //   return {};
  // }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          parallaxOffset = _props.parallaxOffset,
          isFixed = _props.isFixed,
          isCentered = _props.isCentered,
          overlayColor = _props.overlayColor,
          opacity = _props.opacity,
          header = _props.header,
          subHeader = _props.subHeader,
          minHeight = _props.minHeight,
          subHeaderPosition = _props.subHeaderPosition,
          particles = _props.particles,
          particlesParams = _props.particlesParams,
          particlesSugar = _props.particlesSugar,
          backgroundColor = _props.backgroundColor,
          callToAction = _props.callToAction,
          children = _props.children,
          style = _props.style,
          imgCssFilter = _props.imgCssFilter,
          callToActionOnClick = _props.callToActionOnClick,
          callToActionColor = _props.callToActionColor,
          callToActionOutline = _props.callToActionOutline,
          secondaryCallToAction = _props.secondaryCallToAction,
          secondaryCallToActionOnClick = _props.secondaryCallToActionOnClick,
          secondaryCallToActionColor = _props.secondaryCallToActionColor,
          secondaryCallToActionOutline = _props.secondaryCallToActionOutline;
      var randomClass = this.state.randomClass;


      var customCssFilter = Hero.getCustomCssFilterForImg(this.props, this.state);
      var particlesSugarParams = Hero.getParticlesParams(particles, particlesSugar, particlesParams);
      var newStyles = Object.assign({}, backgroundColor, style);
      return _react2.default.createElement(
        'div',
        { className: 'Hero ' + randomClass, style: { newStyles: newStyles } },
        _react2.default.createElement(
          _reactLazyHero2.default,
          {
            isFixed: isFixed,
            isCentered: isCentered,
            imageSrc: image,
            opacity: opacity,
            color: overlayColor,
            parallaxOffset: parallaxOffset,
            minHeight: minHeight,
            style: style
          },
          particles && _react2.default.createElement(
            'div',
            { className: 'Hero__Particles' },
            _react2.default.createElement(_reactParticlesJs2.default, { params: particlesSugarParams })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Hero__Container d-flex align-content-center' },
            !children && _react2.default.createElement(
              _Container2.default,
              null,
              subHeader && subHeaderPosition === 'top' && _react2.default.createElement(
                _Header2.default,
                _extends({
                  textAlign: isCentered && 'center',
                  className: 'Hero__SubHeader'
                }, (0, _ExtractProps2.default)('subHeader', this.props)),
                subHeader
              ),
              header && _react2.default.createElement(
                _Header2.default,
                _extends({ className: 'Hero__Header' }, (0, _ExtractProps2.default)('header', this.props)),
                header
              ),
              subHeader && subHeaderPosition !== 'top' && _react2.default.createElement(
                _Header2.default,
                _extends({
                  textAlign: isCentered && 'center',
                  type: 'h2',
                  className: 'Hero__SubHeader'
                }, (0, _ExtractProps2.default)('subHeader', this.props)),
                subHeader
              ),
              callToAction && _react2.default.createElement(
                _Button2.default,
                _extends({
                  className: 'btn-xl Hero__Button',
                  onClick: callToActionOnClick,
                  color: callToActionColor,
                  outline: callToActionOutline
                }, (0, _ExtractProps2.default)('callToAction', this.props)),
                callToAction
              ),
              secondaryCallToAction && _react2.default.createElement(
                _Button2.default,
                _extends({
                  className: 'btn-xl Hero__Button',
                  onClick: secondaryCallToActionOnClick,
                  color: secondaryCallToActionColor,
                  outline: secondaryCallToActionOutline
                }, (0, _ExtractProps2.default)('secondaryCallToAction', this.props)),
                secondaryCallToAction
              )
            ),
            children
          ),
          imgCssFilter && _react2.default.createElement(
            'style',
            null,
            customCssFilter
          )
        )
      );
    }
  }]);

  return Hero;
}(_react.Component);

Hero.propTypes = {
  /**
   * Define if background image is fixed
   */
  isFixed: _propTypes2.default.bool,
  /**
   *  Define if content is centered
   */
  isCentered: _propTypes2.default.bool,
  /**
   * Define if component show particles animations
   */
  particles: _propTypes2.default.bool,
  /**
   * Opacity level
   */
  opacity: _propTypes2.default.number,
  /**
   * Offset of background image
   */
  parallaxOffset: _propTypes2.default.number,
  /**
   * Url of background image
   */
  image: _propTypes2.default.string,
  /**
   * Overlay color of the component
   */
  overlayColor: _propTypes2.default.string,
  /**
   *  Header of the hero
   */
  header: _propTypes2.default.string,
  /**
   * Sub header of the hero
   */
  subHeader: _propTypes2.default.string,
  /**
   * Position of hero sub header. Can be <code>'top'</code> or <code>'bottom'</code>
   */
  subHeaderPosition: _propTypes2.default.string,
  /**
   * Min height of hero
   */
  minHeight: _propTypes2.default.string,
  /**
   * Background color of the hero
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Margin bottom of hero header
   */
  headerMarginBottom: _propTypes2.default.string,
  /**
   * Color of hero header
   */
  headerTextColor: _propTypes2.default.string,
  /**
   * Margin bottom of hero subheader
   */
  subHeaderMarginBottom: _propTypes2.default.string,
  /**
   * Color of hero subheader
   */
  subHeaderTextColor: _propTypes2.default.string,
  /**
   * Hero call to action
   */
  callToAction: _propTypes2.default.string,
  /**
   * Config params for particles animation.
   */
  particlesParams: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   *  Elements to show inside of Hero.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Customs styles to tramsform your Hero
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * The filter property defines visual effects (like blur and saturation) to an element (often <img>).
   */
  imgCssFilter: _propTypes2.default.string,
  /**
   * Preconfigured params for particles, you can find this on particlesSugarMapping.js file.
   */
  particlesSugar: _propTypes2.default.string,
  /**
   * Event is fire when call to action button is pressed
   */
  callToActionOnClick: _propTypes2.default.func,
  /**
   * Color of call to action button
   */
  callToActionColor: _propTypes2.default.string,
  /**
   * Outline of call to action button
   */
  callToActionOutline: _propTypes2.default.bool,
  /**
   * Event is fire when secondary call to action button is pressed
   */
  secondaryCallToActionOnClick: _propTypes2.default.func,
  /**
   * Color of secondary call to action button
   */
  secondaryCallToActionColor: _propTypes2.default.string,
  /**
   * Outline of secondary call to action button
   */
  secondaryCallToActionOutline: _propTypes2.default.bool,
  /**
   * Define header font size
   */
  headerFontSize: _propTypes2.default.string,
  /**
   * Define sub header font size
   */
  subHeaderFontSize: _propTypes2.default.string,
  /**
   * Define header font size on <code>sm</code> screen
   */
  headerFontSizeSm: _propTypes2.default.string,
  /**
   * Define sub header font size on <code>sm</code> screen
   */
  subHeaderFontSizeSm: _propTypes2.default.string,
  /**
   * Define sub header font size on <code>md</code> screen
   */
  headerFontSizeMd: _propTypes2.default.string,
  /**
   * Define sub header font size on <code>md</code> screen
   */
  subHeaderFontSizeMd: _propTypes2.default.string
};
Hero.defaultProps = {
  isFixed: true,
  isCentered: true,
  particles: true,
  opacity: 0,
  parallaxOffset: 0,
  image: '',
  overlayColor: '#fff',
  header: '',
  subHeader: '',
  subHeaderPosition: 'bottom',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  headerMarginBottom: '5',
  subHeaderMarginBottom: '5',
  headerTextColor: 'light',
  subHeaderTextColor: 'light',
  callToAction: null,
  particlesParams: null,
  children: null,
  style: null,
  imgCssFilter: null,
  particlesSugar: null,
  callToActionColor: '',
  callToActionOutline: true,
  callToActionOnClick: function callToActionOnClick() {},
  secondaryCallToActionColor: '',
  secondaryCallToActionOutline: true,
  headerFontSize: '3',
  subHeaderFontSize: '1',
  headerFontSizeSm: '5',
  subHeaderFontSizeSm: '2',
  headerFontSizeMd: '7',
  subHeaderFontSizeMd: '3',
  secondaryCallToActionOnClick: function secondaryCallToActionOnClick() {}
};

exports.default = (0, _WithStyles2.default)(Hero);