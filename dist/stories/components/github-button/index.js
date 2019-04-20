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

var _README = require('../../../components/GithubButton/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/GithubButton', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Github Buttons',
      description: 'Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, GithubButton: _components.GithubButton } },
      '<GithubButton username="front10" repository="landing-page-book" btnType="star" btnText="stars" btnRounded/>'
    )
  );
}));

stories.add('All', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Github Buttons',
      storyName: 'All',
      description: 'Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, GithubButton: _components.GithubButton } },
      '<React.Fragment>\n    <div className="mb-3">\n        <GithubButton username="front10" repository="landing-page-book" btnType="fork"btnText="Fork"/>\n    </div>\n    <div className="mb-3">\n        <GithubButton username="front10" repository="landing-page-book" btnType="follow" btnText="Follow"/>\n    </div>\n    <div className="mb-3">\n        <GithubButton username="front10" repository="landing-page-book" btnType="star" btnText="Stars"/>\n    </div>\n    <div className="mb-3">\n        <GithubButton username="front10" repository="landing-page-book" btnType="watch" btnText="Watch"/>\n    </div>\n    <div className="mb-3">\n        <GithubButton username="front10" repository="landing-page-book" btnType="issue" btnText="Issues"/>\n    </div>\n    <div>\n        <GithubButton username="front10" repository="landing-page-book" btnType="download" btnText="Download" showCounter={false}/>\n    </div>\n</React.Fragment>'
    )
  );
}));