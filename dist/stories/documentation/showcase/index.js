'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Introduction', module);

stories.add('Showcase', (0, _withReadme2.default)([], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Showcase'
    ),
    _react2.default.createElement(
      'a',
      {
        style: { float: 'right', marginTop: '-50px', backgroundColor: '#fed136', color: '#383e45' },
        href: 'mailto:hello@front10.com?subject=showcase',
        className: 'btn'
      },
      'Submit your site'
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-6 col-md-6 col-lg-6' },
        _react2.default.createElement(
          _components.Card,
          {
            image: 'images/showcase/get-landing-page-book.png',
            subTitle: 'Landing page book it\u2019s an react components library with more than 40 components and elements. This library is based en react 16.2 and was wrote with ES6.',
            imageCircle: false,
            title: 'Get Landing Page Book',
            contentAlign: 'left'
          },
          _react2.default.createElement(
            _components.Link,
            {
              href: 'https://front10.com/get-landing-page-book/',
              tooltip: 'View web site',
              target: '__blank'
            },
            _react2.default.createElement(_components.Icon, { icon: 'fa fa-view' }),
            _react2.default.createElement(
              'span',
              null,
              'See more ...'
            )
          )
        )
      )
    )
  );
}));