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

var _README = require('../../../components/Input/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Form', module);

stories.add('Input', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Input',
      description: 'The Input specifies an input field where the user can enter data. <Input> elements are used within a <form> element to declare input controls that allow users to input data.       An input field can vary in many ways, depending on the type attribute.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Input: _components.Input } },
      '<Input name="myInput" placeholder="Enter a value" label="Input label" icon="fa fa-user"/>'
    )
  );
}));
stories.add('Size', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Input',
      storyName: 'Size',
      description: 'The Input specifies an input field where the user can enter data. <Input> elements are used within a <form> element to declare input controls that allow users to input data.       An input field can vary in many ways, depending on the type attribute.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Input: _components.Input } },
      '<React.Fragment>\n    <Input name="Large" value="This is an large input" placeholder="Enter a value" icon="fa fa-user" size="lg"/>\n    <Input name="Normal" value="This is an normal input" placeholder="Enter a value" icon="fa fa-user"/>\n    <Input name="Small" value="This is an small input" placeholder="Enter a value" icon="fa fa-user" size="sm"/>\n</React.Fragment>'
    )
  );
}));