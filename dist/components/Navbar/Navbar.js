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

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _NavbarBrand = require('../NavbarBrand/NavbarBrand');

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _Image = require('../Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _NavbarCollapse = require('../NavbarCollapse/NavbarCollapse');

var _NavbarCollapse2 = _interopRequireDefault(_NavbarCollapse);

var _NavbarNav = require('../NavbarNav/NavbarNav');

var _NavbarNav2 = _interopRequireDefault(_NavbarNav);

var _NavbarLink = require('../NavbarLink/NavbarLink');

var _NavbarLink2 = _interopRequireDefault(_NavbarLink);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = { collapse: false };
    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('scroll', function () {
        var top = typeof window !== 'undefined' ? window.scrollY < 100 : true;
        var isTop = _this2.state.isTop;

        if (top !== isTop) {
          _this2.setState({ isTop: top });
        }
      });
    }
  }, {
    key: 'toggleCollapse',
    value: function toggleCollapse() {
      var collapse = this.state.collapse;

      this.setState({ collapse: !collapse });
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items) {
      var _this3 = this;

      var onItemClick = this.props.onItemClick;

      return items.map(function (item) {
        return _react2.default.createElement(
          _NavbarLink2.default,
          _extends({
            key: item.title,
            href: item.href,
            target: item.target,
            onClick: function onClick() {
              return onItemClick({ item: item });
            }
          }, (0, _ExtractProps2.default)('link', _this3.props)),
          item.icon && _react2.default.createElement(_Icon2.default, { icon: item.icon, className: 'mr-1' }),
          item.title
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var collapse = this.state.collapse;
      var _props = this.props,
          brandName = _props.brandName,
          brandLink = _props.brandLink,
          leftItems = _props.leftItems,
          rightItems = _props.rightItems,
          brandLogo = _props.brandLogo,
          transparent = _props.transparent,
          fixed = _props.fixed,
          className = _props.className,
          expand = _props.expand,
          children = _props.children,
          style = _props.style;


      var navClassName = className + ' navbar ' + (expand ? 'navbar-expand-' + expand : 'navbar-expand') + ' Navbar';
      if (transparent) navClassName += ' Navbar--transparent';
      if (fixed) navClassName += ' fixed-top';
      var isTop = this.state.isTop;

      navClassName += ' ' + (isTop ? 'navbar-up' : 'navbar-down');

      return _react2.default.createElement(
        'nav',
        { className: navClassName, style: style },
        _react2.default.createElement(
          _Button2.default,
          {
            className: 'navbar-toggler Navbar__Toggler',
            ariaLabel: 'Toggle navigation',
            onClick: this.toggleCollapse
          },
          _react2.default.createElement(_Icon2.default, { icon: 'fa fa-bars' })
        ),
        _react2.default.createElement(
          _NavbarBrand2.default,
          _extends({ className: 'mr-auto', href: brandLink }, (0, _ExtractProps2.default)('brand', this.props)),
          brandLogo && _react2.default.createElement(_Image2.default, _extends({
            alt: 'Company logo',
            src: brandLogo,
            className: 'd-inline-block align-top mr-1 Logo'
          }, (0, _ExtractProps2.default)('image', this.props))),
          brandName
        ),
        leftItems.length > 0 && !children && _react2.default.createElement(
          _NavbarCollapse2.default,
          { isOpen: collapse },
          _react2.default.createElement(
            _NavbarNav2.default,
            null,
            this.renderItems(leftItems)
          )
        ),
        rightItems.length > 0 && !children && _react2.default.createElement(
          _NavbarCollapse2.default,
          { isOpen: collapse },
          _react2.default.createElement(
            _NavbarNav2.default,
            { alignItems: 'right' },
            this.renderItems(rightItems)
          )
        ),
        children && _react2.default.createElement(
          _NavbarCollapse2.default,
          { isOpen: collapse },
          children
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  /**
   * Define if component is transparent.
   */
  transparent: _propTypes2.default.bool,
  /**
   * Define if component is fixed.
   */
  fixed: _propTypes2.default.bool,
  /**
   * Brand name of component.
   */
  brandName: _propTypes2.default.string,
  /**
   * Text color of brand.
   */
  brandTextColor: _propTypes2.default.string,
  /**
   * Link to go when brand name or logo has clicked.
   */
  brandLink: _propTypes2.default.string,
  /**
   * Background color of navar.
   */
  bgColor: _propTypes2.default.string,
  /**
   * Color of navar link.
   */
  linkTextColor: _propTypes2.default.string,
  /**
   * Image logo url.
   */
  brandLogo: _propTypes2.default.string,
  /**
   * Class to apply.
   */
  className: _propTypes2.default.string,
  /**
   * Customs styles to tramsform your Hero
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Resolution to expand Navbar.
   */
  expand: _propTypes2.default.string,
  /**
   * Array of items to show in nav-bar left side.
   */
  leftItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    icon: _propTypes2.default.string
  })),
  /**
   * Array of items to show in nav-bar right side.
   */
  rightItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    icon: _propTypes2.default.string
  })),
  /**
   * Elements show into the Navbar
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  /**
   * Called when item has clecked. See example section
   */
  onItemClick: _propTypes2.default.func
};
Navbar.defaultProps = {
  transparent: false,
  fixed: false,
  brandName: '',
  brandLink: '',
  brandLogo: '',
  className: '',
  style: null,
  bgColor: 'dark',
  brandTextColor: 'light',
  linkTextColor: 'light',
  expand: '',
  leftItems: [],
  rightItems: [],
  children: null,
  onItemClick: function onItemClick() {}
};

exports.default = (0, _WithStyles2.default)(Navbar);