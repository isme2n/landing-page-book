'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/Card/README.md');

var _README2 = _interopRequireDefault(_README);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Elements/Card', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Card',
      description: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-md-6', scope: { React: _react2.default, Card: _components.Card } },
      '<Card\n    title="Sky"\n    summary="Sky is often defined as the space in which the stars move and by visual effect seems to surround the Earth. In astronomy, sky is synonymous with the celestial sphere: an imaginary vault on which the Sun, stars, planets and the Moon are distributed."\n    image="images/card/image1.jpg"\n/>'
    )
  );
}));
stories.add('With Subtitle', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Card',
      storyName: 'With Subtitle',
      description: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-md-6', scope: { React: _react2.default, Card: _components.Card } },
      '<Card\n    title="Neil Armstrong"\n    subTitle="First man in the moon"\n    summary="American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor."\n    image="images/card/image2.jpg"\n/>'
    )
  );
}));
stories.add('Only summary', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Card',
      storyName: 'Only summary',
      description: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-md-6', scope: { React: _react2.default, Card: _components.Card } },
      '<Card\n    shadow\n    summary="The galaxy of the Milky Way, or simply the Milky Way, is a spiral galaxy where the solar system is located and in turn the Earth is located. According to the observations, it has a mass of 10\xB9\xB2 solar masses and is a barred spiral."\n    image="images/card/image3.jpg"\n/>'
    )
  );
}));
stories.add('With Footer', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Card',
      storyName: 'With Footer',
      description: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-sm-6', scope: { React: _react2.default, Row: _components.Row, Link: _components.Link, Column: _components.Column, Card: _components.Card } },
      '<Card\n        title="Saturn"\n        summary="Saturn is the sixth planet in the solar system, the second in size and mass after Jupiter and the only one with a ring system visible from Earth. Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets."\n        image="images/card/image4.jpg"\n    >\n        <Row>\n            <Column className="text-left">\n                <Link href="https://es.wikipedia.org/wiki/Saturno_(planeta)" target="_blank">\n                  See more\n                </Link>\n            </Column>\n            <Column className="text-right">\n                <span className="text-muted">21 views</span>\n            </Column>\n        </Row>\n    </Card>'
    )
  );
}));
stories.add('Floating image', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Card',
      storyName: 'Floating image',
      description: 'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { colColumn: 'col-12 col-sm-6', scope: { React: _react2.default, Card: _components.Card }, skip: 3 },
      '<Card\n    borderNone\n    summaryTextAlign="center"\n    summary="A star is a luminous plasma sphere that maintains its shape thanks to its own gravity. The closest star to Earth is the Sun."\n    image="images/card/image5.jpg"\n/>'
    )
  );
}));