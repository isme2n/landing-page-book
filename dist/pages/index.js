'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _gatsbyLink = require('gatsby-link');

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _main = require('../gatsby-layouts/main');

var _main2 = _interopRequireDefault(_main);

var _Container = require('../components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _slider = require('../stories/mock/components/data/slider.json');

var _slider2 = _interopRequireDefault(_slider);

var _team = require('../stories/mock/components/data/team.json');

var _team2 = _interopRequireDefault(_team);

var _features = require('../stories/mock/components/data/features.json');

var _features2 = _interopRequireDefault(_features);

var _particles = require('../stories/mock/components/data/particles.json');

var _particles2 = _interopRequireDefault(_particles);

var _build = require('../stories/mock/components/data/build.json');

var _build2 = _interopRequireDefault(_build);

var _backers = require('../stories/mock/components/data/backers.json');

var _backers2 = _interopRequireDefault(_backers);

var _carousel = require('../stories/mock/components/data/carousel.json');

var _carousel2 = _interopRequireDefault(_carousel);

var _code = require('../stories/mock/components/data/code');

require('slick-carousel/slick/slick.css');

require('slick-carousel/slick/slick-theme.css');

require('codemirror/theme/oceanic-next.css');

var _hero = require('../stories/mock/components/data/hero');

var _hero2 = _interopRequireDefault(_hero);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexPage = function IndexPage() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _main2.default,
      null,
      _react2.default.createElement(
        _components.Hero,
        { opacity: 1, overlayColor: '#212529', particlesParams: _particles2.default },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_components.Image, {
            src: 'images/logo/front10.png',
            rounded: true,
            width: '160',
            alt: 'Front10 logo',
            className: 'main-logo'
          }),
          _react2.default.createElement(
            _components.Header,
            { textAlign: 'center', className: 'main-header' },
            'Landing Page Book'
          ),
          _react2.default.createElement(
            _components.Header,
            { textAlign: 'center', className: 'main-subheader', type: 'h2' },
            'React components to build!'
          ),
          _react2.default.createElement(
            'div',
            { className: 'mt-5' },
            _react2.default.createElement(
              _gatsbyLink2.default,
              { className: 'btn btn-primary btn-started', to: '/components' },
              'Explore'
            ),
            _react2.default.createElement(_components.GithubButton, {
              type: 'star',
              text: 'Stars',
              username: 'front10',
              repository: 'landing-page-book'
            })
          ),
          _react2.default.createElement(_hero2.default, null)
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { bgColor: 'light' },
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center' },
          _react2.default.createElement(_components.Gif, { autoplay: true, image: 'images/demo/code.gif' })
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { subTitle: 'Landing page book is a scalable choice for developers', title: 'FEATURES' },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_components.Features, {
            columnClassName: 'col-12 col-md-3 col-sm-6 blue-text',
            features: _features2.default,
            imageCircle: false,
            showSubtitle: true,
            featureBorderNone: true
          })
        ),
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center' },
          _react2.default.createElement(
            _gatsbyLink2.default,
            { className: 'btn btn-primary btn-started', to: '/components' },
            'Explore'
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { title: 'AT A GLANCE', subTitle: 'Some of the components', bgColor: 'light' },
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center' },
          _react2.default.createElement(
            _reactSlick2.default,
            _carousel2.default,
            _slider2.default.map(function (item) {
              return _react2.default.createElement(
                'div',
                { key: item.name },
                _react2.default.createElement(
                  _components.Link,
                  { href: (0, _gatsbyLink.withPrefix)(item.link) },
                  _react2.default.createElement(_components.Image, { src: item.image, alt: 'Navigation', width: '100' }),
                  _react2.default.createElement(
                    _components.Header,
                    { className: 'mt-3 component-link text-center', type: 'h6' },
                    item.name
                  )
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center mt-5' },
          _react2.default.createElement(
            _gatsbyLink2.default,
            { className: 'btn btn-primary btn-started', to: '/components' },
            'Explore'
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { subTitle: 'Don\'t try this at home ;)', title: 'AN EXAMPLE' },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col col-md-12' },
              _react2.default.createElement(
                'div',
                { className: 'text-center' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Let\'s import the HERO component'
                )
              ),
              _react2.default.createElement(_components.Code, {
                readOnly: true,
                theme: 'oceanic-next',
                languageCode: 'jsx',
                code: _code.importThemes,
                showheader: false,
                showfooter: false,
                lineNumbers: true
              })
            )
          ),
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col col-md-6 mt-5 code-secondary' },
              _react2.default.createElement(
                'div',
                { className: 'text-center' },
                _react2.default.createElement(
                  'p',
                  null,
                  'An example used to create a beautiful Hero component'
                )
              ),
              _react2.default.createElement(_components.Code, {
                readOnly: true,
                theme: 'oceanic-next',
                languageCode: 'jsx',
                code: _code.navBarCode,
                showheader: false,
                showfooter: false,
                lineNumbers: true
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col col-md-6 mt-5' },
              _react2.default.createElement(
                'div',
                { className: 'text-center' },
                _react2.default.createElement(
                  'p',
                  null,
                  'It\'s that easy to have a beautiful Hero'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'mt-3' },
                _react2.default.createElement(
                  _components.Hero,
                  {
                    backgroundColor: '#212529',
                    minHeight: '350px',
                    image: 'images/hero/map-image.png',
                    particlesParams: {
                      particles: {
                        shape: {
                          type: 'star',
                          stroke: {
                            width: 1,
                            color: '#fff'
                          }
                        },
                        line_linked: {
                          enable: false
                        }
                      }
                    }
                  },
                  _react2.default.createElement(
                    _Container2.default,
                    null,
                    _react2.default.createElement(
                      _components.Header,
                      { textAlign: 'center', className: 'main-header', type: 'h2' },
                      'Front10'
                    ),
                    _react2.default.createElement(
                      _components.Header,
                      { textAlign: 'center', className: 'main-subheader', type: 'h3' },
                      'Rewriting the world with React'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center mt-5' },
          _react2.default.createElement(
            _gatsbyLink2.default,
            { className: 'btn btn-primary btn-started', to: '/components' },
            'Explore'
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        {
          title: 'THEMING',
          subTitle: ' Change the appearance of the components using standard CSS variables',
          bgColor: 'light'
        },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(_components.Gif, { autoplay: true, image: 'images/demo/themes.gif' })
            )
          )
        ),
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center mt-5' },
          _react2.default.createElement(
            _gatsbyLink2.default,
            { className: 'btn btn-primary btn-started', to: '/components' },
            'Explore'
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { subTitle: 'Used tecnologies and frameworks', title: 'BUILD WITH' },
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center BuildWith' },
          _react2.default.createElement(_components.BuiltWith, { gray: true, companies: _build2.default })
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { subTitle: 'These are our members', title: 'TEAM', bgColor: 'light' },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_components.Team, { memberBorderNone: true, members: _team2.default, socials: ['linkedin', 'twitter'] })
        ),
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center' },
          _react2.default.createElement(
            _gatsbyLink2.default,
            { className: 'btn btn-primary btn-started', to: '/components' },
            'Explore'
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { subTitle: 'We are very happy to help ;)', title: 'FEEDBACK AND SUPPORT' },
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center BuildWith' },
          _react2.default.createElement(_components.Image, {
            src: 'images/support/maintenance.svg',
            alt: 'Maintenance',
            width: '100',
            className: 'ml-3 mr-3'
          }),
          _react2.default.createElement(_components.Image, {
            src: 'images/support/happy.svg',
            alt: 'Maintenance',
            width: '100',
            className: 'ml-3 mr-3'
          }),
          _react2.default.createElement(
            'p',
            { className: 'mt-3' },
            'For feedback, issues or if you want us to include ',
            _react2.default.createElement(
              'i',
              null,
              '**new components**'
            ),
            ' please',
            ' ',
            _react2.default.createElement(
              _components.Link,
              { href: 'https://github.com/front10/landing-page-book/issues', target: '_blank' },
              'click here'
            ),
            '.'
          )
        )
      ),
      _react2.default.createElement(
        _components.Section,
        { subTitle: 'Who donates us', title: 'BACKERS', bgColor: 'light' },
        _react2.default.createElement(
          _Container2.default,
          { className: 'text-center' },
          _react2.default.createElement(_components.Backers, { backers: _backers2.default, imageBordered: false })
        )
      )
    )
  );
};
// eslint-enable react/no-unescaped-entities

// theme for code

// core
exports.default = IndexPage;