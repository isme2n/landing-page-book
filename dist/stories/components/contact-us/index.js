'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/ContactUs/README.md');

var _README2 = _interopRequireDefault(_README);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/ContactUs', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Contact Us',
      description: 'Simple contact form, so that your users communicate easily through your website.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-md-6 col-lg-4', scope: { React: _react2.default, ContactUs: _components.ContactUs } },
      '<ContactUs\n    showText\n    showPlaceholder\n    apiUrl="https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno"\n/>'
    )
  );
}));