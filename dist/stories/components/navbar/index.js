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

var _README = require('../../../components/Navbar/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Navbar', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Navbar',
      description: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. '
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: {
          React: _react2.default,
          Navbar: _components.Navbar
        }
      },
      '<Navbar\n    transparent={false}\n    fixed={false}\n    brandName=""\n    brandLink="https://front10.com"\n    brandLogo="images/logo/front10.png"\n    expand="md"\n    rightItems={[\n        {title: \'Services\'},\n        {title: \'Contact\'}\n    ]}\n    leftItems={[\n        {\n            title: \'Google\',\n            href: \'https://google.com\',\n            target: \'_blank\',\n            icon: \'fa fa-google\'\n        },\n        {\n            title: \'Facebook\',\n            href: \'https://facebook.com\',\n            target: \'_blank\',\n            icon: \'fa fa-facebook-official\'\n        }\n    ]}\n/>'
    )
  );
}));

stories.add('Container Mode', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Navbar',
      storyName: 'Container Mode',
      description: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. '
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: {
          React: _react2.default,
          Navbar: _components.Navbar,
          NavbarNav: _components.NavbarNav,
          Input: _components.Input,
          LanguageSwitcher: _components.LanguageSwitcher,
          NavbarLink: _components.NavbarLink,
          Icon: _components.Icon,
          Container: _components.Container,
          NavbarCollapse: _components.NavbarCollapse,
          NavbarBrand: _components.NavbarBrand,
          Image: _components.Image
        }
      },
      '<Navbar expand="md" className="mb-2">\n    <Container>\n        <NavbarCollapse>\n            <NavbarBrand>\n                <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo"/>\n              </NavbarBrand>\n              <NavbarNav alignItems="right">\n                <NavbarLink>Documentation</NavbarLink>\n                <NavbarLink>Contribute</NavbarLink>\n                <NavbarLink>Vote</NavbarLink>\n                <NavbarLink>Blog</NavbarLink>\n                <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>\n                <NavbarLink><Icon icon="fa fa-github" /></NavbarLink>\n                <NavbarLink><Icon icon="fa fa-stack-overflow" /></NavbarLink>\n                <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n              </NavbarNav>\n            </NavbarCollapse>\n          </Container>\n        </Navbar>'
    )
  );
}));

stories.add('Reversed', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Navbar',
      storyName: 'Reversed',
      description: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. '
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: {
          React: _react2.default,
          Navbar: _components.Navbar,
          NavbarNav: _components.NavbarNav,
          Input: _components.Input,
          LanguageSwitcher: _components.LanguageSwitcher,
          NavbarLink: _components.NavbarLink,
          Icon: _components.Icon,
          Container: _components.Container,
          NavbarCollapse: _components.NavbarCollapse,
          NavbarBrand: _components.NavbarBrand,
          Image: _components.Image
        }
      },
      '< Navbar expand="md">\n    <Container>\n          <NavbarCollapse>\n            <NavbarNav>\n              <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n              <NavbarLink><Icon icon="fa fa-stack-overflow" /></NavbarLink>\n              <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>\n              <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>\n              <NavbarLink>Blog</NavbarLink>\n              <NavbarLink>Vote</NavbarLink>\n              <NavbarLink>Contribute</NavbarLink>\n              <NavbarLink>Documentation</NavbarLink>\n            </NavbarNav>\n            <NavbarNav alignItems="right">\n              <NavbarBrand>\n                <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo" />\n              </NavbarBrand>\n            </NavbarNav>\n          </NavbarCollapse>\n        </Container>\n</Navbar>'
    )
  );
}));

stories.add('Via children', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Navbar',
      storyName: 'Via children',
      description: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. '
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: {
          React: _react2.default,
          Navbar: _components.Navbar,
          NavbarNav: _components.NavbarNav,
          Input: _components.Input,
          LanguageSwitcher: _components.LanguageSwitcher,
          NavbarLink: _components.NavbarLink,
          Icon: _components.Icon,
          Container: _components.Container,
          NavbarCollapse: _components.NavbarCollapse,
          NavbarBrand: _components.NavbarBrand,
          Image: _components.Image
        }
      },
      '<Navbar expand="md">\n    <NavbarCollapse>\n        <NavbarBrand>\n            <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo"/>\n        </NavbarBrand>\n        <NavbarNav alignItems="right">\n            <NavbarLink>Documentation</NavbarLink>\n            <NavbarLink>Contribute</NavbarLink>\n            <NavbarLink>Vote</NavbarLink>\n            <NavbarLink>Blog</NavbarLink>\n            <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>\n            <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>\n            <NavbarLink><Icon icon="fa fa-stack-overflow"/></NavbarLink>\n            <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n        </NavbarNav>\n    </NavbarCollapse>\n</Navbar>'
    )
  );
}));

stories.add('With search', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Navbar',
      storyName: 'With search',
      description: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. '
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: {
          React: _react2.default,
          Navbar: _components.Navbar,
          NavbarNav: _components.NavbarNav,
          Input: _components.Input,
          LanguageSwitcher: _components.LanguageSwitcher,
          NavbarLink: _components.NavbarLink,
          Icon: _components.Icon,
          Container: _components.Container,
          NavbarCollapse: _components.NavbarCollapse,
          NavbarBrand: _components.NavbarBrand,
          Image: _components.Image
        }
      },
      '<Navbar \n    transparent={false} fixed={false} brandName="Front10" \n    brandLink="https://front10.com" brandLogo="images/logo/front10.png" expand="md"\n>\n    <NavbarNav alignItems="right">\n        <Input placeholder="Search" icon="fa fa-search" />\n    </NavbarNav>\n</Navbar>'
    )
  );
}));

stories.add('With user avatar', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Navbar',
      storyName: 'With user avatar',
      description: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. '
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      {
        scope: {
          React: _react2.default,
          Navbar: _components.Navbar,
          NavbarNav: _components.NavbarNav,
          Input: _components.Input,
          LanguageSwitcher: _components.LanguageSwitcher,
          NavbarLink: _components.NavbarLink,
          Icon: _components.Icon,
          Container: _components.Container,
          NavbarCollapse: _components.NavbarCollapse,
          NavbarBrand: _components.NavbarBrand,
          Image: _components.Image
        }
      },
      '<Navbar expand="md">\n    <NavbarCollapse>\n        <NavbarBrand>\n            <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo"/>\n        </NavbarBrand>\n        <NavbarNav alignItems="right">\n            <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>\n            <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>\n            <NavbarLink><Icon icon="fa fa-stack-overflow"/></NavbarLink>\n            <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n            <NavbarLink href="https://twitter.com/ycgarrido">\n                <Image className="mr-2" rounded width="30" src="https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg"/>\n                  ycgarrido\n            </NavbarLink>\n        </NavbarNav>\n    </NavbarCollapse>\n</Navbar>'
    )
  );
}));