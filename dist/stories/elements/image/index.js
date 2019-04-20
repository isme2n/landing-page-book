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

var _README = require('../../../components/Image/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Image', module);

stories.add('Image', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Image',
      description: 'Simple element image to use on your website. Images can improve the design and the appearance of a web page.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Image: _components.Image } },
      '<Image alt="This is an image example" src="images/backers/woman.svg" tooltip="This is a woman" width="200"/>'
    )
  );
}));
stories.add('Responsive Image', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Image',
      storyName: 'Responsive Image',
      description: 'Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Image: _components.Image } },
      '<Image alt="Responsive image example" src="images/image/214210-P0L8ES-375.jpg" tooltip="This is our galaxy" width="100%"/>'
    )
  );
}));
stories.add('Aligning images', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Image',
      storyName: 'Aligning images',
      description: 'Align images with the helper float classes or text alignment classes. block-level images can be centered using the .mx-auto margin utility class.'
    }),
    _react2.default.createElement(
      _components.Container,
      null,
      _react2.default.createElement(
        _components.Row,
        null,
        _react2.default.createElement(
          _components.Column,
          null,
          _react2.default.createElement(
            _PropsManager2.default,
            { scope: { React: _react2.default, Image: _components.Image } },
            '<React.Fragment>\n      <Image\n          alt="This is an image example"\n          src="images/backers/astronaut.svg"\n          tooltip="Float left"\n          width="150"\n          className="float-left"\n      />\n      <Image\n          alt="This is an image example"\n          src="images/backers/doctor.svg"\n          tooltip="Float right"\n          width="150"\n          className="float-right"\n      />\n      <div className="clearfix"/>\n</React.Fragment>'
          )
        )
      ),
      _react2.default.createElement(
        _components.Row,
        null,
        _react2.default.createElement(
          _components.Column,
          { className: 'mt-5' },
          _react2.default.createElement(
            _PropsManager2.default,
            { scope: { React: _react2.default, Image: _components.Image } },
            '<React.Fragment>\n      <Image \n          alt="This is an image example" src="images/backers/astronaut.svg" \n          tooltip="Centered with MX-AUTO" width="150" className="mx-auto d-block"\n      />\n      <div className="text-center mt-5">\n          <Image \n              alt="This is an image example" src="images/backers/doctor.svg" \n              tooltip="Centered with TEXT-CENTER" width="150"\n          />\n      </div>\n</React.Fragment>'
          )
        )
      )
    )
  );
}));