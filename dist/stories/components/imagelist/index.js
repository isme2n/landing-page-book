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

var _README = require('../../../components/ImageList/README.md');

var _README2 = _interopRequireDefault(_README);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/ImageList', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Image List',
      description: 'Easy way to show an image list on your website.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, ImageList: _components.ImageList } },
      '<ImageList \n    gray\n    imageRounded={false}\n    imageBordered={false}\n    images={[\n      {image: \'images/image-list/react.png\'},\n      {image: \'images/image-list/graphql.png\'},\n      {image: \'images/image-list/apollo.png\'},\n      {image: \'images/image-list/storybook.png\'},\n      {image: \'images/image-list/angularjs.png\'},\n      {image: \'images/image-list/bootstrap.png\'},\n      {image: \'images/image-list/browserstack.png\'},\n      {image: \'images/image-list/jest.png\'}\n    ]}\n/>'
    )
  );
}));