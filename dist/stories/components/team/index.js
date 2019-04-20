'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _components = require('../../../components');

var _README = require('../../../components/Team/README.md');

var _README2 = _interopRequireDefault(_README);

var _team = require('../../mock/components/team');

var _team2 = _interopRequireDefault(_team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/Team', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Team',
      description: 'Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Team: _components.Team } },
      '<Team members={' + JSON.stringify(_team2.default, null, 8) + '} />'
    )
  );
}));

stories.add('Top background', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Team',
      storyName: 'Top background',
      description: 'Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Team: _components.Team } },
      '<Team\n    topColor="#E47070"\n    members={' + JSON.stringify(_team2.default, null, 8) + '}\n  />'
    )
  );
}));

stories.add('With shadow', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Team',
      storyName: 'With shadow',
      description: 'Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Team: _components.Team } },
      '<Team \n    shadow\n    topColor="#E47070" \n    members={' + JSON.stringify(_team2.default, null, 8) + '}\n/>'
    )
  );
}));

stories.add('With image shadow', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Team',
      storyName: 'With image shadow',
      description: 'Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, Team: _components.Team } },
      '<Team\n    imageShadow\n    topColor="#E47070"\n    members={' + JSON.stringify(_team2.default, null, 8) + '}\n/>'
    )
  );
}));