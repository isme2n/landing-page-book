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

var _README = require('../../../components/Paragraph/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Typography', module);

stories.add('Paragraph', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Paragraph',
      description: '<p> element represents a paragraph. Paragraph are usually represented in  visual media as blocks of text separated from adjacent blocks by blank lines and/or  first-line indentation, but HTML Paragraph can be any structural grouping of related content, such as images or form fields.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Container: _components.Container, Paragraph: _components.Paragraph } },
      '<Paragraph\n    text="We are a group of talented software developers with more than 10 years of experience creating front-end applications. We are tired to see how many brilliant minds are reworking in the same thing because there are not standar and defined processes. We are tired of seeing how many companies are struggling to find good programmers. We are tired of seeing how there a lot of software in a trash because somebody does not defined the requirements at the right time." \n/>'
    )
  );
}));