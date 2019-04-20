'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gatsbyLink = require('gatsby-link');

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _ThemeSwitcher = require('../../storybook-utils/components/ThemeSwitcher');

var _ThemeSwitcher2 = _interopRequireDefault(_ThemeSwitcher);

var _logoMainBLACK = require('../../assets/images/logo/logoMainBLACK.png');

var _logoMainBLACK2 = _interopRequireDefault(_logoMainBLACK);

var _components = require('../components');

require('font-awesome/css/font-awesome.min.css');

require('../themes/default/index.css');

require('../pages/app.css');

var _appleTouchIcon = require('./favicons/apple-touch-icon.png');

var _appleTouchIcon2 = _interopRequireDefault(_appleTouchIcon);

var _favicon = require('./favicons/favicon.ico');

var _favicon2 = _interopRequireDefault(_favicon);

var _favicon32x = require('./favicons/favicon-32x32.png');

var _favicon32x2 = _interopRequireDefault(_favicon32x);

var _favicon16x = require('./favicons/favicon-16x16.png');

var _favicon16x2 = _interopRequireDefault(_favicon16x);

var _safariPinnedTab = require('./favicons/safari-pinned-tab.svg');

var _safariPinnedTab2 = _interopRequireDefault(_safariPinnedTab);

var _mstile144x = require('./favicons/mstile-144x144.png');

var _mstile144x2 = _interopRequireDefault(_mstile144x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainLayout = function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout() {
    _classCallCheck(this, MainLayout);

    return _possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).apply(this, arguments));
  }

  _createClass(MainLayout, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          { defaultTitle: 'Landing Page Book' },
          _react2.default.createElement('meta', { property: 'og:title', content: 'Landing Page Book' }),
          _react2.default.createElement('meta', {
            property: 'og:image',
            content: 'https://front10.com/landing-page-book/images/logo/facebook.png'
          }),
          _react2.default.createElement('meta', {
            property: 'og:description',
            content: 'Landing page book it\u2019s an react components library with more than 40 components and elements. This library is based en react 16.2 and was wrote with ES6 and is compatible with Create React App, Gatsby and Next plataforms.'
          }),
          _react2.default.createElement('meta', {
            name: 'description',
            content: 'Landing page book it\u2019s an react components library with more than 40 components and elements. This library is based en react 16.2 and was wrote with ES6 and is compatible with Create React App, Gatsby and Next plataforms.'
          }),
          _react2.default.createElement('meta', { property: 'og:url', content: 'https://front10.com/landing-page-book/' }),
          _react2.default.createElement('link', { rel: 'canonical', href: 'https://front10.com/landing-page-book/index.html' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: _appleTouchIcon2.default }),
          _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: _favicon32x2.default }),
          _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: _favicon16x2.default }),
          _react2.default.createElement('link', { rel: 'mask-icon', href: _safariPinnedTab2.default, color: '#5bbad5' }),
          _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#da532c' }),
          _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: _mstile144x2.default }),
          _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff' }),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: _favicon2.default })
        ),
        _react2.default.createElement(_components.Analytics, { idTracking: 'UA-44521541-9' }),
        _react2.default.createElement(
          _components.Navbar,
          {
            brandLink: '',
            expand: 'md',
            brandLogo: _logoMainBLACK2.default,
            fixed: true,
            bgColor: 'light',
            imageRoundedCircle: true,
            className: 'main-navbar'
          },
          _react2.default.createElement(
            _components.NavbarNav,
            null,
            _react2.default.createElement(
              _gatsbyLink2.default,
              { className: 'nav-link NavbarLink', to: '/', activeClassName: 'activeLink', exact: true },
              'Introduction'
            ),
            _react2.default.createElement(
              _gatsbyLink2.default,
              {
                className: 'nav-link NavbarLink',
                to: '/components',
                activeClassName: 'activeLink',
                exact: true
              },
              'Components'
            )
          ),
          _react2.default.createElement(
            _components.NavbarNav,
            { alignItems: 'right' },
            _react2.default.createElement('iframe', {
              className: 'first-iframe mt-2',
              src: '//ghbtns.com/github-btn.html?user=front10&repo=landing-page-book&type=watch&count=true',
              frameBorder: '0',
              scrolling: '0',
              width: '86',
              height: '30'
            }),
            _react2.default.createElement(
              'a',
              {
                title: 'Github issues',
                className: 'text-secondary pull-right nav-link NavbarLink',
                href: 'https://github.com/front10/landing-page-book/issues',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              _react2.default.createElement('i', { className: 'fa fa-question-circle github-link-icon', title: '' }),
              _react2.default.createElement(
                'span',
                null,
                'Support'
              )
            ),
            _react2.default.createElement(
              'a',
              {
                title: 'Github',
                className: 'text-secondary pull-right nav-link NavbarLink',
                href: 'https://github.com/front10/landing-page-book/',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              _react2.default.createElement('i', { className: 'fa fa-github github-link-icon', title: '' }),
              _react2.default.createElement(
                'span',
                null,
                'Github'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'github-show-xs' },
          _react2.default.createElement('iframe', {
            title: 'iframe-github',
            src: '//ghbtns.com/github-btn.html?user=front10&repo=landing-page-book&type=watch&count=true',
            frameBorder: '0',
            scrolling: '0',
            width: '86',
            height: '30'
          })
        ),
        children,
        _react2.default.createElement(
          _components.Footer,
          null,
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md' },
              _react2.default.createElement(_components.Copyright, { textColor: 'light', showAllRightText: false, text: 'Front10, LLC' })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md mt-3 mt-md-0' },
              _react2.default.createElement(
                'span',
                { className: 'text-light' },
                'With \u2665 by '
              ),
              _react2.default.createElement(
                _components.Link,
                { href: 'https://front10.com/', target: '_blank' },
                _react2.default.createElement(_components.Image, {
                  alt: 'Front 10 logo',
                  src: 'https://front10.com/img/logos/logo-main.png',
                  width: '100'
                })
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md mt-3 mt-md-0' },
              _react2.default.createElement(_components.Social, { type: 'twitter', url: 'https://twitter.com/front10hello' }),
              _react2.default.createElement(_components.Social, { type: 'linkedin', url: 'https://www.linkedin.com/company/front10/' })
            )
          )
        ),
        _react2.default.createElement(_ThemeSwitcher2.default, null)
      );
    }
  }]);

  return MainLayout;
}(_react2.default.Component);

MainLayout.propTypes = {
  // route: PropTypes.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
MainLayout.defaultProps = {
  // route: '',
  children: null
};

exports.default = MainLayout;