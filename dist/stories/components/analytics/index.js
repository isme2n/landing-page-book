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

var _README = require('../../../components/Analytics/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Analytics', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Analytics',
      description: 'Analytics makes it easy to understand how your site and app users are engaging with your content, so you know what\u2019s working and what\u2019s not. See how people are interacting with your sites and apps and the role that different channels play by viewing robust reports and dashboards. You can even connect systems used to measure CRM, points of sale, and other touchpoints with your customers for a more complete view.'
    }),
    _react2.default.createElement(
      'div',
      null,
      'This component is embedded directly in the javascript and shows nothing.'
    ),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Analytics: _components.Analytics } },
      '<Analytics idTracking="UA-0000000-0" urlPath="/" debug /> '
    )
  );
}));