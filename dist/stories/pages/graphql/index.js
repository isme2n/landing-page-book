'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _graphqlSyntaxHighlighterReact = require('graphql-syntax-highlighter-react');

var _reactJsonPretty = require('react-json-pretty');

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var frameworks = [{
  image: 'https://graphql.org/users/logos/facebook.png'
}, {
  image: 'https://graphql.org/users/logos/github.png'
}, {
  image: 'https://graphql.org/users/logos/pinterest.png'
}, {
  image: 'https://graphql.org/users/logos/intuit.png'
}, {
  image: 'https://graphql.org/users/logos/coursera.png'
}, {
  image: 'https://graphql.org/users/logos/shopify.png'
}];

var graphqlJson = {
  hero: {
    name: 'Luke Skywalker',
    height: 1.72,
    mass: 77
  }
};
var HerographqlResponseJson = {
  project: {
    tagline: 'A query language for APIs'
  }
};

var stories = (0, _react3.storiesOf)('Pages', module);

stories.add('GraphQl', function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    { theme: 'graphql' },
    _react2.default.createElement(
      'div',
      { className: 'GraphQL__page' },
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
              _components.NavbarNav,
              { alignItems: 'left' },
              _react2.default.createElement(
                _components.NavbarLink,
                { href: '#' },
                'Learn'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: '#' },
                'Code'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: '#' },
                'Community'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: '#' },
                'Blog'
              ),
              _react2.default.createElement(
                _components.NavbarLink,
                { href: '#' },
                'Spec'
              )
            ),
            _react2.default.createElement(
              _components.NavbarNav,
              { alignItems: 'right' },
              _react2.default.createElement(_components.Input, {
                icon: 'fa fa-search text-white',
                className: 'Nav_search_input right',
                placeholder: 'Search docs...'
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        _components.Hero,
        {
          particles: false,
          image: 'images/pages/graphql/hero.png',
          backgroundColor: '#1D232A',
          subHeaderPosition: 'top',
          minHeight: '60vh'
        },
        _react2.default.createElement(
          _components.Container,
          null,
          _react2.default.createElement(
            _components.Row,
            { className: 'first-hero-row justify-content-center' },
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-3' },
              _react2.default.createElement(_components.Image, {
                className: 'graphql-hero-logo',
                alt: 'GraphQL',
                src: 'https://graphql.org/img/logo.svg',
                width: '90px',
                height: '90px'
              }),
              _react2.default.createElement(
                'h2',
                { className: 'Hero__GraphQL_title' },
                'GraphQL'
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-3' },
              _react2.default.createElement(
                'h6',
                { className: 'Hero__code_header' },
                'Describe your data'
              ),
              _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                className: 'GraphqlCodeBlock',
                queryBody: 'type Project { name: String, tagline: String } '
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-3' },
              _react2.default.createElement(
                'h6',
                { className: 'Hero__code_header' },
                'Ask for what you want'
              ),
              _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                className: 'GraphqlCodeBlock',
                queryBody: '{ project(name: $Name) {  tagline  } }'
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-sm-12 col-md-3' },
              _react2.default.createElement(
                'h6',
                { className: 'Hero__code_header' },
                'Get predictable results'
              ),
              _react2.default.createElement(_reactJsonPretty2.default, { id: 'json-pretty', className: 'jsonPretty', json: HerographqlResponseJson })
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
                { type: 'button', className: 'btn btn-outline-light Hero__btn mr-2 btn-hero' },
                'Get Started'
              ),
              _react2.default.createElement(
                _components.Button,
                { type: 'button', className: 'btn btn-outline-light Hero__btn ml-2 btn-hero' },
                'Learn More'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt-5' },
        _react2.default.createElement(
          _components.Section,
          { title: 'A query language for your API' },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-8' },
              _react2.default.createElement(
                'p',
                null,
                'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.'
              )
            )
          ),
          _react2.default.createElement(
            _components.Row,
            { className: 'row mt-5 mb-5 Code_section vertical' },
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(
                'div',
                { className: 'Code_container' },
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock',
                  queryBody: '{ hero { name height mass } }'
                }),
                _react2.default.createElement(_reactJsonPretty2.default, { id: 'json-pretty', json: graphqlJson })
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(_components.TextBox, {
                className: 'TextBox',
                title: 'Ask for what you need, get exactly that',
                text: 'Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.'
              })
            )
          )
        ),
        _react2.default.createElement(
          _components.Section,
          { gray: true },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              { className: 'col12 col-md-4' },
              _react2.default.createElement(_components.TextBox, {
                className: 'TextBox',
                title: 'Get many resources in a single request',
                text: 'GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.'
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(_components.Image, {
                alt: 'Many resources in single request',
                src: 'images/pages/graphql/code.png',
                width: '600px',
                height: 'auto'
              })
            )
          )
        ),
        _react2.default.createElement(
          _components.Section,
          null,
          _react2.default.createElement(
            _components.Row,
            { className: 'row mt-5 mb-5 Code_section_vertical' },
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-6' },
              _react2.default.createElement(
                'div',
                { className: 'Code_container' },
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock',
                  queryBody: '{ hero { name height mass } }'
                }),
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock border_separator',
                  queryBody: 'type Query { hero: Character } type Character { name: String friends: [Character] homeWorld: Planet species: Species } type Planet { name: String climate: String } type Species { name: String lifespan: Int origin: Planet }'
                })
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(_components.TextBox, {
                className: 'TextBox',
                title: 'Get many resources in a single request',
                text: 'GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.'
              })
            )
          )
        ),
        _react2.default.createElement(
          _components.Section,
          {
            className: 'Section__background-dark',
            title: 'Move faster with powerful developer tools',
            contentClassName: 'Section__content-bottom'
          },
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(_components.Column, null),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-6' },
              _react2.default.createElement(
                'p',
                { className: 'Graphql__p' },
                'Know exactly what data you can request from your API without leaving your editor, highlight potential issues before sending a query, and take advantage of improved code intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by leveraging your API\u2019s type system.'
              )
            ),
            _react2.default.createElement(_components.Column, null)
          ),
          _react2.default.createElement(
            _components.Row,
            null,
            _react2.default.createElement(
              _components.Column,
              null,
              _react2.default.createElement(_components.Video, {
                source: 'https://graphql.org/img/graphiql.mp4',
                playing: true,
                loop: true,
                className: 'Video__botton'
              })
            )
          )
        ),
        _react2.default.createElement(
          _components.Section,
          { gray: true },
          _react2.default.createElement(
            _components.Row,
            { className: 'row mt-5 mb-5 Code_section_vertical' },
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-6' },
              _react2.default.createElement(
                'div',
                { className: 'Code_container' },
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock',
                  queryBody: '{ hero { name height mass } }'
                }),
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock border_separator',
                  queryBody: 'type Query { hero: Character } type Character { name: String friends: [Character] homeWorld: Planet species: Species } type Planet { name: String climate: String } type Species { name: String lifespan: Int origin: Planet }'
                })
              )
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(_components.TextBox, {
                className: 'TextBox',
                title: 'Evolve your API without versions',
                text: ' Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools. By using a single evolving version, GraphQL APIs give apps continuous access to new features and encourage cleaner, more maintainable server code.'
              })
            )
          )
        ),
        _react2.default.createElement(
          _components.Section,
          null,
          _react2.default.createElement(
            _components.Row,
            { className: 'row mt-5 mb-5 Code_section_vertical' },
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-4' },
              _react2.default.createElement(_components.TextBox, {
                className: 'TextBox',
                title: 'Bring your own data and code',
                text: 'GraphQL creates a uniform API across your entire application without being limited by a specific storage engine. Write GraphQL APIs that leverage your existing data and code with GraphQL engines available in many languages. You provide functions for each field in the type system, and GraphQL calls them with optimal concurrency.'
              })
            ),
            _react2.default.createElement(
              _components.Column,
              { className: 'col-12 col-md-6' },
              _react2.default.createElement(
                'div',
                { className: 'Code_container' },
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock',
                  queryBody: '{ hero { name height mass } }'
                }),
                _react2.default.createElement(_graphqlSyntaxHighlighterReact.GraphqlCodeBlock, {
                  className: 'GraphqlCodeBlock border_separator',
                  queryBody: 'type Query { hero: Character } type Character { name: String friends: [Character] homeWorld: Planet species: Species } type Planet { name: String climate: String } type Species { name: String lifespan: Int origin: Planet }'
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          _components.Section,
          { gray: true, title: 'Who\u2019s using GraphQL?' },
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
                  'p',
                  null,
                  'Facebook mobile apps have been powered by GraphQL since 2012. A GraphQL spec was open sourced in 2015 and is now available in many environments and used by teams of all sizes.'
                )
              )
            ),
            _react2.default.createElement(
              _components.Row,
              null,
              _react2.default.createElement(
                _components.Column,
                { className: 'text-center' },
                _react2.default.createElement(_components.BuiltWith, { companies: frameworks, className: 'justify-content-center' })
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
                null,
                _react2.default.createElement('img', {
                  src: 'https://graphql.org/img/logo-gray.svg',
                  width: 40,
                  alt: 'GraphQL logo',
                  className: 'float-right'
                })
              ),
              _react2.default.createElement(
                _components.Column,
                null,
                _react2.default.createElement(
                  'ul',
                  { className: 'list-group' },
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item disabled' },
                    'Learn'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Introduction'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Query Language'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Type System'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Execution'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Best Practices'
                  )
                )
              ),
              _react2.default.createElement(
                _components.Column,
                null,
                _react2.default.createElement(
                  'ul',
                  { className: 'list-group' },
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item disabled' },
                    'Code'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Servers'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Clients'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Tools'
                  )
                )
              ),
              _react2.default.createElement(
                _components.Column,
                null,
                _react2.default.createElement(
                  'ul',
                  { className: 'list-group' },
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item disabled' },
                    'Community'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Upcoming Events'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Stack Overflow'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Facebook Group'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Twitter'
                  )
                )
              ),
              _react2.default.createElement(
                _components.Column,
                null,
                _react2.default.createElement(
                  'ul',
                  { className: 'list-group' },
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item disabled' },
                    'More'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'GraphQL Team Blog'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Read the Spec'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'GitHub'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    'Edit this page'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _components.Row,
              { className: 'pt-5' },
              _react2.default.createElement(
                _components.Column,
                null,
                _react2.default.createElement(_components.Copyright, { text: 'Front10, Inc', showAllRightText: false })
              )
            )
          )
        )
      )
    )
  );
});