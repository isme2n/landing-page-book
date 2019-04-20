'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/Icon/README.md');

var _README2 = _interopRequireDefault(_README);

var _icons = require('../../mock/components/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Icon', module);

stories.add('Basic', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, { name: 'Icon', description: 'Icon element.' }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Row: _components.Row, Column: _components.Column, Container: _components.Container, Icon: _components.Icon } },
      '<React.Fragment>\n    <Icon icon="fa fa-cubes" className="fa-3x" />\n</React.Fragment>'
    )
  );
}));

stories.add('Different Sizes', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, { name: 'Icon', description: 'Icon element.' }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Row: _components.Row, Column: _components.Column, Container: _components.Container, Icon: _components.Icon } },
      '<React.Fragment>\n    <Icon icon="fa fa-home" className="fa-1x" />\n    <Icon icon="fa fa-home" className="fa-2x" />\n    <Icon icon="fa fa-home" className="fa-3x" />\n    <Icon icon="fa fa-home" className="fa-4x" />\n    <Icon icon="fa fa-home" className="fa-5x" />\n</React.Fragment>'
    )
  );
}));

stories.add('Different Colors', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, { name: 'Icon', description: 'Icon element.' }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Row: _components.Row, Column: _components.Column, Container: _components.Container, Icon: _components.Icon } },
      '<React.Fragment>\n    <Icon icon="fa fa-home" className="fa-1x text-primary" />\n    <Icon icon="fa fa-home" className="fa-2x text-secondary" />\n    <Icon icon="fa fa-home" className="fa-3x text-success" />\n    <Icon icon="fa fa-home" className="fa-4x text-danger" />\n    <Icon icon="fa fa-home" className="fa-5x text-warning" />\n</React.Fragment>'
    )
  );
}));

stories.add('All Icons', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, { name: 'Icon', description: 'Icon element.' }),
    _react2.default.createElement(
      _components.Link,
      {
        href: 'https://fontawesome.com/v4.7.0/icons/',
        tooltip: 'View all icons',
        target: '_blank',
        className: 'btn btn-primary float-right m-3'
      },
      'View all icons'
    ),
    _react2.default.createElement('div', { className: 'clearfix' }),
    _react2.default.createElement(
      _components.Container,
      null,
      _react2.default.createElement(
        _components.Row,
        null,
        _icons2.default.map(function (icon) {
          return _react2.default.createElement(
            _components.Column,
            { key: icon, className: 'col col-xs-3 col-sm-2 text-center' },
            _react2.default.createElement(
              'div',
              { className: 'p-2 float-left' },
              _react2.default.createElement(_components.Icon, { icon: icon, className: 'fa-2x' }),
              _react2.default.createElement(
                'span',
                { style: { fontSize: '12px' }, className: 'd-block' },
                icon
              )
            )
          );
        })
      )
    )
  );
}));