'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/ContactInfo/README.md');

var _README2 = _interopRequireDefault(_README);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/ContactInfo', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Contact Info',
      description: 'It is always important to have the most information of your contacts, our component provides it'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-md-5', scope: { React: _react2.default, ContactInfo: _components.ContactInfo } },
      '<ContactInfo\n    showBorder\n    showIcons\n    lat={26.5}\n    lng={-80.2}\n    locationApiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"\n    address="9728 Birchwood St. Navarre, FL 32566"\n    email="contact@front10.com"\n    phone="+001 3521 4587"\n    mobile="+001 3521 4587"\n    fax="208-658744"\n    website="www.front10.com"\n    contentAlign="left"\n/>'
    )
  );
}));