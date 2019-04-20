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

var _README = require('../../../components/Link/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Typography/Link', module);

stories.add('Basic', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Link',
      storyName: 'Basic',
      description: 'Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Link: _components.Link } },
      '<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">This is a link</Link>'
    )
  );
}));

stories.add('Disabled', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Link',
      storyName: 'Disabled',
      description: 'Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Link: _components.Link } },
      '<Link disabled href="https://front10.com">This is disabled</Link>'
    )
  );
}));

stories.add('With icon', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Link',
      storyName: 'With icon',
      description: 'Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Link: _components.Link, Icon: _components.Icon } },
      '<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">\n    <Icon icon="fa fa-home" />\n    <span>This is disabled</span>\n</Link>'
    )
  );
}));

stories.add('Like a button', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Link',
      storyName: 'Like  a button',
      description: 'Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Link: _components.Link, Icon: _components.Icon, Container: _components.Container } },
      '<React.Fragment>\n    <Link className="btn btn-primary mr-1" href="https://github.com/front10/landing-page-book" tooltip="This is a tooltip" target="_blank">\n        <Icon icon="fa fa-github" /> View code on Github\n    </Link>\n    <Link className="btn btn-outline-success mr-1" href="https://front10.com/#contactForm" tooltip="Contact us" target="_blank">\n        <Icon icon="fa fa-info-circle" /> Contact us\n    </Link>\n</React.Fragment>'
    )
  );
}));