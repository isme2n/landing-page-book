'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/Footer/README.md');

var _README2 = _interopRequireDefault(_README);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Footer', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Footer',
      description: 'A document footer is a small section at the bottom of each page within a document. It is often used to display company data or copyright information.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Footer: _components.Footer } },
      '<Footer \n    socialUrl="https://front10.com"\n    copyright="Front10, LLC"\n    socials={[\'facebook\', \'linkedin\', \'google\', \'twitter\']}\n    sections={[\n    {\n      name: \'Features\',\n      sections: [\n        {name: \'Cool stuff\',url: \'https://front10.com\'},\n        {name: \'Random feature\',url: \'https://front10.com\'},\n        {name: \'Team feature\',url: \'https://front10.com\'},\n        {name: \'Stuff for developers\',url: \'https://front10.com\'},\n        {name: \'Another one\',url: \'https://front10.com\'},\n        {name: \'Last time\',url: \'https://front10.com\'}\n      ]\n    },\n    {\n      name: \'Resources\',\n      sections: [\n        {name: \'Resource\',url: \'https://front10.com\'},\n        {name: \'Resource name\',url: \'https://front10.com\'},\n        {name: \'Another resource\',url: \'https://front10.com\'},\n        {name: \'Final resource\',url: \'https://front10.com\'}\n      ]\n    },\n    {\n      name: \'About\',\n      sections: [\n        {name: \'Team\',url: \'https://front10.com\'},\n        {name: \'Locations\',url: \'https://front10.com\'},\n        {name: \'Privacy\',url: \'https://front10.com\'},\n        {name: \'Terms\',url: \'https://front10.com\'}\n      ]\n    }]}\n/>'
    )
  );
}));

stories.add('Children', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Footer',
      storyName: 'With Childrens',
      description: 'A document footer is a small section at the bottom of each page within a document. It is often used to display company data or copyright information.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Footer: _components.Footer, Row: _components.Row, Column: _components.Column, Copyright: _components.Copyright, Social: _components.Social, Image: _components.Image } },
      '<Footer>\n    <Row>\n        <Column className="col-sm-12 col-md">\n            <Copyright text="Front10, LLC" showAllRightText={false} />\n        </Column>\n        <Column className="col-sm-12 col-md mt-3 mt-md-0">\n            <Image\n                src="https://front10.com/img/logos/logo-main.png"\n                width={80}\n                alt="Front 10 logo"\n            />\n        </Column>\n        <Column className="col-sm-12 col-md mt-3 mt-md-0">\n            <Social type="twitter" url="https://front10.com" gray />\n            <Social type="facebook" url="https://front10.com" gray />\n            <Social type="linkedin" url="https://front10.com" gray />\n        </Column>\n    </Row>\n</Footer>'
    )
  );
}));