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

var _README = require('../../../components/Location/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markers = [{
  icon: 'fa fa-map-marker',
  color: '#d20000',
  lat: 26.5,
  lng: -80.2
}, {
  icon: 'fa fa-map-marker',
  color: '#d2a430',
  lat: 26.6,
  lng: -80.3
}];

var stories = (0, _react3.storiesOf)('Components/Location', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Location',
      description: 'A simple way to point out a place will be easier for users to locate.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-md-4', scope: { React: _react2.default, Location: _components.Location, markers: markers } },
      '<Location\n    apiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"\n    lat={26.5}\n    lng={-80.2}\n    zoom={10}\n    markers={' + JSON.stringify(markers, null, 8) + '}\n/>'
    )
  );
}));