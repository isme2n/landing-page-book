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

var _README = require('../../../components/Header/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Typography/Header', module);

stories.add('Basic', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Header',
      description: 'Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Container: _components.Container, Header: _components.Header } },
      '<React.Fragment>\n    <Header type="h1">h1. Landing Page Heading</Header>\n    <Header type="h2">h2. Landing Page Heading</Header>\n    <Header type="h3">h3. Landing Page Heading</Header>\n    <Header type="h4">h4. Landing Page Heading</Header>\n    <Header type="h5">h5. Landing Page Heading</Header>\n    <Header type="h6">h6. Landing Page Heading</Header>\n</React.Fragment>'
    )
  );
}));

stories.add('Colors', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Header',
      description: 'Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Container: _components.Container, Header: _components.Header } },
      '<React.Fragment>\n    <Header color="primary">Landing Page Heading</Header>\n    <Header color="secondary">Landing Page Heading</Header>\n    <Header color="success">Landing Page Heading</Header>\n    <Header color="danger">Landing Page Heading</Header>\n    <Header color="warning">Landing Page Heading</Header>\n    <Header color="info">Landing Page Heading</Header>\n    <Header color="light">Landing Page Heading</Header>\n    <Header color="dark">Landing Page Heading</Header>\n</React.Fragment>'
    )
  );
}));

stories.add('Borders', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Header',
      description: 'Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Container: _components.Container, Header: _components.Header } },
      '<Header borderTop borderBottom>Landing Page Heading</Header>'
    )
  );
}));

stories.add('Align', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Header',
      description: 'Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Container: _components.Container, Header: _components.Header } },
      '<React.Fragment>\n    <Header> Landing Page Heading </Header>\n    <Header textAlign="right"> Landing Page Heading </Header>\n</React.Fragment>'
    )
  );
}));

stories.add('With icon', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Header',
      description: 'Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Header: _components.Header } },
      '<Header icon="fa fa-home"> Landing Page Heading </Header>'
    )
  );
}));