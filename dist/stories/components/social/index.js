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

var _README = require('../../../components/Social/README.md');

var _README2 = _interopRequireDefault(_README);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Social', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Social',
      description: 'Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Social: _components.Social } },
      '<Social gray type="facebook" rounded url="https://front10.com" directLink={false} />'
    )
  );
}));

stories.add('All', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Social',
      storyName: 'All social media buttons',
      description: 'Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Social: _components.Social } },
      '<React.Fragment>\n    <Social gray={false} type="email" rounded url="https://front10.com" />\n    <Social gray={false} type="facebook" rounded url="https://front10.com" />\n    <Social gray={false} type="google" rounded url="https://front10.com" />\n    <Social gray={false} type="linkedin" rounded url="https://front10.com" />\n    <Social gray={false} type="livejournal" rounded url="https://front10.com" />\n    <Social gray={false} type="ok" rounded url="https://front10.com" />\n    <Social gray={false} type="pinterest" rounded url="https://front10.com" />\n    <Social gray={false} type="reddit" rounded url="https://front10.com" />\n    <Social gray={false} type="telegram" rounded url="https://front10.com" />\n    <Social gray={false} type="tumblr" rounded url="https://front10.com" />\n    <Social gray={false} type="twitter" rounded url="https://front10.com" />\n    <Social gray={false} type="viber" rounded url="https://front10.com" />\n    <Social gray={false} type="vk" rounded url="https://front10.com" />\n    <Social gray={false} type="whatsapp" rounded url="https://front10.com" />\n</React.Fragment>'
    )
  );
}));