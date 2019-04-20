'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/Sponsors/README.md');

var _README2 = _interopRequireDefault(_README);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Sponsors', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Sponsors',
      description: 'A person or organization that provides funds for you project or activity, give them an acknowledgment.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Sponsors: _components.Sponsors } },
      '<Sponsors\n    gray\n    sponsors={[\n        { image: \'images/sponsors/facebook.png\' },\n        { image: \'images/sponsors/google.png\' },\n        { image: \'images/sponsors/twitter.png\' },\n        { image: \'images/sponsors/salesforce.png\' },\n        { image: \'images/sponsors/amazon.png\' }\n    ]}\n/>'
    )
  );
}));