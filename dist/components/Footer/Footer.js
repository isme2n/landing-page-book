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

var _Social = require('../Social');

var _Social2 = _interopRequireDefault(_Social);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Copyright = require('../Copyright');

var _Copyright2 = _interopRequireDefault(_Copyright);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'renderSocials',
    value: function renderSocials() {
      var _this2 = this;

      var _props = this.props,
          socials = _props.socials,
          socialRounded = _props.socialRounded,
          socialUrl = _props.socialUrl;

      return socials.map(function (social) {
        return _react2.default.createElement(_Social2.default, _extends({
          key: social,
          type: social,
          rounded: socialRounded,
          url: socialUrl
        }, (0, _ExtractProps2.default)('social', _this2.props)));
      });
    }
  }, {
    key: 'renderSections',
    value: function renderSections() {
      var _this3 = this;

      var sections = this.props.sections;

      return sections.map(function (section) {
        return _react2.default.createElement(
          'div',
          { className: 'col-sm-12 col-md text-center', key: section.name },
          _react2.default.createElement(
            'div',
            { className: 'Footer__Sections__Header' },
            _react2.default.createElement(
              _Header2.default,
              _extends({ type: 'h3' }, (0, _ExtractProps2.default)('header', _this3.props)),
              section.name
            )
          ),
          section.sections.length > 0 && _react2.default.createElement(
            'ul',
            { className: 'list-unstyled text-small' },
            _this3.renderLinks(section.sections)
          )
        );
      });
    }
  }, {
    key: 'renderLinks',
    value: function renderLinks(links) {
      var _this4 = this;

      return links.map(function (link) {
        return _react2.default.createElement(
          'li',
          { key: link.name },
          _react2.default.createElement(
            _Link2.default,
            _extends({ href: link.url }, (0, _ExtractProps2.default)('link', _this4.props)),
            link.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          sections = _props2.sections,
          socials = _props2.socials,
          copyright = _props2.copyright,
          children = _props2.children,
          className = _props2.className;

      return _react2.default.createElement(
        'footer',
        { className: 'Footer ' + className },
        sections.length > 0 && _react2.default.createElement(
          'div',
          { className: 'row Footer__Sections' },
          this.renderSections()
        ),
        socials.length > 0 && _react2.default.createElement(
          'div',
          { className: 'mt-3' },
          this.renderSocials()
        ),
        copyright && _react2.default.createElement(
          'div',
          { className: 'mt-3 Footer__Copyright' },
          _react2.default.createElement(_Copyright2.default, _extends({ text: copyright }, (0, _ExtractProps2.default)('copyright', this.props)))
        ),
        children && _react2.default.createElement(
          _react2.default.Fragment,
          null,
          children
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  /**
   * Define if socials buttons are rounded.
   */
  socialRounded: _propTypes2.default.bool,
  /**
   * Url to share in socials networks.
   */
  socialUrl: _propTypes2.default.string,
  /**
   * Text of copyright.
   */
  copyright: _propTypes2.default.string,
  /**
   * Array of string with values of socials networks to display.
   */
  socials: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Sections to show.
   */
  sections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    sections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      url: _propTypes2.default.string
    }))
  })),
  /**
   * Class to apply to icon.
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   *  Padding to apply to Footer.
   */
  padding: _propTypes2.default.string,
  /**
   *  Text color of headers.
   */
  headerTextColor: _propTypes2.default.string,
  /**
   *  Text color of links.
   */
  linkTextColor: _propTypes2.default.string,
  /**
   *  Text color of copy right.
   */
  copyrightTextColor: _propTypes2.default.string,
  /**
   *  Background color of the footer.
   */
  bgColor: _propTypes2.default.string,
  /**
   *  Elements to show inside of Footer.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
Footer.defaultProps = {
  socialRounded: true,
  socialUrl: '',
  copyright: '',
  socials: [],
  sections: [],
  className: '',
  style: null,
  padding: '5',
  children: null,
  headerTextColor: 'light',
  linkTextColor: 'light',
  copyrightTextColor: 'light',
  bgColor: 'dark'
};

exports.default = (0, _WithStyles2.default)(Footer);