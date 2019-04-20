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

var _README = require('../../../components/BrowserSupport/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browsers = [{
  vendor: 'firefox',
  version: '> 56'
}, {
  vendor: 'chrome',
  version: '= 62'
}, {
  vendor: 'iexplore',
  version: '> 9'
}, {
  vendor: 'safari',
  version: '> 25'
}, {
  vendor: 'netscape',
  version: '> 42.6'
}, {
  vendor: 'opera',
  version: '< 15.6'
}, {
  vendor: 'maxthon',
  version: '>= 10'
}, {
  vendor: 'flock',
  version: '>= 11'
}];

var stories = (0, _react3.storiesOf)('Components/BrowsersSupport', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Browser Support',
      description: 'Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, BrowserSupport: _components.BrowserSupport } },
      '<BrowserSupport\n    browsers={' + JSON.stringify(browsers, null, 8) + '}\n/>'
    )
  );
}));

stories.add('Without texts', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Browser Support',
      storyName: 'Without texts',
      description: 'Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, BrowserSupport: _components.BrowserSupport } },
      '<BrowserSupport\n    showBrowserVendor={false}\n    showBrowserVersion={false} \n    browsers={' + JSON.stringify(browsers, null, 8) + '}\n/>'
    )
  );
}));

stories.add('Gray', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Browser Support',
      storyName: 'Gray',
      description: 'Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, BrowserSupport: _components.BrowserSupport } },
      '<BrowserSupport \n    showBrowserVendor={false}\n    showBrowserVersion={false}\n    imgFilter="grayscale(90%)"\n    browsers={' + JSON.stringify(browsers, null, 8) + '}\n/>'
    )
  );
}));