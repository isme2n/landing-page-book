'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _components = require('../../../components');

var _README = require('../../../components/BackersOpenCollective/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/BackersOpenCollective', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Backers Open Collective',
      description: 'A person, institution, or country that supports something, especially financially throw opencollective platform. Its important show the people who support your idea.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, BackersOpenCollective: _components.BackersOpenCollective } },
      '<BackersOpenCollective collective="webpack" />'
    )
  );
}));