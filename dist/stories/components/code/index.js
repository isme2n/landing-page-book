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

var _README = require('../../../components/Code/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Code', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Code',
      description: 'Show code chunks can help to quickly explain the most complicated stuff ;)'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Code: _components.Code } },
      '<Code\n    languageCode="jsx"\n    collapsible\n    codeLink="https://codesandbox.io/s/pmjvk5wl27"\n    code="import {React} from \'react\';"\n/>'
    )
  );
}));

stories.add('Code Simple', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Code',
      storyName: 'Code Simple',
      description: 'Show code chunks can help to quickly explain the most complicated stuff ;)'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Code: _components.Code } },
      '<Code\n    languageCode="jsx"\n    lineNumbers\n    showheader\n    collapsible={false}\n    showCopyButton={false}\n    showDeleteButton={false}\n    codeLink="https://codesandbox.io/s/pmjvk5wl27"\n    code="import {React} from \'react\';"\n/>'
    )
  );
}));

stories.add('Code Css', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Code',
      storyName: 'Code Css',
      description: 'Show code chunks can help to quickly explain the most complicated stuff ;)'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Code: _components.Code } },
      '<Code\n    languageCode="css"\n    readOnly={false}\n    lineNumbers\n    showheader={false}\n    collapsible\n    showCopyButton\n    showDeleteButton\n    codeLink="https://codesandbox.io/s/pmjvk5wl27"\n    code=".my-class{background-color: #fff}"\n/>'
    )
  );
}));