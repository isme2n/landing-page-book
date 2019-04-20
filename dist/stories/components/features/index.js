'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _components = require('../../../components');

var _README = require('../../../components/Features/README.md');

var _README2 = _interopRequireDefault(_README);

var _features = require('../../mock/components/features');

var _features2 = _interopRequireDefault(_features);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Features', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Features',
      description: 'Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Features: _components.Features } },
      '<Features\n    showSubtitle={false}\n    buttonColor="primary"\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>'
    )
  );
}));

stories.add('Image & title', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Features',
      storyName: 'Image & title',
      description: 'Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Features: _components.Features } },
      '<Features\n    showSubtitle={false}\n    showSummary={false}\n    showFooter={false}\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>'
    )
  );
}));

stories.add('With shadow', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Features',
      storyName: 'With shadow',
      description: 'Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Features: _components.Features } },
      '<Features\n    shadow\n    showSubtitle={false}\n    showFooter={false}\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>'
    )
  );
}));

stories.add('With image shadow', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Features',
      storyName: 'With image shadow',
      description: 'Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Features: _components.Features } },
      '<Features\n    imageShadow\n    imageCircle\n    showSubtitle={false}\n    showFooter={false}\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>'
    )
  );
}));