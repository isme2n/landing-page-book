'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _lastBackers = require('../../mock/pages/webpack/lastBackers');

var _lastBackers2 = _interopRequireDefault(_lastBackers);

var _platinumBackers = require('../../mock/pages/webpack/platinumBackers');

var _platinumBackers2 = _interopRequireDefault(_platinumBackers);

var _code = require('../../mock/pages/webpack/code');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var languages = ['US', 'FR', 'ES', 'DE'];

var customLabels = {
  US: 'English',
  FR: 'Français',
  ES: 'Español',
  DE: 'Deutsch'
};

var stories = (0, _react3.storiesOf)('Pages', module);

stories.add('Webpack', function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    { theme: 'webpack' },
    _react2.default.createElement(
      'div',
      { className: 'WebpackPage' },
      _react2.default.createElement(
        _components.Navbar,
        { expand: 'md' },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.NavbarCollapse,
            null,
            _react2.default.createElement(
              _components.NavbarBrand,
              null,
              _react2.default.createElement(_components.Image, {
                width: '120',
                src: 'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg',
                alt: 'Webpack logo'
              })
            ),
            _react2.default.createElement(
              _components.NavbarNav,
              { alignItems: 'right' },
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                'Documentation'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                'Contribute'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                'Vote'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                'Blog'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                _react2.default.createElement(_components.Icon, { icon: 'fa fa-search' })
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                _react2.default.createElement(_components.Icon, { icon: 'fa fa-github' })
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                _react2.default.createElement(_components.Icon, { icon: 'fa fa-stack-overflow' })
              ),
              _react2.default.createElement(_components.LanguageSwitcher, {
                languages: languages,
                customLabels: customLabels,
                showArrow: false,
                selectedLanguage: 'US'
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        _components.Hero,
        { particles: false, overlayColor: '#383d45', opacity: 1 },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.Header,
            { className: 'text-white' },
            'bundle your scripts'
          ),
          _react2.default.createElement(_components.Image, { src: 'images/pages/webpack/hero.svg', alt: 'Webpack flow' })
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { title: 'Write your code', gray: true },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-md-6' },
              _react2.default.createElement(
                _components.Header,
                { type: 'h6', className: 'mb-4 text-center' },
                _react2.default.createElement(
                  'b',
                  null,
                  'src/index.js'
                )
              ),
              _react2.default.createElement(_components.Code, {
                theme: 'oceanic-next',
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                code: _code.indexCodeExample
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-md-6' },
              _react2.default.createElement(
                _components.Header,
                { type: 'h6', className: 'mb-4 text-center' },
                _react2.default.createElement(
                  'b',
                  null,
                  'src/bar.js'
                )
              ),
              _react2.default.createElement(_components.Code, {
                theme: 'oceanic-next',
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                code: _code.barCodeExample
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { title: 'Bundle with webpack', gray: true },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-md-6' },
              _react2.default.createElement(
                _components.Header,
                { type: 'h6', className: 'mb-4 text-center' },
                _react2.default.createElement(
                  _components.Link,
                  { href: 'https://youtu.be/3Nv9muOkb6k?t=21293' },
                  'Without config'
                ),
                _react2.default.createElement(_components.Link, { href: 'http://savefrom.net/?url=https%3A%2F%2Fyoutu.be%2F3Nv9muOkb6k%3Ft%3D21293&utm_source=chameleon&utm_medium=extensions&utm_campaign=link_modifier' }),
                ' ',
                'or provide custom ',
                _react2.default.createElement(
                  'b',
                  null,
                  'webpack.config.js'
                )
              ),
              _react2.default.createElement(_components.Code, {
                theme: 'oceanic-next',
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                code: _code.configCodeExample
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-md-6' },
              _react2.default.createElement(
                _components.Header,
                { type: 'h6', className: 'mb-4 text-center' },
                _react2.default.createElement(
                  'b',
                  null,
                  'page.html'
                )
              ),
              _react2.default.createElement(_components.Code, {
                theme: 'oceanic-next',
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                languageCode: 'jsx',
                code: _code.pageCodeExample
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 mt-5 text-center' },
              'Then run ',
              _react2.default.createElement(
                'span',
                { className: 'badge badge-light' },
                'webpack'
              ),
              ' on the command-line to create ',
              _react2.default.createElement(
                'span',
                { className: 'badge badge-light' },
                'bundle.js'
              ),
              '.'
            )
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { title: 'It\'s that simple', gray: true },
        _react2.default.createElement(
          _components.Container,
          { className: 'text-center' },
          _react2.default.createElement(
            _components.Link,
            { href: 'https://webpack.js.org/guides/getting-started' },
            'Get Started'
          ),
          ' quickly in our',
          _react2.default.createElement(
            'b',
            null,
            'Guides'
          ),
          ' section, or dig into the',
          ' ',
          _react2.default.createElement(
            _components.Link,
            { href: 'https://webpack.js.org/concepts' },
            'Concepts'
          ),
          ' section for more high-level information on the core notions behind webpack.'
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { title: 'Support the Team' },
        _react2.default.createElement(
          _components.Container,
          { className: 'text-center' },
          _react2.default.createElement(
            'p',
            null,
            'Through contributions, donations, and sponsorship, you allow webpack to thrive. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material!'
          ),
          _react2.default.createElement(
            _components.Header,
            { type: 'h4' },
            ' Latest Sponsors '
          ),
          _react2.default.createElement(
            'p',
            null,
            'The following persons/organizations made their first donation in the last 14 days.'
          ),
          _react2.default.createElement(_components.Backers, { backers: _lastBackers2.default, imageRounded: false, imageBordered: false }),
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-outline-primary mt-3 mb-3' },
            'BECOME A SPONSOR'
          ),
          _react2.default.createElement(
            _components.Header,
            { type: 'h4' },
            ' Platinum Sponsors '
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Platinum Sponsors'
            ),
            ' are those who have pledged $50,000 or more to webpack.'
          ),
          _react2.default.createElement(_components.Backers, { backers: _platinumBackers2.default, imageRounded: false, imageBordered: false }),
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-outline-primary mt-3 mb-3' },
            'BECOME A SPONSOR'
          ),
          _react2.default.createElement(
            _components.Header,
            { type: 'h4' },
            ' Gold Sponsors '
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Gold Sponsors'
            ),
            ' are those who have pledged $10,000 to $50,000 to webpack.'
          ),
          _react2.default.createElement(_components.Backers, { backers: _lastBackers2.default, imageRounded: false, imageBordered: false }),
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-outline-primary mt-3 mb-3' },
            'BECOME A SPONSOR'
          ),
          _react2.default.createElement(
            _components.Header,
            { type: 'h4' },
            ' Silver Sponsors '
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Silver Sponsors'
            ),
            ' are those who have pledged $2,000 to $10,000 to webpack.'
          ),
          _react2.default.createElement(_components.Backers, { backers: _lastBackers2.default, imageRounded: false, imageBordered: false }),
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-outline-primary mt-3 mb-3' },
            'BECOME A SPONSOR'
          ),
          _react2.default.createElement(
            _components.Header,
            { type: 'h4' },
            ' Bronze Sponsors '
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Bronze Sponsors'
            ),
            ' are those who have pledged $200 to $2,000 to webpack.'
          ),
          _react2.default.createElement(_components.Backers, { backers: _lastBackers2.default, imageRounded: false, imageBordered: false }),
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-outline-primary mt-3 mb-3' },
            'BECOME A SPONSOR'
          ),
          _react2.default.createElement(
            _components.Header,
            { type: 'h4' },
            ' Backers '
          ),
          _react2.default.createElement(
            'p',
            null,
            'The following ',
            _react2.default.createElement(
              'b',
              null,
              'Backers'
            ),
            ' are individuals who have contributed various amounts of money in order to help support webpack. Every little bit helps, and we appreciate even the smallest contributions.'
          ),
          _react2.default.createElement(_components.BackersOpenCollective, { collective: 'webpack' }),
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-outline-primary mt-3 mb-3' },
            'BECOME A BACKER'
          )
        )
      ),
      _react2.default.createElement(
        _components.Footer,
        null,
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md-5 text-left' },
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://webpack.js.org/guides/getting-started/' },
                'Get Started'
              ),
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://webpack.js.org/organization/' },
                'Organization'
              ),
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://webpack.js.org/starter-kits/' },
                'Starter Kits'
              ),
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://webpack.js.org/comparison/' },
                'Comparison'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md-2 mt-3 mt-md-0' },
              _react2.default.createElement(_components.Image, {
                src: 'https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg',
                alt: 'Webpack logo',
                width: '30'
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md-5 mt-3 mt-md-0 text-right' },
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://webpack.js.org/glossary/' },
                'Glossary'
              ),
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://webpack.js.org/branding/' },
                'Branding'
              ),
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://gitter.ijsxConfigm/webpack/webpack' },
                'Gitter'
              ),
              _react2.default.createElement(
                _components.Link,
                { className: 'p-2', href: 'https://github.com/webpack/webpack/releases' },
                'Changelog'
              ),
              _react2.default.createElement(_components.Icon, { className: 'p-2', icon: 'fa fa-cc' }),
              _react2.default.createElement(_components.Icon, { className: 'p-2', icon: 'fa fa-male' })
            )
          )
        )
      )
    )
  );
});