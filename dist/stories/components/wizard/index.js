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

var _README = require('../../../components/Wizard/README.md');

var _README2 = _interopRequireDefault(_README);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Wizard', module);

var steps = [{
  name: 'Step 1',
  component: _react2.default.createElement(
    _components.Container,
    null,
    _react2.default.createElement(_components.Video, { source: 'https://youtu.be/dCrLwWdju68' })
  )
}, {
  name: 'Step 2',
  component: _react2.default.createElement(
    _components.Container,
    null,
    _react2.default.createElement(_components.Gif, { autoplay: true, image: 'images/gif/write.gif' })
  )
}, {
  name: 'Step 3',
  component: _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      _components.FormGroup,
      null,
      _react2.default.createElement(_components.Input, { label: 'Name', labelColon: true })
    ),
    _react2.default.createElement(
      _components.FormGroup,
      null,
      _react2.default.createElement(_components.Input, { label: 'Email', labelColon: true, type: 'email' })
    ),
    _react2.default.createElement(
      _components.FormGroup,
      null,
      _react2.default.createElement(_components.Input, { label: 'Address', labelColon: true, type: 'textarea' })
    ),
    _react2.default.createElement(_components.Social, { url: 'https://front10.com', type: 'twitter' }),
    _react2.default.createElement(_components.Social, { url: 'https://front10.com', type: 'linkedin' }),
    _react2.default.createElement(_components.Social, { url: 'https://front10.com', type: 'google' }),
    _react2.default.createElement(_components.Social, { url: 'https://front10.com', type: 'pinterest' })
  )
}];

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Wizard',
      description: 'Easy way to make a wizard on your website. you can guide your users step by step.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: { React: _react2.default, Wizard: _components.Wizard, Container: _components.Container, Gif: _components.Gif, Social: _components.Social, FormGroup: _components.FormGroup, Input: _components.Input, Video: _components.Video, steps: steps }
      },
      '<Wizard contentAlign="center" steps={steps} />'
    )
  );
}));