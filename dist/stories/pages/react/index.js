'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _code = require('../../mock/pages/react/code');

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Pages', module);

stories.add('React', function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    { theme: 'react' },
    _react2.default.createElement(
      'div',
      { className: 'ReactPage' },
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
              { href: 'https://reactjs.org/' },
              _react2.default.createElement(_components.Image, {
                width: '24',
                src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                alt: 'React logo'
              }),
              'React'
            ),
            _react2.default.createElement(
              _components.NavbarNav,
              null,
              _react2.default.createElement(
                _components.NavbarLink,
                { href: 'https://reactjs.org/docs/getting-started.html' },
                'Docs'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: 'https://reactjs.org/tutorial/tutorial.html' },
                'Tutorial'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: 'https://reactjs.org/community/support.html' },
                'Community'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: 'https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html' },
                'Blog'
              )
            ),
            _react2.default.createElement(
              _components.NavbarNav,
              { alignItems: 'right' },
              _react2.default.createElement(_components.Input, {
                placeholder: 'Search docs',
                className: 'ReactPage__Navbar__SearchInput',
                icon: 'fa fa-search'
              }),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                'v16.4.2'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                'GitHub'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                null,
                _react2.default.createElement(_components.Icon, { icon: 'fa fa-share' })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _components.Hero,
        {
          particles: false,
          backgroundColor: '#282c34',
          isFixed: false,
          image: 'images/pages/react/logo.png',
          minHeight: '55vh'
        },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.Row,
            { className: 'pb-2' },
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__MainHeader' },
                'React'
              ),
              _react2.default.createElement(
                _components.Header,
                { className: 'text-white ReactPage__MainSubHeader' },
                'A JavaScript library for building user interfaces'
              )
            )
          ),
          _react2.default.createElement(
            _components.Row,
            { className: 'pt-5' },
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(
                _components.Button,
                { className: 'btn-lg Hero__Button' },
                'Get Started'
              ),
              _react2.default.createElement(
                _components.Button,
                { className: 'btn-lg Hero__ButtonTutorial' },
                'Take the Tutorial ',
                _react2.default.createElement(_components.Icon, { icon: 'fa fa-chevron-right' })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _components.Container,
        null,
        _react2.default.createElement(
          'div',
          { className: 'mt-5 pt-2 mb-5' },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__FeaturesHeader' },
                'Declarative'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'Declarative views make your code more predictable and easier to debug.'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__FeaturesHeader' },
                'Component-Base'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'Build encapsulated components that manage their own state, then compose them to make complex UIs.'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__FeaturesHeader' },
                'Learn Once, Write Anywhere'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'We don\u2019t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'React can also render on the server using Node and power mobile apps using',
                ' ',
                _react2.default.createElement(
                  _components.Link,
                  {
                    className: 'ReactPage__FeaturesSummary__ReacNativeLink',
                    href: 'https://facebook.github.io/react-native/'
                  },
                  'React Native'
                ),
                '.'
              )
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'mt-5' },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__ExampleHeader' },
                'A Simple Component'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'React components implement a ',
                _react2.default.createElement(
                  'code',
                  null,
                  'render()'
                ),
                ' method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by ',
                _react2.default.createElement(
                  'code',
                  null,
                  'render()'
                ),
                ' via',
                ' ',
                _react2.default.createElement(
                  'code',
                  null,
                  'this.props'
                ),
                '.'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                _react2.default.createElement(
                  'b',
                  null,
                  'JSX is optional and not required to use React.'
                ),
                ' Try the',
                ' ',
                _react2.default.createElement(
                  _components.Link,
                  {
                    className: 'ReactPage__FeaturesSummary__ReacNativeLink',
                    href: 'https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA'
                  },
                  'Babel REPL'
                ),
                ' ',
                'to see the raw JavaScript code produced by the JSX compilation step.'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-8' },
              _react2.default.createElement(_components.Code, {
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                theme: 'oceanic-next',
                languageCode: 'jsx',
                code: _code.simpleComponentCodeExample
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-5' },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__ExampleHeader' },
                'A Stateful Component'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'In addition to taking input data (accessed via ',
                _react2.default.createElement(
                  'code',
                  null,
                  'this.props'
                ),
                '), a component can maintain internal state data (accessed via',
                ' ',
                _react2.default.createElement(
                  'code',
                  null,
                  'this.state'
                ),
                '). When a component\u2019s state data changes, the rendered markup will be updated by re-invoking ',
                _react2.default.createElement(
                  'code',
                  null,
                  'render()'
                ),
                '.'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-8' },
              _react2.default.createElement(_components.Code, {
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                theme: 'oceanic-next',
                languageCode: 'jsx',
                code: _code.statefulComponentCodeExample
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-5' },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__ExampleHeader' },
                'An Application'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'Using ',
                _react2.default.createElement(
                  'code',
                  null,
                  'props'
                ),
                ' and ',
                _react2.default.createElement(
                  'code',
                  null,
                  'state'
                ),
                ', we can put together a small Todo application. This example uses ',
                _react2.default.createElement(
                  'code',
                  null,
                  'state'
                ),
                ' to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-8' },
              _react2.default.createElement(_components.Code, {
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                theme: 'oceanic-next',
                languageCode: 'jsx',
                code: _code.anApplicationCodeExample
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-5' },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(
                _components.Header,
                { className: 'ReactPage__ExampleHeader' },
                'A Component Using External Plugins'
              ),
              _react2.default.createElement(
                'p',
                { className: 'ReactPage__FeaturesSummary pt-3' },
                'React is flexible and provides hooks that allow you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the ',
                _react2.default.createElement(
                  'code',
                  null,
                  '<textarea />'
                ),
                '\u2019s value in real time.'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-8' },
              _react2.default.createElement(_components.Code, {
                showheader: false,
                showfooter: false,
                lineNumbers: false,
                readOnly: true,
                theme: 'oceanic-next',
                languageCode: 'jsx',
                code: _code.aComponentUsingExternalPluginsCodeExample
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt-5' },
        _react2.default.createElement(
          _components.Hero,
          {
            particles: false,
            overlayColor: '#282c34',
            isFixed: false,
            opacity: 1,
            minHeight: '150px'
          },
          _react2.default.createElement(
            _components.Container,
            null,
            _react2.default.createElement(
              _components.Row,
              { className: 'pt-5 pb-5' },
              _react2.default.createElement(
                _components.Column,
                null,
                _react2.default.createElement(
                  _components.Button,
                  { className: 'btn-lg Hero__Button' },
                  'Get Started'
                ),
                _react2.default.createElement(
                  _components.Button,
                  { className: 'btn-lg Hero__ButtonTutorial' },
                  'Take the Tutorial ',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-chevron-right' })
                )
              )
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
                { className: 'col text-left' },
                _react2.default.createElement(
                  _components.Link,
                  { href: 'https://code.facebook.com/projects/' },
                  _react2.default.createElement(_components.Image, {
                    width: '160',
                    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABaCAMAAADQMV5DAAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA9HRSTlMAG7O/KQR48v/+hA5W2+piObG8RBSU/fehIG7stSWl9nkIStbYU0XN4FUvrHoDcOi3OAuLmheOmRVm4rtBNbDucsnfXlDUJpuGB3vtM3+mHBKMEF3FSDzmaMLpWN7PRh2XkAaAo3X4riuiBctS3WAxtvFx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',
                    alt: 'Fcebook Open source'
                  })
                )
              ),
              _react2.default.createElement(
                _components.Column,
                { className: 'col text-left' },
                _react2.default.createElement(
                  _components.Header,
                  { className: 'Header' },
                  'DOCS'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/docs/getting-started.html' },
                  'Installation'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/docs/hello-world.html' },
                  'Main Concepts'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/docs/accessibility.html' },
                  'Advanced Guides'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/docs/react-api.html' },
                  'API Reference'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/docs/how-to-contribute.html' },
                  'Contributing'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/docs/faq-ajax.html' },
                  'FAQ'
                )
              ),
              _react2.default.createElement(
                _components.Column,
                { className: 'col text-left' },
                _react2.default.createElement(
                  _components.Header,
                  { className: 'Header' },
                  'CHANNELS'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://github.com/facebook/react' },
                  'GitHub',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'http://stackoverflow.com/questions/tagged/reactjs' },
                  'Stack Overflow',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://discuss.reactjs.org/' },
                  'Discussion Forum',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://discord.gg/0ZcbPKXt5bZjGY5n' },
                  'Reactiflux Chat',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://dev.to/t/react' },
                  'DEV Community',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://www.facebook.com/react' },
                  'Facebook',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://twitter.com/reactjs' },
                  'Twitter',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                )
              )
            ),
            _react2.default.createElement(
              _components.Row,
              { className: 'row mt-5' },
              _react2.default.createElement(_components.Column, { className: 'col text-left' }),
              _react2.default.createElement(
                _components.Column,
                { className: 'col text-left' },
                _react2.default.createElement(
                  _components.Header,
                  { className: 'Header' },
                  'COMMUNITY'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/community/support.html' },
                  'Community Resources'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/community/debugging-tools.html' },
                  'Tools'
                )
              ),
              _react2.default.createElement(
                _components.Column,
                { className: 'col text-left' },
                _react2.default.createElement(
                  _components.Header,
                  { className: 'Header' },
                  'MORE'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/tutorial/tutorial.html' },
                  'Tutorial'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/blog/' },
                  'Blog'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'https://reactjs.org/acknowledgements.html' },
                  'Acknowledgements'
                ),
                _react2.default.createElement(
                  _components.Link,
                  { className: 'd-block', href: 'http://facebook.github.io/react-native/' },
                  'React Native',
                  _react2.default.createElement(_components.Icon, { icon: 'fa fa-share-square-o', className: 'ml-1' })
                )
              )
            )
          )
        )
      )
    )
  );
});